// handler.js
const ExcelJS = require("exceljs");
// const xlsx = require("xlsx");
require("dotenv").config();

const {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} = require("@aws-sdk/client-apigatewaymanagementapi");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const ApiGatewayManagementClient = new ApiGatewayManagementApiClient({
  endpoint: process.env.NODE_ENV_WEBSOCKET_API_ENDPOINT,
});

const {
  IoTSiteWiseClient,
  ExecuteQueryCommand,
  GetAssetPropertyValueCommand,
  DescribeAssetCommand,
  CreateAssetModelCommand,
  CreateAssetCommand,
  DescribeAssetModelCommand,
  BatchGetAssetPropertyValueHistoryCommand,
  BatchPutAssetPropertyValueCommand,
  BatchGetAssetPropertyAggregatesCommand,
} = require("@aws-sdk/client-iotsitewise");
const xlsx = require("xlsx");
const zlib = require("zlib");

const {
  DynamoDBClient,
  QueryCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
// const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses')
const moment = require("moment");
const { gunzipSync } = require("zlib");

const s3Client = new S3Client({
  region: process.env.NODE_ENV_AWS_REGION,
});

const {
  putCommand,
  deleteCommand,
  getQueryWithoutPagination,
} = require("./src/helpers/dynamoDB");
const { getAssetPropertyValue } = require("./src/helpers/iotSitewise");

const sendMail = require("./src/utils/sendMail");
const { getSecretKeys } = require("./src/helpers/secretManager");
const { sGen } = require("./src/utils/stringGenerator");
// const { createObjectCsvWriter } = require('csv-writer');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// const { streamifyResponse } = require("aws-lambda");
const { streamifyResponse } = require("lambda-stream"); // Use lambda-stream

const { Upload } = require("@aws-sdk/lib-storage");
const { format } = require("@fast-csv/format");
const { PassThrough } = require("stream");

// Web socket connection handler
module.exports.ConnectionHandler = async (event) => {
  const routeKey = event?.requestContext?.routeKey;
  // const connectionId = event?.requestContext?.connectionId;

  // const connectParams = {
  //   TableName: "UTCL-Connections",
  //   Item: {
  //     id: { S: connectionId },
  //   },
  // };

  // const disconnectParams = {
  //   TableName: "UTCL-Connections",
  //   Key: {
  //     id: { S: connectionId },
  //   },
  // };

  switch (routeKey) {
    case "$connect":
      // code
      // await putCommand(connectParams);
      return { statusCode: 200, body: "Connected" };
    case "$disconnect":
      // code
      // await deleteCommand(disconnectParams);
      return { statusCode: 200, body: "Disconnected" };
    case "$default":
      // code
      return { statusCode: 200, body: "Default Path" };
  }
};

function formatScientific(num, digits = 2) {
  const val = Number(num);
  if (!isFinite(val)) return "0";

  // Only format if very large or very small
  if (Math.abs(val) >= 1e6 || Math.abs(val) < 1e-3) {
    return val.toExponential(digits);
  }

  return val.toFixed(digits); // Keep as normal number
}

// fetch data via sitewise and triggered via cloudwatch event rule
module.exports.SendSitewiseHandler = async (event) => {
  let currentBody = {};
  console.log(
    "SendSitewiseHandler Connection Event connectionId:",
    JSON.stringify(event?.requestContext?.connectionId)
  );
  const connectionId = event?.requestContext?.connectionId;
  if (event?.body) {
    currentBody = JSON.parse(event.body);
  }
  const tagList = currentBody?.tagList;

  if (tagList && tagList?.length) {
    const result = await getAssetPropertyValue(tagList);
    const newResult = tagList.map((item, index) => {
      const obj = result.find(
        (findItem) => findItem.entryId === `${index + 1}`
      );
      const valueObject = obj?.assetPropertyValue?.value;
      let value = null;
      if (valueObject) {
        value = Object.values(valueObject)[0];
        value = formatScientific(value);
      }
      return {
        ...item,
        value,
      };
    });

    const messageData = JSON.stringify(newResult);
    try {
      // Send the message to the given client
      const postConnectionOP = new PostToConnectionCommand({
        ConnectionId: connectionId,
        Data: messageData,
      });

      // console.log("postConnectionOP", postConnectionOP);
      const data = await ApiGatewayManagementClient.send(postConnectionOP);
      // console.log("Message sent:", data);
    } catch (e) {
      console.log("POST_CONNECTION_ERROR", e);
    }
  }
  return { statusCode: 200, body: "Message sent" };
};
//create iot sitewise asset and model
module.exports.CreateAssetandModelHandler = async (event) => {
  console.log("--ee--", event);
  try {
    const client = new S3Client({
      region: process.env.AWS_REGION_NAME,
    });
    //export data from s3
    const bucketName = "testsitewisetags";
    const fileKey = "testtags.xlsx";

    // Simple GetObject
    const command = new GetObjectCommand({ Bucket: bucketName, Key: fileKey });
    const response = await client.send(command);
    const file = response.Body;
    return new Promise((resolve, reject) => {
      const buffers = [];
      file.on("data", function (data) {
        buffers.push(data);
      });

      file.on("end", function () {
        const buffer = Buffer.concat(buffers);
        const workbook = xlsx.read(buffer, { type: "buffer" });
        const workSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[workSheetName];
        const data = xlsx.utils.sheet_to_json(worksheet, { defval: "" });
        console.log("data--", data);

        // Step 3: Remove spaces from the headers (column names)
        const cleanedData = data.map((row) => {
          const cleanedRow = {};
          Object.keys(row).forEach((key) => {
            const cleanedKey = key.replace(/\s+/g, ""); // Remove all spaces from header
            cleanedRow[cleanedKey] = row[key];
          });
          return cleanedRow;
        });

        // Step 4: Log the trimmed data structure for debugging
        console.log("Trimmed data structure:", cleanedData);

        // Step 3: Build asset hierarchy based on the data
        const hierarchy = buildHierarchy(cleanedData);

        console.log("hierarchy --", JSON.stringify(hierarchy, null, 2));

        // This function should iterrate over the hierarchy and create resp model and asset
        // createSiteWiseAssets(hierarchy)

        // For testing creation of Model
        createAnalyserModel();

        // For testing creation of Asset
        createAsset();

        resolve("success");
        // resolve(data);
      });

      file.on("error", (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.log("--error---", error);
  }
};

function buildHierarchy(data) {
  const hierarchy = {};

  data.forEach((row) => {
    // Trim spaces in the headers and map them
    const {
      Cluster,
      Plant,
      Line,
      PlantSAPCode,
      Section,
      SectionNumber,
      EquipmentGroup,
      EquipmentSubtype,
      TagName,
    } = row;

    // Create or update the hierarchy structure for Cluster and Plant
    if (!hierarchy[Cluster]) {
      hierarchy[Cluster] = { plants: {} };
    }
    if (!hierarchy[Cluster].plants[Plant]) {
      hierarchy[Cluster].plants[Plant] = { lines: {} };
    }

    // Create or update the hierarchy structure for Line, Plant SAP Code, Section, and Section Number
    if (!hierarchy[Cluster].plants[Plant].lines[Line]) {
      hierarchy[Cluster].plants[Plant].lines[Line] = { sapCode: {} };
    }
    if (!hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode]) {
      hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode] = {
        sections: {},
      };
    }
    if (
      !hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode]
        .sections[Section]
    ) {
      hierarchy[Cluster].plants[Plant].lines[Line].sapCode[
        PlantSAPCode
      ].sections[Section] = { sectionNumber: {} };
    }
    if (
      !hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode]
        .sections[Section].sectionNumber[SectionNumber]
    ) {
      hierarchy[Cluster].plants[Plant].lines[Line].sapCode[
        PlantSAPCode
      ].sections[Section].sectionNumber[SectionNumber] = { equipment: {} };
    }
    if (
      !hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode]
        .sections[Section].sectionNumber[SectionNumber].equipment[
        EquipmentGroup
      ]
    ) {
      hierarchy[Cluster].plants[Plant].lines[Line].sapCode[
        PlantSAPCode
      ].sections[Section].sectionNumber[SectionNumber].equipment[
        EquipmentGroup
      ] = {};
    }
    if (
      !hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode]
        .sections[Section].sectionNumber[SectionNumber].equipment[
        EquipmentGroup
      ][EquipmentSubtype]
    ) {
      hierarchy[Cluster].plants[Plant].lines[Line].sapCode[
        PlantSAPCode
      ].sections[Section].sectionNumber[SectionNumber].equipment[
        EquipmentGroup
      ][EquipmentSubtype] = [];
    }

    // Push the tag name to the appropriate equipment subtype
    hierarchy[Cluster].plants[Plant].lines[Line].sapCode[PlantSAPCode].sections[
      Section
    ].sectionNumber[SectionNumber].equipment[EquipmentGroup][
      EquipmentSubtype
    ].push(TagName);
  });

  return hierarchy;
}

