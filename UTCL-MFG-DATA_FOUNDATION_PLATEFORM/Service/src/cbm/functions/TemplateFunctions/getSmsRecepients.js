var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var client = require("../../../db/connectionsql");

getSmsRecepients = (req) => {
  var response;
  // let { userid } = req.body;

  // console.log("hiii", userid);
  // var Query = " exec [Admin].[SP_user_details_SMSLimit]";
  var Query = " exec [Admin].[SP_CBM_TrendViolationUserDetailsSmsLimit]";
  var replacementArray = [];

  return new Promise(async (resolve, reject) => {
    try {
    
      var data = await client
        .query(Query, {
          raw: true,
          replacements: replacementArray,
          type: client.QueryTypes.SELECT,
          logging: console.log,
        })
      

      if (data.length > 0) {
        // data.map((val) => {
        //   val.Parameters = val.Parameters.replaceAll("@@@", ",");
        //   val.Parameters = JSON.parse(val.Parameters);
        //   val.Conditions = val.Conditions.replaceAll("@@@", ",");
        //   val.Conditions = JSON.parse(val.Conditions);
        // });
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

module.exports = getSmsRecepients;
