const { default: axios } = require("axios");
const generateTokenRole = require("../../utils/generateTokenRole");
const connection = require("../../db/connectionsql");
const { splitToArray } = require("../../utils/splitToArray");

module.exports = {
  adLoginBasic: async (req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];

    try {
      const userMail = await axios.get("https://graph.microsoft.com/v1.0/me", {
        headers: {
          Authorization: "Bearer " + accessToken.toString(),
        },
      });

      if (!userMail.data) {
        return res.status(401).json({ error: "Login Failed" });
      }

      const userid = userMail.data.userPrincipalName;
      const userLocation = userMail.data.officeLocation;

      Query = `exec admin.plantModule_accessToUser  '${userid}','${userLocation}'`;
      // Query = `exec admin.plantModule_accessToUser  'utcl-mum.brm5@adityabirla.comm','Aditya Cement Works'`;
      // Query = `exec admin.plantModule_accessToUser  'abhishekjain4-v@adityabirla.com','null'`

      const result = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (result[0] && result[0].IsActive == false) {
        return res.status(401).json({ error: "Login Failed! User not active." });
      }

      if (!result[0]) {
        return res.status(200).json({
          status: "success",
          code: 200,
          data: {
            UserID: userid,
            UserName: userid.split("@")[0],
            IsActive: false,
            Role: "user",
            Plants: [],
            Sections: [],
            "Tag Names": [],
            uiDefaultSettings: {},
            Modules: [],
          },
          token: null,
        });
      }

      //////////////////////

      const { Plants, Modules, ...dataToSend } = result[0];
      dataToSend["Plants"] = [];
      dataToSend["Modules"] = [];

      plantArray = splitToArray(Plants);
      moduleArray = splitToArray(Modules);

      plantArray.forEach((Plant) => Plant && dataToSend.Plants.push({ Plant }));
      moduleArray.forEach((Module) => Module && dataToSend.Modules.push({ Module }));

      // console.log(dataToSend, " dataToSend");

      var token = await generateTokenRole({
        userid: dataToSend.UserID,
        role: dataToSend.Role,
        modules: moduleArray,
      });

      res.status(200).json({
        status: "success",
        code: 200,
        data: { ...dataToSend, token },
      });
    } catch (error) {
      console.log("AdLoginBasic Error", error);
      res.status(401).json({ error: "Login Failed!Please Try Again." });
    }
  },
};
