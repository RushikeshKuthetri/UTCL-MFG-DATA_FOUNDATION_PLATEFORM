const connection = require("../../../../db/connectionsql");
const { splitToArray } = require("../../../utils/splitToArray");

module.exports = {
  userDetails: async (req, res, next) => {
    const { adminid } = req.body;
    // console.log(adminid, req.user, req.role);

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    try {
      Query = "exec [Admin].[plantModule_accessForUser]";

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
      // res.status(400).json({
      //   code: 400,
      //   status: "failed",
      //   error: "Something Went Wrong!Try Again.",
      // });
      next(error);
    }
  },
};
