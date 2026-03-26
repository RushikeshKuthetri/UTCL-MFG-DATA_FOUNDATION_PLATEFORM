import {
  kilnRoller1,
  kilnRoller2,
  kilnRoller3,
} from "../popupLists/kilnRoller";
import { mdTemp1, mdTemp2 } from "../popupLists/mdTemp";
import { temp1, temp12, temp13 } from "../popupLists/temp1";
import { temp2, temp22, temp23 } from "../popupLists/temp2";

export const kilnrollerPayload = {
  mainDivClass: "kiln-roller row mx-auto p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Kiln OP Pump Temp.",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "ROLLER 1",
      list: kilnRoller1,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "ROLLER 2",
      list: kilnRoller2,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "ROLLER 3",
      list: kilnRoller3,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const mdTempPayload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "461MD1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: mdTemp1,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: mdTemp2,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const temp1Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "481FN1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: temp1,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: temp12,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: temp13,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const temp2Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "481FN2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: temp2,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: temp22,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: temp23,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
