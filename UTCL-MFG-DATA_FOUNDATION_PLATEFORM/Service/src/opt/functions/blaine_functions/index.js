const getLatestFilteredData = require("./getLatestFilteredData");
const insertPredictionData = require("./insertPredictionData");
const getLastTwoHrsData = require("./getLastTwoHrsData");
const updateActualBlaineOneHour = require("./updateActualBlaineOneHour");
const updateRecommadationForBlaine = require("./updateRecommadationForBlaine");
const updateRemarksForBlaine = require("./updateRemarksForBlaine");
const getLatestFilteredDataforSocket = require("./getLatestFilteredDataforSocket");
const getLastTwoHrsDataforSocket = require("./getLastTwoHrsDataforSocket");
const getDropDownFilter = require("./getDropDownFilter");
const getBarChartData = require("./getBarChartData");
const exportBlaineData = require("./exportBlaineData");
const getControllableParameters = require("./getControllableParameters");
const getBlainePredictionChartData = require("./getBlainePredictionChartData");
const getBlainePredictionChartDataForActualBlaine = require("./getBlainePredictionChartDataForActualBlaine");
const getPredictionDataWithDatetime = require("./getPredictionDataWithDatetime");
const getBlaineAccMTD = require("./getBlaineAccMTD");
const getBlaineAccDaywiseMTD = require("./getBlaineAccDaywiseMTD");
const syncBlaineAccuracyDataFor45Days = require("./syncBlaineAccuracyDataFor45Days");
const mailBlainerangeDataafterCalculation = require("./mailBlainerangeDataafterCalculation");

module.exports = {
  insertPredictionData,
  getLatestFilteredData,
  getLastTwoHrsData,
  updateActualBlaineOneHour,
  updateRecommadationForBlaine,
  updateRemarksForBlaine,
  getLatestFilteredDataforSocket,
  getLastTwoHrsDataforSocket,
  getDropDownFilter,
  getBarChartData,
  exportBlaineData,
  getControllableParameters,
  getBlainePredictionChartData,
  getBlainePredictionChartDataForActualBlaine,
  getPredictionDataWithDatetime,
  getBlaineAccMTD,
  getBlaineAccDaywiseMTD,
  syncBlaineAccuracyDataFor45Days,
  mailBlainerangeDataafterCalculation
};
