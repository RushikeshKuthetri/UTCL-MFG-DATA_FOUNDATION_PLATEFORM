

// -----------------

import { Client, KustoConnectionStringBuilder } from "azure-kusto-data";
// import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { 
  IoTSiteWiseClient, 
  CreateAssetModelCommand, 
  CreateAssetCommand, 
  BatchPutAssetPropertyValueCommand, 
  DescribeAssetModelCommand, 
  DescribeAssetCommand,
 CreateBulkImportJobCommand
} from "@aws-sdk/client-iotsitewise";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import { DynamoDBClient, QueryCommand, ListTablesCommand } from '@aws-sdk/client-dynamodb';

// Azure ADX Configuration
const ADX_CLUSTER = "https://utcprmfgadxiotpd.centralindia.kusto.windows.net";
const ADX_CLIENT_ID = "d99c09ff-0cf2-44fc-a605-6a769e0c0d6f";
const ADX_CLIENT_SECRET = "z-a8Q~KODqi7UdgwC7txoBmJTyT66TsqLmY4BajU";
const ADX_TENANT_ID = "f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c";
// const ADX_DATABASE = "Ultratech_IIOT";
const ADX_DATABASE = "utcprmfgadxiotpd-db";
// const ADX_CLUSTER = "https://utcprm.centralIndia.kusto.windows.net";
// const ADX_CLIENT_ID = "your-azure-client-id";
// const ADX_CLIENT_SECRET = "your-azure-client-secret";
// const ADX_TENANT_ID = "your-azure-tenant-id";
// const ADX_DATABASE = "UltraTEch_IIOT";

// Test Azure ADX Connection - Get Databases

// ---- more complex -------------


// ----------------- logs --------

// const fs = require("fs");
// const path = require("path");

import fs from "fs";
import { fileURLToPath } from 'url';
import path from 'path';
import xlsx from "xlsx";



// Resolve the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------
// // Resolve the log file path
// const timestamp_1 = new Date().toISOString().replace(/:/g, "-");
// const logFilePath = path.join(__dirname, `logs${timestamp_1}.txt`);

// // Create a writable stream for the log file
// const logStream = fs.createWriteStream(logFilePath, { flags: 'a' }); // 'a' appends to the file

// // Backup original console.log and console.error
// const originalConsoleLog = console.log;
// const originalConsoleError = console.error;

// // Override console.log to write to both terminal and the log file
// console.log = (...args) => {
//   const message = args.join(' '); // Join arguments to form a single string
//   logStream.write(message + '\n'); // Write to log file
//   originalConsoleLog(...args); // Write to terminal
// };

// // Override console.error to also write to both terminal and the log file
// console.error = (...args) => {
//   const message = args.join(' '); // Join arguments to form a single string
//   logStream.write('[ERROR] ' + message + '\n'); // Write to log file
//   originalConsoleError(...args); // Write to terminal
// };

// Example log statements
// console.log('Script started.');
// console.error('An error occurred.');
// console.log('Logging works for both terminal and file.');


// ------



// const checkpointFile = path.join(__dirname, `checkpoint_logs-${new Date().toISOString()}.json`);
// console.log("checkpointFile --",checkpointFile)

// Ensure the directory exists before writing the file
const ensureDirectoryExists = (filePath) => {
  console.log("inside ensureDirectoryExists --",filePath)

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log("Directory created:", dir);
    }
  };


// Save the state (last plant and timestamp)
const saveState = async (state) => {
  try {
    console.log("inside saveState --",state)
//         // Define the checkpoint file path dynamically
//         const checkpointFile = path.join(
//           __dirname,
//           `checkpoint_logs-${new Date().toISOString()}.json`
//         );
// console.log("checkpointFile --",checkpointFile)

    // // Define the checkpoint file path dynamically
    // const checkpointFile = path.join(
    //   __dirname,
    //   "checkpoint_logs",
    //   `checkpoint_logs-${new Date().toISOString()}.json` // Moved logs to a dedicated directory
    // );
    // console.log("Checkpoint file --", checkpointFile);

        // Sanitize timestamp for a valid file name
        const timestamp = new Date().toISOString().replace(/:/g, "-");
        console.log("timestamp file --", timestamp);

        const dirPath = path.join(__dirname, "checkpoint_logs");
        const checkpointFilePrefix = `checkpoint_logs-${timestamp.substring(0, 16)}`; // Prefix up to the minute
        console.log("checkpointFilePrefix file --", checkpointFilePrefix);
    
        // ensureDirectoryExists(dirPath);

            // Check if a file with the same prefix already exists
          const existingFile = fs
          .readdirSync(dirPath)
          .find((file) => file.startsWith(checkpointFilePrefix));

        if (existingFile) {
          console.log("A file with the same prefix already exists:", existingFile);
          return; // Exit without creating a new file
        }
        ensureDirectoryExists(dirPath);

        // const checkpointFile = path.join(
        //   dirPath,
        //   `${checkpointFilePrefix}.json`
        // );
        // console.log("Checkpoint file --", checkpointFile);

        const checkpointFile = path.join(
          __dirname,
          "checkpoint_logs",
          `checkpoint_logs-${timestamp}.json`
        );
        console.log("Checkpoint file --", checkpointFile);


    // ensureDirectoryExists(checkpointFile);


    fs.writeFileSync(checkpointFile, JSON.stringify(state, null, 2), "utf8");
    console.log("State saved:", state);
  } catch (error) {
    console.error("Failed to save state:", error);
  }
};

// Load the last saved state
const loadState = () => {
  try {
    if (fs.existsSync(checkpointFile)) {
      const state = JSON.parse(fs.readFileSync(checkpointFile, "utf8"));
      console.log("State loaded:", state);
      return state;
    }
  } catch (error) {
    console.error("Failed to load state:", error);
  }
  return null; // Return null if no state exists
};

// ------------

