const connection = require("../../../../db/connectionsql");

module.exports = {
  deleteUser: async (req, res, next) => {
    const { adminid, userid } = req.body;
    // console.log(adminid, req.user, req.role);

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    if (!userid) {
      // return res.status(400).json({ error: "Please provide userid to delete" });
      const error = new Error("Please provide userid to delete");
      error.status = 400;
      return next(error);
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
        // return res.status(409).json({ error: `User does not exist named ${userid}` });
        const error = new Error(`User named ${userid} does not exist`);
        error.status = 400;
        return next(error);
      }

      if (
        userExist[0]?.Role == "admin" ||
        userExist[0]?.Role == "super_admin"
      ) {
        // return res
        //   .status(400)
        //   .json({ error: `Unauthorized to delete admin or super-admin` });
        const error = new Error(`Not authorized to delete admin or super-admin`);
        error.status = 400;
        return next(error);
      }
      ////check if user is present/////

      ////delete user////
      Query = `exec [Admin].[sp_user_details_insert_update_delete] '${userid}','','','','','','','','DELETE'`;

      const result = await connection.query(Query, {
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
      console.log(error);
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
