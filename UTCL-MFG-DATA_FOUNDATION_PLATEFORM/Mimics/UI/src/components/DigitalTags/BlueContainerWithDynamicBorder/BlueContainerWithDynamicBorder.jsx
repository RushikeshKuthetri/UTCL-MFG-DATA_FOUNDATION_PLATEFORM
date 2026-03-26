import { MotorCircleDigitalTag } from "../MotorCircle/MotorCircleDigitalTag";

export const BlueContainerWithDynamicBorder = ({
  useClass,
  isClickable,
  tagLabel,
}) => {
  return isClickable ? (
    <MotorCircleDigitalTag
      className={`blue-container digital-tag ${useClass}`}
      label={tagLabel}
    />
  ) : (
    <div className={`blue-container ${useClass}`}></div>
  );
};
