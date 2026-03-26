var responseObject = require("../../utils/responseObject");
// var client = require("../../db/connection");
var connection = require("../../../db/connectionsql")

deleteTemplate = (req) => {
  var response;

  let { TimeStamp, templateName, UseCase, userid, PlantName } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      // var result;
      let paramaters = `@TemplateName=?, @UseCase=?, @UserId=?, @PlantName=?`;

      let replacementArray = [templateName, UseCase, userid, PlantName];
      // var Query = " exec  [dbo].[SP_CBM_Delete_CBM_Store_Efficiency_Testing]" + paramaters;
      var Query = " exec  [dbo].[SP_CBM_EquipmentTemplatesDelete]" + paramaters;
      let deletedata = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      })
      if (deletedata[0].result === 'Record deleted Successfully') {
        response = responseObject(
          "data Deleted Successfully",
          false,
          "Success",
          200
        );
        resolve(response);
      }else{
        response = responseObject("Something went wrong", true, "Failure", 400);
         reject(response);
      }
    } catch (error) {
      response = responseObject(error.message, true, "Failure", 400);
      reject(response);
    }
  });
};

module.exports = deleteTemplate;
