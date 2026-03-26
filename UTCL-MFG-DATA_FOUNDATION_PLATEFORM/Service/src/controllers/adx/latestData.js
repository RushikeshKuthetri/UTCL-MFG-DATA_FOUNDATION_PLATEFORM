const { sGen } = require("../../utils/stringGenerator");

const client = require("../../db/connection");
const { getAssetPropertyValue } = require("../../helpers/iotSitewise");

module.exports = {
  latestData: async (req, res, next) => {
    const { userId, plants } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    // console.log(req.body);

    var stringPlants = "";

    if (plants) {
      stringPlants = sGen(plants);
    }

    // console.log(`Fn_DftScr_Mimic('${stringPlants}')`);

    try {
      const result = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_DftScr_Mimic_latest_data('${stringPlants}')`
      );
      const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

      // console.log(newResult);

      if (newResult.data.length === 0) {
        return res.status(404).json({
          code: 404,
          status: "failed",
          message: "No data found with selected combination!!",
        });
      }

      res.status(200).json({
        code: 200,
        status: "success",
        result: newResult.data,
        length: newResult.data.length,
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },

  latestDataNew: async (req, res, next) => {
    const { userId, tagList } = req.body;
    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    try {
      const result = await getAssetPropertyValue(tagList);
      // console.log(newResult);
      let newResult = []

      if (result.length > 0) {
        // return res.status(404).json({
        //   code: 404,
        //   status: "failed",
        //   message: "No data found with selected combination!!",
        // });
        newResult = tagList.map((item, index) => {
          const obj = result.find(findItem => findItem.entryId === `${index+1}`)
          const valueObject = obj?.assetPropertyValue?.value;
          let value = null;
          if (valueObject) {
            value = Object.values(valueObject)[0]
          }
          return {
            ...item,
            value,
          }
        })
      }

      res.status(200).json({
        code: 200,
        status: "success",
        result: newResult,
        length: newResult.length,
      });
    } catch (error) {
      console.log("LATEST DATA ERROR", error)
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
};
