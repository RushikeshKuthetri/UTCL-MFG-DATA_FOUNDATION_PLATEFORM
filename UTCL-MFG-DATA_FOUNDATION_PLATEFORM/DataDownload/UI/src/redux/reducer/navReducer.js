import { removeSessionStorage } from "../../utils/storageFunctions/sessionStorage";

const initialState = {
  plant: "",
  section: "",
};
export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_PLANT_IN_NAV":
      localStorage.setItem("plantName", action.payload);
      localStorage.removeItem("millName");
      return { ...state, plant: action.payload, section: "" };
    case "REMOVE_PLANT_IN_NAVBAR":
      removeSessionStorage("millName");
      removeSessionStorage("plantName");
      localStorage.removeItem("millName");
      localStorage.removeItem("plantName");
      return { ...state, plant: "", section: "" };

    case "SHOW_SECTION_IN_NAV":
      localStorage.setItem("plantName", action.payload.plantName);
      localStorage.setItem("millName", action.payload.sectionName);
      return {
        ...state,
        section: action.payload.sectionName,
        plant: action.payload.plantName,
      };
    default:
      return state;
  }
};
