export const getKukurdihMainDashboardTagRunningStatus = (tagValue) => {
  switch (tagValue) {
    case "red-color":
      return "Stopped";
    case "green-color":
      return "Running";
    case "grey-color":
      return "No Signal";
    default:
      break;
  }
};
