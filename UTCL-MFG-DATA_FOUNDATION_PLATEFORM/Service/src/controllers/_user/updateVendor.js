const { compare, genSalt, hash } = require("bcryptjs");
const {
  getQueryWithoutPagination,
  updateCommand,
  batchWriteItemCommand,
  getScan,
} = require("../../helpers/dynamoDB");

module.exports = {
  updateVendor: async (req, res, next) => {
    const { userid, pln_name, newPassword } = req.body;

    if (!userid) {
      const error = new Error("User ID is required.");
      error.status = 400;
      return next(error);
    }

    let plantData = [];
    if (pln_name && pln_name?.length) {
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
      const invalidPlant = [];
      for (const plItem of pln_name) {
        const plantDetail = plantData.find(
          (findItem) => `${findItem.Generic_Plant_Code}` === `${plItem}`
        );
        if (!plantDetail) {
          invalidPlant.push(plItem);
        }
      }
      if (invalidPlant.length) {
        const error = new Error(
          `Invalid Plant codes: ${invalidPlant.join(", ")}`
        );
        error.status = 400;
        return next(error);
      }
    }

    try {
      const params = {
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
        const error = new Error(`User ID not found`);
        error.status = 404;
        return next(error);
      } else if (response.Items.length) {
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
        const userData = fetchedItems[0];

        async function updatePassword(userData, newPassword) {
          const compareNewResult = await compare(
            newPassword,
            userData.Password
          );
          if (compareNewResult) {
            return {
              success: false,
              message: "New Password is same as current password.",
            };
          }
          const salt = await genSalt();
          const passwordHash = await hash(newPassword, salt);
          const updateParams = {
            TableName: "Vendor_UserLogin_Main",
            Key: { UserID: { S: userData.UserID } },
            UpdateExpression: `SET #attr = :val`,
            ExpressionAttributeNames: {
              "#attr": "Password",
            },
            ExpressionAttributeValues: {
              ":val": { S: passwordHash },
            },
          };
          const passwordResponse = await updateCommand(updateParams);
          if (passwordResponse) {
            return {
              success: true,
              message: "Password Updated Successfully!",
            };
          }
        }

        async function updatePlants(pln_name, userData) {
          const mappingPayload = [];
          const queryParams = {
            TableName: "Vendor_Mapping_Master",
            KeyConditionExpression: "#pk = :pkval",
            ExpressionAttributeNames: { "#pk": "Fk_UniqueId" },
            ExpressionAttributeValues: {
              ":pkval": { S: userData.Pk_UniqueId },
            },
          };
          const queryResult = await getQueryWithoutPagination(queryParams);
          if (queryResult.Items && queryResult.Items.length) {
            const deleteItem = [];
            for (const itemNew of queryResult.Items) {
              deleteItem.push({
                Delete: {
                  TableName: "Vendor_Mapping_Master",
                  Key: {
                    Fk_UniqueId: itemNew.Fk_UniqueId,
                    Plant_Name: itemNew.Plant_Name,
                  },
                },
              });
            }
            await batchWriteItemCommand(deleteItem);
          }
          if (pln_name?.length) {
            for (const plItem of pln_name) {
              const plantDetail = plantData.find(
                (findItem) => `${findItem.Generic_Plant_Code}` === `${plItem}`
              );
              if (plantDetail) {
                mappingPayload.push({
                  Put: {
                    TableName: "Vendor_Mapping_Master",
                    Item: {
                      Fk_UniqueId: { S: userData.Pk_UniqueId },
                      Plant_Name: { S: plItem },
                      Created_Date: { S: new Date().toISOString() },
                      Plant_SapCode: { S: plantDetail.Plant_SAP_Code },
                      Is_Active: { S: "true" },
                    },
                  },
                });
              }
            }
            const batchWriteResponse = await batchWriteItemCommand(
              mappingPayload
            );
            if (batchWriteResponse) {
              return {
                success: true,
                message: "Plants updated successfully!",
              };
            } else {
              return {
                success: false,
                message: "Something went wrong in plants update!",
              };
            }
          }
        }

        if (newPassword && !pln_name?.length) {
          const passResponse = await updatePassword(userData, newPassword);
          if (passResponse.success) {
            return res.status(200).json({
              status: "success",
              code: 200,
              message: "Password updated successfully!",
            });
          } else {
            const error = new Error(passResponse.message);
            error.status = 401;
            return next(error);
          }
        } else if (!newPassword && pln_name && pln_name?.length) {
          const plantResponse = await updatePlants(pln_name, userData);
          if (plantResponse.success) {
            return res.status(200).json({
              status: "success",
              code: 200,
              message: "Plants updated successfully!",
            });
          } else {
            const error = new Error(plantResponse.message);
            error.status = 401;
            return next(error);
          }
        } else if (newPassword && pln_name && pln_name?.length) {
          const passResponse = await updatePassword(userData, newPassword);
          const plantResponse = await updatePlants(pln_name, userData);
          if (passResponse.success && plantResponse.success) {
            return res.status(200).json({
              status: "success",
              code: 200,
              message: "Password and plants updated successfully!",
            });
          } else if (!passResponse.success && plantResponse.success) {
            return res.status(200).json({
              message: `Plants updated successfully but password not updated. ${passResponse.message}`,
              code: 206,
              status: "failed",
            });
          } else if (passResponse.success && !plantResponse.success) {
            return res.status(200).json({
              message:  `Password updated successfully but plants not updated. ${plantResponse.message}`,
              code: 206,
              status: "failed",
            });
          } else if (!passResponse.success && !plantResponse.success) {
            const error = new Error(
              `Vendor not updated. ${plantResponse.message} && ${passResponse.message}`
            );
            error.status = 401;
            return next(error);
          }
        }
      }
    } catch (error) {
      console.log("Error in update vendor", error);
      next(error);
    }
  },
};
