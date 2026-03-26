var connection = require("../../../db/connectionsql");
updateCloseLoopMasterData = (req) => {
  var responseObject = {};
 
  let data  = req.body
  

    let replacementArray = [
    ];
  let Query = ""
  
  let paramaters = `
  @userid =?,
    @plant =?,
    @mill =?,
    @parameter =?,
    @flag =?
  `
  let Query1 = " exec [dbo].[SP_kiln_closeloopmaster_Update]" + paramaters;
  data && data.forEach(ele => {
    Query = Query + Query1
    replacementArray = [...replacementArray, ...[
      req.user,
        ele.plant,
        ele.mill,
        ele.parameters,
        ele["Close Loop Flag"],
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

module.exports = updateCloseLoopMasterData;
