const { filterbyEquipmentGroup } = require("./filterbyEquipmentGroup");
const { filterbyEquipmentGroup2 } = require("./filterbyEquipmentGroup2");

const { filterbyUIDs } = require("./filterbyUIDs");
const { filterbyUIDs2 } = require("./filterbyUIDs2");
const { filterbyUIDAvg } = require("./filterbyUIDAvg");
const { filterbyUIDAvg2, filterbyUIDAvg2WithPagination } = require("./filterbyUIDAvg2");
const {
  filterbyUIDAvg2WithPaginationIgnitionV1,
  filterbyUIDAvgOneDayTagUtilityV1,
} = require("./uidPlantIgnitionV1");
const {
  filterbyUIDAvg2WithPaginationIgnitionV2,
} = require("./uidPlantIgnitionV2");


module.exports = {
  filterbyEquipmentGroup, //plant + equipment group
  filterbyEquipmentGroup2,

  filterbyUIDs, //plant + uids
  filterbyUIDs2,
  filterbyUIDAvg,
  filterbyUIDAvg2,
  filterbyUIDAvg2WithPagination,
  filterbyUIDAvg2WithPaginationIgnitionV1,
  filterbyUIDAvg2WithPaginationIgnitionV2, //  // Added by TRIDAI to give the ignition team plotly based response on (06-02-2026)
  filterbyUIDAvgOneDayTagUtilityV1,
};
