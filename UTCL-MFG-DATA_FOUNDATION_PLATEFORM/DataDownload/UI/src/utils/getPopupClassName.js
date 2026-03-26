export const getPopupClassName = (key) => {
  switch (key) {
    case "CritcalAlarm":
      return "critical-alarm-box";
    case "441FN1":
      return "left-box-441FN1";
    case "451FN1":
      return "right-box-451FN1";
    case "KilnRoller":
      return "kiln-roller-box";
    case "Temp1":
      return "temp1-box";
    case "Temp2":
      return "temp2-box";
    case "CoalFiring":
      return "coal-firing-box";
    case "Firing":
      return "firing-box";
    case "cementMill3popup1":
      return "popup-563LQ1";
    case "cementMill3popup2":
      return "popup-563LQ1";
    case "cementMill3popup3":
      return "popup-563LQ1";
    case "cementMill3popup4":
      return "popup-563LQ1";
    case "cementMill3popup5":
      return "popup-563LQ5";
    case "cementMill3popup14":
      return "popup-mvr14";
    case "cementMill3popup6":
      return "popup-mvr6";
    case "cementMill3popup16":
      return "popup-mvr16";
    case "rawMill2popup1":
      return "Popup1RM2Balaji";
    case "rawMill2popup2":
      return "Popup2RM2Balaji";
    case "coalMill1Popup4":
      return "Popup2RM2Balaji";
    case "coalMill2Popup4":
      return "Popup2RM2Balaji";
    case "rawMill1popup2":
      return "Popup2RM2Balaji";
    case "rawMill1popup1":
      return "Popup1RM2Balaji";
    case "baikunthcoalmills":
      return "firing-box";
    case "rajshreeRM1Popup1":
      return "coal-firing-box";
    default:
      return "md-temp-box";
  }
};
