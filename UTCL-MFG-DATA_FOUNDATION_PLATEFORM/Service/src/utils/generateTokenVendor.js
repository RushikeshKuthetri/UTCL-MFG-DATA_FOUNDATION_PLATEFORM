const { sign } = require("jsonwebtoken");

const generateTokenVendor = ({ userid, Plant_Name, Plant_SapCode }) => {
  // console.log(process.env.NODE_ENV_JWT_SECRET);

  // console.log(userid, Plant_Name, Plant_SapCode);
  // return sign({ userid, Plant_Name, Plant_SapCode }, "demoSecretKeyUltra", {
  //   expiresIn: "1h",
  // });

  const NODE_ENV_JWT_SECRET_VENDOR = process.env.NODE_ENV_JWT_SECRET_VENDOR;
  return sign(
    { userid, Plant_Name, Plant_SapCode },
    NODE_ENV_JWT_SECRET_VENDOR,
    {
      expiresIn: "1h",
    }
  );
};

module.exports = generateTokenVendor;
