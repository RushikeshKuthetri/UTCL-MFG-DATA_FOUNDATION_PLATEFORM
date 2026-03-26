import { useColorStatus } from "../../../../../../utils";
import { MotorCircleDigitalTag } from "../../../../../DigitalTags";

export const WGFanDigitalComponent = ({ label }) => {
  return (
    <MotorCircleDigitalTag
      className={`dot digital-tag ${useColorStatus(label)} mt-1`}
      label={label}
    />
  );
};
