import {
  kilnparametersHirmiL1Popup3Payloads,
  kilnparametersHirmiL1Popup4Payloads,
} from "../../../../../../data/hirmi/Line-1/Kiln/popupPayload/kilnparametersHirmiL1PopupPayloads";
import { CommonPopup } from "../../../../../MimicsScreenPopups";

export const KilnParametersHirmiL1Popup2 = () => {
  return (
    <div className="px-2 overflow-auto">
      <div className="row Criticl-popup">
        <div className="col-6 p-1">
          <CommonPopup popData={kilnparametersHirmiL1Popup3Payloads} />
        </div>
        <div className="col-6 p-1">
          <CommonPopup popData={kilnparametersHirmiL1Popup4Payloads} />
        </div>
      </div>
    </div>
  );
};
