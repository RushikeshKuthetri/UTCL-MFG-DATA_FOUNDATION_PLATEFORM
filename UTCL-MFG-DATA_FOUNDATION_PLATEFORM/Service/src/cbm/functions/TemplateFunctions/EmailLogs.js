var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
const { getScan } = require("../../../helpers/dynamoDB");
// var connection = require("../../db/connectionsql")

EmailLogs = (req) => {
  var response;
  let { pageNo } = req.body;
  let startInd, endInd;
  startInd = (pageNo - 1) * 100 + 1;
  endInd = pageNo * 100;

  return new Promise(async (resolve, reject) => {
    try {
      if (pageNo === 1) {
        var setData = await client.execute(
          "utcprmfgadxiotpd-db",
          `.set-or-replace  stored_query_result Fn_CBM_UserWise_Mail_Logs_StoredQuery with (previewCount = 10) <|
          UserWise_Mail_Logs()`
        );
      }
      var count = await client.execute(
        "utcprmfgadxiotpd-db",
        `UserWise_Mail_Logs_Count()`
      );

      // console.log(JSON.parse(JSON.stringify(count.primaryResults[0])).data);

      var data = await client.execute(
        "utcprmfgadxiotpd-db",
        `stored_query_result('Fn_CBM_UserWise_Mail_Logs_StoredQuery')
            | where RowNumber between (${startInd} .. ${endInd})`
      );

      data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;

      if (data.length > 0) {
        data.map((val) => {
          val.ToRecipients = val.ToRecipients.replaceAll("@@@", ",");
        });
        data.unshift(
          JSON.parse(JSON.stringify(count.primaryResults[0])).data[0]
        );
        response = responseObject(data, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
      resolve(response);
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

EmailLogsNew = (req) => {
  var response;
  let { pageNo } = req.body;
  let startInd, endInd;
  startInd = (pageNo - 1) * 100 + 1;
  endInd = pageNo * 100;

  return new Promise(async (resolve, reject) => {
    try {
      // if (pageNo === 1) {
      //   var setData = await client.execute(
      //     "utcprmfgadxiotpd-db",
      //     `.set-or-replace  stored_query_result Fn_CBM_UserWise_Mail_Logs_StoredQuery with (previewCount = 10) <|
      //     UserWise_Mail_Logs()`
      //   );
      // }
      // var count = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `UserWise_Mail_Logs_Count()`
      // );

      const countParams = {
        TableName: "CBM_Mail_Logs",
        Select: "COUNT",
      };
      const count = await getScan(countParams);

      // console.log(JSON.parse(JSON.stringify(count.primaryResults[0])).data);

      // var data = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `stored_query_result('Fn_CBM_UserWise_Mail_Logs_StoredQuery')
      //       | where RowNumber between (${startInd} .. ${endInd})`
      // );

      // data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;

      const params = {
        TableName: "CBM_Mail_Logs",
        ScanIndexForward: false,
        Limit: endInd,
      };

      let tagResult = await getScan(params);
      let data = [];
      if (tagResult?.Items?.length) {
        const lastHundredRecords = tagResult.Items.slice(-100);
        data = lastHundredRecords.map((newItem, index) => {
          const UserId = newItem?.Subject?.S
            ? Object.values(newItem.UserId)[0]
            : null;
          const TemplateName = newItem?.TemplateName?.S
            ? Object.values(newItem.TemplateName)[0]
            : null;
          const UseCase = newItem?.Subject?.S
            ? Object.values(newItem.UseCase)[0]
            : null;
          const ToRecipients = newItem?.Subject?.S
            ? Object.values(newItem.ToRecipients)[0]
            : null;
          const FromFunctionName = newItem?.Subject?.S
            ? Object.values(newItem.FromFunctionName)[0]
            : null;
          const Subject = newItem?.Subject?.S
            ? Object.values(newItem.Subject)[0]
            : null;
          const Timestamp = newItem?.Timestamp?.S
            ? Object.values(newItem.Timestamp)[0]
            : null;
          return {
            UserId,
            TemplateName,
            UseCase,
            ToRecipients,
            FromFunctionName,
            Subject,
            Timestamp,
            RowNumber: index + 1,
          };
        });
      }

      if (data.length > 0) {
        data.map((val) => {
          val.ToRecipients = val.ToRecipients.replaceAll("@@@", ",");
        });
        // data.unshift(
        //   JSON.parse(JSON.stringify(count.primaryResults[0])).data[0]
        // );
        data.unshift({ Count: count?.Count || 0 });
        response = responseObject(data, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
      resolve(response);
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = EmailLogsNew;
