import {
  popup441FN1,
  popup441FN12,
  popup441FN13,
  popup441FN14,
} from "../../../../data/balaji/Kiln-Preheater/popupLists/popup441FN1";
import { PopupDataBox } from "../../..";
// import { useLatestData } from "../../../../utils/custom hooks/useLatestData";

export const PopUp441FN1 = () => {
  // useLatestData("BJCW", "balaji", "Kiln-Preheater");
  return (
    <div className="mt-5 p-2 overflow-auto">
    <div className="popup-441FN1 row mx-auto">
      <div className="col-6 p-1">
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "Fan Mot Winding & Brg Temp",
            list: popup441FN1,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "Fan Bearing Temp",
            list: popup441FN12,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "Fan Vibration",
            list: popup441FN13,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
      </div>
      <div className="col-6 p-1">
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "441FN1 Temp",
            list: popup441FN14,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
      </div>
    </div>
    </div>
  );
};
