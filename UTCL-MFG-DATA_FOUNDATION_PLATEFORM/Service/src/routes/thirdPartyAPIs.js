var express = require("express");
const { filterAssetsByPlant } = require("../controllers/thirdPartyAPIs/filterAssetsByPlant");
const { filterDuplicateTagUids } = require("../controllers/thirdPartyAPIs/filterDuplicateTagUids");
var router = express.Router();

// const basicAuth = require("../middleware/basicAuth");
const vendorAuthMiddleware = require("../middleware/utclvendorAuth");


router.post("/assets-by-plant", vendorAuthMiddleware, filterAssetsByPlant); // api endpoint added to fetch assets by plant for third party applications by TAI on 22-12-2025
router.post("/filter-duplicate-taguids", vendorAuthMiddleware, filterDuplicateTagUids); // api endpoint added to fetch status based on tagUid present in tagmaster or not by TAI on 30-12-2025

module.exports = router;