async function getTableData_2(lastexecutedTimestamp = null) {
  const kcsb = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(
    ADX_CLUSTER,
    ADX_CLIENT_ID,
    ADX_CLIENT_SECRET,
    ADX_TENANT_ID
  );

  const client = new Client(kcsb);
  const tableName = "IotLiveData"; // Table name to query
//   const plants = ["-KUCW1-", "-KCW1-"]; // Dynamic plant array
  const plants = ["-KUCW1-","-KCW1-"]; // Dynamic plant array
  // const limit = 100; // Batch size (10000 records per query)
  // const limit = 10000; // Batch size (10000 records per query)
  // const limit = 50000; // Batch size (50000 records per query) - working
  const limit = 350000; // Batch size (20000 records per query)
 //const limit = 10000; // Batch size (20000 records per query)
  let count =0
  let plant_global = null
  let lastTimestamp_global = null
    // Ensure lastexecutedTimestamp is a Date object
    let lastTimestamp = lastexecutedTimestamp ? new Date(lastexecutedTimestamp) : null;
    let firstTimeStamp = null

  try {
    for (const plant of plants) {
      plant_global = plant
      let hasMoreData = true;
      // let lastTimestamp = null; // Variable to track the timestamp of the last row
      // let lastTimestamp = lastexecutedTimestamp; // Variable to track the timestamp of the last row

        // // Reset `lastTimestamp` to `lastexecutedTimestamp` for each plant
        // lastTimestamp = lastexecutedTimestamp ? new Date(lastexecutedTimestamp) : null;
        // // lastTimestamp = null;

      // Reset `lastTimestamp` to `null` when the plant is "-KCW1-"
      if (plant == "-KCW1-") {
        lastTimestamp = null; // Set lastTimestamp to null for the second iteration
      } else {
        // For the first plant, use lastexecutedTimestamp or null
        lastTimestamp = lastexecutedTimestamp ? new Date(lastexecutedTimestamp) : null;
      }

      lastTimestamp_global = lastTimestamp

      while (hasMoreData) {
        // Build query with time-based filtering using the lastTimestamp for the next query
        // let testQuery = `
        //   ${tableName}
        //   | where Id contains "${plant}" and Timestamp >= ago(365d)
        // `;
        let testQuery = `
          ${tableName}
          | where Id contains "${plant}"
        `;
        
        // If lastTimestamp is set, only fetch records after the last row's Timestamp
        // if (lastTimestamp) {
        //   // testQuery += ` and Timestamp > datetime("${lastTimestamp.toISOString()}")`;
        //   // testQuery += ` and Timestamp < datetime("${lastTimestamp.toISOString()}")`;
        //   testQuery += ` and Timestamp >= datetime("${lastTimestamp.toISOString()}")`;
        // }

        if (lastTimestamp) {
          // Use only the lastTimestamp condition after the first query
          // testQuery += ` and Timestamp <= datetime("${lastTimestamp.toISOString()}") and Timestamp >= ago(365d)`;
          testQuery += ` and Timestamp <= datetime("${lastTimestamp.toISOString()}") and Timestamp >= ago(365d)`;
        } else {
          // For the first query, include the "ago(365d)" condition
          testQuery += ` and Timestamp >= ago(365d)`;
        }

        // Fetch the next batch of rows
        testQuery += `| take ${limit} 
          | order by Timestamp desc
        `;


	//  | order by Timestamp asc
        // testQuery += `| take ${limit}
        //   | order by Timestamp asc
        // `;

        console.log(`Executing query for plant "${plant}" with starting timestamp "${lastTimestamp ? lastTimestamp.toISOString() : 'Start'}":`, testQuery);
        console.log(`xxxxxgggg Executing query for plant "${plant}" with starting timestamp "${lastTimestamp ? lastTimestamp.toISOString() : 'Start'}":`, testQuery);

        try {
          const results = await client.execute(ADX_DATABASE, testQuery);
          console.log("resultssssssssssss ---",results)

          // Extract rows
          const rows = results.primaryResults[0]._rows;
          console.log("rows ---",rows)
		console.log("rows length ---",rows.length)
          console.log("rows ---",new Date(rows[rows.length - 1][1]))
          console.log("rows rows[rows.length - 1][1] ---",rows[rows.length - 1][1])

          if (rows && rows.length > 0) {
            console.log(`Fetched ${rows.length} rows for plant "${plant}"`);
            lastTimestamp = new Date(rows[rows.length - 1][1]); // Assuming the timestamp is in the second column (index 1)
            console.log("lastTimestamp --",lastTimestamp)

            firstTimeStamp = new Date(rows[0][1]);
            console.log("firstTimeStamp --",firstTimeStamp)


            // await saveState({ stage: "Before DynamoDB call", plant, lastTimestamp_toISO: lastTimestamp.toISOString(), lastTimestamp_adx: lastTimestamp, firstTimeStamp });
            // Process batch of rows (e.g., call getDynamo)
            // await getDynamo_1(rows);
            await getDynamo(rows, lastTimestamp, plant, firstTimeStamp);

            // Set the lastTimestamp for the next query to the Timestamp of the last row
            // count+=1

          } else {
            // No more rows
            hasMoreData = false;
            console.log(`No more data for plant "${plant}".`);
          }
        } catch (error) {
          console.error("ADX Query Execution Error:", error);
          hasMoreData = false; // Stop fetching further batches
          throw error
        }

        if(count == 2){
        //     if(plant =="-KCW1"){
        //   console.log("breakkkkkkkkkk KCW1")
        //   continue
        //     }
          console.log("breakkkkkkkkkk")
          break
        }
      }
      if(count == 2){
        console.log("breakkkkkkkkkk forrrr count ",count)
        break
      }
    

    }
  } catch (error) {
    console.error("Failed to retrieve rows from the table:", error);
    console.error("Failed to retrieve rows from the table lastTimestamp_global -:", lastTimestamp_global);
    await saveState({ stage: "ADX stage", plant: plant_global, lastTimestamp: lastTimestamp_global?lastTimestamp_global.toISOString():lastTimestamp_global, lastTimestamp_adx: lastTimestamp_global,  error: error.message, firstTimeStamp: firstTimeStamp });
        throw error
  }
}

