var connection = require("../db/connection");
const cloudToDeviceSendData = require("./cloudToDeviceSendData");
sendCloseLoopValuesFromMaster = () => {
  try {
    var responseObject = {};
    let paramaters = ``;
    let replacementArray = [];
    var Query = " select * from kcm_closeloopmaster" + paramaters;
    var Query1 = "select * from kiln_closeloopmaster" + paramaters;

    return new Promise(async (resolve, reject) => {
      var ValueError = false;
      replacementArray.map((val) => {
        if (val === undefined) {
          responseObject.result = {
            result: "Value Error ! incorrect Payload !",
          };
          responseObject.error = true;
          responseObject.status = "Failure";
          ValueError = true;
        }
      });
      if (ValueError) {
        reject(responseObject);
      } else {
        try {
          let kcmData = await connection.query(Query, {
            raw: true,
            replacements: replacementArray,
            type: connection.QueryTypes.SELECT,
            logging: console.log,
          });
          let kilnData = await connection.query(Query1, {
            raw: true,
            replacements: replacementArray,
            type: connection.QueryTypes.SELECT,
            logging: console.log,
          });

          let kcmDataObj = {};
          kcmData.forEach((val) => {
            if (!kcmDataObj[val.plant + "-" + val.mill]) {
              kcmDataObj[val.plant + "-" + val.mill] = {
                closeLoopFlag: false,
                paramsToSend: [],
              };
            }
            if (val["Close Loop Flag"] && val.parameters === "") {
              kcmDataObj[val.plant + "-" + val.mill].closeLoopFlag =
                val["Close Loop Flag"];
            }
            if (val["Close Loop Flag"] && val.parameters !== "") {
              let sendPayload = {
                value: val["Value"],
                opc_server_url: val.endpointurl,
                node_id: val.nodeid,
              };
              kcmDataObj[val.plant + "-" + val.mill].paramsToSend.push(
                sendPayload
              );
            }
          });
          Object.values(kcmDataObj).forEach(async (v1) => {
            if (v1.closeLoopFlag) {
              v1.paramsToSend.forEach((v2) => {
                cloudToDeviceSendData(v2);
              });
            }
          });
          let kilnDataObj = {};
          kilnData.forEach((val) => {
            if (!kilnDataObj[val.plant + "-" + val.mill]) {
              kilnDataObj[val.plant + "-" + val.mill] = {
                closeLoopFlag: false,
                paramsToSend: [],
              };
            }
            if (val["Close Loop Flag"] && val.parameters === "") {
              kilnDataObj[val.plant + "-" + val.mill].closeLoopFlag =
                val["Close Loop Flag"];
            }
            if (val["Close Loop Flag"] && val.parameters !== "") {
              let sendPayload = {
                value: val["Value"],
                opc_server_url: val.endpointurl,
                node_id: val.nodeid,
              };
              kilnDataObj[val.plant + "-" + val.mill].paramsToSend.push(
                sendPayload
              );
            }
          });
          Object.values(kilnDataObj).forEach(async (v1) => {
            if (v1.closeLoopFlag) {
              v1.paramsToSend.forEach((v2) => {
                cloudToDeviceSendData(v2);
              });
            }
          });
          console.log(kcmDataObj, kilnDataObj, "dataaaaaaaaaaa");
          resolve(responseObject);
        } catch (err) {
          responseObject.result = { result: Error.message };
          responseObject.error = true;
          responseObject.status = "Failure";
          reject(responseObject);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendCloseLoopValuesFromMaster;
