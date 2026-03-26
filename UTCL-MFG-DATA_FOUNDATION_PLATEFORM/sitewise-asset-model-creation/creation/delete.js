const { IoTSiteWiseClient, DeleteAssetModelCommand, DeleteAssetCommand
} = require("@aws-sdk/client-iotsitewise");
const client = new IoTSiteWiseClient({ region: "ap-south-1" }); // ap-south-1 = mumbai
const fs = require('fs');

const PLANT_NAME = "";

async function run() {
    try {
        let deletedAssetCount = 0;
        let deletedAssetModelCount = 0;
        const describedAssets = JSON.parse(fs.readFileSync(`${PLANT_NAME}_describedAssets.json`));
        for (let i = 0; i < describedAssets.length; i++) {
            const asset = describedAssets[i];
            const assetId = asset.assetId;
            const assetName = asset.assetName;
            console.log(`Deleting Asset: ${assetName} (${assetId})`);
            const deleteAssetCommand = new DeleteAssetCommand({ assetId });
            await client.send(deleteAssetCommand);
            deletedAssetCount++;
        }
        console.log(`Deleted ${deletedAssetCount} assets`);

        // delete asset models
        for (let i = 0; i < describedAssets.length; i++) {
            const asset = describedAssets[i];
            const assetModelId = asset.assetModelId;
            const assetName = asset.assetName;
            console.log(`Deleting Asset Model: ${assetName} (${assetModelId})`);
            const deleteAssetModelCommand = new DeleteAssetModelCommand({ assetModelId });
            await client.send(deleteAssetModelCommand);
            deletedAssetModelCount++;
        }
        console.log(`Deleted ${deletedAssetModelCount} asset models`);


    } catch (error) {
        console.error("Error in main");
        console.error(error);
    }
}

// run();