async function getTableData_3(lastexecutedTimestamp = null) {
  const kcsb = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(
    ADX_CLUSTER,
    ADX_CLIENT_ID,
    ADX_CLIENT_SECRET,
    ADX_TENANT_ID
  );

  const client = new Client(kcsb);
  const tableName = "IotLiveData"; // Table name to query
  const plants = ["-KCW1-", "-KUCW1-"]; // Dynamic plant array
  const limit = 350000; // Batch size
  let plant_global = null;
  let lastTimestamp_global = null;
  let count =0
  let firstTimeStamp = null

  // Define the start and end timestamps for the date range
  // const startDate = new Date('2024-03-31T00:00:00Z'); // 30 Nov 2024
  const startDate = new Date('2024-04-08T06:11:28.849Z'); // 30 Nov 2024
  const endDate = new Date('2024-04-30T23:59:59Z'); // 31 Dec 2024

  try {
    for (const plant of plants) {
      plant_global = plant;
      let hasMoreData = true;

      // Initialize the lastTimestamp to the start date
      let lastTimestamp = startDate;

      while (hasMoreData) {
        let testQuery = `
          ${tableName}
          | where Id contains "${plant}"
        `;

        // Add time filter for the query using 15-minute intervals and the "between" operator
        const startInterval = new Date(lastTimestamp);
        const endInterval = new Date(lastTimestamp.getTime() + 15 * 60 * 1000); // Add 15 minutes to the timestamp

        // Use the "between" operator for the query
        testQuery += ` and Timestamp between (datetime("${startInterval.toISOString()}") .. datetime("${endInterval.toISOString()}"))`;

        // Fetch the next batch of rows
        testQuery += ` | order by Timestamp asc
        `;

        console.log(`Executing query for plant "${plant}" from "${startInterval.toISOString()}" to "${endInterval.toISOString()}":`, testQuery);

        try {
          const results = await client.execute(ADX_DATABASE, testQuery);
          console.log("Query results:", results);

          const rows = results.primaryResults[0]._rows;
          console.log("Rows:", rows);
          console.log("Rows length:", rows.length);

          if (rows && rows.length > 0) {
            console.log(`Fetched ${rows.length} rows for plant "${plant}"`);

            // Set lastTimestamp to the timestamp of the last row in the fetched data
            lastTimestamp = new Date(rows[rows.length - 1][1]);


            firstTimeStamp = new Date(rows[0][1]);
            console.log("firstTimeStamp --",firstTimeStamp)

            // Process the fetched rows (for example, pass them to another function)
            await getDynamo(rows, lastTimestamp, plant,firstTimeStamp);
            // count+=1

          } else {
            // No more data for the current interval
            hasMoreData = false;
            console.log(`No more data for plant "${plant}" between ("${startInterval.toISOString()}" .. "${endInterval.toISOString()}".`);
          }
        } catch (error) {
          console.error("ADX Query Execution Error:", error);
          hasMoreData = false; // Stop fetching further batches if an error occurs
          throw error;
        }

        // Check if we've reached the end date, and stop if so
        if (lastTimestamp >= endDate) {
          hasMoreData = false;
          console.log("Reached the end of the date range (31 Dec 2024).");
        }

          if(count == 2){
            //     if(plant =="-KCW1"){
            //   console.log("breakkkkkkkkkk KCW1")
            //   continue
            //     }
              console.log("breakkkkkkkkkk")
              break
            }
        }
        if(count == 2){
          console.log("breakkkkkkkkkk forrrr count ",count)
          break
        }
    }
  } catch (error) {
    console.error("Error in getTableData_2:", error);
    console.error("Failed to retrieve rows from the table lastTimestamp_global -:", lastTimestamp_global);
    await saveState({ stage: "ADX stage", plant: plant_global, lastTimestamp: lastTimestamp_global?lastTimestamp_global.toISOString():lastTimestamp_global, lastTimestamp_adx: lastTimestamp_global,  error: error.message, firstTimeStamp: firstTimeStamp });
        throw error
  }
}


async function getTableData_4(lastexecutedTimestamp = null) {
  const kcsb = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(
    ADX_CLUSTER,
    ADX_CLIENT_ID,
    ADX_CLIENT_SECRET,
    ADX_TENANT_ID
  );

  const client = new Client(kcsb);
  const tableName = "IotLiveData"; // Table name to query
  const plants = ["-KCW1-", "-KUCW1-"]; // Dynamic plant array
  // const plants = ["-KUCW1-"]; // Dynamic plant array
  const limit = 350000; // Batch size
  let plant_global = null;
  let lastTimestamp_global = null;
  let count = 0;
  let firstTimeStamp = null;

  
  try {
    for (const plant of plants) {
  // const startDate = new Date('2024-03-31T00:00:00Z'); // 30 Nov 2024
      // let startDate = new Date("2024-04-30T00:00:00.000Z");
      let startDate = new Date("2024-05-13T00:00:00.000Z");

            // Reset `lastTimestamp` to `null` when the plant is "-KCW1-"
            if (plant == "-KUCW1-") {
              // lastTimestamp = null; // Set lastTimestamp to null for the second iteration
              // lastTimestamp = null; // Set lastTimestamp to null for the second iteration
              // startDate = new Date("2024-03-31T00:00:00Z");
              startDate = new Date("2024-04-30T00:00:00.000Z");

            }
            // const endDate = new Date("2024-08-31T23:59:59Z");
            const endDate = new Date("2024-06-30T23:59:59Z");
            
      plant_global = plant;
      let hasMoreData = true;

      let lastTimestamp = startDate;

      while (hasMoreData) {
        let testQuery = `
          ${tableName}
          | where Id contains "${plant}"
        `;

        const startInterval = new Date(lastTimestamp);
        const endInterval = new Date(lastTimestamp.getTime() + 30 * 60 * 1000);

        testQuery += ` and Timestamp between (datetime("${startInterval.toISOString()}") .. datetime("${endInterval.toISOString()}"))`;
        testQuery += ` | order by Timestamp asc`;

        console.log(`Executing query for plant "${plant}" from "${startInterval.toISOString()}" to "${endInterval.toISOString()}":`, testQuery);

        let retryCount = 0;
        const maxRetries = 10;
        const retryDelay = 5000; // 5 seconds

        let querySuccess = false;
        let previousLastTimestamp = lastTimestamp; // Store the last known timestamp
        while (!querySuccess && retryCount < maxRetries) {
          try {
            const results = await client.execute(ADX_DATABASE, testQuery);
            // console.log("Query results:", results);

            const rows = results.primaryResults[0]._rows;
            // console.log("Rows:", rows);
            console.log("Rows length:", rows.length);

            if (rows && rows.length > 0) {
              console.log(`Fetched ${rows.length} rows for plant "${plant}"`);
              lastTimestamp = new Date(rows[rows.length - 1][1]);

              if (lastTimestamp.getTime() == previousLastTimestamp.getTime()) {
                console.log("lastTimestamp is unchanged, adding 30 mins.");
                lastTimestamp = new Date(lastTimestamp.getTime() + 30 * 60 * 1000);
              }


              firstTimeStamp = new Date(rows[0][1]);
              console.log("firstTimeStamp --", firstTimeStamp);

              await getDynamo(rows, lastTimestamp, plant, firstTimeStamp);
              // count+=1
            } 
            else {
              // hasMoreData = false;
              lastTimestamp = new Date(lastTimestamp.getTime() + 30 * 60 * 1000);
              console.log(`No more data for plant "${plant}" between ("${startInterval.toISOString()}" .. "${endInterval.toISOString()}".`);
              console.log(`No data in given time period adding 30 mins".`);
            }

            querySuccess = true; // Query was successful, exit retry loop
          } catch (error) {
            retryCount++;
            console.error(`ADX Query Execution Error (Attempt ${retryCount}/${maxRetries}):`, error);

            if (retryCount >= maxRetries) {
              console.error("Max retries reached. Stopping further attempts.");
              hasMoreData = false; // Stop processing further intervals for the current plant
              throw error; // Re-throw the error to handle it in the outer catch block
            } else {
              console.log(`Retrying query in ${retryDelay / 1000} seconds...`);
              await new Promise((resolve) => setTimeout(resolve, retryDelay));
            }
          }
        }

        if (lastTimestamp >= endDate) {
          hasMoreData = false;
          console.log("Reached the end of the date range (2024-06-30T00:00:00.000Z to 2024-08-31T23:59:59Z).");
        }

        if (count === 2) {
          console.log("Breaking loop after count:", count);
          break;
        }
      }

      if (count === 2) {
        console.log("Breaking outer loop after count:", count);
        break;
      }
    }
  } catch (error) {
    console.error("Error in getTableData_3:", error);
    console.error("Failed to retrieve rows from the table lastTimestamp_global -:", lastTimestamp_global);
    await saveState({
      stage: "ADX stage",
      plant: plant_global,
      lastTimestamp: lastTimestamp_global ? lastTimestamp_global.toISOString() : lastTimestamp_global,
      lastTimestamp_adx: lastTimestamp_global,
      error: error.message,
      firstTimeStamp: firstTimeStamp,
    });
    throw error;
  }
}


