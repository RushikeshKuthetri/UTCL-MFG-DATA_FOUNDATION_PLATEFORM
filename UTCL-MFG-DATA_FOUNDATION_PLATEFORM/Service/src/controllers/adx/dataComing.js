const client = require("../../db/connection");

module.exports = {
  dataComing: async (req, res, next) => {
    const { userId, interval, plant } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    if (!userId || !interval || !plant) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message:
          "Please provide userid, plant name and interval in proper format",
      });
    }

    try {
      const result = await client.execute(
        "utcprmfgadxiotpd-db",
        `fn_plantDataComingOrNot('${plant}',${interval})`
      );
      const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));
      plantAvailable = newResult.data.length != 0;

      res.status(200).json({
        code: 200,
        status: "success",
        result: { [plant]: plantAvailable },
      });
    } catch (error) {
      console.log("dataComing error.........", error);
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Not able to find live data status. Please try again later.",
      });
    }
  },
};
