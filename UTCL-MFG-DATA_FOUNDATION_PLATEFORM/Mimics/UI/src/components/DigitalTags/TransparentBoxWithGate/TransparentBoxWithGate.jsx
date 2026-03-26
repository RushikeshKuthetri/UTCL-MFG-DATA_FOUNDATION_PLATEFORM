import { MotorCircleDigitalTag } from "../MotorCircle/MotorCircleDigitalTag";

export const TransparentBoxWithGate = ({
  isClickable,
  parentClass,
  squareProps,
}) => {
  const { tagLabel, squareClass } = squareProps;
  return (
    <div className={`gate-box-border border border-warning ${parentClass}`}>
      {isClickable ? (
        <MotorCircleDigitalTag
          className={`square digital-tag ${squareClass}`}
          label={tagLabel}
        />
      ) : (
        <span className={`square ${squareClass}`}></span>
      )}
    </div>
  );
};
