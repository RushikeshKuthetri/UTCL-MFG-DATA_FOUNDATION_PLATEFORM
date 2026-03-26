const auth = require("basic-auth");

const client = require("../db/connection");

const basicAuth = async (req, res, next) => {
  console.log("middleware: basic auth");
  const user = await auth(req);

  try {
    const result = await client.execute(
      "utcprmfgadxiotpd-db",
      `Fn_Vendor_UserLogin('${user?.name}','${user?.pass}')`
    );
    // console.log("result", result);

    const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

    // console.log(newResult);

    if (newResult.data[0]?.UserID) {
      console.log("Basic Auth Success");
      req.plantAccess = newResult.data[0].Plant_Name;
      req.sapCode = newResult.data[0].Plant_SapCode;
      next();
    } else {
      console.log("Basic Auth Failed");
      res.status(401).end("Access Denied");
    }
  } catch (error) {
    console.log("Basic Auth Failed");
    res.status(401).end("Access Denied");
  }

  // const userData1 = {
  //   username: "vendor1",
  //   password: "ultratech@2022",
  //   plantAccess: "BLCW",
  //   sapCode: "BL01",
  // };
  // const userData2 = {
  //   username: "vendor2",
  //   password: "ultratech2@2022",
  //   plantAccess: "BGCW",
  //   sapCode: "BA01",
  // };
  // if (
  //   user &&
  //   user.name === userData1.username &&
  //   user.pass === userData1.password
  // ) {
  //   console.log("Basic Auth Success");
  //   req.plantAccess = userData1.plantAccess;
  //   req.sapCode = userData1.sapCode;
  //   next();
  // } else if (
  //   user &&
  //   user.name === userData2.username &&
  //   user.pass === userData2.password
  // ) {
  //   console.log("Basic Auth Success");
  //   req.plantAccess = userData2.plantAccess;
  //   req.sapCode = userData2.sapCode;
  //   next();
  // } else {
  //   console.log("Basic Auth Failed");
  //   res.status(401).end("Access Denied");
  // }
};
module.exports = basicAuth;
