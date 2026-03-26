export const getLinesBasedOnPlant = (lineList, plants) => {
  const plantLineData = plants
    .map((plant) => lineList.filter(({ Plant }) => Plant === plant))
    .flat();
  const uniqueLines = [...new Set(plantLineData.map(({ Line }) => Line))].sort(
    (a, b) => a - b
  );
  return uniqueLines?.map((line) => {
    return { label: line, value: line };
  });
};
