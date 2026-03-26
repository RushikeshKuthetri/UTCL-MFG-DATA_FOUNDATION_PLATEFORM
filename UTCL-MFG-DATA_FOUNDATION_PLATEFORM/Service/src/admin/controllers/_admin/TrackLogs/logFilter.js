const connection = require("../../../../db/connectionsql");
const { sGen } = require("../../../utils/stringGenerator");

module.exports = {
  logFilter: async (req, res, next) => {
    const { adminid, startDate, endDate, modules, plants, page, offset } =
      req.body;

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    if (
      !startDate ||
      !endDate ||
      !plants ||
      plants?.constructor != Array ||
      !modules ||
      modules?.constructor != Array ||
      !page ||
      !offset ||
      offset <= 0
    ) {
      // return res.status(400).json({ error: "Please provide all required feilds in proper format" });
      const error = new Error(
        "Please provide all required fields in proper format"
      );
      error.status = 400;
      return next(error);
    }

    if (Date.parse(startDate) > Date.parse(endDate)) {
      // return res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   message: `End date must be greater than the start date.`,
      // });
      const error = new Error("End date must be greater than the start date");
      error.status = 400;
      return next(error);
    }

    try {
      let paramaters = `
            @module =?,
            @plant =?,
            @start_time =?,
            @end_time =?,
            @PageNumber =?,
            @offset =?`;

      stringPlants = sGen(plants ? plants : []);
      stringModules = sGen(modules ? modules : []);

      replacementArray = [
        stringModules ? stringModules : null,
        stringPlants ? stringPlants : null,
        startDate,
        endDate,
        page,
        offset,
      ];

      Query =
        "exec [Admin].[sp_UserAccessLogs_FilterData_Pagination_fortesting_Logs]" +
        paramaters;

      const result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      let paramaters2 = `
            @module =?,
            @plant =?,
            @start_time =?,
            @end_time =?,
            @offset =?`;

      replacementArray2 = [
        stringModules ? stringModules : null,
        stringPlants ? stringPlants : null,
        startDate,
        endDate,
        offset,
      ];

      Query2 =
        "exec [Admin].[sp_UserAccessLogs_FilterData_TotalPages_fortesting_Logs]" +
        paramaters2;

      const totalPages = await connection.query(Query2, {
        raw: true,
        replacements: replacementArray2,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: result,
        length: result.length,
        total: totalPages[0]?.NoOfPages,
      });
    } catch (error) {
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
