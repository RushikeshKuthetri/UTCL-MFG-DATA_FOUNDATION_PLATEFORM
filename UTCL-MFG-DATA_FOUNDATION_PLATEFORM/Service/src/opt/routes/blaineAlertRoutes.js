const express = require("express");
const router = express.Router();
const blaineAlertController = require("../controllers/blaineAlertController");
const adminSuperAuth = require("../../middleware/adminSuperAuth");
router.post(
  "/insertBlaineAlert",
  // adminSuperAuth,
  blaineAlertController.insertBlaineAlert
);
router.post(
  "/getBlaineAlerts",
  // adminSuperAuth,
  blaineAlertController.getBlaineAlerts
);
router.post(
  "/updateBlaineAlert",
  // adminSuperAuth,
  blaineAlertController.updateBlaineAlert
);
router.post(
  "/deleteBlaineAlert",
  // adminSuperAuth,
  blaineAlertController.deleteBlaineAlert
);
module.exports = router;