const express = require("express");
const {
  userDetails,
  addUser, 
  updateUser,
  deleteUser,
  logDetails,
  logFilter,
  plantDetails,
  moduleDetails,
  logFilterExport,
  uiDetails,
  updateUiDetails,
  downloadSampleFile
} = require("../controllers/_admin");

const adminAuth = require("../../middleware/adminAuth");
const router = express.Router();

router.post("/plantDetails", adminAuth, plantDetails);
router.post("/userDetails", adminAuth, userDetails);
router.post("/addUser", adminAuth, addUser);
router.post("/updateUser", adminAuth, updateUser);
router.post("/deleteUser", adminAuth, deleteUser);
router.post("/uiDetails", adminAuth, uiDetails);
router.post("/updateUiDetails", adminAuth, updateUiDetails);
// router.post("/userAccessLog", adminAuth, userAccessLog);
// router.post("/accessLogAll", adminAuth, accessLogAll);
router.post("/moduleDetails", adminAuth, moduleDetails);
router.post("/logDetails", adminAuth, logDetails);
router.post("/logFilter", adminAuth, logFilter);
router.post("/logFilterExport", adminAuth, logFilterExport);

router.post("/downloadSampleFile", adminAuth, downloadSampleFile)

module.exports = router;
