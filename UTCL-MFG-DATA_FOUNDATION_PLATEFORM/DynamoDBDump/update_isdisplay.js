const fs = require ('fs');
const csvparser = require ('csv-parse');
const async = require ('async');
const uuid = require ('uuidv4');
const AWS = require ('aws-sdk');
const XLSX = require ('xlsx');
// --- start user config ---

const AWS_CREDENTIALS_PROFILE = '311141527939_AWSAdministratorAccess';
const CSV_FILENAME = './UTCL-TagMaster.csv';
const DYNAMODB_REGION = 'ap-south-1';
//const DYNAMODB_TABLENAME = 'HCW_TagMaster';
const EXCEL_FILENAME = './tags 4.xlsx';

// --- end user config ---

const credentials = new AWS.SharedIniFileCredentials ({
  profile: AWS_CREDENTIALS_PROFILE,
});
//AWS.config.credentials = credentials;
const docClient = new AWS.DynamoDB.DocumentClient ({
  region: DYNAMODB_REGION,
});

const updateDyanamodbTable = async (
    keyVal,
    sortKeyVal,
    attr,
    tableName,
    displayFlag
  ) => {
    const params = {
      TableName: tableName,
      Key: {
        Section: keyVal,
        'Tag UID': sortKeyVal,
      },
      UpdateExpression: `set ${attr} = :isDisplay`,
      //ConditionExpression: 'attribute_exists(Plant)',
      ExpressionAttributeValues: {
        ':isDisplay': displayFlag,
      },
    };
  
    console.log ('Param to update..', params);
  
    await docClient.update (params).promise ();
  };
  
  //Run for single sheet from file
  var workbook = XLSX.readFile (EXCEL_FILENAME);
  var sheet_name_list = workbook.SheetNames;
  
  var xlData = XLSX.utils.sheet_to_json (workbook.Sheets['SWCW-VasavdattaTags']);
  xlData.map (async data => {
    //console.log(data)
    if (data['Section'] != undefined && data['TagUID'] != undefined) {
      await updateDyanamodbTable (
        data['Section'],
        data['TagUID'],
        'IsDisplay',
        'SWCW_TagMaster',
        true
      ).catch (async err => {});
    }
  });

  //Run for all sheets from file
/*sheet_name_list.map (async sheetName => {
  if (sheetName.includes ('-')) {
    console.log ('Running for sheet........', sheetName);
    let plantCode = sheetName.split ('-')[0];
    let tableName = plantCode + '_' + 'TagMaster';
    var xlData = XLSX.utils.sheet_to_json (workbook.Sheets[sheetName]);
    xlData.map (async data => {
      if (data['Section'] != undefined || data['TagUID'] != undefined)
        await updateDyanamodbTable (
          data['Section'],
          data['TagUID'],
          'IsDisplay',
          tableName,
          true
        ).catch (async err => {
          let csv =
            plantCode + ',' + data['Section'] + ',' + data['TagUID'] + '\r\n';
          fs.appendFile ('file.csv', csv, function (err) {
            if (err) throw err;
            console.log ('The "data to append" was appended to file!');
          });
          console.log (
            'No found any entry.... ',
            plantCode + ',' + data['Section'] + ',' + data['TagUID']
          );
        });
    });
  }
});
*/
