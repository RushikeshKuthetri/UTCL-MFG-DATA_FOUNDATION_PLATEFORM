import { Client, KustoConnectionStringBuilder } from "azure-kusto-data";
import {
  IoTSiteWiseClient,
  CreateBulkImportJobCommand,
} from "@aws-sdk/client-iotsitewise";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { Upload } from "@aws-sdk/lib-storage";


// Azure ADX Configuration
const ADX_CLUSTER = "https://utcprmfgadxiotpd.centralindia.kusto.windows.net";
const ADX_CLIENT_ID = "d99c09ff-0cf2-44fc-a605-6a769e0c0d6f";
const ADX_CLIENT_SECRET = "z-a8Q~KODqi7UdgwC7txoBmJTyT66TsqLmY4BajU";
const ADX_TENANT_ID = "f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c";
const ADX_DATABASE = "utcprmfgadxiotpd-db";

// AWS Configuration
const AWS_ACCESS_KEY = "";
const AWS_SECRET_KEY = "";
const AWS_REGION = "ap-south-1";
const config = {
    region: AWS_REGION,
    // credentials: {
    //     accessKeyId: AWS_ACCESS_KEY,
    //     secretAccessKey: AWS_SECRET_KEY,
    // }
};

let FILENAME = "";
let tagMaster = [];
let S3FilesUploadList = [];
// Resolve the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);
  console.log("DIR", dir)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("Directory created:", dir);
  } else {
    console.log("Directory exists:", dir);
  }
};

// Save state
const saveState = async (state) => {
  try {
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const checkpointFile = path.join(
      __dirname,
      "checkpoint_logs",
      `checkpoint_logs-${timestamp}.json`
    );
    ensureDirectoryExists(checkpointFile);
    fs.writeFileSync(checkpointFile, JSON.stringify(state, null, 2), "utf8");
    console.log("State saved:", state);
  } catch (error) {
    console.error("Failed to save state:", error);
  }
};

// Load state (optional, not used in this version but included for completeness)
const loadState = () => {
  try {
    const checkpointFile = path.join(
      __dirname,
      "checkpoint_logs",
      "checkpoint_logs-latest.json"
    );
    if (fs.existsSync(checkpointFile)) {
      const state = JSON.parse(fs.readFileSync(checkpointFile, "utf8"));
      console.log("State loaded:", state);
      return state;
    }
  } catch (error) {
    console.error("Failed to load state:", error);
  }
  return null;
};

async function uploadFileToS3(plant) {
  const s3Client = new S3Client(config);
  const filePath = path.join(__dirname, "generated_files", `${FILENAME}`);
  const bucketName = "historical-sitewise-data";
  const key = `New_Logic/${plant}/${FILENAME}`;

  try {
    const parallelUploads3 = new Upload({
      client: s3Client,
      params: {
        Bucket: bucketName,
        Key: key,
        Body: fs.createReadStream(filePath),
        ContentType: "text/csv",
      },
      tags: [], // Optional tags
      queueSize: 4, // Concurrency configuration
      partSize: 5 * 1024 * 1024, // 5MB per part
      leavePartsOnError: false, // Automatically clean up on errors
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      //console.log(`Upload progress:`, progress);
    });

    await parallelUploads3.done();
    console.log(`CSV file uploaded successfully using multipart upload.`);
    return { Bucket: bucketName, Key: key };
  } catch (error) {
    console.error("Error uploading CSV to S3 using multipart upload:", error);
    throw error;
  }
}


// async function uploadFileToS3(plant) {
//   const s3Client = new S3Client({ region: AWS_REGION });
//   const filePath = path.join(__dirname, "generated_files", `${FILENAME}`);
//   const bucketName = "historical-sitewise-data";
//   const key = `New_Logic/${plant}/${FILENAME}`;
//   const uploadParams = {
//     Bucket: bucketName,
//     Key: key,
//     Body: fs.createReadStream(filePath),
//     ContentType: "text/csv",
//   };

