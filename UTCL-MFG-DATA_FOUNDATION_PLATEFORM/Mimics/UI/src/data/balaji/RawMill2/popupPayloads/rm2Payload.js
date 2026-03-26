import { rm2popup41, rm2popup42, rm2popup43 } from "../popupLists/rm2popup4";
import { rm2popup31, rm2popup32, rm2popup33 } from "../popupLists/rm2popup3";
import {
  rm2popup61,
  rm2popup62,
  rm2popup63,
  rm2popup64,
} from "../popupLists/rm2popup6";
import { rm2popup21, rm2popup22 } from "../popupLists/rm2poup2";
import { rm2popup11 } from "../popupLists/rm2popup1";

export const rawMill2Popup2Payload = {
  mainHeading: "PFEIFFER Hydraulic System",
  list1: rm2popup21,
  list2: rm2popup22,
};

export const rawMill2Popup3Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Rawmill-2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: rm2popup31,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: rm2popup32,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Cooling Water Temp",
      list: rm2popup33,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const rawMill2Popup4Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "362SR1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: rm2popup41,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Classifier Bearing Temperature",
      list: rm2popup42,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: rm2popup43,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const rawMill2Popup6Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "362FN2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: rm2popup61,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: rm2popup62,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: rm2popup63,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Cooling Water Temperature",
      list: rm2popup64,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const rawMill2Popup1Payload = {
  mainHeading: "GEAR BOX Lubrication",
  list1: rm2popup11,
  texts: [
    "362HE1",
    "362LU4",
    "362LU5",
    "362LU6",
    "362LU7",
    "362LU1",
    "362LU2",
    "362LU3",
    "INLET PRES",
    "INLET TEMP",
    "G OUTLET TEMP",
    "RPM",
    "G Box VIB",
  ],
  blackContainerText: [
    { label: "362LQ1_TT01" },
    { label: "362GB1_PT01" },
    { label: "362GB1_PT02" },
    { label: "362GB1_TB02", hhTime: 0, hhValue: 70 },
    { label: "362GB1_TB01", hhTime: 0, hhValue: 70 },
    { label: "362GB1_TB04", hhTime: 0, hhValue: 70 },
    { label: "362GB1_TB03", hhTime: 0, hhValue: 70 },
    { label: "362GB1_TB06", hhTime: 0, hhValue: 95 },
    { label: "362GB1_TB0B", hhTime: 0, hhValue: 85 },
    { label: "362GB1_TB0A", hhTime: 0, hhValue: 85 },
    { label: "362GB1_TB09", hhTime: 0, hhValue: 85 },
    { label: "362GB1_TB08", hhTime: 0, hhValue: 85 },
    { label: "362LQ1_TT03", hhTime: 0, hhValue: 70 },
    { label: "362GB1_TB05", hhTime: 0, hhValue: 95 },
    { label: "362GB1_TB07", hhTime: 0, hhValue: 95 },
    { label: "362GB1_TB08", hhTime: 0, hhValue: 85 },
  ],
};
