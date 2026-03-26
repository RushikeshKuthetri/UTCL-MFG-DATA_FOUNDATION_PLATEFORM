const { compare } = require("bcryptjs");
// const client = require("../../db/connection");
const generateTokenVendor = require("../../utils/generateTokenVendor");
const { getQueryWithoutPagination } = require("../../helpers/dynamoDB");

module.exports = {
  loginVendor: async (req, res, next) => {
    const { userid, password } = req.body;

    if (!userid || !password) {
      // return res
      //   .status(400)
      //   .json({ error: "Please provide required credentials" });
      const error = new Error("Please provide required credentials.");
        error.status = 400;
        return next(error);
    }

    try {
      // ADX code
      // const result = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `Fn_Vendor_UserLogin_Main('${userid}')`
      // );
      // const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

      // if (!newResult.data[0]) {
      //   return res.status(401).json({ error: "Login Failed! Invalid userid." });
      // }

      // const compareResult = await compare(password, newResult.data[0].Password);

      // if (compareResult == false) {
      //   return res.status(401).json({ error: "Login Failed! Invalid password." });
      // }

      // fetching user from Vendor_UserLogin_Main
      // const userData = await ddbClient.send(
      //   new GetCommand({
      //     TableName: "Vendor_UserLogin_Main",
      //     Key: { UserID: userid },
      //   })
      // );

      let params = {
        TableName: "Vendor_UserLogin_Main",
        KeyConditionExpression: "#userId = :userId", // Partition key condition,
        ExpressionAttributeNames: {
          "#userId": "UserID",
        },
        ExpressionAttributeValues: {
          ":userId": { S: userid },
        },
      };

      const response = await getQueryWithoutPagination(params);

      if (!response?.Items || !response?.Items?.length) {
        // return res.status(401).json({ error: "Login Failed! Invalid userid." });
        const error = new Error("Login Failed! Invalid userid.");
        error.status = 401;
        return next(error);
      }
      let userData = {};

      if (response.Items.length) {
        const fetchedItems = response.Items.map((itemNew) => {
          const UserID = Object.values(itemNew.UserID)[0];
          const Password = Object.values(itemNew.Password)[0];
          const UserName = itemNew?.UserName?.S
            ? Object.values(itemNew.UserName)[0]
            : null;
          const IsActive = Object.values(itemNew.IsActive)[0];
          const Pk_UniqueId = itemNew?.Pk_UniqueId?.S
            ? Object.values(itemNew.Pk_UniqueId)[0]
            : null;
          return {
            UserID,
            Password,
            UserName,
            IsActive,
            Pk_UniqueId,
          };
        });
        userData = fetchedItems[0];
      }

      const compareResult = await compare(password, userData.Password);

      if (!compareResult) {
        // return res
        //   .status(401)
        //   .json({ error: "Login Failed! Invalid password." });
        const error = new Error("Login Failed! Invalid password.");
        error.status = 401;
        return next(error);
      }

      // now join with Vendor_Mapping_Master using Pk_UniqueId
      const mappingParams = {
        TableName: "Vendor_Mapping_Master",
        KeyConditionExpression: "#Fk_UniqueId = :Fk_UniqueId", // Partition key condition,
        ExpressionAttributeNames: {
          "#Fk_UniqueId": "Fk_UniqueId",
        },
        ExpressionAttributeValues: {
          ":Fk_UniqueId": { S: userData.Pk_UniqueId },
        },
      };

      const mappingResponse = await getQueryWithoutPagination(mappingParams);

      const fResult = {
        UserID: userData.UserID,
        Plant_Name: [],
        Plant_SapCode: [],
      };

      mappingResponse.Items.forEach((item) => {
        fResult.Plant_Name.push(item.Plant_Name.S);
        fResult.Plant_SapCode.push(item.Plant_SapCode.S);
      });

      const token = await generateTokenVendor({
        userid: fResult.UserID,
        Plant_Name: fResult.Plant_Name,
        Plant_SapCode: fResult.Plant_SapCode,
      });

      return res.status(200).json({
        status: "success",
        code: 200,
        data: { ...fResult, token, expiresIn: "1h" },
      });
    } catch (error) {
      console.log("Error in login vendor", error);
      // res.status(400).json({ error: "Login Failed!Please Try Again." });
      error.message = "Login Failed! Please Try Again."
      next(error);
    }
  },
};
