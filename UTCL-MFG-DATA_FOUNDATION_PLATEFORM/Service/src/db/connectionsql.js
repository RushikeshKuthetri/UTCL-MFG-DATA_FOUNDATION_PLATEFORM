// A connection is established with the database through the Sequelize ORM using the creds from the config file.
const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");

// const sequelize = new Sequelize(process.env.NODE_ENV_SQL_DB_NAME_DEV, process.env.NODE_ENV_SQL_DB_USER, process.env.NODE_ENV_SQL_DB_PASS, {
//   host: process.env.NODE_ENV_SQL_DB_SERVER,
//   dialect: "mssql",
//   dialectOptions: {
//     options: {
//       encrypt: true,
//       requestTimeout: 300000, //300sec
//     },
//   },
// });

const sequelize = new Sequelize({
  dialect: "mssql",
  host: process.env.NODE_ENV_SQL_DB_SERVER,
  username: process.env.NODE_ENV_SQL_DB_USER,
  password: process.env.NODE_ENV_SQL_DB_PASS,
  database: process.env.NODE_ENV_SQL_DB_NAME_DEV,
  port: 1433,
  dialectOptions: {
    encrypt: true,
    trustServerCertificate: true,
    requestTimeout: 300000, //300sec
  },
  // logging: console.log,
});

// sequelize.sync();
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection sql has been established successfully."); // This message is logged while starting the server if the database connection is successful
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();
module.exports = sequelize;
