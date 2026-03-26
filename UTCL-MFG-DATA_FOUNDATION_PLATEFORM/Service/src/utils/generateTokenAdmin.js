const { sign } = require("jsonwebtoken");

const generateTokenAdmin = ({ userid, role }) => {
  const NODE_ENV_JWT_SECRET = process.env.NODE_ENV_JWT_SECRET;
  return sign({ userid, role }, NODE_ENV_JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = generateTokenAdmin;
