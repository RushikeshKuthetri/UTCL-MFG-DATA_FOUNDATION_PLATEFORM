const moment = require("moment");
const {
  getQuery,
  getQueryWithoutPagination,
} = require("../../helpers/dynamoDB");
const {
  getAssetPropertyHistoryValueList,
} = require("../../helpers/iotSitewise");

module.exports = {
  filterbyUIDAvg: async (req, res, next) => {
    const { sd, ed, csd, ced, pln, pln_code, uid, interval } = req.body;

    /////CHECKING FOR CORRECT INTERVAL
    if (interval && (!(interval > 0) || !(interval <= 60))) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `Invalid Interval.(Valid intervals are >0 && <=60)`,
      // });
      const error = new Error(
        `Invalid Interval.(Valid intervals are >0 && <=60).`
      );
      error.status = 400;
      return next(error);
    }

    /////CHECKING FOR EMPTY OR NULL START DATE AND END DATE
    // if (
    //   (sd != null && (csd != null || ced != null)) ||
    //   (ed != null && (csd != null || ced != null))
    // ) {
    //   return res.status(400).json({
    //     code: 400,
    //     status: "failed",
    //     message: `Either provide created-timestamp or timestamp.`,
    //   });
    // }

    // if (
    //   (sd != null && sd == "") ||
    //   (ed != null && ed == "") ||
    //   (sd != null && ed == null) ||
    //   (ed != null && sd == null)
    // ) {
    //   return res.status(400).json({
    //     code: 400,
    //     status: "failed",
    //     message: `Please provide start date and end date.`,
    //   });
    // }

    // if (
    //   (csd != null && csd == "") ||
    //   (ced != null && ced == "") ||
    //   (csd != null && ced == null) ||
    //   (ced != null && csd == null)
    // ) {
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

    //CHECKING FOR CORRECT PLANT ACCESS
    if (pln && !req.plantAccess.includes(pln.match(/[\d\.]+|\D+/g)[0])) {
      // console.log(pln.match(/[\d\.]+|\D+/g)[0]);
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `You only have access to ${req.plantAccess}.`,
      // });
      const error = new Error(`You only have access to ${req.plantAccess}.`);
      error.status = 400;
      return next(error);
    }

    if (pln_code && !req.sapCode.includes(pln_code)) {
      // console.log(pln.match(/[\d\.]+|\D+/g)[0]);
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `You only have access to ${req.sapCode}.`,
      // });
      const error = new Error(`You only have access to ${req.sapCode}.`);
      error.status = 400;
      return next(error);
    }

    ////CHECKING FOR CORRECT DATE FORMAT
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
        `Invalid End Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset.`
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
        uidArray = "";
        if (uid?.constructor === Array) {
          uidArray = uid;
        } else {
          uidArray = uid?.split(",");
        }
        uidArray = uidArray ? uidArray : "";

        if (uidArray.length == 0 || uid == "") {
          // return res.status(400).json({
          //   code: 400,
          //   status: "failed",
          //   message: "Please add uids",
          // });
          const error = new Error(`Please add minimum one uid.`);
          error.status = 400;
          return next(error);
        }

        if (uidArray.length > 300) {
          // return res.status(400).json({
          //   code: 400,
          //   status: "failed",
          //   message: "You can add maximum 300 uids",
          // });
          const error = new Error(`You can add maximum 300 uids.`);
          error.status = 400;
          return next(error);
        }

        let tagItems = [];
        let plantName = pln;
        const startTime = sd || csd;
        const endTime = ed || ced;

        if (!plantName && pln_code) {
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
            plantName = plantData[0]?.Generic_Plant_Code;
          } else {
            // return res.status(404).json({
            //   status: "fail",
            //   code: 404,
            //   message:
            //     "No matching plant found for the provided plant sap code",
            // });
            const error = new Error(
              `No matching plant found for the provided plant sap code.`
            );
            error.status = 404;
            return next(error);
          }
        }

        // const validResolutions = ["1m", "15m", "60m"];
        // const intervalNew = interval ? interval + "m" : "1m";
        // const isResolutionValid = validResolutions.includes(intervalNew);
        // const resolution = isResolutionValid
        //   ? intervalNew === "60m"
        //     ? "1h"
        //     : intervalNew
        //   : "1m";

        for (const tagUID of uidArray) {
          const tagParams = {
            TableName: `${plantName}_TagMaster`,
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
                Plant: pln,
                Description: description,
                "Plant SAP Code": sapCode,
                assetId,
                propertyId,
                // aggregateTypes: ["AVERAGE"],
                // resolution: resolution,
                startDate: new Date(sd),
                endDate: new Date(ed),
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
            `No matching tags found for the provided UIDs.`
          );
          error.status = 400;
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

        if (siteWiseData?.length) {
          const intervalMs = parseInt(interval, 10) * 60 * 1000;
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
                Value: avg > 0 ? avg.toFixed(4) : avg,
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
          const error = new Error(`Error processing SiteWise data.`);
          error.status = 500;
          return next(error);
        }
      } else {
        // res.status(400).json({
        //   code: 400,
        //   status: "failed",
        //   message:
        //     "Please enter required details.Either plant name/Plant SAP Code or plant name/Plant SAP Code with array of uid.",
        // });
        const error = new Error(
          `Please enter required details.Either plant name/Plant SAP Code or plant name/Plant SAP Code with array of uid.`
        );
        error.status = 400;
        return next(error);
      }
    } catch (error) {
      console.log(error);
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: error.message,
      // });
      // res.status(400).json(error);
      next(error);
    }
  },
};
