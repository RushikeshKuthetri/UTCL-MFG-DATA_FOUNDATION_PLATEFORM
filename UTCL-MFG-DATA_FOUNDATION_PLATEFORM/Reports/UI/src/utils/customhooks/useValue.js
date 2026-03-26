import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// This function is used to display event hub data in th UI

export const useValue = (label) => {
  const [value, setValue] = useState(0);
  const dataArr = useSelector((state) => state.eventHubdata);
  useEffect(() => {
    const nodeValue = dataArr.filter((obj) => obj.key === label);
    if (nodeValue.length !== 0) {
      setValue((+nodeValue[0]?.value).toFixed(2));
    }
  }, [dataArr, label]);
  return value;
};
