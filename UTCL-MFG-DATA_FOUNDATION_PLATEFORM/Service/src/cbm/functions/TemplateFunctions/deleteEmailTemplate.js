var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

deleteEmailTemplate = (req) => {
  var response;

  let { TimeStamp, userid } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      let paramaters = `@Timestamp=?, @UserId=?`;

      let replacementArray = [TimeStamp, userid];
      // var Query = " exec [dbo].[SP_CBM_Fan_Efficiency_MailAlerts_Testing_Delete]" + paramaters;
      var Query = " exec [dbo].[SP_CBM_EmailTemplatesDelete]" + paramaters;
     
      let deletedata = await connection
        .query(Query, {
          raw: true,
          replacements: replacementArray,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        })
         console.log(deletedata);
      if (deletedata[0].result === 'Record deleted Successfully') {
        response = responseObject(
          "data Deleted Successfully",
          false,
          "Success",
          200
        );
        resolve(response);
      }else{
        response = responseObject("Something went wrong", true, "Failure", 400);
        reject(response);
      }
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = deleteEmailTemplate;
