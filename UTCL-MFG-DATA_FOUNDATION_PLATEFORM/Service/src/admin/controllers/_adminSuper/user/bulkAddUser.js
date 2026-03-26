const moment = require("moment");
const { sGen } = require("../../../utils/stringGenerator");
const connection = require("../../../../db/connectionsql");

module.exports = {
  bulkAddUser: async (req, res, next) => {
    const { superAdminid, body } = req.body;
    // console.log(superAdminid, req.user, req.role);

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    try {
      //fetch plant codes
      const QuerytoFetchPlants = "exec [dbo].[Sp_plant_location]";
      const resultPlant = await connection.query(QuerytoFetchPlants, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      const fetchedUniquePlants = resultPlant.map((item) => item.Plant);
      // console.log(fetchedUniquePlants);

      //fetch module names
      const QuerytoFetchModules = "exec [Admin].[Sp_Modules_details]";
      const resultModule = await connection.query(QuerytoFetchModules, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      const fetchedUniqueModules = resultModule.map((item) => item.Module);

      errorMessages = [];

      //check correct format
      body.forEach((singleUser) => {
        if (
          !singleUser.userid ||
          !singleUser.username ||
          !singleUser.plants ||
          !singleUser.role ||
          (singleUser.role && singleUser.role != "admin" && singleUser.role != "user" && singleUser.role != "super_admin") ||
          singleUser.plants?.constructor != Array ||
          !singleUser.modules ||
          singleUser.modules?.constructor != Array ||
          singleUser.isActive == null ||
          (singleUser.isActive && typeof singleUser.isActive != "boolean") ||
          singleUser.isAlert == null ||
          (singleUser.isAlert && typeof singleUser.isAlert != "boolean") ||
          // !singleUser.contact ||
          (singleUser.contact && singleUser.contact.toString().length !== 10)
          // singleUser.smsLimit === null
        ) {
          errorMessages.push("Please provide all required feilds in proper format!");
          return;
        }
      });

      if (errorMessages.length != 0) {
        return res.status(400).json({
          error: errorMessages,
          messages:
            "Proper format=> userid:string:required, username:string:required, role:string:required, plants:Array:required, modules:Array:required, isActive:boolean:required, isAlert:boolean:required, contact:10 digit number",
        });
      }
      //check correct format

      //check if same user is inputed more that once
      userIDArray = [];
      body.forEach((singleUser) => {
        userIDArray.push(singleUser.userid);
      });
      uniqueUserIDArray = [...new Set(userIDArray)];
      if (uniqueUserIDArray.length !== userIDArray.length) {
        return res.status(400).json({
          error: "Please do not enter the same userid more than once",
        });
      }
      //check if same user is inputed more that once

      //check correct plant and correct module and correct role
      body.forEach((singleUser) => {
        uniquePlants = [...new Set(singleUser.plants)];
        uniqueModules = [...new Set(singleUser.modules)];

        const found = uniquePlants.every((plant) => fetchedUniquePlants.includes(plant));
        if (found === false) {
          errorMessages.push(`${singleUser.userid} contains invalid plant code.`);
        }

        const foundM = uniqueModules.every((module) => fetchedUniqueModules.includes(module));
        if (foundM === false) {
          errorMessages.push(`${singleUser.userid} contains invalid module.`);
        }

        if (singleUser.role != "admin" && singleUser.role != "user") {
          errorMessages.push(`${singleUser.userid} contains invalid role.`);
        }
      });

      if (errorMessages.length !== 0) {
        return res.status(400).json({
          error: errorMessages,
          messages: [`Valid Plant codes are: ${[...fetchedUniquePlants]}`, `Valid modules are: ${[...fetchedUniqueModules]}`, `Valid roles are: user,admin`],
        });
      }
      //check correct plant and correct module and correct role

      //check if any user exists previously
      const stringUserIds = sGen(uniqueUserIDArray ? uniqueUserIDArray : []);
      QueryToFindUser = `exec [Admin].[sp_UserId_Details_Testing] '${stringUserIds}'`;
      const existingUser = await connection.query(QueryToFindUser, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      // console.log(existingUser, "existing user............");

      if (existingUser.length !== 0) {
        // console.log(existingUser);
        // check if existing users are Super Admin
        existingUser.forEach((singleUser) => {
          if (singleUser.Role == "super_admin") {
            errorMessages.push(`Super admin '${singleUser.UserID}' can not be modified in bulk upload.`);
          }
        });

        if (errorMessages.length !== 0) {
          return res.status(400).json({
            error: errorMessages,
            messages: "Can not update super admin in bulk upload",
          });
        }
        existingUserArray = existingUser.map((user) => user.UserID);
        existingUserString = sGen(existingUserArray);

        // console.log(existingUserString);

        QueryToDeleteExistingUser = `exec [Admin].[Sp_User_details_DeleteUsers] '${existingUserString}'`;

        await connection.query(QueryToDeleteExistingUser, {
          raw: true,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        });

        // console.log("deleted", existingUserString);

        // return res.status(400).json({
        //   error: `These users (${[...existingUserArray]}) already exist! Can't add again`,
        // });
      }
      //check if any user exists previously

      //make queries
      queryToAddUsers = `INSERT INTO [Admin].[user_details] ([UserID],[Password],[UserName],[Role],[Created_Date],[IsActive],[IsAlert],[Contact_No],[SMS_Limit]) VALUES `;
      queryToAddPlants = `INSERT INTO [Admin].[User_MappingMaster] ([UserID],[Plant_Name],[Created_Date],[Is_Active]) VALUES `;
      queryToAddPlantsChanged = -1;
      queryToAddModules = `INSERT INTO [Admin].[Module_MappingMaster] ([UserID],[Module]) VALUES `;
      queryToAddModulesChanged = -1;
      const createdAt = moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS");

      body.forEach((singleUser) => {
        uniquePlants = [...new Set(singleUser.plants)];
        uniqueModules = [...new Set(singleUser.modules)];

        queryToAddUsers =
          queryToAddUsers +
          `('${singleUser.userid}',${null},'${singleUser.username}','${singleUser.role}','${createdAt}','${singleUser.isActive}','${singleUser.isAlert}',${
            singleUser.contact ? singleUser.contact : null
          },${singleUser.smsLimit?.toString() ? singleUser.smsLimit : null}),`;

        if (uniquePlants.length !== 0) {
          uniquePlants.map((plant) => {
            queryToAddPlantsChanged = 1;
            queryToAddPlants = queryToAddPlants + `('${singleUser.userid}','${plant}','${createdAt}','${singleUser.isActive}'),`;
          });
        }

        if (uniqueModules.length !== 0) {
          uniqueModules.map((module) => {
            queryToAddModulesChanged = 1;
            queryToAddModules = queryToAddModules + `('${singleUser.userid}','${module}'),`;
          });
        }
      });

      queryToAddUsers = queryToAddUsers.slice(0, -1);
      await connection.query(queryToAddUsers, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      if (queryToAddPlantsChanged !== -1) {
        // console.log("inside if block plants.........");
        queryToAddPlants = queryToAddPlants.slice(0, -1);
        await connection.query(queryToAddPlants, {
          raw: true,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        });
      }
      if (queryToAddModulesChanged !== -1) {
        // console.log("inside if block modules...........");
        queryToAddModules = queryToAddModules.slice(0, -1);
        await connection.query(queryToAddModules, {
          raw: true,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        });
      }
      res.status(200).json({
        code: 200,
        status: "success",
        data: "Users Added Successfully",
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
