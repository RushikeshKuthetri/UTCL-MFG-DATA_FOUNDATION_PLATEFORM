var express = require("express");
var router = express.Router();
const {
  trendadx,
  latestData,
  logAccessIP,
  logAccessLogout,
  // fetchUserCharts,
  // addChart,
  // deleteChart,
  // updateChart,
  tagDetails,
  dataComing,
  sectionTagDetails,
  addLog,
  DownloadHandler,
  dataExport,
  lineSectionDetails,
  sectionTagDetailsNew,
  latestDataNew,
  // kilnShutdownDurationTracker,
  // cementShutdownDurationTracker,
  dataComingNew,
  trendSitewise,
  dataExportStatus,
  logAccessIPNew,
  getAdditionalTagDetails,
  fetchCentralData,
  fetchCentralDataCluster,
  fetchCentralLatestData,
  kilnShutdownDurationTracker,
  cementShutdownDurationTracker,
  fetchUserCharts,
  addChart,
  deleteChart,
  updateChart,
  hoTagDetail,
} = require("../controllers/adx");
const authMiddleware = require("../middleware/auth");
const { plotlyTrendApi } = require("../controllers/chartsAPIs/plotlyChart");
const { saveTrendVariants, getVariantsApi } = require("../controllers/chartsAPIs/saveChartVariant");
const { deleteTrendVariant } = require("../controllers/chartsAPIs/deleteChartVariant");
const { getTagLineCountApi } = require("../controllers/adx/tagLineCount");

/* GET home page. */

router.get("/test", function (req, res, next) {
  const test = process.env.NODE_ENV_test;
  res.send(`Test ${test}`);
});
router.get("/testDelay", function (req, res, next) {
  const test = process.env.NODE_ENV_test;
  setTimeout(() => {
    res.send(`Test Delay${test}`);
  }, 50000);
});
router.get("/testDelay1", function (req, res, next) {
  const test = process.env.NODE_ENV_test;
  setTimeout(() => {
    res.send(`Test Delay 230 ${test}`);
  }, 230000);
});

////Fetch the trends data from ADX for popup
router.post("/trendadx", trendSitewise); //authMiddleware

// Added by TRID AI on 17-06-2026 as part of PlotlyJs Developememt
router.post("/plotly/trends", plotlyTrendApi);
router.post("/plotly/saveTrendVariants", saveTrendVariants);
router.post("/plotly/getTrendsVariants", getVariantsApi);
router.post("/plotly/deleteTrendVariant", deleteTrendVariant);

///////FETCH LATEST DATA FOR MIMICS
router.post("/latestData", authMiddleware, latestData);

///////FETCH LATEST DATA FOR MIMICS NEW API
router.post("/latestDataNew", authMiddleware, latestDataNew);

///////Store IP of User when Login
router.post("/logAccessIP", authMiddleware, logAccessIP);

///////Store IP of User when Login new API
router.post("/logAccessIPNew", authMiddleware, logAccessIPNew);

///////Store IP of User when Login
router.post("/logAccessLogout", authMiddleware, logAccessLogout);

///////data available in last x minuites for a single plant
router.post("/dataComing", authMiddleware, dataComing);

///////tagDetails for a plants
router.post("/tagDetails", authMiddleware, tagDetails);
router.post("/sectionTagDetails", authMiddleware, sectionTagDetails);

// data available in last x minutes for a single plant new API
router.post("/dataComingNew", authMiddleware, dataComingNew);

// section and tag details new APIs
router.post("/lineSectionDetails", authMiddleware, lineSectionDetails);
router.post("/sectionTagDetailsNew", authMiddleware, sectionTagDetailsNew);

// Added by TridAi to show the tag and line count at Mimic landing page (25-03-2026)
router.post("/plantTagLineCount", authMiddleware, getTagLineCountApi);

///////Log
router.post("/addLog", addLog);

// Data export
router.post("/dataExportNew", DownloadHandler);
router.post("/dataExport", dataExport);
router.post("/dataExport/status", dataExportStatus);

// getAdditionalTagDetails
router.post(
  "/getAdditionalTagDetails",
  authMiddleware,
  getAdditionalTagDetails
);

///////Centeral Dashboard
router.post("/fetchCentralData", authMiddleware, fetchCentralData);
router.post(
  "/fetchCentralDataCluster",
  authMiddleware,
  fetchCentralDataCluster
);
router.post("/fetchCentralLatestData", authMiddleware, fetchCentralLatestData);
router.post(
  "/kilnShutdownDurationTracker",
  authMiddleware,
  kilnShutdownDurationTracker
);
router.post(
  "/cementShutdownDurationTracker",
  authMiddleware,
  cementShutdownDurationTracker
);
router.post("/fetchHoTagDetail", authMiddleware, hoTagDetail);

//////CHART TEMPLATE
router.post("/fetchUserCharts", authMiddleware, fetchUserCharts); // IN USE
router.post("/addChart", authMiddleware, addChart); // IN USE
router.post("/deleteChart", authMiddleware, deleteChart); // IN USE
router.post("/updateChart", authMiddleware, updateChart); // IN USE

module.exports = router;
