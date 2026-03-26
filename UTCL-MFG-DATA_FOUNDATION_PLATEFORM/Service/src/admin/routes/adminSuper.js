const express = require("express");
// const {
//   // bulkAddUser,
//   // userDetails,
//   // addUser,
//   // deleteUser,
//   // updateUser,
//   // alertDetails,
//   // alertAdd,
//   // alertDelete,
//   // templateDetails,
//   // templateLogDetails,
//   // templateUpdate,
//   // templateDelete,
// } = require("../controllers/adminSuper");

const {
  alertDetails,
  alertAdd,
  alertDelete,
  userDetails,
  addUser,
  updateUser,
  deleteUser,
  bulkAddUser,
  utilization,
  utilizationMonthly,
  templateDetails,
  templateLogDetails,
  templateUpdate,
  templateDelete,
} = require ("../controllers/_adminSuper");
const {
  deleteMimicLineAlert,
getMimicLineAlert,
getMimicLineMasterDropDown,
insertMimicLineAlert,
updateMimicLineAlert,
} = require ("../controllers/_adminSuper");


const adminSuperAuth = require("../../middleware/adminSuperAuth");
const router = express.Router();

router.post("/bulkAddUser", adminSuperAuth, bulkAddUser);
router.post("/userDetails", adminSuperAuth, userDetails);
router.post("/addUser", adminSuperAuth, addUser);
router.post("/updateUser", adminSuperAuth, updateUser);
router.post("/deleteUser", adminSuperAuth, deleteUser);
router.post("/alertDetails", adminSuperAuth, alertDetails);
router.post("/alertAdd", adminSuperAuth, alertAdd);
router.post("/alertDelete", adminSuperAuth, alertDelete);
router.post("/templateDetails", adminSuperAuth, templateDetails);
router.post("/templateLogDetails", adminSuperAuth, templateLogDetails);
router.post("/templateUpdate", adminSuperAuth, templateUpdate);
router.post("/templateDelete", adminSuperAuth, templateDelete); 

router.post("/getMimicLineMasterDropDown", adminSuperAuth, getMimicLineMasterDropDown); 
router.post("/updateMimicLineAlert", adminSuperAuth, updateMimicLineAlert); 
router.post("/insertMimicLineAlert", adminSuperAuth, insertMimicLineAlert); 
router.post("/deleteMimicLineAlert", adminSuperAuth, deleteMimicLineAlert); 
router.post("/getMimicLineAlert", adminSuperAuth, getMimicLineAlert); 

router.post("/utilization", adminSuperAuth, utilization); 
router.post("/utilizationMonthly", adminSuperAuth, utilizationMonthly); 

module.exports = router;
