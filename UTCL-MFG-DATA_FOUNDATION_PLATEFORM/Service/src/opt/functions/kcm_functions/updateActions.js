var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
updateActions = (req) => {
  var responseObject = {};
 
  let paramaters = `
  @opt_type =?,
  @plant_code =?,
   @mill =?,
   @grade =?,
   @model_no =?,
   @time =?,
   @tagid =?,
   @actionTaken =?,
   @ack_by =?,
   @is_snoozed =?,
   @comments =?,
   @ack_time =?,
   @is_viewed =?,
   @is_ack=?,
   @userid=?`

  let replacementArray = [
    "Cement Mill Optimization",
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    req.body.dateTime,
    req.body.TagId,
    req.body.actionTaken,
    req.body.acknowledgeBy,
    req.body.isSnoozed,
    req.body.comments,
    req.body.acknowledgeDateTime,
    req.body.isViewed,
    req.body.isAcknowledged,
    req.user
  ];
  var Query = " exec [dbo].[sp_kcm_action_update_test]" + paramaters;

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

module.exports = updateActions;
