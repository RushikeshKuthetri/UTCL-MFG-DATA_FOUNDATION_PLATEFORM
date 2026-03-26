import { plantDetails } from "../../data/plantDetails/plantDetails";

export const joinedPlantName = (plant) => {
  return plant.name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("")
    .toLowerCase();
};

export const getSpecificPlant = (name) => {
  return plantDetails.find((plant) => joinedPlantName(plant) === name);
};
