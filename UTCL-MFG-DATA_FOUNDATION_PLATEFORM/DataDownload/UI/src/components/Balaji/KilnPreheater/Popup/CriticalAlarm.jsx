import { PopupDataBox } from "../../..";
import {
  popup441FN13,
  popup441FN14,
} from "../../../../data/balaji/Kiln-Preheater/popupLists/popup441FN1";
import { popup451FN13 } from "../../../../data/balaji/Kiln-Preheater/popupLists/popup451FN1";
import {
  criticalAlarm1,
  criticalAlarm10,
  criticalAlarm11,
  criticalAlarm12,
  criticalAlarm13,
  criticalAlarm2,
  criticalAlarm4,
  criticalAlarm5,
  criticalAlarm6,
  criticalAlarm7,
  criticalAlarm8,
  criticalAlarm9,
  crticalAlarm3,
} from "../../../../data/balaji/Kiln-Preheater/popupLists/criticalAlarm";

export const CriticalAlarm = () => {
  return (
    <div className="mt-5 p-2 overflow-auto">
      <div className="row Criticl-popup">
      <div className="col-2 p-1">
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "441FN1 Temp",
            list: criticalAlarm1,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "451FN1 Temp",
            list: criticalAlarm2,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
      </div>
      <div className="col-2 p-1">
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "441FN1 Vibration",
            list: popup441FN13,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "451FN1 Vibration",
            list: popup451FN13,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "471FND Temp",
            list: crticalAlarm3,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "471FN1 Vibration",
            list: criticalAlarm4,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
      </div>
      <div className="col-3 p-1">
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "KILN Supp. Rollers Brg Temp",
            list: criticalAlarm5,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "Crossbar Cooler Temp",
            list: criticalAlarm6,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "KILN GB-1 Lub. Sys",
            list: criticalAlarm7,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
      </div>
      <div className="col-3 p-1">
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "KILN GB-2 Lub. Sys",
            list: criticalAlarm8,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "441FN1 Trip Alarms",
            list: popup441FN14,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "451FN1 Trip Alarms",
            list: criticalAlarm9,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
      </div>
      <div className="col-2 p-1">
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "Cyclone Temp",
            list: criticalAlarm10,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />

        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "L91BI1",
            list: criticalAlarm11,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "L91BI2",
            list: criticalAlarm12,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
        <PopupDataBox
          data={{
            divClass: "box-2",
            headingClass: "text-white text-center bb-1",
            heading: "421FN3",
            list: criticalAlarm13,
            useClass: "d-flex justify-content-between mt-1 pl-2 pr-2",
          }}
        />
      </div>
    </div>
  </div>
  );
};
