import {
  vishnupuramline2cespfanpopup4,
  vishnupuramline2espfanpopup1,
  vishnupuramline2wgfan1popup2,
  vishnupuramline2wgfan2popup3,
} from "../popupLists";

export const kiln2VishnupuramL2Popup1Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "ESP Fan Parameters",
  dataList: [
    {
      divClass: "p-1",
      list: vishnupuramline2espfanpopup1,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};

export const kiln2VishnupuramL2Popup2Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "PH FAN-1",
  dataList: [
    {
      divClass: "p-1",
      list: vishnupuramline2wgfan1popup2,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
  childrenData: [
    {
      divClass: "p-1",
      childHeading: {
        className: "text-white text-center bb-1",
        text: "PHF-1 GRR BLOWERS ON INDICATIONS",
      },
      childData: [
        "K2_WGF1_GRR_BLR1_FB",
        "K2_WGF1_GRR_BLR2_FB",
        "K2_WGF1_GRR_BLR3_FB",
        "K2_WGF1_GRR_BLR4_FB",
        "K2_WGF1_GRR_BLR5_FB",
        "K2_WGF1_GRR_BLR6_FB",
      ],
    },
    {
      divClass: "p-1",
      childHeading: {
        className: "text-white text-center bb-1",
        text: "PHF-1 MOTOR COOLING BLOWERS ON INDICATIONS",
      },
      childData: ["K2_WGF1_CBLR1_FB", "K2_WGF1_CBLR2_FB"],
    },
  ],
};

export const kiln2VishnupuramL2Popup3Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "PH FAN-2",
  dataList: [
    {
      divClass: "p-1",
      list: vishnupuramline2wgfan2popup3,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
  childrenData: [
    {
      divClass: "p-1",
      childHeading: {
        className: "text-white text-center bb-1",
        text: "PHF-2 GRR BLOWERS ON INDICATIONS",
      },
      childData: [
        "K2_WGF2_GRR_BLR1_FB",
        "K2_WGF2_GRR_BLR2_FB",
        "K2_WGF2_GRR_BLR3_FB",
        "K2_WGF2_GRR_BLR4_FB",
        "K2_WGF2_GRR_BLR5_FB",
        "K2_WGF2_GRR_BLR6_FB",
      ],
    },
    {
      divClass: "p-1",
      childHeading: {
        className: "text-white text-center bb-1",
        text: "PHF-2 MOTOR COOLING BLOWERS ON INDICATIONS",
      },
      childData: ["K2_WGF2_CBLR1_FB", "K2_WGF2_CBLR2_FB"],
    },
  ],
};
export const kiln2VishnupuramL2Popup4Payload = {
  mainDivClass: "mdTemp-popup p-2",
  secondDivClass: "col-12 p-1",
  mainHeading: "COOLER ESP FAN",
  dataList: [
    {
      divClass: "p-1",
      list: vishnupuramline2cespfanpopup4,
      useClass: "d-flex justify-content-between mt-1",
    },
  ],
};
