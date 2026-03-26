const initialState = {
  mdTemp: false,
  popup441FN1: false,
  popup451FN1: false,
  criticalAlarm: false,
  temp1: false,
  temp2: false,
  kilnRoller: false,
  firingBlower: false,
  coolerPopup1: false,
  coolerPopup2: false,
  coolerPopup3: false,
  coolerPopup4: false,
  coolerPopup5: false,
  coolerPopup6: false,
  coolerPopup7: false,
  coolerPopup8: false,
  coolerPopup9: false,
  coolerPopupA: false,
  coolerPopupB: false,
  coolerPopupC: false,
  coolerPopupD: false,
  cementMill3Popup1: false,
  cementMill3Popup2: false,
  cementMill3Popup3: false,
  cementMill3Popup4: false,
  cementMill3Popup5: false,
  cementMill3Popup6: false,
  cementMill3Popup7: false,
  cementMill3Popup8: false,
  cementMill3Popup9: false,
  cementMill3Popup10: false,
  cementMill3Popup11: false,
  cementMill3Popup12: false,
  cementMill3Popup13: false,
  cementMill3Popup14: false,
  cementMill3Popup16: false,
  cementMill1Popup1: false,
  cementMill1Popup2: false,
  cementMill1Popup3: false,
  cementMill1Popup4: false,
  cementMill1Popup5: false,
  cementMill1Popup6: false,
  cementMill1Popup7: false,
  cementMill1Popup8: false,
  cementMill1Popup9: false,
  cementMill1Popup10: false,
  cementMill1Popup11: false,
  cementMill1Popup12: false,
  cementMill1Popup13: false,
  cementMill1Popup14: false,
  cementMill1Popup16: false,
  rawMill2popup3: false,
  rawMill2popup4: false,
  rawMill2popup6: false,
  rawMill2popup1: false,
  rawMill2popup2: false,
  rawMill2popup5: false,
  coalMill1Popup1: false,
  coalMill1Popup2: false,
  coalMill1Popup3: false,
  coalMill1Popup4: false,
  cementMill2Popup1: false,
  cementMill2Popup2: false,
  cementMill2Popup3: false,
  rawMill1popup3: false,
  rawMill1popup4: false,
  rawMill1popup6: false,
  rawMill1popup1: false,
  rawMill1popup2: false,
  rawMill1popup5: false,
  balajiSection: "",
  baikunthCoalMillsOverview: false,
  rajshreeKilnMD1Temp: false,
  rajshreeKilnMD2Temp: false,
  rajshreeKilnGB1Temp: false,
  rajshreeKilnGB2Temp: false,
};

