const fs = require ('fs');
const csvparser = require ('csv-parse');
const async = require ('async');
const uuid = require ('uuidv4');
const AWS = require ('aws-sdk');
const XLSX = require ('xlsx');
// --- start user config ---
const DYNAMODB_REGION = 'ap-south-1';

// --- end user config ---
const docClient = new AWS.DynamoDB.DocumentClient ({
  region: DYNAMODB_REGION,
});

const PLANT_CSV_FILENAME = './VCW/VCW_BLANK.xlsx';
var workbook = XLSX.readFile (PLANT_CSV_FILENAME);
var xlData = XLSX.utils.sheet_to_json (workbook.Sheets['VCW']);
var xlDataNew = XLSX.utils.sheet_to_json (workbook.Sheets['BLANK']);
xlDataNew.map (async data => {
  const found = xlData.find (x => x['Tag UID'] === data['Tag UID']);
  let UpdateExpression = 'set ';
  let ExpressionAttributeNames = {};
  let ExpressionAttributeValues = {};
  let i = 0;
  let j= 0;
  for (var key of Object.keys (found)) {
   
    if(key == 'Section' || key == 'Tag UID'){
      
    }else{
      let varName = `var${i++}`
      let name = `name${j++}`
      UpdateExpression += ` #${name} = :${varName} ,`;
      ExpressionAttributeNames['#' + name] = key;
      ExpressionAttributeValues[':'+varName] = found[key];
    }
    
  }
  console.log("-------------------------------------------")
  UpdateExpression = UpdateExpression.slice (0, -1);
  //console.log(ExpressionAttributeNames)
  //console.log(UpdateExpression)
  //console.log(ExpressionAttributeValues)
  const params = {
    TableName: 'VCW_TagMaster',
    Key: {
      Section: data['Section'],
      'Tag UID': data['Tag UID'],
    },
    UpdateExpression: UpdateExpression,
    ExpressionAttributeNames: ExpressionAttributeNames,
    ExpressionAttributeValues: ExpressionAttributeValues,
  };
  console.log(params)
  return docClient.update (params).promise ().then (result => {
    return result;
  });
});
