import {
  kilnparametersHirmiL1Popup1Payloads,
  kilnparametersHirmiL1Popup2Payloads,
} from "../../../../../../data/hirmi/Line-1/Kiln/popupPayload/kilnparametersHirmiL1PopupPayloads";
import { CommonPopup } from "../../../../../MimicsScreenPopups";

export const KilnParametersHirmiL1Popup = () => {
  return (
    <div className="px-2 overflow-auto">
      <div className="row Criticl-popup">
        <div className="col-6 p-1">
          <CommonPopup popData={kilnparametersHirmiL1Popup1Payloads} />
        </div>
        <div className="col-6 p-1">
          <CommonPopup popData={kilnparametersHirmiL1Popup2Payloads} />
        </div>
      </div>
    </div>
  );
};
