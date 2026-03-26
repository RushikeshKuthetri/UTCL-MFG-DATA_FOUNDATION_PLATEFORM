const connection = require("../../../../db/connectionsql");
const { sGen } = require("../../../utils/stringGenerator");
const createCsvWriter = require("csv-writer").createObjectCsvStringifier;
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

module.exports = {
  logFilterExport: async (req, res, next) => {
    const { adminid, startDate, endDate, modules, plants } = req.body;

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    if (
      !startDate ||
      !endDate ||
      !plants ||
      plants?.constructor != Array ||
      !modules ||
      modules?.constructor != Array
    ) {
      // return res.status(400).json({ error: "Please provide all required feilds in proper format" });
      const error = new Error(
        "Please provide all required fields in proper format"
      );
      error.status = 400;
      return next(error);
    }

    if (Date.parse(startDate) > Date.parse(endDate)) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `End date must be greater than the start date.`,
      // });
      const error = new Error("End date must be greater than the start date");
      error.status = 400;
      return next(error);
    }

    try {
      let paramaters = `
            @module =?,
            @plant =?,
            @start_time =?,
            @end_time =?`;

      stringPlants = sGen(plants ? plants : []);
      stringModules = sGen(modules ? modules : []);

      replacementArray = [
        stringModules ? stringModules : null,
        stringPlants ? stringPlants : null,
        startDate,
        endDate,
      ];

      Query =
        "exec [Admin].[sp_UserAccessLogs_FilterData_fortesting_Logs]" +
        paramaters;

      const result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (result.length == 0) {
        // return res.status(404).json({
        //   code: 404,
        //   status: "failed",
        //   message: "No data found!!",
        // });
        const error = new Error("No data found!");
        error.status = 404;
        return next(error);
      }

      const headerr = Object.keys(result[0]).map((r) => ({
        id: r,
        title: r.split("@@@")[0],
      }));

      plantName = plants.length != 0 ? plants[0] + "_" : "";
      moduleName = modules.length != 0 ? modules[0] + "_" : "";
      const filename =
        "AccessLogs_" + plantName + moduleName + new Date().getTime();
      // let dir = "public/uat/" + filename;
      // if (!fs.existsSync(dir)) {
      //   await fspromise.mkdir(dir);
      //   const csvWriter = createCsvWriter({
      //     path: dir + `/${filename}` + ".csv",
      //     header: headerr,
      //   });
      //   await csvWriter?.writeRecords(result);
      // }
      // const link = process.env.NODE_ENV_PROD_URL;
      // var finalLink = link + `${filename}/${filename}.csv`;
      const csvWriter = createCsvWriter({
        // path: dir + `/${filename}-1` + ".csv",
        header: headerr,
      });
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

      res.status(200).json({
        code: 200,
        status: "success",
        link: signedUrl,
      });
    } catch (error) {
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
