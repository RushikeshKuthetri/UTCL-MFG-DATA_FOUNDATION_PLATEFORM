var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
// var connection = require("../../db/connectionsql")

reportData = (req) => {
  var response;
  let { Tags, startDate, endDate, interval, plantName, pageNo } = req.body;

  let startInd, endInd;
  startInd = (pageNo - 1) * 100 + 1;
  endInd = pageNo * 100;
  // console.log(
  //   "hiii",
  //   Tags,
  //   startDate,
  //   endDate,
  //   interval,
  //   plantName,
  //   pageNo,
  //   startInd,
  //   endInd
  // );

  return new Promise(async (resolve, reject) => {
    try {
      if (pageNo === 1) {
        var setData = await client.execute(
          "utcprmfgadxiotpd-db",
          `.set-or-replace  stored_query_result Fn_CBM_Pagination_sq  with (previewCount = 1000) <|
          set truncationmaxsize =900000000;
          Fn_CBM_UidWiseAvg_DataPagination('${Tags}','${startDate}','${endDate}','${interval}','${plantName}')`
        );
      }
      var count = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_CBM_UidWiseAvg_DataPagination_Count('${Tags}','${startDate}','${endDate}','${interval}','${plantName}')`
      );
      // console.log(JSON.parse(JSON.stringify(count.primaryResults[0])).data);

      var data = await client.execute(
        "utcprmfgadxiotpd-db",
        `stored_query_result("Fn_CBM_Pagination_sq")
        | order by TimeStamp asc
        | serialize
        | extend Row_Number=row_number()
        | where Row_Number between(${startInd} .. ${endInd})`
      );

      data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      // console.log(data, "data");
      if (data.length > 0) {
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
      console.log(error.message);
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = reportData;
