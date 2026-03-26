const connection = require("../../../../db/connectionsql");

module.exports = {
  deleteUser: async (req, res, next) => {
    const { superAdminid, userid } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!userid) {
      return res.status(400).json({ error: "Please provide userid to delete." });
    }

    if (userid == "i4.utclconnect@adityabirla.com") {
      return res.status(400).json({ error: `i4.utclconnect@adityabirla.com can not be deleted` });
    }

    try {
      /////check if user is present/////
      QueryToFindUser = `exec [Admin].[sp_user_details_UserPresent] '${userid}'`;

      const userExist = await connection.query(QueryToFindUser, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (userExist[0]?.Result == "") {
        return res.status(409).json({ error: `User does not exist named ${userid}` });
      }

      if (userExist[0]?.Role == "super_admin" && req.user != "i4.utclconnect@adityabirla.com") {
        return res.status(400).json({ error: `You are not authorized to delete super admin` });
      }
      /////check if user is present/////

      ////delete user////

      Query = `exec [Admin].[sp_userDetails_insertUpdateDelete_superAdmin] '${userid}','','','','','','','','DELETE','',''`;

      await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      ////delete user////

      res.status(200).json({
        code: 200,
        status: "success",
        data: "User Deleted Successfully",
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
