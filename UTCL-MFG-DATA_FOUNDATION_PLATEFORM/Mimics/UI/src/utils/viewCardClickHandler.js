import { accesslogshistory, addSessionStorage } from "../utils";

export const viewCardClickHandler = (plantId, data, dispatch) => {
  if (data?.openInNewTab) return;  // Skip below part because opening the plant info into new tab
  if (plantId) dispatch({ type: "ADD_PLANT", payload: [`${plantId}`] });
  if (data.cId) {
    dispatch({ type: "ADD_SECTION", payload: data?.cId });
  }
  if (data.category === "Plant") addSessionStorage("plantName", data?.name);
  else {
    accesslogshistory({
      plant: plantId,
      section: data?.name,
    });
    addSessionStorage("millName", data?.name);
   
    const isCollapsed = localStorage.getItem("collapsed") === "true";  // added by TRIDAI on 21-03 to collasape the leftdrawer when clicked on section
    if (!isCollapsed) {
      dispatch({ type: "TOGGLE_DRAWER" });
    }
  }
};
