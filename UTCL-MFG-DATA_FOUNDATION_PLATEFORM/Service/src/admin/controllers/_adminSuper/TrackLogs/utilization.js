const connection = require("../../../../db/connectionsql");
const { sGen } = require("../../../utils/stringGenerator");

module.exports = {
  utilization: async (req, res, next) => {
    const { superAdminid, startDate, endDate, modules, plants } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!startDate || !endDate || plants?.constructor != Array || plants?.length == 0 || modules?.constructor != Array) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    if (Date.parse(startDate) > Date.parse(endDate)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `End date must be greater than the start date.`,
      });
    }

    try {
      stringPlants = sGen(plants ? plants : []);
      stringModules = sGen(modules ? modules : []);
      parameters = `'${stringModules}','${stringPlants}','${startDate}','${endDate}'`;
      if (stringModules == "") {
        Query = `exec [dbo].[SP_accesslogs_utilisation_allmodules_fortesting_Logs] ${parameters}`;
      } else {
        Query = `exec [dbo].[SP_accesslogs_utilisation_fortesting_Logs] ${parameters}`;
      }

      const result = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      let formattedData = {};

      result.forEach((entry) => {
        const { Date, Plant, Utilisation, Total, Module } = entry;
        if (!formattedData[Plant]) {
          formattedData[Plant] = [];
        }
        formattedData[Plant].push({ Date, Total, Module, Utilisation });
      });

      let finalResult = Object.entries(formattedData).map(([plant, entries]) => ({ [plant]: entries }));

      res.status(200).json({
        code: 200,
        status: "success",
        data: finalResult,
        length: finalResult.length,
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        error: "Something Went Wrong!Try Again.",
      });
    }
  },
};
