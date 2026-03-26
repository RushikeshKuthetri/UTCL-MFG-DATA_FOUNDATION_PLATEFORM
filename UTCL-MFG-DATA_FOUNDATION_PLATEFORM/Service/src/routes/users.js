var express = require("express");
// const {
//   loginVendor,
//   // adLogin,
//   // getPassword,
//   loginAdmin,
//   // adLoginBasic
// } = require("../controllers/user");

const { adLoginBasic, createVendor, updateVendor } = require("../controllers/_user");
const { loginVendor } = require('../controllers/_user/loginVendor');

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/loginVendor", loginVendor);
router.post("/createVendor", createVendor);
router.post("/updateVendor", updateVendor);
// router.post("/getpassword", getPassword);

router.post("/adLogin", adLoginBasic);

router.post("/adLoginBasic", adLoginBasic);
// router.post("/adLoginDemo", adLoginBasic);


module.exports = router;
