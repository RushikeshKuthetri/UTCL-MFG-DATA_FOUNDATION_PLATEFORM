

const sendTemplateData = require("./sendTemplateData");
const getTemplateData = require("./getTemplateData");
const editTemplate = require("./editTemplate");
const deleteTemplate = require("./deleteTemplate");
const sendEmailTemplateData = require("./sendEmailTemplateData");
const getEmailTemplateData = require("./getEmailTemplateData");
const editEmailTemplateData = require("./editEmailTemplateData");
const deleteEmailTemplate = require("./deleteEmailTemplate");
const EmailLogs = require("./EmailLogs"); // adx
const reportData = require("./reportData"); // adx
const sendReportData = require("./sendReportData");
const getReportData = require("./getReportData");
const deleteReportData = require("./deleteReportData");
const editReportData = require("./editReportData");
const exportReportData = require("./exportReportData"); // adx
const getCycloneDataEffNew = require("./getCycloneDataEff"); // adx
const getCycloneData = require("./getCycloneData");
const getCycloneEffTrends = require("./getCycloneEffTrends"); // adx
const getSmsRecepients = require("./getSmsRecepients");
const getCycloneDataEffSocket = require("./getCycloneDataEffSocket"); //adx
module.exports = {
  sendTemplateData,
  getTemplateData,
  editTemplate,
  deleteTemplate,
  sendEmailTemplateData,
  getEmailTemplateData,
  editEmailTemplateData,
  deleteEmailTemplate,
  EmailLogs,
  reportData,
  sendReportData,
  getReportData,
  deleteReportData,
  editReportData,
  exportReportData,
  getCycloneDataEffNew,
  getCycloneData,
  getCycloneEffTrends,
  getSmsRecepients,
  getCycloneDataEffSocket
};
