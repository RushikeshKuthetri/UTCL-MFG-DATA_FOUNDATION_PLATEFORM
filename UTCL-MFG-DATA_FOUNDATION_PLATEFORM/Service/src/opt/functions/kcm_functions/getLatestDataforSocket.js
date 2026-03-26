// var client = require("../../../db/connection");
const { getScan, getQueryWithoutPagination } = require("../../../helpers/dynamoDB");
const { getAssetPropertyValue } = require("../../../helpers/iotSitewise");

getLatestDataforSocket = (data) => {
  var responseObject = {};
  let { Plant_Code, Control_Tags_Data, Resultant_Tags_Data } = data;

  return new Promise(async (resolve, reject) => {
    try {
      let tagList = [...Control_Tags_Data, ...Resultant_Tags_Data];

      // OLD CODE
      // console.log(tagList,"tttttttttt")
      // let ExeQuery = `Fn_latestData_for_CementMill('${Plant_Code}','${tagList.join(
      //   ","
      // )}')`;
      // var data = await client.execute("utcprmfgadxiotpd-db", ExeQuery);

      // data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      // console.log("total tags",tagList.length)
      let tagData = []

      for (let item of tagList) {
        const tagParams = {
          TableName: `${Plant_Code}_TagMaster`,
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
          tagData = [...tagData, ...tempData]
        }
      }

      const result = await getAssetPropertyValue(tagData);
      const newResult = tagData.map((item, index) => {
        const obj = result.find((findItem) => findItem.entryId === `${index + 1}`);
        let value = null;
        let timeStamp = null;
        if (obj?.assetPropertyValue?.value) {
          value = Object.values(obj.assetPropertyValue.value)[0];
        }
        if (obj?.assetPropertyValue?.timestamp?.timeInSeconds) {
          timeStamp = new Date(
            obj.assetPropertyValue.timestamp.timeInSeconds * 1000
          );
        }
        const newObject = {
          Id: item["Tag UID"],
          Plant: Plant_Code,
          Value: value,
          Timestamp: timeStamp,
        };
        return newObject
      });

      // console.log("New Result", newResult);

      let latestResult = {
        Control_Tags_Data: {},
        Resultant_Tags_Data: {},
      };
      newResult.forEach((val) => {
        if (Control_Tags_Data.find(item => item === val.Id)) {
          latestResult.Control_Tags_Data[val.Id] = Number(val.Value);
        }
        if (Resultant_Tags_Data.find(item => item === val.Id)) {
          latestResult.Resultant_Tags_Data[val.Id] = Number(val.Value);
        }
      });
      responseObject.result = latestResult;
      responseObject.error = false;
      responseObject.status = "Success";
      resolve(responseObject);
    } catch (Error) {
      console.log(Error.message);
      responseObject.result = { result: Error.message };
      responseObject.error = true;
      responseObject.status = "Failure";
      reject(responseObject);
    }
  });
};

getLatestDataforSocketNew = (data) => {
  var responseObject = {};
  let { Plant_Code, Control_Tags_Data, Resultant_Tags_Data } = data;

  return new Promise(async (resolve, reject) => {
    try {
      let tagList = [...Control_Tags_Data, ...Resultant_Tags_Data];
      // console.log(tagList,"tttttttttt")
      // let ExeQuery = `Fn_latestData_for_CementMill('${Plant_Code}','${tagList.join(",")}')`
      // var data = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   ExeQuery
      //   );

      //   data= JSON.parse(JSON.stringify(data.primaryResults[0])).data

      // Fetch Tag_Master entries
      const tagMasterParams = {
        TableName: `${Plant_Code}_TagMaster`,
        FilterExpression: "#tagUID IN (:tagIds)",
        ExpressionAttributeNames: {
          "#tagUID": "Tag UID",
        },
        ExpressionAttributeValues: {
          ":tagIds": { SS: tagList },
        },
      };

      let tagDetails = [];

      const tagMasterData = await getScan(tagMasterParams);
      if (tagMasterData?.Items?.length) {
        tagDetails = tagMasterData.Items.map((newItem) => {
          const TagUID = Object.values(newItem["Tag UID"])[0];
          const assetId = newItem?.AssetID?.S
            ? Object.values(newItem.AssetID)[0]
            : null;
          const propertyId = newItem?.PropertyID?.S
            ? Object.values(newItem.PropertyID)[0]
            : null;
          return {
            TagUID,
            assetId,
            propertyId,
          };
        });
      }

      let assetPropValues = []

      if (tagDetails && tagDetails?.length) {
        const result = await getAssetPropertyValue(tagDetails);
        assetPropValues = tagDetails.map((item, index) => {
          const obj = result.find(
            (findItem) => findItem.entryId === `${index + 1}`
          );
          const valueObject = obj?.assetPropertyValue?.value;
          let Value = null;
          if (valueObject) {
            Value = Object.values(valueObject)[0];
          }
          return {
            ...item,
            Value,
          };
        });
      }

      // console.log(data,"dataaaaaaaaaa")
      let latestResult = {
        Control_Tags_Data: {},
        Resultant_Tags_Data: {},
      };
      assetPropValues.forEach((val) => {
        if (Control_Tags_Data.includes(val.Id)) {
          latestResult.Control_Tags_Data[val.Id] = Number(val.Value);
        }
        if (Resultant_Tags_Data.includes(val.Id)) {
          latestResult.Resultant_Tags_Data[val.Id] = Number(val.Value);
        }
      });
      responseObject.result = latestResult;
      responseObject.error = false;
      responseObject.status = "Success";
      resolve(responseObject);
    } catch (Error) {
      console.log(Error.message);
      responseObject.result = { result: Error.message };
      responseObject.error = true;
      responseObject.status = "Failure";
      reject(responseObject);
    }
  });
};

