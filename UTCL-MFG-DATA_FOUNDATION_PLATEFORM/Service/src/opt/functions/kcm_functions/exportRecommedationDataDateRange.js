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

exportRecommedationDataDateRange = (req) => {
  var responseObject = {};

  let paramaters = `@opt_type=?,@plant_code=?, @mill=?,@grade=?,@model_no=?,@st_time=?,@end_time=?,@tagid=?`;

  let replacementArray = [
    "Cement Mill Optimization",
    req.body.Plant_Code,
    req.body.Mill,
    req.body.Grade,
    req.body.Model_No,
    req.body.startDate,
    req.body.endDate,
    req.body.tagId,
  ];
  var Query = " exec [dbo].[sp_kcm_fetchdata_betweendatetime]" + paramaters;

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
                "CementData" +
                "-" +
                req.body.Plant_Code +
                "-" +
                req.body.Mill +
                "-" +
                new Date().getTime();
              // let dir = "public/uat/CementData/Recommedation/" + filename;
              // if (!fs.existsSync(dir)) {
              //   fs.mkdirSync(dir, { recursive: true });
              // }

              let headerr = [
                { id: "timestamp", title: "timestamp" },
                { id: "plantcode", title: "plantcode" },
                { id: "mill", title: "mill" },
                { id: "grade", title: "grade" },
                { id: "modelNo", title: "modelNo" },
                { id: "parameterName", title: "parameterName" },
                { id: "initialValue", title: "initialValue" },
                { id: "recommendedValue", title: "recommendedValue" },
                { id: "isAcknowledged", title: "isAcknowledged" },
                { id: "isViewed", title: "isViewed" },
                { id: "comments", title: "comments" },
              ];
              // Object.keys(data[0]).sort().map((r) => {
              //   headerr.push({
              //     id: r,
              //     title: r,
              //   });
              // });
              const csvWriter = createCsvWriter({
                // path: dir + `/${filename}-1` + ".csv",
                header: headerr,
              });
              data.forEach((element) => {
                element.timestamp = moment(element.timestamp)
                  .format("YYYY-MM-DD HH:mm:ss")
                  .toString();
              });
              data.sort((a, b) => {
                return new Date(b.timestamp) - new Date(a.timestamp);
              });
              // await csvWriter
              //   .writeRecords(data) // returns a promise
              //   .then(() => {
              //     // console.log("...Done");
              //   })
              //   .catch((err) => console.log(err));
              // let link1 = link + `CementData/Recommedation/${filename}/${filename}-1.csv`;

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

module.exports = exportRecommedationDataDateRange;
