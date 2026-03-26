const { IoTSiteWiseClient, CreateAssetModelCommand, CreateAssetCommand, DescribeAssetModelCommand, DescribeAssetCommand, AssociateAssetsCommand, UpdateAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
const xlsx = require('xlsx');
const client = new IoTSiteWiseClient({ region: "ap-south-1" });
// const workbook = xlsx.readFile('KuCW_PlantVariable_UTCL_KukurdiCW_11Jan2025_Rev3sentUpdated (1).xlsx');
const workbook = xlsx.readFile('Copy of HCW12_PlantVariable_UTCL_HCW_L1L2_17Feb2025_sent_Rev0.xlsx');
const sheetName = workbook.SheetNames[0]; 
const sheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);

// join the name of colum "Equiment Group" and "Equipment Type" for column "Equipment Type"
// skip the first row as it contains the column names
// jsonData.shift();
jsonData.forEach(item => {
    item['Equipment Type'] = `${item['EquipmentGroup']}_${item['Equipment Type']}`;
    // item['Equipment Type'] = `${item['BusinessUnit']}_${item['Cluster Code']}_${item['Plant Code']}_${item['Plant SAP Code']}_${item['Line Code']}_${item['SECTION']}_${item['EquipmentGroup']}_${item['Equipment Type']}`;
    // item['EquipmentGroup'] = `${item['BusinessUnit']}_${item['Cluster Code']}_${item['Plant Code']}_${item['Plant SAP Code']}_${item['Line Code']}_${item['SECTION']}_${item['EquipmentGroup']}`;
    // item['SECTION'] = `${item['BusinessUnit']}_${item['Cluster Code']}_${item['Plant Code']}_${item['Plant SAP Code']}_${item['Line Code']}_${item['SECTION']}`;
    // item['Line Code'] = `${item['BusinessUnit']}_${item['Cluster Code']}_${item['Plant Code']}_${item['Plant SAP Code']}_${item['Line Code']}`;
    // item['Plant SAP Code'] = `${item['BusinessUnit']}_${item['Cluster Code']}_${item['Plant Code']}_${item['Plant SAP Code']}`;
    // item['Plant Code'] = `${item['BusinessUnit']}_${item['Cluster Code']}_${item['Plant Code']}`;
    // item['Cluster Code'] = `${item['BusinessUnit']}_${item['Cluster Code']}`;
  
});

async function fetchAndCreateLowLevelAssetModels() {
  let modelsCreated = [];
  let paramsList = [];

  const columnNames = Object.keys(jsonData[0]).join(', ');
  console.log('Column Names:', columnNames);

  const equipmentTypes = [...new Set(jsonData.map(item => item['Equipment Type']))];
  console.log('Unique Equipment Types:', equipmentTypes.length);
  return

  // FOR TESTING: Limit the number of equipment types to 10 for now
  const limitedEquipmentTypes = equipmentTypes.slice(0, 10);

  for (const type of limitedEquipmentTypes) {
    const measurements = jsonData
      .filter(item => item['Equipment Type'] === type)
      .map(item => ({
        name: item['CDH Tag'],
        dataType: item['UoM'] === 'State' ? 'INTEGER' : 'DOUBLE',
        unit: item['UoM'],
        type: {
          measurement: {}
        }
      }));

    const params = {
      assetModelName: type,
      assetModelProperties: measurements,
      tags: {
        "map-migrated": "migBUVKJ1ONSK"
      }
    };
    if (measurements.length > 5000) {
      console.error(`Too many measurements (${measurements.length}) for asset model ${type}. Exiting script.`);
      process.exit(1);
    }
    paramsList.push(params);
  }
  for (const params of paramsList) {
    try {
      console.log(`Creating asset model for ${params.assetModelName} which has ${measurements.length} measurements`);
      const command = new CreateAssetModelCommand(params);
      const response = await client.send(command);
      response.assetModelName = params.assetModelName;
      // wait for 10 seconds before creating the next model
      // as the model's status is not immediately available as "Active"
      await new Promise(resolve => setTimeout(resolve, 10000));

      modelsCreated.push(response);
    } catch (error) {
      console.error('Error creating asset model:', error);
    }
  }
  return modelsCreated;
}

