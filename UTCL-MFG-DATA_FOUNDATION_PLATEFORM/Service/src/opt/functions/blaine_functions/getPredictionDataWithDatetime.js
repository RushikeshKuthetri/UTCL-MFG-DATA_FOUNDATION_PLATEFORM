var connection = require("../../../db/connectionsql");

getPredictionDataWithDatetime = (req) => {
  var responseObject = {};

  let paramaters = `@plant_Code=?, @mill=?,@grade=?,@model_no=?,@date_time=?`;

  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    req.body.dateTime,
  ];
  var Query = " exec [dbo].[sp_blaineprediction_rec_withDateTime]" + paramaters;

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
            latestResult.Tags_Data = {};

            res.forEach((val) => {
              let Tdata = {};
              Tdata.IoT_Tag_Id = val.IoT_Tag_Id;
              Tdata.Description = val.IoT_Tag_Desc;
              Tdata.Generic_Description = val.Tag_Desc;
              Tdata.Process_Values = val.Process_Values;
              latestResult.Tags_Data[val.IoT_Tag_Id] = Tdata;
            });
            latestResult.Tags_Data = Object.values(latestResult.Tags_Data);
            // console.log(latestResult, "lllllllllll");
            delete latestResult.IoT_Tag_Id;
            delete latestResult.IoT_Tag_Desc;
            delete latestResult.Tag_Desc;
            delete latestResult.Process_Values;

            // console.log("latestResult", latestResult);
            responseObject.result = latestResult;
            responseObject.error = false;
            responseObject.status = "Success";
            // console.log("hjklkjh");
            // responseObject.result = res;
            // responseObject.error = true;
            // responseObject.status = "Failure";
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

module.exports = getPredictionDataWithDatetime;
