using Microsoft.Azure.Devices.Client;
using Microsoft.Azure.Devices.Client.Transport.Mqtt;
using Renci.SshNet;
using Renci.SshNet.Sftp;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace apilims
{
    internal class ModuleBackgroundService : BackgroundService
    {
        private readonly ILogger<ModuleBackgroundService> _logger;
        private DeviceClient _deviceClient;
        private readonly HttpClient _httpClient = new HttpClient();

        public ModuleBackgroundService(ILogger<ModuleBackgroundService> logger)
        {
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            try
            {
                string connectionString = "HostName=UTCMFGIOTHUB.azure-devices.net;DeviceId=UTCMFGIOTACW-01;SharedAccessKey=V/MSVCs3cxKAiaf62ZaLne8cYf54IrHmeAIoTN+DyV8=";
                string loginApiUrl = "http://10.5.12.46:3000/api/login";
                string jobApiUrl = "http://10.5.12.46:3000/job_parameters/getLatestJobValueWithDate";
                string username = "acw@utcl.com";
                string password = "1qaz2wsx";
                string vmAddress = "10.5.12.65";
                string sshUsername = "userappadmin2";
                string sshPassword = "Celebal@2020";
                string jsonFilePath = "/iiotedge/tags.json";

                MqttTransportSettings mqttSetting = new MqttTransportSettings(TransportType.Mqtt_Tcp_Only);
                ITransportSettings[] settings = { mqttSetting };

                // Initialize DeviceClient for IoT Hub communication
                _deviceClient = DeviceClient.CreateFromConnectionString(connectionString, settings);
                await _deviceClient.OpenAsync(stoppingToken);
                _logger.LogInformation("IoT Hub device client initialized.");

                // Retrieve tags from the JSON file stored on the VM
                var tags = LoadTagsFromRemoteJsonFile(vmAddress, sshUsername, sshPassword, jsonFilePath);

                if (tags.Any())
                {
                    while (!stoppingToken.IsCancellationRequested)
                    {
                        var accessToken = await GetAccessTokenAsync(loginApiUrl, username, password, stoppingToken);
                        if (!string.IsNullOrEmpty(accessToken))
                        {
                            await RetrieveJobValuesAsync(jobApiUrl, accessToken, tags, stoppingToken);
                        }
                        await Task.Delay(TimeSpan.FromSeconds(55), stoppingToken); // Wait for 55 seconds
                    }
                }
                else
                {
                    _logger.LogWarning("No tags found in the JSON file.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred during execution.");
            }
        }

        private List<string> LoadTagsFromRemoteJsonFile(string vmAddress, string username, string password, string remoteFilePath)
        {
            try
            {
                using (var sshClient = new SshClient(vmAddress, username, password))
                {
                    sshClient.Connect();
                    _logger.LogInformation($"Connected to SSH {vmAddress}");

                    using (var sftp = new SftpClient(sshClient.ConnectionInfo))
                    {
                        sftp.Connect();
                        _logger.LogInformation($"Connected to SFTP {vmAddress}");

                        using (var remoteFileStream = sftp.OpenRead(remoteFilePath))
                        {
                            using (var reader = new StreamReader(remoteFileStream))
                            {
                                var jsonData = reader.ReadToEnd();
                                var tags = JsonSerializer.Deserialize<Dictionary<string, List<string>>>(jsonData);

                                sftp.Disconnect();
                                sshClient.Disconnect();

                                if (tags != null && tags.ContainsKey("tags"))
                                {
                                    _logger.LogInformation("Tags successfully retrieved from remote JSON file.");
                                    return tags["tags"];
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while retrieving the JSON file from the remote VM.");
            }

            return new List<string>();
        }

        private async Task<string> GetAccessTokenAsync(string loginApiUrl, string username, string password, CancellationToken stoppingToken)
        {
            // Login data
            var loginData = new { username, password };
            var content = new StringContent(JsonSerializer.Serialize(loginData), Encoding.UTF8, "application/json");

            // Send login request
            _logger.LogInformation("Sending POST request to login API.");
            var response = await _httpClient.PostAsync(loginApiUrl, content, stoppingToken);

            if (response.IsSuccessStatusCode)
            {
                var responseData = await response.Content.ReadAsStringAsync();
                var tokenData = JsonSerializer.Deserialize<Dictionary<string, string>>(responseData);

                if (tokenData != null && tokenData.TryGetValue("access", out string accessToken))
                {
                    _logger.LogInformation("Login successful. Access token retrieved.");
                    return accessToken;
                }
            }

            _logger.LogWarning("Failed to retrieve access token. Status code: {statusCode}", response.StatusCode);
            return null;
        }

        private async Task RetrieveJobValuesAsync(string jobApiUrl, string accessToken, List<string> tags, CancellationToken stoppingToken)
        {
            // Request data with tags
            var requestData = new { tags };
            var content = new StringContent(JsonSerializer.Serialize(requestData), Encoding.UTF8, "application/json");

            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            _logger.LogInformation("Sending POST request to retrieve job values for tags: {tags}", string.Join(", ", tags));
            var response = await _httpClient.PostAsync(jobApiUrl, content, stoppingToken);

            if (response.IsSuccessStatusCode)
            {
                var responseData = await response.Content.ReadAsStringAsync();
                var jobValues = JsonSerializer.Deserialize<Dictionary<string, object>>(responseData);

                _logger.LogInformation("Tag data successfully retrieved from API: {jobValues}", JsonSerializer.Serialize(jobValues));

                // Transform the data into the desired format
                var transformedData = ((JsonElement)jobValues["result"]).EnumerateArray().Select(jv => new
                {
                    DisplayName = jv.GetProperty("parameter_uid").GetString(),
                    Value = new
                    {
                        Value = jv.GetProperty("job_value").ValueKind == JsonValueKind.Number 
                            ? (object)jv.GetProperty("job_value").GetDecimal() 
                            : (object)(jv.GetProperty("job_value").GetString() ?? "NA"),  // Use "NA" if null

                        ServerTimestamp = jv.GetProperty("sample_collection_date").GetString() ?? "NA"  // Use "NA" if null
                    }
                }).ToList();

                // Send transformed data to IoT Hub
                var message = new Message(Encoding.UTF8.GetBytes(JsonSerializer.Serialize(transformedData)));
                await _deviceClient.SendEventAsync(message, stoppingToken);
                _logger.LogInformation("Transformed job values sent to IoT Hub successfully. Data: {transformedData}", JsonSerializer.Serialize(transformedData));
            }
            else
            {
                _logger.LogWarning("Failed to retrieve job values. Status code: {statusCode}", response.StatusCode);
            }
        }
    }
}