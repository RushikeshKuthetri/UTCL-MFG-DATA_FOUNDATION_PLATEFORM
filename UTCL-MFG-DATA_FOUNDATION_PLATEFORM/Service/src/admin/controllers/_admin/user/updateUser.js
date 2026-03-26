const connection = require("../../../../db/connectionsql");
const { sGen } = require("../../../utils/stringGenerator");
const moment = require("moment");

module.exports = {
  updateUser: async (req, res, next) => {
    const { adminid, userid, username, plants, isActive, isAlert, modules } =
      req.body;
    // console.log(adminid, req.user, req.role);

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    if (
      !userid ||
      !username ||
      !plants ||
      plants?.constructor != Array ||
      !modules ||
      modules?.constructor != Array ||
      isActive == null ||
      (isActive && typeof isActive != "boolean") ||
      isAlert == null ||
      (isAlert && typeof isAlert != "boolean")
    ) {
      // return res
      //   .status(400)
      //   .json({ error: "Please provide all required feilds in proper format" });
      const error = new Error(
        `Please provide all required feilds in proper format`
      );
      error.status = 400;
      return next(error);
    }

    uniquePlants = [...new Set(plants)];
    uniqueModules = [...new Set(modules)];

    stringPlants = sGen(uniquePlants ? uniquePlants : []);
    stringModules = sGen(uniqueModules ? uniqueModules : []);

    try {
      /////check if user is present/////
      QueryToFindUser = `exec [Admin].[sp_user_details_UserPresent] '${userid}'`;

      const userExist = await connection.query(QueryToFindUser, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      // console.log(userExist);

      if (userExist[0]?.Result == "") {
        // return res
        //   .status(409)
        //   .json({ error: `User does not exist named ${userid}` });
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
        //   .json({ error: `Unauthorized to update admin or super-admin` });
        const error = new Error(`Not authorized to update admin or super-admin`);
        error.status = 400;
        return next(error);
      }
      ////check if user is present/////

      ////update user////
      let paramaters = `
        @UserID =?,
        @UserName =?,
        @Role =?,
        @module_names =?,
        @plant_names =?,
        @Created_Date =?,
        @IsActive =?,
        @IsAlert =?,
        @Action =?`;

      const createdAt = moment()
        .utcOffset(330)
        .format("YYYY-MM-DDTHH:mm:ss.SSS");

      replacementArray = [
        userid,
        username,
        "user",
        stringModules,
        stringPlants,
        createdAt,
        isActive,
        isAlert,
        "UPDATE",
      ];

      Query =
        "exec [Admin].[sp_user_details_insert_update_delete]" + paramaters;

      const result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      ////update user////

      res.status(200).json({
        code: 200,
        status: "success",
        data: "User Updated Successfully",
      });
    } catch (error) {
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
