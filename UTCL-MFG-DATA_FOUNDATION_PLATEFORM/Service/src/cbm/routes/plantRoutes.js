const express = require("express");
const router = express.Router();
const authCBMMiddleware = require("../../middleware/authCBM");
const plantController = require("../controllers/plantController");

router.post(
  "/getAllPalntData",
  // authCBMMiddleware,
  plantController.getAllPalntData
);
router.post(
  "/getPlantName",
  // authCBMMiddleware,
  plantController.getPlantName
);
router.post(
  "/getPlantAllTags",
  // authCBMMiddleware,
  plantController.getPlantAllTags
);
router.post(
  "/insertParamter",
  // authCBMMiddleware,
  plantController.insertParameterSelect
);

module.exports = router;
