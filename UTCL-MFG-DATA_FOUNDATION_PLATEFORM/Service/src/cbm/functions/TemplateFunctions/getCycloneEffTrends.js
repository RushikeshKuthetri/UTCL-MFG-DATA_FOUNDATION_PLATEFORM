var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
const {
  getAssetPropertyAggregates,
  getAssetPropertyHistoryValueList,
} = require("../../../helpers/iotSitewise");
const { getQueryWithoutPagination } = require("../../../helpers/dynamoDB");

getCycloneEffTrends = (req) => {
  var response;
  let { startTime, endTime, T1, T2, interval } = req.body;

  // console.log("hiii", userid);
  return new Promise(async (resolve, reject) => {
    try {
      var data = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_Cyclone_Efficiency_OnTrend('${T1}','${T2}','${startTime}','${endTime}','${interval}')`
      );
      data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      // console.log(  `Fn_Cyclone_Efficiency_OnTrend('${T1}','${T2}','${startTime}','${endTime}','${interval}')`, "dataaaaaaaa");

      if (data.length > 0) {
        response = responseObject(data, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
      resolve(response);
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

getCycloneEffTrendsNew = (req) => {
  var response;
  let { startTime, endTime, T1, T2, interval, plantName } = req.body;
  const validResolutions = ["1m", "15m", "60m"];
  const isResolutionValid = validResolutions.includes(interval);
  const resolution = isResolutionValid ? interval : "1m"; // Default to 1m if invalid
  // console.log({ startTime, endTime, T1, T2, interval, plantName });
  // const startDateTime = applyTimeOffset(startTime);
  // const endDateTime = applyTimeOffset(endTime);
  // console.log({ startTime, endTime });

  return new Promise(async (resolve, reject) => {
    try {
      if (!startTime || !endTime || !T1 || !T2 || !interval || !plantName) {
        response = responseObject(
          "Please provide Start Time, End Time, Tag UIDs, Plant Name and Time Interval in proper format",
          true,
          "Failure",
          400
        );
        reject(response);
      }
      let data = [];
      const tag1Params = {
        TableName: `${plantName}_TagMaster`,
        IndexName: "Tag-UID-index",
        KeyConditionExpression: "#tagUID = :tagUid",
        ExpressionAttributeNames: {
          "#tagUID": "Tag UID",
        },
        ExpressionAttributeValues: {
          ":tagUid": { S: T1 },
        },
      };
      const tag1Response = await getQueryWithoutPagination(tag1Params);

      let tag1Detail = {};

      if (tag1Response?.Items?.length) {
        const arr1 = tag1Response.Items.map((newItem) => {
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
        tag1Detail = { ...arr1[0] };
      }

      const tag2Params = {
        TableName: `${plantName}_TagMaster`,
        IndexName: "Tag-UID-index",
        KeyConditionExpression: "#tagUID = :tagUid",
        ExpressionAttributeNames: {
          "#tagUID": "Tag UID",
        },
        ExpressionAttributeValues: {
          ":tagUid": { S: T2 },
        },
      };
      const tag2Response = await getQueryWithoutPagination(tag2Params);
      let tag2Detail = {};

      if (tag2Response?.Items?.length) {
        const arr2 = tag2Response.Items.map((newItem) => {
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
        tag2Detail = { ...arr2[0] };
      }
      // console.log({ tag1Detail, tag2Detail });

      if (
        tag1Detail?.assetId &&
        tag2Detail?.assetId &&
        tag1Detail?.propertyId &&
        tag2Detail?.propertyId
      ) {
        const params1 = {
          TagUID: T1,
          assetId: tag1Detail.assetId,
          propertyId: tag1Detail.propertyId,
          // startDate: startDateTime,
          // endDate: endDateTime,
          // aggregateTypes: ["AVERAGE"],
          // resolution: resolution === "60m" ? "1h" : resolution,
        };

        const params2 = {
          TagUID: T2,
          assetId: tag2Detail.assetId,
          propertyId: tag2Detail.propertyId,
          // startDate: startDateTime,
          // endDate: endDateTime,
          // aggregateTypes: ["AVERAGE"],
          // resolution: resolution === "60m" ? "1h" : resolution,
        };

        const tagItems = [params1, params2];

        // const data1 = await getAssetPropertyAggregates(params1);
        // const data2 = await getAssetPropertyAggregates(params2);

        // const avgValue1 = data1.aggregatedValues.map(
        //   (item) => item.value.average
        // );
        // const avgValue2 = data2.aggregatedValues.map(
        //   (item) => item.value.average
        // );

        // if (isResolutionValid) {
        //   console.log("RESOLUTION VALID", interval, resolution);

        //   data = avgValue1.map((value, index) => {
        //     const eff = (1 - (value - avgValue2[index]) / value) * 100;
        //     return {
        //       Timestamp: data1.aggregatedValues[index].timestamp,
        //       Tag_Tgo: T1,
        //       Tgo_value: value.toFixed(2),
        //       Tag_Tmo: T2,
        //       Tmo_value: avgValue2[index].toFixed(2),
        //       Efficiency: eff.toFixed(2),
        //     };
        //   });
        // } else {
        //   console.log("RESOLUTION INVALID", interval, resolution);
        //   const [duration, unit] = interval.split("");
        //   const aggregatedValue1 = aggregator(avgValue1, parseInt(duration));
        //   const aggregatedValue2 = aggregator(avgValue2, parseInt(duration));
        //   data = aggregatedValue1.map((value, index) => {
        //     const eff = (1 - (value - aggregatedValue2[index]) / value) * 100;
        //     return {
        //       Timestamp:
        //         data1.aggregatedValues[index * parseInt(duration)].timestamp, // Adjust timestamp for given intervals
        //       Tag_Tgo: T1,
        //       Tgo_value: value.toFixed(2),
        //       Tag_Tmo: T2,
        //       Tmo_value: aggregatedValue2[index].toFixed(2),
        //       Efficiency: eff.toFixed(2),
        //     };
        //   });
        // }

        const siteWiseData = await getAssetPropertyHistoryValueList(
          tagItems,
          new Date(startTime),
          new Date(endTime)
        );

        const result = [];
        if (siteWiseData?.length) {
          let intervalMs = parseInt(interval, 10) * 60 * 1000;
          const start = new Date(startTime);
          let index = 1;
          //===============================

          for (const tag of tagItems || []) {
            // const obj = siteWiseData.find(
            //   (findItem) => findItem.entryId === `${index}`
            // );
            const assetPropertyValueHistory = [];
            for (const siteWiseItem of siteWiseData) {
              if (siteWiseItem.entryId === `${index}`) {
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
              const timestamp = binTime;
              result.push({
                Id: tag.TagUID,
                "Tag Name": tag["Tag Name"],
                Plant: tag?.Plant || "",
                Description: tag?.Description || "",
                "Plant SAP Code": tag["Plant SAP Code"],
                Value: avg > 0 ? avg.toFixed(2) : avg,
                Timestamp: timestamp,
              });
            }
            index++;
          }
          //================================
        }
        if (result.length) {
          const finalResult = []
          for (const item of result) {
            let tagVal = {
              Timestamp: "",
              Tag_Tgo: "",
              Tgo_value: 0,
              Tag_Tmo: "",
              Tmo_value: 0,
              Efficiency: 0,
            };
            const findObj = finalResult.find((findItem) => findItem.Timestamp === item.Timestamp)
            const index = finalResult.findIndex((indexItem) => indexItem.Timestamp === item.Timestamp);
            if (findObj) {
              if (item.Id === T1) {
                findObj.Tag_Tgo = item.Id
                findObj.Tgo_value = parseFloat(item.Value)
              } else if (item.Id === T2) {
                findObj.Tag_Tmo = item.Id
                findObj.Tmo_value = parseFloat(item.Value)
              }
              const eff = (1 - (findObj.Tgo_value - findObj.Tmo_value) / findObj.Tgo_value) * 100;
              if (eff || !isNaN(eff)) {
                findObj.Efficiency = Math.round(eff * 100) / 100;
              } else {
                findObj.Efficiency = 0;
              }
              finalResult.splice(index, 1, findObj)
            } else {
              if (item.Id === T1) {
                tagVal.Tag_Tgo = item.Id
                tagVal.Tgo_value = parseFloat(item.Value)
                tagVal.Timestamp = item.Timestamp
              } else if (item.Id === T2) {
                tagVal.Tag_Tmo = item.Id
                tagVal.Tmo_value = parseFloat(item.Value)
                tagVal.Timestamp = item.Timestamp
              }
              finalResult.push(tagVal)
            }
          }
          data = finalResult
        }
      }

      if (data.length > 0) {
        response = responseObject(data, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
      resolve(response);
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

const aggregator = (values, interval = 1) => {
  const aggregated = [];
  for (let i = 0; i < values.length; i += interval) {
    const slice = values.slice(i, i + interval);
    const avg = slice.reduce((sum, val) => sum + val, 0) / slice.length;
    aggregated.push(avg);
  }
  return aggregated;
};

const applyTimeOffset = (date) => {
  let newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 5);
  newDate.setMinutes(newDate.getMinutes() + 30);
  return newDate;
};

module.exports = getCycloneEffTrendsNew;
