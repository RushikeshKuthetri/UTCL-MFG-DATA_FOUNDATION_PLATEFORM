var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

deleteReportData = (req) => {
  var response;

  let { TimeStamp, userid } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      // var result;
      let paramaters = `@Timestamp=?, @UserId=?`;

      let replacementArray = [TimeStamp, userid];
      var Query = " exec  [dbo].[SP_TagId_Wise_Report_Delete]" + paramaters;
      let deletedata = await connection
        .query(Query, {
          raw: true,
          replacements: replacementArray,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        })
      if (deletedata) {
        response = responseObject(
          "data Deleted Successfully",
          false,
          "Success",
          200
        );
        resolve(response);
      }
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = deleteReportData;
