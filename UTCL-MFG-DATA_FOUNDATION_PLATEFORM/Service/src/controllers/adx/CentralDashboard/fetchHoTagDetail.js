const { getQuery, getScan } = require("../../../helpers/dynamoDB");

module.exports = {
  hoTagDetail: async (req, res, next) => {
    const { tagUid, tagName } = req.body;
    try {
      let resultList = [];
      let queryResult;
      if (tagUid) {
        const params = {
          TableName: "Central_Mimic_Dashboard_Master",
          KeyConditionExpression: "#tagUID = :tagUid",
          ExpressionAttributeNames: {
            "#tagUID": "TPH UID",
          },
          ExpressionAttributeValues: {
            ":tagUid": { S: tagUid },
          },
        };
        queryResult = await getQuery(params);
      } else if (tagName) {
        const params = {
          TableName: "Central_Mimic_Dashboard_Master",
          IndexName: "Tag-Name-index",
          KeyConditionExpression: "#tagName = :tagName",
          ExpressionAttributeNames: {
            "#tagName": "DCS Aanalog TPH Tag",
          },
          ExpressionAttributeValues: {
            ":tagName": { S: tagName },
          },
        };
        queryResult = await getQuery(params);
      } else {
        const params = {
          TableName: "Central_Mimic_Dashboard_Master",
        };
        queryResult = await getScan(params);
      }
      if (queryResult?.Items?.length) {
        resultList = queryResult.Items.map((item) => {
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
          const Description = item?.Description?.S
            ? Object.values(item.Description)[0]
            : null
          return {
            "Generic Code": GenericCode,
            "TPH UID": TPHUID,
            "TagUID": TPHUID,
            "DCS Aanalog TPH Tag": DCSAanalogTPHTag,
            TagName: DCSAanalogTPHTag,
            assetId,
            propertyId,
            description: Description
          };
        });
      } else {
        const error = new Error("Tag Details not found");
        error.status = 400;
        return next(error);
      }

      res.status(200).json({
        code: 200,
        status: "success",
        result: resultList,
        length: resultList.length,
      });
    } catch (error) {
      next(error);
    }
  },
};
