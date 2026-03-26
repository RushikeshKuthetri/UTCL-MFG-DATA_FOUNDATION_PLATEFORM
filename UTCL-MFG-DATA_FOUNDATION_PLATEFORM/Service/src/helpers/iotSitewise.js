const {
  IoTSiteWiseClient,
  ExecuteQueryCommand,
  GetAssetPropertyValueCommand,
  DescribeAssetCommand,
  CreateAssetModelCommand,
  CreateAssetCommand,
  DescribeAssetModelCommand,
  UpdateAssetPropertyCommand,
  DescribeAssetPropertyCommand,
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueHistoryCommand,
  GetAssetPropertyAggregatesCommand,
  GetInterpolatedAssetPropertyValuesCommand,
  GetAssetPropertyValueHistoryCommand,
  BatchGetAssetPropertyAggregatesCommand,
} = require("@aws-sdk/client-iotsitewise");

const client = new IoTSiteWiseClient({
  region: process.env.AWS_REGION_NAME,
});



const createAssetModel = async (payload) => {
  try {
    payload.tags = {
      "map-migrated": "migBUVKJ1ONSK",
    };
    const command = new CreateAssetModelCommand(payload);
    const response = await client.send(command);
    //   console.log("Asset Model Created:", response);
    return response;
  } catch (error) {
    console.error("Error creating Asset Model:", error);
    return;
  }
};

const getAssetPropertyValue = async (payload) => {
  try {
    const results = [];
    const batchEntriesArray = chunkArray(payload, 128);
    for (const entries of batchEntriesArray) {
      const command = new BatchGetAssetPropertyValueCommand({ entries });
      const response = await client.send(command);
      results.push(...response.successEntries);
    }
    // console.log(results);
    return results;
  } catch (error) {
    console.log("Error getting asset property value: ", error);
    return;
  }
};

// const getAssetPropertyHistoryValueList = async (
//   payload,
//   startDate,
//   endDate
// ) => {
//   try {
//     const batchEntriesArray = chunkArrayHistory(
//       payload,
//       16,
//       startDate,
//       endDate
//     );
//     const results = [];

//     // Run all batch calls in parallel using Promise.all
//     await Promise.all(
//       batchEntriesArray.map(async (entries) => {
//       const paramsPayload = {
//         entries,
//         maxResults: 20000,
//       };
//       let flag = true;
//       let nextToken = "";
//       while (flag) {
//         if (nextToken !== "") {
//         paramsPayload["nextToken"] = nextToken;
//         }
//         const command = new BatchGetAssetPropertyValueHistoryCommand(paramsPayload);
//         const response = await client.send(command);
//         results.push(...response.successEntries);
//         if (response?.nextToken) {
//         nextToken = response.nextToken;
//         } else {
//         flag = false;
//         }
//       }
//       })
//     );

//     return results;
//   } catch (error) {
//     console.log("Error getting asset property history value: ", error);
//     return;
//   }
// };


const getAssetPropertyHistoryValueList = async (
  payload,
  startDate,
  endDate
) => {
  try {
    console.log("Starts:======================>", new Date().toISOString());
    const batchEntriesArray = chunkArrayHistory(
      payload,
      16,
      startDate,
      endDate
    );


    const batchPromises = batchEntriesArray.map(async (entries) => {
      const allResults = [];
      let nextToken = undefined;

      do {
        const paramsPayload = {
          entries,
          maxResults: 20000,
          ...(nextToken && { nextToken }),
        };

            console.log("batch Start:", new Date().toISOString());
            console.log("paramsPayload:", JSON.stringify(paramsPayload));
        const response = await client.send(
          new BatchGetAssetPropertyValueHistoryCommand(paramsPayload)
        );
        
            console.log("batch Ends:", new Date().toISOString());


        if (response?.successEntries?.length) {
          allResults.push(...response.successEntries);
        }

        nextToken = response?.nextToken;
      } while (nextToken);

      return allResults;
    });

    // Run all batches in parallel & flatten results
    const results = (await Promise.all(batchPromises)).flat();

    console.log("Ends:==========================>", new Date().toISOString());

    return results;
  } catch (error) {
    console.error("Error getting asset property history value:", error);
    return [];
  }
};

