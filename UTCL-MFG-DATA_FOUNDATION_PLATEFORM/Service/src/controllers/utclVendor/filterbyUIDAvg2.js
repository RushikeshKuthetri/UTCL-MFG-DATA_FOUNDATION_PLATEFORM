const moment = require("moment");
const validateInterval = require("../../utils/validateInterval");
const {
  getQueryWithoutPagination,
  getQuery,
} = require("../../helpers/dynamoDB");
const {
  getAssetPropertyHistoryValueList,
  chunkArrayHistory,
} = require("../../helpers/iotSitewise");
const {
  BatchGetAssetPropertyValueHistoryCommand,
  IoTSiteWiseClient,
} = require("@aws-sdk/client-iotsitewise");

const client = new IoTSiteWiseClient({
  region: process.env.AWS_REGION_NAME,
});

// ADX logic preserved below
/*
const resultT = await client.execute("utcprmfgadxiotpd-db",
  `Fn_Export_timegenerator(datetime(${startTime}), datetime(${endTime}), "${interval}")`
);
const newResultT = JSON.parse(JSON.stringify(resultT.primaryResults[0])).data;
*/

/*
const query = `fn_API_MltUid_WithAvg_TimeInterval(${startTime}, ${endTime}, "${interval}", dynamic(${JSON.stringify(uidArray)}), "${pln || pln_code}")`;
const result = await client.execute("utcprmfgadxiotpd-db", query);
const finalResult = JSON.parse(JSON.stringify(result.primaryResults[0])).data;
*/

/*
const query = `fn_API_MltUid_WithAvg_TimeInterval_Createdtime(${startTime}, ${endTime}, "${interval}", dynamic(${JSON.stringify(uidArray)}), "${pln || pln_code}")`;
const result = await client.execute("utcprmfgadxiotpd-db", query);
const finalResult = JSON.parse(JSON.stringify(result.primaryResults[0])).data;
*/

