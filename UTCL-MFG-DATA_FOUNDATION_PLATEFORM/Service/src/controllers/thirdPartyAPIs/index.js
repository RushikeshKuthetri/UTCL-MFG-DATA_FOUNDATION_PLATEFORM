const { filterAssetsByPlant } = require("./filterAssetsByPlant");
const { filterDuplicateTagUids } = require("./filterDuplicateTagUids");
module.exports = {
  filterAssetsByPlant, //plant + equipment group
  filterDuplicateTagUids,
};
