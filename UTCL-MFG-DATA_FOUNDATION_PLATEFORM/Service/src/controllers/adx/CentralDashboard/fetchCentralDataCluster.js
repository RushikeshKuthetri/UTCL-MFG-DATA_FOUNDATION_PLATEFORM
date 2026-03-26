// const client = require("../../../db/connection");
const { getScan } = require("../../../helpers/dynamoDB");

module.exports = {
  fetchCentralDataCluster: async (req, res, next) => {
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
    let plants = {};
    try {
      // const result = await client.execute("utcprmfgadxiotpd-db", `fn_centralMimics_dashboard_master_getData()`);

      // const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]))?.data;

      const params = {
        TableName: `Central_Mimic_Dashboard_Master`,
      };

      const result = await getScan(params);
      let newResult = [];

      // console.log(result?.Items?.length);

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
          const Sequence = parseInt(Object.values(item.Sequence)[0]);
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
            Sequence,
          };
        });
      }

      let filterResult = {};
      newResult.forEach((val) => {
        plants[val["Generic Code"]] = val["Generic Code"];

        let objKey = val.Cluster + val.Type + val["Generic Code"];
        if (!filterResult[val.Cluster]) {
          filterResult[val.Cluster] = {};
        }

        if (!filterResult[val.Cluster][objKey]) {
          filterResult[val.Cluster][objKey] = {
            ...val,
            [val.Section + "-" + val["Section_Number"]]: {
              tagName: val["DCS Aanalog TPH Tag"],
              tagUid: val["TPH UID"],
            },
          };
          delete filterResult[val.Cluster][objKey].Section;
          delete filterResult[val.Cluster][objKey].Section_Number;
          delete filterResult[val.Cluster][objKey]["Plant SAP Code"];
          delete filterResult[val.Cluster][objKey]["DCS Aanalog TPH Tag"];
          delete filterResult[val.Cluster][objKey]["TPH UID"];
        } else {
          filterResult[val.Cluster][objKey] = {
            ...filterResult[val.Cluster][objKey],
            [val.Section + "-" + val["Section_Number"]]: {
              tagName: val["DCS Aanalog TPH Tag"],
              tagUid: val["TPH UID"],
            },
          };
        }
      });

      Object.keys(filterResult).forEach((key) => {
        filterResult[key] = Object.values(filterResult[key]);
      });
      filterResult.Plants = Object.values(plants);
      //  filterResult.sort((a,b)=>{
      //   console.log(sortOrder[a.Cluster] , sortOrder[b.Cluster] )
      //   return sortOrder[a.Cluster] - sortOrder[b.Cluster]
      //  })

      Object.keys(filterResult).forEach((clusterKey) => {
        if (Array.isArray(filterResult[clusterKey])) {
          filterResult[clusterKey].sort((a, b) => a.Sequence - b.Sequence);
        }
      });

      // old code logic
      // const resultCount = await client.execute("utcprmfgadxiotpd-db", `fn_centralMimics_dashboard_sectionCount_getData()`);
      // const newResultCount = JSON.parse(JSON.stringify(resultCount.primaryResults[0]))?.data;

      const newResultCount = newResult.reduce((acc, newItem) => {
        const section = newItem.Section;
        const existingSection = acc.find((item) => item.Section === section);
        if (existingSection) {
          existingSection.count_++;
        } else {
          acc.push({ Section: section, count_: 1 });
        }
        return acc;
      }, []);

      // console.log(sectionCounts);
      // console.log(newResultCount);

      filterResult.runningKilnsCount = newResultCount?.find(
        (key) => key.Section === "Kiln"
      )?.count_;
      filterResult.runningCementMillsCount = newResultCount?.find(
        (key) => key.Section === "Cement Mill"
      )?.count_;

      res.status(200).json({
        code: 200,
        status: "success",
        data: filterResult,
      });
    } catch (error) {
      console.log(error);
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
