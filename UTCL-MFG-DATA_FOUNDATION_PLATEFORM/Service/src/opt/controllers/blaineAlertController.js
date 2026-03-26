var blaine_alert_functions = require("../functions/blaine_alert_functions");

exports.insertBlaineAlert = (req, res) => {
  blaine_alert_functions
    .insertBlaineAlert(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBlaineAlerts = (req, res) => {
  blaine_alert_functions
    .getBlaineAlerts(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateBlaineAlert = (req, res) => {
  blaine_alert_functions
    .updateBlaineAlert(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.deleteBlaineAlert = (req, res) => {
  blaine_alert_functions
    .deleteBlaineAlert(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};