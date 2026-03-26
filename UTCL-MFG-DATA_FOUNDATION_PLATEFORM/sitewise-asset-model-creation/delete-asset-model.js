const fs = require('fs');
const { IoTSiteWiseClient, ListAssetModelsCommand, DeleteAssetModelCommand, ListAssetsCommand, DeleteAssetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
const client = new IoTSiteWiseClient({ region: "ap-south-1" });


async function deleteAll(PLANT_NAME) {
  const describedAssets = JSON.parse(fs.readFileSync(`creation/${PLANT_NAME}_describedAssets.json`));

  console.log("Deleting all created assets and models for : ", PLANT_NAME, describedAssets.length);

  const deleteAssetPromises = describedAssets.map(asset =>
    client.send(new DeleteAssetCommand({ assetId: asset.assetId }))
  );

  try {
    await Promise.all(deleteAssetPromises);
    console.log("All assets deleted successfully");
  } catch (deleteError) {
    console.error("Failed to delete some assets", deleteError);
  }
  console.log("Waiting for 1 minute before deleting models");
  await new Promise(resolve => setTimeout(resolve, 1000 * 60));
  console.log("Started deleting models");

  const deleteAssetModelPromises = describedAssets.map(asset =>
    client.send(new DeleteAssetModelCommand({ assetModelId: asset.assetModelId }))
  );

  try {
    await Promise.all(deleteAssetModelPromises);
    console.log("All models deleted successfully");
  } catch (deleteError) {
    console.error("Failed to delete some assets", deleteError);
  }

}

async function run() {
  let plants = [
    // "APCW", 
    // "BJCW",
    // "NMGD",
    // "GCW",
    // "RC",
    // "KACW",
    // 'RJCW',
    // "RWCW",
    // "DHCW",
    // "AC",
    "HCW",
    // "NDCW",
    // "WKCW"


  ];
  for (let plant of plants) {
    await deleteAll(plant);
  }
}

run();