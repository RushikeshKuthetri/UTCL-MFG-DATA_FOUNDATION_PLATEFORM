// var responseObject = require("../../utils/responseObject");
// // var client = require("../../../db/connection");
// const { getScan } = require("../../helpers/dynamoDB");

// getPlantAllTags = (req) => {
//   var response;
//   return new Promise(async (resolve, reject) => {
//     try {
//       // var result;
//       // var data = await client.execute(
//       //   "utcprmfgadxiotpd-db",
//       //   `All_Unique_Tags('${req.body.PlantName}')`
//       // );
//       //   console.log("herrrrrrrrrrrr111111111111", data);
//       // data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
//       let data = [];
//       // let tagParams = {
//       //   TableName: "UTCL-TagMaster",
//       //   KeyConditionExpression: "#plant = :plant", // Partition key condition,
//       //   ExpressionAttributeNames:{
//       //     "#plant": "Plant",
//       //   },
//       //   ExpressionAttributeValues:{
//       //     ":plant": { S: req.body.PlantName },
//       //   },
//       //   // ProjectionExpression: "Plant, Tag UID, Tag Name, Line, Section",
//       // };
//       // const tagResult = await getQuery(tagParams);
//       let tagParams = {
//         TableName: `${req.body.PlantName}_TagMaster`,
//       };

//       const tagResult = await getScan(tagParams);

//       if (tagResult?.Items?.length) {
//         data = tagResult.Items.map((item) => {
//           const TagUID = Object.values(item["Tag UID"])[0];
//           // const Plant = Object.values(item.Plant)[0];
//           const Line = item?.Line?.S ? Object.values(item.Line)[0] : null;
//           const Section = Object.values(item.Section)[0];
//           const TagName = Object.values(item["Tag Name"])[0];
//           const Description = item?.Description?.S ? Object.values(item.Description)[0] : null;
//           return {
//             "Tag UID": TagUID,
//             Plant: req.body.PlantName,
//             Line,
//             Section,
//             TagName,
//             Description
//           };
//         });
//       }
//       if (data.length > 0) {
//         response = responseObject(data, false, "Success", 200);
//         resolve(response);
//       } else {
//         response = responseObject("No Records Found", true, "Failure", 200);
//         reject(response);
//       }
//     } catch (error) {
//       response = responseObject(error.message, true, "Failure", 400);
//       reject(response);
//     }
//   });
// };

// module.exports = getPlantAllTags;




// Updated by TRIDAI to resolve api fail issue while fteching tag details on 27-01-26
var responseObject = require("../../utils/responseObject");
const { getScan } = require("../../helpers/dynamoDB");

// ✅ Safe DynamoDB attribute reader
const getAttrValue = (attr) => {
  if (!attr || typeof attr !== "object") return null;
  return Object.values(attr)[0] ?? null;
};

getPlantAllTags = (req) => {
  var response;

  return new Promise(async (resolve, reject) => {
    try {
      let data = [];

      let tagParams = {
        TableName: `${req.body.PlantName}_TagMaster`,
      };

      const tagResult = await getScan(tagParams);

      if (tagResult?.Items?.length) {
        data = tagResult.Items
          .map((item) => ({
            "Tag UID": getAttrValue(item["Tag UID"]),
            Plant: req.body.PlantName,
            Line: getAttrValue(item.Line),
            Section: getAttrValue(item.Section),
            TagName: getAttrValue(item["Tag Name"]),
            Description: getAttrValue(item.Description),
          }))
      }

      if (data.length > 0) {
        response = responseObject(data, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = getPlantAllTags;
