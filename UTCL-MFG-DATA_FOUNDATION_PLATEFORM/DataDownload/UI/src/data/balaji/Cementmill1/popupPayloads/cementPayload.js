import { cm1popup61, cm1popup62, cm1popup63 } from "../popupLists/cm1popup6";
import {
  cm1popup51,
  cm1popup52,
  cm1popup53,
  cm1popup54,
} from "../popupLists/cm1popup5";
import {
  cm1popup41,
  cm1popup42,
  cm1popup43,
  cm1popup44,
} from "../popupLists/cm1popup4";
import { cm1popup11, cm1popup12 } from "../popupLists/cm1popup1";
import { cm1popup71 } from "../popupLists/cm1popup7";
import { cm1popup81 } from "../popupLists/cm1popup8";

export const cementMill1Popup1Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "561MD1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm1popup11,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm1popup12,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill1Popup4Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "561FNC Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm1popup41,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm1popup42,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: cm1popup43,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Vibration",
      list: cm1popup44,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const cementMill1Popup5Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "561FNB Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm1popup51,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm1popup52,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: cm1popup53,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Vibration",
      list: cm1popup54,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill1Popup6Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "561SR1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm1popup61,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm1popup62,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Separator Temperature",
      list: cm1popup63,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill1Popup7Payload = {
  mainHeading: "561LQ1",
  list1: cm1popup71,
  circleText: ["561LU1", "561LU2", "561LU3"],
};

export const cementMill1Popup8Payload = {
  mainHeading: "561LQ2",
  list1: cm1popup81,
  circleText: ["561LU4", "561LU5", "561LU6"],
};
