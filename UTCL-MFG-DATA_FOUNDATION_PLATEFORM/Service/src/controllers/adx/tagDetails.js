const { sGen } = require("../../utils/stringGenerator");

const client = require("../../db/connection");

module.exports = {
  tagDetails: async (req, res, next) => {
    const { userId, plants } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    if (!userId || !plants || plants?.constructor != Array) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message: "Please provide userid, plant names in proper format",
      });
    }

    // console.log(req.body);

    var stringPlants = "";

    if (plants) {
      stringPlants = sGen(plants);
    }

    // console.log(`Fn_DftScr_Mimic('${stringPlants}')`);

    try {
      const resultT = await client.execute("utcprmfgadxiotpd-db", `Fn_Unique_tags('${stringPlants}')`);
      const newResultT = JSON.parse(JSON.stringify(resultT.primaryResults[0])).data;
      // console.log(newResultT);

      res.status(200).json({
        code: 200,
        status: "success",
        result: { ["Tag Names"]: newResultT },
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },
};
