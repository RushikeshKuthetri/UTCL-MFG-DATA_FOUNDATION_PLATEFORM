export const CircleGroup = ({ parentClass, useClass }) => {
  return (
    <div className={`${parentClass}`}>
      <span className={`${useClass}`}></span>
      <span className="c-text">C</span>
    </div>
  );
};
