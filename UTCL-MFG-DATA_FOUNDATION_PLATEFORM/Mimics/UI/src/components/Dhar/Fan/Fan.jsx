export const Fan = ({ parentDivClass, circleClass, squareClass }) => {
  return (
    <div
      className={`d-flex align-items-center position-absolute ${parentDivClass}`}
    >
      <div className={circleClass}></div>
      <div className="yellowline-Hr  hr-left"></div>
      <div className={squareClass}></div>
    </div>
  );
};
