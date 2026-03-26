var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
updateBlaineRangeList = (req) => {
  var responseObject = {};
 
  let paramaters = `@opt_type=?, @plant=?, @mill=?, @grade=?, @min=?, @max=?, @active=?`;

  let replacementArray = [
    "Cement Mill Optimization"
  , req.body.Plant_Code, req.body.Mill, req.body.Grade,
  req.body.Min,
  req.body.Max,
  req.body.Active
];
  var Query = " exec [dbo].[sp_kcm_activeRange_update]" + paramaters;
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
              result: "Something Went Wrong!",
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

module.exports = updateBlaineRangeList;
