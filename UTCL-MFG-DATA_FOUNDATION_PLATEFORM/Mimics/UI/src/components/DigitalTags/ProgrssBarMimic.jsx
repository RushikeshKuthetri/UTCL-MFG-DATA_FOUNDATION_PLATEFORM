import { ProgressBar } from "react-bootstrap";
import {
  getClinkerValue,
  getDynamicColorOfProgressBar,
  useValue,
} from "../../utils";

export const ProgressBarMimic = ({ label, max, min, type }) => {
  let value = useValue(label);
  let maxValue = 100;
  if (!label) value = 25;
  if (max) maxValue = max;

  return (
    <ProgressBar
      now={getClinkerValue({ pbvalue: +value, type })}
      max={maxValue}
      variant={getDynamicColorOfProgressBar(value, max, min)}
    />
  );
};
