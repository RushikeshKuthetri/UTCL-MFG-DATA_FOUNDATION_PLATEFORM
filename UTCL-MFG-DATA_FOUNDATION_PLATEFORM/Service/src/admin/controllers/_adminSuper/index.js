const { alertDetails } = require("./alert/alertDetails");
const { alertAdd } = require("./alert/alertAdd");
const { alertDelete } = require("./alert/alertDelete");

const { deleteMimicLineAlert } = require("./alert/deleteMimicLineAlert");
const { getMimicLineAlert } = require("./alert/getMimicLineAlert");
const { getMimicLineMasterDropDown } = require("./alert/getMimicLineMasterDropDown");
const { insertMimicLineAlert } = require("./alert/insertMimicLineAlert");
const { updateMimicLineAlert } = require("./alert/updateMimicLineAlert");

const { userDetails } = require("./user/userDetails");
const { addUser } = require("./user/addUser");
const { updateUser } = require("./user/updateUser");
const { deleteUser } = require("./user/deleteUser");
const { bulkAddUser } = require("./user/bulkAddUser");

const { utilization } = require("./TrackLogs/utilization");
const { utilizationMonthly } = require("./TrackLogs/utilizationMonthly");

const { templateDetails } = require("./templateCbm/templateDetails");
const { templateLogDetails } = require("./templateCbm/templateLogDetails");
const { templateUpdate } = require("./templateCbm/templateUpdate");
const { templateDelete } = require("./templateCbm/templateDelete");

module.exports = {
  alertDetails,
  alertAdd,
  alertDelete,
  userDetails,
  addUser,
  updateUser,
  deleteUser,
  bulkAddUser,
  deleteMimicLineAlert,
  getMimicLineAlert,
  getMimicLineMasterDropDown,
  insertMimicLineAlert,
  updateMimicLineAlert,
  utilization,
  utilizationMonthly,
  templateDetails,
  templateLogDetails,
  templateUpdate,
  templateDelete,
};