var AWS_ACCESS_KEY = "ASIAUQ4L26GBSX424TWR";
var AWS_SECRET_KEY = "me08EoTt7JODeZhkqtEG7GO18QafXwm6nt3aAAbi";
var AWS_REGION = "ap-south-1";


let tag_data_arr_obj
let extractedData

// ---------- Previous dynamo implementation ------
const getDynamo_3 = async (tag_data, lastTimestamp_ISO, plant_para) => {
    try{
      tag_data_arr_obj = tag_data.map(item => ({
        TagID: item[0],
        TimeStamp: item[1],
        Value: item[2],
        Quality: item[6],
      }));

      console.log("tag_data_arr_obj -",tag_data_arr_obj);
      console.log("Length of tag_data_arr_obj:", tag_data_arr_obj.length);
      console.log("tag_data---------------:", tag_data);

          // Initialize the DynamoDB client
          // const dynamoDBClient = new DynamoDBClient({
          //   region: AWS_REGION,
          // }); // Replace with your region

      // Extract unique values from the first index of each sub-array
// const uniqueValues = [...new Set(tag_data.map(item => item[0]))];

// console.log("uniqueValues --",uniqueValues);

// ------------- new logic -------

 // Initialize the DynamoDB client
 const dynamoDBClient = new DynamoDBClient({
  region: AWS_REGION,
  // region: process.env.AWS_REGION,
}); // Replace with your region

let tableName = "UTCL-TagMaster"
console.log("tag_data - ",tag_data)

// Extract unique plant values from the tag_data and remove the last character
const uniquePlants = [...new Set(tag_data.map(item => item[0].split('-')[1].slice(0, -1)))] ; // Remove the last character from the plant identifier
console.log("uniquePlants --",uniquePlants)


    // ---------------------- Consolidated data with pagination -------------------------

    const queryWithPagination = async (params) => {
      let consolidatedResult = { Items: [] }; // To hold all items across pages
      let lastEvaluatedKey = null;

      try{

     
    
      do {
        if (lastEvaluatedKey) {
          params.ExclusiveStartKey = lastEvaluatedKey; // Use the last evaluated key to fetch the next page
        }
    
        const queryCommand = new QueryCommand(params);
        const result = await dynamoDBClient.send(queryCommand);
    
        // Append the current page's items to the consolidated result
        consolidatedResult.Items.push(...result.Items);
    
        // Update the last evaluated key for the next iteration
        lastEvaluatedKey = result.LastEvaluatedKey;
    
      } while (lastEvaluatedKey); // Continue until no more pages
      // console.log(xxx)
    
      return consolidatedResult;
    }catch(error){

        console.log("query error --",error)
        await saveState({ stage: "DynamoDB query pagination ", plant: plant_para, lastTimestamp: lastTimestamp_ISO.toISOString(), lastTimestamp_adx: lastTimestamp_ISO,  error: error.message });
        throw error
    }
    };



    for (const plant of uniquePlants) {

      const tagNamesForPlantx = tag_data
        .filter(item => item[0].split('-')[1].slice(0, -1) == plant) // Filter tag names by the trimmed plant
        .map(item => item[0].split('-').slice(-1)[0]); // Extract tag names after the last '-'
  
      console.log("Tag Names for Plant", plant, ":", tagNamesForPlantx," lenght -",tagNamesForPlantx.length);

      const tagNamesForPlant = [...new Set(tagNamesForPlantx)];

      console.log("uniqueTagNames tagNamesForPlant --",tagNamesForPlant,"lenght -",tagNamesForPlant.length);
  
      const params = {
        TableName: tableName,
        KeyConditionExpression: "Plant = :plant", // Query by the Plant key
        ExpressionAttributeValues: {
          ":plant": { S: plant }, // Add the Plant partition key
        },
        ProjectionExpression: "#tagUID, #businessUnit, #tagName, #EquimentGroup, #UOM", // Fetch necessary attributes
        ExpressionAttributeNames: {
          "#tagUID": "Tag UID",
          "#businessUnit": "Business Unit",
          "#tagName": "Tag Name",
          "#EquimentGroup": "Equipment Group",
          "#UOM": "Unit Of Measurement",

          
        },
      };
  
      if (tagNamesForPlant.length > 0) {
        params.FilterExpression = ""; // Start with an empty filter expression
  
        tagNamesForPlant.forEach((tagName, index) => {
          const tagKey = `:tag${index + 1}`; // Create a unique placeholder for each Tag Name
          params.ExpressionAttributeValues[tagKey] = { S: tagName }; // Add Tag Name to ExpressionAttributeValues
  
          // Append the condition to FilterExpression
          if (index > 0) {
            params.FilterExpression += " OR "; // Add OR for subsequent conditions
          }
          params.FilterExpression += `#tagName = ${tagKey}`;
        });
      }
  
      console.log("DynamoDB Query Parameters:", params);
  
      // Query DynamoDB with pagination
      const consolidatedResult = await queryWithPagination(params);



      // ------------- What If we query directly with Plant key and than filter data on server? ------------
      // ----- expensive and time consuming ------
  
      // Extract tag data from the consolidated result

          const extractTagData = (result) => {
      if (!result || !result.Items) {
        console.error("Invalid result format");
        return [];
      }

      // Extracting the data
      const tagData = result.Items.map((item) => {
        return {
          tagUID: item['Tag UID'].S || null,
          tagName: item['Tag Name'].S || null, // Assuming 'S' represents the string value
          assetID: item['Equipment Group'].S || null,
          propID: item['Business Unit'].S || null,
          unit: item['Unit Of Measurement'].S || null,
        };
      });

      return tagData;
        };

      extractedData = extractTagData(consolidatedResult);
    //   console.log("Extracted Tag Data for Plant", plant, ":", extractedData);
      console.log("Extracted Tag Data for Plant:", extractedData);



    }

    // -------- processing and adding assetID and other details to

    tag_data_arr_obj.forEach((tagObj) => {
      // Find the matching extracted data object
      const matchingExtractedData = extractedData.find(
        (extracted) => extracted.tagUID === tagObj.TagID
      );
    
      // If a match is found, add the additional properties
      // if (matchingExtractedData) {
      //   tagObj.tagName = matchingExtractedData.tagName;
      //   tagObj.assetID = matchingExtractedData.assetID;
      //   tagObj.propID = matchingExtractedData.propID;
      //   tagObj.unit = matchingExtractedData.unit;
      // }
        // Add the properties from the matching object or set them to null if no match
      tagObj.tagName = matchingExtractedData ? matchingExtractedData.tagName : null;
      tagObj.assetID = matchingExtractedData ? matchingExtractedData.assetID : null;
      tagObj.propID = matchingExtractedData ? matchingExtractedData.propID : null;
      tagObj.unit = matchingExtractedData? matchingExtractedData.unit: null;

    });
    
    console.log("new tag_data_arr_obj with assetId and other details -",tag_data_arr_obj);


    // ---- pushBulkImportData -- handles generation of csv, upload to s3 and and import the csv to sitewise


    // await pushBulkImportData(lastTimestamp_ISO, plant_para)


    }catch(error){
      console.error("Error getDynamo :", error);
       await saveState({ stage: "DynamoDB",plant: plant_para, lastTimestamp: lastTimestamp_ISO.toISOString(), lastTimestamp_adx: lastTimestamp_ISO,  error: error.message });
      throw error
    }
    // ----------------

  }



  const getDynamo = async (tag_data, lastTimestamp_ISO, plant_para, firstTimeStamp) => {
    try {
      // Map tag_data to objects
      const tag_data_arr_obj = tag_data.map(item => ({
        TagID: item[0],
        TimeStamp: item[1],
        Value: item[2],
        Quality: item[6],
      }));
  
      // console.log("tag_data_arr_obj -", tag_data_arr_obj);
      console.log("Length of tag_data_arr_obj:", tag_data_arr_obj.length);
  
      // Initialize the DynamoDB client
      const dynamoDBClient = new DynamoDBClient({
        region: AWS_REGION,
      });
  
      const tableName = "UTCL-TagMaster";
      // console.log("tag_data - ", tag_data);
  
      // Extract unique plant values from the tag_data and remove the last character
      const uniquePlants = [
        ...new Set(tag_data.map(item => item[0].split('-')[1].slice(0, -1))),
      ]; // Remove the last character from the plant identifier
      // console.log("uniquePlants --", uniquePlants);
  
      // Helper to handle queries with pagination
      const queryWithPagination = async params => {
        let consolidatedResult = { Items: [] };
        let lastEvaluatedKey = null;
  
        try {
          do {
            if (lastEvaluatedKey) {
              params.ExclusiveStartKey = lastEvaluatedKey;
            }
  
            const queryCommand = new QueryCommand(params);
            const result = await dynamoDBClient.send(queryCommand);
  
            consolidatedResult.Items.push(...result.Items);
            lastEvaluatedKey = result.LastEvaluatedKey;
          } while (lastEvaluatedKey);
  
          return consolidatedResult;
        } catch (error) {
          console.log("query error --", error);
          await saveState({
            stage: "Query page DynamoDB",
            plant: plant_para,
            lastTimestamp: lastTimestamp_ISO.toISOString(),
            lastTimestamp_adx: lastTimestamp_ISO,
            firstTimeStamp: firstTimeStamp,
            error: error.message,
          });
          throw error;
        }
      };
  
      let allExtractedData = []; // Collect data from all batches
      let extractedData = []
      let duplicateCount = 0;
      let duplicateTags = [];
      let duplicateCounts = {}; // Object to store the count of duplicates for each tag

      for (const plant of uniquePlants) {
        const tagNamesForPlantx = tag_data
          .filter(item => item[0].split('-')[1].slice(0, -1) == plant)
          .map(item => item[0].split('-').slice(-1)[0]);



        // Create a map to track occurrences of each tagName
        const tagNameOccurrences = {};
        tagNamesForPlantx.forEach(tagName => {
          if (tagNameOccurrences[tagName]) {
            tagNameOccurrences[tagName]++;
            if (tagNameOccurrences[tagName] === 2) {
              duplicateTags.push(tagName); // Add to duplicateTags only when it becomes a duplicate
            }
            duplicateCounts[tagName] = tagNameOccurrences[tagName]; // Track the duplicate count for each tag
            duplicateCount++; // Increment total duplicate count
          } else {
            tagNameOccurrences[tagName] = 1; // Mark tagName as seen
          }
        });
          
        const tagNamesForPlant = [...new Set(tagNamesForPlantx)];
        // console.log(
        //   "uniqueTagNames tagNamesForPlant --",
        //   tagNamesForPlant,
        //   "length -",
        //   tagNamesForPlant.length
        // );

        // console.log("Duplicate count --", duplicateCount);
        // console.log("Duplicate tags list --", duplicateTags);
        // console.log("Duplicate tags list lenght --", duplicateTags.length);
        // console.log("Duplicate counts for each tag --", duplicateCounts);
  
        // DynamoDB query batching
        // const BATCH_SIZE = 500, 400, 300; // Adjust based on the expected size of filter expressions -- now working - ValidationException: Invalid FilterExpression: Expression size has exceeded the maximum allowed size; expression size: 5872
        const BATCH_SIZE = 150; // Adjust based on the expected size of filter expressions
        // const BATCH_SIZE = 100; // Adjust based on the expected size of filter expressions
        // const BATCH_SIZE = 50; // Adjust based on the expected size of filter expressions
        for (let i = 0; i < tagNamesForPlant.length; i += BATCH_SIZE) {
          const tagBatch = tagNamesForPlant.slice(i, i + BATCH_SIZE);
  
          const params = {
            TableName: tableName,
            KeyConditionExpression: "Plant = :plant", // Query by the Plant key
            ExpressionAttributeValues: {
              ":plant": { S: plant }, // Add the Plant partition key
            },
            ProjectionExpression:
              "#tagUID, #businessUnit, #tagName, #EquimentGroup, #UOM, #AssetID, #PropertyID", // Fetch necessary attributes
            ExpressionAttributeNames: {
              "#tagUID": "Tag UID",
              "#businessUnit": "Business Unit",
              "#tagName": "Tag Name",
              "#EquimentGroup": "Equipment Group",
              "#UOM": "Unit Of Measurement",
              "#AssetID": "AssetID",
              "#PropertyID": "PropertyID",
            },
            FilterExpression: "", // Start with an empty filter expression
          };
  
          tagBatch.forEach((tagName, index) => {
            const tagKey = `:tag${index + 1}`;
            params.ExpressionAttributeValues[tagKey] = { S: tagName };
            if (index > 0) {
              params.FilterExpression += " OR ";
            }
            params.FilterExpression += `#tagName = ${tagKey}`;
          });
  
          // console.log("DynamoDB Query Parameters:", params);
  
          // Query DynamoDB with pagination
          const consolidatedResult = await queryWithPagination(params);
  
          const extractTagData = result => {
            if (!result || !result.Items) {
              console.error("Invalid result format");
              return [];
            }
  
            // Extracting the data
            return result.Items.map(item => ({
              tagUID: item["Tag UID"]?.S || null,
              tagName: item["Tag Name"]?.S || null,
              assetID: item["AssetID"]?.S || null,
              propID: item["PropertyID"]?.S || null,
              unit: item["Unit Of Measurement"]?.S || null,
            }));
          };
  
          extractedData = extractTagData(consolidatedResult);
          // console.log("Extracted Tag Data for Plant:", extractedData);

          allExtractedData.push(...extractedData); // Append batch results
          // console.log("Extracted Tag Data for Plant:", allExtractedData);


  
        }
      }
      // Update tag_data_arr_obj with asset details
      // console.log("tag_data_arr_obj dynamo --",tag_data_arr_obj)
      console.log("tag_data_arr_obj.length dynamo --",tag_data_arr_obj.length)
      // console.log("extractedDataxxxxxxx --",extractedData)
      // console.log("allExtractedData --",allExtractedData)
      tag_data_arr_obj.forEach(tagObj => {
        const matchingExtractedData = allExtractedData.find(
          extracted => extracted.tagUID == tagObj.TagID
        );

        tagObj.tagName = matchingExtractedData
          ? matchingExtractedData.tagName
          : null;
        tagObj.assetID = matchingExtractedData
          ? matchingExtractedData.assetID
          : null;
        tagObj.propID = matchingExtractedData
          ? matchingExtractedData.propID
          : null;
        tagObj.unit = matchingExtractedData
          ? matchingExtractedData.unit
          : null;
      });
  
      // console.log(
      //   "new tag_data_arr_obj with assetId and other details -",
      //   tag_data_arr_obj
      // );
  
      // Push bulk data
      await pushBulkImportData(tag_data_arr_obj,lastTimestamp_ISO, plant_para, firstTimeStamp);

        // After the loop finishes, save the Excel file
  await saveMissingTagsToExcel();
    } catch (error) {
      console.error("Error getDynamo :", error);
      await saveState({
        stage: "Get DynamoDB",
        plant: plant_para,
        lastTimestamp: lastTimestamp_ISO.toISOString(),
        lastTimestamp_adx: lastTimestamp_ISO,
        firstTimeStamp: firstTimeStamp,
        error: error.message,
      });
      throw error;
    }
  };
  
  // This Set will store all unique TagIDs that have missing assetID or propID
