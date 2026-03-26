import { cm3popup101, cm3popup102 } from "../popupLists/cm3popup10";
import {
  cm3popup111,
  cm3popup112,
  cm3popup113,
} from "../popupLists/cm3popup11";
import {
  cm3popup131,
  cm3popup132,
  cm3popup133,
} from "../popupLists/cm3popup13";
import { cm3popup71, cm3popup72 } from "../popupLists/cm3popup7";
import { cm3popup81, cm3popup82 } from "../popupLists/cm3popup8";
import { cm3popup91, cm3popup92 } from "../popupLists/cm3popup9";
import {
  cmpopuplq11,
  cmpopuplq12,
  cmpopuplq14,
} from "../popupLists/cmpopuplq1";
import {
  cmpopuplq21,
  cmpopuplq22,
  cmpopuplq24,
} from "../popupLists/cm3popuplq2";
import {
  cmpopuplq31,
  cmpopuplq32,
  cmpopuplq34,
} from "../popupLists/cm3popuplq3";
import {
  cmpopuplq41,
  cmpopuplq42,
  cmpopuplq44,
} from "../popupLists/cm3popuplq4";
import {
  cm3popup141,
  cm3popup142,
  cm3popup143,
} from "../popupLists/cm3popup14";

export const cementMill3Popup7Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Main Drive Motor-1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm3popup71,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm3popup72,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const cementMill3Popup8Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Main Drive Motor-2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm3popup81,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm3popup82,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
export const cementMill3Popup1Payload = {
  mainHeading: "GEAR OIL SUPPLY UNIT(563LQ1)",
  list1: cmpopuplq11,
  list2: cmpopuplq12,
  text: ["563LUO", "563LU1", "563LU2"],
  list4: cmpopuplq14,
  data2: {
    label: "563LQ1_TT02",
    useClass: "greenTxt position-absolute single-text-17",
    unit: "°C",
    unitColor: "unitColor",
  },
};

export const cementMill3Popup9Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Main Drive Motor-3 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm3popup91,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm3popup92,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill3Popup10Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "Main Drive Motor-4 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm3popup101,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm3popup102,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill3Popup11Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "563FN2 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm3popup111,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm3popup112,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Fan Bearing Temperature",
      list: cm3popup113,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill3Popup13Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "563SR1 Temperature",
  dataList: [
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Winding Temperature",
      list: cm3popup131,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Motor Bearing Temperature",
      list: cm3popup132,
      useClass: "d-flex justify-content-between mt-1",
    },
    {
      divClass: "CGRnBox p-1",
      headingClass: "text-white text-center bb-1",
      heading: "Seperator Bearing Temperature",
      list: cm3popup133,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const cementMill3Popup2Payload = {
  mainHeading: "GEAR OIL SUPPLY UNIT(563LQ2)",
  list1: cmpopuplq21,
  list2: cmpopuplq22,
  text: ["563LUP", "563LU3", "563LU4"],

  list4: cmpopuplq24,
  data2: {
    label: "563LQ2_TT02",
    useClass: "greenTxt position-absolute single-text-17",
    unit: "°C",
    unitColor: "unitColor",
  },
};

export const cementMill3Popup3Payload = {
  mainHeading: "GEAR OIL SUPPLY UNIT(563LQ3)",
  list1: cmpopuplq31,
  list2: cmpopuplq32,
  text: ["563LUQ", "563LU5", "563LU5"],
  list4: cmpopuplq34,
  data2: {
    label: "563LQ3_TT02",
    useClass: "greenTxt position-absolute single-text-17",
    unit: "°C",
    unitColor: "unitColor",
  },
};

export const cementMill3Popup4Payload = {
  mainHeading: "GEAR OIL SUPPLY UNIT(563LQ4)",
  list1: cmpopuplq41,
  list2: cmpopuplq42,
  text: ["563LUR", "563LU7", "563LU8"],
  list4: cmpopuplq44,
  data2: {
    label: "563LQ4_TT02",
    useClass: "greenTxt position-absolute single-text-17",
    unit: "°C",
    unitColor: "unitColor",
  },
};

export const cementMill3Popup14Payload = {
  list1: cm3popup141,
  list2: cm3popup142,
  list3: cm3popup143,
  circle: "563BL6",
  circleLabel: ["563BL7", "563LUK", "563LUJ", "563BL1", "563LQ6", "563SR1"],
};
