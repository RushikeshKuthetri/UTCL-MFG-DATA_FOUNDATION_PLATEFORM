const moment = require("moment");
const {
  getQuery,
  getQueryWithoutPagination,
} = require("../../helpers/dynamoDB");
const {
  getAssetPropertyHistoryValueList,
} = require("../../helpers/iotSitewise");

module.exports = {
  filterbyUIDs: async (req, res, next) => {
    // const authToken = req.headers.authorization;
    // if (!authToken || authToken !== process.env.EXPECTED_TOKEN) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }

    // Destructure short form input keys directly
    const { sd, ed, csd, ced, pln, uid, pln_code } = req.body;

    ///CHECKING FOR EMPTY OR NULL START DATE AND END DATE
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

    if ((!sd && !ed) || (sd && !ed) || (!sd && ed)) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `Please provide both start date and end date.`,
      // });
      const error = new Error(`Please provide both start date and end date.`);
      error.status = 400;
      return next(error);
    }

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

    ///CHECKING FOR CORRECT PLANT ACCESS
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
        `Invalid Start Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset`
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

    if (pln || pln_code) {
      let uidArray = "";
      if (uid?.constructor === Array) {
        uidArray = uid;
      } else {
        uidArray = uid?.split(",");
      }
      uidArray = uidArray ? uidArray : "";

      if (!uidArray?.length) {
        // return res.status(400).json({
        //   code: 400,
        //   status: "failed",
        //   message: "Please provide at least one uid",
        // });
        const error = new Error(`Please provide at least one uid`);
        error.status = 400;
        return next(error);
      } else if (uidArray.length > 150) {
        // return res.status(400).json({
        //   code: 400,
        //   status: "failed",
        //   message: "You can add maximum 150 uids",
        // });
        const error = new Error(`You can add maximum 150 uids`);
        error.status = 400;
        return next(error);
      }
    } else {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message:
      //     "Please enter required details. Either plant name or plant name with array of uid.",
      // });
      const error = new Error(
        `Please enter required details. Either plant name or plant name with array of uid.`
      );
      error.status = 400;
      return next(error);
    }

    let plantName = pln;
    const tagUIDs = uid;
    const startDate = sd ?? csd;
    const endDate = ed ?? ced;

    try {
      // Fetch tag metadata from DynamoDB using GSI 'Tag-UID-index'
      let tagItems = [];

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
          //   message: "No matching plant found for the provided plant sap code",
          // });
          const error = new Error(
            `No matching plant found for the provided plant sap code.`
          );
          error.status = 400;
          return next(error);
        }
      }

      for (const tagUID of tagUIDs) {
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
              Plant: plantName,
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
          `No matching tags found for the provided plant UIDs.`
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
        new Date(startDate),
        new Date(endDate)
      );
      // Ensure siteWiseData is an array before using .forEach
      if (siteWiseData?.length) {
        let finalResult = [];
        let index = 1;
        for (let item of tagItems) {
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
          if (assetPropertyValueHistory?.length) {
            const arr = assetPropertyValueHistory.map((mapItem) => {
              let timeStamp = applyTimeOffset(
                mapItem.timestamp.timeInSeconds * 1000
              ).toISOString();
              timeStamp = timeStamp.replace("Z", "+05:30");
              let value = mapItem?.value?.doubleValue;
              return {
                Id: item.Id,
                "Tag Name": item["Tag Name"],
                Plant: item.Plant,
                Description: item.Description,
                "Plant SAP Code": item["Plant SAP Code"],
                Value: value ? `${Number(Number(value).toFixed(4))}` : null,
                Timestamp: timeStamp,
                Created_Timestamp: timeStamp,
              };
            });
            finalResult = [...finalResult, ...arr];
          }
          index++;
        }

        // Safety check on result size
        if (finalResult.length > 50000) {
          // return res.status(400).json({
          //   status: "fail",
          //   message: "Result set exceeds the 50,000 record limit",
          // });
          const error = new Error(
            `Result set exceeds the 50,000 record limit.`
          );
          error.status = 400;
          return next(error);
        }

        // Return as per expected format
        return res.status(200).json({
          code: 200,
          status: "success",
          result: finalResult,
          length: finalResult.length,
          tokenExpiresAt: moment(req.tokenExpiresAt)
            .utcOffset(330)
            .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        });
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
    } catch (error) {
      console.error("filterbyUIDs error:", error);
      // return res.status(500).json({
      //   status: "failed",
      //   message: "Internal server error. Please try again.",
      // });
      next(error);
    }
  },
};
/*
OLD ADX CODE:

const result = await client.execute(
  "utcprmfgadxiotpd-db",
  `fn_API_MltUidCount('${newString}','${pln ? pln : pln_code}','${sd ? moment(sd).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}','${ed ? moment(ed).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}','${csd ? moment(csd).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}','${ced ? moment(ced).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}')`
);

const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));
const selectedData = newResult.data;

if (selectedData[0].Count > 50000) {
  return res.status(400).json({ ... });
} else {
  const result = await client.execute(
    "utcprmfgadxiotpd-db",
    `fn_API_MltUid('${newString}','${pln ? pln : pln_code}','${sd ? moment(sd).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}','${ed ? moment(ed).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}','${csd ? moment(csd).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}','${ced ? moment(ced).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : ""}')`
  );

  const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));
  const selectedData = newResult.data;
  ...
}
*/