const getAssetPropertyHistoryValueListOptimized = async (
  payload,
  startDate,
  endDate
) => {
  try {
    console.log("Starts:======================>", new Date().toISOString());
    const batchEntriesArray = chunkArrayHistory(
      payload,
      16,
      startDate,
      endDate
    );

    console.log("batchEntriesArray length:", JSON.stringify(batchEntriesArray));

    const batchPromises = batchEntriesArray.map(async (entries) => {
      const allResults = [];
      let nextToken = undefined;

      do {
        const paramsPayload = {
          entries,
          maxResults: 20000,
          ...(nextToken && { nextToken }),
        };

        console.log("batch Start:", new Date().toISOString());
        console.log("paramsPayload:", JSON.stringify(paramsPayload));
        const response = await client.send(
          new BatchGetAssetPropertyValueHistoryCommand(paramsPayload)
        );

        console.log("batch Ends:", new Date().toISOString());

        if (response?.successEntries?.length) {
          allResults.push(...response.successEntries);
        }

        nextToken = response?.nextToken;
      } while (nextToken);

      return allResults;
    });

    // Run all batches in parallel & flatten results
    const results = (await Promise.all(batchPromises)).flat();

    console.log("Ends:==========================>", new Date().toISOString());

    return results;
  } catch (error) {
    console.error("Error getting asset property history value:", error);
    return [];
  }
};

const getAssetPropertyAggregateValueListOptimized = async (
  payload,
  interval,
  startDate,
  endDate
) => {
  try {
    console.log("Interval:", interval);
    console.log("StartDate:", startDate);
    console.log("EndDate:", endDate);

    console.log("Starts:======================>", new Date().toISOString());
    const batchEntriesArray = chunkArrayHistoryOptimized(
      payload,
      16,
      startDate,
      endDate,
      interval
    );

    console.log("batchEntriesArray length:", batchEntriesArray.length);

    const batchPromises = batchEntriesArray.map(async (entries) => {
      const allResults = [];
      let nextToken = undefined;

      do {
        const paramsPayload = {
          entries,
          maxResults: 4000,
          ...(nextToken && { nextToken }),
        };

        console.log("batch Start:", new Date().toISOString());
        console.log("paramsPayload:", JSON.stringify(paramsPayload));
        const response = await client.send(
          new BatchGetAssetPropertyAggregatesCommand(paramsPayload)
        );

        console.log("batch Ends:", new Date().toISOString());

        console.log("response:", JSON.stringify(response));
        if (response?.successEntries?.length) {
          allResults.push(...response.successEntries);
        }

        nextToken = response?.nextToken;
      } while (nextToken);

      return allResults;
    });

    // Run all batches in parallel & flatten results
    const results = (await Promise.all(batchPromises)).flat();

    console.log("Results ===>", results);

    console.log("Ends:==========================>", new Date().toISOString());

    return results;
  } catch (error) {
    console.error("Error getting asset property history value:", error);
    return [];
  }
};


// function getDateRange(dateStr) {
//   const d = new Date(dateStr);

//   const startDate = new Date(
//     d.getFullYear(),
//     d.getMonth(),
//     d.getDate(),
//     0,
//     0,
//     0,
//     0
//   );

//   const endDate = new Date(
//     d.getFullYear(),
//     d.getMonth(),
//     d.getDate(),
//     23,
//     59,
//     59,
//     999
//   );

//   return { startDate, endDate };
// }



// getDateRange converted to UTC Timezone For lambda deployment 

function getDateRange(dateStr) {
  const d = new Date(dateStr);
  // IST day start → 00:00 IST = previous day 18:30 UTC
  const startDate = new Date(Date.UTC(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate() - 1,
    18, 30, 0, 0
  ));

  // IST day end → 23:59:59.999 IST = same day 18:29:59.999 UTC
  const endDate = new Date(Date.UTC(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate(),
    18, 29, 59, 999
  ));

  return { startDate, endDate };
}




