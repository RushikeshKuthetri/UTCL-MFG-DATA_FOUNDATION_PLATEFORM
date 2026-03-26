const {
  DynamoDBClient,
  QueryCommand,
  PutItemCommand,
  DeleteItemCommand,
  UpdateItemCommand,
  ScanCommand,
  BatchGetItemCommand,
  DescribeTableCommand,
  TransactWriteItemsCommand,
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
    let Count = 0;
    do {
      let response = {};
      if (lastEvaluatedKey) {
        params[`ExclusiveStartKey`] = lastEvaluatedKey;
      }
      response = await dynamoDBclient.send(new ScanCommand(params));
      if (response?.Items) {
        tagResult.push(...response["Items"]);
      }
      if (response?.Count) {
        Count = Count + response?.Count;
      }
      lastEvaluatedKey = response["LastEvaluatedKey"];
    } while (lastEvaluatedKey);
    return { Items: tagResult, Count };
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

const batchWriteItemCommand = async (payload) => {
  try {
    const params = {
      TransactItems: payload,
    };
    const command = new TransactWriteItemsCommand(params);
    await dynamoDBclient.send(command);
    return true;
  } catch (error) {
    console.log("Error in put transaction Command: ", error);
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

const describeTable = async (payload) => {
  try {
    const command = new DescribeTableCommand(payload);
    return await dynamoDBclient.send(command);
  } catch (error) {
    console.log("Error in describeCommand: ", error);
    return;
  }
};

// used in filterbyUIDAvg.js

const getTagMetadata = async (plant, uids) => {
  const tableName = `${plant}_TagMaster`;

  const keys = uids.map((uid) => ({
    TagUID: { S: uid },
  }));

  const params = {
    RequestItems: {
      [tableName]: {
        Keys: keys,
      },
    },
  };

  try {
    const command = new BatchGetItemCommand(params);
    const data = await dynamoDBclient.send(command);
    const responses = data.Responses?.[tableName] || [];

    return responses.map((item) => {
      const unmarshalled = {};
      for (const key in item) {
        unmarshalled[key] = Object.values(item[key])[0];
      }
      return unmarshalled;
    });
  } catch (error) {
    console.error("Error fetching tag metadata:", error);
    throw error;
  }
};

// used in filterbyUIDAvgGCW.js

const getTagMetadataForUIDs = async (plant, uids) => {
  const tableName = `${plant}_TagMaster`;

  const keys = uids.map((uid) => ({
    TagUID: { S: uid },
  }));

  const params = {
    RequestItems: {
      [tableName]: {
        Keys: keys,
      },
    },
  };

  try {
    const command = new BatchGetItemCommand(params);
    const data = await dynamoDBclient.send(command);
    const responses = data.Responses?.[tableName] || [];

    return responses.map((item) => {
      const unmarshalled = {};
      for (const key in item) {
        unmarshalled[key] = Object.values(item[key])[0];
      }
      return unmarshalled;
    });
  } catch (error) {
    console.error("Error fetching tag metadata:", error);
    throw error;
  }
};

module.exports = {
  getQuery,
  putCommand,
  deleteCommand,
  getQueryWithoutPagination,
  updateCommand,
  getScan,
  describeTable,
  getTagMetadata,
  getTagMetadataForUIDs,
  batchWriteItemCommand
};
