import { useDigitalTagValue } from "../index";
// New Plant Digital Tag Functionality---From Kotpulti

export const useMotorTagsColorStatusForNewPlantScreens = ({
  runLabel,
  healthyLabel,
}) => {
  const runStatus = useDigitalTagValue(runLabel);
  const healthyStatus = useDigitalTagValue(healthyLabel);
  switch (runStatus) {
    case 0:
      if (healthyStatus === 1) return "grey-color";
      else if (healthyStatus === 0) return "red-color";
      else return "grey-color";
    case 1:
      return "green-color";
    default:
      return "grey-color";
  }
};

export const useFanImgsTagsColorStatusForNewPlantScreens = (label) => {
  const runLabel = `${label}_RUN`;
  const healthyLabel = `${label}_PH`;
  const runStatus = useDigitalTagValue(runLabel);
  const healthyStatus = useDigitalTagValue(healthyLabel);
  switch (runStatus) {
    case 0:
      if (healthyStatus === 1) return "c-grey-img-2";
      else if (healthyStatus === 0) return "c-red-img-3";
      else return "c-grey-img-2";
    case 1:
      return "c-green-img-1";
    default:
      return "c-grey-img-2";
  }
};

export const useBVTagsColorStatusForNewPlantScreens = ({
  openLabel,
  closeLabel,
}) => {
  const openStatus = useDigitalTagValue(openLabel);
  const closeStatus = useDigitalTagValue(closeLabel);
  switch (openStatus) {
    case 0:
      if (closeStatus === 0) return "red-color-caret";
      else if (closeStatus === 1) return "grey-color-caret";
      else return "grey-color-caret";
    case 1:
      if (closeStatus === 0) return "green-color-caret";
      else if (closeStatus === 1) return "red-color-caret";
      else return "grey-color-caret";
    default:
      return "grey-color-caret";
  }
};

export const useDampersValveTagsColorStatusForNewPlantScreens = ({
  openLabel,
  closeLabel,
}) => {
  const openStatus = useDigitalTagValue(openLabel);
  const closeStatus = useDigitalTagValue(closeLabel);
  switch (openStatus) {
    case 0:
      if (closeStatus === 0) return "red-color";
      else if (closeStatus === 1) return "grey-color";
      else return "grey-color";
    case 1:
      if (closeStatus === 0) return "green-color";
      else if (closeStatus === 1) return "red-color";
      else return "grey-color";
    default:
      return "grey-color";
  }
};

export const useGateTagsColorStatusForNewPlantScreens = ({
  openLabel,
  closeLabel,
  healthyLabel,
}) => {
  const healthyStatus = useDigitalTagValue(healthyLabel);
  const openStatus = useDigitalTagValue(openLabel);
  const closeStatus = useDigitalTagValue(closeLabel);
  switch (healthyStatus) {
    case 0:
      if (openStatus === 0 && closeStatus === 0) return "red-color";
      else if (openStatus === 0 && closeStatus === 1) return "red-color";
      else if (openStatus === 1 && closeStatus === 0) return "red-color";
      else if (openStatus === 1 && closeStatus === 1) return "red-color";
      else return "grey-color";
    case 1:
      if (openStatus === 0 && closeStatus === 0) return "grey-color";
      else if (openStatus === 0 && closeStatus === 1) return "grey-color";
      else if (openStatus === 1 && closeStatus === 0) return "green-color";
      else if (openStatus === 1 && closeStatus === 1) return "red-color";
      else return "grey-color";
    default:
      return "grey-color";
  }
};

export const useImgColorStatusForNewPlantScreen = ({
  openLabel,
  closeLabel,
}) => {
  const openStatus = useDigitalTagValue(openLabel);
  const closeStatus = useDigitalTagValue(closeLabel);
  switch (openStatus) {
    case 0:
      if (closeStatus === 0) return "red-img";
      else if (closeStatus === 1) return "gray-img";
      else return "gray-img";
    case 1:
      if (closeStatus === 0) return "green-img";
      else if (closeStatus === 1) return "red-img";
      else return "gray-img";
    default:
      return "gray-img";
  }
};

export const useImgGateColorStatusForNewPlantScreen = ({
  openLabel,
  closeLabel,
  healthyLabel,
}) => {
  const healthyStatus = useDigitalTagValue(healthyLabel);
  const openStatus = useDigitalTagValue(openLabel);
  const closeStatus = useDigitalTagValue(closeLabel);
  switch (healthyStatus) {
    case 0:
      if (openStatus === 0 && closeStatus === 0) return "red-img";
      else if (openStatus === 0 && closeStatus === 1) return "red-img";
      else if (openStatus === 1 && closeStatus === 0) return "red-img";
      else if (openStatus === 1 && closeStatus === 1) return "red-img";
      else return "gray-img";
    case 1:
      if (openStatus === 0 && closeStatus === 0) return "gray-img";
      else if (openStatus === 0 && closeStatus === 1) return "gray-img";
      else if (openStatus === 1 && closeStatus === 0) return "green-img";
      else if (openStatus === 1 && closeStatus === 1) return "red-img";
      else return "gray-img";
    default:
      return "gray-img";
  }
};

export const useColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "red-color";

    case 1:
      return "green-color";
    default:
      return "grey-color";
  }
};