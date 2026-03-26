import { cm2popup11, cm2popup12 } from "../popupLists/cm2popup1";
import { cm2popup21, cm2popup22 } from "../popupLists/cm2popup2";
import { cm2popup31, cm2popup32 } from "../popupLists/cm2popup3";

export const cementMill2Popup1Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "562SR1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: cm2popup11,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: cm2popup12,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill2Popup2Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "562LQ4 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: cm2popup21,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: cm2popup22,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill2Popup3Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "562MD1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Winding Temperature",
      list: cm2popup31,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Bearing Temperature",
      list: cm2popup32,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
