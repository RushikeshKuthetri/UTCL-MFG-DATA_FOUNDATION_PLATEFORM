import { km1popup11, km1popup12 } from "./km1balajiPopups/km1popup1";
import { km1popup21, km1popup22 } from "./km1balajiPopups/km1popup2";
import { km1popup31, km1popup32 } from "./km1balajiPopups/km1popup3";
import { km1popup41, km1popup42 } from "./km1balajiPopups/km1poup4";

export const km1balajiPopup1Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "L41GB1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Thrust Bearing Pad Temperature",
      list: km1popup11,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: km1popup12,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const km1balajiPopup2Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "L41MD1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: km1popup21,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: km1popup22,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const km1balajiPopup3Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "L41FN2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: km1popup31,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: km1popup32,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const km1balajiPopup4Payload = {
  mainHeading: "PFEIFFER Hydraulic System",
  list1: km1popup41,
  list2: km1popup42,
};
