const connection = require("../../../../db/connectionsql");

module.exports = {
  alertAdd: async (req, res, next) => {
    const { superAdminid, recipient, plant, isActive, interval } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!plant || !interval || isActive == null || (isActive && typeof isActive != "boolean")) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    lc = interval.match(/[\d\.]+|\D+/g)[1]?.toLowerCase();
    if (lc != "h" && lc != "m" && lc != "s" && lc != "d") {
      return res.status(400).json({ error: "Invalid Interval" });
    }

    if (recipient?.includes(",")) {
      return res.status(400).json({ error: "Invalid recipient" });
    }

    try {
      QueryToDelete = `exec [dbo].[Alerts_For_Data_Not_Coming_delete] ${plant}`;

      await connection.query(QueryToDelete, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      QueryToAdd = `exec [dbo].[Alerts_For_Data_Not_Coming_update] '${plant}','${isActive}','${interval}','${recipient ? recipient : ""}'`;

      await connection.query(QueryToAdd, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: "Added Successfully",
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
