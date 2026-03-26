import { MotorCircleDigitalTag } from "../MotorCircle/MotorCircleDigitalTag";

export const Connector = ({
  parentClass,
  childClass,
  childText,
  childLabel,
}) => {
  return (
    <div className={parentClass}>
      {childLabel ? (
        <MotorCircleDigitalTag
          className={`${childClass} digital-tag`}
          label={childLabel}
          text={childText}
        />
      ) : (
        <span className={childClass}>{childText}</span>
      )}
    </div>
  );
};
