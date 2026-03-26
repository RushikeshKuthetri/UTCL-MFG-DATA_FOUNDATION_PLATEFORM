const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
var http = require("http").Server(app);

dotenv.config({ path: "./config.env" });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.use(cookieParser());

var plantRoutes = require("./routes/plantRoutes");
var templateRoutes = require("./routes/templateRoutes");

app.use("/api/plant", plantRoutes);
app.use("/api/template", templateRoutes);

const PORT = process.env.PORT || 8080;

http.listen(PORT, () => {
  console.log(`server is running at port no: ${PORT}`);
});
