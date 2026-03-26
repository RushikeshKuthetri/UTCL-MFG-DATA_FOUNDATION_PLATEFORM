const { getQuery } = require("../../helpers/dynamoDB");

module.exports = {
  getAdditionalTagDetails: async (req, res, next) => {
    const { PlantCode, TagDetails, userId } = req.body;
    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    if (!PlantCode || TagDetails?.constructor != Array) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message: "Please provide Plant Code and tags in proper format!",
      });
    }

    try {
      let tagItems = [];
      if (TagDetails?.length) {
        for (const item of TagDetails) {
          let tagParams = {
            TableName: `${PlantCode}_TagMaster`,
            KeyConditionExpression: "#section = :section", // Partition key condition,
            ExpressionAttributeNames: {
              "#section": "Section",
            },
            ExpressionAttributeValues: {
              ":section": { S: item.Section },
            },
          };

          if (item.Tags && item.Tags.length > 0) {
            let ExpressionAttributeValues = {
              ":section": { S: item.Section },
            };
            let FilterExpression = "#tagName IN (";
            let i = 1;
            for (let tagItem of item.Tags) {
              if (i === 1) {
                FilterExpression = FilterExpression + `:tag${i}`;
              } else {
                FilterExpression = FilterExpression + `, :tag${i}`;
              }
              ExpressionAttributeValues[`:tag${i}`] = { S: tagItem };
              i++;
            }
            FilterExpression = FilterExpression + ")";
            tagParams = {
              TableName: `${PlantCode}_TagMaster`,
              KeyConditionExpression: "#section = :section", // Partition key condition,
              FilterExpression,
              ExpressionAttributeValues,
              ExpressionAttributeNames: {
                "#section": "Section",
                "#tagName": "Tag Name"
              },
            };
          }

          // console.log({ tagParams });
          
          const tagResult = await getQuery(tagParams);
          // console.log(item.Section, item.Tags.length, tagResult?.Items?.length);
          if (tagResult?.Items?.length) {
            const fetchedItems = tagResult.Items.map((itemNew) => {
              const TagUID = Object.values(itemNew["Tag UID"])[0];
              //   const Plant = Object.values(itemNew.Plant)[0];
              const Line = itemNew?.Line?.S
                ? Object.values(itemNew.Line)[0]
                : null;
              const Section = Object.values(itemNew.Section)[0];
              const TagName = Object.values(itemNew["Tag Name"])[0];
              //   const key = Object.values(itemNew["Tag Name"])[0];
              const UnitOfMeasurement = itemNew[`Unit Of Measurement`]?.S
                ? Object.values(itemNew[`Unit Of Measurement`])[0]
                : null;
              const AssetId = itemNew?.AssetID?.S
                ? Object.values(itemNew.AssetID)[0]
                : null;
              const PropertyId = itemNew?.PropertyID?.S
                ? Object.values(itemNew.PropertyID)[0]
                : null;
              const Description = itemNew["Standard Variable Description"]?.S
                ? Object.values(itemNew["Standard Variable Description"])[0]
                : null;
              const IsDisplay = itemNew?.IsDisplay?.BOOL
                ? Object.values(itemNew.IsDisplay)[0]
                : null;
              //   const Path = itemNew?.Path?.S ? Object.values(itemNew.Path)[0] : null;
              return {
                Section,
                TagUID,
                // Plant,
                Line,
                TagName,
                UnitOfMeasurement,
                assetId: AssetId,
                propertyId: PropertyId,
                description: Description,
                IsDisplay,
                // Path,
              };
            });

            tagItems = tagItems.concat(fetchedItems);
          }
        }
        // dataToSend["Tag Names"] = tagItems;
      }

      res.status(200).json({
        status: "success",
        code: 200,
        data: { "Tag Names": tagItems },
      });
    } catch (error) {
      console.log("tagDetails error.........", error);
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
};
