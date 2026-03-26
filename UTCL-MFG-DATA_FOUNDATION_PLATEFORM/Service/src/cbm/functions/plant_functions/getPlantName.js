var responseObject = require("../../utils/responseObject");
var client = require("../../../db/connection");
// var connection = require("../../db/connectionsql")

getPlantName = (req) => {
  var response;

  return new Promise(async (resolve, reject) => {
    try {
      var result = [{ PlantName: "Nathdwara" }, { PlantName: "Balaji" }];
      var data = await client.execute(
        "utcprmfgadxiotpd-db",
        `UseCase_Efficiency_MasterTbl_Testing('GCW','','')`
      );

      if (result.length > 0) {
        response = responseObject(result, false, "Success", 200);
        resolve(response);
      } else {
        response = responseObject("No Records Found", true, "Failure", 200);
        reject(response);
      }
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = getPlantName;
