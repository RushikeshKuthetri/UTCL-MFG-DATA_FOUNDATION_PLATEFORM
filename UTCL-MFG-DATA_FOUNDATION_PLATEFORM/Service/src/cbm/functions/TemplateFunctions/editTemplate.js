var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

editTemplate = (req) => {
  var response;

  let {
    TimeStamp,
    userid,
    templateName,
    PlantName,
    UseCase,
    FanName,
    Parameters,
    conditions,
    activeStatus,
  } = req.body;
  let uniqueTimeStamp = +new Date();
  uniqueTimeStamp = uniqueTimeStamp.toString();
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

  Parameters = JSON.stringify(Parameters);
  conditions = JSON.stringify(conditions);
  Parameters = Parameters.replaceAll(",", "@@@");
  conditions = conditions.replaceAll(",", "@@@");

  // console.log(uniqueTimeStamp);
  return new Promise(async (resolve, reject) => {
    try {
      // var result;
      let paramaters = `@TemplateName=?, @UseCase=?, @UserId=?, @PlantName=?, @DateTime=?, @FanName=?, @Parameters=?, @Conditions=?, @ActiveStatus=?`;

      let replacementArray = [templateName, UseCase, userid, PlantName, dateTime, FanName, Parameters, conditions, activeStatus ];
      // var Query = " exec  [dbo].[SP_CBM_Update_CBM_Store_Efficiency_Testing]" + paramaters;
      var Query = " exec  [dbo].[SP_CBM_EquipmentTemplatesUpdate]" + paramaters;
      let result = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      if(result[0].result === 'Record updated Successfully'){
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

module.exports = editTemplate;
