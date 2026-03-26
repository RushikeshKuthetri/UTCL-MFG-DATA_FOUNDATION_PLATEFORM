const express = require("express");
const router = express.Router();
const kcmController = require("../controllers/kcmController");
const authOPTMiddleware = require("../../middleware/authOPT");

router.post(
  "/cement/getLatestFilteredData",
  // authOPTMiddleware,
  kcmController.getLatestFilteredData
);
router.post(
  "/cement/getRecommedationData",
  // authOPTMiddleware,
  kcmController.getRecommedationData
);
router.post(
  "/cement/getRecommedationDataDateRange",
  // authOPTMiddleware,
  kcmController.getRecommedationDataDateRange
);
router.post(
  "/cement/updateActions",
  // authOPTMiddleware,
  kcmController.updateActions
);
router.post(
  "/cement/getDropDownFilter",
  // authOPTMiddleware,
  kcmController.getDropDownFilter
);
router.post(
  "/cement/getBlaineRangeList",
  // authOPTMiddleware,
  kcmController.getBlaineRangeList
);
router.post(
  "/cement/updateBlaineRangeList",
  // authOPTMiddleware,
  kcmController.updateBlaineRangeList
);
router.post(
  "/cement/getDashboardCardData",
  // authOPTMiddleware,
  kcmController.getDashboardCardData
);
router.post(
  "/cement/getDashboardWeeklyCounts",
  // authOPTMiddleware,
  kcmController.getDashboardWeeklyCounts
);
router.post(
  "/cement/exportRecommedationDataDateRange",
  // authOPTMiddleware,
  kcmController.exportRecommedationDataDateRange
);
router.post(
  "/cement/getCementThroughputData",
  // authOPTMiddleware,
  kcmController.getCementThroughputData
);
router.post(
  "/cement/getCementThroughputDataAvgMonthly",
  // authOPTMiddleware,
  kcmController.getCementThroughputDataAvgMonthly
);
router.post(
  "/cement/getChartTrendsData",
  // authOPTMiddleware,
  kcmController.getChartTrendsData
);
router.post(
  "/cement/getCloseLoopMasterData",
  // authOPTMiddleware,
  kcmController.getCloseLoopMasterData
);
router.post(
  "/cement/updateCloseLoopMasterData",
  // authOPTMiddleware,
  kcmController.updateCloseLoopMasterData
);

module.exports = router;
