var connection = require("../../../db/connectionsql");

updateKilnControlParameterRangeMasterData = (req) => {
  var responseObject = {};
  

  const data = req.body;
  let replacementArray = [];
  let Query = ""
//   console.log(data)
  let paramaters = `
    @plant=?, @kiln=?,@tag_id=?,@step_min=?, @step_max=?, @op_min=?, @op_max=?, @f_min=?, @f_max=?, @userid=?
    `;

    let Query1 = " exec [dbo].[SP_Kiln_Cntrl_Param_Opt_Range_Setp_Size_Failure_Bond_Update_Test]" + paramaters;
    data && data.forEach(ele => {
        Query = Query + Query1
        replacementArray = [...replacementArray, ...[
            ele.Plant_Code,
            ele.Kiln,
            ele.tag_id,
            ele.step_min,
            ele.step_max,
            ele.op_min,
            ele.op_max,
            ele.f_min,
            ele.f_max,
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

module.exports = updateKilnControlParameterRangeMasterData;
