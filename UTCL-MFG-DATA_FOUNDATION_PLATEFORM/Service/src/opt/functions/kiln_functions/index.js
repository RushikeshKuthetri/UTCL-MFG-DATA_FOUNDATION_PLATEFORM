
// const getRecommedationDataforSocket = require("./getRecommedationDataforSocket");
const getLatestFilteredData = require("./getLatestFilteredData");
const getRecommedationData = require("./getRecommedationData");
const getRecommedationDataDateRange = require("./getRecommedationDataDateRange");
const getAlertDataDateRange = require("./getAlertDataDateRange");
const updateActions = require("./updateActions");
const getDropDownFilter = require("./getDropDownFilter");
// const getBlaineRangeList = require("./getBlaineRangeList");
const getLatestKilnDataforSocket = require("./getLatestKilnDataforSocket");
const exportRecommedationDataDateRange = require("./exportRecommedationDataDateRange");
const exportAlertDataDateRange = require("./exportAlertDataDateRange");
const getKilnThroughputData = require("./getKilnThroughputData");
const getDashboardCardData = require("./getDashboardCardData");
const getDashboardWeeklyCounts = require("./getDashboardWeeklyCounts");
const getThroughputDataAvg = require("./getThroughputDataAvg");
const getFilterParameters = require("./getFilterParameters");
const getChartTrendsData = require("./getChartTrendsData");
const getEquipmentFailureData = require("./getEquipmentFailureData");
const getEquipmentFailureDataDateRange = require("./getEquipmentFailureDataDateRange");
const getDisturbanceDataDateRange = require("./getDisturbanceDataDateRange");
const exportDisturbanceDataDateRange = require("./exportDisturbanceDataDateRange");
const getCloseLoopMasterData = require("./getCloseLoopMasterData");
const updateCloseLoopMasterData = require("./updateCloseLoopMasterData");
const getKilnControlParameterRangeMasterData = require('./getKilnControlParameterRangeMasterData');
const updateKilnControlParameterRangeMasterData = require('./updateKilnControlParameterRangeMasterData')

module.exports = {
  getRecommedationData,
  getRecommedationDataDateRange,
  getDropDownFilter,
  getLatestFilteredData,
  getAlertDataDateRange,
  exportRecommedationDataDateRange,
  exportAlertDataDateRange,
  getKilnThroughputData,
  getDashboardCardData,
  getDashboardWeeklyCounts,
  getThroughputDataAvg,
  getLatestKilnDataforSocket,
  getFilterParameters,
  updateActions,
  getChartTrendsData,
  getEquipmentFailureData,
  getEquipmentFailureDataDateRange,
  getDisturbanceDataDateRange,
  exportDisturbanceDataDateRange,
  getCloseLoopMasterData,
  updateCloseLoopMasterData,
  getKilnControlParameterRangeMasterData,
  updateKilnControlParameterRangeMasterData
};
