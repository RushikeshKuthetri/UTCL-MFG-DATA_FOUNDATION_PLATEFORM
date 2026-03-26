const { genSalt, hash } = require("bcryptjs");
const {
  getQueryWithoutPagination,
  putCommand,
  batchWriteItemCommand,
  getScan,
} = require("../../helpers/dynamoDB");
const { Table } = require("mssql");

module.exports = {
  createVendor: async (req, res, next) => {
    const { userid, password, pln_name } = req.body;

    if (!userid || !password || !(pln_name && pln_name?.length)) {
      const error = new Error(
        "User ID, password and plant generic code list(array) is required to create new vendor!"
      );
      error.status = 400;
      return next(error);
    }
    let plantData = [];
    try {
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
        if (pln_name?.length) {
          const tableParam = {
            TableName: "Plant_Details",
          };
          const plantDetails = await getScan(tableParam);
          if (plantDetails?.Items?.length) {
            plantData = plantDetails.Items.map((itemNew) => {
              const Plant_SAP_Code = Object.values(itemNew.Plant_SAP_Code)[0];
              const Generic_Plant_Code = Object.values(
                itemNew.Generic_Plant_Code
              )[0];
              return {
                Plant_SAP_Code,
                Generic_Plant_Code,
              };
            });
          }
        }
        const salt = await genSalt();
        const passwordHash = await hash(password, salt);
        const uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
          /[018]/g,
          (c) =>
            (
              c ^
              (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
        );
        const item = {
          UserID: { S: userid },
          Created_Date: { S: new Date().toISOString() },
          IsActive: { S: "true" },
          Password: { S: passwordHash },
          UserName: { S: userid },
          Pk_UniqueId: { S: uuid },
        };
        const mappingPayload = [];
        const vendorPayload = {
          TableName: "Vendor_UserLogin_Main",
          Item: item,
        };
        mappingPayload.push({
          Put: vendorPayload,
        });
        const invalidPlant = [];
        for (const plItem of pln_name) {
          const plantDetail = plantData.find(
            (findItem) => `${findItem.Generic_Plant_Code}` === `${plItem}`
          );
          if (plantDetail) {
            mappingPayload.push({
              Put: {
                TableName: "Vendor_Mapping_Master",
                Item: {
                  Fk_UniqueId: { S: uuid },
                  Plant_Name: { S: plItem },
                  Created_Date: { S: new Date().toISOString() },
                  Plant_SapCode: { S: plantDetail.Plant_SAP_Code },
                  Is_Active: { S: "true" },
                },
              },
            });
          } else {
            invalidPlant.push(plItem);
          }
        }
        if (invalidPlant.length) {
          const error = new Error(
            `Invalid Plant codes: ${invalidPlant.join(", ")}`
          );
          error.status = 400;
          return next(error);
        } else {
          const batchWriteResponse = await batchWriteItemCommand(
            mappingPayload
          );
          if (batchWriteResponse) {
            return res.status(200).json({
              code: 200,
              status: "success",
              message: "New Vendor created successfully",
            });
          }
        }
      } else if (response.Items.length) {
        const error = new Error(`This User ID already exist!`);
        error.status = 400;
        return next(error);
      }
    } catch (error) {
      console.log("Error in Create vendor", error);
      next(error);
    }
  },
};
