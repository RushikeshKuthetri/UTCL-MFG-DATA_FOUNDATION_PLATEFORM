var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
// var connection = require("../../db/connectionsql")
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const moment = require("moment");
exportReportData = (req) => {
  var response;
  let { Tags, startDate, endDate, interval, plantName, ReportTemplateName } =
    req.body;

  /// start

  return new Promise(async (resolve, reject) => {
    try {
      var count = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_CBM_UidWiseAvg_DataExport_Count('${Tags}','${startDate}','${endDate}','${interval}','${plantName}')`
      );
      // console.log(
      //   JSON.parse(JSON.stringify(count.primaryResults[0])).data[0].Count
      // );
      var data = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_CBM_UidWiseAvg_DataExport('${Tags}','${startDate}','${endDate}','${interval}','${plantName}')`
      );

      // var data = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `
      //   })`
      // );

      data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      // console.log(data, "data");

      // if (!fs.existsSync(dir)) {
      //   // console.log("not exist " + dir);
      //   fs.mkdir(dir, (err) => {
      //     console.log(err);
      //     if (err) {
      //       new Error(err);
      //     }
      //   });
      // }
      const link = process.env.NODE_ENV_PROD_URL;

      if (data.length > 0) {
        // console.log(data, "dddddddddddddd");
        let filename = new Date().getTime() + ReportTemplateName;
        let dir = "public/api/reportData/" + filename;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        let headerr = [];
        Object.keys(data[0]).map((r) => {
          if (r === "Row_Number") {
            return;
          }

          headerr.push({
            id: r,
            title: r,
          });
        });
        const csvWriter = createCsvWriter({
          path: dir + `/${filename}-1` + ".csv",
          header: headerr,
        });
        // console.log(data[0]);
        data.forEach((element) => {
          element.TimeStamp = moment(element.TimeStamp)
            .format("YYYY-MM-DD HH:mm:ss")
            .toString();
        });

        await csvWriter
          .writeRecords(data) // returns a promise
          .then(() => {
            console.log("...Done");
          })
          .catch((err) => console.log(err));
        let link1 = link + `reportData/${filename}/${filename}-1.csv`;
        response = responseObject(link1, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
      resolve(response);
    } catch (error) {
      console.log(error.message);
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = exportReportData;