const equipment = {
  CBA: {
    Analyser: ["CBA_AI_TPH", "CBA_AI_TPH_10", "CBA_AI_TPH_60"],
  },
};

// Define the Analyser Model
const createAnalyserModel = async () => {
  const client = new IoTSiteWiseClient({
    region: process.env.AWS_REGION_NAME,
  });
  const assetModelName = "Analyser Model";
  const properties = equipment["CBA"]["Analyser"].map((measurement) => ({
    name: measurement,
    dataType: "DOUBLE",
    type: {
      measurement: {},
    },
    unit: "unitless", // Update this with the correct unit, if known
  }));

  const params = {
    assetModelName,
    assetModelProperties: properties,
    assetModelDescription:
      "Asset model for Analyser with measurements from CBA",
  };

  try {
    // const response = await client.createAssetModel(params).promise();

    // Please delete model after creation

    const command = new CreateAssetModelCommand(params);
    const response = await client.send(command);
    // console.log("Asset Model Created:", response);
  } catch (error) {
    console.error("Error creating Asset Model:", error);
  }
};

const createAsset = async () => {
  const client = new IoTSiteWiseClient({ region: process.env.AWS_REGION_NAME });

  const assetModelName = "Analyser Model";
  const assetName = "CBA Analyser";

  try {
    // Retrieve the asset model ID by describing the asset model
    const describeAssetModelCommand = new DescribeAssetModelCommand({
      assetModelName,
    });
    const assetModelResponse = await client.send(describeAssetModelCommand);
    const assetModelId = assetModelResponse.assetModelId;

    if (!assetModelId) {
      throw new Error("Asset Model ID not found.");
    }

    // Create the asset using the asset model ID
    const createAssetCommand = new CreateAssetCommand({
      assetName,
      assetModelId,
      tags: {
        equipment: "CBA",
      },
    });

    const assetResponse = await client.send(createAssetCommand);
    // console.log("Asset Created:", assetResponse);
  } catch (error) {
    console.error("Error creating Asset:", error);
  }
};

module.exports.DownloadLambdaTwo = async (event) => {
  // module.exports.DownloadLambdaThree = async (event) => {
  // console.log('------I M HARE--------------',event)

  if (event.body) {
    event = JSON.parse(event.body);
  }

  // Ensure event is parsed correctly
  if (typeof event == "string") {
    try {
      // console.log("parsing.... ");
      event = JSON.parse(event);
    } catch (parseError) {
      console.error("Error parsing event:", parseError);
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid JSON payload",
          message: parseError.message,
        }),
      };
    }
  }
  const { checkDynamoDb } = event;
  if (checkDynamoDb) {
    const tableName = "Look_up_url";
    const params = {
      TableName: tableName,
      KeyConditionExpression: "RequestID = :requestID", // Query by the Plant key
      ExpressionAttributeValues: {
        ":requestID": { S: event.requestId }, // Add the Plant partition key
      },
      ProjectionExpression: "#payload", // Fetch necessary attributes
      ExpressionAttributeNames: {
        "#payload": "Payload",
      },
    };
    const dyclient = new DynamoDBClient({ region: "ap-south-1" });
    const data = await dyclient.send(new QueryCommand(params));

    // Check if data exists
    if (data.Items.length == 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: "Data not found for the given requestID",
        }),
      };
    }

    let uncompressedPayload = gunzipSync(data.Items[0].Payload.B).toString();
    // console.log({ uncompressedPayloadType: typeof uncompressedPayload });

    event = JSON.parse(uncompressedPayload);
  }
  try {
    let assetData;

    if (event.IsTrendChart) {
      assetData = await fetchDataBatch_mul(
        event.assetIds,
        new Date(
          new Date(event.updatedStartDate).getTime() - 5.5 * 60 * 60 * 1000
        ),
        new Date(
          new Date(event.updatedEndDate).getTime() - 5.5 * 60 * 60 * 1000
        ),
        // new Date(event.updatedStartDate),
        // new Date(event.updatedEndDate),
        // updatedStartDate,
        // updatedEndDate,
        event.interval,
        event.isMobile,
        event.userId,
        event.plants,
        event.tagNames,
        event.requestId,
        event.uids,
        event.timestamp,
        event.frontend,
        event.IsTrendChart
      );
    } else {
      assetData = await fetchDataBatch_mul(
        event.assetIds,
        new Date(event.updatedStartDate),
        new Date(event.updatedEndDate),
        event.interval,
        event.isMobile,
        event.userId,
        event.plants,
        event.tagNames,
        event.requestId,
        event.uids,
        event.timestamp,
        event.frontend
      );
    }

    // console.log("Download processing completed:", assetData);
    if (event.IsTrendChart) {
      if (event.IsManual) {
        // console.log("Download processing In Manual");

        return JSON.stringify(assetData);
      } else {
        // console.log("Download processing In else ");

        const response = {
          statusCode: 200,
          body: JSON.stringify(assetData),
        };
        return response;
      }
    }
  } catch (error) {
    console.error("Error processing download:", error);
  }
};

