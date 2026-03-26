const connection = require("../../../db/connectionsql");

module.exports = {
  addChart: async (req, res, next) => {
    const { userid, data } = req.body;

    if (userid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!userid || !data || data?.constructor != Array) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    try {
      const stringData = JSON.stringify(data).replaceAll(",", "@@@");

      const Query = `exec [dbo].[sp_CHART_VISUALIZATION_TEMPLATE_Insert] '${userid}','${stringData}'`;

      await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: "Chart Saved Successfully",
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
