var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
getChartTrendsData = (req) => {
  var responseObject = {};

  let paramaters = `  @Plant_SAP_Code =?,
  @Kiln_No =?,
  @Tag_Id =?,
  @Start_date =?,
  @End_date =?
  `;
 
  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.tagId,   
    req.body.startDate,
    req.body.endDate,
  ];
  var Query = " exec [dbo].[SP_Kiln_Telemetry_Date_time_Value]" + paramaters;

  return new Promise((resolve, reject) => {
    var ValueError = false;
    replacementArray.map((val) => {
      if (val === undefined) {
        responseObject.result = { result: "Value Error ! incorrect Payload !" };
        responseObject.error = true;
        responseObject.status = "Failure";
        ValueError = true;
      }
    });
    if (ValueError) {
      reject(responseObject);
    } else {
      connection
        .query(Query, {
          raw: true,
          replacements: replacementArray,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        })
        .then((res) => {
          // console.log(res, "res");
          if (res.length > 0) {
            responseObject.result = res;
            responseObject.error = false;
            responseObject.status = "Success";
          
          } else {
            responseObject.result = {
              result: "Something Went Wrong! Try again !",
            };
            responseObject.error = true;
            responseObject.status = "Failure";
          }
          resolve(responseObject);
        })
        .catch((Error) => {
          responseObject.result = { result: Error.message };
          responseObject.error = true;
          responseObject.status = "Failure";
          reject(responseObject);
        });
    }
  });
};

module.exports = getChartTrendsData;
