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



var tableToUpdateWorkBook = XLSX.readFile ('./TableToUpdate.xlsx');
var tableToUpdatexlData = XLSX.utils.sheet_to_json (
  tableToUpdateWorkBook.Sheets['Table']
);
tableToUpdatexlData.map (async tableData => {
  const params = {
    TableName: tableData['TableName'],
    //TableName : "KUCW-Query-Tag-Master",
    //FilterExpression: 'attribute_not_exists(#name)',
    FilterExpression : '#name = :null',
    ExpressionAttributeValues: {
      ':null': null
    },
    ExpressionAttributeNames: {
      '#name' : 'Tag Name'
    }
  };

  //console.log ('Param to update..', params);
  try {
    await docClient.scan(params,(err, data) => {
      if(err){
        console.log(err)
      }else{
        //console.log(data.Count)
      }
    });
    //console.log (tableData['TableName']  ,data.Count);
  } catch (error) {
    //console.log(error)
  }
});



/************************************************************ */

/*
const rs = fs.createReadStream (CSV_FILENAME);
const parser = csvparser.parse (
  {
    columns: true,
    delimiter: ',',
  },
  function (err, data) {
    var split_arrays = [], size = 25;
    while (data.length > 0) {
      split_arrays.push (data.splice (0, size));
    }
    data_imported = false;
    chunk_no = 1;

    async.each (
      split_arrays,
      async function (item_data, callback) {
        const params = {
          RequestItems: {},
        };
        params.RequestItems[DYNAMODB_TABLENAME] = [];
        item_data.forEach (item => {
          for (key of Object.keys (item)) {
            // An AttributeValue may not contain an empty string
            if (item[key] === '') delete item[key];
          }

          params.RequestItems[DYNAMODB_TABLENAME].push ({
            PutRequest: {
              Item: {
                UniqueId: uuid(),
                ...item,
              },
            },
          });
        });

        await timeout(2000);
        docClient.batchWrite (params, function (err, res, cap) {
          console.log ('done going next');
          if (err == null) {
            console.log ('Success chunk #' + chunk_no);
            data_imported = true;
          } else {
            console.log (err);
            console.log ('Fail chunk #' + chunk_no);
            data_imported = false;
          }
          chunk_no++;
          //callback ();
        });
        
        function test () { console.log("Witing for next execution...")}
      },
      function () {
        // run after loops
        console.log ('all data imported....');
      }
    );
  }
);
rs.pipe (parser);
*/


