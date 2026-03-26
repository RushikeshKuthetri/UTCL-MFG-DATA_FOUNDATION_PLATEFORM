const connection = require("../../../../db/connectionsql");

module.exports = {
  alertDelete: async (req, res, next) => {
    const { superAdminid, plant } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!plant) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    try {
      Query = `exec [dbo].[Alerts_For_Data_Not_Coming_delete] ${plant}`;

      const result = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: "Deleted Successfully",
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
