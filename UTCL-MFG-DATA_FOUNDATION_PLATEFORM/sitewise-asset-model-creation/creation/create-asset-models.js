const { IoTSiteWiseClient, CreateAssetModelCommand, CreateAssetCommand, UpdateAssetPropertyCommand,
    DescribeAssetCommand, DeleteAssetCommand, DeleteAssetModelCommand
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
    const input = { // UpdateAssetPropertyRequest
        assetId: assetId, // required
        propertyId: propertyId, // required
        propertyAlias: alias,
    };
    const command = new UpdateAssetPropertyCommand(input);
    const response = await client.send(command);
}

async function main(data) {
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
    const totalModels = Math.ceil(measurements.length / 500);
    console.log("Total Models/Assets to be created: ", totalModels);

    // return

    const batchSize = 500;

    // Create all asset models first
    let batchNumber = 1;
    const assetModelPromises = [];
    for (let i = 0; i < measurements.length; i += batchSize) {
        const batch = measurements.slice(i, i + batchSize);
        assetModelPromises.push(createAssetModel(`${PLANT_NAME}-Model-${batchNumber}`, batch));
        batchNumber++;
    }
    modelsCreated = await Promise.all(assetModelPromises);
    fs.writeFileSync(`${PLANT_NAME}_modelsCreated.json`, JSON.stringify(modelsCreated, null, 2));
    for (let i = 30; i > 0; i--) {
        process.stdout.write(`\rWaiting for ${i} seconds before creating assets...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.log("Creating assets...");

    // Create all assets after all models are created
    batchNumber = 1;
    const assetPromises = [];
    for (const assetModelId of modelsCreated) {
        assetPromises.push(createAsset(`${PLANT_NAME}-Asset-${batchNumber}`, assetModelId));
        batchNumber++;
    }
    assetsCreated = await Promise.all(assetPromises);
    fs.writeFileSync(`${PLANT_NAME}_assetsCreated.json`, JSON.stringify(assetsCreated, null, 2));
    console.log("Total models and assets created", modelsCreated.length, assetsCreated.length);

    for (let i = 30; i > 0; i--) {
        process.stdout.write(`\rWaiting for ${i} seconds before updating alias...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.log("Updating asset properties alias...");

    // update alias
    // const assetsCreated = JSON.parse(fs.readFileSync(`${PLANT_NAME}_assetsCreated.json`));
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
    fs.writeFileSync(`${PLANT_NAME}_describedAssets.json`, JSON.stringify(describedAssets, null, 2));

}



async function updateDynamoDB() {
    const dyclient = new DynamoDBClient(config);

    const describedAssets = JSON.parse(fs.readFileSync(`${PLANT_NAME}_describedAssets.json`));
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
            // if (unmarshalledItem['Tag UID'].includes("N-NDCW2-PH2-F-PV-K2_432FM2N01FZ1")) {
            //     console.log("Found item: ", unmarshalledItem);
            // }
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
        rl.question('Plant Name ', async (answer) => {
            PLANT_NAME = answer;
            dynamoDBTableName = `${PLANT_NAME}_TagMaster`;
            console.log(`Plant Name: ${PLANT_NAME} | DynamoDB Table Name: ${dynamoDBTableName}`);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            let start = new Date();
            const data = await scanFullTable();
            // return
            await main(data);

            console.log('Updating DynamoDB...');
            await new Promise((resolve) => setTimeout(resolve, 2000));
            await updateDynamoDB();

            rl.close();


            let end = new Date();
            console.log("Time taken: ", ((end - start) / 1000) / 60, "minutes", "for ", modelsCreated.length, "models and ", assetsCreated.length, "assets");

        });
    } catch (error) {
        console.error("Error in main");
        console.error(error);
    }
}

run();


// async function backup() {
//     let jsonData;
//     let measurements = [];
//     const results = [];
//     await new Promise((resolve) => {
//         fs.createReadStream(FILENAME)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => {
//                 jsonData = results;
//                 measurements = jsonData.reduce((acc, item) => {
//                     if (!acc.some(measurement => measurement.name === item["Tag UID"])) {
//                         if (item['Path'] == "#N/A") {
//                             item['Path'] = '';
//                         }
//                         acc.push({
//                             name: item["Tag UID"],
//                             dataType: item['Unit Of Measurement'] === 'State' ? 'INTEGER' : 'DOUBLE',
//                             unit: item['Unit Of Measurement'],
//                             type: {
//                                 measurement: {
//                                 },
//                             },
//                             tagPath: item['Path'],
//                             section: item['Section'],
//                         });
//                     }
//                     return acc;
//                 }, []);
//                 resolve();
//             });
//     });
//     let describedAssets = [];
//     const assetsCreated = JSON.parse(fs.readFileSync(`${PLANT_NAME}_assetsCreated.json`));
//     for (const assetId of assetsCreated) {
//         const asset = await describeAsset(assetId);
//         const batchSize = 5;
//         for (let j = 0; j < asset.assetProperties.length; j += batchSize) {
//             const batch = asset.assetProperties.slice(j, j + batchSize);
//             await Promise.all(batch.map(async (property, index) => {
//                 const propertyId = property.id;
//                 // alias is same as CDH Tag name (Tag UID)
//                 await updateAssetProperty(asset.assetId, propertyId, property.name);
//             }));
//             console.log(`batch ${j / batchSize + 1} updated`);
//         }
//         console.log(`*** Updated asset properties alias for asset: ${asset.assetName} ***`);
//         describedAssets.push({
//             assetId: asset.assetId,
//             assetModelId: asset.assetModelId,
//             assetName: asset.assetName,
//             assetProperties: asset.assetProperties.map((item) => {
//                 return {
//                     dataType: item.dataType,
//                     name: item.name,
//                     id: item.id,
//                     tagPath: measurements.find(measurement => measurement.name === item.name).tagPath,
//                     section: measurements.find(measurement => measurement.name === item.name).section

//                 }
//             })
//         });
//     }
//     fs.writeFileSync(`${PLANT_NAME}_describedAssets.json`, JSON.stringify(describedAssets, null, 2));
// }