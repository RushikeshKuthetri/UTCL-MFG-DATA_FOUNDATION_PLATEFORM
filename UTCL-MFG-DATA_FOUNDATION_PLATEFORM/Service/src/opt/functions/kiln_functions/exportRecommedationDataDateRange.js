var connection = require("../../../db/connectionsql");
// const optOptions = require("../../utils/kcm_param_url_obj")
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const moment = require("moment");
getRecommedationDataDateRange = (req) => {
  var responseObject = {};

  let paramaters = `@plant_code=?, @kiln_no=?,@st_time=?,@end_time=?,@tagid=?`;
 
  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.startDate,
    req.body.endDate,
    !req.body.tagId ? "" : req.body.tagId   
  ];
  var Query = " exec [dbo].[sp_kiln_fetchdata_betweendatetime]" + paramaters;

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
        .then(async (data) => {
            // console.log(data[0]?.result === "No Record Found", "res");
  
            if (data.length > 0) {
              // console.log(data[0],"ddddd")
              if (data[0]?.result !== "No Record Found") {
                const link = process.env.NODE_ENV_PROD_URL;
                let filename =
                  "KilnData" +
                  "-" +
                  req.body.Plant_Code +
                  "-" +
                  req.body.Mill +
                  "-" +
                  new Date().getTime();
                let dir = "public/uat/KilnData/Recommedation/" + filename;
                if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true });
                }
                
                let headerr = [
                  { id: "timestamp", title: "timestamp"},
                  { id: "plantcode", title: "plantcode"},
                  { id: "kiln_no", title: "kiln_no"},
                  { id: "Display_Name", title: "Display_Name"},
                  { id: "UoM", title: "UoM"},
                  { id: "initialValue", title: "initialValue"},
                  { id: "recommendedValue", title: "recommendedValue"},
                  { id: "isAcknowledged", title: "isAcknowledged"},
                  { id: "isViewed", title: "isViewed"},
                  { id: "comments", title: "comments"},   
                ];
                // Object.keys(data[0]).sort().map((r) => {
                //   headerr.push({
                //     id: r,
                //     title: r,
                //   });
                // });
                const csvWriter = createCsvWriter({
                  path: dir + `/${filename}-1` + ".csv",
                  header: headerr,
                });
                data.forEach((element) => {
                  element.timestamp = moment(element.timestamp)
                    .format("YYYY-MM-DD HH:mm:ss")
                    .toString();
                    element["plantcode"] = element["plantcode"].trim()
                    element["kiln_no"] = element["kiln_no"].trim()
                    element["Display_Name"] = element["Display_Name"].trim()
                    element["UoM"] = element["UoM"].trim()
                  
                });
                data.sort((a, b) => {
                  return new Date(b.timestamp) - new Date(a.timestamp);
                });
                await csvWriter
                  .writeRecords(data) // returns a promise
                  .then(() => {
                    // console.log("...Done");
                  })
                  .catch((err) => console.log(err));
                let link1 = link + `KilnData/Recommedation/${filename}/${filename}-1.csv`;
  
                responseObject.result = { url: link1 };
                responseObject.error = false;
                responseObject.status = "Success";
              } else {
                responseObject.result = data;
                responseObject.error = true;
                responseObject.status = "Failure";
              }
            } else {
              responseObject.result = {
                result: "Something went wrong. Please try again later.",
              };
              responseObject.error = true;
              responseObject.status = "Failure";
  
              // responseObject.result = {
              //   result: "No Record Found",
              // };
              // responseObject.error = true;
              // responseObject.status = "Failure";
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

module.exports = getRecommedationDataDateRange;
