var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

sendTemplateData = (req) => {
  var response;
  let {
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

  // console.log(uniqueTimeStamp);
  return new Promise(async (resolve, reject) => {
    try {
      //  var result;
      if (
        !userid ||
        !templateName ||
        !PlantName ||
        !UseCase ||
        !Parameters ||
        !conditions ||
        !activeStatus
      ) {
        response = responseObject(
          `Please provide all required feilds in proper format`,
          true,
          "Failure",
          400
        );
        reject(response);
        return;
        //   .status(400)
        //   .json({ error: "Please provide all required feilds in proper format" });
      }
      Parameters = JSON.stringify(Parameters);
      conditions = JSON.stringify(conditions);
      Parameters = Parameters.replaceAll(",", "@@@");
      conditions = conditions.replaceAll(",", "@@@");
      let paramaters1 = `@v_tempName=?, @v_usecase=?, @v_userid=?, @v_plant=?`;

      let replacementArray1 = [templateName, UseCase, userid, PlantName];
      // var Query1 = " exec  [dbo].[SP_CBM_Store_Efficiency_Unique_Template_Testing]" + paramaters1;
      var Query1 = " exec  [dbo].[SP_CBM_EquipmentTemplatesUnique]" + paramaters1;
      // result = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `Fn_Store_Efficiency_Unique_Template_Testing('${templateName}','${UseCase}','${userid}','${PlantName}')`
      // );
      let result = await connection
      .query(Query1, {
        raw: true,
        replacements: replacementArray1,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      // console.log(result);
     
      if (result.length > 0) {
        response = responseObject(
          `Template Already exist`,
          true,
          "Failure",
          400
        );
        resolve(response);
        return;
      }

      let paramaters2 = `@timestamp=?, @template=?, @plant=?, @fan=?, @param=?, @condition=?, @usecase=?, @status=?, @userid=?`;
      let replacementArray2 = [dateTime, templateName, PlantName, FanName, Parameters, conditions,UseCase, activeStatus, userid];
      // let Query2 = " exec  [dbo].[Sp_CBM_Store_Efficiency_Testing_Insert]" + paramaters2;
      let Query2 = " exec [dbo].[Sp_CBM_EquipmentTemplatesInsert]" + paramaters2;
      let result2 = await connection
      .query(Query2, {
        raw: true,
        replacements: replacementArray2,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      console.log(result2, "Record inserted Successfully");
      if(result2[0].result === "Record inserted Successfully"){
        response = responseObject("dataAddedSuccessfully", false, "Success", 200);
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

module.exports = sendTemplateData;
