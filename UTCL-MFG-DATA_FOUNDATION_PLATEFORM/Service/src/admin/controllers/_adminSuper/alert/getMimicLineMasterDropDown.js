
const connection = require("../../../../db/connectionsql");

module.exports.getMimicLineMasterDropDown = (req, res) => {
  getMimicLineMasterDropDownFunction(req, res)
  .then((response) => {
    res.json(response);
  })
  .catch((response) => {
    res.json(response);
  });
};

 const getMimicLineMasterDropDownFunction = async (req, res, next) => {
    var responseObject = {};
    let paramaters = `@Plant_name=?`;
    const { plant } = req.body;
    
    
    let replacementArray = [
      plant
    ];
    var Query = " exec [dbo].[sp_masterplant_getline_new]" + paramaters;
    
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
            console.log("herrrrrrrrrrrr",  responseObject)
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




