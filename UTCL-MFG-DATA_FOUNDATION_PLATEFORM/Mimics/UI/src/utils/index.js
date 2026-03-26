export { getSectionBasedOnPlant } from "./SelectionBoxOptions/sectionOption";
export { getPlants } from "./SelectionBoxOptions/plantOption";
export { minsIntervalOptions } from "./SelectionBoxOptions/intervalOption";
export { getTagnameBasedOnPlantAndSection } from "./SelectionBoxOptions/getTagname";
export { useValue } from "./customhooks/useValue";
export { useSocketConnection } from "./customhooks/useSocketConnection";
export { useLatestDataNew } from "./customhooks/useLatestData";
export { convertMsToHM } from "./convertMsToHM";
export { getNumberOfDays } from "./getNumberofDays";
export { addSessionStorage } from "./storageFunctions/sessionStorage";
export { addLocalStorage } from "./storageFunctions/localStorage";
export { getTrendsMinMaxData } from "./trends/getTrendsMinMaxData";
export { accesslogshistory } from "./apicalls/accesslogshistory";
export { getUserIP } from "./getUserIP";
export { isObjectEmpty } from "./isObjectEmpty";
export { getFromLocalStorage } from "./storageFunctions/localStorage";
export { getLiveDataStatusCondition } from "./getLiveDataStatusCondition";
export {
  useMotorTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useImgGateColorStatusForNewPlantScreen,
} from "./digitaltags/getColorStatus";

export {
  getTrendsData,
  openTrends,
  openTrendsOnMobile,
  trendChartApi,
  openGrafana,
} from "./apicalls/trendsapi";
export { useDigitalTagValue } from "./customhooks/digitaltags/useDigitalTagValue";
export { sentIPtoBackend } from "./sendIPtoBackend";
export { getSpecificPlant } from "./milldashboard/getSpecificPlant";
export { getLineCards } from "./milldashboard/getSectionPlantLinesWise";

export { viewCardClickHandler } from "./viewCardClickHandler";
export {
  useFanImgTagsColorStatus,
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useImgColorStatus,
  useImgHexaLColorStatus,
  useImgHexaRColorStatus,
  usePipeColorStatus,
} from "./digitaltags/RedGreenGreyFunctions/getRedGreenGreyColorStatus";

export {
  getDynamicColorOfProgressBar,
  getClinkerValue,
} from "./progressbar/progressbarUtils";

export { useSectionTagDetails } from "./customhooks/useSectionTagDetails";

export {
  plantValidation,
  tagValidation,
  startDateValidation,
  endDateValidation,
  intervalValidation,
} from "./filterValidation/filterValidation";

export { emailValidation } from "./emailValiation";

export { passwordValidation } from "./passwordValidation";

export { getPopupClassName } from "./getPopupClassName";

export * from "./digitaltags";

export {
  useKilnCentralisedDashboardValues,
  useCMCentralisedDashboardValues,
} from "./customhooks/centraliseddashboard/dashboardtablefunctions/getCentralisedDasboardValues";

export {
  getCentralisedTableData,
  getLatestDataForCentralisedDashboardTable,
  getKilnShutDownStatus,
  getCMShutDownStatus,
} from "./apicalls/centralisedDashboard";

// export { getMillsRunningCount } from "./centralised dashboard/getMillsRunningCount";
export { getKukurdihMainDashboardTagRunningStatus } from "./getKukurdihMainDashboardTagRunningStatus";

export {
  findKilnShutdownStatus,
  findCMShutdownStatus,
} from "./centraliseddashboard/findMillsShutdownStatus";

export { getPlantsForHOPDashboard } from "./centraliseddashboard/getHOPDashboardData";
