const moment = require("moment");
var connection = require("../../../db/connectionsql");

updateActualBlaineOneHour = (req) => {
  var responseObject = {};

  let dateTime = moment().utcOffset(330).format("YYYY-MM-DD ");
  dateTime = dateTime + req.body.hour + ":00:00";

  let paramaters = `@plant_code=?,
  @mill=?,
  @grade=?,
  @model_no=?,
  @date=?,
  @actual_blaine=?,
  @userid=?`;

  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    dateTime,
    req.body.actualBlaine,
    req.user
  ];
  var Query = " exec [dbo].[sp_Blaine_update_actualBlaine]" + paramaters;
  // var Query = " exec [dbo].[sp_tranblaineprediction_latest_rec]" + paramaters;

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
            // let latestResult = res[0];
            // latestResult.Tags_Data = {};

            // res.forEach((val) => {
            //   let Tdata = {};
            //   Tdata.IoT_Tag_Id = val.IoT_Tag_Id;
            //   Tdata.IoT_Tag_Desc = val.IoT_Tag_Desc;
            //   Tdata.Tag_Desc = val.Tag_Desc;
            //   Tdata.Values = val.Values;
            //   latestResult[IoT_Tag_Id] = Tdata;
            // });
            // delete latestResult.IoT_Tag_Id;
            // delete latestResult.IoT_Tag_Desc;
            // delete latestResult.Tag_Desc;
            // delete latestResult.Values;

            responseObject.result = res;
            responseObject.error = false;
            responseObject.status = "Success";

            // responseObject.result = res;
            // responseObject.error = true;
            // responseObject.status = "Failure";
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

module.exports = updateActualBlaineOneHour;
