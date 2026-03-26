import { isObjectEmpty } from "./isObjectEmpty";
import { getFromLocalStorage } from "./storageFunctions/localStorage";

export const getLiveDataStatusCondition = (plantCode) => {
  const storageLiveDataStaus = getFromLocalStorage("plant_data_coming_status");
  const parsedObj = JSON.parse(storageLiveDataStaus);
  // console.log({parsedObj})
  const objEmptyStatus = isObjectEmpty(parsedObj);
  return !objEmptyStatus && parsedObj && parsedObj[plantCode];
};
