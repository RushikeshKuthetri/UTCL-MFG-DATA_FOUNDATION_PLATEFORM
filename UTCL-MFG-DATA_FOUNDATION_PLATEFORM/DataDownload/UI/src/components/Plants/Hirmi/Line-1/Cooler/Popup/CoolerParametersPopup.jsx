import { coolerparametersHirmiL1Popup1Payloads } from "../../../../../../data/hirmi/Line-1/Cooler/popupPayload/coolerparametersHirmiL1PopupPayloads";
import { CommonPopup } from "../../../../../MimicsScreenPopups";
import { CoolerPopup1aHirmiLine1 } from "./CoolerPopup1aHirmiLine1";
import { CoolerPopup1bHirmiLine1 } from "./CoolerPopup1bHirmiLine1";

export const CoolerParametersHirmiL1Popup1 = () => {
  return (
    <div className="p-3 overflow-auto">
      <div className="row Criticl-popup">
        <div className="col-6 p-3 mt-3">
          <CoolerPopup1aHirmiLine1 />
        </div>
        <div className="col-6 p-1">
          <CommonPopup popData={coolerparametersHirmiL1Popup1Payloads} />
        </div>
      </div>
      <div className="row Criticl-popup">
        <div className="col-12">
          <CoolerPopup1bHirmiLine1 />
        </div>
      </div>
    </div>
  );
};
