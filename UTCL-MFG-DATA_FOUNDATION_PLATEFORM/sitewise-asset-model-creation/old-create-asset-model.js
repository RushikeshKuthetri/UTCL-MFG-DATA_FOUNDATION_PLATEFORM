const { IoTSiteWiseClient, CreateAssetModelCommand, CreateAssetCommand, UpdateAssetPropertyCommand,
    DescribeAssetCommand, DeleteAssetCommand, DeleteAssetModelCommand
} = require("@aws-sdk/client-iotsitewise");
const client = new IoTSiteWiseClient({ region: "ap-south-1" }); // ap-south-1 = mumbai
const { DynamoDBClient, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');

const xlsx = require('xlsx');
const fs = require('fs');
const csv = require('csv-parser');

const FILENAME = "HCW.csv";
const PLANT_NAME = "HCW";
const dynamoDBTableName = "HCW_TagMaster";


let modelsCreated = [];
let assetsCreated = [];
let describedAssets = [];
// ACTION PLAN

// read from excel
// take first 500 measurents, create model
// using the model, create asset
// read next 500 models
// avoid heirarchy code in old script




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
    await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
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
    await new Promise((resolve) => setTimeout(resolve, 10 * 1000));

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
    const input = { // UpdateAssetPropertyRequest
        assetId: assetId, // required
        propertyId: propertyId, // required
        propertyAlias: alias,
    };
    const command = new UpdateAssetPropertyCommand(input);
    const response = await client.send(command);
}

async function main() {
    let jsonData;
    let measurements = [];
    const results = [];
    await new Promise((resolve) => {
        fs.createReadStream(FILENAME)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                jsonData = results;
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
                resolve();
            });
    });


    console.log("Total Measurements: ", measurements.length);
    const totalModels = Math.ceil(measurements.length / 500);
    console.log("Total Models/Assets to be created: ", totalModels);
    const estimatedTimeMinutes = totalModels * (21 / 60);
    const currentTime = new Date();
    const completionTime = new Date(currentTime.getTime() + estimatedTimeMinutes * 60000);
    console.log("Estimated time to complete: ", estimatedTimeMinutes, "minutes");
    console.log("Estimated completion time: ", completionTime.toLocaleTimeString());
    // return

    const batchSize = 500;

    let batchNumber = 1;
    for (let i = 0; i < measurements.length; i += batchSize) {
        console.log(`Measurement start index: ${i}`);
        const batch = measurements.slice(i, i + batchSize);
        const assetModelId = await createAssetModel(`${PLANT_NAME}-Model-${batchNumber}`, batch);
        modelsCreated.push(assetModelId);
        const assetId = await createAsset(`${PLANT_NAME}-Asset-${batchNumber}`, assetModelId);
        assetsCreated.push(assetId);
        const asset = await describeAsset(assetId);
        for (let j = 0; j < asset.assetProperties.length; j++) {
            const property = asset.assetProperties[j];
            const propertyId = property.id;
            // alias is same as CDH Tag name (Tag UID)
            await updateAssetProperty(asset.assetId, propertyId, property.name);
            console.log(`Alias updated for property: ${property.name} in asset ${asset.assetName}`);
        }
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
        fs.writeFileSync(`${PLANT_NAME}_describedAssets.json`, JSON.stringify(describedAssets, null, 2));
        batchNumber++;
    }
    console.log("Total models and assets created", modelsCreated.length, assetsCreated.length);


    // update dynamo db with asset id and measurement id
    // using describedAssets, update the dynamo db table

}



async function updateDynamoDB(params) {
    const dyclient = new DynamoDBClient({ region: "ap-south-1" });

    const describedAssets = JSON.parse(fs.readFileSync(`${PLANT_NAME}_describedAssets.json`));
    for (const asset of describedAssets) {
        for (const property of asset.assetProperties) {
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
                console.log(`Updated DynamoDB with property: ${property.name} for asset: ${asset.assetName}`);
                await new Promise((resolve) => setTimeout(resolve, 1000000));
            } catch (error) {
                
                console.error(`Failed to update DynamoDB for property: ${property.name} in asset: ${asset.assetName}`, error);
                throw error;
            }
        }
    }

}

async function run() {
    try {
        let start = new Date();
        await main();
        let end = new Date();
        console.log("Time taken: ", (end - start) / 1000, "seconds", "for ", modelsCreated.length, "models and ", assetsCreated.length, "assets");
    } catch (error) {
        console.error("Error in main");
        console.error(error);
    }
}

run();
// updateDynamoDB();