async function createHierarchyAssetModels(modelsCreated, parentModelName) {
  const parentModelParams = {
    assetModelName: parentModelName,
    assetModelHierarchies: modelsCreated.map(model => ({
      name: `${parentModelName} - ${model.assetModelName}`,
      childAssetModelId: model.assetModelId
    })),
    tags: {
      "map-migrated": "migBUVKJ1ONSK"
    }
  };

  try {
    console.log(`Creating parent asset model ${parentModelName} with ${modelsCreated.length} child models`);
    const parentCommand = new CreateAssetModelCommand(parentModelParams);
    const parentResponse = await client.send(parentCommand);
    // wait for 10 seconds before creating the next model
    // as the model's status is not immediately available as "Active"
    await new Promise(resolve => setTimeout(resolve, 10000));

    console.log('Parent Asset Model Created:', parentResponse);

    parentResponse.assetModelName = parentModelName;
    return [parentResponse];
  } catch (error) {
    console.error('Error creating parent asset model:', error);
  }
}

async function createLowLevelAssets(modelsCreated) {
  let assetsCreated = [];
  for (const model of modelsCreated) {
    const assetParams = {
      assetName: model.assetModelName,
      assetModelId: model.assetModelId,
      tags: {
        "map-migrated": "migBUVKJ1ONSK"
      }
    };

    try {
      console.log(`Creating asset for model ${model.assetModelName}`);
      const createAssetCommand = new CreateAssetCommand(assetParams);
      const assetResponse = await client.send(createAssetCommand);
      assetResponse.assetName = assetParams.assetName;
      console.log('Asset Created:', assetResponse.assetName);
      assetsCreated.push(assetResponse);

      // wait for 10 seconds before creating the next asset
      await new Promise(resolve => setTimeout(resolve, 1000 * 10));
    } catch (error) {
      console.error('Error creating asset:', error);
    }
  }
  return assetsCreated;
}

async function createAssets(modelsCreated, assetType) {
  let assetsCreated = [];

  const assetsToCreate = [...new Set(jsonData.map(item => item[assetType]))];
  console.log(`Unique ${assetType} Assets:`, assetsToCreate.length);

  for (const asset of assetsToCreate) {
    const assetParams = {
      assetName: asset,
      assetModelId: modelsCreated[0].assetModelId,
      tags: {
        "map-migrated": "migBUVKJ1ONSK"
      }
    };

    try {
      console.log(`Creating asset for model ${assetParams.assetName}`);
      const createAssetCommand = new CreateAssetCommand(assetParams);
      const assetResponse = await client.send(createAssetCommand);
      assetResponse.assetName = assetParams.assetName;
      console.log('Asset Created:', assetResponse.assetName);
      assetsCreated.push(assetResponse);

      // wait for 10 seconds before creating the next asset
      await new Promise(resolve => setTimeout(resolve, 1000 * 10));
    } catch (error) {
      console.error('Error creating asset:', error);
    }
  }
}

async function describeAssetModel(params) {
  const input = { // DescribeAssetModelRequest
    assetModelId: params.assetModelId, // required
    excludeProperties: true,
    assetModelVersion: "STRING_VALUE",
  };
  const command = new DescribeAssetModelCommand(input);
  const response = await client.send(command);
  return response;
}

async function describeAsset(params) {
  const input = { // DescribeAssetRequest
    assetId: params.assetId, // required
    excludeProperties: false
  };
  const command = new DescribeAssetCommand(input);
  const response = await client.send(command);
  return response;
}

