var connection = require("../../../db/connectionsql");

getDashboardCardData = (req) => {
  var responseObject = {};
  let paramaters = `@plant_code=?, @mill=?,@grade=?,@model_no=?,@date=?`;

  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    req.body.date,
  ];
  var Query = " exec [dbo].[Sp_KCM_ActionTable_D_Total_Recommendation]" + paramaters;

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
              result: "No Record Found",
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

module.exports = getDashboardCardData;
