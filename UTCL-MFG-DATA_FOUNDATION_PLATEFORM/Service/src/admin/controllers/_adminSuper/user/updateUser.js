const connection = require("../../../../db/connectionsql");
const { sGen } = require("../../../utils/stringGenerator");
const moment = require("moment");

module.exports = {
  updateUser: async (req, res, next) => {
    const { superAdminid, userid, username, role, plants, isActive, isAlert, modules, contact, smsLimit } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (
      !userid ||
      !username ||
      !role ||
      (role && role != "admin" && role != "user" && role != "super_admin") ||
      !plants ||
      plants?.constructor != Array ||
      !modules ||
      modules?.constructor != Array ||
      isActive == null ||
      (isActive && typeof isActive != "boolean") ||
      isAlert == null ||
      (isAlert && typeof isAlert != "boolean") ||
      // !contact ||
      (contact && contact?.length !== 10)
      // smsLimit === null
    ) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    if (userid == "i4.utclconnect@adityabirla.com") {
      return res.status(400).json({ error: `Unauthorized to update i4.utclconnect@adityabirla.com!!` });
    }

    if (req.user != "i4.utclconnect@adityabirla.com" && role == "super_admin") {
      return res.status(400).json({ error: `You are not authorized to update super admin!!` });
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

      console.log(userExist);

      if (userExist[0]?.Result == "") {
        return res.status(409).json({ error: `User does not exist named ${userid}` });
      }

      if (userExist[0]?.Role == "super_admin" && req.user != "i4.utclconnect@adityabirla.com") {
        return res.status(400).json({ error: `You are not authorized to update super admin` });
      }
      /////check if user is present/////

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
        @Action =?,
        @ContactNo =?,
        @SMS =?`;

      const createdAt = moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS");

      replacementArray = [userid, username, role, stringModules, stringPlants, createdAt, isActive, isAlert, "UPDATE", contact ? contact : null, smsLimit ? smsLimit : null];

      Query = "exec [Admin].[sp_userDetails_insertUpdateDelete_superAdmin]" + paramaters;

      await connection.query(Query, {
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
      res.status(400).json({
        code: 400,
        status: "failed",
        error: "Something Went Wrong!Try Again.",
      });
    }
  },
};
