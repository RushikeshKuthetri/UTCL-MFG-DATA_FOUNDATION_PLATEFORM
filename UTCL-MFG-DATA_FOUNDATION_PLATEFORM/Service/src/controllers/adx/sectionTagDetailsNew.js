const { getQuery, getScan } = require("../../helpers/dynamoDB");

// Added helper function by TRID AI on 27-01-26 to avoid the api failure of tag details fetching due to unexpected DynamoDB attribute formats 
const getAttrValue = (attr) => {
  if (!attr) return null;
  return Object.values(attr)[0] ?? null;
};


module.exports = {
  sectionTagDetailsNew: async (req, res, next) => {
    const { plants, userId } = req.body;
    // console.log({ plants });
    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    if (!userId || !plants || plants?.constructor != Array) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message:
          "Please provide userid and plant line and section details in proper format",
      });
    }

    try {
      let tagItems = [];
      if (plants?.length) {
        for (const item of plants) {
          // let tagParams = {
          //   TableName: "UTCL-TagMaster",
          //   KeyConditionExpression: "#plant = :plant", // Partition key condition,
          //   ExpressionAttributeNames:{
          //     "#plant": "Plant",
          //   },
          //   ExpressionAttributeValues:{
          //     ":plant": { S: item.Plant },
          //   },
          // };

          // if (item.Line !== null && item.Section === null ) {
          //   tagParams = {
          //     TableName: "UTCL-TagMaster",
          //     KeyConditionExpression: "#plant = :plant", // Partition key condition,
          //     ExpressionAttributeNames:{
          //       "#plant": "Plant",
          //       "#line": "Line"
          //     },
          //     ExpressionAttributeValues:{
          //       ":plant": { S: item.Plant },
          //       ":line": { S: item.Line }
          //     },
          //     FilterExpression: "#line = :line"
          //   };
          // } else if (item.Section !== null && item.Line === null) {
          //   tagParams = {
          //     TableName: "UTCL-TagMaster",
          //     KeyConditionExpression: "#plant = :plant", // Partition key condition,
          //     ExpressionAttributeNames:{
          //       "#plant": "Plant",
          //       "#section": "Section"
          //     },
          //     ExpressionAttributeValues:{
          //       ":plant": { S: item.Plant },
          //       ":section": { S: item.Section }
          //     },
          //     FilterExpression: "#section = :section"
          //   };
          // } else if (item.Section !== null && item.Line !== null) {
          //   tagParams = {
          //     TableName: "UTCL-TagMaster",
          //     KeyConditionExpression: "#plant = :plant", // Partition key condition,
          //     ExpressionAttributeNames:{
          //       "#plant": "Plant",
          //       "#line": "Line",
          //       "#section": "Section"
          //     },
          //     ExpressionAttributeValues:{
          //       ":plant": { S: item.Plant },
          //       ":line": { S: item.Line },
          //       ":section": { S: item.Section }
          //     },
          //     FilterExpression: "#line = :line AND #section = :section"
          //   };
          // }

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
          let tagResult = [];
          if (Object.keys(tagParams)?.length) {
            tagResult = await getQuery(tagParams);
          } else if (Object.keys(params)?.length) {
            tagResult = await getScan(params);
          }

          // const tagResult = await getQuery(tagParams);
          if (tagResult?.Items?.length) {
            // const fetchedItems = tagResult.Items.map((newItem) => {
            //   const TagUID = Object.values(newItem["Tag UID"])[0];
            //   // const Plant = Object.values(newItem.Plant)[0];
            //   const Line = newItem?.Line?.S
            //     ? Object.values(newItem.Line)[0]
            //     : newItem?.Line?.N
            //     ? Object.values(newItem.Line)[0]
            //     : null;
            //   const Section = Object.values(newItem.Section)[0];
            //   const TagName = Object.values(newItem["Tag Name"])[0];
            //   const key = Object.values(newItem["Tag Name"])[0];
            //   const UnitOfMeasurement = newItem[`Unit Of Measurement`]?.S
            //     ? Object.values(newItem[`Unit Of Measurement`])[0]
            //     : null;
            //   const assetId = newItem?.AssetID?.S
            //     ? Object.values(newItem.AssetID)[0]
            //     : null;
            //   const propertyId = newItem?.PropertyID?.S
            //     ? Object.values(newItem.PropertyID)[0]
            //     : null;
            //   const description = newItem["Standard Variable Description"]?.S
            //     ? Object.values(newItem["Standard Variable Description"])[0]
            //     : null;
            //   const IsDisplay = newItem?.IsDisplay?.BOOL
            //     ? Object.values(newItem.IsDisplay)[0]
            //     : null;
            //   const Path = newItem?.Path?.S
            //     ? Object.values(newItem.Path)[0]
            //     : null;
            //   return {
            //     TagUID,
            //     Plant: item?.Plant,
            //     Line,
            //     Section,
            //     TagName,
            //     key,
            //     UnitOfMeasurement,
            //     assetId,
            //     propertyId,
            //     description,
            //     IsDisplay,
            //     Path,
            //   };
            // });


            // Modified by TRID AI on 27-01-26 to avoid the api failure of tag details fetching
            const fetchedItems = tagResult.Items
              .map((newItem) => {
                const TagUID = getAttrValue(newItem["Tag UID"]);
                const TagName = getAttrValue(newItem["Tag Name"]);
                return {
                  TagUID,
                  Plant: item?.Plant ?? null,
                  Line: getAttrValue(newItem.Line),
                  Section: getAttrValue(newItem.Section),
                  TagName,
                  key: TagName,
                  UnitOfMeasurement: getAttrValue(newItem["Unit Of Measurement"]),
                  assetId: getAttrValue(newItem.AssetID),
                  propertyId: getAttrValue(newItem.PropertyID),
                  description: getAttrValue(newItem["Standard Variable Description"]),
                  IsDisplay: newItem?.IsDisplay?.BOOL ?? null,
                  Path: getAttrValue(newItem.Path),
                };
              })
              .filter(Boolean); // removes null rows safely

            tagItems = tagItems.concat(fetchedItems);
          }
        }
        // dataToSend["Tag Names"] = tagItems;
      }
      // console.log("tagItems length", tagItems.length);
      // console.log("tagItems", tagItems);

      res.status(200).json({
        status: "success",
        code: 200,
        data: { "Tag Names": tagItems },
        length: tagItems.length,
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
