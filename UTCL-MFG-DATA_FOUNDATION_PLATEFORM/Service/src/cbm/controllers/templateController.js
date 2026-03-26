
var TemplateFunctions = require("../functions/TemplateFunctions");

exports.sendTemplateData = (req, res) => {
  TemplateFunctions.sendTemplateData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getTemplateData = (req, res) => {
  TemplateFunctions.getTemplateData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.editTemplate = (req, res) => {
  TemplateFunctions.editTemplate(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.deleteTemplate = (req, res) => {
  TemplateFunctions.deleteTemplate(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.sendEmailTemplateData = (req, res) => {
  console.log("sendEmailTemplateDataController");
  TemplateFunctions.sendEmailTemplateData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getEmailTemplateData = (req, res) => {
  TemplateFunctions.getEmailTemplateData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.editEmailTemplateData = (req, res) => {
  TemplateFunctions.editEmailTemplateData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.deleteEmailTemplate = (req, res) => {
  TemplateFunctions.deleteEmailTemplate(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.EmailLogs = (req, res) => {
  TemplateFunctions.EmailLogs(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.reportData = (req, res) => {
  TemplateFunctions.reportData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.sendReportData = (req, res) => {
  TemplateFunctions.sendReportData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getReportData = (req, res) => {
  TemplateFunctions.getReportData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.deleteReportData = (req, res) => {
  TemplateFunctions.deleteReportData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.editReportData = (req, res) => {
  TemplateFunctions.editReportData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.exportReportData = (req, res) => {
  TemplateFunctions.exportReportData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getCycloneDataEff = (req, res) => {
  TemplateFunctions.getCycloneDataEffNew(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getCycloneData = (req, res) => {
  TemplateFunctions.getCycloneData(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getCycloneEffTrends = (req, res) => {
  TemplateFunctions.getCycloneEffTrends(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};
exports.getSmsRecepients = (req, res) => {
  TemplateFunctions.getSmsRecepients(req, res)
    .then((response) => {
      res.status(response.statusCode).json(response);
    })
    .catch((response) => {
      res.status(response.statusCode).json(response);
    });
};

