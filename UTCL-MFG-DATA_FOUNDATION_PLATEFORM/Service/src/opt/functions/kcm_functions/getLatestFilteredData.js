var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
getLatestFilteredData = (req) => {
  var responseObject = {};

  let paramaters = `@opt_type=?,@plant_code=?, @mill=?,@grade=?,@model_no=?,@date_time=?`;
  let replacementArray = [
    "Cement Mill Optimization",
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    !req.body.dateTime ? "" : req.body.dateTime,
  ];
  var Query = " exec [dbo].[sp_kcm_prediction_latest_rec]" + paramaters;
// console.log(req.body.dateTime,"dddddd")
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
            let latestResult = res[0];
            latestResult.Control_Tags_Data = {};
            latestResult.Resultant_Tags_Data = {};
            
            res.forEach((val) => {
              let Tdata = {};
              Tdata.iotTagId = val.iotTagId;
              Tdata.parameterName = val.parameterName;
              Tdata.actualValue = val.actualValue;
              Tdata.minValue = val.min;
              Tdata.maxValue = val.max;
              Tdata.unitofmeasurement = val.unitofmeasurement;
              if(val.parameterType === "Yes"){
                latestResult.Control_Tags_Data[val.iotTagId] = Tdata;
              }else if (val.parameterType === "No"){
                latestResult.Resultant_Tags_Data[val.iotTagId] = Tdata;
              }

            });
            
            latestResult.Control_Tags_Data = Object.values(latestResult.Control_Tags_Data);
            latestResult.Resultant_Tags_Data = Object.values(latestResult.Resultant_Tags_Data);
          
            delete latestResult.iotTagId;
            delete latestResult.parameterName;
            delete latestResult.parameterType;
            delete latestResult.predictedValue;
            delete latestResult.isAlert;
            delete latestResult.isAction;
            delete latestResult.min;
            delete latestResult.max;
            delete latestResult.unitofmeasurement;

            responseObject.result = latestResult;
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

module.exports = getLatestFilteredData;
