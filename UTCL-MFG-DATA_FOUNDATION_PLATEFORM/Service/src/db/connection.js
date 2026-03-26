const KustoClient = require("azure-kusto-data").Client;
const KustoConnectionStringBuilder =
  require("azure-kusto-data").KustoConnectionStringBuilder;

const NODE_ENV_ADX_CONNECTION_STRING = process.env.NODE_ENV_ADX_CONNECTION_STRING;
const NODE_ENV_APP_ID = process.env.NODE_ENV_APP_ID;
const NODE_ENV_APP_SECRET = process.env.NODE_ENV_APP_SECRET;
const NODE_ENV_TENANT_ID = process.env.NODE_ENV_TENANT_ID;

const kcsb = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(
  NODE_ENV_ADX_CONNECTION_STRING,
  NODE_ENV_APP_ID,
  NODE_ENV_APP_SECRET,
  NODE_ENV_TENANT_ID
);

const client = new KustoClient(kcsb);
module.exports = client;
