const express = require("express");
const router = express.Router();
const blaineAdminController = require("../../controllers/admin_controller/blaineAdminController");
const blaineController = require("../../controllers/blaineController");
const adminSuperAuth = require("../../../middleware/adminSuperAuth");
router.post(
  "/getDropDownFilter",
  adminSuperAuth,
  blaineController.getDropDownFilter
);
router.post(
  "/insertBlaineAlert",
  adminSuperAuth,
  blaineAdminController.insertBlaineAlert
);
router.post(
  "/getBlaineAlerts",
  adminSuperAuth,
  blaineAdminController.getBlaineAlerts
);
router.post(
  "/updateBlaineAlert",
  adminSuperAuth,
  blaineAdminController.updateBlaineAlert
);
router.post(
  "/deleteBlaineAlert",
  adminSuperAuth,
  blaineAdminController.deleteBlaineAlert
);
module.exports = router;