//   try {
//     const uploadResponse = await s3Client.send(
//       new PutObjectCommand(uploadParams)
//     );
//     console.log(`CSV file uploaded successfully:`, uploadResponse);
//     return uploadParams;
//   } catch (error) {
//     console.error("Error uploading CSV to S3:", error);
//     throw error;
//   }
// }

async function createJob(S3FilesUploadList, plant) {
  console.log("CreateJob method called. But commented.")
  // const client = new IoTSiteWiseClient({ region: AWS_REGION });

  // const input = {
  //   jobName: `Job-For-${FILENAME}`,
  //   jobRoleArn:
  //     "arn:aws:iam::311141527939:role/AmazonS3BucketAccessForIoTSiteWise-role-d89fe1",
  //   files: S3FilesUploadList.map((param) => {
  //     return { bucket: param.Bucket, key: param.Key };
  //   }),
  //   // files: [
  //   //   { bucket: uploadParams.Bucket, key: uploadParams.Key }
  //   // ],
  //   errorReportLocation: { bucket: S3FilesUploadList[0].Bucket, prefix: "error_reports/" },
  //   jobConfiguration: {
  //     fileFormat: {
  //       csv: {
  //         columnNames: [
  //           "ALIAS",
  //           "DATA_TYPE",
  //           "TIMESTAMP_SECONDS",
  //           "TIMESTAMP_NANO_OFFSET",
  //           "QUALITY",
  //           "VALUE",
  //         ],
  //       },
  //     },
  //   },
  //   adaptiveIngestion: true,
  //   deleteFilesAfterImport: false,
  // };

  // try {
  //   const command = new CreateBulkImportJobCommand(input);
  //   const response = await client.send(command);
  //   console.log("Bulk Import Job created successfully:", response);
  //   return response;
  // } catch (error) {
  //   console.error("Error creating Bulk Import Job:", error);
  //   throw error;
  // }
}

