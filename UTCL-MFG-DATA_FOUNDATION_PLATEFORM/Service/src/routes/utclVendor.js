var express = require("express");
const {
  filterbyEquipmentGroup,
  filterbyUIDs,
  filterbyEquipmentGroup2,
  filterbyUIDs2,
  filterbyUIDAvg,
  filterbyUIDAvg2,
  filterbyUIDAvg2WithPagination,
  filterbyUIDAvg2WithPaginationIgnitionV1,
  filterbyUIDAvgOneDayTagUtilityV1,
  filterbyUIDAvg2WithPaginationIgnitionV2,
} = require("../controllers/utclVendor");
var router = express.Router();

// const basicAuth = require("../middleware/basicAuth");
const vendorAuthMiddleware = require("../middleware/utclvendorAuth");

router.post("/filter-by-equipment-group-and-plant", vendorAuthMiddleware, filterbyEquipmentGroup); //plant + equipment group
router.post("/filter-by-equipment-group-and-plant-v2", vendorAuthMiddleware, filterbyEquipmentGroup2); //plant + equipment group

router.post("/filter-by-uids-and-plant", vendorAuthMiddleware, filterbyUIDs); //plant + uids
router.post("/filter-by-uids-and-plant-v3", vendorAuthMiddleware, filterbyUIDAvg); //plant + uids
router.post("/filter-by-uids-and-plant-any-interval-v4", vendorAuthMiddleware, filterbyUIDAvg2WithPagination); //plant + uids
router.post("/filter-by-uids-and-plant-v2", vendorAuthMiddleware, filterbyUIDs2); //plant + uids
router.post("/uid-plant-ignition-v1", vendorAuthMiddleware, filterbyUIDAvg2WithPaginationIgnitionV1); // newly added api endpoint
router.post("/uid-plant-ignition-v2", vendorAuthMiddleware, filterbyUIDAvg2WithPaginationIgnitionV2); // Added by TRIDAI to give the ignition team plotly based response on (06-02-2026)
router.post("/uid-plant-oneday-tag-utility-v1", vendorAuthMiddleware, filterbyUIDAvgOneDayTagUtilityV1); // newly added api endpoint


// router.post("/filter-by-uids-and-plant-any-interval-v4-pagination", vendorAuthMiddleware, filterbyUIDAvg2WithPagination); //plant + uids

//Plant based routes
const versionHandlers = {
  "": filterbyUIDs, // Default version
  v3: filterbyUIDAvg,
  "any-interval-v4": filterbyUIDAvg2,
};

const categories = process.env.NODE_ENV_VENDOR_CATEGORY ? process.env.NODE_ENV_VENDOR_CATEGORY.split(",") : []; // Split the CATEGORIES environment variable into an array

// Define routes for each category and version
categories.forEach((category) => {
  Object.keys(versionHandlers).forEach((version) => {
    const handler = versionHandlers[version];
    const versionPath = version ? `-${version}` : ""; // Append version to path if it exists

    router.post(`/${category}/filter-by-uids-and-plant${versionPath}`, vendorAuthMiddleware, handler);
  });
});

module.exports = router;
