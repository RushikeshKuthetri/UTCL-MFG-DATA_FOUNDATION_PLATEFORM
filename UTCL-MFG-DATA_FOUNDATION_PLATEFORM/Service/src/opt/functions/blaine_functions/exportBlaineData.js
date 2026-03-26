var connection = require("../../../db/connectionsql");
const createCsvWriter = require("csv-writer").createObjectCsvStringifier;
// const fs = require("fs");
const moment = require("moment");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: process.env.NODE_ENV_AWS_REGION,
});

const bucketName = "process-opt-export-data-bucket";

exportBlaineData = (req) => {
  var responseObject = {};

  let paramaters = `@Plant_Code=?, @Mill=?,@Grade=?,@Model_No=?,@st_time=?, @end_time=?`;

  let replacementArray = [
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    req.body.StartDate,
    req.body.EndDate,
  ];
  var Query = " exec [dbo].[sp_blaineprediction_fetch_Exportdata]" + paramaters;

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
          // console.log(data);
          if (data.length > 0) {
            if (data[0]?.result !== "No Record Found") {
              const link = process.env.NODE_ENV_PROD_URL;
              let filename =
                "blaineData" +
                "-" +
                req.body.Plant_Code +
                "-" +
                req.body.Mill +
                "-" +
                req.body.Grade +
                "-" +
                req.body.Model_No +
                "-" +
                new Date().getTime();
              // let dir = "public/uat/BlaineData/" + filename;
              // let dir = "/tmp/BlaineData/" + filename;
              // if (!fs.existsSync(dir)) {
              //   fs.mkdirSync(dir, { recursive: true });
              // }
              let headerr = [];
              Object.keys(data[0]).map((r) => {
                // if(req.role !== "super_admin" && r==="Actual_Blaine"){
                //   // console.log("returning")
                //   return
                // }
                headerr.push({
                  id: r,
                  title: r,
                });
              });

              const csvWriter = createCsvWriter({
                // path: dir + `/${filename}-1` + ".csv",
                header: headerr,
              });
              data.forEach((element) => {
                element.Date_Time = moment(element.Date_Time)
                  .format("YYYY-MM-DD HH:mm:ss")
                  .toString();
              });
              // await csvWriter
              //   .writeRecords(data) // returns a promise
              //   .then(() => {
              //     // console.log("...Done");
              //   })
              //   .catch((err) => console.log(err));
              // let link1 = link + `BlaineData/${filename}/${filename}-1.csv`;

              const csvContent =
                csvWriter.getHeaderString() + csvWriter.stringifyRecords(data);

              const params = {
                Bucket: bucketName,
                Key: filename,
                Body: csvContent,
                ContentType: "text/csv",
              };
              const command = new PutObjectCommand(params);

              await s3Client.send(command);

              const getObjCommand = new GetObjectCommand({
                Bucket: bucketName,
                Key: filename,
              });
              const signedUrl = await getSignedUrl(s3Client, getObjCommand, {
                expiresIn: 3600,
              });

              responseObject.result = { url: signedUrl };
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

module.exports = exportBlaineData;
