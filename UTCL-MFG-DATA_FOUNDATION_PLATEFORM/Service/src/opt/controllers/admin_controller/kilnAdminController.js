var kiln_admin_functions = require("../../functions/admin_functions/kiln_admin_functions");

exports.getKilnMaster = (req, res) => {
  kiln_admin_functions
    .getKilnMaster(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateKilnMaster = (req, res) => {
  kiln_admin_functions
    .updateKilnMaster(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.insertKilnAlert = (req, res) => {
  kiln_admin_functions
    .insertKilnAlert(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateKilnAlert = (req, res) => {
  kiln_admin_functions
    .updateKilnAlert(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.deleteKilnAlert = (req, res) => {
  kiln_admin_functions
    .deleteKilnAlert(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getKilnAlerts = (req, res) => {
  kiln_admin_functions
    .getKilnAlerts(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
