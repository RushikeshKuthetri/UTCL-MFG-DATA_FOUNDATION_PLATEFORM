import {
  popup451FN11,
  popup451FN12,
  popup451FN13,
  popup451FN14,
} from "../../../../data/balaji/Kiln-Preheater/popupLists/popup451FN1";
import { TopLeftBox } from "../../../../components";

export const PopUp451FN1 = () => {
  return (
    <div className="mt-5 p-2 overflow-auto">
      <div className="popup-451FN1 row mx-auto">
      <div className="col-5 p-1">
        <div className="CGRnBox p-1">
          <div className="text-white text-center bb-1">
            Fan Mot Winding & Brg Temp
          </div>
          <TopLeftBox
            parentDivClass=""
            useClass="d-flex justify-content-between mt-1"
            list={popup451FN11}
          />
        </div>
        <div className="CGRnBox p-1">
          <div className="text-white text-center bb-1">Fan Bearing Temp</div>
          <TopLeftBox
            parentDivClass=""
            useClass="d-flex justify-content-between mt-1"
            list={popup451FN12}
          />
        </div>
        <div className="CGRnBox p-1">
          <div className="text-white text-center bb-1">Fan Vibration</div>
          <TopLeftBox
            parentDivClass=""
            useClass="d-flex justify-content-between mt-1"
            list={popup451FN13}
          />
        </div>
      </div>
      <div className="col-7 p-1">
        <div className="CGRnBox p-1">
          <div className="text-white text-center bb-1">Fan Trip Alarms</div>
          <TopLeftBox
            parentDivClass=""
            useClass="d-flex justify-content-between mt-1"
            list={popup451FN14}
          />
        </div>
      </div>
    </div>
  </div>
  );
};
