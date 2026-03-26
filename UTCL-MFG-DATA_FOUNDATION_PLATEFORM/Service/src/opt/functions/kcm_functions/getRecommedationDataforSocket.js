var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
getRecommedationDataforSocket = (data) => {
  var responseObject = {};
  let paramaters = `@opt_type=?,@plant_code=?, @mill=?,@grade=?,@model_no=?,@time=?`;
  // console.log(data,"dddddddddddddddd")
  // data ={
  //   optType: 'cement',
  //   Mill: 'U1CMML1',
  //   Grade: 'PPC',
  //   Plant_Code: 'GC01',
  //   Model_No: 0
  // }
  let replacementArray = [
    "Cement Mill Optimization",
    data?.Plant_Code,
    data?.Mill,
    data?.Grade,
    data?.Model_No,
    ""
  ];
  // console.log("hereeeeeeeeeeee" ,replacementArray)
  var Query = " exec [dbo].[sp_kcm_action_details]" + paramaters;
  
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

module.exports = getRecommedationDataforSocket;
