export const getTagnameBasedOnPlantAndSection = (
  tagList,
  plants,
  line,
  section
) => {
  if (plants.length !== 0) {
    const tagsOfPlants = plants
      .flat()
      .map((plant) => {
        return tagList.filter((tag) => {
          return tag.Plant === plant;
        });
      })
      .flat();
    const sectionLineTags = tagsOfPlants.filter((tag) => {
      if (line && section) return tag.Line === line && tag.Section === section;
      else if (line && !section) return tag.Line === line;
      else if (section && !line) return tag.Section === section;
      else return tag;
    });
    return sectionLineTags.map((tag) => {
      return {
        label: `${tag["Tag UID"]}_:${tag.TagDescription}`,
        value: tag["Tag Name"],
      };
    });
  }
};