// Fetch data from ADX
async function getTableData_4(inputs) {
  const kcsb = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(
    ADX_CLUSTER,
    ADX_CLIENT_ID,
    ADX_CLIENT_SECRET,
    ADX_TENANT_ID
  );
  const client = new Client(kcsb);
  const tableName = "IotLiveData";

  const plants = inputs.plants;
  let DYNAMODB_TABLE = inputs.dynamoTable;
  const startDateString = inputs.startDate;
  const endDateString = inputs.endDate;

  let plant_global = null;
  let lastTimestamp_global = null;
  let firstTimeStamp = null;
  let count = 0;
  let rows = [];
  let isFirstCall = true;

  const localFilePath = path.join(__dirname, "masters", `${DYNAMODB_TABLE}.json`);
  if (!fs.existsSync(localFilePath)) {
    console.log(`Local file ${localFilePath} does not exist. Fetching data from DynamoDB...`);
    tagMaster = await scanFullTable(DYNAMODB_TABLE);
    ensureDirectoryExists(localFilePath);
    fs.writeFileSync(localFilePath, JSON.stringify(tagMaster, null, 2), "utf8");
    console.log(`Data written to local file: ${localFilePath}`);
  } else {
    console.log(`Local file ${localFilePath} exists. Loading data from file...`);
    tagMaster = JSON.parse(fs.readFileSync(localFilePath, "utf8"));
  }

  console.log("Tag Master length:", tagMaster.length);
  if (tagMaster.length === 0) {
    console.error("Tag Master is empty. Exiting...");
    return;
  }

  try {
    for (const plant of plants) {

      let startDate = new Date(startDateString);
      const endDate = new Date(endDateString);

      FILENAME = `${plant}_${startDate.getDate()}-${startDate.getMonth() + 1}-${startDate.getFullYear()}-${startDate.getHours()}-${startDate.getMinutes()}-${startDate.getSeconds()}_${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}-${endDate.getHours()}-${endDate.getMinutes()}-${endDate.getSeconds()}.csv`;

      plant_global = plant;
      let hasMoreData = true;
      let lastTimestamp = startDate;

      while (hasMoreData) {
        if (lastTimestamp >= endDate) {
          console.log(
            `Stopping execution: lastTimestamp (${lastTimestamp.toISOString()}) reached endDate (${endDate.toISOString()})`
          );
          break;
        }

        let testQuery = `${tableName} | where Id contains "${plant}"`;
        const startInterval = new Date(lastTimestamp);
        const endInterval = new Date(lastTimestamp.getTime() + 30 * 60 * 1000); // 30-minute intervals
        testQuery += ` and Timestamp between (datetime("${startInterval.toISOString()}") .. datetime("${endInterval.toISOString()}"))`;
        testQuery += ` and Value < 10000000000000000`;
        testQuery += ` | order by Timestamp asc`;

        console.log(
          `QUERY: `,
          testQuery
        );

        let retryCount = 0;
        const maxRetries = 10;
        const retryDelay = 5000;
        let querySuccess = false;

        while (!querySuccess && retryCount < maxRetries) {
          try {
            const results = await client.execute(ADX_DATABASE, testQuery);
            const queryRows = results.primaryResults[0]._rows;

            console.log("Rows length:", queryRows.length);
            if (queryRows && queryRows.length > 0) {
              console.log(`Fetched ${queryRows.length} rows for plant "${plant}"`);
              rows = rows.concat(queryRows);
              count++;
              lastTimestamp = new Date(
                lastTimestamp.getTime() + 30 * 60 * 1000
              );
              firstTimeStamp = new Date(queryRows[0][1]);
              console.log("firstTimeStamp --", firstTimeStamp);
              console.log("lastTimeStamp --", lastTimestamp);
              console.log("count -- ", count);

              // if (count === 10) {
              await processADXData(rows, lastTimestamp, plant, firstTimeStamp, isFirstCall);
              isFirstCall = false;
              rows = []; // Reset rows after processing
              // }
            } else {
              rows = []; // Reset rows after processing

              lastTimestamp = new Date(
                lastTimestamp.getTime() + 30 * 60 * 1000
              );
              console.log(
                `No data found, increasing lastTimestamp to ${lastTimestamp.toISOString()}`
              );
            }

            if (new Date(lastTimestamp) >= endDate) {
              hasMoreData = false;
              console.log("Reached end of date range.");
            }
            querySuccess = true;
          } catch (error) {
            if (error.message.includes("Arithmetic Overflow")) {
              console.error(
                "Arithmetic Overflow error encountered. Adjusting interval..."
              );
              lastTimestamp = new Date(lastTimestamp.getTime() + 5 * 60 * 1000);
              querySuccess = true;
            } else {
              retryCount++;
              console.error(
                `ADX Query Error (Attempt ${retryCount}/${maxRetries}):`,
                error
              );
              if (retryCount >= maxRetries) {
                throw error;
              }
              await new Promise((resolve) => setTimeout(resolve, retryDelay));
            }
          }
        }

      } // End of while loop

      // upload file to S3
      // create bulk import job
      console.log("Starting to upload the file, waiting 10 sec...")
      await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
      let uploadParams = await uploadFileToS3(plant);
      S3FilesUploadList.push(uploadParams);
      
      // Remove the file after upload
      const filePath = path.join(__dirname, "generated_files", `${FILENAME}`);
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`File removed successfully: ${filePath}`);
        } else {
          console.log(`File not found for removal: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error removing file: ${filePath}`, error);
      }

      if (S3FilesUploadList.length === 3) {
        console.log("Creating Job for 3 files...");
        await createJob(S3FilesUploadList, plant);
        S3FilesUploadList = [];
      }
      console.log("Success!");

    } // End of plants FOR loop
  } catch (error) {
    console.error("Error in getTableData_4:", error);
    await saveState({
      stage: "ADX stage",
      plant: plant_global,
      lastTimestamp: lastTimestamp_global
        ? lastTimestamp_global.toISOString()
        : lastTimestamp_global,
      lastTimestamp_adx: lastTimestamp_global,
      error: error.message,
      firstTimeStamp: firstTimeStamp,
    });
    throw error;
  }
}

