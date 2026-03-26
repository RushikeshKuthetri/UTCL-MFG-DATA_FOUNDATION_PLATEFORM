const client = require("../db/connection");

const getDataApi = async (url) => {
  return new Promise(async (resolve, reject) => {
    // console.log("Inside getDataApi function");
    try {
      // console.log(url);
      const result = await client.execute("utcprmfgadxiotpd-db", url);
      const finalResult = JSON.parse(
        JSON.stringify(result.primaryResults[0])
      ).data;
      resolve(finalResult);
    } catch (error) {
      console.log(error.message);
      reject(new Error(error));
    }
  });
};

module.exports = getDataApi;
