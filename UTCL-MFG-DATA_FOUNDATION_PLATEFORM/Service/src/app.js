const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
require("dotenv").config();

// const fs = require("fs");
// const cron = require("node-cron");
// const { resolve } = require("path");
// const logger = require("morgan");

// mimics routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// cbm routes
const plantRoutes = require("./cbm/routes/plantRoutes");
const templateRoutes = require("./cbm/routes/templateRoutes");

//opt & vendor routes
var utclVendorRouter = require("./routes/utclVendor");

//third Party API's developed by TAI 22-12-2025
var thirdPartyRouter = require("./routes/thirdPartyAPIs");


// admin routes
const adminRouter = require("./admin/routes/admin");
const superAdminRouter = require("./admin/routes/adminSuper");

// process opt routes
const blaineRoutes = require("./opt/routes/blaineRoutes");
const kcmRoutes = require("./opt/routes/kcmRoutes");
const kilnRoutes = require("./opt/routes/kilnRoutes");
const blaineAlertRoutes = require("./opt/routes/blaineAlertRoutes");
const kilnAdminRoutes = require("./opt/routes/admin_routes/kilnAdminRoutes");
const blaineAdminRoutes = require("./opt/routes/admin_routes/blaineAdminRoutes");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-Type", "application/json");
  next();
});

// app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  compression({
    threshold: 0, // minimum response size in bytes to compress
  })
);

app.get("/home", function (req, res, next) {
  res.send(`HOME`);
});

app.get("/testDelay", function (req, res, next) {
  const test = process.env.NODE_ENV_test;
  setTimeout(() => {
    res.send(`Test Delay${test}`);
  }, 50000);
});

// Mimics Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// CBM routes
app.use("/cbm/plant", plantRoutes);
app.use("/cbm/template", templateRoutes);

// Admin routes
app.use("/admin", adminRouter);
app.use("/adminSuper", superAdminRouter);

// OPT routes
app.use("/opt/blaine", blaineRoutes);
app.use("/opt/kiln", kilnRoutes);
app.use("/opt/blaineAlert", blaineAlertRoutes);
app.use("/opt/blaineAdmin", blaineAdminRoutes);
app.use("/opt/kilnAdmin", kilnAdminRoutes);
app.use("/opt", kcmRoutes);

//vendor
app.use("/utclvendor", utclVendorRouter);

//third Party API's developed by TAI 22-12-2025
app.use("/thirdParty", thirdPartyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log("ERROR ::: ", err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    code: err.status,
    status: "failed",
  });
});

// 59 23 * * *
// to reduce the bundle size, just commenting the code
// cron.schedule("59 23 * * *", function () {
//   console.log("running a task at midnight");

//   fs.readdir(resolve("public/uat"), (err, fileNames) => {
//     if (err) throw err;

//     // console.log("Inside fs");

//     for (const name of fileNames) {
//       if(name === "sample"){
//         continue;
//       }
//       var birthtime = null;
//       birthtime = fs.statSync(`public/uat/${name}`).birthtime;
//       const today = new Date().getTime();
//       const createdTime = new Date(birthtime).getTime();
//       const diff = Math.abs(today - createdTime) / 1000 / 60 / 60 / 24;
//       // console.log(name, Math.trunc(diff));
//       if (Math.trunc(diff) >= 10) {
//         // console.log("file", fs.statSync(`public/${name}`).isFile());
//         if (fs.statSync(`public/uat/${name}`).isFile()) {
//           fs.unlink(resolve(`public/uat/${name}`), (err) => {
//             if (err) {

//             } else {
//             }
//           });
//         }
//       }

//       if (
//         Math.trunc(diff) >= 1 &&
//         !fs.statSync(`public/uat/${name}`).isFile()
//       ) {
//         fs.rm(resolve(`public/uat/${name}`), { recursive: true }, (err) => {
//           if (err) {
//             return console.log(`Unable to delete folder ${name}`, err);
//           } else {
//           }
//         });
//       }
//     }
//   });
// });

module.exports = app;