const getUnit = (tagMaster, tagID) => {
  let item = tagMaster.find(tag => tag["Tag UID"] === tagID);
  if (item) {
    if (item.hasOwnProperty("Unit Of Measurement")) {
      return item["Unit Of Measurement"].toLowerCase();
    }
  }
  return null;
}

// Process ADX data directly (replacement for getDynamo when DynamoDB is commented out)
const processADXData = async (
  tag_data,
  lastTimestamp,
  plant_para,
  firstTimeStamp,
  isFirstCall
) => {
  try {
    const tag_data_arr_obj = tag_data.map((item) => ({
      TagID: item[0],
      TimeStamp: item[1],
      Value: item[2],
      Quality: item[6],
      tagName: item[0], // Use TagID as fallback alias
      unit: getUnit(tagMaster, item[0]), // Default to null since no DynamoDB enrichment
    }));

    await pushBulkImportData(
      tag_data_arr_obj,
      lastTimestamp,
      plant_para,
      firstTimeStamp,
      isFirstCall
    );
  } catch (error) {
    console.error("Error in processADXData:", error);
    await saveState({
      stage: "Process ADX Data",
      plant: plant_para,
      lastTimestamp: lastTimestamp.toISOString(),
      firstTimeStamp: firstTimeStamp,
      error: error.message,
    });
    throw error;
  }
};


async function createCSVFile(params) {
  const { filePath, csvContent } = params;

  try {
    ensureDirectoryExists(filePath);

    if (!fs.existsSync(filePath)) {
      console.log("CSV file does not exist:", filePath);
      // File does not exist, create it with headers and initial content
      fs.writeFileSync(filePath, csvContent, "utf8");
      console.log("CSV file created:", filePath);
    } else {
      console.log("CSV file Exist:", filePath);
      // File exists, append new content
      fs.appendFileSync(filePath, csvContent, "utf8");
      console.log("CSV content appended to:", filePath);
    }
  } catch (error) {
    console.error("Error in createCSVFile:", error);
    throw error;
  }
}


// Generate CSV with Alias
const generateCSV = (params, ifFirstCall) => {
  const headers = [
    "ALIAS",
    "DATA_TYPE",
    "TIMESTAMP_SECONDS",
    "TIMESTAMP_NANO_OFFSET",
    "QUALITY",
    "VALUE",
  ];
  let csvContent = "";
  if (ifFirstCall) {
    csvContent = headers.join(",") + "\n";
  }

  params.entries.forEach((entry) => {
    entry.propertyValues.forEach((value) => {
      const row = [
        entry.alias, // Use TagID as alias when DynamoDB is unavailable
        entry.unit === "state" ? "INTEGER" : "DOUBLE",
        value.timestamp.timeInSeconds,
        value.timestamp.offsetInNanos,
        value.quality,
        entry.unit === "state" ? value.value.integerValue : value.value.doubleValue
        // value.value.doubleValue,
      ];
      csvContent += row.join(",") + "\n";
    });
  });

  return csvContent;
};

// Upload CSV to S3
const uploadCSVToS3 = async (
  csvContent,
  bucketName,
  key,
  plant_para,
  lastTimestamp_ISO,
  firstTimeStamp
) => {
  const s3Client = new S3Client(config);
  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: csvContent,
    ContentType: "text/csv",
  };

  try {
    const uploadResponse = await s3Client.send(
      new PutObjectCommand(uploadParams)
    );
    console.log(`CSV file uploaded successfully:`, uploadResponse);
    return uploadParams;
  } catch (error) {
    console.error("Error uploading CSV to S3:", error);
    await saveState({
      stage: "Upload to S3",
      plant: plant_para,
      lastTimestamp: lastTimestamp_ISO.toISOString(),
      firstTimeStamp: firstTimeStamp,
      error: error.message,
    });
    throw error;
  }
};

