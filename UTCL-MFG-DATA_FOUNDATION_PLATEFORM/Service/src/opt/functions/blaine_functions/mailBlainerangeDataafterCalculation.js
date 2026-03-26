var connection = require("../../../db/connectionsql");
const sendMailForBlaine = require("../../utils/sendMailForBlaine");

mailBlainerangeDataafterCalculation = () => {
  var responseObject = {};
  var Query = " select * from blaine_range_calculation" //+ paramaters;
  return new Promise((resolve, reject) => {
    
      connection
        .query(Query, {
          raw: true,
          replacements: [],
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        })
        .then(async(res) => {
          // console.log("res",res)
          if (res.length > 0) {
            // console.log("res",res.length)
            let mailstatus = await sendMailForBlaine(res)
            responseObject.result = mailstatus;
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
    
  });
};

module.exports = mailBlainerangeDataafterCalculation;
