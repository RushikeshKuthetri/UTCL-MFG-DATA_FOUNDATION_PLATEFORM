const {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} = require("@aws-sdk/client-apigatewaymanagementapi");
const { getQueryWithoutPagination } = require("./src/helpers/dynamoDB");
const { getAssetPropertyValue } = require("./src/helpers/iotSitewise");

const ApiGatewayManagementClient = new ApiGatewayManagementApiClient({
  endpoint: process.env.NODE_ENV_WEBSOCKET_API_ENDPOINT,
});

module.exports.CycloneViewHandler = async (event) => {
  let currentBody = {};
  console.log(
    "Fetch Cyclone View connectionId:",
    JSON.stringify(event?.requestContext?.connectionId)
  );
  const connectionId = event?.requestContext?.connectionId;
  if (event?.body) {
    currentBody = JSON.parse(event.body);
  }

  let { plantName, parameters } = currentBody;

  let tagList = [];
  let tagUidList = [];
  Object.keys(parameters).map((type) => {
    Object.keys(parameters[type]).map((eq) => {
      tagList.push(parameters[type][eq].T1);
      tagList.push(parameters[type][eq].T2);
    });
  });

  if (tagList?.length) {
    tagUidList = tagList.map((uid) => ({ S: uid }));
  }
  
  // const queryParams = {
  //   TableName: `${plantName}_TagMaster`,
  //   FilterExpression: tagUidList.map((_, index) => `contains(#tagUid, :tagUidValue${index})`).join(" OR "), // Filtering on Tag UID column
  //   ExpressionAttributeNames: {
  //     "#tagUid": "Tag UID",
  //   },
  //   ExpressionAttributeValues: tagUidList.reduce((acc, uid, index) => {
  //     acc[`:tagUidValue${index}`] = uid;
  //     return acc;
  //   }, {}),
  // };

  // const tagResult = await getScan(queryParams);
  
  let data = [];

  // if (tagResult?.Items?.length) {
  //   data = tagResult.Items.map((item) => {
  //     const TagUID = Object.values(item["Tag UID"])[0];
  //     const TagName = Object.values(item["Tag Name"])[0];
  //     const assetId = item?.AssetID?.S
  //       ? Object.values(item.AssetID)[0]
  //       : null;
  //     const propertyId = item?.PropertyID?.S
  //       ? Object.values(item.PropertyID)[0]
  //       : null;
  //     return {
  //       "Tag UID": TagUID,
  //       TagName,
  //       assetId,
  //       propertyId,
  //     };
  //   });
  // }

  for (let item of tagList) {
    const tagParams = {
      TableName: `${plantName}_TagMaster`,
      IndexName: "Tag-UID-index",
      KeyConditionExpression: "#tagUID = :tagUid",
      ExpressionAttributeNames: {
        "#tagUID": "Tag UID",
      },
      ExpressionAttributeValues: {
        ":tagUid": { S: item },
      },
    };
    const tagResponse = await getQueryWithoutPagination(tagParams);
    if (tagResponse?.Items?.length) {
      let tempData = tagResponse.Items.map((itemNew) => {
        const TagUID = Object.values(itemNew["Tag UID"])[0];
        const TagName = Object.values(itemNew["Tag Name"])[0];
        const assetId = itemNew?.AssetID?.S
          ? Object.values(itemNew.AssetID)[0]
          : null;
        const propertyId = itemNew?.PropertyID?.S
          ? Object.values(itemNew.PropertyID)[0]
          : null;
        return {
          "Tag UID": TagUID,
          TagName,
          assetId,
          propertyId,
        };
      });
      data = [...data, ...tempData]
    }
  }

  const result = await getAssetPropertyValue(data);
  const newResult = data.map((item, index) => {
    const obj = result.find((findItem) => findItem.entryId === `${index + 1}`);
    let value = null;
    let timeStamp = null;
    if (obj?.assetPropertyValue?.timestamp?.timeInSeconds) {
      timeStamp = new Date(
        obj.assetPropertyValue.timestamp.timeInSeconds * 1000
      );
      // UTC to IST
      timeStamp.setHours(timeStamp.getHours() + 5);
      timeStamp.setMinutes(timeStamp.getMinutes() + 30);
    }
    const now = new Date();
    now.setHours(now.getHours() + 5);
    now.setMinutes(now.getMinutes() + 30);
    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
    if (obj?.assetPropertyValue?.value && timeStamp > oneMinuteAgo && timeStamp <= now) {
      value = Object.values(obj.assetPropertyValue.value)[0];
    }
    return {
      ...item,
      value,
      timeStamp,
    };
  });

  let dataObj = {};
  newResult.forEach((val) => {
    dataObj[val[["Tag UID"]]] = val;
  });

  Object.keys(parameters).map((type) => {
    Object.keys(parameters[type]).map((eq) => {
      parameters[type][eq].T1val = dataObj[parameters[type][eq]?.T1]?.value;
      parameters[type][eq].T1TimeStamp =
        dataObj[parameters[type][eq]?.T1]?.timeStamp;
      parameters[type][eq].T2val = dataObj[parameters[type][eq]?.T2]?.value;
      parameters[type][eq].T2TimeStamp =
        dataObj[parameters[type][eq]?.T2]?.timeStamp;
    });
  });

  const finalObj = {
    latestCycloenEffData: {
      result: parameters,
      error: false,
      status: "Success",
      statusCode: 200,
      statusName: "OK",
    },
  };

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
