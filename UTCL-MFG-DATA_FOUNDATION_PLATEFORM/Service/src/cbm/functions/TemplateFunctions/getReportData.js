var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

getReportData = (req) => {
  var response;
  let { userid } = req.body;

  // console.log("hiii", userid);
  return new Promise(async (resolve, reject) => {
    try {
      let paramaters = `@UserId=?`;

      let replacementArray = [userid];
      var Query = " exec  [dbo].[SP_CBM_TagId_Wise_Report_GetData]" + paramaters;
      let data = await connection
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
      resolve(response);
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = getReportData;
