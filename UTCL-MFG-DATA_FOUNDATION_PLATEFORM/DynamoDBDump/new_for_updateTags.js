const fs = require('fs');
const csvparser = require('csv-parse');
const async = require('async');
const uuid = require('uuidv4');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const XLSX = require('xlsx');
// --- start user config ---
const DYNAMODB_REGION = 'ap-south-1';
 
// --- end user config ---
const ddbClient = new DynamoDBClient({ region: DYNAMODB_REGION });
const docClient = DynamoDBDocumentClient.from(ddbClient);
//console.log('hello1')
const PLANT_CSV_FILENAME = './Tags/RC_TagMaster.xlsx';
var workbook = XLSX.readFile(PLANT_CSV_FILENAME);
//console.log('hello2')
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1']);
//console.log('hello22',xlData)
//var xlDataNew = XLSX.utils.sheet_to_json (workbook.Sheets['BLANK']);
xlData.map(async data => {
  //const found = xlData.find (x => x['Tag UID'] === data['Tag UID']);
  let UpdateExpression = 'set ';
  let ExpressionAttributeNames = {};
  let ExpressionAttributeValues = {};
  let i = 0;
  let j = 0;
  for (var key of Object.keys(data)) {
 
    if (key == 'Section' || key == 'Tag UID') {
 
    } else {
      let varName = `var${i++}`
      let name = `name${j++}`
      UpdateExpression += ` #${name} = :${varName} ,`;
      ExpressionAttributeNames['#' + name] = key;
      ExpressionAttributeValues[':' + varName] = data[key];
    }
 
  }
  //console.log('hello3')
  console.log("-------------------------------------------")
  UpdateExpression = UpdateExpression.slice(0, -1);
  const params = {
    TableName: 'BRCW_TagMaster',
    Key: {
      Section: data['Section'],
      'Tag UID': data['Tag UID'],
    },
    UpdateExpression: UpdateExpression,
    ExpressionAttributeNames: ExpressionAttributeNames,
    ExpressionAttributeValues: ExpressionAttributeValues,
  };
  console.log(params)
  return docClient.send(new UpdateCommand(params)).then(result => {
    return result;
  });
});
 