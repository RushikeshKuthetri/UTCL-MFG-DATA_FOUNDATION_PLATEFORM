const {
  DynamoDBClient,
  QueryCommand,
  PutItemCommand,
  DeleteItemCommand,
  UpdateItemCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");
const dynamoDBclient = new DynamoDBClient({
  region: "ap-south-1",
});

const getQueryWithoutPagination = async (payload) => {
  try {
    const command = new QueryCommand(payload);
    const result = await dynamoDBclient.send(command);
    return result;
  } catch (error) {
    console.log("Error in getQuery: ", error);
    return;
  }
};

const getQuery = async (payload) => {
  let lastEvaluatedKey = "None";
  let items = [];
  try {
    while (true) {
      if (lastEvaluatedKey === "None") {
        const command = new QueryCommand(payload);
        response = await dynamoDBclient.send(command);
      } else {
        const params = {
          ...payload,
          ExclusiveStartKey: lastEvaluatedKey,
        };
        const command = new QueryCommand(params);
        response = await dynamoDBclient.send(command);
      }
      items.push(...response["Items"]);
      if (response.hasOwnProperty("LastEvaluatedKey")) {
        lastEvaluatedKey = response["LastEvaluatedKey"];
      } else break;
    }
    return { Items: items };
  } catch (error) {
    console.log("Error in getQuery: ", error);
    return;
  }
};

const getScan = async (params) => {
  try {
    let lastEvaluatedKey;
    let tagResult = [];
    let count=0;
    do {
      let response = {};
      if (lastEvaluatedKey) {
        params[`ExclusiveStartKey`] = lastEvaluatedKey;
      }
      response = await dynamoDBclient.send(new ScanCommand(params));
      tagResult.push(...response["Items"]);
      count=count+ (response?.Count || 0)
      lastEvaluatedKey = response["LastEvaluatedKey"];
    } while (lastEvaluatedKey);
    return { Items: tagResult, Count:count };
  } catch (error) {
    console.log("Error in dynamoDb Scan Command: ", error);
    return;
  }
};

const putCommand = async (payload) => {
  try {
    const command = new PutItemCommand(payload);
    const result = await dynamoDBclient.send(command);
    return result;
  } catch (error) {
    console.log("Error in putCommand: ", error);
    return;
  }
};
const updateCommand = async (payload) => {
  try {
    const command = new UpdateItemCommand(payload);
    const result = await dynamoDBclient.send(command);
    return result;
  } catch (error) {
    console.log("Error in putCommand: ", error);
    return;
  }
};

const deleteCommand = async (payload) => {
  try {
    const command = new DeleteItemCommand(payload);
    const result = await dynamoDBclient.send(command);
    return result;
  } catch (error) {
    console.log("Error in deleteCommand: ", error);
    return;
  }
};

module.exports = {
  getQuery,
  putCommand,
  deleteCommand,
  getQueryWithoutPagination,
  updateCommand,
  getScan,
};
