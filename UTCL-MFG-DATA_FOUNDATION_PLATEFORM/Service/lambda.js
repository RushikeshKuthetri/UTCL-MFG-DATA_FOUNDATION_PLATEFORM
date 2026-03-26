const awsServerlessExpress = require('aws-serverless-express-binary');
const app = require('./src/app');
const sequelize = require('./src/db/connectionsql');

let dbClient;
const startServer = async () => {
  try {
    dbClient = await sequelize.sync();
    // console.log('--dbClient--',dbClient)
    await sequelize.authenticate();
    // console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database");
    console.error(`Error occurred: ${error.message}`);
  }
};
startServer();

const binaryMimeTypes = [
  'application/octet-stream',
  'application/gzip',
  'application/json',
  'text/html'
  // 'application/pdf',
  // 'image/*'
  // Add more only if needed — avoid */*
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
module.exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (dbClient) dbClient.close();
  if (server) server.close();
});

// module.exports = handler;
