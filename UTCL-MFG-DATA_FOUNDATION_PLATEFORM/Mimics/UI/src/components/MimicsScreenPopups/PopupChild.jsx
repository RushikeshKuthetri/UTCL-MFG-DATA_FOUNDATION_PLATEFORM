import { useSelector } from "react-redux";
import {
  kilnrollerPayload,
  mdTempPayload,
  temp1Payload,
  temp2Payload,
} from "../../data/balaji/Kiln-Preheater/popupPayloads/payloads";
import { PopUp441FN1 } from "../Balaji/KilnPreheater/Popup/441FN1";
import { CoalFiring } from "../Balaji/KilnPreheater/Popup/CoalFiring";
import { CriticalAlarm } from "../Balaji/KilnPreheater/Popup/CriticalAlarm";
import { FiringBlower } from "../Balaji/KilnPreheater/Popup/FiringBlower";
import { PopUp451FN1 } from "../Balaji/KilnPreheater/Popup/Popup451FN1";
import {
  Popup3CM1,
  Popup78CM1,
  Popup10CM1,
  Popup2CM1,
  Popup9CM1,
  Popup1RM2Balaji,
  Popup2RM2Balaji,
} from "../index";
import * as coolerPopup1payloadsBalaji from "../../data/balaji/Cooler1/coolerPopupPayloads";
import { PopupLQ1 } from "../Balaji/CementMill3Balaji/BalajiCementMill3Popups/PopupLQ1";
import { PopupLQ5 } from "../Balaji/CementMill3Balaji/BalajiCementMill3Popups/PopupLQ5";
import { PopupLQ6 } from "../Balaji/CementMill3Balaji/BalajiCementMill3Popups/PopupLQ6";
import { PopupLQ16 } from "../Balaji/CementMill3Balaji/BalajiCementMill3Popups/PopupLQ16";
import { Popup14 } from "../Balaji/CementMill3Balaji/BalajiCementMill3Popups/Popup14";
import {
  cementMill3Popup10Payload,
  cementMill3Popup11Payload,
  cementMill3Popup13Payload,
  cementMill3Popup14Payload,
  cementMill3Popup1Payload,
  cementMill3Popup2Payload,
  cementMill3Popup3Payload,
  cementMill3Popup4Payload,
  cementMill3Popup7Payload,
  cementMill3Popup8Payload,
  cementMill3Popup9Payload,
} from "../../data/balaji/Cementmill3/popupPayloads/cementPayload";
import {
  cementMill1Popup6Payload,
  cementMill1Popup5Payload,
  cementMill1Popup4Payload,
  cementMill1Popup1Payload,
  cementMill1Popup7Payload,
  cementMill1Popup8Payload,
} from "../../data/balaji/Cementmill1/popupPayloads/cementPayload";
import {
  rawMill2Popup1Payload,
  rawMill2Popup2Payload,
  rawMill2Popup3Payload,
  rawMill2Popup4Payload,
  rawMill2Popup6Payload,
} from "../../data/balaji/RawMill2/popupPayloads/rm2Payload";
import {
  km1balajiPopup1Payload,
  km1balajiPopup2Payload,
  km1balajiPopup3Payload,
  km1balajiPopup4Payload,
} from "../../data/balaji/CoalMill1/km1balajiPopupPayloads";
import {
  cementMill2Popup1Payload,
  cementMill2Popup2Payload,
  cementMill2Popup3Payload,
} from "../../data/balaji/Cementmill2/popupPayloads/cement2Payload";
import {
  rawMill1Popup1Payload,
  rawMill1Popup2Payload,
  rawMill1Popup3Payload,
  rawMill1Popup4Payload,
  rawMill1Popup5Payload,
  rawMill1Popup6Payload,
} from "../../data/balaji/RawMill1/popupPayloads/rm1Payload";
import { BaikunthCoalMillsObservationPopup } from "../Baikunth/CoalMillsObservationPopup/BaikunthCoalMillsObservationPopup";
import {
  km2balajiPopup1Payload,
  km2balajiPopup2Payload,
  km2balajiPopup3Payload,
  km2balajiPopup4Payload,
} from "../../data/balaji/CoalMill2/km2balajiPopupPayloads";
import { RM1Popup1Rajashree } from "../Rajshree/RawMills/RawMill1/PopupRM1RCW/RM1Popup1Rajashree";
import { CommonPopup } from "./CommonPopup";
import { useLatestDataNew } from "../../utils";
// import { useLatestData } from "../../utils";
export const PopupChild = ({ plantData }) => {
  const { showPopup, balajiPopup } = useSelector((state) => state);
  const { plant, plantCode } = plantData;
  // useLatestData(plantCode, plant, balajiPopup.balajiSection);
  useLatestDataNew(
      plantCode,
      plant
      //  sectionName, section, tagNames
    );
  return (
    <>
      {/* KILN-PREHEATER */}
      {showPopup.popupName === "CritcalAlarm" && <CriticalAlarm />}
      {showPopup.popupName === "441FN1" && <PopUp441FN1 />}
      {showPopup.popupName === "451FN1" && <PopUp451FN1 />}
      {showPopup.popupName === "KilnRoller" && (
        <CommonPopup popData={kilnrollerPayload} />
      )}
      {showPopup.popupName === "MDTemp" && (
        <CommonPopup popData={mdTempPayload} />
      )}
      {showPopup.popupName === "Temp1" && (
        <CommonPopup popData={temp1Payload} />
      )}
      {showPopup.popupName === "Temp2" && (
        <CommonPopup popData={temp2Payload} />
      )}
      {showPopup.popupName === "CoalFiring" && <CoalFiring />}
      {showPopup.popupName === "Firing" && <FiringBlower />}

      {/* COOLER */}
      {showPopup.popupName === "coolerPopup1" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup1Payload} />
      )}
      {showPopup.popupName === "coolerPopup2" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup2Payload} />
      )}
      {showPopup.popupName === "coolerPopup3" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup3Payload} />
      )}
      {showPopup.popupName === "coolerPopup4" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup4Payload} />
      )}
      {showPopup.popupName === "coolerPopup5" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup5Payload} />
      )}
      {showPopup.popupName === "coolerPopup6" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup6Payload} />
      )}
      {showPopup.popupName === "coolerPopup7" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup7Payload} />
      )}
      {showPopup.popupName === "coolerPopup8" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup8Payload} />
      )}
      {showPopup.popupName === "coolerPopup9" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopup9Payload} />
      )}
      {showPopup.popupName === "coolerPopupA" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopupAPayload} />
      )}
      {showPopup.popupName === "coolerPopupB" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopupBPayload} />
      )}
      {showPopup.popupName === "coolerPopupC" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopupCPayload} />
      )}
      {showPopup.popupName === "coolerPopupD" && (
        <CommonPopup popData={coolerPopup1payloadsBalaji.coolerPopupDPayload} />
      )}

      {/* CEMENT MILL-3 */}
      {showPopup.popupName === "cementMill3popup1" && (
        <PopupLQ1 popData={cementMill3Popup1Payload} />
      )}
      {showPopup.popupName === "cementMill3popup2" && (
        <PopupLQ1 popData={cementMill3Popup2Payload} />
      )}
      {showPopup.popupName === "cementMill3popup3" && (
        <PopupLQ1 popData={cementMill3Popup3Payload} />
      )}
      {showPopup.popupName === "cementMill3popup4" && (
        <PopupLQ1 popData={cementMill3Popup4Payload} />
      )}
      {showPopup.popupName === "cementMill3popup5" && <PopupLQ5 />}
      {showPopup.popupName === "cementMill3popup6" && <PopupLQ6 />}
      {showPopup.popupName === "cementMill3popup7" && (
        <CommonPopup popData={cementMill3Popup7Payload} />
      )}
      {showPopup.popupName === "cementMill3popup8" && (
        <CommonPopup popData={cementMill3Popup8Payload} />
      )}
      {showPopup.popupName === "cementMill3popup9" && (
        <CommonPopup popData={cementMill3Popup9Payload} />
      )}
      {showPopup.popupName === "cementMill3popup10" && (
        <CommonPopup popData={cementMill3Popup10Payload} />
      )}
      {showPopup.popupName === "cementMill3popup11" && (
        <CommonPopup popData={cementMill3Popup11Payload} />
      )}
      {showPopup.popupName === "cementMill3popup13" && (
        <CommonPopup popData={cementMill3Popup13Payload} />
      )}
      {showPopup.popupName === "cementMill3popup14" && (
        <Popup14 popData={cementMill3Popup14Payload} />
      )}
      {showPopup.popupName === "cementMill3popup16" && <PopupLQ16 />}

      {/* Cement Mill-1 */}
      {showPopup.popupName === "cementMill1popup1" && (
        <CommonPopup popData={cementMill1Popup1Payload} />
      )}
      {showPopup.popupName === "cementMill1popup2" && <Popup2CM1 />}
      {showPopup.popupName === "cementMill1popup3" && <Popup3CM1 />}
      {showPopup.popupName === "cementMill1popup4" && (
        <CommonPopup popData={cementMill1Popup4Payload} />
      )}
      {showPopup.popupName === "cementMill1popup5" && (
        <CommonPopup popData={cementMill1Popup5Payload} />
      )}
      {showPopup.popupName === "cementMill1popup6" && (
        <CommonPopup popData={cementMill1Popup6Payload} />
      )}
      {showPopup.popupName === "cementMill1popup7" && (
        <Popup78CM1 popData={cementMill1Popup7Payload} />
      )}
      {showPopup.popupName === "cementMill1popup8" && (
        <Popup78CM1 popData={cementMill1Popup8Payload} />
      )}
      {showPopup.popupName === "cementMill1popup9" && <Popup9CM1 />}
      {showPopup.popupName === "cementMill1popup10" && <Popup10CM1 />}

      {/* Raw Mill-2 */}
      {showPopup.popupName === "rawMill2popup1" && (
        <Popup1RM2Balaji popData={rawMill2Popup1Payload} />
      )}
      {showPopup.popupName === "rawMill2popup2" && (
        <Popup2RM2Balaji popData={rawMill2Popup2Payload} />
      )}
      {showPopup.popupName === "rawMill2popup3" && (
        <CommonPopup popData={rawMill2Popup3Payload} />
      )}
      {showPopup.popupName === "rawMill2popup4" && (
        <CommonPopup popData={rawMill2Popup4Payload} />
      )}
      {showPopup.popupName === "rawMill2popup5" && (
        <CommonPopup popData={rawMill2Popup4Payload} />
      )}
      {showPopup.popupName === "rawMill2popup6" && (
        <CommonPopup popData={rawMill2Popup6Payload} />
      )}

      {/* Coal Mill-1 */}
      {showPopup.popupName === "coalMill1Popup1" && (
        <CommonPopup popData={km1balajiPopup1Payload} />
      )}
      {showPopup.popupName === "coalMill1Popup2" && (
        <CommonPopup popData={km1balajiPopup2Payload} />
      )}
      {showPopup.popupName === "coalMill1Popup3" && (
        <CommonPopup popData={km1balajiPopup3Payload} />
      )}
      {showPopup.popupName === "coalMill1Popup4" && (
        <Popup2RM2Balaji popData={km1balajiPopup4Payload} />
      )}

      {/* Coal Mill-2 */}
      {showPopup.popupName === "coalMill2Popup1" && (
        <CommonPopup popData={km2balajiPopup1Payload} />
      )}
      {showPopup.popupName === "coalMill2Popup2" && (
        <CommonPopup popData={km2balajiPopup2Payload} />
      )}
      {showPopup.popupName === "coalMill2Popup3" && (
        <CommonPopup popData={km2balajiPopup3Payload} />
      )}
      {showPopup.popupName === "coalMill2Popup4" && (
        <Popup2RM2Balaji popData={km2balajiPopup4Payload} />
      )}

      {/* Cement Mill-2 */}
      {showPopup.popupName === "cementMill2Popup1" && (
        <CommonPopup popData={cementMill2Popup1Payload} />
      )}
      {showPopup.popupName === "cementMill2Popup2" && (
        <CommonPopup popData={cementMill2Popup2Payload} />
      )}
      {showPopup.popupName === "cementMill2Popup3" && (
        <CommonPopup popData={cementMill2Popup3Payload} />
      )}

      {/* Raw Mill-1 */}
      {showPopup.popupName === "rawMill1popup1" && (
        <Popup1RM2Balaji popData={rawMill1Popup1Payload} />
      )}
      {showPopup.popupName === "rawMill1popup6" && (
        <CommonPopup popData={rawMill1Popup2Payload} />
      )}
      {showPopup.popupName === "rawMill1popup3" && (
        <CommonPopup popData={rawMill1Popup3Payload} />
      )}
      {showPopup.popupName === "rawMill1popup4" && (
        <CommonPopup popData={rawMill1Popup4Payload} />
      )}
      {showPopup.popupName === "rawMill1popup5" && (
        <CommonPopup popData={rawMill1Popup5Payload} />
      )}
      {showPopup.popupName === "rawMill1popup2" && (
        <Popup2RM2Balaji popData={rawMill1Popup6Payload} />
      )}

      {/* Baikunth Coal Mills */}
      {showPopup.popupName === "baikunthcoalmills" && (
        <BaikunthCoalMillsObservationPopup />
      )}

      {/* RAJSHREE POPUPS */}        
      {/* Raw mill-1
      {showPopup.popupName === "rajshreeRM1Popup1" && <RM1Popup1Rajashree />} */}
      
    </>
  );
};
