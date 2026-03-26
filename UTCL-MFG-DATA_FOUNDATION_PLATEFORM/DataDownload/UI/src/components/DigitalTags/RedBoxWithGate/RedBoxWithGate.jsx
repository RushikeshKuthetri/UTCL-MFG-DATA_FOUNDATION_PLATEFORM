import { MotorCircleDigitalTag } from "../MotorCircle/MotorCircleDigitalTag";

export const RedBoxWithGate = ({ isClickable, parentClass, squareProps }) => {
  const { tagLabel, squareClass } = squareProps;
  return (
    <div className={`gate-box-bg bg-red ${parentClass}`}>
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
