const express = require("express");
const router = express.Router();
const kilnAdminController = require("../../controllers/admin_controller/kilnAdminController");
const kilnController  = require("../../controllers/kilnController");
const adminSuperAuth = require("../../../middleware/adminSuperAuth");
router.post(
  "/getKilnMaster",
  adminSuperAuth,
  kilnAdminController.getKilnMaster
);
router.post(
  "/updateKilnMaster",
  adminSuperAuth,
  kilnAdminController.updateKilnMaster
);
router.post(
  "/getDropDownFilter",
  adminSuperAuth,
  kilnController.getDropDownFilter
);
router.post(
  "/insertKilnAlert",
  adminSuperAuth,
  kilnAdminController.insertKilnAlert
);
router.post(
  "/updateKilnAlert",
  adminSuperAuth,
  kilnAdminController.updateKilnAlert
);
router.post(
  "/deleteKilnAlert",
  adminSuperAuth,
  kilnAdminController.deleteKilnAlert
);
router.post(
  "/getKilnAlerts",
  adminSuperAuth,
  kilnAdminController.getKilnAlerts
);

module.exports = router;