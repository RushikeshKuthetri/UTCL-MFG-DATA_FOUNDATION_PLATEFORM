// import { useValue } from "../../useValue";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useHOTableValue = (label, plant) => {
  const [value, setValue] = useState(null);
  const dataArr = useSelector((state) => state.eventHubdata);
  useEffect(() => {
    const nodeValue = dataArr.filter(
      (obj) => obj.plant === plant && obj.key === label
    );
    if (nodeValue.length !== 0) {
      if (nodeValue[0]?.value === "") setValue(null);
      else setValue((+nodeValue[0]?.value).toFixed(2));
    }
  }, [dataArr, label, plant]);
  return value;
};

export const lengthCondition = (value) => {
  if (typeof value === "string") {
    return value.split(".")[0].length;
  }
};
export const useKilnCentralisedDashboardValues = (label, plant, kilnShutdownDays) => {
  const value = useHOTableValue(label, plant);
  var valLength = lengthCondition(value);
  if (!kilnShutdownDays?.isLatestDataComing) {
    return "grey-color"
  }
  if (value === null) return "grey-color";
  else if (+value > 50 && valLength < 4) return "green-color";
  else if (+value < 50 || valLength > 3) return "red-color";
  else return "grey-color";
};

export const useCMCentralisedDashboardValues = (label, plant, cmShutdownDays) => {
  const value = useHOTableValue(label, plant);
  var valLength = lengthCondition(value);
  if (!cmShutdownDays?.isLatestDataComing) {
    return "grey-color"
  }
  if (value === null) return "grey-color";
  else if (+value > 10 && valLength < 4) return "green-color";
  else if (+value < 10 || valLength > 3) return "red-color";
  else return "grey-color";
};
