import { rm1popup41, rm1popup42, rm1popup43 } from "../popupLists/rm1popup4";
import { rm1popup31, rm1popup32, rm1popup33 } from "../popupLists/rm1popup3";
import {
  rm1popup21,
  rm1popup22,
  rm1popup23,
  rm1popup24,
} from "../popupLists/rm1popup2";
import { rm1popup61, rm1popup62 } from "../popupLists/rm1poup6";
import {
  rm1popup51,
  rm1popup52,
  rm1popup53,
  rm1popup54,
} from "../popupLists/rm1popup5";
import { rm1popup11 } from "../popupLists/rm1popup1";

export const rawMill1Popup6Payload = {
  mainHeading: "PFEIFFER Hydraulic System",
  list1: rm1popup61,
  list2: rm1popup62,
};

export const rawMill1Popup3Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Rawmill-1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: rm1popup31,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: rm1popup32,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Cooling Water Temp",
      list: rm1popup33,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const rawMill1Popup4Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "361SR1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: rm1popup41,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Classifier Bearing Temperature",
      list: rm1popup42,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: rm1popup43,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const rawMill1Popup2Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "361FN2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: rm1popup21,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: rm1popup22,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: rm1popup23,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Cooling Air Temperature",
      list: rm1popup24,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const rawMill1Popup5Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "391MD1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor-1 Winding Temperature",
      list: rm1popup51,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor-2 Winding Temperature",
      list: rm1popup52,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor-1 Bearing Temperature",
      list: rm1popup53,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor-2 Bearing Temperature",
      list: rm1popup54,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const rawMill1Popup1Payload = {
  mainHeading: "GEAR BOX Lubrication",
  list1: rm1popup11,
  texts: [
    "361HE1",
    "361LU4",
    "361LU5",
    "361LU6",
    "361LU7",
    "361LU1",
    "361LU2",
    "361LU3",
    "INLET PRES",
    "INLET TEMP",
    "G OUTLET TEMP",
    "RPM",
    "G Box VIB",
  ],
  blackContainerText: [
    { label: "361LQ1_TT01" },
    { label: "361GB1_PT01" },
    { label: "361GB1_PT02" },
    { label: "361GB1_TB02", hhTime: 0, hhValue: 70 },
    { label: "361GB1_TB01", hhTime: 0, hhValue: 70 },
    { label: "361GB1_TB04", hhTime: 0, hhValue: 70 },
    { label: "361GB1_TB03", hhTime: 0, hhValue: 70 },
    { label: "361GB1_TB06", hhTime: 0, hhValue: 95 },
    { label: "361GB1_TB0B", hhTime: 0, hhValue: 85 },
    { label: "361GB1_TB0A", hhTime: 0, hhValue: 85 },
    { label: "361GB1_TB09", hhTime: 0, hhValue: 85 },
    { label: "361GB1_TB08", hhTime: 0, hhValue: 85 },
    { label: "361LQ1_TT03", hhTime: 0, hhValue: 70 },
    { label: "361GB1_TB05", hhTime: 0, hhValue: 95 },
    { label: "361GB1_TB07", hhTime: 0, hhValue: 95 },
    { label: "361GB1_TB08", hhTime: 0, hhValue: 85 },
  ],
};
