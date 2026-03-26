var responseObject = require("../../utils/responseObject");
var connection = require("../../../db/connectionsql")

insertParameterSelect = (req) => {
  var response;
  let {
    created_by,
    parameter_name,
    usecase
  } = req.body;

  return new Promise(async (resolve, reject) => {
    try {
      // var result;
      let paramaters = `@created_by=?, @parameter_name=?, @usecase=?`;

      let replacementArray = [created_by, parameter_name, usecase];
      var Query = " exec  [dbo].[Sp_CBM_Parameters_UseCase_Insertdata]" + paramaters;
      let result = await connection
      .query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.RAW,
        logging: console.log,
      })
      // console.log(result[0][0].result,"this is api")
      if(result[0][0].result === "Record inserted successfully"){
        response = responseObject(
          result[0][0].result,
          false,
          "Success",
          200
        );
      }else{
        response = responseObject(
          result[0][0].result,
          true,
          "Failure",
          400
        )
      }
      resolve(response);
    } catch (error) {
      console.log(error);
      // response = responseObject(error.message, true, "Failure", 400);
      // reject(response);
      reject(
        responseObject(error.message || "Database Error", true, "Failure", 500)
      );
    }
  });
};

module.exports = insertParameterSelect;