const missingTagIDs = new Set();

  // Function to save missing TagIDs to an Excel file
const saveMissingTagsToExcel = async () => {
  // Convert the Set of missing TagIDs to an array of objects
  const missingData = Array.from(missingTagIDs).map(tagID => ({ 'TagID': tagID }));

  // Convert the data to a worksheet
  const worksheet = xlsx.utils.json_to_sheet(missingData);

  // Create a new workbook and append the worksheet
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Missing TagIDs");

  // Define the output file path
  const outputFilePath = path.join(__dirname, "missing_tags_from_IOTLive-2.xlsx");

  // Write the workbook to a file
  xlsx.writeFile(workbook, outputFilePath);

  console.log(`Missing tags Excel file saved at: ${outputFilePath}`);
};


// ------------------------

// Function to generate CSV
const generateCSV = (params) => {
  const headers = [
     'ASSET_ID', 'PROPERTY_ID', 'DATA_TYPE', 'TIMESTAMP_SECONDS', 'TIMESTAMP_NANO_OFFSET', 'QUALITY', 'VALUE'
  ];
  // const headers = [
  //   'ALIAS', 'ASSET_ID', 'PROPERTY_ID', 'DATA_TYPE', 'TIMESTAMP_SECONDS', 'TIMESTAMP_NANO_OFFSET', 'QUALITY', 'VALUE'
  // ];

  // Initialize CSV content with headers
  let csvContent = headers.join(',') + '\n';

  // Loop through params.entries and add each entry as a row in the CSV
  params.entries.forEach(entry => {
    entry.propertyValues.forEach(value => {
      const row = [
        // entry.entryId,  // ALIAS
        entry.assetId,  // ASSET_ID
        entry.propertyId, // PROPERTY_ID
        // 'DOUBLE', // DATA_TYPE, assuming double for simplicity
        entry.unit == 'State' ? 'INTEGER' : 'DOUBLE',
        value.timestamp.timeInSeconds, // TIMESTAMP_SECONDS
        value.timestamp.offsetInNanos, // TIMESTAMP_NANO_OFFSET
        value.quality, // QUALITY
        value.value.doubleValue, // VALUE
      ];
      csvContent += row.join(',') + '\n';
    });
  });

  return csvContent;
};