module.exports = getLatestDataforSocket;

// var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
// getLatestDataforSocket = (req) => {
//   var responseObject = {};

//   let paramaters = `@opt_type=?,@plant_code=?, @mill=?,@grade=?,@model_no=?,@date_time=?`;
//   let replacementArray = [
//     "Cement Mill Optimization",
//     req.body.Plant_Code,
//     req.body.Mill,
//     req.body.Grade,
//     req.body.Model_No,
//     !req.body.dateTime ? "" : req.body.dateTime,
//   ];
//   var Query = " exec [dbo].[sp_kcm_prediction_latest_rec]" + paramaters;
// // console.log(req.body.dateTime,"dddddd")
//   return new Promise((resolve, reject) => {
//     var ValueError = false;
//     replacementArray.map((val) => {
//       if (val === undefined) {
//         responseObject.result = { result: "Value Error ! incorrect Payload !" };
//         responseObject.error = true;
//         responseObject.status = "Failure";
//         ValueError = true;
//       }
//     });
//     if (ValueError) {
//       reject(responseObject);
//     } else {
//       connection
//         .query(Query, {
//           raw: true,
//           replacements: replacementArray,
//           type: connection.QueryTypes.SELECT,
//           logging: console.log,
//         })
//         .then((res) => {
//           // console.log(res, "res");
//           if (res.length > 0) {
//             let latestResult = res[0];
//             latestResult.Control_Tags_Data = {};
//             latestResult.Resultant_Tags_Data = {};

//             res.forEach((val) => {
//               let Tdata = {};
//               Tdata.iotTagId = val.iotTagId;
//               Tdata.parameterName = val.parameterName;
//               Tdata.actualValue = val.actualValue;
//               Tdata.minValue = val.min;
//               Tdata.maxValue = val.max;
//               Tdata.unitofmeasurement = val.unitofmeasurement;
//               if(val.parameterType === "Yes"){
//                 latestResult.Control_Tags_Data[val.iotTagId] = Tdata;
//               }else if (val.parameterType === "No"){
//                 latestResult.Resultant_Tags_Data[val.iotTagId] = Tdata;
//               }

//             });

//             latestResult.Control_Tags_Data = Object.values(latestResult.Control_Tags_Data);
//             latestResult.Resultant_Tags_Data = Object.values(latestResult.Resultant_Tags_Data);

//             delete latestResult.iotTagId;
//             delete latestResult.parameterName;
//             delete latestResult.parameterType;
//             delete latestResult.predictedValue;
//             delete latestResult.isAlert;
//             delete latestResult.isAction;
//             delete latestResult.min;
//             delete latestResult.max;
//             delete latestResult.unitofmeasurement;

//             responseObject.result = latestResult;
//             responseObject.error = false;
//             responseObject.status = "Success";

//           } else {
//             responseObject.result = {
//               result: "No Record Found",
//             };
//             responseObject.error = true;
//             responseObject.status = "Failure";
//           }
//           resolve(responseObject);
//         })
//         .catch((Error) => {
//           responseObject.result = { result: Error.message };
//           responseObject.error = true;
//           responseObject.status = "Failure";
//           reject(responseObject);
//         });
//     }
//   });
// };

// module.exports = getLatestDataforSocket;
