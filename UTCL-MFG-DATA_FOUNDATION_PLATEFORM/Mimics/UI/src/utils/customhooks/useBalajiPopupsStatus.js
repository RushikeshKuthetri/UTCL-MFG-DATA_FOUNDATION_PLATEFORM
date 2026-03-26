import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useBalajiPopupsStatus = (value, data, setErrorColor) => {
  const dispatch = useDispatch();
  const { showPopup } = useSelector((state) => state);
  return useEffect(() => {
    if (value === data.hhValue) {
      setTimeout(() => {
        setErrorColor("red");
        if (showPopup.popupName === "MDTemp") {
        } else if (showPopup.popupName === "441FN1") {
          dispatch({ type: "441FN1", payload: true });
        } else if (showPopup.popupName === "451FN1") {
          dispatch({ type: "451FN1", payload: true });
        } else if (showPopup.popupName === "CritcalAlarm") {
          dispatch({ type: "CritcalAlarm", payload: true });
        } else if (showPopup.popupName === "Temp1") {
          dispatch({ type: "Temp1", payload: true });
        } else if (showPopup.popupName === "Temp2") {
          dispatch({ type: "Temp2", payload: true });
        } else if (showPopup.popupName === "KilnRoller") {
          dispatch({ type: "KilnRoller", payload: true });
        } else if (showPopup.popupName === "Firing") {
          dispatch({ type: "Firing", payload: true });
        } else if (showPopup.popupName === "coolerPopup1") {
          dispatch({ type: "COOLER_POPUP_1", payload: true });
        } else if (showPopup.popupName === "coolerPopup2") {
          dispatch({ type: "COOLER_POPUP_2", payload: true });
        } else if (showPopup.popupName === "coolerPopup3") {
          dispatch({ type: "COOLER_POPUP_3", payload: true });
        } else if (showPopup.popupName === "coolerPopup4") {
          dispatch({ type: "COOLER_POPUP_4", payload: true });
        } else if (showPopup.popupName === "coolerPopup5") {
          dispatch({ type: "COOLER_POPUP_5", payload: true });
        } else if (showPopup.popupName === "coolerPopup6") {
          dispatch({ type: "COOLER_POPUP_6", payload: true });
        } else if (showPopup.popupName === "coolerPopup7") {
          dispatch({ type: "COOLER_POPUP_7", payload: true });
        } else if (showPopup.popupName === "coolerPopup8") {
          dispatch({ type: "COOLER_POPUP_8", payload: true });
        } else if (showPopup.popupName === "coolerPopup9") {
          dispatch({ type: "COOLER_POPUP_9", payload: true });
        } else if (showPopup.popupName === "coolerPopupA") {
          dispatch({ type: "COOLER_POPUP_A", payload: true });
        } else if (showPopup.popupName === "coolerPopupB") {
          dispatch({ type: "COOLER_POPUP_B", payload: true });
        } else if (showPopup.popupName === "coolerPopupC") {
          dispatch({ type: "COOLER_POPUP_C", payload: true });
        } else if (showPopup.popupName === "coolerPopupD") {
          dispatch({ type: "COOLER_POPUP_D", payload: true });
        } else if (showPopup.popupName === "cementMill3popup1") {
          dispatch({ type: "CEMENT_MILL3_POPUP_1", payload: true });
        } else if (showPopup.popupName === "cementMill3popup2") {
          dispatch({ type: "CEMENT_MILL3_POPUP_2", payload: true });
        } else if (showPopup.popupName === "cementMill3popup3") {
          dispatch({ type: "CEMENT_MILL3_POPUP_3", payload: true });
        } else if (showPopup.popupName === "cementMill3popup4") {
          dispatch({ type: "CEMENT_MILL3_POPUP_4", payload: true });
        } else if (showPopup.popupName === "cementMill3popup5") {
          dispatch({ type: "CEMENT_MILL3_POPUP_5", payload: true });
        } else if (showPopup.popupName === "cementMill3popup6") {
          dispatch({ type: "CEMENT_MILL3_POPUP_6", payload: true });
        } else if (showPopup.popupName === "cementMill3popup7") {
          dispatch({ type: "CEMENT_MILL3_POPUP_7", payload: true });
        } else if (showPopup.popupName === "cementMill3popup8") {
          dispatch({ type: "CEMENT_MILL3_POPUP_8", payload: true });
        } else if (showPopup.popupName === "cementMill3popup9") {
          dispatch({ type: "CEMENT_MILL3_POPUP_9", payload: true });
        } else if (showPopup.popupName === "cementMill3popup10") {
          dispatch({ type: "CEMENT_MILL3_POPUP_10", payload: true });
        } else if (showPopup.popupName === "cementMill3popup11") {
          dispatch({ type: "CEMENT_MILL3_POPUP_11", payload: true });
        } else if (showPopup.popupName === "cementMill3popup12") {
          dispatch({ type: "CEMENT_MILL3_POPUP_12", payload: true });
        } else if (showPopup.popupName === "cementMill3popup13") {
          dispatch({ type: "CEMENT_MILL3_POPUP_13", payload: true });
        } else if (showPopup.popupName === "cementMill3popup14") {
          dispatch({ type: "CEMENT_MILL3_POPUP_14", payload: true });
        } else if (showPopup.popupName === "cementMill3popup16") {
          dispatch({ type: "CEMENT_MILL3_POPUP_16", payload: true });
        } else if (showPopup.popupName === "cementMill3popup1") {
          dispatch({ type: "CEMENT_MILL1_POPUP_1", payload: true });
        } else if (showPopup.popupName === "cementMill3popup2") {
          dispatch({ type: "CEMENT_MILL1_POPUP_2", payload: true });
        } else if (showPopup.popupName === "cementMill3popup3") {
          dispatch({ type: "CEMENT_MILL1_POPUP_3", payload: true });
        } else if (showPopup.popupName === "cementMill3popup4") {
          dispatch({ type: "CEMENT_MILL1_POPUP_4", payload: true });
        } else if (showPopup.popupName === "cementMill3popup5") {
          dispatch({ type: "CEMENT_MILL1_POPUP_5", payload: true });
        } else if (showPopup.popupName === "cementMill3popup6") {
          dispatch({ type: "CEMENT_MILL1_POPUP_6", payload: true });
        } else if (showPopup.popupName === "cementMill3popup7") {
          dispatch({ type: "CEMENT_MILL1_POPUP_7", payload: true });
        } else if (showPopup.popupName === "cementMill3popup8") {
          dispatch({ type: "CEMENT_MILL1_POPUP_8", payload: true });
        } else if (showPopup.popupName === "cementMill3popup9") {
          dispatch({ type: "CEMENT_MILL1_POPUP_9", payload: true });
        } else if (showPopup.popupName === "cementMill3popup10") {
          dispatch({ type: "CEMENT_MILL1_POPUP_10", payload: true });
        } else if (showPopup.popupName === "baikunthcoalmills") {
          dispatch({ type: "BAIKUNTH_KM_OVERVIEW", payload: true });
        }
      }, data.hhTime);
    } else {
      setErrorColor("green");
      if (showPopup.popupName === "MDTemp") {
        dispatch({ type: "MD_POPUP", payload: false });
      } else if (showPopup.popupName === "441FN1") {
        dispatch({ type: "441FN1", payload: false });
      } else if (showPopup.popupName === "451FN1") {
        dispatch({ type: "451FN1", payload: false });
      } else if (showPopup.popupName === "CritcalAlarm") {
        dispatch({ type: "CritcalAlarm", payload: false });
      } else if (showPopup.popupName === "Temp1") {
        dispatch({ type: "Temp1", payload: false });
      } else if (showPopup.popupName === "Temp2") {
        dispatch({ type: "Temp2", payload: false });
      } else if (showPopup.popupName === "KilnRoller") {
        dispatch({ type: "KilnRoller", payload: false });
      } else if (showPopup.popupName === "Firing") {
        dispatch({ type: "Firing", payload: false });
      } else if (showPopup.popupName === "coolerPopup1") {
        dispatch({ type: "COOLER_POPUP_1", payload: false });
      } else if (showPopup.popupName === "coolerPopup2") {
        dispatch({ type: "COOLER_POPUP_2", payload: false });
      } else if (showPopup.popupName === "coolerPopup3") {
        dispatch({ type: "COOLER_POPUP_3", payload: false });
      } else if (showPopup.popupName === "coolerPopup4") {
        dispatch({ type: "COOLER_POPUP_4", payload: false });
      } else if (showPopup.popupName === "coolerPopup5") {
        dispatch({ type: "COOLER_POPUP_5", payload: false });
      } else if (showPopup.popupName === "coolerPopup6") {
        dispatch({ type: "COOLER_POPUP_6", payload: false });
      } else if (showPopup.popupName === "coolerPopup7") {
        dispatch({ type: "COOLER_POPUP_7", payload: false });
      } else if (showPopup.popupName === "coolerPopup8") {
        dispatch({ type: "COOLER_POPUP_8", payload: false });
      } else if (showPopup.popupName === "coolerPopup9") {
        dispatch({ type: "COOLER_POPUP_9", payload: false });
      } else if (showPopup.popupName === "coolerPopupA") {
        dispatch({ type: "COOLER_POPUP_A", payload: false });
      } else if (showPopup.popupName === "coolerPopupB") {
        dispatch({ type: "COOLER_POPUP_B", payload: false });
      } else if (showPopup.popupName === "coolerPopupC") {
        dispatch({ type: "COOLER_POPUP_C", payload: false });
      } else if (showPopup.popupName === "coolerPopupD") {
        dispatch({ type: "COOLER_POPUP_D", payload: false });
      } else if (showPopup.popupName === "cementMill3popup1") {
        dispatch({ type: "CEMENT_MILL3_POPUP_1", payload: false });
      } else if (showPopup.popupName === "cementMill3popup2") {
        dispatch({ type: "CEMENT_MILL3_POPUP_2", payload: false });
      } else if (showPopup.popupName === "cementMill3popup3") {
        dispatch({ type: "CEMENT_MILL3_POPUP_3", payload: false });
      } else if (showPopup.popupName === "cementMill3popup4") {
        dispatch({ type: "CEMENT_MILL3_POPUP_4", payload: false });
      } else if (showPopup.popupName === "cementMill3popup5") {
        dispatch({ type: "CEMENT_MILL3_POPUP_5", payload: false });
      } else if (showPopup.popupName === "cementMill3popup6") {
        dispatch({ type: "CEMENT_MILL3_POPUP_6", payload: false });
      } else if (showPopup.popupName === "cementMill3popup7") {
        dispatch({ type: "CEMENT_MILL3_POPUP_7", payload: false });
      } else if (showPopup.popupName === "cementMill3popup8") {
        dispatch({ type: "CEMENT_MILL3_POPUP_8", payload: false });
      } else if (showPopup.popupName === "cementMill3popup9") {
        dispatch({ type: "CEMENT_MILL3_POPUP_9", payload: false });
      } else if (showPopup.popupName === "cementMill3popup10") {
        dispatch({ type: "CEMENT_MILL3_POPUP_10", payload: false });
      } else if (showPopup.popupName === "cementMill3popup11") {
        dispatch({ type: "CEMENT_MILL3_POPUP_11", payload: false });
      } else if (showPopup.popupName === "cementMill3popup12") {
        dispatch({ type: "CEMENT_MILL3_POPUP_12", payload: false });
      } else if (showPopup.popupName === "cementMill3popup13") {
        dispatch({ type: "CEMENT_MILL3_POPUP_13", payload: false });
      } else if (showPopup.popupName === "cementMill3popup14") {
        dispatch({ type: "CEMENT_MILL3_POPUP_14", payload: false });
      } else if (showPopup.popupName === "cementMill3popup16") {
        dispatch({ type: "CEMENT_MILL3_POPUP_16", payload: false });
      } else if (showPopup.popupName === "cementMill3popup1") {
        dispatch({ type: "CEMENT_MILL1_POPUP_1", payload: false });
      } else if (showPopup.popupName === "cementMill3popup2") {
        dispatch({ type: "CEMENT_MILL1_POPUP_2", payload: false });
      } else if (showPopup.popupName === "cementMill3popup3") {
        dispatch({ type: "CEMENT_MILL1_POPUP_3", payload: false });
      } else if (showPopup.popupName === "cementMill3popup4") {
        dispatch({ type: "CEMENT_MILL1_POPUP_4", payload: false });
      } else if (showPopup.popupName === "cementMill3popup5") {
        dispatch({ type: "CEMENT_MILL1_POPUP_5", payload: false });
      } else if (showPopup.popupName === "cementMill3popup6") {
        dispatch({ type: "CEMENT_MILL1_POPUP_6", payload: false });
      } else if (showPopup.popupName === "cementMill3popup7") {
        dispatch({ type: "CEMENT_MILL1_POPUP_7", payload: false });
      } else if (showPopup.popupName === "cementMill3popup8") {
        dispatch({ type: "CEMENT_MILL1_POPUP_8", payload: false });
      } else if (showPopup.popupName === "cementMill3popup9") {
        dispatch({ type: "CEMENT_MILL1_POPUP_9", payload: false });
      } else if (showPopup.popupName === "cementMill3popup10") {
        dispatch({ type: "CEMENT_MILL1_POPUP_10", payload: false });
      } else if (showPopup.popupName === "baikunthcoalmills") {
        dispatch({ type: "BAIKUNTH_KM_OVERVIEW", payload: false });
      }
    }
  }, [
    value,
    data.hhValue,
    dispatch,
    showPopup.popupName,
    data.hhTime,
    setErrorColor,
  ]);
};
