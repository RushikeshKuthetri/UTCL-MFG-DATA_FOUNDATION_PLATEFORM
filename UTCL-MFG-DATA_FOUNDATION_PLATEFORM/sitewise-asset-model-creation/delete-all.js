const { IoTSiteWiseClient } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
const { ListAssetModelsCommand, DisassociateAssetsCommand } = require("@aws-sdk/client-iotsitewise");
const client = new IoTSiteWiseClient({ region: "ap-south-1" });

async function listAllAssetModels() {
    try {
        const input = { // ListAssetModelsRequest
            assetModelTypes: [ // ListAssetModelsTypeFilter
              "ASSET_MODEL",
            ],
            maxResults: 60,
          };
        const command = new ListAssetModelsCommand(input);
        const response = await client.send(command);
        return response.assetModelSummaries;
    } catch (error) {
        console.error("Error listing asset models:", error);
    }
}

async function listAllAsset() {
    try {
        const input = { // ListAssetsRequest
            assetModelId: "string"
        };
        const command = new ListAssetsCommand(input);
        const response = await client.send(command);
        return response.assetSummaries;
    } catch (error) {
        console.error("Error listing asset:", error);
    }
}

async function main() {
    let assetModelSummaries = await listAllAssetModels();
    console.log("Total Asset models to delete:", assetModelSummaries.length);
    let assets = await listAllAsset();
    console.log("Total Assets to delete:", assets.length);

    // disassociate assets
    for (let index = 0; index < assets.length; index++) {
        const asset = assets[index];
        const input = { // DisassociateAssetsRequest
            assetId: asset.id, //
            hierarchyId: asset.hierarchyId,
            childAssetId: "STRING_VALUE", // required
            clientToken: "STRING_VALUE",
        };
        const disassociateAssetsCommand = new DisassociateAssetsCommand({ assetId: asset.id });
        const disassociateAssetsResponse = await client.send(disassociateAssetsCommand);
        console.log(`Asset with name ${asset.name} disassociated`);
    }
}

main();