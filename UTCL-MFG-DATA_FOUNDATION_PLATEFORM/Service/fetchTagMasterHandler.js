const {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");
const { streamifyResponse } = require("lambda-stream");

// Create the DynamoDB client and document client
const client = new DynamoDBClient({
  region: "ap-south-1",
});

module.exports.fetchTagMasterHandler = streamifyResponse(
  async (event, responseStream) => {
    if (event.body) {
      event = JSON.parse(event.body);
    }

    const { plants } = event;

    if (!plants || !Array.isArray(plants)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          status: "fail",
          code: 400,
          message:
            "Please provide plant line and section details in proper format",
        }),
      };
    }
    async function streamData() {
      let done = false;
      for (const item of plants) {
        let tagParams = {};
        let params = {};
        if (item.Line === null && item.Section === null) {
          params = {
            TableName: `${item.Plant}_TagMaster`,
          };
        } else if (item.Line !== null && item.Section === null) {
          params = {
            TableName: `${item.Plant}_TagMaster`,
            ExpressionAttributeNames: {
              "#line": "Line",
            },
            ExpressionAttributeValues: {
              ":lineStr": { S: String(item.Line) },
              ":lineNum": { N: String(item.Line) },
            },
            FilterExpression: "(#line = :lineStr OR #line = :lineNum)",
          };
        } else if (item.Section !== null && item.Line === null) {
          tagParams = {
            TableName: `${item.Plant}_TagMaster`,
            KeyConditionExpression: "#section = :section", // Partition key condition,
            ExpressionAttributeNames: {
              "#section": "Section",
            },
            ExpressionAttributeValues: {
              ":section": { S: item.Section },
            },
          };
        } else if (item.Section !== null && item.Line !== null) {
          tagParams = {
            TableName: `${item.Plant}_TagMaster`,
            KeyConditionExpression: "#section = :section", // Partition key condition,
            ExpressionAttributeNames: {
              "#section": "Section",
              "#line": "Line",
            },
            ExpressionAttributeValues: {
              ":section": { S: item.Section },
              ":lineStr": { S: String(item.Line) },
              ":lineNum": { N: String(item.Line) },
            },
            FilterExpression: "(#line = :lineStr OR #line = :lineNum)",
          };
        }
        try {
          let lastEvaluatedKey;
          let tagResult = [];
          do {
            let response = {};
            if (Object.keys(tagParams)?.length) {
              if (lastEvaluatedKey) {
                tagParams[`ExclusiveStartKey`] = lastEvaluatedKey;
              }
              response = await client.send(new QueryCommand(tagParams));
            } else if (Object.keys(params)?.length) {
              if (lastEvaluatedKey) {
                params[`ExclusiveStartKey`] = lastEvaluatedKey;
              }
              response = await client.send(new ScanCommand(params));
            }
            tagResult.push(...response["Items"]);
            lastEvaluatedKey = response["LastEvaluatedKey"];
          } while (lastEvaluatedKey);

          if (tagResult.length > 0) {
            const fetchedItems = tagResult.map((newItem) => {
              const TagUID = Object.values(newItem["Tag UID"])[0];
              // const Plant = Object.values(newItem.Plant)[0];
              const Line = newItem?.Line?.S
                ? Object.values(newItem.Line)[0]
                : newItem?.Line?.N
                ? Object.values(newItem.Line)[0]
                : null;
              const Section = Object.values(newItem.Section)[0];
              const TagName = Object.values(newItem["Tag Name"])[0];
              const key = Object.values(newItem["Tag Name"])[0];
              const UnitOfMeasurement = newItem[`Unit Of Measurement`]?.S
                ? Object.values(newItem[`Unit Of Measurement`])[0]
                : null;
              const assetId = newItem?.AssetID?.S
                ? Object.values(newItem.AssetID)[0]
                : null;
              const propertyId = newItem?.PropertyID?.S
                ? Object.values(newItem.PropertyID)[0]
                : null;
              const description = newItem["Standard Variable Description"]?.S
                ? Object.values(newItem["Standard Variable Description"])[0]
                : null;
              const IsDisplay = newItem?.IsDisplay?.BOOL
                ? Object.values(newItem.IsDisplay)[0]
                : null;
              const Path = newItem?.Path?.S
                ? Object.values(newItem.Path)[0]
                : null;

              return {
                TagUID,
                Plant: item.Plant,
                Line,
                Section,
                TagName,
                key,
                UnitOfMeasurement,
                assetId,
                propertyId,
                description,
                IsDisplay,
                Path,
              };
            });
            // Yield each item as a JSON string to be streamed
            // for (const fetchedItem of fetchedItems) {
            //   responseStream.write(JSON.stringify(fetchedItem)); // Convert each item to string before streaming
            // }
            const chunkSize = 5000;
            const jsonData = JSON.stringify(fetchedItems);
            for (let i = 0; i < jsonData.length; i += chunkSize) {
              responseStream.write(jsonData.substring(i, i + chunkSize)); // Write each chunk
            }
          }
        } catch (error) {
          console.log("Error fetching data from DynamoDB:", error);
          throw new Error("Error while fetching data from DynamoDB");
        }
      }

      done = true; // Exit the loop after processing all plants
    }

    try {
      await streamData();
      responseStream.end();
    } catch (error) {
      console.error("Error in streaming response:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          code: 500,
          status: "failed",
          message: "Something went wrong, please try again.",
        }),
      };
    }
  }
);
