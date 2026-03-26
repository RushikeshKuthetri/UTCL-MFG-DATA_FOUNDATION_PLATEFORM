// export const getMillsRunningCount = (tagname, plant, color, tagsList) => {
// const tagPresent = tagsList?.find(
//   (tag) => tag.plant === plant && tag.tagname === tagname
// );
// if (color) {
//   if (!tagPresent) {
//     tagsList.push({ tagname, plant });
//   }
// } else {
//   if (tagPresent) {
//     tagsList = tagsList.filter(
//       (tag) => tag.tagname !== tagname && tag.plant !== plant
//     );
//   }
//   // }
//   return tagsList;
// };
export const getMillStatusCount = (
  payload,
  greenColorTagsList,
  greyColorTagsList,
  redColorTagsList
) => {
  var { tagname, plant, color } = payload;
  var { green, grey, red } = color;
  var tagPresentInGreenTagsList = greenColorTagsList?.find(
    (tag) => tag === `${tagname}+${plant}`
  );
  var tagPresentInGreyTagsList = greyColorTagsList?.find(
    (tag) => tag === `${tagname}+${plant}`
  );
  var tagPresentInRedTagsList = redColorTagsList?.find(
    (tag) => tag === `${tagname}+${plant}`
  );

  // Conditon for green tags
  if (green) {
    if (!tagPresentInGreenTagsList)
      greenColorTagsList.push(`${tagname}+${plant}`);
  } else {
    if (tagPresentInGreenTagsList) {
      greenColorTagsList = greenColorTagsList.filter(
        (tag) => tag !== `${tagname}+${plant}`
      );
    }
  }
  // Condition for grey tags
  if (grey) {
    if (!tagPresentInGreyTagsList)
      greyColorTagsList.push(`${tagname}+${plant}`);
  } else {
    if (tagPresentInGreyTagsList) {
      greyColorTagsList = greyColorTagsList.filter(
        (tag) => tag !== `${tagname}+${plant}`
      );
    }
  }

  // Conditon for red tags
  if (red) {
    if (!tagPresentInRedTagsList) redColorTagsList.push(`${tagname}+${plant}`);
  } else {
    if (tagPresentInRedTagsList) {
      redColorTagsList = redColorTagsList.filter(
        (tag) => tag !== `${tagname}+${plant}`
      );
    }
  }
  return { greenColorTagsList, redColorTagsList, greyColorTagsList };
};
