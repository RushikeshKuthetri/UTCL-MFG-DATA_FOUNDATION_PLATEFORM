const { IoTSiteWiseClient, CreateAssetModelCommand, CreateAssetCommand, AssociateTimeSeriesToAssetPropertyCommand,
    DescribeAssetCommand, DeleteAssetCommand, DeleteAssetModelCommand, UpdateAssetPropertyCommand,
    DescribeTimeSeriesCommand, DeleteTimeSeriesCommand
} = require("@aws-sdk/client-iotsitewise");
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
const client = new IoTSiteWiseClient(config);
const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require('@aws-sdk/client-dynamodb');

const xlsx = require('xlsx');
const fs = require('fs');
const csv = require('csv-parser');
const readline = require('readline');
const { unmarshall } = require("@aws-sdk/util-dynamodb");


// const FILENAME = "NDCW.csv";
let PLANT_NAME = "";
let dynamoDBTableName = "";


let modelsCreated = [];
let assetsCreated = [];
let describedAssets = [];


async function createAssetModel(modelName, measurements) {
    const input = {
        assetModelName: modelName,
        assetModelProperties: measurements,
        tags: { // TagMap
            "map-migrated": "migBUVKJ1ONSK"
        }
    };

    const command = new CreateAssetModelCommand(input);
    const response = await client.send(command);
    console.log(`Created model ${modelName}`);

    // wait for 10 seconds till the model comes in "ACTIVE" state
    // await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    const assetModelId = response.assetModelId;
    return assetModelId;
}

async function createAsset(name, assetModelId) {
    const input = { // CreateAssetRequest
        assetName: name, // required
        assetModelId: assetModelId, // required
        tags: {
            "map-migrated": "migBUVKJ1ONSK"
        }
    };
    const command = new CreateAssetCommand(input);
    const response = await client.send(command);
    console.log(`Created asset ${name}`);
    // await new Promise((resolve) => setTimeout(resolve, 10 * 1000));

    return response.assetId;
}

async function describeAsset(assetId) {
    const input = {
        assetId: assetId,
        excludeProperties: false
    };
    const command = new DescribeAssetCommand(input);
    const response = await client.send(command);
    return response;
}

async function updateAssetProperty(assetId, propertyId, alias) {
    try {
        try {


            const input = { // UpdateAssetPropertyRequest
                assetId: assetId, // required
                propertyId: propertyId, // required
                alias: alias,
            };
            const command = new AssociateTimeSeriesToAssetPropertyCommand(input);
            const response = await client.send(command);
            console.log(`Updated by Associate | ${alias}`);
        } catch (error) {
            // console.error(`Error in Associate Timeseries, Trying for update | ${alias}`);
            const input = { // UpdateAssetPropertyRequest
                assetId: assetId, // required
                propertyId: propertyId, // required
                propertyAlias: alias,
            };
            const command = new UpdateAssetPropertyCommand(input);
            const response = await client.send(command);
            console.log(`Updated by updateAsset | ${alias}`);
        }
    } catch (overallError) {
        console.error(`Error updating asset property alias ${alias} | ${overallError.message}`);
    }
}

