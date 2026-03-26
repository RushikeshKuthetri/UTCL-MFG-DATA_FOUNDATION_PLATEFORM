const express = require("express");
const router = express.Router();
const authCBMMiddleware = require("../../middleware/authCBM");
const authMiddleware = require("../../middleware/auth");
const templateController = require("../controllers/templateController");
router.post(
  "/sendTemplateData",
  // authCBMMiddleware,
  templateController.sendTemplateData
);
router.post(
  "/getTemplateData",
  // authCBMMiddleware,
  templateController.getTemplateData
);
router.post(
  "/editTemplate",
  // authCBMMiddleware,
  templateController.editTemplate
);
router.post(
  "/deleteTemplate",
  // authCBMMiddleware,
  templateController.deleteTemplate
);
router.post(
  "/sendEmailTemplateData",
  // authCBMMiddleware,
  templateController.sendEmailTemplateData
);
router.post(
  "/getEmailTemplateData",
  // authCBMMiddleware,
  templateController.getEmailTemplateData
);
router.post(
  "/editEmailTemplateData",
  // authCBMMiddleware,
  templateController.editEmailTemplateData
);
router.post(
  "/deleteEmailTemplate",
  // authCBMMiddleware,
  templateController.deleteEmailTemplate
);
router.post(
  "/EmailLogs",
  // authCBMMiddleware, 
  templateController.EmailLogs
);
router.post("/reportData", templateController.reportData);
router.post(
  "/sendReportData",
  // authMiddleware,
  templateController.sendReportData
);
router.post(
  "/getReportData", 
  // authMiddleware, 
  templateController.getReportData
);
router.post(
  "/deleteReportData",
  // authMiddleware,
  templateController.deleteReportData
);
router.post(
  "/editReportData",
  // authMiddleware,
  templateController.editReportData
);
router.post(
  "/exportReportData",
  // authMiddleware,
  templateController.exportReportData
);
router.post(
  "/getCycloneDataEff",
  // authCBMMiddleware,
  templateController.getCycloneDataEff
);
router.post(
  "/getCycloneData",
  // authCBMMiddleware,
  templateController.getCycloneData
);
router.post(
  "/getCycloneEffTrends",
  // authCBMMiddleware,
  templateController.getCycloneEffTrends
);
router.post(
  "/getSmsRecepients",
  // authCBMMiddleware,
  templateController.getSmsRecepients
);
module.exports = router;
