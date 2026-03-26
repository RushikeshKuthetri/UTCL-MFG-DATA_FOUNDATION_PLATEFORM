var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

getTemplateData = (req) => {
  var response;
  let { userid } = req.body;

  // console.log("hiii", userid);
  return new Promise(async (resolve, reject) => {
    try {
      // var data = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `UserWiseData_Testing('${userid}')`
      // );
      // data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      // console.log(data, "dataaaaaaaa");
      let paramaters = `@UserId=?`;

      let replacementArray = [userid];
      // var Query = " exec  [dbo].[SP_CBM_UserWiseData_Testing]" + paramaters;
      var Query = " exec  [dbo].[SP_CBM_EquipmentTemplates]" + paramaters;
      let data = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      
      if (data.length > 0) {
         data.map((val) => {
          val.Parameters = val.Parameters.replaceAll("@@@", ",");
          val.Parameters = JSON.parse(val.Parameters);
          val.Conditions = val.Conditions.replaceAll("@@@", ",");
          val.Conditions = JSON.parse(val.Conditions);
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

module.exports = getTemplateData;
