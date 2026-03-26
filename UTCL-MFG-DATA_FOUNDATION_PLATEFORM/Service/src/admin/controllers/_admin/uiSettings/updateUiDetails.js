const connection = require("../../../../db/connectionsql");

module.exports = {
  updateUiDetails: async (req, res, next) => {
    const { adminid, DateDifference, DefaultInterval, MinDefaultExportSize } =
      req.body;
    // console.log(adminid, req.user, req.role);

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    if (!DateDifference || !DefaultInterval || !MinDefaultExportSize) {
      // return res.status(400).json({ error: "Please provide all required feilds in proper format" });
      const error = new Error(
        "Please provide all required fields in proper format"
      );
      error.status = 400;
      return next(error);
    }

    if (MinDefaultExportSize <= 0 || MinDefaultExportSize > 30) {
      // return res.status(400).json({ error: "Export size (in UI) can be in between 0MB and 30MB" });
      const error = new Error(
        "Export size (in UI) can be in between 0MB and 30MB"
      );
      error.status = 400;
      return next(error);
    }

    if (DateDifference <= 0 || DateDifference > 24) {
      // return res.status(400).json({
      //   error: "Default difference between start date and end date will be in hours (>0 and <=24)",
      // });
      const error = new Error(
        "Default difference between start date and end date will be in hours (>0 and <=24)"
      );
      error.status = 400;
      return next(error);
    }

    if (DefaultInterval <= 0 || DefaultInterval > 60) {
      // return res.status(400).json({
      //   error: "Default interval will be in minute (>0 and <=60)",
      // });
      const error = new Error(
        "Default interval will be in minute (>0 and <=60)"
      );
      error.status = 400;
      return next(error);
    }

    try {
      const paramaters = `
      @DateDifference=?,
      @DefaultInterval=?,
      @MinDefaultExportSize=?`;

      replacementArray = [
        DateDifference,
        DefaultInterval,
        MinDefaultExportSize,
      ];

      Query = "exec [dbo].[SP_UI_Default_Settings_Insert]" + paramaters;

      const result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      // //delete data from User_Details
      // await client.execute("utcprmfgadxiotpd-db", `.clear table UI_Default_Settings data`);

      // //add new data in User_Details
      // await client.execute("utcprmfgadxiotpd-db", `.ingest inline into table UI_Default_Settings <|${DateDifference},${DefaultInterval},${MinDefaultExportSize}`);

      res.status(200).json({
        code: 200,
        status: "success",
        data: "UI default settings updated successfully",
      });
    } catch (error) {
      // console.log(error);
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
