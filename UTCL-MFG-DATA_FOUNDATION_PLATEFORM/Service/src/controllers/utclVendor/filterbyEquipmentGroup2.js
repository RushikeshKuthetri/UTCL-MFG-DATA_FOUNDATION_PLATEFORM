const moment = require("moment");

const client = require("../../db/connection");

// function getDifferenceInMinutes(date1, date2) {
//   const diffInMs = Math.abs(date2 - date1);
//   return diffInMs / (1000 * 60);
// }

module.exports = {
  filterbyEquipmentGroup2: async (req, res, next) => {
    const { sd, ed, csd, ced, pln, pln_code, eq_grp } = req.body;

    /////CHECKING FOR EMPTY OR NULL START DATE AND END DATE
    if ((sd != null && (csd != null || ced != null)) || (ed != null && (csd != null || ced != null))) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Either provide created-timestamp or timestamp.`,
      });
    }

    if ((sd != null && sd == "") || (ed != null && ed == "") || (sd != null && ed == null) || (ed != null && sd == null)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Please provide start date and end date.`,
      });
    }

    if ((csd != null && csd == "") || (ced != null && ced == "") || (csd != null && ced == null) || (ced != null && csd == null)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Please provide created-start date and created-end date.`,
      });
    }

    ////CHECKING FOR CORRECT PLANT ACCESS
    if (pln && !req.plantAccess.includes(pln.match(/[\d\.]+|\D+/g)[0])) {
      // console.log(pln.match(/[\d\.]+|\D+/g)[0]);
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `You only have access to ${req.plantAccess}.`,
      });
    }

    if (pln_code && !req.sapCode.includes(pln_code)) {
      // console.log(pln.match(/[\d\.]+|\D+/g)[0]);
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `You only have access to ${req.sapCode}.`,
      });
    }

    ////CHECKING FOR CORRECT DATE FORMAT
    if ((sd && !moment(sd, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) || (csd && !moment(csd, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid())) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Invalid Start Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset`,
      });
    }

    if ((ed && !moment(ed, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) || (ced && !moment(ced, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid())) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Invalid End Date. Correct Format(YYYY-MM-DDTHH:mm:ss.SSS) with timezone offset`,
      });
    }

    if (sd && ed && Date.parse(sd) > Date.parse(ed)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `End date must be greater than the start date.`,
      });
    }

    if (csd && ced && Date.parse(csd) > Date.parse(ced)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Created-end-date must be greater than the created-start-date.`,
      });
    }

    sd_ist = sd ? moment(sd).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : null;
    ed_ist = ed ? moment(ed).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : null;
    csd_ist = csd ? moment(csd).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : null;
    ced_ist = ced ? moment(ced).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSS") : null;

    try {
      if ((eq_grp == null && pln_code == null && pln != null) || (eq_grp == null && pln == null && pln_code != null)) {
        const result = await client.execute(
          "utcprmfgadxiotpd-db",
          `API1_PlantData_EqGroupCount('${sd ? sd_ist : ""}','${ed ? ed_ist : ""}','${pln ? pln : pln_code}','','${csd ? csd_ist : ""}','${ced ? ced_ist : ""}')`
        );

        const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

        const selectedData = newResult.data;

        // console.log("Result>>>", selectedData);

        if (selectedData[0].Count > 2000000) {
          return res.status(400).json({
            code: 400,
            status: "failed",
            message: "Max no of data (2000000) exceeded." + selectedData[0].Count + " data is fetched. Try adding equipment group or Reduce the time interval",
          });
        } else {
          const result = await client.execute(
            "utcprmfgadxiotpd-db",
            `set notruncation; API1_PlantData_EqGroup('${sd ? sd_ist : ""}','${ed ? ed_ist : ""}','${pln ? pln : pln_code}','','${csd ? csd_ist : ""}','${
              ced ? ced_ist : ""
            }')| take 2000000`
          );

          // const newResult = JSON.parse(
          //   JSON.stringify(result.primaryResults[0])
          // );

          const _rows = result.primaryResults[0]._rows;
          const columns = result.primaryResults[0].columns;

          const newResult = _rows.map((row) => {
            var result = {};
            columns.forEach((key, i) => (result[key.name] = row[i]));
            return result;
          });

          const dateISOSelectedData = newResult.map(({ Timestamp, Created_Timestamp, ...other }) => {
            var Timestamp_iso = Timestamp.replace(/\s+/g, "T") + "+05:30";
            var Created_Timestamp_iso = Created_Timestamp.replace(/\s+/g, "T") + "+05:30";
            other.Timestamp = Timestamp_iso;
            other.Created_Timestamp = Created_Timestamp_iso;
            return other;
          });

          //   console.log("Result>>>", result.primaryResults[0]._rows);
          // console.log("Result>>>", newResult);
          // const selectedData = newResult.data;

          res.status(200).json({
            code: 200,
            status: "success",
            length: dateISOSelectedData.length,
            result: dateISOSelectedData,
          });
        }
      } else if ((pln != null && eq_grp != null && pln_code == null) || (pln_code != null && eq_grp != null && pln == null)) {
        //   console.log("block 2 with plant and equipment group", pln, eq_grp);

        const result = await client.execute(
          "utcprmfgadxiotpd-db",
          `API1_PlantData_EqGroupCount('${sd ? sd_ist : ""}','${ed ? ed_ist : ""}','${pln ? pln : pln_code}','${eq_grp}','${csd ? csd_ist : ""}','${ced ? ced_ist : ""}')`
        );

        // console.log(result);

        const newResult = JSON.parse(JSON.stringify(result.primaryResults[0]));

        //   console.log("Result>>>", result.primaryResults[0]._rows);
        // console.log("Result>>>", newResult);

        const selectedData = newResult.data;

        // console.log("Result>>>", selectedData);

        if (selectedData[0].Count > 2000000) {
          return res.status(400).json({
            code: 400,
            status: "failed",
            message: "Max no of data (2000000) exceeded." + selectedData[0].Count + " data is fetched. Try adding equipment group or Reduce the time interval",
          });
        } else {
          const result = await client.execute(
            "utcprmfgadxiotpd-db",
            `set notruncation; API1_PlantData_EqGroup('${sd ? sd_ist : ""}','${ed ? ed_ist : ""}','${pln ? pln : pln_code}','${eq_grp}','${csd ? csd_ist : ""}','${
              ced ? ced_ist : ""
            }')| take 2000000`
          );

          const _rows = result.primaryResults[0]._rows;
          const columns = result.primaryResults[0].columns;

          const newResult = _rows.map((row) => {
            var result = {};
            columns.forEach((key, i) => (result[key.name] = row[i]));
            return result;
          });

          const dateISOSelectedData = newResult.map(({ Timestamp, Created_Timestamp, ...other }) => {
            var Timestamp_iso = Timestamp.replace(/\s+/g, "T") + "+05:30";
            var Created_Timestamp_iso = Created_Timestamp.replace(/\s+/g, "T") + "+05:30";
            other.Timestamp = Timestamp_iso;
            other.Created_Timestamp = Created_Timestamp_iso;
            return other;
          });

          // console.log(result);

          // const newResult = JSON.parse(
          //   JSON.stringify(result.primaryResults[0])
          // );
          // const selectedData = newResult.data;

          res.status(200).json({
            code: 200,
            status: "success",
            length: dateISOSelectedData.length,
            result: dateISOSelectedData,
          });
        }
      } else {
        res.status(400).json({
          code: 400,
          status: "failed",
          message: "Please enter required details.Either plant name/Plant SAP Code or plant name/Plant SAP Code with eq_grp.",
        });
      }
    } catch (error) {
      // console.log(error);
      res.status(400).json({
        code: 400,
        status: "failed",
        message: error.message,
      });
      // res.status(400).json(error);
    }
  },
};
