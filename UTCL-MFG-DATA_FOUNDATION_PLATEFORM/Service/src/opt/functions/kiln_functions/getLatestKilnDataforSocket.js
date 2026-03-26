var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
getLatestKilnDataforSocket = (data) => {
  var responseObject = {};
  let paramaters = `@plant_code=?, @kiln_no=?,@date_time=?`;
  // console.log(data.Plant_Code, "hhhhhhhhhhh")
  let replacementArray = [
    data.Plant_Code,
    data.Mill,
    "",
  ];
  var Query = " exec [dbo].[sp_kiln_telemetry_latest_rec]" + paramaters;
  let paramaters1 = `@plant_code=?, @kiln=?`;
  
  let replacementArray1 = [
    data.Plant_Code,
    data.Mill
  ];
  var Query1 = " exec [dbo].[Sp_Kiln_Disturbance_Recco_GetData]" + paramaters1;

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
    replacementArray1.map((val) => {
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
              Tdata.Tag_Id = val.Tag_Id;
              Tdata.Generic_Name = val.Generic_Name;
              Tdata.Display_Name = val.Display_Name;
              Tdata.Min_Threshold = val.Min_Threshold;
              Tdata.Max_Threshold = val.Max_Threshold;
              Tdata.Value = val.Value;
              Tdata.unitofmeasurement = val.unitofmeasurement ? val.unitofmeasurement :  "UOM" 
              if(val.Parameter_Type){
                latestResult.Control_Tags_Data[val.Tag_Id] = Tdata;
              }else if (!val.Parameter_Type){
                latestResult.Resultant_Tags_Data[val.Tag_Id] = Tdata;
              }

            });
            
            latestResult.Control_Tags_Data = Object.values(latestResult.Control_Tags_Data);
            latestResult.Resultant_Tags_Data = Object.values(latestResult.Resultant_Tags_Data);
            delete latestResult.Display_Name
            delete latestResult.Min_Threshold
            delete latestResult.Max_Threshold
            delete latestResult.Tag_Id
            delete latestResult.Value
            delete latestResult.Generic_Name
            delete latestResult.Parameter_Type
            // delete latestResult.Shutdown_Flag
            delete latestResult.Is_Predictable
            delete latestResult.Invalid_Data
            delete latestResult.Calc_Throughput
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
          // resolve(responseObject);
        }) .then(()=>{
          connection
          .query(Query1, {
            raw: true,
            replacements: replacementArray1,
            type: connection.QueryTypes.SELECT,
            logging: console.log,
          })
          .then((res) => {
            // console.log(res, "res");
            if (res.length > 0) {
              responseObject.result.disturbanceRecords = res;
              responseObject.error = false;
              responseObject.status = "Success";
            
            } else {
              responseObject.result = {
                result: "Something Went Wrong! Try again !",
              };
              responseObject.error = true;
              responseObject.status = "Failure";
            }
            resolve(responseObject);
          }) .catch((Error) => {
            responseObject.result = { result: Error.message };
            responseObject.error = true;
            responseObject.status = "Failure";
            reject(responseObject);
          });
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

module.exports = getLatestKilnDataforSocket;
