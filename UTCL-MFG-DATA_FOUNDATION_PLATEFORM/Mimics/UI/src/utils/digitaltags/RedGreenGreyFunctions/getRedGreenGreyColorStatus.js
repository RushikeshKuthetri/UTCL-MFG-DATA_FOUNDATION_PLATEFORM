import { useDigitalTagValue } from "../../customhooks/digitaltags/useDigitalTagValue";

// green red grey
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

export const useCaretColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "red-color-caret";

    case 1:
      return "green-color-caret";
    default:
      return "grey-color-caret";
  }
};

export const useImgColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "red-img";

    case 1:
      return "green-img";
    default:
      return "gray-img";
  }
};

export const useImgHexaLColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "hexa-r-left";

    case 1:
      return "hexa-g-left";
    default:
      return "hexa-grey-left";
  }
};
export const useImgHexaRColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "hexa-r-right";

    case 1:
      return "hexa-g-right";
    default:
      return "hexa-grey-right";
  }
};

export const useFanImgTagsColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "c-red-img-3";

    case 1:
      return "c-green-img-1";
    default:
      return "c-grey-img-2";
  }
};

export const useBorderTagsColorStatus = (label) => {
  const tagValue = useDigitalTagValue(label);
  switch (tagValue) {
    case 0:
      return "red-border";
    case 1:
      return "green-border";
    default:
      return "grey-border";
  }
};

export const usePipeColorStatus = (label) => {
  const value = useDigitalTagValue(label);
  switch (value) {
    case 0:
      return "arrow-pipe-red";
    case 1:
      return "arrow-pipe-green";
    default:
      return "arrow-pipe-gray";
  }
};
