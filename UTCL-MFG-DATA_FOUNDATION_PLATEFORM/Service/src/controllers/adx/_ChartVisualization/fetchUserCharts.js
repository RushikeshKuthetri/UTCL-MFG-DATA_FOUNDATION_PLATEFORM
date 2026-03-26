const connection = require("../../../db/connectionsql");

module.exports = {
  fetchUserCharts: async (req, res, next) => {
    const { userid } = req.body;

    if (userid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!userid) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    try {
      const Query = `exec [dbo].[sp_CHART_VISUALIZATION_TEMPLATE_FetchData] '${userid}'`;

      const data = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (data.length === 0) {
        return res.status(404).json({
          code: 404,
          status: "failed",
          message: "No chart has been saved yet!",
        });
      }

      parsedData = data.map((singleData) => {
        var { Data, ...rest } = singleData;

        Data = JSON.parse(Data.replaceAll("@@@", ","));
        return { ...rest, Data };
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: parsedData,
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
