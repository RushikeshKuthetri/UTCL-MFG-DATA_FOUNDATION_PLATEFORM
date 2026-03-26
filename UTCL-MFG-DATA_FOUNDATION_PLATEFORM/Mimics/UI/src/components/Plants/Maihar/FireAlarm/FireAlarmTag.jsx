import { useColorStatus } from "../../../../utils";
import { MotorCircleDigitalTag } from "../../../DigitalTags";

const colorsForBefore = {
  "red-color": "#cf1414",
  "green-color": "rgb(100, 203, 0)",
  "grey-color": "rgb(117 117 117)",
};
export const FireAlarmTag = ({ obj }) => {
  const { label, text, className } = obj;
  return (
    <div className="w-20 text-center">
      <MotorCircleDigitalTag
        className={`text-white bg-dark digital-tag text-center p-1 w-50 d-flex align-items-center justify-content-center  ${
          className || ""
        }`}
        label={label}
        text={text}
        style={{ "--before-bg": colorsForBefore[useColorStatus(label)] }}
      />
    </div>
  );
};
