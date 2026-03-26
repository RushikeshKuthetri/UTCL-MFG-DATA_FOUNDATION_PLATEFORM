import { getTrendsMinMaxData } from "../../utils";

const initialState = {
  showPopUp: false,
  popupData: [],
  dates: {},
  label: "",
  showBalajiPopup: false,
  showBaikunthPopup: false,
  showMimicPopup: false,
  popupName: "",
  trendsMinMaxData: [],
  xAxisData: [],
  minimise: false,
  plantCode: "",
  plant: "",
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        ...state,
        showPopUp: true,
        label: action.payload?.label,
        minimise: false,
      };
    case "SHOW_BALAJI_POPUP":
      return { ...state, showBalajiPopup: true, popupName: action.payload };
    case "SHOW_BAIKUNTH_POPUP":
      return { ...state, showBaikunthPopup: true, popupName: action.payload };
    case "SHOW_MIMIC_POPUP":
      return {
        ...state,
        showMimicPopup: true,
        popupName: action.payload?.mimicName,
        plant: action.payload?.plant,
        plantCode: action.payload?.plantcode,
      };
    case "HIDE_POPUP":
      // need to clear interval
      // console.log("localStorage.getItem(trendIntervalID) trendsAPI Hide Popup--",localStorage.getItem("trendIntervalID"))

      if(localStorage.getItem("trendIntervalID")){
        // console.log("localStorage.getItem(trendIntervalID) trendsAPI hide pop up --",localStorage.getItem("trendIntervalID"))
        clearInterval(localStorage.getItem("trendIntervalID"))
      }
      return { ...state, showPopUp: false, showGraph: false, minimise: false };
    case "HIDE_BALAJI_POPUP":
      return { ...state, showBalajiPopup: false, popupName: "" };
    case "HIDE_BAIKUNTH_POPUP":
      return { ...state, showBaikunthPopup: false, popupName: "" };
    case "HIDE_MIMIC_POPUP":
      return {
        ...state,
        showMimicPopup: false,
        popupName: "",
        plant: "",
        plantCode: "",
      };
    case "POPUP_DATA":
      // console.log("POPUP_DATA -- reducer")
      // console.log("POPUP_DATA -- uniqueDataDateTime-",action.payload.uniqueDataDateTime)
      // console.log("POPUP_DATA -- intervalId-",action.intervalId)
      const trendsMinMaxData = getTrendsMinMaxData(action.payload.minMax);
      return {
        ...state,
        popupData: action.payload.seriesData,
        xAxisData: action.payload.uniqueDataDateTime,
        trendsMinMaxData,
      };
    case "SELECTED_DATES":
      return { ...state, dates: action.payload };
    case "TOGGLE_MAXIMISE_POPUP":
      return { ...state, minimise: !state.minimise };
    default:
      return state;
  }
};
