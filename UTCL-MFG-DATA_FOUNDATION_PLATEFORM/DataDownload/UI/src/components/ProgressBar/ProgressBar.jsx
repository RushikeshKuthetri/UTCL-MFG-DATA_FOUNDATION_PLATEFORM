import { useValue } from "../../utils";

export const ProgressBar = ({ label }) => {
  let value = useValue(label);
  if (!label) value = 25;
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow="70"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
