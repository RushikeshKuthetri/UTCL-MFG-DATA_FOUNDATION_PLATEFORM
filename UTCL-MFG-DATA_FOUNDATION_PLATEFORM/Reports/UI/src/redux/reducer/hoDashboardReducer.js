import { getPlantsForHOPDashboard } from "../../utils";
import { getMillStatusCount } from "../../utils/centraliseddashboard/getMillsRunningCount";

const initialState = {
  loader: false,
  north: [],
  south: [],
  central: [],
  vidharbha: [],
  east: [],
  west: [],
  centralisedDashboardPlants: [],
  kiln: {
    running: 0,
    stopped: 0,
    unreachable: 0,
    total: 0,
    greenColorTags: [],
    greyColorTags: [],
    redColorTags: [],
  },
  cementmill: {
    running: 0,
    stopped: 0,
    total: 0,
    unreachable: 0,
    greenColorTags: [],
    greyColorTags: [],
    redColorTags: [],
  },
  kilnShutdownStatusData: [],
  cmShutdownStatusData: [],
  hopPlants: {
    south: ["APCW", "KACW"],
    north: ["KCW", "RJCW"],
    east: ["KUCW", "RWCW"],
    central: ["MACW"],
    plants: ["APCW", "KACW", "KCW", "RJCW", "KUCW", "RWCW", "MACW"],
  },
};

export const hoDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HO_DASHBOARD_LOADING_TRUE":
      return { ...state, loader: true };
    case "HO_DASHBOARD_LOADING_FALSE":
      return { ...state, loader: false };
    case "INSERT_CENTRALISED_TABLE_DATA":
      return {
        ...state,
        central: action.payload?.Central,
        south: action.payload?.South,
        north: action.payload?.North,
        vidharbha: action.payload?.Vidharbha,
        east: action.payload?.East,
        west: action.payload?.West,
        centralisedDashboardPlants: action.payload?.Plants,
        kiln: { ...state.kiln, total: action.payload?.runningKilnsCount },
        cementmill: {
          ...state.cementmill,
          total: action.payload?.runningCementMillsCount,
        },
      };
    case "INSERT_HO_PROJECT_TABLE_DATA":
      var centralArr = getPlantsForHOPDashboard(
        state.hopPlants.central,
        action.payload?.Central
      );
      var southArr = getPlantsForHOPDashboard(
        state.hopPlants.south,
        action.payload?.South
      );
      var eastArr = getPlantsForHOPDashboard(
        state.hopPlants.east,
        action.payload?.East
      );
      var northArr = getPlantsForHOPDashboard(
        state.hopPlants.north,
        action.payload?.North
      );

      return {
        ...state,
        central: centralArr,
        south: southArr,
        north: northArr,
        east: eastArr,
        centralisedDashboardPlants: state.hopPlants.plants,
        kiln: { ...state.kiln, total: 11 },
        cementmill: {
          ...state.cementmill,
          total: 17,
        },
      };
    case "KILN_RUNNING_COUNT":
      var kilnTagsList = getMillStatusCount(
        action.payload,
        state.kiln.greenColorTags,
        state.kiln.greyColorTags,
        state.kiln.redColorTags
      );
      return {
        ...state,
        kiln: {
          ...state.kiln,
          running: kilnTagsList.greenColorTagsList.length,
          stopped: kilnTagsList.redColorTagsList.length,
          unreachable:
            state.kiln.total -
            (kilnTagsList.greenColorTagsList.length +
              kilnTagsList.redColorTagsList.length),
          greenColorTags: kilnTagsList.greenColorTagsList,
          greyColorTags: kilnTagsList.greyColorTagsList,
          redColorTags: kilnTagsList.redColorTagsList,
        },
      };

    case "CM_RUNNING_COUNT":
      var cmTagsList = getMillStatusCount(
        action.payload,
        state.cementmill.greenColorTags,
        state.cementmill.greyColorTags,
        state.cementmill.redColorTags
      );
      return {
        ...state,
        cementmill: {
          ...state.cementmill,
          running: cmTagsList.greenColorTagsList.length,
          stopped: cmTagsList.redColorTagsList.length,
          unreachable:
            state.cementmill.total -
            (cmTagsList.greenColorTagsList.length +
              cmTagsList.redColorTagsList.length),
          greenColorTags: cmTagsList.greenColorTagsList,
          greyColorTags: cmTagsList.greyColorTagsList,
          redColorTags: cmTagsList.redColorTagsList,
        },
      };
    case "KILN_SHUTDOWN_STATUS":
      return { ...state, kilnShutdownStatusData: action.payload };
    case "CM_SHUTDOWN_STATUS":
      return { ...state, cmShutdownStatusData: action.payload };
    default:
      return state;
  }
};
