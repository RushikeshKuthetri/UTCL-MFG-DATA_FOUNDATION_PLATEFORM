import { PopupDataBox } from "../../..";
import {
  firingBlower1,
  firingBlower2,
  firingBlower3,
  firingBlower4,
  firingBlower5,
  firingBlower6,
} from "../../../../data/balaji/Kiln-Preheater/popupLists/firingBlower";
export const FiringBlower = () => {
  return (
    <div className="mt-5 p-2 overflow-auto">

      <div className="row mx-auto firingBlower">
              <div className="col-12 text-white text-center bb-1 mb-2">
        Coal Firing Blower Temp
      </div>
      <div className="col-4 p-1">
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "481BL1",
            list: firingBlower1,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "481BL2",
            list: firingBlower2,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
      </div>
      <div className="col-4 p-1">
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "451BL1",
            list: firingBlower3,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "451BL2",
            list: firingBlower5,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
      </div>
      <div className="col-4 p-1">
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "451BL4",
            list: firingBlower4,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "CGRnBox p-1",
            headingClass: "text-white text-center bb-1",
            heading: "451BL5",
            list: firingBlower6,
            useClass: "d-flex justify-content-between mt-1",
          }}
        />
      </div>
      </div>
    </div>
  );
};