// Function to upload CSV to S3
const uploadCSVToS3 = async (csvContent, bucketName, key,plant_para, lastTimestamp_ISO, firstTimeStamp) => {
  const s3Client = new S3Client({ region: AWS_REGION });

  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: csvContent,
    ContentType: 'text/csv',
  };

  try {
    const uploadResponse = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log(`CSV file uploaded successfully. Response:`, uploadResponse);
    return uploadParams;  // Return the upload params (bucket and key) for later use in the job
  } catch (error) {
    console.error('Error uploading CSV to S3:', error);
    await saveState({ stage: "uPLOAD Import call",plant: plant_para, lastTimestamp: lastTimestamp_ISO.toISOString(), lastTimestamp_adx: lastTimestamp_ISO, firstTimeStamp: firstTimeStamp,  error: error.message });

    throw error;
  }
};

// arn -- arn:aws:s3:::historical-sitewise-data
// Function to create Bulk Import Job
const createBulkImportJob = async (bucketName, key, jobRoleArn,plant_para, lastTimestamp_ISO, firstTimeStamp) => {
  const client = new IoTSiteWiseClient({ region: AWS_REGION });
 // const client = new IoTSiteWiseClient({ region: AWS_REGION, endpoint: 'iotsitewise.ap-south-1.amazonaws.com' });
console.log("client IoTSiteWiseClient --",client)

  const input = {
    jobName: `BulkImportJob-Analyser-${new Date().toISOString()}`,
    jobRoleArn: jobRoleArn,
    files: [
      {
        bucket: bucketName,
        key: key,
      },
    ],
    errorReportLocation: {
      bucket: bucketName,
      prefix: 'error_reports/',  // Optional error report prefix
    },
    jobConfiguration: {
      fileFormat: {
        csv: {
          columnNames: [
             "ASSET_ID", "PROPERTY_ID", "DATA_TYPE", "TIMESTAMP_SECONDS", "TIMESTAMP_NANO_OFFSET", "QUALITY", "VALUE"
          ],
          // columnNames: [
          //   "ALIAS", "ASSET_ID", "PROPERTY_ID", "DATA_TYPE", "TIMESTAMP_SECONDS", "TIMESTAMP_NANO_OFFSET", "QUALITY", "VALUE"
          // ],
        },
      },
    },
    adaptiveIngestion: true,  // Set to true for adaptive ingestion
    deleteFilesAfterImport: false,  // Set to true if you want the files deleted after import
  };

  try {
    const command = new CreateBulkImportJobCommand(input);
    const response = await client.send(command);
    console.log('Bulk Import Job created successfully:', response);
    return response;  // Return the job response to track job status
  } catch (error) {
    console.error('Error creating Bulk Import Job:', error);
    await saveState({ stage: "cREATE Bulk import job - Import call",plant: plant_para, lastTimestamp: lastTimestamp_ISO.toISOString(), lastTimestamp_adx: lastTimestamp_ISO, firstTimeStamp: firstTimeStamp,  error: error.message });

    throw error;
  }
};

