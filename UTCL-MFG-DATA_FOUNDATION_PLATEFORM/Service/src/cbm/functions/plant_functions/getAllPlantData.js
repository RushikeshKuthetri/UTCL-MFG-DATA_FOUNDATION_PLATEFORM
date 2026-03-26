var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

getAllPalntData = (req) => {
  var response;

  return new Promise(async (resolve, reject) => {
    try {
      var replacementArray = [];
      var Query = 'exec [dbo].[SP_UseCase_Efficiency_MasterTbl_AllRecords]'
      var data = await connection
        .query(Query, {
          raw: true,
          replacements: replacementArray,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        })
      if (data.length > 0) {
        response = responseObject(data, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = getAllPalntData;