// commented for mismatch output
function chunkArrayHistoryOptimized(arr, chunkSize = 16, startDate, endDate, interval = "1h") {
  const result = [];
  let count = 1;

// if (interval === "60m") {
//   interval = "1h";
// }
  const sd = startDate instanceof Date ? startDate : new Date(startDate);
  const ed = endDate instanceof Date ? endDate : new Date(endDate);

  const startEpoch = Math.floor(sd.getTime() / 1000);
  const endEpoch = Math.floor(ed.getTime() / 1000);

  for (let i = 0; i < arr.length; i += chunkSize) {
    const slicedArr = arr.slice(i, i + chunkSize);

    const finalArr = slicedArr.map((item) => ({
      entryId: (count++).toString(),
      assetId: item.assetId,
      propertyId: item.propertyId,
      aggregateTypes: ["AVERAGE"],
      startDate: new Date(sd),         // now correct
      endDate: new Date(ed),             // now correct
      resolution: interval,
      qualities: ["GOOD"],
    }));

    result.push(finalArr);
  }

  return result;
}



const getAssetPropertyHistoryValue = async (payload, startDate, endDate) => {
  try {
    const batchEntriesArray = chunkArrayHistory(
      payload,
      16,
      startDate,
      endDate
    );
    let anyDataReceived = false;
    for (const entries of batchEntriesArray) {
      const command = new BatchGetAssetPropertyValueHistoryCommand({ entries });
      const response = await client.send(command);

      if (
        response.successEntries.some(
          (entry) =>
            entry.assetPropertyValueHistory &&
            entry.assetPropertyValueHistory.length
        )
      ) {
        anyDataReceived = true;
        break;
      }
    }
    console.log({ anyDataReceived });
    return anyDataReceived;
  } catch (error) {
    console.log("Error getting asset property history value: ", error);
    return;
  }
};

function chunkArray(arr, chunkSize = 16) {
  const result = [];
  let count = 1;
  for (let i = 0; i < arr.length; i += chunkSize) {
    const slicedArr = arr.slice(i, i + chunkSize);
    const finalArr = [];
    for (let j = 0; j < slicedArr.length; j++) {
      slicedArr[j][`entryId`] = `${count}`;
      finalArr.push(slicedArr[j]);
      count++;
    }
    result.push(finalArr);
  }
  return result;
}

function chunkArrayHistory(arr, chunkSize = 16, startDate, endDate) {
  const result = [];
  let count = 1;
  for (let i = 0; i < arr.length; i += chunkSize) {
    const slicedArr = arr.slice(i, i + chunkSize);
    const finalArr = [];
    for (let j = 0; j < slicedArr.length; j++) {
      slicedArr[j][`entryId`] = `${count}`;
      slicedArr[j][`startDate`] = startDate;
      slicedArr[j][`endDate`] = endDate;
      slicedArr[j][`qualities`] = ["GOOD"];
      finalArr.push(slicedArr[j]);
      count++;
    }
    result.push(finalArr);
  }
  return result;
}

const getAssetPropertyHistoryValuewithoutChunks = async (payload) => {
  try {
    let data = [];
    let flag = true;
    let nextToken = "";
    while (flag) {
      if (nextToken !== "") {
        payload["nextToken"] = nextToken;
      }
      const command = new BatchGetAssetPropertyValueHistoryCommand(payload);
      const response = await client.send(command);
      data = data.concat(response);
      if (response.nextToken) {
        nextToken = response.nextToken;
      } else {
        flag = false;
      }
    }
    // const command = new BatchGetAssetPropertyValueHistoryCommand(payload);
    // const response = await client.send(command);
    //   console.log("response history value:", response);
    return data; //response;
  } catch (error) {
    console.error("Error in getAssetPropertyHistoryValuewithoutChunks:", error);
    return;
  }
};

