const { sign } = require("jsonwebtoken");

const generateUniqeKeyForSocket = (uniqueKey) => {
  // console.log(process.env.NODE_ENV_JWT_SECRET);
  // return sign({ userid }, "demoSecretKeyUltra", {
  //   expiresIn: "30d",
  // });

  const NODE_ENV_JWT_SECRET = process.env.NODE_ENV_JWT_SECRET;
  return sign({ uniqueKey }, NODE_ENV_JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateUniqeKeyForSocket;
