import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useDigitalTagValue = (label) => {
  const [value, setValue] = useState(-1);
  const dataArr = useSelector((state) => state.eventHubdata);
  useEffect(() => {
    const nodeValue = dataArr.filter((obj) => obj.key === label);
    if (nodeValue.length !== 0) {
      setValue(+nodeValue[0]?.value);
    }
  }, [dataArr, label]);
  return +value;
};
