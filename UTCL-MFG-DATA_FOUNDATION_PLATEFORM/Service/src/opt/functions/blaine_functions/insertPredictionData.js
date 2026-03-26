var connection = require("../../../db/connectionsql");

insertPredictionData = (req) => {
  var responseObject = {};

  let paramaters = `
  @time=?,
  @plant_code=?,
  @plant_name=?,
  @mill=?,
  @mill_type=?,
  @grade=?,
  @model_no=?,
  @iot_tagId=?,
  @desc=?,
  @generic_desc=?,
  @value=?,
  @pred_bln=?`;

  let replacementArray = [
    req.body.time,
    req.body.plant_code,
    req.body.plant_name,
    req.body.mill,
    req.body.mill_type,
    req.body.grade,
    req.body.model_no,
    req.body.iot_tagId,
    req.body.desc,
    req.body.generic_desc,
    req.body.value,
    req.body.pred_bln,
  ];

  var Query = " exec [dbo].[sp_tranblaineprediction_insert]" + paramaters;

  return new Promise((resolve, reject) => {
    var ValueError = false;
    // console.log("here in latest", req.body, replacementArray);
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

            // responseObject.result = res;
            // responseObject.error = true;
            // responseObject.status = "Failure";
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

module.exports = insertPredictionData;
