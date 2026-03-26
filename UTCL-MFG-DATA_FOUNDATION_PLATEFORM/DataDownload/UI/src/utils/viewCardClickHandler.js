import { accesslogshistory, addSessionStorage } from "../utils";

export const viewCardClickHandler = (plantId, data, dispatch) => {
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
  }
};
