const connection = require("../../../../db/connectionsql");

module.exports = {
  alertDetails: async (req, res, next) => {
    const { superAdminid } = req.body;
    // console.log(adminid, req.user, req.role);

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    try {
      Query = "exec [dbo].[Alerts_For_Data_Not_Coming_select_all_record]";

      const result = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: result,
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