const getAssetPropertyAggregates = async (payload) => {
  try {
    const command = new GetAssetPropertyAggregatesCommand(payload);
    const response = await client.send(command);
    return response;
  } catch (error) {
    console.error("Error in getAssetPropertyAggregates:", error);
    return;
  }
};

const getBatchAssetPropertyAggregates = async (payload, startDate, endDate) => {
  try {
    const batchEntriesArray = chunkArrayHistory(
      payload,
      16,
      startDate,
      endDate
    );
    const results = [];
    let nextToken = null;
    for (const entries of batchEntriesArray) {
      const command = new BatchGetAssetPropertyAggregatesCommand({
        entries,
        nextToken,
      });
      const response = await client.send(command);
      nextToken = response?.nextToken || null;
      results.push(...response.successEntries);
    }
    return results;
  } catch (error) {
    console.log("Error getting batch asset property aggregate values: ", error);
    return;
  }
};

// used in filterbyUIDAvg.js

const getSiteWiseDataByTimestamp = async ({
  tagMetadata,
  startTime,
  endTime,
  interval,
}) => {
  const results = [];

  for (const tag of tagMetadata) {
    const params = {
      assetId: tag.AssetId,
      propertyId: tag.PropertyId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      qualities: ["GOOD"],
      intervalInSeconds: interval,
      type: "INTERPOLATED",
      aggregationType: {
        name: "AVERAGE",
        values: ["AVERAGE"],
      },
    };

    try {
      const command = new GetInterpolatedAssetPropertyValuesCommand(params);
      const response = await siteWiseClient.send(command);

      const values = response.interpolatedAssetPropertyValues.map((item) => ({
        timestamp: item.timestamp,
        value: item.value?.doubleValue,
        uid: tag.TagUID,
        tagName: tag.TagName,
      }));

      results.push(...values);
    } catch (error) {
      console.error(
        `Error fetching SiteWise data for UID ${tag.TagUID}:`,
        error
      );
    }
  }

  return results;
};

// used in filterbyUIDAvgGCW.js (This file is part of filterbyUIDAvg.js)

const getSiteWiseDataAvgFilled = async ({
  tagMetadata,
  startDate,
  endDate,
  interval,
  useCreatedTimestamp,
}) => {
  const results = [];

  for (const tag of tagMetadata) {
    const params = {
      assetId: tag.AssetId,
      propertyId: tag.PropertyId,
      startTime: new Date(startDate),
      endTime: new Date(endDate),
      qualities: ["GOOD"],
      intervalInSeconds: interval,
      type: "INTERPOLATED",
      aggregationType: {
        name: "AVERAGE",
        values: ["AVERAGE"],
      },
    };

    try {
      const command = new GetInterpolatedAssetPropertyValuesCommand(params);
      const response = await siteWiseClient.send(command);

      const values = response.interpolatedAssetPropertyValues.map((item) => ({
        timestamp: item.timestamp,
        value: item.value?.doubleValue,
        uid: tag.TagUID,
        tagName: tag.TagName,
      }));

      results.push(...values);
    } catch (error) {
      console.error(
        `Error fetching SiteWise data for UID ${tag.TagUID}:`,
        error
      );
    }
  }

  return results;
};

//used in filterbyUIDs.js
// NEW CODE THAT WAS USED INSTEAD OF LINE 74
// const getAssetPropertyHistoryValue = async (payload, startDate, endDate) => {
//     const results = [];

//     // Validate and parse the start and end dates
//     let startTime, endTime;
//     try {
//       startTime = parseDate(startDate);
//       endTime = parseDate(endDate);

//       console.log("Start time:", startTime.toISOString());
//       console.log("End time:", endTime.toISOString());
//     } catch (error) {
//       return {
//         code: 400,
//         status: "failed",
//         message: error.message
//       };
//     }

//     try {
//       for (const entry of payload) {
//         // Log the assetId and propertyId before fetching data
//         console.log("Fetching history for assetId:", entry.assetId);
//         console.log("Fetching history for propertyId:", entry.propertyId);

