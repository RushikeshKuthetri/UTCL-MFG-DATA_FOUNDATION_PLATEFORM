export const getSectionofSpecificPlant = (searchedPlant, accPlants) => {
  if (
    searchedPlant !== undefined &&
    accPlants.find((x) => x === searchedPlant.id) !== undefined
  ) {
    return searchedPlant.sections;
  }
};
