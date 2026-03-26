// export const getTagUID = (tagList, data) => {
//   debugger;
//   const { plant, tagname } = data;
//   const tagsList = tagList.filter((tagData) => tagData.Plant === plant[0]);
//   return tagname?.map((tagFromTagname) => {
//     const returnTag = tagsList?.find(
//       (tagFromList) => tagFromList["Tag Name"] === tagFromTagname
//     );
//     return returnTag
//       ? {
//           label: returnTag
//             ? `${returnTag["Tag UID"]}_:${returnTag?.TagDescription}`
//             : tagFromTagname,
//           value: returnTag["Tag Name"],
//         }
//       : {
//           label: tagFromTagname,
//           value: tagFromTagname,
//         };
//   });
// };
export const getTagUID = (tagList, data) => {
  const { plant, tagname } = data;
  
  // Ensure plant is an array and get the first item
  const plantName = plant?.[0];
  
  // Filter the tagList to get tags matching the first plant
  const tagsList = tagList.filter(tagData => tagData.Plant == plantName);

  return tagname?.map(tagFromTagname => {
    // Find the tag in tagsList that matches the tag name
    const returnTag = tagsList.find(tagFromList => tagFromList["TagName"] == tagFromTagname);

    if (returnTag) {
      return {
        label: `${returnTag["TagUID"]}_:${returnTag["description"]}`,
        value: returnTag["TagUID"],
      };
    } else {
      return {
        label: tagFromTagname,
        value: tagFromTagname,
      };
    }
  });
};

