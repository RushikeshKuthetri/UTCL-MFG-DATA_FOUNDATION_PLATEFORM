var connection = require("../../../db/connectionsql");

getKilnControlParameterRangeMasterData = (req) => {
  var responseObject = {};
  let paramaters = ` @plant=?,
    @kiln=?
    `;
  let replacementArray = [req.body.Plant_Code, req.body.Kiln];
  var Query =
    "exec [dbo].[SP_Kiln_Cntrl_Param_Opt_Range_Setp_Size_Failure_Bond_GetData]" +
    paramaters;

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
          if (res.length > 0) {
            responseObject.result = res;
            responseObject.error = false;
            responseObject.status = "Success";
          } else {
            responseObject.result = {
              result: "No record found!",
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

module.exports = getKilnControlParameterRangeMasterData;