// This Set will store all unique TagIDs that have missing assetID or propID
// const missingTagIDs = new Set();



// Full function to push dummy data and trigger the bulk import job
const pushBulkImportData = async (tag_data_arr_obj,lastTimestamp_ISO, plant_para, firstTimeStamp) => {

  console.log("pushBulkImportData tag_data_arr_obj len--",tag_data_arr_obj.length)
  // console.log("pushBulkImportData tag_data_arr_obj len--",tag_data_arr_obj)
  try{
  const entries = [];
  let missingAssetOrPropCount = 0; // Counter for rows with missing assetID or propID

  tag_data_arr_obj.forEach((row) => {

      // Skip rows with null assetID or propID
      // Skip rows with null assetID or propID
      if (!row.assetID || !row.propID) {
        missingAssetOrPropCount++; // Increment the counter
        // console.log(`Skipping row with TagID: ${row.TagID} due to missing assetID or propID.`);
        missingTagIDs.add(row.TagID); // Add the TagID to the Set
        return;
      }

    // Extract measurement (last part of TagID split by "-")
    const measurement = row.TagID.split('-').pop();
    const entryId = `${measurement}-${Date.now()}`; // Generate a unique entryId
  

    // ------------------with nano seconds --------------
    
    // // Timestamp adjustment logic
    // // console.log("Original timestamp:", row.TimeStamp);
    // const utcTimestamp = new Date(row.TimeStamp).toISOString();
    // // console.log("timestamp row.TimeStamp parsed to UTC --", utcTimestamp);
  
    // // Convert the timestamp to a JavaScript Date object
    // let dateObj = new Date(utcTimestamp);
  
    // // Subtract 5 hours and 30 minutes (in milliseconds)
    // const timezoneOffset = (5 * 60 + 30) * 60 * 1000; // 5 hours and 30 minutes in milliseconds
    // dateObj = new Date(dateObj.getTime() - timezoneOffset);
  
    // // console.log("timestamp adjusted to 5 hours and 30 minutes behind --", dateObj);
  
    // // Convert to seconds
    // const timestampInSeconds = Math.floor(dateObj.getTime() / 1000);
    // // console.log("timestamp adjusted in seconds --", timestampInSeconds);
  
    // // Create a new entry for the row
    // const entry = {
    //   entryId,
    //   assetId: row.assetID , // Use assetID from the row if present
    //   propertyId: row.propID, // Use propID from the row as propertyId
    //   unit: row.unit,
    //   propertyValues: [
    //     {
    //       value: { doubleValue: parseFloat(row.Value) || 0 }, // Parse the value as float
    //       timestamp: {
    //         timeInSeconds: timestampInSeconds, // Adjusted timestamp in seconds
    //         offsetInNanos: 0, // No nano offset
    //       },
    //       quality: row.Quality || "GOOD", // Default quality to "GOOD" if not provided
    //     },
    //   ],
    // };

// -------- above without nano seconds --


        // Timestamp adjustment logic
        // console.log("Original timestamp:", row.TimeStamp);
        const utcTimestamp = new Date(row.TimeStamp).toISOString();
        // console.log("timestamp row.TimeStamp parsed to UTC --", utcTimestamp);

        // Convert the timestamp to a JavaScript Date object
        let dateObj = new Date(utcTimestamp);

        // // Subtract 5 hours and 30 minutes (in milliseconds)
        // const timezoneOffset = (5 * 60 + 30) * 60 * 1000; // 5 hours and 30 minutes in milliseconds
        // dateObj = new Date(dateObj.getTime() - timezoneOffset);

        // Subtract 5 hours and 30 minutes (in milliseconds)


        dateObj = new Date(dateObj.getTime());

        // Calculate offsetInNanos from the original timestamp
        const milliseconds = dateObj.getMilliseconds();
        const offsetInNanos = milliseconds * 1e6; // Convert milliseconds to nanoseconds

        // adding random nanos ---------


        // // Get milliseconds and convert to nanoseconds
        // const baseMilliseconds = dateObj.getMilliseconds();
        // const baseNanos = baseMilliseconds * 1e6;

        // // Introduce random precision in nanoseconds (0 to 999)
        // const randomNanos = Math.floor(Math.random() * 1e3);

        // // Calculate the final offset in nanoseconds
        // const offsetInNanos = baseNanos + randomNanos;



        // console.log("timestamp adjusted to 5 hours and 30 minutes behind --", dateObj);
        

        // Convert to seconds
        const timestampInSeconds = Math.floor(dateObj.getTime() / 1000);
        // console.log("timestamp adjusted in seconds --", timestampInSeconds);

        // Create a new entry for the row
        const entry = {
        entryId,
        assetId: row.assetID, // Use assetID from the row if present
        propertyId: row.propID, // Use propID from the row as propertyId
        unit: row.unit,
        propertyValues: [
            {
            value: { doubleValue: parseFloat(row.Value) || 0 }, // Parse the value as float
            timestamp: {
                timeInSeconds: timestampInSeconds, // Adjusted timestamp in seconds
                offsetInNanos: offsetInNanos, // Nano offset from milliseconds
            },
            quality: row.Quality || "GOOD", // Default quality to "GOOD" if not provided
            },
        ],
        };


  
    // Add the entry to the entries array
    entries.push(entry);
  });





  console.log(`Total rows skipped due to missing assetID or propID: ${missingAssetOrPropCount}`);
  
  // Prepare the final object
  const params = { entries };
  
  // console.log("params -",JSON.stringify(params, null, 2));


  // ----------------------------



  const csvContent = generateCSV(params);
  // console.log("csvContent --",csvContent)

  // Function to calculate the size of the CSV content in MB
const calculateCSVSizeInMB = (csvContent) => {
  // Get the byte length of the CSV content
  const byteLength = Buffer.byteLength(csvContent, 'utf8');
  
  // Convert byte length to MB
  const sizeInMB = byteLength / (1024 * 1024); // 1 MB = 1024 * 1024 bytes
  
  return sizeInMB;
};


  // Calculate the size of the CSV content in MB
const csvSizeInMB = calculateCSVSizeInMB(csvContent);
console.log("CSV Size in MB:", csvSizeInMB);

  // 2. Upload the CSV file to S3
  const bucketName = 'historical-sitewise-data';
  // const key = `KCW1/generated_file.csv`; // Define the S3 path
  // const key = `KCW1/generated_file-${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}.csv`;


  let plant_key = tag_data_arr_obj[0].TagID.split('-')[1].slice(0, -1)
  console.log("plant_key --",plant_key)

  const key = `${plant_key}/generated_file-${new Date().toISOString()}.csv`;
  console.log("key --",key)
  // saveState({ stage: "S3", plant: plant_para, lastTimestamp: lastTimestamp_ISO.toISOString(), lastTimestamp_adx: lastTimestamp_ISO, firstTimeStamp: firstTimeStamp });
  const uploadParams = await uploadCSVToS3(csvContent, bucketName, key,plant_para, lastTimestamp_ISO, firstTimeStamp);

  console.log("uploadParams --",uploadParams)

  // // 3. Create the Bulk Import Job

   const jobRoleArn = 'arn:aws:iam::311141527939:role/AmazonS3BucketAccessForIoTSiteWise-role-d89fe1';  // Replace with your IAM role ARN
//    const jobRoleArn = 'arn:aws:iam::311141527939:user/devuser';  // Replace with your IAM role ARN
//   arn:aws:iam::311141527939:role/AmazonS3BucketAccessForIoTSiteWise-role-d89fe1

  // saveState({ stage: "SiteWise", plant, lastTimestamp: lastTimestamp_ISO.toISOString() });

   const jobResponse = await createBulkImportJob(bucketName, uploadParams.Key, jobRoleArn,plant_para, lastTimestamp_ISO, firstTimeStamp);
   console.log('Job created with ID:', jobResponse.jobId);
}catch(error){
  console.log("error --",error)

  await saveState({ stage: "Push Bulk Import call",plant: plant_para, lastTimestamp: lastTimestamp_ISO.toISOString(), lastTimestamp_adx: lastTimestamp_ISO, firstTimeStamp: firstTimeStamp,  error: error.message });

  throw error
}

};


  const client = new IoTSiteWiseClient({
    region: AWS_REGION,
    // credentials: {
    //   accessKeyId: AWS_ACCESS_KEY,
    //   secretAccessKey: AWS_SECRET_KEY,
    // },
  })

  // const pushDataSitewise = async()=>{


  // }
  
  // Run all the tests
  async function runTests() {

    // ----------
    
    // Call the function

    // await getTableData();
    // await getTableData_2("2024-01-23T06:30:47.171Z");
    // await getTableData_2("2025-01-10T05:14:44.769Z")
    // await getTableData_2()
    // await getTableData_3()
    await getTableData_4()
    
    
    // ----- query dynamo db to get asset id and prop id from Tag Master table



    // await getTableFirst10Rows()


    // await getDynamo()

    // await pushDataSitewise()

    // ---below old logic for ref ------


    // await createAnalyserModel()

    // await createAsset()
  
    // console.log("\nTesting DynamoDB connection...");
    // await testDynamoDBConnection();  // Test DynamoDB connection
  }
  
  runTests();
