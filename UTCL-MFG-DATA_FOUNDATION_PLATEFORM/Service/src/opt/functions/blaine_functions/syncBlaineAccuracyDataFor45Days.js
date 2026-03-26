var connection = require("../../../db/connectionsql");

syncBlaineAccuracyDataFor45Days = (data) => {
  var responseObject = {};

  //let paramaters = `@plant_code=?, @mill=?,@grade=?,@model_no=?`;

  let replacementArray = [
    // data.Plant_Code,
    // data.Mill,
    // data.Grade,
    // data.Model_No,
  ];
  var Query = ` exec [dbo].[sp_blaine_range_calculation] exec [dbo].[sp_blaine_model_retraining_actualBlaine_update_from_SAP]`//+ paramaters;

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
          // console.log("res",res)
          if (res.length > 0) {
            responseObject.result = res;
            responseObject.error = false;
            responseObject.status = "Success";
          } else {
            responseObject.result = {
              result: "Something went wrong. Please try again later.",
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

module.exports = syncBlaineAccuracyDataFor45Days;
