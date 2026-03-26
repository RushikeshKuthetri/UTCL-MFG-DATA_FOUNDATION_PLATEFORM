var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

sendReportData = (req) => {
  var response;
  let {
    userid,
    ReportTemplateName,
    Plant,
    Tags,
    Interval,
    isScheduler,
    EmailFrequency,
    StartDate,
    EndDate,
    MailTime,
    Recipients,
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

  Tags = Tags.join("@@@");
  Recipients = Recipients.join("@@@");
  //   Description = Description.replaceAll(",", "@@@");

  // console.log();
  return new Promise(async (resolve, reject) => {
    try {
      // var result;
      let paramaters = `@DateTime=?, @UserId=?, @ReportTemplateName=?, @Plant=?, @Tags=?, @Interval=?, @IsScheduler=?, @EmailFrequency=?, @StartDate=?, @EndDate=?, @MailTime=?, @Recipients=?`;

      let replacementArray = [dateTime, userid, ReportTemplateName, Plant, Tags, Interval, isScheduler, EmailFrequency, StartDate, EndDate, MailTime, Recipients];
      var Query = " exec  [dbo].[SP_CBM_Insert_TagId_Wise_Report]" + paramaters;
      let result = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      response = responseObject(
        "data Added Successfully",
        false,
        "Success",
        200
      );
      resolve(response);
    } catch (error) {
      console.log(error);
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = sendReportData;
