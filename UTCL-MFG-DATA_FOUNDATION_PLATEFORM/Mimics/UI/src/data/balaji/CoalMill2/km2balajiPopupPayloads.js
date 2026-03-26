import { km2popup11, km2popup12 } from "./km2balajiPopups/km2popup1";
import { km2popup21, km2popup22 } from "./km2balajiPopups/km2popup2";
import { km2popup31, km2popup32 } from "./km2balajiPopups/km2popup3";
import { km2popup41, km2popup42 } from "./km2balajiPopups/km2poup4";

export const km2balajiPopup1Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "L42GB1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Thrust Bearing Pad Temperature",
      list: km2popup11,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: km2popup12,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const km2balajiPopup2Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "L42MD1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: km2popup21,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: km2popup22,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const km2balajiPopup3Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "L42FN2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: km2popup31,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: km2popup32,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const km2balajiPopup4Payload = {
  mainHeading: "PFEIFFER Hydraulic System",
  list1: km2popup41,
  list2: km2popup42,
};
