const { trendadx, trendSitewise } = require("./trendadx");
const { latestData, latestDataNew } = require("./latestData");
const { logAccessIP } = require("./logAccessIP");
const { logAccessIPNew } = require("./logAccessIP");
const { logAccessLogout } = require("./logAccessLogout");

const { tagDetails } = require("./tagDetails");
const { dataComing } = require("./dataComing");
const { sectionTagDetails } = require("./sectionTagDetails");

const { addLog } = require("./TrackLogs/addLog");
const { DownloadHandler } = require("./dataExportNew");
const { dataExport } = require("./dataExport");
const { lineSectionDetails } = require("./lineSectionDetails");
const { sectionTagDetailsNew } = require("./sectionTagDetailsNew");
const { dataComingNew } = require("./dataComingNew");
const { dataExportStatus } = require("./dataExportStatus");
const { getAdditionalTagDetails } = require("./getAdditionalTagDetails");

const { fetchCentralData } = require("./CentralDashboard/fetchCentralData");
const {
  fetchCentralDataCluster,
} = require("./CentralDashboard/fetchCentralDataCluster");
const {
  fetchCentralLatestData,
} = require("./CentralDashboard/fetchCentralLatestData");
const {
  kilnShutdownDurationTracker,
} = require("./CentralDashboard/kilnShutdownDurationTracker");
const {
  cementShutdownDurationTracker,
} = require("./CentralDashboard/cementShutdownDurationTracker");

const {
  hoTagDetail,
} = require("./CentralDashboard/fetchHoTagDetail");

const { fetchUserCharts } = require("./_ChartVisualization/fetchUserCharts");
const { addChart } = require("./_ChartVisualization/addChart");
const { deleteChart } = require("./_ChartVisualization/deleteChart");
const { updateChart } = require("./_ChartVisualization/updateChart");

module.exports = {
  trendSitewise,
  trendadx,
  latestData,
  logAccessIP,
  logAccessIPNew,
  logAccessLogout,
  tagDetails,
  dataComing,
  sectionTagDetails,
  addLog,
  DownloadHandler,
  dataExport,
  sectionTagDetailsNew,
  lineSectionDetails,
  latestDataNew,
  dataComingNew,
  dataExportStatus,
  getAdditionalTagDetails,
  fetchCentralData,
  fetchCentralDataCluster,
  fetchCentralLatestData,
  kilnShutdownDurationTracker,
  cementShutdownDurationTracker,
  hoTagDetail,
  fetchUserCharts,
  addChart,
  deleteChart,
  updateChart,
};
