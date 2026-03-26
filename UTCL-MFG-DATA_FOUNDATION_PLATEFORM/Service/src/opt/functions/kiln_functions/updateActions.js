var connection = require("../../../db/connectionsql");
updateActions = (req) => {
  var responseObject = {};
 
  let data  = req.body
  
  // console.log(Query1, replacementArray, "aaaaaaaaaaaaaaaaaaaaaaa")
    let replacementArray = [
    ];
  let Query = ""
  
  let paramaters = `
  @id =?,
  @timestamp =?,
  @plantcode =?,
  @kiln_no =?,
  @Tag_Id =?,
  @comments =?,
  @acknowledge_time =?,
  @acknowledge_by =?,
  @isAcknowledged =?,
  @isViewed =?,
  @action_taken =?,
  @userid =?
  `
  let Query1 = " exec [dbo].[Sp_kiln_actiontable_Update_test]" + paramaters;
  data && data.forEach(ele => {
    Query = Query + Query1
    replacementArray = [...replacementArray, ...[
        ele.id,
        ele.dateTime,
        ele.Plant_Code,
        ele.Mill,
        ele.TagId,
        ele.comments,
        ele.acknowledgeDateTime,
        ele.acknowledgeBy,
        ele.isAcknowledged,
        ele.isViewed,
        ele.actionTaken,
        req.user
      ]]
    });
 
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
            responseObject.result =   {
              "result": res.length + ( res.length > 1 ? " Records ": " Record ") +"Updated Successfuly"
          };
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