// Create Bulk Import Job with Alias
const createBulkImportJob = async (
  bucketName,
  key,
  jobRoleArn,
  plant_para,
  lastTimestamp_ISO,
  firstTimeStamp
) => {
  const client = new IoTSiteWiseClient(config);
  const input = {
    jobName: `BulkImportJob-Alias-${new Date().toISOString()}`,
    jobRoleArn: jobRoleArn,
    files: [{ bucket: bucketName, key: key }],
    errorReportLocation: { bucket: bucketName, prefix: "error_reports/" },
    jobConfiguration: {
      fileFormat: {
        csv: {
          columnNames: [
            "ALIAS",
            "DATA_TYPE",
            "TIMESTAMP_SECONDS",
            "TIMESTAMP_NANO_OFFSET",
            "QUALITY",
            "VALUE",
          ],
        },
      },
    },
    adaptiveIngestion: true,
    deleteFilesAfterImport: false,
  };

  try {
    const command = new CreateBulkImportJobCommand(input);
    const response = await client.send(command);
    console.log("Bulk Import Job created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating Bulk Import Job:", error);
    await saveState({
      stage: "Create Bulk Import",
      plant: plant_para,
      lastTimestamp: lastTimestamp_ISO.toISOString(),
      firstTimeStamp: firstTimeStamp,
      error: error.message,
    });
    throw error;
  }
};

// Push Bulk Import Data with Alias
const pushBulkImportData = async (
  tag_data_arr_obj,
  lastTimestamp_ISO,
  plant_para,
  firstTimeStamp,
  isFirstCall
) => {
  try {
    console.log(
      "pushBulkImportData tag_data_arr_obj length:",
      tag_data_arr_obj.length
    );

    const entries = [];
    tag_data_arr_obj.forEach((row) => {
      let timeForNanoSeconds = row.TimeStamp.split(".");
      let newDateTimeStr;
      const utcTimestamp = new Date(row.TimeStamp);
      utcTimestamp.setMinutes(utcTimestamp.getMinutes() - 330);
      if (timeForNanoSeconds[1] != undefined) {
        let originalMilliseconds = row.TimeStamp.split(".")[1].slice(0, -1);
        newDateTimeStr =
          utcTimestamp.toISOString().split(".")[0] +
          "." +
          originalMilliseconds +
          "Z";
      } else {
        newDateTimeStr = utcTimestamp.toISOString().split(".")[0] + "Z";
      }
      const entry = {
        entryId: `${row.TagID}-${Date.now()}`,
        alias: row.TagID,
        unit: row.unit,
        propertyValues: [
          {
            value: row.unit === "state" ? { integerValue: parseInt(row.Value) || 0 } : { doubleValue: parseFloat(row.Value) || 0 },
            timestamp: convertToSiteWiseTimestamp(newDateTimeStr),
            quality: row.Quality || "GOOD",
          },
        ],
      };

      entries.push(entry);
    });

    const params = { entries };
    const csvContent = generateCSV(params, isFirstCall);

    await createCSVFile({
      filePath: path.join(__dirname, "generated_files", `${FILENAME}`),
      csvContent,
    });

  } catch (error) {
    console.error("Error in pushBulkImportData:", error);
    await saveState({
      stage: "Push Bulk Import",
      plant: plant_para,
      lastTimestamp: lastTimestamp_ISO.toISOString(),
      firstTimeStamp: firstTimeStamp,
      error: error.message,
    });
    throw error;
  }
};

