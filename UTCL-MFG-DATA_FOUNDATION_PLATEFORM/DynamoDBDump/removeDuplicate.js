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

const deleteDynamodbTable = async (tableName, keyVal, sortKeyVal, i) => {
  const params = {
    TableName: tableName,
    Key: {
      Section: keyVal,
      'Tag UID': sortKeyVal,
    },
  };

  console.log ('Param to update..', i, params);

  await docClient.delete (params).promise ();
};

const DUPLICATE_EXCEL_FILENAME = './KCW-Line2-Duplicate-Remove.xlsx';
var workbook = XLSX.readFile (DUPLICATE_EXCEL_FILENAME);
var xlData = XLSX.utils.sheet_to_json (workbook.Sheets['Duplicates']);

var tableToUpdateWorkBook = XLSX.readFile ('./TableToUpdate.xlsx');
var tableToUpdatexlData = XLSX.utils.sheet_to_json (
  tableToUpdateWorkBook.Sheets['Table']
);
tableToUpdatexlData.map (async tableData => {
let plantCode = tableData['TableName'].split ('_')[0];
//let plantCode = 'KCW'
  let i=0;
  xlData.map (async data => {
    if (data['Plant Code'].trim() == plantCode && data['Include'].trim () == 'Missing') {
      i++
      deleteDynamodbTable (
        tableData['TableName'],
        //"KCW_L2_Master",
        data['SECTION'],
        data['CDH Tag'],i
      ).catch (async err => {
        console.log ('Error Found', err);
      });
    }
  });
});