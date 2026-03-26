var blaine_functions = require("../functions/blaine_functions");

exports.getLatestFilteredData = (req, res) => {
  blaine_functions
    .getLatestFilteredData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.insertPredictionData = (req, res) => {
  blaine_functions
    .insertPredictionData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getLastTwoHrsData = (req, res) => {
  blaine_functions
    .getLastTwoHrsData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateActualBlaineOneHour = (req, res) => {
  blaine_functions
    .updateActualBlaineOneHour(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateRecommadationForBlaine = (req, res) => {
  blaine_functions
    .updateRecommadationForBlaine(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateRemarksForBlaine = (req, res) => {
  blaine_functions
    .updateRemarksForBlaine(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getDropDownFilter = (req, res) => {
  blaine_functions
    .getDropDownFilter(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBarChartData = (req, res) => {
  blaine_functions
    .getBarChartData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.exportBlaineData = (req, res) => {
  blaine_functions
    .exportBlaineData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getControllableParameters = (req, res) => {
  blaine_functions
    .getControllableParameters(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBlainePredictionChartData = (req, res) => {
  blaine_functions
    .getBlainePredictionChartData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBlainePredictionChartDataForActualBlaine = (req, res) => {
  blaine_functions
    .getBlainePredictionChartDataForActualBlaine(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getPredictionDataWithDatetime = (req, res) => {
  blaine_functions
    .getPredictionDataWithDatetime(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBlaineAccMTD = (req, res) => {
  blaine_functions
    .getBlaineAccMTD(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBlaineAccDaywiseMTD = (req, res) => {
  blaine_functions
    .getBlaineAccDaywiseMTD(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
