export const getPlantsForHOPDashboard = (plants, checkFromData) => {
  return plants.map((plant) => {
    return checkFromData.find((obj) => obj["Generic Code"] === plant);
  });
};
