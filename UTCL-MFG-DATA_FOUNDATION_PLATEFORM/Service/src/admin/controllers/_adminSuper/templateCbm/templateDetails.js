const connection = require("../../../../db/connectionsql");

module.exports = {
  templateDetails: async (req, res, next) => {
    const { superAdminid } = req.body;
    // console.log(adminid, req.user, req.role);

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    try {
      let parameters = ``;
      let replacementArray = [];
      // let Query = " exec  [dbo].[SP_CBM_Store_Efficiency_Testing_SelectAllRecord]" + parameters;
      let Query = " exec  [dbo].[SP_CBM_EquipmentTemplatesSelectAllRecord]" + parameters;
      let result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      const sortByDate = (result) => {
        const sorter = (a, b) => {
          return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime();
        };
        result.sort(sorter);
      };
      sortByDate(result);

      res.status(200).json({
        code: 200,
        status: "success",
        data: result,
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