export const balajiPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MD_POPUP":
      return {
        ...state,
        mdTemp: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "441FN1":
      return {
        ...state,
        popup441FN1: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "451FN1":
      return {
        ...state,
        popup451FN1: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "CritcalAlarm":
      return {
        ...state,
        criticalAlarm: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "Temp1":
      return {
        ...state,
        temp1: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "Temp2":
      return {
        ...state,
        temp2: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "KilnRoller":
      return {
        ...state,
        kilnRoller: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "Firing":
      return {
        ...state,
        firingBlower: action.payload,
        balajiSection: "Kiln-Preheater",
      };
    case "COOLER_POPUP_1":
      return {
        ...state,
        coolerPopup1: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_2":
      return {
        ...state,
        coolerPopup2: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_3":
      return {
        ...state,
        coolerPopup3: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_4":
      return {
        ...state,
        coolerPopup4: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_5":
      return {
        ...state,
        coolerPopup5: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_6":
      return {
        ...state,
        coolerPopup6: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_7":
      return {
        ...state,
        coolerPopup7: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_8":
      return {
        ...state,
        coolerPopup8: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_9":
      return {
        ...state,
        coolerPopup9: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_A":
      return {
        ...state,
        coolerPopupA: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_B":
      return {
        ...state,
        coolerPopupB: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_C":
      return {
        ...state,
        coolerPopupC: action.payload,
        balajiSection: "Cooler",
      };
    case "COOLER_POPUP_D":
      return {
        ...state,
        coolerPopupD: action.payload,
        balajiSection: "Cooler",
      };
    case "CEMENT_MILL3_POPUP_1":
      return {
        ...state,
        cementMill3Popup1: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_2":
      return {
        ...state,
        cementMill3Popup2: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_3":
      return {
        ...state,
        cementMill3Popup3: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_4":
      return {
        ...state,
        cementMill3Popup4: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_5":
      return {
        ...state,
        cementMill3Popup5: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_6":
      return {
        ...state,
        cementMill3Popup6: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_7":
      return {
        ...state,
        cementMill3Popup7: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_8":
      return {
        ...state,
        cementMill3Popup8: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_9":
      return {
        ...state,
        cementMill3Popup9: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_10":
      return {
        ...state,
        cementMill3Popup10: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_11":
      return {
        ...state,
        cementMill3Popup11: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_12":
      return {
        ...state,
        cementMill3Popup12: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_13":
      return {
        ...state,
        cementMill3Popup13: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_14":
      return {
        ...state,
        cementMill3Popup14: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL3_POPUP_16":
      return {
        ...state,
        cementMill3Popup16: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_1":
      return {
        ...state,
        cementMill1Popup1: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_2":
      return {
        ...state,
        cementMill1Popup2: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_3":
      return {
        ...state,
        cementMill1Popup3: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_4":
      return {
        ...state,
        cementMill1Popup4: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_5":
      return {
        ...state,
        cementMill1Popup5: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_6":
      return {
        ...state,
        cementMill1Popup6: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_7":
      return {
        ...state,
        cementMill1Popup7: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_8":
      return {
        ...state,
        cementMill1Popup8: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_9":
      return {
        ...state,
        cementMill1Popup9: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL1_POPUP_10":
      return {
        ...state,
        cementMill1Popup10: action.payload,
        balajiSection: "Cement Mill",
      };
    case "RAW_MILL2_POPUP_3":
      return {
        ...state,
        rawMill2popup3: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL2_POPUP_4":
      return {
        ...state,
        rawMill2popup4: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL2_POPUP_6":
      return {
        ...state,
        rawMill2popup6: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL2_POPUP_1":
      return {
        ...state,
        rawMill2popup1: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL2_POPUP_2":
      return {
        ...state,
        rawMill2popup2: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL2_POPUP_5":
      return {
        ...state,
        rawMill2popup5: action.payload,
        balajiSection: "Raw Mill",
      };
    case "COAL_MILL1_POPUP_1":
      return {
        ...state,
        coalMill1Popup1: action.payload,
        balajiSection: "Coal Mill",
      };
    case "COAL_MILL1_POPUP_2":
      return {
        ...state,
        coalMill1Popup2: action.payload,
        balajiSection: "Coal Mill",
      };
    case "COAL_MILL1_POPUP_3":
      return {
        ...state,
        coalMill1Popup3: action.payload,
        balajiSection: "Coal Mill",
      };
    case "COAL_MILL1_POPUP_4":
      return {
        ...state,
        coalMill1Popup4: action.payload,
        balajiSection: "Coal Mill",
      };
    case "CEMENT_MILL2_POPUP_1":
      return {
        ...state,
        cementMill2Popup1: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL2_POPUP_2":
      return {
        ...state,
        cementMill2Popup2: action.payload,
        balajiSection: "Cement Mill",
      };
    case "CEMENT_MILL2_POPUP_3":
      return {
        ...state,
        cementMill2Popup3: action.payload,
        balajiSection: "Cement Mill",
      };
    case "RAW_MILL1_POPUP_3":
      return {
        ...state,
        rawMill1popup3: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL1_POPUP_4":
      return {
        ...state,
        rawMill1popup4: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL1_POPUP_6":
      return {
        ...state,
        rawMill1popup6: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL1_POPUP_1":
      return {
        ...state,
        rawMill1popup1: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL1_POPUP_2":
      return {
        ...state,
        rawMill1popup2: action.payload,
        balajiSection: "Raw Mill",
      };
    case "RAW_MILL1_POPUP_5":
      return {
        ...state,
        rawMill1popup5: action.payload,
        balajiSection: "Raw Mill",
      };
    case "BAIKUNTH_KM_OVERVIEW":
      return {
        ...state,
        baikunthCoalMillsOverview: action.payload,
        balajiSection: "Coal Mill",
      };

    case "RAJSHREE_MD1_TEMP":
      return {
        ...state,
        rajshreeKilnMD1Temp: action.payload,
        balajiSection: "Kiln",
      };
    case "RAJSHREE_MD2_TEMP":
      return {
        ...state,
        rajshreeKilnMD2Temp: action.payload,
        balajiSection: "Kiln",
      };
    case "RAJSHREE_GB1_TEMP":
      return {
        ...state,
        rajshreeKilnGB1Temp: action.payload,
        balajiSection: "Kiln",
      };
    case "RAJSHREE_GB2_TEMP":
      return {
        ...state,
        rajshreeKilnGB2Temp: action.payload,
        balajiSection: "Kiln",
      };
    default:
      return state;
  }
};
