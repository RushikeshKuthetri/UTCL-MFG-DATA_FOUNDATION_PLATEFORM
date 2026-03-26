var connection = require("../../../db/connectionsql");
getDropDownFilter = (req) => {
  var responseObject = {};
 
  let paramaters = ``;

  let replacementArray = [
  ];
  var Query = " exec [dbo].[sp_kiln_master_filter]" + paramaters;
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
            res.map((val)=> {
              val.Plant_SAP_Code = val.Plant_SAP_Code.trim()
              val.Kiln_No = val.Kiln_No.trim()
            })
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

module.exports = getDropDownFilter;
