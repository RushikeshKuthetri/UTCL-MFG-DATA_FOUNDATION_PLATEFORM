var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
// var connection = require("../../db/connectionsql")

getCycloneDataEffSocket = (data) => {
  var response;
  let { plantName, parameters } = data;

  return new Promise(async (resolve, reject) => {
    try {
    let tagList =[]
      // console.log(parameters,"ppppppppppppppp")
      Object.keys(parameters).map((type)=>{
        // console.log(type,"ytttt")
        Object.keys(parameters[type]).map((eq)=>{
          // console.log(parameters[type][eq].T1,parameters[type][eq].T2)
          // console.log('Fn_cyclone_tagsAvg(' + plantName+',',parameters[type][eq].T1+','+parameters[type][eq].T2+');')
          tagList.push(parameters[type][eq].T1)
          tagList.push(parameters[type][eq].T2)
          // let tempQ =`Fn_cyclone_tagsAvg('${plantName}','${parameters[type][eq].T1}','${parameters[type][eq].T2}');`
          // ExeQuery = ExeQuery + tempQ
        })
      })
      // console.log(ExeQuery, "eeeeeeeeeeeeeeeeee")
      let ExeQuery = `Fn_cyclone_tagsAvg_latest('${plantName}','${tagList.join(",")}')`
      var data = await client.execute(
        "utcprmfgadxiotpd-db",
        ExeQuery
      );

      data= JSON.parse(JSON.stringify(data.primaryResults[0])).data
      let index = 0
      let dataObj = {}
      data.forEach((val) => {
        dataObj[val[["Tag UID"]]] = val
      })
      
      // if (Object.keys(data).length > 0) {
        Object.keys(parameters).map((type)=>{
          // console.log(type,"ytttt")
          Object.keys(parameters[type]).map((eq)=>{
            // console.log(dataObj[parameters[type][eq]?.T1],"typppppppppppppp")
                parameters[type][eq].T1val = dataObj[parameters[type][eq]?.T1]?.Avg
                parameters[type][eq].T1TimeStamp = dataObj[parameters[type][eq]?.T1]?.latest
                parameters[type][eq].T2val = dataObj[parameters[type][eq]?.T2]?.Avg
                parameters[type][eq].T2TimeStamp = dataObj[parameters[type][eq]?.T2]?.latest
             
          })
        })
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

module.exports = getCycloneDataEffSocket;
