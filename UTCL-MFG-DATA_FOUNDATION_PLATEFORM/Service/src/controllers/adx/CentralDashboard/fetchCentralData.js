// const client = require("../../../db/connection");
const { getScan } = require("../../../helpers/dynamoDB");

module.exports = {
  fetchCentralData: async (req, res, next) => {
    // const { userid } = req.body;

    // if (userid != req.user) {
    //   return res.status(401).json({ error: "Not authorized, token invalid" });
    // }

    // if (!userid) {
    //   return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    // }

    let sortOrder = {
      North: 1,
      Central: 2,
      East: 3,
      Vidharbha: 4,
      West: 5,
      South: 6,
    };
    try {
      // result = await client.execute("utcprmfgadxiotpd-db", `fn_centralMimics_dashboard_master_getData()`);

      // const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]))?.data;

      let params = {
        TableName: `Central_Mimic_Dashboard_Master`,
      };

      const result = await getScan(params);
      let newResult = []

      if (result?.Items?.length) {
        newResult = result.Items.map((item) => {
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
          };
        });
      }
      let filterResult = {};
      newResult.forEach((val) => {
        let objKey = val.Cluster + val.Zone + val.Type + val["Generic Code"];
        if (!filterResult[objKey]) {
          filterResult[objKey] = {
            ...val,
            [val.Section + "-" + val["Section_Number"]]: {
              tagName: val["DCS Aanalog TPH Tag"],
              tagUid: val["TPH UID"],
            },
          };
          delete filterResult[objKey].Section;
          delete filterResult[objKey].Section_Number;
          delete filterResult[objKey]["Plant SAP Code"];
          delete filterResult[objKey]["DCS Aanalog TPH Tag"];
          delete filterResult[objKey]["TPH UID"];
        } else {
          filterResult[objKey] = {
            ...filterResult[objKey],
            [val.Section + "-" + val["Section_Number"]]: {
              tagName: val["DCS Aanalog TPH Tag"],
              tagUid: val["TPH UID"],
            },
          };
        }
      });
      filterResult = Object.values(filterResult);
      filterResult.sort((a, b) => {
        // console.log(sortOrder[a.Cluster], sortOrder[b.Cluster]);
        return sortOrder[a.Cluster] - sortOrder[b.Cluster];
      });
      res.status(200).json({
        code: 200,
        status: "success",
        data: filterResult,
      });
    } catch (error) {
      // console.log(error);
      res.status(400).json({
        code: 400,
        status: "failed",
        error: "Something Went Wrong!Try Again.",
      });
    }
  },
};
