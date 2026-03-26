export const getDynamicColorOfProgressBar = (value, max, min) => {
  if (value > max || value < min) return "danger";
  return "";
};

export const getClinkerValue = ({ pbvalue, type }) => {
  if (type === "clinker-silo") return 48 - pbvalue;
  return pbvalue;
};
