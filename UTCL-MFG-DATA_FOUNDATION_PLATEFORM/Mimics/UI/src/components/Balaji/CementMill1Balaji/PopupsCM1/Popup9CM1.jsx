import {
  cm1popup91,
  cm1popup92,
} from "../../../../data/balaji/Cementmill1/popupLists/cm1popup9";
import { BlackContainer } from "../../../BlackContainer/BlackContainer";
import { PopupDataBox } from "../../../MimicsScreenPopups";

export const Popup9CM1 = () => {
  return (
    <div className="mt-5 p-2 overflow-auto">
      <div className="row p-2 mx-auto firingBlower">
        <div className=" col-12 text-center bb-1 mb-2 d-flex">
          <div className="text-white mr-3">SKEW LS-RS</div>
          <BlackContainer
            data={{
              label: "561RP1_ZT03",
              useClass: `greenTxt`,
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" col-12 text-white text-center bb-1 mb-2">
          561RP1 Feed Gate & G. Pressur control
        </div>
        <div className="col-6 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1 h-100",
              headingClass: "text-white text-center bb-1",
              heading: "561MD6 Winding Temperature",
              list: cm1popup91,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>

        <div className="col-6 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1 h-100",
              headingClass: "text-white text-center bb-1",
              heading: "561MD7 Winding Temperature",
              list: cm1popup92,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>
      </div>
    </div>
  );
};
