import {
  cm1popup21,
  cm1popup22,
  cm1popup23,
  cm1popup24,
  cm1popup25,
  cm1popup26,
  cm1popup27,
  cm1popup28,
} from "../../../../data/balaji/Cementmill1/popupLists/cm1popup2";
import { PopupDataBox } from "../../../MimicsScreenPopups";

export const Popup2CM1 = () => {
  return (
    <div className="mt-5 p-2 overflow-auto">
      <div className="row mx-auto firingBlower">
        <div className=" col-12 text-white text-center bb-1 mb-2">
          561MD4 Temperature
        </div>
        <div className="col-6 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "561MD6 Winding Temperature",
              list: cm1popup21,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "561MD6 Bearing Temperature",
              list: cm1popup22,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Gear Box-1 Temperature",
              list: cm1popup23,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Roller Bearing-1 Fixed",
              list: cm1popup24,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>

        <div className="col-6 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "561MD7 Winding Temperature",
              list: cm1popup25,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "561MD7 Bearing Temperature",
              list: cm1popup26,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Gear Box-2 Temperature",
              list: cm1popup27,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Rolling Bearing-2 Movable",
              list: cm1popup28,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>
      </div>
    </div>
  );
};