module.exports.DownloadLambdaThree = streamifyResponse(
  async (event, responseStream, context) => {
    if (event.body) {
      event = JSON.parse(event.body);
    }
    try {
      let assetData;
      if (event.IsTrendChart) {
        const addFiveHoursThirtyMinutes = (dateStr) => {
          const date = new Date(dateStr); // Convert the string to a Date object
          // date.setHours(date.getHours() + 5, date.getMinutes() + 30); // Add 5:30
          return date;
        };

        const updatedStartDate = addFiveHoursThirtyMinutes(event.startDate);
        const updatedEndDate = addFiveHoursThirtyMinutes(event.endDate);
        // console.log(
        //   "----updatedStartDate addFiveHoursThirtyMinutes ---",
        //   updatedStartDate
        // );
        // console.log(
        //   "----updatedEndDate addFiveHoursThirtyMinutes ---",
        //   updatedEndDate
        // );

        // Handle trend chart logic
        assetData = await fetchDataBatch_mul(
          event.assetIds,
          updatedStartDate,
          updatedEndDate,
          // new Date(new Date(event.updatedStartDate).getTime() - (5.5 * 60 * 60 * 1000)),
          // new Date(new Date(event.updatedEndDate).getTime() - (5.5 * 60 * 60 * 1000)),
          event.interval,
          event.isMobile,
          event.userId,
          event.plants,
          event.tagNames,
          event.requestId,
          event.uids,
          event.timestamp,
          event.frontend,
          event.IsTrendChart
        );
      } else {
        // Handle other case logic
        assetData = await fetchDataBatch_mul(
          event.assetIds,
          new Date(event.updatedStartDate),
          new Date(event.updatedEndDate),
          event.interval,
          event.isMobile,
          event.userId,
          event.plants,
          event.tagNames,
          event.requestId,
          event.uids,
          event.timestamp,
          event.frontend
        );
      }

      // console.log("Download processing completed:", assetData);

      // Stream the response in chunks
      const chunkSize = 5000; // Adjust chunk size as needed
      const jsonData = JSON.stringify(assetData);

      for (let i = 0; i < jsonData.length; i += chunkSize) {
        responseStream.write(jsonData.substring(i, i + chunkSize)); // Write each chunk
      }

      responseStream.end(); // End the stream
    } catch (error) {
      console.error("Error processing download:", error);
      responseStream.write(JSON.stringify({ error: "Download failed" }));
      responseStream.end();
    }
  }
);

