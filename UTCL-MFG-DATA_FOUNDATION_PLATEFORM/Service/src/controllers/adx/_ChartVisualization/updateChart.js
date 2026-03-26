const connection = require("../../../db/connectionsql");

module.exports = {
  updateChart: async (req, res, next) => {
    const { userid, data, chartid } = req.body;

    if (userid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!userid || !data || data?.constructor != Array || !chartid) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    try {
      const QueryToFetch = `exec [sp_CHART_VISUALIZATION_TEMPLATE_FetchData_Unique_id]  '${chartid}'`;

      const chartExist = await connection.query(QueryToFetch, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      // check if chart exists
      if (chartExist.length === 0) {
        return res.status(400).json({ error: `The chart you are trying to update does not exist.` });
      }

      // check user is updating his own chart
      if (chartExist[0].Id !== userid) {
        return res.status(400).json({ error: `You are not allowed to update this chart.` });
      }

      ///////////ADD UPDATED CHART///////////

      const stringData = JSON.stringify(data).replaceAll(",", "@@@");

      const Query = `exec [SP_CHART_VISUALIZATION_TEMPLATE_Update] '${chartid}','${stringData}'`;

      await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: "Chart Updated Successfully",
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
