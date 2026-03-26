const connection = require("../../../../db/connectionsql");

module.exports = {
  insertMimicLineAlert: async (req, res, next) => {
    var responseObject = {};
    const { superAdminid, recipient, plant, isActive, interval, line, section } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!plant || !line || !interval || isActive == null || (isActive && typeof isActive != "boolean") || !section) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    const intervalUnit = interval.match(/[\d\.]+|\D+/g)[1]?.toLowerCase();
    if (!["h", "m", "s", "d"].includes(intervalUnit)) {
      return res.status(400).json({ error: "Invalid Interval" });
    }

    if (recipient?.includes(",")) {
      return res.status(400).json({ error: "Invalid recipient" });
    }

    try {
      let paramaters = `@Plant_name =?,
        @IsActive =?,
        @Interval =?,
        @Recipient =?,
        @line =?,
        @section =?`;

      let replacementArray = [plant, isActive, interval, recipient ? recipient : "", line, section];

      var ValueError = false;
      replacementArray.map((val) => {
        if (val === undefined) {
          responseObject.result = { result: "Value Error! incorrect Payload!" };
          responseObject.error = true;
          responseObject.status = "Failure";
          ValueError = true;
        }
      });

      if (ValueError) {
        return res.json(responseObject);
      }

      Query = "exec [dbo].[Alerts_For_Data_Not_Coming_withline_insert_new]" + paramaters;

      const result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (result.length > 0) {
        responseObject.result = result;
        responseObject.error = false;
        responseObject.status = "Success";
      } else {
        responseObject.result = {
          result: "Something went wrong. Please try again later.",
        };
        responseObject.error = true;
        responseObject.status = "Failure";
      }

      res.json(responseObject);
    } catch (error) {
      responseObject.result = { result: error.message };
      responseObject.error = true;
      responseObject.status = "Failure";

      res.status(400).json(responseObject);
    }
  },
};
