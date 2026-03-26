var connection = require("../../../db/connectionsql");

getCloseLoopMasterData = (req) => {
  var responseObject = {};
  let paramaters = `@plant=?, @mill=?`;

  let replacementArray = [
        req.body.Plant_Code,
        req.body.Mill
  ];
  var Query = " exec [dbo].[SP_kcm_closeloopmaster_getData]" + paramaters;

  return new Promise((resolve, reject) => {
    var ValueError = false;
    replacementArray.map((val) => {
      if (val === undefined) {
        responseObject.result = { result: "Value Error ! incorrect Payload !" };
        responseObject.error = true;
        responseObject.status = "Failure";
        ValueError = true;
      }
    });
    if (ValueError) {
      reject(responseObject);
    } else {
      connection
        .query(Query, {
          raw: true,
          replacements: replacementArray,
          type: connection.QueryTypes.SELECT,
          logging: console.log,
        })
        .then((res) => {
          // console.log(res, "res");
          let resultObj = {}
          res.forEach((val)=>{
             
            if (!resultObj[val.plant+"-"+val.mill]){
              resultObj[val.plant+"-"+val.mill] = {result:[]}
            }
            resultObj[val.plant+"-"+val.mill].result.push( val)
          })
          resultObj = Object.values(resultObj);
          resultObj.forEach((val)=>{
            val.result.sort((a,b)=> {
              if (a.parameters < b.parameters)
              return -1;
           if (a.parameters > b.parameters)
              return 1;
              return 0;
            } )
          })

          if (res.length > 0) {
            responseObject.result = Object.values(resultObj);
            responseObject.error = false;
            responseObject.status = "Success";
          } else {
            responseObject.result = {
              result: "No Record Found",
            };
            responseObject.error = true;
            responseObject.status = "Failure";
          }
          resolve(responseObject);
        })
        .catch((Error) => {
          responseObject.result = { result: Error.message };
          responseObject.error = true;
          responseObject.status = "Failure";
          reject(responseObject);
        });
    }
  });
};

module.exports = getCloseLoopMasterData;