async function scanFullTable(DYNAMODB_TABLE) {
  const dyclient = new DynamoDBClient(config);
  let params = {
    TableName: DYNAMODB_TABLE,
    ProjectionExpression: "#TagUID, #uom",
    ExpressionAttributeNames: {
      "#TagUID": "Tag UID",
      "#uom": "Unit Of Measurement"
    }
  };
  let data = [];

  try {
    do {
      let response = await dyclient.send(new ScanCommand(params));
      data = data.concat(response.Items);
      if (response.LastEvaluatedKey) {
        params.ExclusiveStartKey = response.LastEvaluatedKey;
      }
      else {
        break;
      }
    }
    while (true);

    console.log("Scan succeeded. Total items: ", data.length);
    const jsonData = data.map(item => {
      const unmarshalledItem = unmarshall(item);
      return unmarshalledItem;
    });
    return jsonData;
  } catch (error) {
    console.error("Unable to scan the table. Error JSON:", JSON.stringify(error, null, 2));
    throw error;
  }
}

function convertToSiteWiseTimestamp(isoTimestamp) {
  //console.log(isoTimestamp);
  const date = new Date(isoTimestamp);
  //console.log(date);
  const timeInSeconds = Math.floor(date.getTime() / 1000);
  const milliseconds = date.getMilliseconds();
  const nanoseconds =
    parseInt(isoTimestamp.split(".")[1]?.replace("Z", ""), 10) || 0;
  const offsetInNanos = milliseconds * 1e6 + (nanoseconds % 1e6);
  //console.log(timeInSeconds, offsetInNanos);
  return { timeInSeconds, offsetInNanos };
}


const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString();
};

// Run the process
async function runTests() {
  // let S3FilesUploadList = [{
  //   Bucket: "historical-sitewise-data", Key: "New_Logic/-KACW/-KACW_10-1-2025-23-59-59_20-1-2025-23-59-59.csv"
  // },
  // {
  //   Bucket: "historical-sitewise-data", Key: "New_Logic/-KACW/-KACW_20-1-2025-23-59-59_30-1-2025-23-59-59.csv"
  // },
  // {
  //   Bucket: "historical-sitewise-data", Key: "New_Logic/-KACW/-KACW_30-1-2025-23-59-59_9-2-2025-23-59-59.csv"
  // }]
  // await createJob(S3FilesUploadList, "plant");

  console.time("Total Time Taken");
  const START_DATE = new Date("2024-03-20T00:00:00.000Z");
  const END_DATE   = new Date("2024-04-01T00:00:00.000Z");

  let inputs = {
    plants: ["-WKCW"],
    dynamoTable: "WKCW_TagMaster",
    startDate: START_DATE,
    endDate  : addDays(START_DATE, 10)
  };
  while (new Date(inputs.endDate) <= END_DATE) {
    console.log("Inputs:", inputs);
    await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
    
    console.time(`Time Taken for ${inputs.startDate} to ${inputs.endDate}`);
    await getTableData_4(inputs);
    console.timeEnd(`Time Taken for ${inputs.startDate} to ${inputs.endDate}`);

    inputs.startDate = inputs.endDate;
    inputs.endDate = addDays(new Date(inputs.endDate), 10);
  }

  if (S3FilesUploadList.length > 0) {
    console.log(`Creating Job for remaining ${S3FilesUploadList.length} files...`);
    await createJob(S3FilesUploadList, "plant");
  }
  S3FilesUploadList = [];
  console.timeEnd("Total Time Taken");
  console.log("----------------------");
  const differenceInDays = Math.ceil((new Date(inputs.endDate) - END_DATE) / (1000 * 60 * 60 * 24));
  console.log("inputs.endDate", new Date(inputs.endDate));
  console.log("ENDDATE", END_DATE);
  console.log(`Difference in days between inputs.endDate and END_DATE: ${differenceInDays}`);

  if (differenceInDays > 0) {
    inputs.endDate = END_DATE;
    console.log("Running for remaining days...");
    console.log("Inputs:", inputs);
    console.time(`Time Taken for ${inputs.startDate} to ${inputs.endDate}`);
    await getTableData_4(inputs);
    console.timeEnd(`Time Taken for ${inputs.startDate} to ${inputs.endDate}`);
  }
}

runTests();
