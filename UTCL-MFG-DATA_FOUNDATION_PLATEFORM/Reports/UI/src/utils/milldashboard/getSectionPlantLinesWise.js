import { plantLineDetails } from "../../data/plantDetails/plantLineDetails";

export const getLineCards = (plantSection, lineHeading) => {
  return lineHeading.map((lineName) => {
    return {
      heading: lineName,
      lineSectionData: plantSection.filter(
        ({ line }) => line === plantLineDetails[lineName]
      ),
    };
  });
};
