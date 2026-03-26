import moment from "moment";
const getInitialCollapsed = () => {
  try {
    const value = localStorage.getItem("collapsed");
    return value === "true";
  } catch (e) {
    return false;
  }
};
const initialState = {
  tagnames: [],
  // endDate: moment(new Date()).format("YYYY-MM-DDTHH:mm"),
  // startDate: moment(new Date(moment(new Date()).subtract(1, "hour"))).format(
  //   "YYYY-MM-DDTHH:mm"
  // ),
  endDate: null,
  startDate: null,
  plant: [],
  section: "",
  interval: 1,
  selectedTagnames: [],
  filterError: "",
  isLoading: false,
 collapsed: getInitialCollapsed(),
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLANT":
      return { ...state, plant: action.payload };
    case "ADD_SECTION":
      return { ...state, section: action.payload };
    case "ADD_INTERVAL":
      return { ...state, interval: action.payload };
    case "ADD_TAGNAMES":
      const tagnameWithValue = action.payload.map((obj) => obj["Tag Name"]);
      return { ...state, tagnames: tagnameWithValue };
    case "ADD_SELECTED_TAGNAMES":
      const uniqueSelectedTagnames = [
        ...new Set([...state.selectedTagnames, action.payload].flat()),
      ];
      return {
        ...state,
        selectedTagnames: uniqueSelectedTagnames,
      };
    case "REMOVE_SELECTED_TAGNAMES":
      return { ...state, selectedTagnames: [] };
    case "CLEAN_TAGNAMES":
      return {
        ...state,
        tagnames: [],
        startDate: moment(
          new Date(moment(new Date()).subtract(1, "hour"))
        ).format("YYYY-MM-DDTHH:mm"),
        endDate: moment(new Date()).format("YYYY-MM-DDTHH:mm"),
      };
    case "ADD_START_DATE":
      return { ...state, startDate: action.payload };
    case "ADD_END_DATE":
      return { ...state, endDate: action.payload };
    case "FILTER_ERROR":
      return { ...state, filterError: action.payload };
    case "START_LOADER":
      return { ...state, isLoading: true };
    case "STOP_LOADER":
      return { ...state, isLoading: false };
      case "TOGGLE_DRAWER":
        console.log("TOGGLE_DRAWER triggered", state.collapsed);
      return {
        ...state,
        collapsed: !state.collapsed,
      };

    default:
      return state;
  }
};
