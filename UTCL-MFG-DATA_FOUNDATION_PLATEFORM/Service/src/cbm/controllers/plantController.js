var plant_functions = require("../functions/plant_functions");

exports.getAllPalntData = (req, res) => {
  plant_functions
    .getAllPalntData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getPlantName = (req, res) => {
  plant_functions
    .getPlantName(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getPlantAllTags = (req, res) => {
  // console.log("herrrrrrrrrrrrrrrrrrrr", plant_functions.getPlantAllTags);
  plant_functions
    .getPlantAllTags(req, res)
    .then((response1) => {
      res.status(response1.statusCode).json(response1);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.insertParameterSelect = (req, res) => {
  // console.log("herrrrrrrrrrrrrrrrrrrr", plant_functions.getPlantAllTags);
  plant_functions
    .insertParameterSelect(req, res)
    .then((response1) => {
      res.status(response1.statusCode).json(response1);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
