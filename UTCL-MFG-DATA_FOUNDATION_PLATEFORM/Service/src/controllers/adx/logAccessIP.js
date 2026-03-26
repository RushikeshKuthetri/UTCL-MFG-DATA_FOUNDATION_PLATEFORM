const moment = require("moment");
const client = require("../../db/connection");
const dynamoDB=require("../../helpers/dynamoDB");

module.exports = {
  logAccessIP: async (req, res, next) => {
    const { userId, ip, loginTime, loginStatus } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    const timestamp = moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS");

    // console.log(timestamp);

    try {
      const result = await client.execute(
        "utcprmfgadxiotpd-db",
        `.ingest inline into table Store_IP <| ${userId},${ip},${timestamp},${loginTime},'',${loginStatus}`
      );

      res.status(200).json({
        code: 200,
        status: "success",
        result: "Ip Logged Successfully",
      });
    } catch (error) {
      console.log("LOG ACCESS IP ERROR", error)
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
  logAccessIPNew: async (req, res, next) => {
    const { userId, ip, loginTime, loginStatus } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    const timestamp = moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS");
    const unixTimestamp =new Date(timestamp).getTime();
    const unixLogintime =new Date(loginTime).getTime();

    // console.log(timestamp);

    try {
      // const result = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `.ingest inline into table Store_IP <| ${userId},${ip},${timestamp},${loginTime},'',${loginStatus}`
      // );
      const item = {
        User_id: { S: userId },
        Timestamp: { N: String(unixTimestamp) },
        // Ip: { S: ip },
        Login_Status: { BOOL: loginStatus },
        Login_Time: { N: String(unixLogintime) },
      }
      if (ip) {
        item[`Ip`] = { S: ip }
      }
      const payload = {
        TableName: "Store_IP",
        Item: item
      };
      const result = await dynamoDB.putCommand(payload);
      if(result){
        res.status(200).json({
          code: 200,
          status: "success",
          result: "Ip Logged Successfully",
        });
      }

    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
};
