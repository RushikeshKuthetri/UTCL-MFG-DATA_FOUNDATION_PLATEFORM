var connection = require("../../../db/connectionsql");

updateBlaineAlert = (req) => {
  var responseObject = {};

  let paramaters = `@id=?
	, @mdate=?
	, @modifiedby=?
	, @recipient=?
	, @isalert=?
	, @interval=?`;


  let today = new Date();
  var currentOffset = today.getTimezoneOffset();
  var ISTOffset = 330;   // IST offset UTC +5:30 
  var ISTTime = new Date(today.getTime() + (ISTOffset + currentOffset)*60000);
  let dateTime =
        ISTTime.getFullYear() +
        "-" +
        String(ISTTime.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(ISTTime.getDate()).padStart(2, "0") +
        " " +
        String(ISTTime.getHours()).padStart(2, "0") +
        ":" +
        String(ISTTime.getMinutes()).padStart(2, "0") +
        ":" +
        String(ISTTime.getSeconds()).padStart(2, "0");

  let replacementArray = [
    req.body.alertId,
    dateTime,
    req.body.userId,  
    req.body.recipient,
    req.body.isAlert,
    req.body.interval
  ];
  var Query = " exec [dbo].[sp_blaine_dnc_update]" + paramaters;

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

module.exports = updateBlaineAlert;
