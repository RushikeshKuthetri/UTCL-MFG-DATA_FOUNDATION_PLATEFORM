const { getAssetPropertyHistoryValue } = require("../../helpers/iotSitewise");
const { splitTimeDuration } = require("../../utils/splitTimeDuration");

module.exports = {
  dataComingNew: async (req, res, next) => {
    const { userId, interval, plant, plantCode } = req.body;

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
      const { number, unit } = splitTimeDuration(interval);

      const endDate = new Date();

      let startDate = new Date();

      if (unit == "m") {
        startDate = new Date(endDate.getTime() - number * 60 * 1000);
      } else if (unit == "h") {
        startDate = new Date(endDate.getTime() - number * 60 * 60 * 1000);
      } else if (unit == "s") {
        startDate = new Date(endDate.getTime() - number * 1000);
      } else {
        throw new Error("Invalid format");
      }

      console.log({ startDate, endDate });

      const result = await getAssetPropertyHistoryValue(
        plant,
        startDate,
        endDate
      );

      res.status(200).json({
        code: 200,
        status: "success",
        result: { [plantCode]: result },
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
