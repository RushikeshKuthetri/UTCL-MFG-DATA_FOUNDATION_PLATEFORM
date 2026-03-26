const connection = require("../../../../db/connectionsql");

module.exports = {
  plantDetails: async (req, res, next) => {
    const { adminid } = req.body;
    // console.log(adminid, req.user, req.role);

    if (adminid != req.user) {
      // return res.status(401).json({ error: "Not authorized, token invalid" });
      const error = new Error("Not authorized, token invalid");
      error.status = 401;
      return next(error);
    }

    try {
      Query = "exec [dbo].[Sp_plant_location]";

      const result = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      res.status(200).json({
        code: 200,
        status: "success",
        data: result,
        length: result.length,
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
