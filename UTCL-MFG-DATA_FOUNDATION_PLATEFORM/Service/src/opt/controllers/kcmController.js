var kcm_functions = require("../functions/kcm_functions");

exports.getLatestFilteredData = (req, res) => {
  kcm_functions
    .getLatestFilteredData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getRecommedationData = (req, res) => {
  kcm_functions
    .getRecommedationData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getRecommedationDataDateRange = (req, res) => {
  kcm_functions
    .getRecommedationDataDateRange(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateActions = (req, res) => {
  kcm_functions
    .updateActions(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getDropDownFilter = (req, res) => {
  kcm_functions
    .getDropDownFilter(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getBlaineRangeList = (req, res) => {
  kcm_functions
    .getBlaineRangeList(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateBlaineRangeList = (req, res) => {
  kcm_functions
    .updateBlaineRangeList(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getDashboardCardData = (req, res) => {
  kcm_functions
    .getDashboardCardData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getDashboardWeeklyCounts = (req, res) => {
  kcm_functions
    .getDashboardWeeklyCounts(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.exportRecommedationDataDateRange = (req, res) => {
  kcm_functions
    .exportRecommedationDataDateRange(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getCementThroughputData = (req, res) => {
  kcm_functions
    .getCementThroughputData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getCementThroughputDataAvgMonthly = (req, res) => {
  kcm_functions
    .getCementThroughputDataAvgMonthly(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getChartTrendsData = (req, res) => {
  kcm_functions
    .getChartTrendsData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.getCloseLoopMasterData = (req, res) => {
  kcm_functions
    .getCloseLoopMasterData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
exports.updateCloseLoopMasterData = (req, res) => {
  kcm_functions
    .updateCloseLoopMasterData(req, res)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};