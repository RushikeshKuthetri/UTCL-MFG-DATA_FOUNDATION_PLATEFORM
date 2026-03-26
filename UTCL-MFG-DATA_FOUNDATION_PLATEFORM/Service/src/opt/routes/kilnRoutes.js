const express = require("express");
const router = express.Router();
const kilnController = require("../controllers/kilnController");
const authOPTMiddleware = require("../../middleware/authOPT");

router.post(
  "/getDropDownFilter",
  // authOPTMiddleware,
  kilnController.getDropDownFilter
);
router.post(
  "/getLatestFilteredData",
  // authOPTMiddleware,
  kilnController.getLatestFilteredData
);
router.post(
  "/getRecommedationData",
  // authOPTMiddleware,
  kilnController.getRecommedationData
);
router.post(
  "/getRecommedationDataDateRange",
  // authOPTMiddleware,
  kilnController.getRecommedationDataDateRange
);
router.post(
  "/getAlertDataDateRange",
  // authOPTMiddleware,
  kilnController.getAlertDataDateRange
);
router.post(
  "/getDashboardCardData",
  // authOPTMiddleware,
  kilnController.getDashboardCardData
);
router.post(
  "/getKilnThroughputData",
  // authOPTMiddleware,
  kilnController.getKilnThroughputData
);
router.post(
  "/exportAlertDataDateRange",
  // authOPTMiddleware,
  kilnController.exportAlertDataDateRange
);
router.post(
  "/exportRecommedationDataDateRange",
  // authOPTMiddleware,
  kilnController.exportRecommedationDataDateRange
);
router.post(
  "/getThroughputDataAvg",
  // authOPTMiddleware,
  kilnController.getThroughputDataAvg
);
router.post(
  "/getDashboardWeeklyCounts",
  // authOPTMiddleware,
  kilnController.getDashboardWeeklyCounts
);
router.post(
  "/getFilterParameters",
  // authOPTMiddleware,
  kilnController.getFilterParameters
);
router.post(
  "/updateActions",
  //  authOPTMiddleware,
  kilnController.updateActions
);
router.post(
  "/getChartTrendsData",
  // authOPTMiddleware,
  kilnController.getChartTrendsData
);
router.post(
  "/getEquipmentFailureData",
  // authOPTMiddleware,
  kilnController.getEquipmentFailureData
);
router.post(
  "/getEquipmentFailureDataDateRange",
  // authOPTMiddleware,
  kilnController.getEquipmentFailureDataDateRange
);
router.post(
  "/getDisturbanceDataDateRange",
  // authOPTMiddleware,
  kilnController.getDisturbanceDataDateRange
);
router.post(
  "/exportDisturbanceDataDateRange",
  // authOPTMiddleware,
  kilnController.exportDisturbanceDataDateRange
);
router.post(
  "/getCloseLoopMasterData",
  // authOPTMiddleware,
  kilnController.getCloseLoopMasterData
);
router.post(
  "/updateCloseLoopMasterData",
  // authOPTMiddleware,
  kilnController.updateCloseLoopMasterData
);

router.post(
  "/getKilnControlParameterRangeMasterData",
  // authOPTMiddleware,
  kilnController.getKilnControlParameterRangeMasterData
);

router.post(
  "/updateKilnControlParameterMasterData",
  // authOPTMiddleware,
  kilnController.updateKilnControlParameterRangeMasterData
);

module.exports = router;
