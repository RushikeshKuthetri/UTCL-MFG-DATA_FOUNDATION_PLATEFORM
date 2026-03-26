import {
  rajshreerm1popup11,
  rajshreerm1popup12,
  rajshreerm1popup13,
  rajshreerm1popup14,
  rajshreerm1popup15,
} from "../../../../../data/rajshree/RawMills/RawMill-1/popupLists/rm1popup1";
import { PopupDataBox } from "../../../../MimicsScreenPopups";

export const RM1Popup1Rajashree = () => {
  return (
    <div className="mt-5 p-2 overflow-auto">
      <div className="row mx-auto firingBlower">
        <div className="col-12 text-white text-center bb-1 mb-2">
          RM-1 TEMPERATURE/VIBRATION TRIPPING MONITOR
        </div>
        <div className="col-4 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "RP Feed Bucket Elevator Temp/Vib",
              list: rajshreerm1popup11,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Fixed Roller Press Main Drive Temp",
              list: rajshreerm1popup12,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>
        <div className="col-4 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Seperator 364SR1 Drive Temp/Vib",
              list: rajshreerm1popup13,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Movable Roller Press Main Drive Temp",
              list: rajshreerm1popup14,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>
        <div className="col-4 p-1">
          <PopupDataBox
            data={{
              divClass: "CGRnBox p-1",
              headingClass: "text-white text-center bb-1",
              heading: "Separator Fan 364FN1 Drive Temp/Vib",
              list: rajshreerm1popup15,
              useClass: "d-flex justify-content-between mt-1",
            }}
          />
        </div>
      </div>
    </div>
  );
};
