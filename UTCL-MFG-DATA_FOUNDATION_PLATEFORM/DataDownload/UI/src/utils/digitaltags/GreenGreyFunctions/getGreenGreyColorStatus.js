import { useValue } from "../../customhooks/useValue";

export const useSKCWColorStatus = (label) => {
  const nodeValue = useValue(label);
  switch (+nodeValue) {
    case 0:
      return "grey-color";

    case 1:
      return "green-color";
    default:
      return "grey-color";
  }
};
export const useSKCWCaretColorStatus = (label) => {
  const nodeValue = useValue(label);
  switch (+nodeValue) {
    case 0:
      return "grey-color-caret";

    case 1:
      return "green-color-caret";
    default:
      return "grey-color-caret";
  }
};

export const useSKCWImgColorStatus = (label) => {
  const nodeValue = useValue(label);
  switch (+nodeValue) {
    case 0:
      return "gray-img";

    case 1:
      return "green-img";
    default:
      return "gray-img";
  }
};
export const useFanSKCWImgTagsColorStatus = (label) => {
  const nodeValue = useValue(label);
  switch (+nodeValue) {
    case 0:
      return "c-grey-img-2";

    case 1:
      return "c-green-img-1";
    default:
      return "c-grey-img-2";
  }
};
