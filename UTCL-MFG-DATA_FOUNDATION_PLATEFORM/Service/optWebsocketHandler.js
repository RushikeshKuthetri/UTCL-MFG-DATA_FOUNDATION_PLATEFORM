const {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} = require("@aws-sdk/client-apigatewaymanagementapi");
const {
  getLatestDataforSocket,
  getRecommedationDataforSocket,
} = require("./src/opt/functions/kcm_functions");
const {
  getLatestKilnDataforSocket,
} = require("./src/opt/functions/kiln_functions");
const {
  getLatestFilteredDataforSocket,
  getLastTwoHrsDataforSocket,
} = require("./src/opt/functions/blaine_functions");

const ApiGatewayManagementClient = new ApiGatewayManagementApiClient({
  endpoint: process.env.NODE_ENV_WEBSOCKET_API_ENDPOINT,
});

module.exports.Blain = async (event) => {
  let currentBody = {};
  console.log(
    "Blain connectionId:",
    JSON.stringify(event?.requestContext?.connectionId)
  );
  const connectionId = event?.requestContext?.connectionId;
  if (event?.body) {
    currentBody = JSON.parse(event.body);
  }

  const config = {
    Plant_Code: currentBody?.Plant_Code,
    Mill: currentBody?.Mill,
    Grade: currentBody?.Grade,
    Model_No: currentBody?.Model_No,
  };

  const LatestData = await getLatestFilteredDataforSocket(config);
  const LastTwoHoursData = await getLastTwoHrsDataforSocket(config);

  const finalObj = { LatestData, LastTwoHoursData };

  const messageData = JSON.stringify(finalObj);

  try {
    // Send the message to the given client
    const postConnectionOP = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: messageData,
    });

    const data = await ApiGatewayManagementClient.send(postConnectionOP);
  } catch (e) {
    console.log("POST_CONNECTION_ERROR", e);
  }

  return { statusCode: 200, body: "Message sent" };
};

module.exports.Cement = async (event) => {
  let currentBody = {};
  console.log(
    "Cement connectionId:",
    JSON.stringify(event?.requestContext?.connectionId)
  );
  const connectionId = event?.requestContext?.connectionId;
  if (event?.body) {
    currentBody = JSON.parse(event.body);
  }

  const payload = {
    Plant_Code: currentBody?.Plant_Code,
    Control_Tags_Data: currentBody?.Control_Tags_Data,
    Resultant_Tags_Data: currentBody?.Resultant_Tags_Data,
  };

  const finalObj = await getLatestDataforSocket(payload);

  const messageData = JSON.stringify(finalObj);

  try {
    // Send the message to the given client
    const postConnectionOP = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: messageData,
    });

    const data = await ApiGatewayManagementClient.send(postConnectionOP);
  } catch (e) {
    console.log("POST_CONNECTION_ERROR", e);
  }

  return { statusCode: 200, body: "Message sent" };
};

module.exports.CementRecommended = async (event) => {
  let currentBody = {};
  console.log(
    "Cement Recommended Data connectionId:",
    JSON.stringify(event?.requestContext?.connectionId)
  );
  const connectionId = event?.requestContext?.connectionId;
  if (event?.body) {
    currentBody = JSON.parse(event.body);
  }

  const payload = {
    Plant_Code: currentBody?.Plant_Code,
    Mill: currentBody?.Mill,
    Grade: currentBody?.Grade,
    Model_No: currentBody?.Model_No
  };

  const finalObj = await getRecommedationDataforSocket(payload);

  const messageData = JSON.stringify(finalObj);

  try {
    // Send the message to the given client
    const postConnectionOP = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: messageData,
    });

    const data = await ApiGatewayManagementClient.send(postConnectionOP);
  } catch (e) {
    console.log("POST_CONNECTION_ERROR", e);
  }

  return { statusCode: 200, body: "Message sent" };
};

module.exports.Kiln = async (event) => {
  let currentBody = {};
  console.log(
    "Kiln connectionId:",
    JSON.stringify(event?.requestContext?.connectionId)
  );
  const connectionId = event?.requestContext?.connectionId;
  if (event?.body) {
    currentBody = JSON.parse(event.body);
  }

  // let { plantName, parameters } = currentBody;
  const payload = {
    Plant_Code: currentBody?.Plant_Code,
    Mill: currentBody?.Mill,
  };

  const LatestData = await getLatestKilnDataforSocket(payload);

  const finalObj = { LatestData };

  const messageData = JSON.stringify(finalObj);

  try {
    // Send the message to the given client
    const postConnectionOP = new PostToConnectionCommand({
      ConnectionId: connectionId,
      Data: messageData,
    });

    const data = await ApiGatewayManagementClient.send(postConnectionOP);
  } catch (e) {
    console.log("POST_CONNECTION_ERROR", e);
  }

  return { statusCode: 200, body: "Message sent" };
};
