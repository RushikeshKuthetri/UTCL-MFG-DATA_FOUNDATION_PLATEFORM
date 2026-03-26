export const plantValidation = (plantselected) => {
  return plantselected.length === 0 ? "Please select plant" : "";
};

export const tagValidation = (tagSelected) => {
  return tagSelected.length === 0 ? "Please select tagname" : "";
};

export const startDateValidation = (startDate) => {
  return !startDate ? "Please select the start date" : "";
};

export const endDateValidation = (endDate) => {
  return !endDate ? "Please select the end date" : "";
};

export const intervalValidation = (intervalSelected) => {
  return !intervalSelected ? "Please select interval" : "";
};
