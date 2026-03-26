const connection = require("../../../../db/connectionsql");
const moment = require("moment");

module.exports = {
  templateDelete: async (req, res, next) => {
    const { superAdminid, TempletName, PlantName, UseCase, UserId } = req.body;
    // console.log(adminid, req.user, req.role);

    if (superAdminid != req.user) {
      return res.status(401).json({ error: "Not authorized, token invalid" });
    }

    if (!TempletName || !PlantName || !UseCase || !UserId) {
      return res.status(400).json({ error: "Please provide all required feilds in proper format" });
    }

    try {
      let parameters = `@tempname=?, @usecase=?, @userid=?, @plant=?`;
      let replacementArray = [TempletName, UseCase, UserId, PlantName];
      // let Query = "exec [dbo].[SP_CBM_Store_Efficiency_Testing_SelectRecord]" + parameters;
      let Query = "exec [dbo].[SP_CBM_EquipmentTemplatesSelectRecord]" + parameters;
      let result = await connection.query(Query, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      if (result.length === 0) {
        return res.status(409).json({ error: `Template does not exist` });
      }

      /*------------Delete the existing template-------------*/
      let parameters1 = `@TemplateName=?, @UseCase=?, @UserId=?, @PlantName=?`;
      // let Query1 = "exec [dbo].[SP_CBM_Delete_CBM_Store_Efficiency_Testing]" + parameters1;
      let Query1 = "exec [dbo].[SP_CBM_EquipmentTemplatesDelete]" + parameters1;
      await connection.query(Query1, {
        raw: true,
        replacements: replacementArray,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      /*------------Delete the existing template-------------*/

      const updatedAt = moment().utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
      FanName = result[0].FanName;
      Parameters = result[0].Parameters;
      Conditions = result[0].Conditions;
      Status_Old = result[0].Status;

      /*--------------Add Template Log------------*/
      let parameters2 = `@timestamp =? , @TemplateName=?, @PlantName = ?, @FanName=?, @Parameters= ?, @usecase=?, @Status_Old=?, @Status_New=?, @Conditions=?, @UserId_Old=?, @UserId_New=?, @UpdatedBy=?`;
      let replacementArray2 = [updatedAt, TempletName, PlantName, FanName, Parameters, UseCase, Status_Old, Status_Old, Conditions, UserId, "", superAdminid];
      let Query2 = "exec [dbo].[SP_CBM_Store_TemplateUpdation_Logs_Testing_Insert]" + parameters2;
      await connection.query(Query2, {
        raw: true,
        replacements: replacementArray2,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      /*--------------Add Template Log------------*/

      res.status(200).json({
        code: 200,
        status: "success",
        data: "data",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        code: 400,
        status: "failed",
        error: "Something Went Wrong!Try Again.",
      });
    }
  },
};
