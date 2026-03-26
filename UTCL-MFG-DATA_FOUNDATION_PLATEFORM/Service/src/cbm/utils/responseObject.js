var statusCodes = require("./statusCodes.json");
responseObject = (result, error, status, statusCode) => {
  var statusName = statusCodes.codes.find(
    (record) => record.statusCode === statusCode
  );
  return {
    result: result,
    error: error,
    status: status,
    statusCode: statusCode,
    statusName: statusName ? statusName.status : "Unknown Status Code",
  };
};

module.exports = responseObject;
