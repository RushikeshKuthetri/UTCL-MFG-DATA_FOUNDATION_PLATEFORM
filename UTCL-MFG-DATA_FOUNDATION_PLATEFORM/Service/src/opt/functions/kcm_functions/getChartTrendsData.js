var client = require("../../../db/connection");
const { getQueryWithoutPagination } = require("../../../helpers/dynamoDB");
const {
  getAssetPropertyHistoryValueList,
} = require("../../../helpers/iotSitewise");

getChartTrendsData = (req) => {
  var responseObject = {};

  var Query = `Fn_latestData_for_CementMill_trend('${req.body.tagId}','${req.body.startDate}','${req.body.endDate}')`;
  return new Promise(async (resolve, reject) => {
    try {
      var data = await client.execute("utcprmfgadxiotpd-db", Query);
      data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      if (data.length > 0) {
        data.map((val) => (val.Value = Number(val.Value)));
        responseObject.result = data;
        responseObject.error = false;
        responseObject.status = "Success";
      } else {
        responseObject.result = [
          {
            result: "No Record Found",
          },
        ];
        responseObject.error = true;
        responseObject.status = "Faliure";
      }
      resolve(responseObject);
    } catch (Error) {
      responseObject.result = { result: Error.message };
      responseObject.error = true;
      responseObject.status = "Failure";
      reject(responseObject);
    }
  });
};

getChartTrendsDataNew = (req) => {
  var responseObject = {};

  // var Query = `Fn_latestData_for_CementMill_trend('${req.body.tagId}','${req.body.startDate}','${req.body.endDate}')`;
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !req?.body?.tagId ||
        !(req?.body?.plantName || req?.body?.Plant_Code) ||
        !req?.body?.startDate ||
        !req?.body?.endDate
      ) {
        responseObject.result = {
          result:
            "Plant name or code, tags and start-date & end-date all are required!",
        };
        responseObject.error = true;
        responseObject.status = "Failure";
        reject(responseObject);
      }

      if (req?.body?.Plant_Code) {
        const tableParam = {
          TableName: "Plant_Details",
          KeyConditionExpression: "#Plant_SAP_Code = :Plant_SAP_Code",
          ExpressionAttributeNames: {
            "#Plant_SAP_Code": "Plant_SAP_Code",
          },
          ExpressionAttributeValues: {
            ":Plant_SAP_Code": { S: req?.body?.Plant_Code },
          },
        };
        const plantDetails = await getQueryWithoutPagination(tableParam);
        if (plantDetails?.Items?.length) {
          let plantData = plantDetails.Items.map((itemNew) => {
            const Plant_SAP_Code = Object.values(itemNew.Plant_SAP_Code)[0];
            const Generic_Plant_Code = Object.values(
              itemNew.Generic_Plant_Code
            )[0];
            return {
              Plant_SAP_Code,
              Generic_Plant_Code,
            };
          });
          // console.log(plantData[0]);
          req.body.plantName = plantData[0]?.Generic_Plant_Code;
        } else {
          responseObject.result = {
            result: `No matching plant found for the provided plant sap code.`,
          };
          responseObject.error = true;
          responseObject.status = "Failure";
          reject(responseObject);
        }
      }
      // var data = await client.execute("utcprmfgadxiotpd-db", Query);
      // data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      const ids = `${req.body.tagId}`.split(",");
      // const startDateTime = applyTimeOffset(req.body.startDate);
      // const endDateTime = applyTimeOffset(req.body.endDate);
      const data = [];
      if (ids?.length) {
        for (const id of ids) {
          const tagParams = {
            TableName: `${req.body.plantName}_TagMaster`,
            IndexName: "Tag-UID-index",
            KeyConditionExpression: "#tagUID = :tagUid",
            ExpressionAttributeNames: {
              "#tagUID": "Tag UID",
            },
            ExpressionAttributeValues: {
              ":tagUid": { S: id },
            },
          };
          const tagResponse = await getQueryWithoutPagination(tagParams);
          let tagDetail = {};

          if (tagResponse?.Items?.length) {
            const arr = tagResponse.Items.map((newItem) => {
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
            tagDetail = { ...arr[0] };
          }
          const params = {
            assetId: tagDetail.assetId,
            propertyId: tagDetail.propertyId,
            // startDate: startDateTime,
            // endDate: endDateTime,
            // aggregateTypes: ["AVERAGE"],
            // resolution: "1m",
          };

          const siteWiseData = await getAssetPropertyHistoryValueList(
            [params],
            removeTimeOffset(req.body.startDate),
            removeTimeOffset(req.body.endDate)
          );

          if (siteWiseData?.length) {
            let intervalMs = 60000;
            const start = new Date(req.body.startDate);
            //===============================
            const assetPropertyValueHistory = [];
            for (const siteWiseItem of siteWiseData) {
              if (siteWiseItem.entryId === `1`) {
                assetPropertyValueHistory.push(
                  ...siteWiseItem.assetPropertyValueHistory
                );
              }
            }
            const grouped = {};

            for (const val of assetPropertyValueHistory) {
              const ts = new Date(val.timestamp.timeInSeconds * 1000);
              const offset = Math.floor((ts - start) / intervalMs);
              const binTime = new Date(
                start.getTime() + (offset + 1) * intervalMs
              );
              const key = binTime.toISOString();

              if (!grouped[key]) grouped[key] = [];
              grouped[key].push(
                parseFloat(val.value.doubleValue ?? val.value.integerValue)
              );
            }

            for (const [binTime, values] of Object.entries(grouped)) {
              const avg = values.reduce((a, b) => a + b, 0) / values.length;
              const timestamp = applyTimeOffset(binTime)
                .toISOString()
                .replace("Z", "+05:30");
              data.push({
                Value: (Math.round(avg * 10000) / 10000).toString(),
                Timestamp: timestamp,
              });
            }
          }

          // const response = await getAggregate(params);

          // response.aggregatedValues.forEach((dataPoint) => {
          //   data.push({
          //     Timestamp: dataPoint.timestamp,
          //     Value: parseFloat(dataPoint.value.average.toFixed(4)),
          //   });
          // });
        }
      }

      if (data.length > 0) {
        data.map((val) => (val.Value = Number(val.Value)));
        responseObject.result = data;
        responseObject.error = false;
        responseObject.status = "Success";
      } else {
        responseObject.result = [
          {
            result: "No Record Found",
          },
        ];
        responseObject.error = true;
        responseObject.status = "Faliure";
      }
      resolve(responseObject);
    } catch (Error) {
      responseObject.result = { result: Error.message };
      responseObject.error = true;
      responseObject.status = "Failure";
      reject(responseObject);
    }
  });
};

const applyTimeOffset = (date) => {
  let newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 5);
  newDate.setMinutes(newDate.getMinutes() + 30);
  return newDate;
};

const removeTimeOffset = (date) => {
  let newDate = new Date(date);
  newDate.setHours(newDate.getHours() - 5);
  newDate.setMinutes(newDate.getMinutes() - 30);
  return newDate;
};

module.exports = getChartTrendsDataNew;