async function associateAssets(modelResponse, parentColumnName, childColumnName, isEquipmentGroupLevel) {
  const assetsCreated = await createAssets(modelResponse, parentColumnName);
  const modelDescription = await describeAssetModel(modelResponse[0]);
  const modelHierarchies = modelDescription.assetModelHierarchies;

  
  for (const asset of assetsCreated) {
    const childAssets = jsonData
      .filter(item => item[parentColumnName] === asset.assetName)
      .map(item => ({
        name: item[childColumnName],
        assetId: AssetsCreated.find(a => a.assetName === item[childColumnName])?.assetId
      }))
      .filter(child => child.assetId);

    const uniqueChildAssets = [...new Map(childAssets.map(item => [item['name'], item])).values()];

    for (const child of uniqueChildAssets) {
      const hierarchy = {};
      if (isEquipmentGroupLevel) {
        hierarchy = modelHierarchies.find(hierarchy => hierarchy.name.includes(asset.assetName));
      } else {
        hierarchy = modelHierarchies.find(hierarchy => hierarchy.name.includes(childColumnName));
      }
      if (hierarchy) {
        const input = {
          assetId: asset.assetId,
          hierarchyId: hierarchy.id,
          childAssetId: child.assetId,
        };
        const command = new AssociateAssetsCommand(input);
        try {
          const response = await client.send(command);
          console.log(`Associated asset ${child.name} with parent ${asset.assetName}`);
        } catch (error) {
          console.error(`Error associating asset ${child.name} with parent ${asset.assetName}:`, error);
        }
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
  }
}


async function updateAssetProperyAlias(params) {
  const input = {
    assetId: params.assetId, // required
    propertyId: params.propertyId, // required
    propertyAlias: params.propertyAlias, // required
  };
  const command = new UpdateAssetPropertyCommand(input);
  const response = await client.send(command);
  return response;

}

async function main() {
  // let fruits = ['apple', 'banana', 'mango', 'orange'];
  // for (const fruit of fruits) {
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   console.log(fruit);
  // }
  // return
  const modelsCreated = await fetchAndCreateLowLevelAssetModels();
  // console.log('Low level Asset Models Created:', modelsCreated.length);
  // if (modelsCreated.length === 0) {
  //   console.error('No low level asset models created. Exiting script.');
  //   process.exit(1);
  // }
  // const EquipmentGroupResponse = await createHierarchyAssetModels(modelsCreated, "Equipment Group Model");
  // const SectionResponse = await createHierarchyAssetModels(EquipmentGroupResponse, "Section Model");
  // const LineCodeResponse = await createHierarchyAssetModels(SectionResponse, "Line Code Model");
  // const PlantSAPCodeResponse = await createHierarchyAssetModels(LineCodeResponse, "Plant SAP Code Model");
  // const PlantCodeResponse = await createHierarchyAssetModels(PlantSAPCodeResponse, "Plant Code Model");
  // const ClusterCodeResponse = await createHierarchyAssetModels(PlantCodeResponse, "Cluster Code Model");
  // const BusinessUnitResponse = await createHierarchyAssetModels(ClusterCodeResponse, "Business Unit Model");

  // // start creating the assets based on the models
  // const AssetsCreated = await createLowLevelAssets(modelsCreated);
  // console.log('Low level Assets Created:', AssetsCreated.length);

  // await associateAssets(EquipmentGroupResponse, 'EquipmentGroup', 'Equipment Type', true);
  // await associateAssets(SectionResponse, 'SECTION', 'EquipmentGroup', false);
  // await associateAssets(LineCodeResponse, 'Line Code', 'SECTION', false);
  // await associateAssets(PlantSAPCodeResponse, 'Plant SAP Code', 'Line Code', false);
  // await associateAssets(PlantCodeResponse, 'Plant Code', 'Plant SAP Code', false);
  // await associateAssets(ClusterCodeResponse, 'Cluster Code', 'Plant Code', false);
  // await associateAssets(BusinessUnitResponse, 'BusinessUnit', 'Cluster Code', false);


  // // update the property alias for each asset
  // for (const asset of AssetsCreated) {
  //   const assetDescription = await describeAsset({ assetId: asset.assetId });
  //   const properties = assetDescription.assetProperties;
  //   for (const property in properties) {
  //     const TagPath = jsonData.filter(item => item['CDH Tag'] === properties[property].name)[0]['Tag Path'];

  //     // replace all dots with backslashes and remove the namespace prefix
  //     const propertyAlias = "";
      

  //     const propertyId = properties[property].id;
  //     const assetId = asset.assetId;
  //     const updatePropertyAlias = await updateAssetProperyAlias({ assetId, propertyId, propertyAlias });
  //     console.log('Property Alias Updated:', updatePropertyAlias);
  //   }
  // }


}


main();