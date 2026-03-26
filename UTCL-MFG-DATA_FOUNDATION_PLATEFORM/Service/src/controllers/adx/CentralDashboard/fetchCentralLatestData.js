// const client = require("../../../db/connection");
const { getScan } = require("../../../helpers/dynamoDB");
const { getAssetPropertyValue } = require("../../../helpers/iotSitewise");

module.exports = {
  fetchCentralLatestData: async (req, res, next) => {
    // const { userId } = req.body;

    // if (userId != req.user) {
    //   return res.status(401).json({ message: "Not authorized, token invalid" });
    // }

    try {
      // const result = await client.execute("utcprmfgadxiotpd-db", `Fn_DftScr_Central_Dashboard()`);
      // const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

      const params = {
        TableName: `Central_Mimic_Dashboard_Master`,
      };

      const scanResult = await getScan(params);
      let tagList = [];

      // console.log(scanResult?.Items?.length);

      if (scanResult?.Items?.length) {
        tagList = scanResult.Items.map((item) => {
          const Cluster = item?.Cluster?.S
            ? Object.values(item.Cluster)[0]
            : null;
          const Type = item?.Type?.S ? Object.values(item.Type)[0] : null;
          const PlantSAPCode = item["Plant SAP Code"]?.S
            ? Object.values(item["Plant SAP Code"])[0]
            : null;
          const GenericCode = item["Generic Code"]?.S
            ? Object.values(item["Generic Code"])[0]
            : null;
          const Plant_Full_Name = item?.Plant_Full_Name?.S
            ? Object.values(item.Plant_Full_Name)[0]
            : null;
          const Section_Number = item?.Section_Number?.S
            ? parseInt(Object.values(item.Section_Number)[0])
            : null;
          const Section = item?.Section?.S
            ? Object.values(item.Section)[0]
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
            Cluster,
            Type,
            "Plant SAP Code": PlantSAPCode,
            "Generic Code": GenericCode,
            Plant_Full_Name,
            Section_Number,
            Section,
            "TPH UID": TPHUID,
            "DCS Aanalog TPH Tag": DCSAanalogTPHTag,
            assetId,
            propertyId,
          };
        });
      }

      // console.log(newResult);

      if (tagList.length === 0) {
        return res.status(404).json({
          code: 404,
          status: "failed",
          message: "No data found with selected combination!!",
        });
      }
      const result = await getAssetPropertyValue(tagList);
      const newResult = tagList.map((item, index) => {
        const obj = result.find(
          (findItem) => findItem.entryId === `${index + 1}`
        );
        const valueObject = obj?.assetPropertyValue?.value;
        let value = null;
        let timestamp = null;
        if (valueObject) {
          value = Object.values(valueObject)[0];
        }
        if (obj?.assetPropertyValue?.timestamp?.timeInSeconds) {
          timestamp = new Date(
            obj.assetPropertyValue.timestamp.timeInSeconds * 1000
          );
        }
        return {
          key: item["DCS Aanalog TPH Tag"],
          value,
          plant: item["Generic Code"],
          timestamp,
        };
      });

      res.status(200).json({
        code: 200,
        status: "success",
        result: newResult,
        length: newResult.length,
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
};
