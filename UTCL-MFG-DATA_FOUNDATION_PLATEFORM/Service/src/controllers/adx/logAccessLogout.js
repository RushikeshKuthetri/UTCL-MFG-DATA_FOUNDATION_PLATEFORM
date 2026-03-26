const moment = require("moment");
const client = require("../../db/connection");
const { getQueryWithoutPagination, deleteCommand, putCommand } = require("../../helpers/dynamoDB");

module.exports = {
  logAccessLogout: async (req, res, next) => {
    const { userId, ip } = req.body;
//TODO:uncomment
    // if (userId != req.user) {
    //   return res.status(401).json({ message: "Not authorized, token invalid" });
    // }

    if (!userId || !ip) {
      return res.status(401).json({
        code: 401,
        status: "failed",
        message: "Please provide all the feilds",
      });
    }

    // const timestamp = moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS");
    const timestamp = Date.now();

    // console.log(timestamp);

    try {
      // const lastUserLog = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `Fn_Latest_IP_Details('${userId}','${ip}')`
      // );

      // const data = JSON.parse(
      //   JSON.stringify(lastUserLog.primaryResults[0])
      // ).data;
      const payload = {
        TableName: 'Store_IP',
        KeyConditionExpression: '#PK = :PK',// AND #timestamp = :timestamp
        ExpressionAttributeNames: {
          '#PK': 'User_id', // Enter partitionKey name
          // '#timestamp': 'Timestamp',
        },
        ExpressionAttributeValues: {
          ':PK': { S: userId }
          // ':start': { N: startTimeUnix.toString() },
          // ':end': { N: endTimeUnix.toString() },
        },
        ScanIndexForward: false,
      }
      const queryResult = await getQueryWithoutPagination(payload);
      console.log('-----d---',JSON.stringify(queryResult))
      const data1 = queryResult.Items.map(item => {
        const Ip = item.Ip ? Object.values(item.Ip)[0] : null;
        if(Ip === ip) {
        const User_id = item.User_id ? Object.values(item.User_id)[0] : null;
        const Login_Time = item.Login_Time ? Object.values(item.Login_Time)[0] : null;
        const Timestamp = item.Timestamp ? Object.values(item.Timestamp)[0] : null;
        const Login_Status = item.Login_Status ? Object.values(item.Login_Status)[0] : null;
        const Logout_Time = item.Logout_Time ? Object.values(item.Logout_Time)[0] : null;
        // const Ip = item.Ip ? Object.values(item.Ip)[0] : null;

        return { User_id, Login_Time, Timestamp, Login_Status, Logout_Time, Ip };
        }
      });
      console.log('--fetchedItems---',data1)
      data = data1.filter(Boolean);
      console.log('--ddata---',data)

      if (!data[0]) {
        return res.status(400).json({
          code: 400,
          status: "failed",
          message: "No match found with userid and ip.",
        });
      }

      const { User_id, Timestamp, Ip, Login_Time, Logout_Time, Login_Status } = data[0];

      console.log('timestamp ',timestamp,typeof timestamp);

      // await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `.delete table Store_IP records  <| Store_IP | where User_id =='${User_id}' and Ip =='${Ip}' | where Timestamp =='${Timestamp}'`
      // );
      const deleteObj = {
        "Key": {
          "User_id": {
            "S": User_id
          },
          "Timestamp": {
            "N": Timestamp
          }
        },
        "TableName": "Store_IP"
      };
      const deleteResponse = await deleteCommand(deleteObj)
      console.log('##deleteResponse##',deleteResponse)

      // console.log(
      //   `.ingest inline into table Store_IP <| ${User_id},${Ip},${Timestamp},${Login_Time},${timestamp},${Login_Status}`
      // );

      // const result =
      // await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `.ingest inline into table Store_IP <| ${User_id},${Ip},${Timestamp},${Login_Time},${timestamp},${Login_Status}`
      // );
      const insertObj = {
        "Item": {
          "User_id": {
            "S": User_id
          },
          "Ip": {
            "S": Ip
          },
          "Timestamp": {
            "N": `${Timestamp}`
          },
          "Login_Time": {
            "N": `${Login_Time}`
          },
          "Logout_Time": {
            "N": `${timestamp}`
          },
          "Login_Status": {
            "BOOL": Login_Status
          }
        },
        "ReturnConsumedCapacity": "TOTAL",
        "TableName": "Store_IP"
      }
      const insertResponse = await putCommand(insertObj)
      console.log('##insertResponse##',insertResponse)
      res.status(200).json({
        code: 200,
        status: "success",
        result: "Ip Logged Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
};
