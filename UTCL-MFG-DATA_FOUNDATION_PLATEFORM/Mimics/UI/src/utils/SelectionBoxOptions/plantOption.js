export const getPlants1 = (plants) => {
  return plants?.map((plant) => {
    return { label: plant, value: plant };
  });
};

export const getPlants = (plants) => {
  return plants?.map((plant) => {
    return { label: plant, value: plant };
  });
};
