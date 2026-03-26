var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

sendEmailTemplateData = (req) => {
  console.log("sendEmailTemplateDataFUnction");
  var response;
  let {
    userid,
    EmailTemplateName,
    Subject,
    UseCaseTemplate,
    Recipients,
    Description,
  } = req.body;

  let today = new Date();
  var currentOffset = today.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var ISTTime = new Date(today.getTime() + (ISTOffset + currentOffset) * 60000);
  let dateTime =
    ISTTime.getFullYear() +
    "-" +
    String(ISTTime.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(ISTTime.getDate()).padStart(2, "0") +
    " " +
    String(ISTTime.getHours()).padStart(2, "0") +
    ":" +
    String(ISTTime.getMinutes()).padStart(2, "0") +
    ":" +
    String(ISTTime.getSeconds()).padStart(2, "0");

  Recipients = Recipients.join("@@@");
  // Recipients = JSON.stringify(Recipients);
  // Description = JSON.stringify(Description);
  // Recipients = Recipients.replaceAll(",", "@@@");
  // Recipients = Recipients.replaceAll('"', "@#@");
  Description = Description.replaceAll(",", "@@@");

  console.log(
  userid,
  EmailTemplateName,
  Subject,
  UseCaseTemplate,
  Recipients,
  // `${dateTime},${userid},${EmailTemplateName},${Subject},${UseCaseTemplate},${Recipients},${Description}`,
  Description
  );
  return new Promise(async (resolve, reject) => {
    try {
      // var result;

      let paramaters = `@DateTime=?, @UserId=?, @EmailTemplateName=?, @Subject=?, @UseCaseTemplate=?, @Recipients=?, @Description=?`;

      let replacementArray = [dateTime, userid, EmailTemplateName, Subject, UseCaseTemplate, Recipients, Description];
      // var Query = " exec  [dbo].[SP_CBM_Insert_CBM_Fan_Efficiency_MailAlerts_Testing]" + paramaters;
      var Query = " exec  [dbo].[SP_CBM_EmailTemplatesInsert]" + paramaters;
      let result = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      if(result[0].result === 'Record inserted Successfully'){
        response = responseObject(
          "data Added Successfully",
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

module.exports = sendEmailTemplateData;
