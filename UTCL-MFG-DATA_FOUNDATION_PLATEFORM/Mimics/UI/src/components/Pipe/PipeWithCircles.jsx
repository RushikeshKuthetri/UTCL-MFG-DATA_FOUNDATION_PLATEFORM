import { MotorCircleDigitalTag } from "../DigitalTags";
import { TextContainerWithWrapWord } from "../Nathdwara";

export const PipeWithCircles = ({
  parentDivClass,
  firstCircle,
  text,
  secondCircle,
}) => {
  return (
    <div className={parentDivClass}>
      {firstCircle &&
        (!!firstCircle.firstCircleLabel ? (
          <MotorCircleDigitalTag
            className={firstCircle.firstCircleClass}
            text={firstCircle.firstCircleText}
            label={firstCircle.firstCircleLabel}
          />
        ) : (
          <span className={firstCircle.firstCircleClass}>
            {firstCircle.firstCircleText}
          </span>
        ))}
      {text && <TextContainerWithWrapWord data={text} />}
      {secondCircle &&
        (!!secondCircle.secondCircleLabel ? (
          <MotorCircleDigitalTag
            className={secondCircle.secondCircleClass}
            text={secondCircle.secondCircleText}
            label={secondCircle.secondCircleLabel}
          />
        ) : (
          <span className={secondCircle.secondCircleClass}>
            {secondCircle.secondCircleText}
          </span>
        ))}
    </div>
  );
};
