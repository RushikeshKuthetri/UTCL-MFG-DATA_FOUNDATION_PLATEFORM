
const connection = require("../../../../db/connectionsql");

module.exports.deleteMimicLineAlert = (req, res) => {
  deleteMimicLineAlertFunction(req, res)
  .then((response) => {
    res.json(response);
  })
  .catch((response) => {
    res.json(response);
  });
};

 const deleteMimicLineAlertFunction= async (req, res, next) => {
    var responseObject = {};
    let paramaters = `@id =?
	 `;
  const { alertId } = req.body;



    let replacementArray = [
      alertId
    ];
    var Query = " exec [dbo].[Alerts_For_Data_Not_Coming_withline_delete]" + paramaters;
  
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
  }