async function main(data, batchNumber) {
    let jsonData = data;
    let measurements = [];
    const results = [];
    // await new Promise((resolve) => {
    //     fs.createReadStream(FILENAME)
    //         .pipe(csv())
    //         .on('data', (data) => results.push(data))
    //         .on('end', () => {
    //             jsonData = results;
    measurements = jsonData.reduce((acc, item) => {
        if (!acc.some(measurement => measurement.name === item["Tag UID"])) {
            if (item['Path'] == "#N/A") {
                item['Path'] = '';
            }
            acc.push({
                name: item["Tag UID"],
                dataType: item['Unit Of Measurement'] === 'State' ? 'INTEGER' : 'DOUBLE',
                unit: item['Unit Of Measurement'],
                type: {
                    measurement: {
                    },
                },
                tagPath: item['Path'],
                section: item['Section'],
            });
        }
        return acc;
    }, []);
    // resolve();
    // });
    // });


    console.log("Total Measurements: ", measurements.length);
    console.log("Checking for data stream's type for measurements of UOM with 'State'...")
    let invalidDataTypeStateMeasurements = [];
    for (let i = 0; i < measurements.length; i++) {
        const measurement = measurements[i];
        if (measurement.unit === 'State') {
            try {
                const response = await client.send(new DescribeTimeSeriesCommand({ alias: measurement.name }));
                // console.log(response)
                if (response.dataType == "DOUBLE") {
                    // console.log(`Data Stream for measurement ${measurement.name} is of type DOUBLE`);
                    invalidDataTypeStateMeasurements.push(measurement);
                }
            } catch (error) {
                console.error(`Error describing time series ${error.message}`);
            }
        }
    };
    
    console.log("Total: ", invalidDataTypeStateMeasurements.length);
    fs.writeFileSync(`${PLANT_NAME}_invalidDataTypeStateMeasurements.json`, JSON.stringify(invalidDataTypeStateMeasurements, null, 2));
    if (invalidDataTypeStateMeasurements.length > 0) {
        console.error("The following measurements with UOM 'State' has data streams of type DOUBLE");
        // for (let measurement of invalidDataTypeStateMeasurements) {
        //     console.error(`Measurement: ${measurement.name}, will delete Data Stream...`);

        //     await client.send(new DeleteTimeSeriesCommand({ alias: measurement.name }));
        //     console.log(`Deleted Data Stream for measurement ${measurement.name}`);

        // }
        // console.log("Total: ", invalidDataTypeStateMeasurements.length);
        // return 0;
    }

    const totalModels = Math.ceil(measurements.length / 500);
    console.log("Total Models & Assets to be created: ", totalModels);


    const batchSize = 500;

    // Create all asset models first
    let modelBatchNumber = batchNumber;
    const assetModelPromises = [];
    for (let i = 0; i < measurements.length; i += batchSize) {
        const batch = measurements.slice(i, i + batchSize);
        assetModelPromises.push(createAssetModel(`${PLANT_NAME}-Model-${modelBatchNumber}`, batch));
        modelBatchNumber++;
    }
    modelsCreated = await Promise.all(assetModelPromises);
    fs.writeFileSync(`${PLANT_NAME}_modelsCreated_new.json`, JSON.stringify(modelsCreated, null, 2));
    for (let i = 30; i > 0; i--) {
        process.stdout.write(`\rWaiting for ${i} seconds before creating assets...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.log("Creating assets...");

    // Create all assets after all models are created
    let assetBatchNumber = batchNumber;
    const assetPromises = [];
    for (const assetModelId of modelsCreated) {
        assetPromises.push(createAsset(`${PLANT_NAME}-Asset-${assetBatchNumber}`, assetModelId));
        assetBatchNumber++;
    }
    assetsCreated = await Promise.all(assetPromises);
    fs.writeFileSync(`${PLANT_NAME}_assetsCreated_new.json`, JSON.stringify(assetsCreated, null, 2));
    console.log(`Total models ${modelsCreated.length} and assets created ${assetsCreated.length}`);

    for (let i = 30; i > 0; i--) {
        process.stdout.write(`\rWaiting for ${i} seconds before updating alias...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.log("Updating asset properties alias...");

    // update alias
    // const assetsCreated = JSON.parse(fs.readFileSync(`${PLANT_NAME}_assetsCreated_new.json`));
    for (const assetId of assetsCreated) {
        const asset = await describeAsset(assetId);
        const batchSize = 5;
        for (let j = 0; j < asset.assetProperties.length; j += batchSize) {
            const batch = asset.assetProperties.slice(j, j + batchSize);
            await Promise.all(batch.map(async (property, index) => {
                const propertyId = property.id;
                // alias is same as CDH Tag name (Tag UID)
                await updateAssetProperty(asset.assetId, propertyId, property.name);
            }));
            console.log(`batch ${j / batchSize + 1} updated for asset: ${asset.assetName}`);
        }
        console.log(`*** Updated asset properties alias for asset: ${asset.assetName} ***`);
        describedAssets.push({
            assetId: asset.assetId,
            assetModelId: asset.assetModelId,
            assetName: asset.assetName,
            assetProperties: asset.assetProperties.map((item) => {
                return {
                    dataType: item.dataType,
                    name: item.name,
                    id: item.id,
                    tagPath: measurements.find(measurement => measurement.name === item.name).tagPath,
                    section: measurements.find(measurement => measurement.name === item.name).section

                }
            })
        });
    }
    fs.writeFileSync(`${PLANT_NAME}_describedAssets_new.json`, JSON.stringify(describedAssets, null, 2));

}



async function updateDynamoDB() {
    const dyclient = new DynamoDBClient(config);

    const describedAssets = JSON.parse(fs.readFileSync(`${PLANT_NAME}_describedAssets_new.json`));
    for (const asset of describedAssets) {
        const batchSize = 5;
        for (let i = 0; i < asset.assetProperties.length; i += batchSize) {
            const batch = asset.assetProperties.slice(i, i + batchSize);
            await Promise.all(batch.map(async (property) => {
                const params = {
                    TableName: dynamoDBTableName,
                    Key: {
                        "Section": { S: property.section },
                        "Tag UID": { S: property.name },
                    },
                    UpdateExpression: "SET AssetID = :AssetID, PropertyID = :PropertyID",
                    ExpressionAttributeValues: {
                        ":AssetID": { S: asset.assetId },
                        ":PropertyID": { S: property.id },
                    },
                };

                try {
                    await dyclient.send(new UpdateItemCommand(params));
                } catch (error) {
                    console.error(`Failed to update DynamoDB for property: ${property.name} in asset: ${asset.assetName}`, error);
                    throw error;
                }
            }));
            console.log(`batch ${i / batchSize + 1} updated for asset: ${asset.assetName}`);
        }
        console.log(`*** Updated for asset: ${asset.assetName} ***`);

    }

}

async function scanFullTable() {
    const dyclient = new DynamoDBClient(config);
    let params = {
        TableName: dynamoDBTableName,
        FilterExpression: "attribute_not_exists(AssetID)",
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
            if (unmarshalledItem['Unit Of Measurement'] === 'state') {
                unmarshalledItem['Unit Of Measurement'] = 'State';
            }
            return unmarshalledItem;
        });
        return jsonData;
    } catch (error) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(error, null, 2));
        throw error;
    }
}

