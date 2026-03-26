
const getRecommedationDataforSocket = require("./getRecommedationDataforSocket");
const getLatestFilteredData = require("./getLatestFilteredData");
const getRecommedationData = require("./getRecommedationData");
const getRecommedationDataDateRange = require("./getRecommedationDataDateRange");
const updateActions = require("./updateActions");
const getDropDownFilter = require("./getDropDownFilter");
const getBlaineRangeList = require("./getBlaineRangeList");
const updateBlaineRangeList = require("./updateBlaineRangeList");
const getDashboardCardData = require("./getDashboardCardData");
const getDashboardWeeklyCounts = require("./getDashboardWeeklyCounts");
const exportRecommedationDataDateRange = require("./exportRecommedationDataDateRange");
const getCementThroughputData = require("./getCementThroughputData");
const getCementThroughputDataAvgMonthly = require("./getCementThroughputDataAvgMonthly");
const getLatestDataforSocket = require("./getLatestDataforSocket");
const getChartTrendsData = require("./getChartTrendsData");
const getCloseLoopMasterData = require("./getCloseLoopMasterData");
const updateCloseLoopMasterData = require("./updateCloseLoopMasterData");

module.exports = {
  getLatestFilteredData,
  getRecommedationData,
  getRecommedationDataDateRange,
  updateActions,
  getDropDownFilter,
  getBlaineRangeList,
  updateBlaineRangeList,
  getDashboardCardData,
  getDashboardWeeklyCounts,
  exportRecommedationDataDateRange,
  getCementThroughputData,
  getCementThroughputDataAvgMonthly,
  getRecommedationDataforSocket,
  getLatestDataforSocket,
  getChartTrendsData,
  getCloseLoopMasterData,
  updateCloseLoopMasterData,
};
