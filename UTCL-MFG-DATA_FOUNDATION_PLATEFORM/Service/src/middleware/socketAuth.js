const { verify } = require("jsonwebtoken");
// const client = require("../db/connection");

const socketAuth = async (token) => {
  // console.log("in JWT", token);

  try {
    const { userid } = verify(token, process.env.NODE_ENV_JWT_SECRET);
    // var { userid } = verify(token, "demoSecretKeyUltra");
    // console.log(userid);

    if (userid) {
      return true;
      // const result = await client.execute(
      //   "utcprmfgadxiotpd-db",
      //   `Fn_UserLogin('${userid}')`
      // );
      // //   console.log("result", result);
      // const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));
      // console.log(newResult);
      // if (newResult.data[0]?.UserID) {
      //   // const token = await generateToken(newResult.data[0].UserID);
      //   const { Password, ...dataToSend } = newResult.data[0];
      //   // if (dataToSend) {
      //   //   req.user = dataToSend;
      // // }
      //   return true;
      // } else {
      //   return false;
      // }
    } else return false;
  } catch (error) {
    console.log("IN JWT ERROR");
    return false;
  }
};

module.exports = socketAuth;