async function run() {
    try {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Plant Name ', async (ans_plant_name) => {
            rl.question('Start Batch Number ', async (batchNumber) => {
                PLANT_NAME = ans_plant_name;
                dynamoDBTableName = `${PLANT_NAME}_TagMaster`;
                console.log(`Plant Name: ${PLANT_NAME} | DynamoDB Table Name: ${dynamoDBTableName}`);

                await new Promise((resolve) => setTimeout(resolve, 1000));

                let start = new Date();
                const data = await scanFullTable();
                console.log(data.length);
                const tagUidCounts = data.reduce((acc, item) => {
                    acc[item['Tag UID']] = (acc[item['Tag UID']] || 0) + 1;
                    return acc;
                }, {});
                const duplicates = Object.entries(tagUidCounts).filter(([key, count]) => count > 1);
                if (duplicates.length > 0) {
                    console.log('Duplicate Tag UID values found:');
                    duplicates.forEach(([tagUid, count]) => {
                        console.log(`Tag UID: ${tagUid}, Count: ${count}`);
                    });
                    console.error('Please resolve the duplicates before proceeding.');
                    console.error('Exiting the script.');
                    rl.close();
                    return;
                } else {
                    console.log('No duplicate Tag UID values found.');
                }

                rl.question('Proceed? (y/n): ', async (ans) => {
                    if (ans.toLowerCase() !== 'y') {
                        console.log('Exiting the script.');
                        rl.close();
                        return;
                    }
                    let returned = await main(data, batchNumber);
                    if (returned === 0) {
                        console.error("Exiting due to invalid data type for measurements with UOM 'State'.");
                        rl.close();
                        return;
                    }

                    console.log('Updating DynamoDB...');
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    await updateDynamoDB();

                    rl.close();
                    let end = new Date();
                    console.log("Time taken: ", ((end - start) / 1000) / 60, "minutes", "for ", modelsCreated.length, "models and ", assetsCreated.length, "assets");
                });

            });
        });
    } catch (error) {
        console.error("Error in main");
        console.error(error);
    }
}

run();
