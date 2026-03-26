const connection = require("../../../db/connectionsql");

module.exports = {
  deleteChart: async (req, res, next) => {
    const { userid, chartid } = req.body;

    if (userid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!userid || !chartid) {
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
        return res.status(400).json({ error: `The chart you are trying to delete does not exist.` });
      }

      // check user is deleting his own chart
      if (chartExist[0].Id !== userid) {
        return res.status(400).json({ error: `You are not allowed to delete this chart.` });
      }

      //delete from CHART_VISUALIZATION_TEMPLATE
      const QueryToDelete = `exec [sp_CHART_VISUALIZATION_TEMPLATE_Delete] '${chartid}'`;

      await connection.query(QueryToDelete, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: "Chart Deleted Successfully",
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
