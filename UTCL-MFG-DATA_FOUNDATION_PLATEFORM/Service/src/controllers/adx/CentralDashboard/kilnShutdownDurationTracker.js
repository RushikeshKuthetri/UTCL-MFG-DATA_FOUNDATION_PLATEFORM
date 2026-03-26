// const client = require("../../../db/connection");
const { getAssetPropertyValue } = require("../../../helpers/iotSitewise");
const { getQuery } = require("../../../helpers/dynamoDB");

module.exports = {
  // kilnShutdownDurationTracker: async (req, res, next) => {
  //   const { userId } = req.body;

  //   if (userId != req.user) {
  //     return res.status(401).json({ message: "Not authorized, token invalid" });
  //   }

  //   try {
  //     const result = await client.execute("utcprmfgadxiotpd-db", `Fn_Kiln_Central_Dashboard_DayDiff()`);
  //     const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

  //     // console.log(newResult);

  //     if (newResult.data.length === 0) {
  //       return res.status(404).json({
  //         code: 404,
  //         status: "failed",
  //         message: "No data found with selected combination!!",
  //       });
  //     }

  //     res.status(200).json({
  //       code: 200,
  //       status: "success",
  //       result: newResult.data,
  //       length: newResult.data.length,
  //     });
  //   } catch (error) {
  //     res.status(400).json({
  //       code: 400,
  //       status: "failed",
  //       message: "Something Went Wrong!Try Again.",
  //     });
  //   }
  // },

  kilnShutdownDurationTracker: async (req, res, next) => {
    const { userId } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    try {
      const params = {
        TableName: "Central_Mimic_Dashboard_Master",
        IndexName: "Section-index",
        KeyConditionExpression: "#section = :sectionVal",
        ExpressionAttributeNames: {
          "#section": "Section",
        },
        ExpressionAttributeValues: {
          ":sectionVal": { S: "Kiln" },
        },
      };

      const queryResult = await getQuery(params);
      let tagList = [];
      if (queryResult?.Items?.length) {
        tagList = queryResult.Items.map((item) => {
          const GenericCode = item["Generic Code"]?.S
            ? Object.values(item["Generic Code"])[0]
            : null;
          const TPHUID = item["TPH UID"]?.S
            ? Object.values(item["TPH UID"])[0]
            : null;
          const DCSAanalogTPHTag = item["DCS Aanalog TPH Tag"]?.S
            ? Object.values(item["DCS Aanalog TPH Tag"])[0]
            : null;
          const assetId = item?.AssetID?.S
            ? Object.values(item.AssetID)[0]
            : null;
          const propertyId = item?.PropertyID?.S
            ? Object.values(item.PropertyID)[0]
            : null;
          return {
            "Generic Code": GenericCode,
            "TPH UID": TPHUID,
            "DCS Aanalog TPH Tag": DCSAanalogTPHTag,
            assetId,
            propertyId,
          };
        });
      }

      const finalArray = [];
      const latestValues = await getAssetPropertyValue(tagList);

      let entry = 1;
      for (const item of tagList) {
        const finalObj = {
          Plant: item["Generic Code"],
          Id: item["TPH UID"],
          day_diff: 0,
          isLatestDataComing: false,
          "DCS Aanalog TPH Tag": item["DCS Aanalog TPH Tag"],
        };
        let latestTime;
        let dayDiff = 0;
        const latestValue = latestValues.find(
          (findItem) => findItem.entryId === `${entry}`
        );
        if (latestValue?.assetPropertyValue?.timestamp?.timeInSeconds) {
          latestTime =
            latestValue?.assetPropertyValue?.timestamp?.timeInSeconds;
        }
        if (latestTime) {
          const currentTime = Math.floor(new Date().getTime() / 1000);
          const differenceInSeconds = currentTime - latestTime;
          dayDiff = Math.floor(differenceInSeconds / (60 * 60 * 24));
          if (dayDiff <= 0) {
            dayDiff = 0;
            finalObj.isLatestDataComing = true;
            const timeParams = {
              TableName: "Central_Mimic_Dashboard_Tag_Values",
              KeyConditionExpression: "#tagUid = :tagUidVal",
              ExpressionAttributeNames: {
                "#tagUid": "Tag UID",
              },
              ExpressionAttributeValues: {
                ":tagUidVal": { S: item["TPH UID"] },
              },
            };
            const newResult = await getQuery(timeParams);
            if (newResult?.Items?.length) {
              const detailVal = newResult?.Items[0];
              const thresholdTimestamp = detailVal?.timestamp?.S
                ? Object.values(detailVal.timestamp)[0]
                : null;
              if (thresholdTimestamp) {
                const thresholdTimeInSeconds = Math.floor(new Date(thresholdTimestamp).getTime() / 1000);
                let diffInSec = currentTime - thresholdTimeInSeconds;
                let diff = Math.floor(diffInSec / (60 * 60 * 24));
                if (diff <= 0 || !diff) diff = 0;
                dayDiff = diff
              }
            }
          }
          finalObj.day_diff = dayDiff;
        }
        finalArray.push(finalObj);
        entry++;
      }

      res.status(200).json({
        code: 200,
        status: "success",
        result: finalArray,
        length: finalArray.length,
      });
    } catch (error) {
      next(error);
    }
  },
};
