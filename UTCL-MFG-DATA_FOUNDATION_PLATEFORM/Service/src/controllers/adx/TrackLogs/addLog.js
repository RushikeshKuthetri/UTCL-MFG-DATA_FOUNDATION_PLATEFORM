const connection = require("../../../db/connectionsql");
const moment = require("moment");
module.exports = {
  addLog: async (req, res, next) => {
    const { userId, ip, module, plant, url, options, plant_or_section } = req.body;

    if (!userId || !ip || !module || !plant || !url) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    try {
      ////add user////
      let paramaters = `
            @datetime =?,
            @UserID =?,
            @ip =?,
            @module =?,
            @plant =?,
            @url =?,
            @options =?,
            @plant_or_section =?`;

      const datetime = moment().utcOffset(330).format("YYYY-MM-DD HH:mm:ss");

      replacementArray = [datetime, userId, ip, module, plant, url, options ? options : "", plant_or_section ? plant_or_section : ""];

      Query = "exec [Admin].[sp_UserAccessLog_Insert]" + paramaters;

      const result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      ////add user////

      res.status(200).json({
        code: 200,
        status: "success",
        data: "Log Added Successfully",
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
