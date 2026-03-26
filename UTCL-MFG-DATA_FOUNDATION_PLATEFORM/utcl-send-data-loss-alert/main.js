const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const axios = require("axios");
const qs = require("qs");
const moment = require('moment-timezone');
require('dotenv').config();

// Initialize AWS DynamoDB client with hardcoded credentials
const client = new DynamoDBClient({
    region: 'ap-south-1',
});

// Get recipients from environment variables
const recipients = process.env.RECIPIENTS.split(',').map(email => email.trim());

// Function to get items from DynamoDB
async function getItems() {
    const params = {
        TableName: 'opcua_endpoint_status'
    };

    try {
        const command = new ScanCommand(params);
        const data = await client.send(command);
        return data.Items;
    } catch (error) {
        throw error;
    }
}

// Function to filter items based on LatestTimestamp
function filterItems(items) {
    const invalidItems = [];

    items.forEach(item => {
        if (!item.IsConnected.BOOL) {
            invalidItems.push({
                Plant: item.Plant.S,
                Endpoint: item.Endpoint.S,
                ErrorOccurred: item.ErrorOccurred.S,
                Server: item.Server.S,
            });
        }
        if (item.RecordUpdatedTimestamp && item.RecordUpdatedTimestamp.S) {
            // Parse recordTime as IST and convert to UTC for comparison
            const recordTime = moment.tz(item.RecordUpdatedTimestamp.S, "YYYY-MM-DDTHH:mm:ss.SSSZ", "Asia/Kolkata").utc();
            const now = moment.utc();
            if (now.diff(recordTime, 'minutes') > 60) {
                // Convert recordTime to IST for display
                const recordTimeIST = recordTime.clone().tz("Asia/Kolkata");
                invalidItems.push({
                    Plant: item.Plant.S,
                    Endpoint: item.Endpoint.S,
                    Server: item.Server.S,
                    ErrorOccurred: "No recent update" + ` (Last updated: ${recordTimeIST.format("YYYY-MM-DD HH:mm:ss")})`,
                    IsConnected: false,
                });
            }
        }
    });

    return { invalidItems };
}

// Function to generate a random pastel color
function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 85%)`;
}

// Function to send email
async function sendMail(emailTo, subject, content) {
    try {
        const tenant = process.env.NODE_ENV_TENANT_ID;
        const client_id = process.env.NODE_ENV_APP_ID;
        const username = process.env.NODE_ENV_senderOutlookEmail;
        const password = process.env.NODE_ENV_outlookPassword;
        const client_secret = process.env.NODE_ENV_APP_SECRET;

        const data = qs.stringify({
            client_id,
            scope: "Mail.send",
            username,
            password,
            grant_type: "password",
            client_secret,
        });

        const config = {
            method: "post",
            url: `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
        };

        const tokenResponse = await axios(config);
        const accessToken = tokenResponse.data.access_token;

        const toRecipients = emailTo.map(email => ({
            emailAddress: {
                address: email,
            },
        }));

        const mailData = JSON.stringify({
            message: {
                subject: subject,
                body: {
                    contentType: "HTML",
                    content: content,
                },
                toRecipients: toRecipients,
            },
            saveToSentItems: "false",
        });

        const userMail = await axios({
            method: "post",
            url: "https://graph.microsoft.com/v1.0/me/sendMail",
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            },
            data: mailData,
        });

    } catch (error) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
        }
        throw error;
    }
}

// Function to generate HTML content for the email
function generateEmailContent(invalidItems) {
    let content = `
    <html>
      <body style="font-family: 'Arial', sans-serif; color: #333; padding: 20px;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; text-align: center; font-family: 'Arial', sans-serif; font-weight: bold;">Alert: Endpoint Status</h2>
          <p style="text-align: center; font-family: 'Poppins', sans-serif;">The following plant endpoints have connectivity issues:</p>
          <table style="width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif;">
            <thead>
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Plant</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Endpoint</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Error</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Server</th>
              </tr>
            </thead>
            <tbody>
  `;

    invalidItems.forEach(item => {
        content += `
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.Plant}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.Endpoint}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.ErrorOccurred ? item.ErrorOccurred : "Error Not Available"}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.Server}</td>
              </tr>
        `;
    });

    content += `
            </tbody>
          </table>
          <p style="color: #888; text-align: center; font-family: 'Poppins', sans-serif;">This is an automated message. Please do not reply.</p>
        </div>
      </body>
    </html>
  `;

    return content;
}

// Main function to execute the logic
async function main() {
    try {
        const items = await getItems();
        const { invalidItems } = filterItems(items);

        if (invalidItems.length > 0) {
            const emailContent = generateEmailContent(invalidItems);
            await sendMail(recipients, 'Alert: Endpoint Status', emailContent);
        }
    } catch (error) {
        console.error("Error in main function:", error);
    }
}

module.exports = { main };
