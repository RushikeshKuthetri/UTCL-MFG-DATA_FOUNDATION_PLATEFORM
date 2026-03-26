var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

getCycloneData = (req) => {
  var response;
  let { userid , plants} = req.body;

  // console.log("hiii", userid);
  return new Promise(async (resolve, reject) => {
    try {
      plants = plants.join(",")
      let paramaters = `@v_plant=?`;

      let replacementArray = [plants];
      // var Query = " exec  [dbo].[SP_CBM_PlantCyclone_AllRecords_Testing]" + paramaters;
      var Query = " exec [dbo].[SP_CBM_EquipmentTemplatesPlantCycloneAllRecords]" + paramaters;
      let data = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      
      if (data.length > 0) {
         data.map((val) => {
         
          val.Parameters = val.Parameters.replaceAll("@@@", ",");
          // console.log(val.Parameters);
          val.Parameters = JSON.parse(val.Parameters);
          // console.log(val.Parameters);
          val.Conditions = val.Conditions.replaceAll("@@@", ",");
          val.Conditions = JSON.parse(val.Conditions);
         
        });
        
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

module.exports = getCycloneData;