//         const command = new GetAssetPropertyValueHistoryCommand({
//           assetId: entry.assetId,
//           propertyId: entry.propertyId,
//           startTime: startTime.toISOString(),
//           endTime: endTime.toISOString(),
//           timeOrdering: "ASCENDING",
//           qualities: ["GOOD"],
//           maxResults: 1000,
//         });

//         const response = await siteWiseClient.send(command);

//         // Log the response from SiteWise to inspect the data
//         console.log("History response:", response);

//         // Check if the response has assetPropertyValueHistory
//         if (response.assetPropertyValueHistory && response.assetPropertyValueHistory.length > 0) {
//           const avgValue = calculateAverage(response.assetPropertyValueHistory);
//           results.push({
//             Id: entry.UID,
//             "Tag Name": entry.TagName,
//             Plant: entry.Plant,
//             Description: entry.Description,
//             "Plant SAP Code": entry.PlantSAPCode,
//             AvgValue: avgValue.toFixed(4),
//             Timestamp: response.assetPropertyValueHistory[0].timestamp // Adjust if you need other data
//           });
//         } else {
//           // If no data is returned, log it for debugging
//           console.log(`No data found for assetId: ${entry.assetId}, propertyId: ${entry.propertyId}`);
//         }
//       }

//       return {
//         code: 200,
//         status: "success",
//         result: results,
//         length: results.length
//       };
//     } catch (error) {
//       console.error("Error fetching asset property history value:", error);
//       return {
//         code: 500,
//         status: "failed",
//         message: error.message
//       };
//     }
//   };

// used in filterbyUIDAvg2.js & filterbyUIDs.js
const getInterpolatedAssetPropertyValues = async (
  assetId,
  propertyId,
  startTime,
  endTime,
  interval
) => {
  try {
    const seconds = parseInt(moment.duration(interval).asSeconds());
    const result = await siteWiseClient.send(
      new GetInterpolatedAssetPropertyValuesCommand({
        assetId,
        propertyId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        intervalInSeconds: seconds,
        type: "AVERAGE",
        quality: "GOOD",
      })
    );

    return result.interpolatedAssetPropertyValues.map((item) => ({
      timestamp: item.timestamp.timeInSeconds * 1000, // Convert to milliseconds
      value: item.value?.doubleValue ?? null,
    }));
  } catch (error) {
    console.error("Error getting interpolated values:", error);
    throw error; // Rethrow the error to propagate it
  }
};

//used in filterbyUIDAvg.js

const batchGetAssetPropertyValueHistoryCommand = async (queries) => {
  const results = [];

  for (const query of queries) {
    try {
      const command = new GetAssetPropertyValueHistoryCommand({
        assetId: query.assetId,
        propertyId: query.propertyId,
        startDate: new Date(query.startDate),
        endDate: new Date(query.endDate),
        qualities: [query.quality || "GOOD"],
        resolution: query.resolution || "1m", // Optional
        timeOrdering: "ASCENDING",
      });
      const response = await client.send(command);

      const values =
        response.assetPropertyValueHistory?.map((value) => ({
          UID: query.entryId,
          Value: value.value?.doubleValue || value.value?.stringValue || null,
          Timestamp: value.timestamp?.timeInSeconds
            ? new Date(value.timestamp.timeInSeconds * 1000)
            : null,
        })) || [];

      results.push(...values);
    } catch (error) {
      console.error(
        `Error fetching historical data for UID ${query.entryId}:`,
        error
      );
    }
  }

  return results;
};
module.exports = {
  createAssetModel,
  getAssetPropertyValue,
  getAssetPropertyHistoryValue,
  getAssetPropertyHistoryValuewithoutChunks,
  getAssetPropertyAggregates,
  getAssetPropertyHistoryValueList,
  getAssetPropertyHistoryValueListOptimized,
  getAssetPropertyAggregateValueListOptimized,
  getSiteWiseDataByTimestamp,
  getSiteWiseDataAvgFilled,
  getInterpolatedAssetPropertyValues,
  batchGetAssetPropertyValueHistoryCommand,
  getBatchAssetPropertyAggregates,
  chunkArrayHistory,
  getDateRange,
};
