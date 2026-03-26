var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

getEmailTemplateData = (req) => {
  // console.log("hereeeeee111111");
  var response;
  let { userid } = req.body;

  // console.log("hiii", userid);
  return new Promise(async (resolve, reject) => {
    try {
      let paramaters = `@UserId=?`;

      let replacementArray = [userid];
      // var Query = " exec  [dbo].[SP_CBM_Get_MailAlerts_Testing]" + paramaters;
      var Query = " exec  [dbo].[SP_CBM_EmailTemplatesGet]" + paramaters;
      let data = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })

      if (data.length > 0) {
        data.map((val) => {
          val.Recipients = val.Recipients.split("@@@");

          // val.Description = val.Description.replaceAll("@@@", ",");
          // val.Description = JSON.parse(val.Description);
        });
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

module.exports = getEmailTemplateData;
