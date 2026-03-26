const connection = require("../../../../db/connectionsql");
const { splitToArray } = require("../../../utils/splitToArray");

module.exports = {
  userDetails: async (req, res, next) => {
    const { superAdminid } = req.body;

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    try {
      var Query;
      if (req.user != "i4.utclconnect@adityabirla.com") {
        Query = "exec [Admin].[plantModule_accessForUser&Admin] ";
      } else {
        Query = "exec [Admin].[plantModule_accessForAll]";
      }

      const result = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (result.length == 0) {
        return res.status(200).json({
          code: 200,
          status: "success",
          data: [],
        });
      }

      const data = result.map(({ Plants, Modules, ...others }) => {
        plantsArray = splitToArray(Plants);
        modulesArray = splitToArray(Modules);

        return { ...others, Plants: plantsArray, Modules: modulesArray };
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: data,
        length: data.length,
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        error: "Something Went Wrong!Try Again.",
      });
    }
  },
};