module.exports = {
  filterbyUIDAvg2: async (req, res, next) => {
    let { sd, ed, csd, ced, pln, pln_code, uid, interval } = req.body;
    console.log("V4 REQUEST BODY", req.body);

    if (!interval) interval = "1m";
    else if (!validateInterval(interval)) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `Invalid Interval.(Valid intervals are "1m" to "60m" and "1s" to "60s")`,
      // });
      const error = new Error(
        `Invalid Interval.(Valid intervals are "1m" to "60m" and "1s" to "60s")`
      );
      error.status = 400;
      return next(error);
    }

    // if ((sd && (csd || ced)) || (ed && (csd || ced))) {
    //   return res.status(400).json({
    //     code: 400,
    //     status: "failed",
    //     message: `Either provide created-timestamp or timestamp.`,
    //   });
    // }

    // if ((sd && ed == null) || (ed && sd == null)) {
    //   return res.status(400).json({
    //     code: 400,
    //     status: "failed",
    //     message: `Please provide start date and end date.`,
    //   });
    // }

    // if ((csd && ced == null) || (ced && csd == null)) {
    //   return res.status(400).json({
    //     code: 400,
    //     status: "failed",
    //     message: `Please provide created-start date and created-end date.`,
    //   });
    // }
    if (!sd || !ed) {
      const error = new Error(`Please provide start date and end date both`);
      error.status = 400;
      return next(error);
    }
    // Checking plant access
    if (
      pln &&
      (!req.plantAccess ||
        !req.plantAccess.includes(pln.match(/[\d\.]+|\D+/g)[0]))
    ) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `You only have access to ${req.plantAccess || "no plants"}.`,
      // });
      const error = new Error(
        `You only have access to ${req.plantAccess || "no plants"}.`
      );
      error.status = 400;
      return next(error);
    }

    if (pln_code && (!req.sapCode || !req.sapCode.includes(pln_code))) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `You only have access to ${req.sapCode}.`,
      // });
      const error = new Error(`You only have access to ${req.sapCode}.`);
      error.status = 400;
      return next(error);
    }

    if (
      (sd && !moment(sd, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) ||
      (csd && !moment(csd, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid())
    ) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `Invalid Start Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset`,
      // });
      const error = new Error(
        `Invalid Start Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset.`
      );
      error.status = 400;
      return next(error);
    }

    if (
      (ed && !moment(ed, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) ||
      (ced && !moment(ced, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid())
    ) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `Invalid End Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset`,
      // });
      const error = new Error(
        `Invalid End Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset`
      );
      error.status = 400;
      return next(error);
    }

    if (sd && ed && Date.parse(sd) > Date.parse(ed)) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `End date must be greater than the start date.`,
      // });
      const error = new Error(`End date must be greater than the start date.`);
      error.status = 400;
      return next(error);
    }

    // if (csd && ced && Date.parse(csd) > Date.parse(ced)) {
    //   return res.status(400).json({
    //     code: 400,
    //     status: "failed",
    //     message: `Created-end-date must be greater than the created-start-date.`,
    //   });
    // }

    try {
      if (pln || pln_code) {
        let uidArray = [];
        if (uid?.constructor === Array) uidArray = uid;
        else uidArray = uid?.split(",");

        if (!uidArray || uidArray.length === 0 || uid == "") {
          // return res.status(400).json({
          //   code: 400,
          //   status: "failed",
          //   message: "Please add uids",
          // });
          const error = new Error(`Please add at least one uids`);
          error.status = 400;
          return next(error);
        }

        if (uidArray.length > 300) {
          // return res.status(400).json({
          //   code: 400,
          //   status: "failed",
          //   message: "You can add maximum 300 uids",
          // });
          const error = new Error(`You can add maximum 300 uids`);
          error.status = 400;
          return next(error);
        }

        const startTime = sd || csd;
        const endTime = ed || ced;

        let tagItems = [];

        if (!pln && pln_code) {
          const tableParam = {
            TableName: "Plant_Details",
            KeyConditionExpression: "#Plant_SAP_Code = :Plant_SAP_Code",
            ExpressionAttributeNames: {
              "#Plant_SAP_Code": "Plant_SAP_Code",
            },
            ExpressionAttributeValues: {
              ":Plant_SAP_Code": { S: pln_code },
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
            pln = plantData[0]?.Generic_Plant_Code;
          } else {
            // return res.status(404).json({
            //   status: "fail",
            //   code: 404,
            //   message:
            //     "No matching plant found for the provided plant sap code",
            // });
            const error = new Error(
              `No matching plant found for the provided plant sap code`
            );
            error.status = 404;
            return next(error);
          }
        }

        for (const tagUID of uid) {
          const tagParams = {
            TableName: `${pln}_TagMaster`,
            IndexName: "Tag-UID-index",
            KeyConditionExpression: "#uid = :uidVal",
            ExpressionAttributeNames: {
              "#uid": "Tag UID",
            },
            ExpressionAttributeValues: {
              ":uidVal": { S: tagUID },
            },
          };

          const tagResult = await getQuery(tagParams);

          if (tagResult?.Items?.length) {
            let tempData = tagResult.Items.map((itemNew) => {
              const TagUID = Object.values(itemNew["Tag UID"])[0];
              const TagName = Object.values(itemNew["Tag Name"])[0];
              const Plant = Object.values(itemNew.Plant)[0];
              const description = itemNew["Standard Variable Description"]?.S
                ? Object.values(itemNew["Standard Variable Description"])[0]
                : null;
              const sapCode = itemNew["Plant SAP Code"]?.S
                ? Object.values(itemNew["Plant SAP Code"])[0]
                : null;
              const assetId = itemNew?.AssetID?.S
                ? Object.values(itemNew.AssetID)[0]
                : null;
              const propertyId = itemNew?.PropertyID?.S
                ? Object.values(itemNew.PropertyID)[0]
                : null;
              return {
                Id: TagUID,
                "Tag Name": TagName,
                Plant,
                Description: description,
                "Plant SAP Code": sapCode,
                assetId,
                propertyId,
              };
            });

            tagItems = tagItems.concat(tempData);
          }
        }

        if (!tagItems.length) {
          // return res.status(404).json({
          //   status: "fail",
          //   code: 404,
          //   message: "No matching tags found for the provided UIDs",
          // });
          const error = new Error(
            `No matching tags found for the provided UIDs`
          );
          error.status = 404;
          return next(error);
        }

        function applyTimeOffset(date) {
          let newDate = new Date(date);
          newDate.setHours(newDate.getHours() + 5);
          newDate.setMinutes(newDate.getMinutes() + 30);
          return newDate;
        }

        const siteWiseData = await getAssetPropertyHistoryValueList(
          tagItems,
          new Date(startTime),
          new Date(endTime)
        );
        // console.log("siteWiseData", siteWiseData);

        if (siteWiseData?.length) {
          const splittedInterval = interval.split("");
          let intervalMs = 0;
          if (splittedInterval[splittedInterval.length - 1] === "m") {
            intervalMs = parseInt(interval, 10) * 60 * 1000;
          } else if (splittedInterval[splittedInterval.length - 1] === "s") {
            intervalMs = parseInt(interval, 10) * 1000;
          }
          const start = new Date(sd);
          const result = [];
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
              const timestamp = applyTimeOffset(binTime)
                .toISOString()
                .replace("Z", "+05:30");
              result.push({
                Id: tag.Id,
                "Tag Name": tag["Tag Name"],
                Plant: tag?.Plant || "",
                Description: tag?.Description || "",
                "Plant SAP Code": tag["Plant SAP Code"],
                Value: (Math.round(avg * 10000) / 10000).toString(),
                Timestamp: timestamp,
              });
            }
            index++;
          }

          return res.status(200).json({
            code: 200,
            status: "success",
            result: result,
            length: result.length,
            tokenExpiresAt: moment(req.tokenExpiresAt)
              .utcOffset(330)
              .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
          });
          //================================
        } else {
          console.error("Received siteWiseData is not an array:", siteWiseData);
          // return res.status(500).json({
          //   status: "fail",
          //   message: "Error processing SiteWise data",
          // });
          const error = new Error(`Error processing SiteWise data`);
          error.status = 500;
          return next(error);
        }
      } else {
        // res.status(400).json({
        //   code: 400,
        //   status: "failed",
        //   message:
        //     "Please enter required details. Either plant name/Plant SAP Code or with array of uid.",
        // });
        const error = new Error(
          `Please enter required details. Either plant name/Plant SAP Code or with array of uid.`
        );
        error.status = 400;
        return next(error);
      }
    } catch (error) {
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: error.message,
      // });
      next(error);
    }
  },

  filterbyUIDAvg2WithPagination: async (req, res, next) => {
    let { sd, ed, csd, ced, pln, pln_code, uid, interval, nextToken } =
      req.body;

    if (!interval) interval = "1m";
    else if (!validateInterval(interval)) {
      const error = new Error(
        `Invalid Interval.(Valid intervals are "1m" to "60m" and "1s" to "60s")`
      );
      error.status = 400;
      return next(error);
    }

    if (!sd || !ed) {
      const error = new Error(`Please provide start date and end date both`);
      error.status = 400;
      return next(error);
    }
    // Checking plant access
    if (
      pln &&
      (!req.plantAccess ||
        !req.plantAccess.includes(pln.match(/[\d\.]+|\D+/g)[0]))
    ) {
      const error = new Error(
        `You only have access to ${req.plantAccess || "no plants"}.`
      );
      error.status = 400;
      return next(error);
    }

    if (pln_code && (!req.sapCode || !req.sapCode.includes(pln_code))) {
      const error = new Error(`You only have access to ${req.sapCode}.`);
      error.status = 400;
      return next(error);
    }

    if (
      (sd && !moment(sd, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) ||
      (csd && !moment(csd, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid())
    ) {
      const error = new Error(
        `Invalid Start Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset.`
      );
      error.status = 400;
      return next(error);
    }

    if (
      (ed && !moment(ed, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) ||
      (ced && !moment(ced, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid())
    ) {
      const error = new Error(
        `Invalid End Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset.`
      );
      error.status = 400;
      return next(error);
    }

    if (sd && ed && Date.parse(sd) > Date.parse(ed)) {
      const error = new Error(`End date must be greater than the start date.`);
      error.status = 400;
      return next(error);
    }

    try {
      if (pln || pln_code) {

        if (Object.keys(req.body).includes("nextToken")) { // with pagination
          let uidArray = [];
          if (uid?.constructor === Array) uidArray = uid;
          else uidArray = uid?.split(",");

          if (!uidArray || uidArray.length === 0 || uid == "") {
            const error = new Error(`Please add at least one uids`);
            error.status = 400;
            return next(error);
          }

          if (uidArray.length > 300) {
            const error = new Error(`You can add maximum 300 uids`);
            error.status = 400;
            return next(error);
          }

          const startTime = sd || csd;
          const endTime = ed || ced;

          let tagItems = [];

          if (!pln && pln_code) {
            const tableParam = {
              TableName: "Plant_Details",
              KeyConditionExpression: "#Plant_SAP_Code = :Plant_SAP_Code",
              ExpressionAttributeNames: {
                "#Plant_SAP_Code": "Plant_SAP_Code",
              },
              ExpressionAttributeValues: {
                ":Plant_SAP_Code": { S: pln_code },
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
              pln = plantData[0]?.Generic_Plant_Code;
            } else {
              const error = new Error(
                `No matching plant found for the provided plant sap code`
              );
              error.status = 404;
              return next(error);
            }
          }

          for (const tagUID of uid) {
            const tagParams = {
              TableName: `${pln}_TagMaster`,
              IndexName: "Tag-UID-index",
              KeyConditionExpression: "#uid = :uidVal",
              ExpressionAttributeNames: {
                "#uid": "Tag UID",
              },
              ExpressionAttributeValues: {
                ":uidVal": { S: tagUID },
              },
            };

            const tagResult = await getQuery(tagParams);

            if (tagResult?.Items?.length) {
              let tempData = tagResult.Items.map((itemNew) => {
                const TagUID = Object.values(itemNew["Tag UID"])[0];
                const TagName = Object.values(itemNew["Tag Name"])[0];
                const Plant = Object.values(itemNew.Plant)[0];
                const description = itemNew["Standard Variable Description"]?.S
                  ? Object.values(itemNew["Standard Variable Description"])[0]
                  : null;
                const sapCode = itemNew["Plant SAP Code"]?.S
                  ? Object.values(itemNew["Plant SAP Code"])[0]
                  : null;
                const assetId = itemNew?.AssetID?.S
                  ? Object.values(itemNew.AssetID)[0]
                  : null;
                const propertyId = itemNew?.PropertyID?.S
                  ? Object.values(itemNew.PropertyID)[0]
                  : null;
                return {
                  Id: TagUID,
                  "Tag Name": TagName,
                  Plant,
                  Description: description,
                  "Plant SAP Code": sapCode,
                  assetId,
                  propertyId,
                };
              });

              tagItems = tagItems.concat(tempData);
            }
          }

          if (!tagItems.length) {
            const error = new Error(
              `No matching tags found for the provided UIDs`
            );
            error.status = 404;
            return next(error);
          }

          function applyTimeOffset(date) {
            let newDate = new Date(date);
            newDate.setHours(newDate.getHours() + 5);
            newDate.setMinutes(newDate.getMinutes() + 30);
            return newDate;
          }

          // const siteWiseData = await getAssetPropertyHistoryValueList(
          //   tagItems,
          //   new Date(startTime),
          //   new Date(endTime)
          // );
          let siteWiseData = [];
          try {
            const batchEntriesArray = chunkArrayHistory(
              tagItems,
              16,
              new Date(startTime),
              new Date(endTime)
            );
            const results = [];
            for (const entries of batchEntriesArray) {
              const paramsPayload = { entries };
              if (nextToken !== "") {
                paramsPayload["nextToken"] = nextToken;
              }
              async function fetchDataSitewise(funcPayload) {
                const command = new BatchGetAssetPropertyValueHistoryCommand(
                  funcPayload
                );
                const response = await client.send(command);
                // console.log(
                //   response?.successEntries[0]?.assetPropertyValueHistory?.length
                // );
                if (
                  response?.nextToken &&
                  response?.successEntries[0]?.assetPropertyValueHistory
                    ?.length === 0
                ) {
                  funcPayload["nextToken"] = response?.nextToken;
                  return await fetchDataSitewise(funcPayload);
                } else {
                  return response;
                }
              }
              const fetchResponse = await fetchDataSitewise(paramsPayload);
              results.push(...fetchResponse.successEntries);
              nextToken = fetchResponse?.nextToken;
            }
            siteWiseData = results;
          } catch (error) {
            console.log("Error getting asset property history value: ", error);
          }

          // console.log("siteWiseData", siteWiseData);

          if (siteWiseData?.length) {
            const splittedInterval = interval.split("");
            let intervalMs = 0;
            if (splittedInterval[splittedInterval.length - 1] === "m") {
              intervalMs = parseInt(interval, 10) * 60 * 1000;
            } else if (splittedInterval[splittedInterval.length - 1] === "s") {
              intervalMs = parseInt(interval, 10) * 1000;
            }
            const start = new Date(sd);
            const result = [];
            let index = 1;
            //===============================

            for (const tag of tagItems || []) {
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
                const timestamp = applyTimeOffset(binTime)
                  .toISOString()
                  .replace("Z", "+05:30");
                result.push({
                  Id: tag.Id,
                  "Tag Name": tag["Tag Name"],
                  Plant: tag?.Plant || "",
                  Description: tag?.Description || "",
                  "Plant SAP Code": tag["Plant SAP Code"],
                  Value: (Math.round(avg * 10000) / 10000).toString(),
                  Timestamp: timestamp,
                });
              }
              index++;
            }
            if (req.body.nextToken !== "") {
              result.shift();
            }

            if (!result.length) {
              const error = new Error(`No data available for given tag in given timeline`);
              error.status = 404;
              return next(error);
            }

            return res.status(200).json({
              code: 200,
              status: "success",
              nextToken: nextToken,
              result: result,
              length: result.length,
              tokenExpiresAt: moment(req.tokenExpiresAt)
                .utcOffset(330)
                .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            });
            //================================
          } else {
            console.error("Received siteWiseData is not an array:", siteWiseData);
            const error = new Error(`Error processing SiteWise data`);
            error.status = 500;
            return next(error);
          }
        } else { // Without Pagination
          let uidArray = [];
          if (uid?.constructor === Array) uidArray = uid;
          else uidArray = uid?.split(",");

          if (!uidArray || uidArray.length === 0 || uid == "") {
            const error = new Error(`Please add at least one uids`);
            error.status = 400;
            return next(error);
          }

          if (uidArray.length > 300) {
            const error = new Error(`You can add maximum 300 uids`);
            error.status = 400;
            return next(error);
          }

          const startTime = sd || csd;
          const endTime = ed || ced;

          let tagItems = [];

          if (!pln && pln_code) {
            const tableParam = {
              TableName: "Plant_Details",
              KeyConditionExpression: "#Plant_SAP_Code = :Plant_SAP_Code",
              ExpressionAttributeNames: {
                "#Plant_SAP_Code": "Plant_SAP_Code",
              },
              ExpressionAttributeValues: {
                ":Plant_SAP_Code": { S: pln_code },
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
              pln = plantData[0]?.Generic_Plant_Code;
            } else {
              const error = new Error(
                `No matching plant found for the provided plant sap code`
              );
              error.status = 404;
              return next(error);
            }
          }

          for (const tagUID of uid) {
            const tagParams = {
              TableName: `${pln}_TagMaster`,
              IndexName: "Tag-UID-index",
              KeyConditionExpression: "#uid = :uidVal",
              ExpressionAttributeNames: {
                "#uid": "Tag UID",
              },
              ExpressionAttributeValues: {
                ":uidVal": { S: tagUID },
              },
            };

            const tagResult = await getQuery(tagParams);

            if (tagResult?.Items?.length) {
              let tempData = tagResult.Items.map((itemNew) => {
                const TagUID = Object.values(itemNew["Tag UID"])[0];
                const TagName = Object.values(itemNew["Tag Name"])[0];
                const Plant = Object.values(itemNew.Plant)[0];
                const description = itemNew["Standard Variable Description"]?.S
                  ? Object.values(itemNew["Standard Variable Description"])[0]
                  : null;
                const sapCode = itemNew["Plant SAP Code"]?.S
                  ? Object.values(itemNew["Plant SAP Code"])[0]
                  : null;
                const assetId = itemNew?.AssetID?.S
                  ? Object.values(itemNew.AssetID)[0]
                  : null;
                const propertyId = itemNew?.PropertyID?.S
                  ? Object.values(itemNew.PropertyID)[0]
                  : null;
                return {
                  Id: TagUID,
                  "Tag Name": TagName,
                  Plant,
                  Description: description,
                  "Plant SAP Code": sapCode,
                  assetId,
                  propertyId,
                };
              });

              tagItems = tagItems.concat(tempData);
            }
          }

          if (!tagItems.length) {
            const error = new Error(
              `No matching tags found for the provided UIDs`
            );
            error.status = 404;
            return next(error);
          }

          function applyTimeOffset(date) {
            let newDate = new Date(date);
            newDate.setHours(newDate.getHours() + 5);
            newDate.setMinutes(newDate.getMinutes() + 30);
            return newDate;
          }

          const siteWiseData = await getAssetPropertyHistoryValueList(
            tagItems,
            new Date(startTime),
            new Date(endTime)
          );
          // console.log("siteWiseData", siteWiseData);

          if (siteWiseData?.length) {
            const splittedInterval = interval.split("");
            let intervalMs = 0;
            if (splittedInterval[splittedInterval.length - 1] === "m") {
              intervalMs = parseInt(interval, 10) * 60 * 1000;
            } else if (splittedInterval[splittedInterval.length - 1] === "s") {
              intervalMs = parseInt(interval, 10) * 1000;
            }
            const start = new Date(sd);
            const result = [];
            let index = 1;
            //===============================

            for (const tag of tagItems || []) {
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
                const timestamp = applyTimeOffset(binTime)
                  .toISOString()
                  .replace("Z", "+05:30");
                result.push({
                  Id: tag.Id,
                  "Tag Name": tag["Tag Name"],
                  Plant: tag?.Plant || "",
                  Description: tag?.Description || "",
                  "Plant SAP Code": tag["Plant SAP Code"],
                  Value: (Math.round(avg * 10000) / 10000).toString(),
                  Timestamp: timestamp,
                });
              }
              index++;
            }

            if (!result.length) {
              const error = new Error(`No data available for given tag in given timeline`);
              error.status = 404;
              return next(error);
            }

            return res.status(200).json({
              code: 200,
              status: "success",
              result: result,
              length: result.length,
              tokenExpiresAt: moment(req.tokenExpiresAt)
                .utcOffset(330)
                .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            });
            //================================
          } else {
          console.error("Received siteWiseData is not an array:", siteWiseData);
            const error = new Error(`Error processing SiteWise data`);
            error.status = 500;
            return next(error);
          }
        }



      } else {
        const error = new Error(
          `Please enter required details. Either plant name/Plant SAP Code or with array of uid.`
        );
        error.status = 400;
        return next(error);
      }
    } catch (error) {
      next(error);
    }
  },
};
