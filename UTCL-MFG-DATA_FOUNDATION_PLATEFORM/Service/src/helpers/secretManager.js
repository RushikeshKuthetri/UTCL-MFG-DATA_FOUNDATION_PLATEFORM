const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

// const secret_name = "DevKeys";

const client = new SecretsManagerClient({
  region: process.env.NODE_ENV_AWS_REGION,
});

const getSecretKeys = async (secret_name) => {
  try {
    // console.log(" inside getSecretKeys:");

    const command = new GetSecretValueCommand({
        SecretId: secret_name,
      });
    const result = await client.send(command);
    // console.log(" inside getSecretKeys result:",result);

    let secret;
    if (result.SecretString) {
      secret = JSON.parse(result.SecretString);
    } else {
      const buff = Buffer.from(result.SecretBinary, "base64");
      secret = JSON.parse(buff.toString("ascii"));
    }

    // Now you have your credentials
    const accessKeyId = secret.devuserAccessKey;
    const secretAccessKey = secret.devuserSecreteKey;

    // console.log("Access Key ID:", accessKeyId);
    // console.log("Secret Access Key:", secretAccessKey);

    return { accessKeyId, secretAccessKey };
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error from secret Manager: ", error);
    return;
  }
};

module.exports = { getSecretKeys };