// async function fetchDataBatch_mul(){
async function fetchDataBatch_mul(
  assetIds,
  startDate,
  endDate,
  interval,
  isMobile,
  userId,
  plants,
  tagNames,
  requestId = null,
  uids,
  timestamp = null,
  frontend,
  IsTrendChart = false
) {
  let resolution;
  if (interval === "auto") {
    let newStartDate = new Date(startDate);
    let newEndDate = new Date(endDate);
    const timeDifference = newEndDate - newStartDate; // Difference in milliseconds

    const msInOneSecond = 1000;
    const msInOneMinute = msInOneSecond * 60;
    const msInOneHour = msInOneMinute * 60;
    const msInOneDay = msInOneHour * 24;
    const msInOneMonth = msInOneDay * 30.436875; // Approximate average month length
    const msInOneYear = msInOneDay * 365.25; // Approximate year length

    let differenceInYears = timeDifference / msInOneYear;
    let differenceInMonths = timeDifference / msInOneMonth;
    let differenceInDays = timeDifference / msInOneDay;
    let differenceInHours = timeDifference / msInOneHour;

    if (differenceInYears >= 1) {
      resolution = "1d";
    } else if (differenceInMonths >= 1) {
      resolution = "1h";
    } else if (differenceInDays >= 1) {
      resolution = "15m";
    } else if (differenceInHours >= 1) {
      resolution = "1m";
    } else {
      // "Less than an hour";
      resolution = "1m";
    }
  } else {
    resolution = interval;
  }
   let minDiff = 1;
   if (resolution === "1d") {
     minDiff = 1440;
   } else if (resolution === "1h") {
     minDiff = 60;
   } else if (resolution === "15m") {
     minDiff = 15;
   } else if (resolution === "1m") {
     minDiff = 1;
   }

  //  console.log({ minDiff });
  const client = new IoTSiteWiseClient({
    // region: process.env.AWS_REGION_NAME,
    region: "ap-south-1",
  });
  var dataFound = false;
  const EmailTo = userId;
  const stringPlants = sGen(plants ? plants : []);

  //  --------- Form subject before this ----------

  function formatDateToUTCPlus530(date) {
    date.setUTCMinutes(date.getUTCMinutes() + 330); // Add 5 hours 30 minutes (5 * 60 + 30)

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }

  // Given date objects
  let startDatexy = new Date(startDate.getTime());
  let endDatexy = new Date(endDate.getTime());

  let formattedDatestartDatexy;
  let formattedDateendDatexy;

  // if(startDate >thresholdDate && endDate >thresholdDate){

  formattedDatestartDatexy = formatDateToUTCPlus530(startDatexy);
  formattedDateendDatexy = formatDateToUTCPlus530(endDatexy);

  let subject = `Exported Data for ${stringPlants} from ${formattedDatestartDatexy} to ${formattedDateendDatexy}`;

  const thresholdDate = new Date("2025-01-29T00:00:00Z"); // 29 Jan 2025 in UTC

  const stringTagnames = sGen(tagNames ? tagNames : []);
  let totalBins;

  var dataLimitToEmail = 100;
  var estimatedSizeExcel;
  var responded = -1;

  FileCreationDate = moment().utcOffset(330).format("DD-MM-YYYY_HH-mm-ss");
  const filename = `${FileCreationDate}` + "_" + EmailTo.split("@")[0] + ".csv";
  const sheetName = `${FileCreationDate}` + "_" + EmailTo.split("@")[0];

  let predictedEstimation;

  try {
    const MAX_ENTRY_ID_LENGTH = 50;
    // const MAX_ENTRIES_PER_REQUEST = 10; // Adjust based on API limits
    // const MAX_ENTRIES_PER_REQUEST = 2; // Adjust based on API limits
    const MAX_ENTRIES_PER_REQUEST = 16; // Adjust based on API limits

    let allEntries = [];
    let allproperties = [];

    //  new logic for 29 Jan handling-------
    let binsStartDate;
    let binsEndDate;

    // Function to apply +5:30 hours offset
    function applyTimeOffset(date) {
      let newDate = new Date(date);
      newDate.setHours(newDate.getHours() + 5);
      newDate.setMinutes(newDate.getMinutes() + 30);
      return newDate;
    }

    function minusOneMinute(date) {
      let newDate = new Date(date);
      newDate.setMinutes(newDate.getMinutes() - 1);
      return newDate;
    }

    for (const asset of assetIds) {
      const { assetId, propertyId } = asset;

      let entryId = `${assetId}_${propertyId}`;
      if (entryId.length > MAX_ENTRY_ID_LENGTH) {
        entryId = entryId.substring(0, MAX_ENTRY_ID_LENGTH);
      }

      // if (startDate < thresholdDate && endDate > thresholdDate) {
      //   // Case where the date range crosses the threshold
      //   let adjustedStartDate = applyTimeOffset(startDate);
      //   let adjustedEndDate = minusOneMinute(thresholdDate);
      //   binsStartDate = adjustedStartDate;
      //   binsEndDate = endDate;

      //   // First part (before threshold, adjusted)
      //   allEntries.push({
      //     entryId: entryId + "_part1",
      //     assetId,
      //     propertyId,
      //     startDate: adjustedStartDate,
      //     endDate: adjustedEndDate,
      //   });

      //   // Second part (after threshold, no adjustment)
      //   allEntries.push({
      //     entryId: entryId + "_part2",
      //     assetId,
      //     propertyId,
      //     startDate: thresholdDate,
      //     endDate: endDate,
      //   });
      // } else if (endDate < thresholdDate) {
      //   // console.log("else if (endDate < thresholdDate) {")
      //   // Entirely before threshold, apply adjustment

      // let adjustedStartDate = applyTimeOffset(startDate);
      // let adjustedEndDate = applyTimeOffset(endDate);

      let adjustedStartDate = new Date(startDate);
      let adjustedEndDate = new Date(endDate);

      // -- to hanlde bins
      binsStartDate = adjustedStartDate;
      binsEndDate = adjustedEndDate;

      allEntries.push({
        entryId,
        assetId,
        propertyId,
        startDate: adjustedStartDate,
        endDate: adjustedEndDate,
        aggregateTypes: ["AVERAGE"],
        resolution: resolution,
      });
      // } else {
      //   binsStartDate = startDate;
      //   binsEndDate = endDate;

      //   // Entirely after threshold, no adjustment
      //   allEntries.push({
      //     entryId,
      //     assetId,
      //     propertyId,
      //     startDate,
      //     endDate,
      //   });
      // }
    }

    // console.log({ allEntries });

    // --------------- Executing parallel ----------
    // Efficient batch creation
    const batches = Array.from(
      { length: Math.ceil(allEntries.length / MAX_ENTRIES_PER_REQUEST) },
      (_, i) =>
        allEntries.slice(
          i * MAX_ENTRIES_PER_REQUEST,
          (i + 1) * MAX_ENTRIES_PER_REQUEST
        )
    );
    // Function to process a single batch with pagination
    async function processBatch(batch) {
      // let count =0
      let nextToken = null;
      const batchResults = [];

      do {
        try {
          // count+=1
          
          const response = await client.send(
            new BatchGetAssetPropertyAggregatesCommand({
              entries: batch,
              nextToken,
            })
          );
          if (response.successEntries?.length) {
            batchResults.push(...response.successEntries);
          }

          nextToken = response.nextToken; // Update pagination token
        } catch (error) {
          console.error("Error fetching batch:", error);
          throw error; // Stop processing on error
        }
      } while (nextToken);
      // console.log(" Next token  :",count);

      return batchResults;
    }

    // Optional: Add retry logic for transient failures
    async function processBatchWithRetry(batch, retries = 3) {
      let attempts = 0;
      while (attempts < retries) {
        try {
          return await processBatch(batch);
        } catch (error) {
          attempts++;
          console.error(`Attempt ${attempts} failed:`, error);
          if (attempts === retries) throw error; // Fail after retries
        }
      }
    }

    // Process batches in parallel with retry logic
    const results = await Promise.all(
      batches.map((batch) => processBatchWithRetry(batch))
    );

    // Flatten results
    const consolidatedResults = results.flat();

    console.log("consolidatedResults", consolidatedResults.length);

    // Final consolidated results
    const response = { successEntries: consolidatedResults };
    const historicalData = [];
    const minMax = [];

    if (response.successEntries?.length > 0) {
      const groupedByTagUID = {};
      const entryMap = new Map(allEntries.map(e => [e.entryId, e]));
      const assetMapByProperty = new Map(assetIds.map(a => [a.propertyId, a]));
      const assetMapByTagUID = new Map(assetIds.map(a => [a.TagUID, a]));
      const flatArrayallproperties = allproperties.flat();

      response.successEntries.forEach((entry) => {
        const matchedEntry = entryMap.get(entry.entryId);
        if (!matchedEntry) return;

        const matchedAsset = assetMapByProperty.get(matchedEntry.propertyId);
        if (!matchedAsset) return;

        const tagUID = matchedAsset.TagUID || "Unknown";
        groupedByTagUID[tagUID] ??= [];

        if (entry.aggregatedValues?.length > 0) {
          groupedByTagUID[tagUID].push(...entry.aggregatedValues);

          entry.aggregatedValues.forEach((data) => {
            const tagName = matchedAsset.description || null;
            // const property = flatArrayallproperties.find((p) => p.id == matchedEntry.propertyId);
            const propertyName = matchedAsset.TagUID || "Unknown Property";
            
            let propertyValue = data?.value?.average;
            if (isNaN(propertyValue) || propertyValue == null) {
              propertyValue = 0;
            } else {
              propertyValue = Number(propertyValue.toFixed(2));
            }

            const unit = matchedAsset.UnitOfMeasurement || null;
            let timestamp = applyTimeOffset(data.timestamp);
            if (resolution === "1m") timestamp.setMinutes(timestamp.getMinutes() - 1);

            historicalData.push({ tagUID: propertyName, averageValue: propertyValue, timestamp, unit, tagName });
          });
        }
      });

      // console.log("after 1st for each")

      for (const tagUID in groupedByTagUID) {
        // console.log({tagUID})
        const values = groupedByTagUID[tagUID]
          .map(v => Number(v.value?.average))
          .filter(v => !isNaN(v));

        if (!values.length) continue;

        // console.log({values})
        
        let min = Infinity;
        let max = -Infinity;
        let sum = 0;

        for (let i = 0; i < values.length; i++) {
          const val = values[i];
          if (val < min) min = val;
          if (val > max) max = val;
          sum += val;
        }

        const mean = (sum / values.length).toFixed(2);
        min = min.toFixed(2);
        max = max.toFixed(2);
        // console.log({assetMapByTagUID})
        // console.log({mean})

        const matchedAsset = assetMapByTagUID.get(tagUID);
        // console.log({matchedAsset})

        minMax.push({
          "Tag UID": tagUID,
          "Tag Name": matchedAsset?.TagName || "",
          Column1: new Date(startDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          Column2: new Date(endDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          Min: Number(min),
          Max: Number(max),
          Mean: Number(mean),
          Description: matchedAsset?.description || "",
          "Unit Of Measurement": matchedAsset?.UnitOfMeasurement || "",
        });
      }
      // console.log("after 2nd for loop");
    }

    console.log("historicalDataLength", historicalData.length);
    const uniquePropertyNames = [
      ...new Set(historicalData.map((item) => item.propertyName)),
    ];

    if (historicalData.length === 0) {
      console.log("No historical data found.");
      dataFound = false;
      if (IsTrendChart) {
        // empty array
        return historicalData;
      }
      let msg = "No data found with selected combination!!";
      if (frontend) {
        const dyclient = new DynamoDBClient({ region: "ap-south-1" });
        async function updatePreSignedURL(msg) {
          const tableName = "Look_up_url";

          const params = {
            TableName: tableName,
            Key: {
              RequestID: { S: requestId }, // Identify item by RequestID
              timestamp: { N: timestamp.toString() },
            },
            UpdateExpression: "SET status_err = :error",
            ExpressionAttributeValues: {
              ":error": { S: msg },
            },
          };

          try {
            await dyclient.send(new UpdateItemCommand(params));
          } catch (error) {
            console.error("Error updating PreSignedURL:", error);
            throw error;
          }
        }

        await updatePreSignedURL(msg);
      } else {
        if (IsTrendChart && IsTrendChart == true) {
          //TODO: return for trend
        } else {
          await sendMail(
            EmailTo,
            subject,
            `No data found with selected combination!! \n\n`
          );
        }
      }
      return;
    } else {
      dataFound = true;
    }

    function processUpdatedData(
      updatedData,
      startDate,
      endDate,
      intervalMinutes
    ) {
      try {
        console.log("updatedData", updatedData.length);
        const parseDate = (dateString) => new Date(dateString).getTime();
        const formatDate = (timestamp) => new Date(timestamp).toISOString();

        const startTimestamp = applyTimeOffset(startDate).getTime();
        const endTimestamp = applyTimeOffset(endDate).getTime();
        const intervalMilliseconds = parseInt(intervalMinutes, 10) * 60 * 1000;
        // function ensureAllTagsRecorded(updatedData, assetIds) {
        //   // Extract all unique propertyNames from updatedData
        //   const existingTags = new Set(
        //     updatedData.map((item) => item.tagUID)
        //   );

        //   // Get any timestamp from updatedData (defaulting to first available one)
        //   const defaultTimestamp =
        //     updatedData.length > 0
        //       ? updatedData[0].timestamp
        //       : new Date().toISOString();

        //   // Iterate over assetIds and add missing entries
        //   assetIds.forEach((asset) => {
        //     if (!existingTags.has(asset.TagUID)) {
        //       updatedData.push({
        //         propertyName: asset.TagUID,
        //         timestamp: defaultTimestamp,
        //         propertyValue: "NaN",
        //         unit: asset.UnitOfMeasurement,
        //         tagName: asset.description,
        //       });
        //     }
        //   });

        //   return updatedData;
        // }

        // Example Usage
        // updatedData = ensureAllTagsRecorded(updatedData, assetIds);
        // 1. **Precompute bins efficiently**
        const numBins = Math.ceil(
          (endTimestamp - startTimestamp) / intervalMilliseconds
        );
        
        const bins = Array.from({ length: numBins }, (_, i) =>
          formatDate(startTimestamp + i * intervalMilliseconds)
        );
        // bins.pop();
        // console.log("bins", bins.length, bins);
        totalBins = bins.length;
        predictedEstimation = (totalBins * uids.length * 17) / 1000000;
        
        if (predictedEstimation > dataLimitToEmail || isMobile == true) {
          responded = 1;
        }
        const averages = new Map();

        updatedData.forEach((item) => {
          const itemTimestamp = parseDate(item.timestamp);
          const binIndex = Math.floor(
            (itemTimestamp - startTimestamp) / intervalMilliseconds
          );
          const binnedTimestamp =
            startTimestamp + binIndex * intervalMilliseconds;
          // const binKey = `${item.propertyName}_${binnedTimestamp}`;
          const binKey = `${item.tagUID}_${item.timestamp.toISOString()}`;

          if (!averages.has(binKey)) {
            averages.set(binKey, {
              // tagUID: item.propertyName,
              tagUID: item.tagUID,
              // timestamp: formatDate(binnedTimestamp),
              timestamp: item.timestamp,
              unit: item.unit,
              tagName: item.tagName,
              averageValue: item.averageValue,
              // count: 0,
            });
          }

          // const binData = averages.get(binKey);
          // binData.total += item.averageValue;
          // binData.count += 1;
        });

        // // 3. **Convert map to aggregated data array**
        // const aggregatedData = Array.from(averages.values()).map((data) => ({
        //   tagUID: data.tagUID,
        //   timestamp: data.timestamp,
        //   averageValue: data.total / data.count,
        //   unit: data.unit,
        //   tagName: data.tagName,
        // }));

        const uniqueTags = new Map();
        // const uniqueTimestamps = [];
        const uniqueTimestampsSet = new Set();
        updatedData.forEach((item) => {
          if (!uniqueTags.has(item.tagUID)) {
            uniqueTags.set(item.tagUID, {
              unit: item.unit,
              tagName: item.tagName,
            });
          }
          uniqueTimestampsSet.add(item.timestamp.toISOString());
          // if (!uniqueTimestamps.includes(item.timestamp.toISOString())) {
          //   uniqueTimestamps.push(item.timestamp.toISOString())
          // }
        });
        const uniqueTimestamps = Array.from(uniqueTimestampsSet);

        // console.log({uniqueTags, uniqueTimestamps});

        // let allResults = bins.flatMap((bin) =>
          let allResults = uniqueTimestamps.flatMap((bin) =>
          Array.from(uniqueTags.entries()).map(([tagUID, meta]) => {
            const match = averages.get(`${tagUID}_${bin}`);
            // console.log("match", match);
            // let averageValue = match ? match.total / match.count : "NaN";
            let averageValue = match?.averageValue ? match.averageValue : "NaN";

            // Ensure rounding only if it's a number and has more than 2 decimal places
            if (
              typeof averageValue === "number" &&
              averageValue.toString().includes(".")
            ) {
              const decimalPart = averageValue.toString().split(".")[1] || "";
              if (decimalPart.length > 2) {
                averageValue = Number(averageValue.toFixed(2));
              }
            }

            return {
              tagUID,
              timestamp: bin,
              averageValue,
              unit: meta.unit,
              tagName: meta.tagName,
            };
          })
        );

        // updatedData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

        function removeNaNFromEdges(data) {
          // Group data by timestamp (bins)
          const bins = new Map();

          data.forEach((entry) => {
            if (!bins.has(entry.timestamp)) {
              bins.set(entry.timestamp, []);
            }
            bins.get(entry.timestamp).push(entry);
          });

          // Convert Map to an array sorted by timestamp
          let binArray = Array.from(bins.entries()).sort(
            (a, b) => new Date(a[0]) - new Date(b[0])
          );

          // Identify leading & trailing bins with all NaN
          let startIndex = 0;
          let endIndex = binArray.length - 1;

          // Remove leading NaN bins
          while (startIndex <= endIndex) {
            const entries = binArray[startIndex][1];
            if (entries.every((entry) => entry.averageValue === "NaN")) {
              startIndex++;
            } else {
              break;
            }
          }

          // Remove trailing NaN bins
          while (endIndex >= startIndex) {
            const entries = binArray[endIndex][1];
            if (entries.every((entry) => entry.averageValue === "NaN")) {
              endIndex--;
            } else {
              break;
            }
          }

          // Keep only the required range
          const cleanedBinArray = binArray.slice(startIndex, endIndex + 1);

          // Flatten back to the original format
          const cleanedData = cleanedBinArray.flatMap(
            ([timestamp, entries]) => entries
          );

          return cleanedData;
        }

        // iterrate over allResults and if timestamp is less than date is less than 29 Jan 2025, do minus 05:30hrs else do nothing

        // allResults = allResults.map((entry) => {
        //   const entryTimestamp = new Date(entry.timestamp).getTime();
        //   const thresholdTimestamp = new Date("2025-01-29T00:00:00Z").getTime(); // 29 Jan 2025
        //   if (entryTimestamp > thresholdTimestamp) {
        //     return {
        //       ...entry,
        //       timestamp: new Date(entryTimestamp + 19800000).toISOString(), // Subtract 5 hrs 30 min
        //     };
        //   }
        //   return entry;
        // });
        // const cleanedResults = removeNaNFromEdges(allResults);
        // console.log("cleanedResults",cleanedResults);
        // allResults = cleanedResults;
        return allResults;
      } catch (error) {
        console.error("Error processing updated data:", error);
        throw error;
      }
    }

    function processUpdatedData_Trend(
      updatedData,
      startDate,
      endDate,
      intervalMinutes
    ) {
      try {
        const parseDate = (dateString) => new Date(dateString).getTime();
        const formatDate = (timestamp) => new Date(timestamp).toISOString();

        const startTimestamp = parseDate(startDate);
        const endTimestamp = parseDate(endDate);
        const intervalMilliseconds = parseInt(intervalMinutes, 10) * 60 * 1000;
        const thresholdTimestamp = new Date("2025-01-29T00:00:00Z").getTime(); // 29 Jan 2025
        function ensureAllTagsRecorded(updatedData, assetIds) {
          // Extract all unique propertyNames from updatedData
          const existingTags = new Set(
            updatedData.map((item) => item.propertyName)
          );
          // Get any timestamp from updatedData (defaulting to first available one)
          const defaultTimestamp =
            updatedData.length > 0
              ? updatedData[0].timestamp
              : new Date().toISOString();
          // Iterate over assetIds and add missing entries
          assetIds.forEach((asset) => {
            if (!existingTags.has(asset.TagUID)) {
              updatedData.push({
                propertyName: asset.TagUID,
                timestamp: defaultTimestamp,
                propertyValue: "NaN",
                unit: asset.UnitOfMeasurement,
                tagName: asset.description,
              });
            }
          });

          return updatedData;
        }

        updatedData = ensureAllTagsRecorded(updatedData, assetIds);
        const numBins = Math.ceil(
          (endTimestamp - startTimestamp) / intervalMilliseconds
        );
        const bins = Array.from({ length: numBins }, (_, i) =>
          formatDate(startTimestamp + i * intervalMilliseconds)
        );
        bins.pop();
        const averages = new Map();

        updatedData.forEach((item) => {
          const itemTimestamp = parseDate(item.timestamp);
          const binIndex = Math.floor(
            (itemTimestamp - startTimestamp) / intervalMilliseconds
          );
          const binnedTimestamp =
            startTimestamp + binIndex * intervalMilliseconds;
          const binKey = `${item.propertyName}_${binnedTimestamp}`;

          if (!averages.has(binKey)) {
            averages.set(binKey, {
              tagUID: item.propertyName,
              timestamp: formatDate(binnedTimestamp),
              unit: item.unit,
              tagName: item.tagName,
              total: 0,
              count: 0,
              values: [], // To store all values for Mean calculation
            });
          }

          const binData = averages.get(binKey);
          binData.total += item.propertyValue;
          binData.count += 1;
          binData.values.push(item.propertyValue); // Collect values for Mean calculation
        });

        // 3. **Precompute unique tags (avoiding redundant searches)**
        const uniqueTags = new Map();
        updatedData.forEach((item) => {
          if (!uniqueTags.has(item.propertyName)) {
            uniqueTags.set(item.propertyName, {
              unit: item.unit,
              tagName: item.tagName,
            });
          }
        });
        let allResults = bins.flatMap((bin) =>
          Array.from(uniqueTags.entries()).map(([tagUID, meta]) => {
            const match = averages.get(`${tagUID}_${parseDate(bin)}`);
            let meanValue = match ? match.total / match.count : "NaN"; // Calculate the Mean

            // Ensure rounding only if it's a number and has more than 2 decimal places
            if (
              typeof meanValue === "number" &&
              meanValue.toString().includes(".")
            ) {
              const decimalPart = meanValue.toString().split(".")[1] || "";
              if (decimalPart.length > 2) {
                meanValue = Number(meanValue.toFixed(2)); // Keep it as a number
              }
            }

            return {
              tagUID,
              timestamp: bin,
              averageValue: meanValue,
              unit: meta.unit,
              tagName: meta.tagName,
            };
          })
        );

        function removeNaNFromEdges(data) {
          // Group data by timestamp (bins)
          const bins = new Map();

          data.forEach((entry) => {
            if (!bins.has(entry.timestamp)) {
              bins.set(entry.timestamp, []);
            }
            bins.get(entry.timestamp).push(entry);
          });

          // Convert Map to an array sorted by timestamp
          let binArray = Array.from(bins.entries()).sort(
            (a, b) => new Date(a[0]) - new Date(b[0])
          );

          // Identify leading & trailing bins with all NaN
          let startIndex = 0;
          let endIndex = binArray.length - 1;

          // Remove leading NaN bins
          while (startIndex <= endIndex) {
            const entries = binArray[startIndex][1];
            if (entries.every((entry) => entry.averageValue === "NaN")) {
              startIndex++;
            } else {
              break;
            }
          }

          // Remove trailing NaN bins
          while (endIndex >= startIndex) {
            const entries = binArray[endIndex][1];
            if (entries.every((entry) => entry.averageValue === "NaN")) {
              endIndex--;
            } else {
              break;
            }
          }

          // Keep only the required range
          const cleanedBinArray = binArray.slice(startIndex, endIndex + 1);

          // Flatten back to the original format
          const cleanedData = cleanedBinArray.flatMap(
            ([timestamp, entries]) => entries
          );

          return cleanedData;
        }

        const tagWiseAggregates = new Map();

        averages.forEach((data, key) => {
          const { tagUID, tagName, unit, values, total, count } = data;

          if (!tagWiseAggregates.has(tagUID)) {
            tagWiseAggregates.set(tagUID, {
              tagUID,
              tagName,
              unit,
              min: Infinity,
              max: -Infinity,
              total: 0,
              count: 0,
            });
          }

          const aggregate = tagWiseAggregates.get(tagUID);
          aggregate.min = Math.min(aggregate.min, ...values);
          aggregate.max = Math.max(aggregate.max, ...values);
          aggregate.total += total;
          aggregate.count += count;
        });

        // Convert Map to an Array
        const minMax = Array.from(tagWiseAggregates.values()).map((data) => ({
          "Tag UID": data.tagUID,
          "Tag Name": data.tagUID.split("-").pop(),
          Column1: new Date(startDate).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }), // Starting timestamp
          Column2: new Date(endDate).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }), // Ending timestamp
          Min: data.min,
          Max: data.max,
          Mean: (data.total / data.count).toFixed(2),
          Description: data.tagName,
          "Unit Of Measurement": data.unit,
        }));

        // iterrate over allResults and if timestamp is less than date is less than 29 Jan 2025, do minus 05:30hrs else do nothing

        allResults = allResults.map((entry) => {
          const entryTimestamp = new Date(entry.timestamp).getTime();
          // const thresholdTimestamp = new Date("2025-01-29T00:00:00Z").getTime(); // 29 Jan 2025

          if (entryTimestamp > thresholdTimestamp) {
            return {
              ...entry,
              timestamp: new Date(entryTimestamp + 19800000).toISOString(), // Subtract 5 hrs 30 min
            };
          }
          return entry;
        });

        const cleanedResults = removeNaNFromEdges(allResults);
        allResults = cleanedResults;
        return { allResults, minMax };
        // return allResults;
        // return cleanedResults;
      } catch (error) {
        console.error("Error processing updated data:", error);
        throw error;
      }
    }
    const updatedData_3 = historicalData;
    let result_avg = [];
    if (IsTrendChart) {
      // result_avg = processUpdatedData_Trend(
      //   updatedData_3,
      //   binsStartDate,
      //   binsEndDate,
      //   interval
      // );
      result_avg = {
        allResults: updatedData_3,
        minMax,
      };
      return result_avg;
    } else {
      result_avg = processUpdatedData(
        updatedData_3,
        binsStartDate,
        binsEndDate,
        minDiff
      );
      console.log("result_avg", result_avg.length);
    }
    if (result_avg == false) {
      // dont proceed further
      return;
    }

    async function generateAndUploadExcel(
      result_avg,
      bucketName,
      fileName,
      sheetName
    ) {
      try {
        // Helper function to format the date into 'M/D/YYYY HH:mm' format
        const secretManagerKeys = await getSecretKeys("DevKeys");
        const s3ClientNew = new S3Client({
          region: "ap-south-1",
          credentials: {
            accessKeyId: secretManagerKeys.accessKeyId,
            secretAccessKey: secretManagerKeys.secretAccessKey,
          },
        });

        const formatTimestamp = (timestamp) => {
          const date = new Date(timestamp);
          // double conversion
          const thresholdDate = new Date("2025-01-29T00:00:00Z"); // 29 Jan 2025 in UTC
          const month = date.getMonth() + 1; // Month is 0-indexed
          const day = date.getDate();
          const year = date.getFullYear();
          const hours = String(date.getHours()).padStart(2, "0"); // Ensure 2 digits
          const minutes = String(date.getMinutes()).padStart(2, "0"); // Ensure 2 digits
          // return `${day}-${month}-${year} ${hours}:${minutes}`;
          return `${day}/${month}/${year} ${hours}:${minutes}`;
        };

        // Prepare the data structure for the Excel sheet
        const timestamps = Array.from(
          new Set(result_avg.map((item) => item.timestamp))
        ); // Get unique timestamps
        const tagUIDs = Array.from(
          new Set(result_avg.map((item) => item.tagUID))
        );

        const tagMetaMap = new Map();
        for (const { tagUID, unit, tagName } of result_avg) {
          if (!tagMetaMap.has(tagUID)) {
            tagMetaMap.set(tagUID, { unit, tagName });
          }
        }

        // console.log("Excel generation started ", new Date().toLocaleString());
        // Get unique tagUIDs
        // const tagUnits = tagUIDs.map((tagUID) => {
        //   const tagData = result_avg.find((item) => item.tagUID == tagUID);
        //   return tagData ? tagData.unit : "";
        // });
        const tagUnits = tagUIDs.map(
          (tagUID) => tagMetaMap.get(tagUID)?.unit || ""
        );

        // Extract the units corresponding to the tagUIDs
        // const tagNames = tagUIDs.map((tagUID) => {
        //   const tagData = result_avg.find((item) => item.tagUID == tagUID);
        //   return tagData ? tagData.tagName : "";
        // });
        const tagNames = tagUIDs.map(
          (tagUID) => tagMetaMap.get(tagUID)?.tagName || ""
        );

        // Sort timestamps
        timestamps.sort((a, b) => new Date(a) - new Date(b));

        // // ------------ below is using xlsx ----------------

        // // Create an empty sheet with the header row (timestamp, tagUID1, tagUID2, etc.)
        // const sheetData = [];
        // sheetData.push(["TimeStamp", ...tagUIDs]); // Header row
        // sheetData.push(["", ...tagNames]); // Second blank row // Description
        // sheetData.push(["", ...tagUnits]); // Third row with units

        // Create a Map for faster lookup
        const avgDataMap = new Map();
        result_avg.forEach(({ timestamp, tagUID, averageValue }) => {
          if (!avgDataMap.has(timestamp)) avgDataMap.set(timestamp, {});
          avgDataMap.get(timestamp)[tagUID] = averageValue;
        });

        // ----------- streaming CSV generation starts here ------------
        const passThrough = new PassThrough();
        let totalBytesWritten = 0;

        passThrough.on("data", (chunk) => {
          totalBytesWritten += chunk.length;
        });

        const upload = new Upload({
          client: s3ClientNew,
          params: {
            Bucket: bucketName,
            Key: fileName,
            Body: passThrough,
            ContentType: "text/csv",
          },
        });

        const uploadPromise = upload.done();

        const csvStream = format({ headers: false });
        csvStream.pipe(passThrough);
        
        csvStream.write(["TimeStamp", ...tagUIDs]);
        csvStream.write(["", ...tagNames]);
        csvStream.write(["", ...tagUnits]);

        // Populate rows
        const NaNPlaceholder = "NaN";
        for (const timestamp of timestamps) {
          const row = [formatTimestamp(timestamp)];
          const tagValues = avgDataMap.get(timestamp) || NaNPlaceholder;
          for (const tagUID of tagUIDs) {
            let val = tagValues[tagUID];
            if (
              val === undefined ||
              val === null ||
              val === "NaN" ||
              isNaN(val)
            ) {
              val = 0; // Replace NaN/undefined/null with 0
            }
            // row.push(tagValues[tagUID] || NaNPlaceholder);
            row.push(val);
          }

          // sheetData.push(row);
          // });

          // const ws = xlsx.utils.aoa_to_sheet(sheetData);
          // const wb = xlsx.utils.book_new();

          // const maxSheetNameLength = 31;
          // const truncatedSheetName = sheetName.substring(0, maxSheetNameLength);

          // xlsx.utils.book_append_sheet(wb, ws, truncatedSheetName);

          // const excelBuffer = xlsx.write(wb, { bookType: "csv", type: "buffer" });
          // // Assuming excelBuffer is the Buffer/Blob representation of the Excel file
          // const checkExcelFileSize = (excelBuffer) => {
          //   if (!excelBuffer) {
          //     console.error("Excel buffer is not defined.");
          //     return;
          //   }

          //   // Check the byte length of the buffer
          //   const sizeInBytes = excelBuffer.byteLength || excelBuffer.length; // Use length if byteLength is undefined
          //   const sizeInKB = (sizeInBytes / 1024).toFixed(2); // Convert to KB
          //   const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2); // Convert to MB
          //   estimatedSizeExcel = sizeInMB;
          //   return { sizeInBytes, sizeInKB, sizeInMB };
          // };

          // // Call the function with your buffer
          // const fileSize = checkExcelFileSize(excelBuffer);
          // // Upload the file to S3
          // const params = {
          //   Bucket: bucketName,
          //   Key: fileName,
          //   Body: excelBuffer,
          //   // ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          // };
          // const command = new PutObjectCommand(params);
          // const response = await s3ClientNew.send(command);

          csvStream.write(row);
        }

        csvStream.end();

        // Wait for both stream finish and S3 upload
        await Promise.all([
          new Promise((resolve, reject) => {
            csvStream.on("finish", resolve);
            csvStream.on("error", (err) => {
              passThrough.destroy(err);
              reject(err);
            });
          }),
          uploadPromise.catch((err) => {
            csvStream.end(); // Try clean shutdown
            passThrough.destroy(err);
            throw err;
          }),
        ]);

        // Estimate file size after stream ends
        const sizeInBytes = totalBytesWritten;
        const sizeInKB = (sizeInBytes / 1024).toFixed(2);
        const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
        console.log(
          `CSV file size estimate: ${sizeInBytes} B / ${sizeInKB} KB / ${sizeInMB} MB`
        );
        // ----------- streaming CSV generation ends here ------------

        try {
          const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: fileName,
          });
          const signedUrl = await getSignedUrl(s3ClientNew, command, {
            expiresIn: 604800,
          });
          return signedUrl;
        } catch (error) {
          console.error("Error generating signed URL:", error);
          throw error;
        }
      } catch (error) {
        console.log("error s3client --", error);
        throw error;
      }
    }
    const bucketName = "sitewise-excel-bucket"; // Replace with your S3 bucket name
    const fileName = "tag_data_with_nan_sorted-3-big-no-zip.csv"; // Desired file name in the bucket

    try {
      const signedUrl = await generateAndUploadExcel(
        result_avg,
        bucketName,
        filename,
        sheetName
      );
      console.log({
        signedUrl,
        requestId,
        timestamp,
        predictedEstimation,
        dataLimitToEmail,
      });
      if (predictedEstimation <= dataLimitToEmail && isMobile == false) {
        responded = 1;
        // insert url in dynamo on basis of requestID
        const dyclient = new DynamoDBClient({ region: "ap-south-1" });
        async function updatePreSignedURL(requestId, preSignedURL) {
          const tableName = "Look_up_url";
          const params = {
            TableName: tableName,
            Key: {
              RequestID: { S: requestId }, // Identify item by RequestID
              timestamp: { N: timestamp.toString() },
            },
            UpdateExpression: "SET PreSignedURL = :url",
            ExpressionAttributeValues: {
              ":url": { S: preSignedURL },
            },
          };

          try {
            const response = await dyclient.send(new UpdateItemCommand(params));
            console.log({ response });
          } catch (error) {
            console.error("Error updating PreSignedURL:", error);
            throw error;
          }
        }
        await updatePreSignedURL(requestId, signedUrl);
      }
      if (predictedEstimation > dataLimitToEmail || isMobile == true) {
        console.log(
          "Sending mail......predictedEstimation > dataLimitToEmail || isMobile == true"
        );
        await sendMail(
          EmailTo,
          subject,
          `Download your file using this link : ${signedUrl} \nThis link is valid for 7days\n\n`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error fetching historical data for assets:", error);
    const dyclient = new DynamoDBClient({ region: "ap-south-1" });
    async function updatePreSignedURL(error) {
      const tableName = "Look_up_url";
      let err_msg = error?.message || "Something went wrong";

      const params = {
        TableName: tableName,
        Key: {
          RequestID: { S: requestId }, // Identify item by RequestID
          timestamp: { N: timestamp.toString() },
        },
        UpdateExpression: "SET status_err = :error",
        ExpressionAttributeValues: {
          ":error": { S: err_msg },
        },
      };

      try {
        await dyclient.send(new UpdateItemCommand(params));
      } catch (error) {
        console.error("Error updating PreSignedURL:", error);
        throw error;
      }
    }

    await updatePreSignedURL(error);
  }
}
