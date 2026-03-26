var connection = require("../../../db/connectionsql");

getLatestFilteredData = (req) => {
  var responseObject = {};

  let paramaters = `@plant_code=?, @mill=?,@grade=?,@model_no=?`;

  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
  ];
  var Query = " exec [dbo].[sp_blaineprediction_latest_rec]" + paramaters;

  return new Promise((resolve, reject) => {
    var ValueError = false;
    // console.log("here in latest");
    replacementArray.map((val) => {
      if (val === null ||  val === undefined) {
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
              Tdata.Remarks = val.Remarks;
              latestResult.Tags_Data[val.IoT_Tag_Id] = Tdata;
            });
            latestResult.Tags_Data = Object.values(latestResult.Tags_Data);
            // console.log(latestResult, "lllllllllll");
            delete latestResult.IoT_Tag_Id;
            delete latestResult.IoT_Tag_Desc;
            delete latestResult.Tag_Desc;
            delete latestResult.Process_Values;
            delete latestResult.Remarks;

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

module.exports = getLatestFilteredData;
