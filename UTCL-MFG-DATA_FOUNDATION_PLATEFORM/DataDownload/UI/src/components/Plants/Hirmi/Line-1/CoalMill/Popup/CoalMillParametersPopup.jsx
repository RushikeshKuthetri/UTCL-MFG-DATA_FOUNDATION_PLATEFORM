import {
  kmparametersHirmiL1Popup2Payloads,
  kmparametersHirmiL1Popup3Payloads,
  kmparametersHirmiL1Popup4Payloads,
  kmparametersHirmiL1Popup5Payloads,
  kmparametersHirmiL1PopupPayloads,
} from "../../../../../../data/hirmi/Line-1/CoalMill/popupPayload/kmparametersHirmiL1PopupPayloads";
import { CommonPopup } from "../../../../../MimicsScreenPopups";

export const CoalMillParametersHirmiL1Popup1 = () => {
  return (
    <div className="px-2 overflow-auto">
      <div className="row Criticl-popup">
        <div className="col-6 p-1">
          <CommonPopup popData={kmparametersHirmiL1PopupPayloads} />
          <div className="row m-0">
            <CommonPopup popData={kmparametersHirmiL1Popup2Payloads} />
            <CommonPopup popData={kmparametersHirmiL1Popup3Payloads} />
          </div>
        </div>
        <div className="col-6 p-1">
          <CommonPopup popData={kmparametersHirmiL1Popup4Payloads} />
          <CommonPopup popData={kmparametersHirmiL1Popup5Payloads} />
        </div>
      </div>
    </div>
  );
};
