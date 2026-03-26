const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

async function getKeyValutSecret(secretName) {
  const credential = new DefaultAzureCredential();
  const url = `https://utclmfgiiot-keyvault.vault.azure.net/`;

  const client = new SecretClient(url, credential);

  // const secretName = "Password1";
  const latestSecret = await client.getSecret(secretName);
  console.log(latestSecret);
  return latestSecret?.value;
}

module.exports.getKeyValutSecret = getKeyValutSecret;
