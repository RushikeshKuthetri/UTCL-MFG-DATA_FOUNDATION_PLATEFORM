var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
const { getQueryWithoutPagination } = require("../../../helpers/dynamoDB");
const { getAssetPropertyValue } = require("../../../helpers/iotSitewise");
// var connection = require("../../db/connectionsql")

getCycloneDataEff = (req) => {
  var response;
  let { plantName, parameters } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      let tagList = [];
      // console.log(parameters,"ppppppppppppppp")
      Object.keys(parameters).map((type) => {
        // console.log(type,"ytttt")
        Object.keys(parameters[type]).map((eq) => {
          // console.log(parameters[type][eq].T1,parameters[type][eq].T2)
          // console.log('Fn_cyclone_tagsAvg(' + plantName+',',parameters[type][eq].T1+','+parameters[type][eq].T2+');')
          tagList.push(parameters[type][eq].T1);
          tagList.push(parameters[type][eq].T2);
          // let tempQ =`Fn_cyclone_tagsAvg('${plantName}','${parameters[type][eq].T1}','${parameters[type][eq].T2}');`
          // ExeQuery = ExeQuery + tempQ
        });
      });
      // console.log(ExeQuery, "eeeeeeeeeeeeeeeeee")
      let ExeQuery = `Fn_cyclone_tagsAvg_latest('${plantName}','${tagList.join(
        ","
      )}')`;
      var data = await client.execute("utcprmfgadxiotpd-db", ExeQuery);

      data = JSON.parse(JSON.stringify(data.primaryResults[0])).data;
      let index = 0;
      let dataObj = {};
      data.forEach((val) => {
        dataObj[val[["Tag UID"]]] = val;
      });

      // if (Object.keys(data).length > 0) {
      Object.keys(parameters).map((type) => {
        // console.log(type,"ytttt")
        Object.keys(parameters[type]).map((eq) => {
          // console.log(dataObj[parameters[type][eq]?.T1],"typppppppppppppp")
          parameters[type][eq].T1val = dataObj[parameters[type][eq]?.T1]?.Avg;
          parameters[type][eq].T1TimeStamp =
            dataObj[parameters[type][eq]?.T1]?.latest;
          parameters[type][eq].T2val = dataObj[parameters[type][eq]?.T2]?.Avg;
          parameters[type][eq].T2TimeStamp =
            dataObj[parameters[type][eq]?.T2]?.latest;
        });
      });
      // console.log(parameters,"ppppppppppppppppppppppppppp")
      response = responseObject(parameters, false, "Success", 200);
      resolve(response);
      // } else {
      //   response = responseObject("No Records Found", true, "Failure", 200);
      //   reject(response);
      // }
      resolve(response);
    } catch (error) {
      console.log(error.message);
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

getCycloneDataEffNew = (req) => {
  var response;
  let { plantName, parameters } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      let tagList = [];
      let tagUidList = [];
      Object.keys(parameters).map((type) => {
        Object.keys(parameters[type]).map((eq) => {
          tagList.push(parameters[type][eq].T1);
          tagList.push(parameters[type][eq].T2);
        });
      });
      // let ExeQuery = `Fn_cyclone_tagsAvg_latest('${plantName}','${tagList.join(",")}')`
      // var data = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   ExeQuery
      // );

      // data= JSON.parse(JSON.stringify(data.primaryResults[0])).data

      if (tagList?.length) {
        tagUidList = tagList.map((uid) => ({ S: uid }));
      }

      // const queryParams = {
      //   TableName: `${plantName}_TagMaster`,
      //   FilterExpression: tagUidList.map((_, index) => `contains(#tagUid, :tagUidValue${index})`).join(" OR "), // Filtering on Tag UID column
      //   ExpressionAttributeNames: {
      //     "#tagUid": "Tag UID",
      //   },
      //   ExpressionAttributeValues: tagUidList.reduce((acc, uid, index) => {
      //     acc[`:tagUidValue${index}`] = uid;
      //     return acc;
      //   }, {}),
      // };

      // const tagResult = await getScan(queryParams);
      let data = [];

      for (let item of tagList) {
        const tagParams = {
          TableName: `${plantName}_TagMaster`,
          IndexName: "Tag-UID-index",
          KeyConditionExpression: "#tagUID = :tagUid",
          ExpressionAttributeNames: {
            "#tagUID": "Tag UID",
          },
          ExpressionAttributeValues: {
            ":tagUid": { S: item },
          },
        };
        const tagResponse = await getQueryWithoutPagination(tagParams);
        if (tagResponse?.Items?.length) {
          let tempData = tagResponse.Items.map((itemNew) => {
            const TagUID = Object.values(itemNew["Tag UID"])[0];
            const TagName = Object.values(itemNew["Tag Name"])[0];
            const assetId = itemNew?.AssetID?.S
              ? Object.values(itemNew.AssetID)[0]
              : null;
            const propertyId = itemNew?.PropertyID?.S
              ? Object.values(itemNew.PropertyID)[0]
              : null;
            return {
              "Tag UID": TagUID,
              TagName,
              assetId,
              propertyId,
            };
          });
          data = [...data, ...tempData];
        }
      }

      const result = await getAssetPropertyValue(data);
      const newResult = data.map((item, index) => {
        const obj = result.find(
          (findItem) => findItem.entryId === `${index + 1}`
        );
        let value = null;
        let timeStamp = null;
        if (obj?.assetPropertyValue?.timestamp?.timeInSeconds) {
          timeStamp = new Date(
            obj.assetPropertyValue.timestamp.timeInSeconds * 1000
          );
          // utc to IST
          timeStamp.setHours(timeStamp.getHours() + 5);
          timeStamp.setMinutes(timeStamp.getMinutes() + 30);
        }
        const now = new Date();
        now.setHours(now.getHours() + 5);
        now.setMinutes(now.getMinutes() + 30);
        const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
        if (obj?.assetPropertyValue?.value && timeStamp > oneMinuteAgo && timeStamp <= now) {
          value = Object.values(obj.assetPropertyValue.value)[0];
        }
        return {
          ...item,
          value,
          timeStamp,
        };
      });

      let dataObj = {};
      newResult.forEach((val) => {
        dataObj[val[["Tag UID"]]] = val;
      });

      Object.keys(parameters).map((type) => {
        Object.keys(parameters[type]).map((eq) => {
          parameters[type][eq].T1val = dataObj[parameters[type][eq]?.T1]?.value;
          parameters[type][eq].T1TimeStamp =
            dataObj[parameters[type][eq]?.T1]?.timeStamp;
          parameters[type][eq].T2val = dataObj[parameters[type][eq]?.T2]?.value;
          parameters[type][eq].T2TimeStamp =
            dataObj[parameters[type][eq]?.T2]?.timeStamp;
        });
      });
      response = responseObject(parameters, false, "Success", 200);
      resolve(response);
      // } else {
      //   response = responseObject("No Records Found", true, "Failure", 200);
      //   reject(response);
      // }
      resolve(response);
    } catch (error) {
      console.log(error.message);
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = getCycloneDataEffNew;
