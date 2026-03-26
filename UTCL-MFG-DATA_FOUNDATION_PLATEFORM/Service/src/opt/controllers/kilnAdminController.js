var kiln_admin_functions = require("../functions/kiln_admin_functions");

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
