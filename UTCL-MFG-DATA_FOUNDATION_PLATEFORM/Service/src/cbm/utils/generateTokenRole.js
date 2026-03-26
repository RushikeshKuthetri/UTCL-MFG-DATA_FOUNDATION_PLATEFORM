const { sign } = require("jsonwebtoken");

const generateTokenRole = ({ userid, role, modules }) => {
  const NODE_ENV_JWT_SECRET = process.env.NODE_ENV_JWT_SECRET;
  return sign({ userid, role, modules }, NODE_ENV_JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateTokenRole;
