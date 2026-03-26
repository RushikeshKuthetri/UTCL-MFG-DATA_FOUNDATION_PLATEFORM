export const getSectionBasedOnPlant = (sectionList, plants, line) => {
  const sectionsOfPlant = plants
    .map((plant) => sectionList.filter((section) => section.Plant === plant))
    .flat();
  const sections = sectionsOfPlant.filter((section) => {
    if (line) return section.Line === line;
    else return section;
  });
  const uniqueSections = [
    ...new Set(
      sections.map(({ Section }) => {
        return Section.trim();
      })
    ),
  ].sort();
  return uniqueSections.map((section) => {
    return { label: section, value: section };
  });
};
