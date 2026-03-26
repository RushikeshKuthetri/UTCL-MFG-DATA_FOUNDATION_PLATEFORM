const { userDetails } = require("./user/userDetails");
const { addUser } = require("./user/addUser");
const { updateUser } = require("./user/updateUser");
const { deleteUser } = require("./user/deleteUser");
const { logDetails } = require("./TrackLogs/logDetails");
const { logFilter } = require("./TrackLogs/logFilter");
const { logFilterExport } = require("./TrackLogs/logFilterExport");
const { plantDetails } = require("./details/plantDetails");
const { moduleDetails } = require("./details/moduleDetails");
const { uiDetails } = require("./uiSettings/uiDetails");
const { updateUiDetails } = require("./uiSettings/updateUiDetails");
const { downloadSampleFile } = require("./user/downloadSampleFile");

module.exports = {
  userDetails,
  addUser,
  updateUser,
  deleteUser,
  logDetails,
  logFilter,
  logFilterExport,
  plantDetails,
  moduleDetails,
  uiDetails,
  updateUiDetails,
  downloadSampleFile
};
