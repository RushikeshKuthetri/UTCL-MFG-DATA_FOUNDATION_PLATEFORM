const moment = require("moment");
const { sGen } = require("../../utils/stringGenerator");
// const client = require("../../db/connection");
const { filterbyUIDAvgGCW } = require("./filterbyUIDAvgGCW");

// Helpers replacing ADX
const { getTagMetadata } = require("../../helpers/dynamoDB");
const { batchGetAssetPropertyValueHistoryCommand } = require("../../helpers/iotSitewise");

// NEW: Helper function to extract plant name from UID
const extractPlantNameFromUID = (uid) => {
  const parts = uid.split("-");
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (/^[A-Z]+$/.test(part) && /^[A-Z]*CW$/.test(part)) {
      return part;
    }
  }

  // fallback: return first full alpha segment until number comes
  const match = uid.match(/[A-Z]+(?=\d)/);
  if (match) return match[0];

  // ultimate fallback
  return "UNKNOWN";
};

module.exports = {
  filterbyUIDAvg: async (req, res, next) => {
    const { sd, ed, csd, ced, pln, pln_code, uid, interval } = req.body;

    if (interval && (!(interval > 0) || !(interval <= 60))) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `Invalid Interval.(Valid intervals are >0 && <=60)`,
      });
    }

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

    if (pln && req.plantAccess && Array.isArray(req.plantAccess) && !req.plantAccess.includes(pln.match(/[\d\.]+|\D+/g)[0])) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `You only have access to ${req.plantAccess}.`,
      });
    }

    if (pln_code && req.sapCode && Array.isArray(req.sapCode) && !req.sapCode.includes(pln_code)) {
      return res.status(400).json({
        code: 400,
        status: "failed",
        message: `You only have access to ${req.sapCode}.`,
      });
    }

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

    try {
      if ((pln != null && pln_code == null) || (pln_code != null && pln == null)) {
        let uidArray = "";
        if (uid?.constructor === Array) {
          uidArray = uid;
        } else {
          uidArray = uid?.split(",");
        }
        uidArray = uidArray ? uidArray : "";

        if (uidArray.length == 0 || uid == "") {
          return res.status(400).json({
            code: 400,
            status: "failed",
            message: "Please add uids",
          });
        }

        if (uidArray.length > 300) {
          return res.status(400).json({
            code: 400,
            status: "failed",
            message: "You can add maximum 300 uids",
          });
        }

        const newString = sGen(uidArray);

        const generateTimeIntervals = (start, end, intervalMinutes) => {
          const startTime = moment(start);
          const endTime = moment(end);
          const intervals = [];
          while (startTime.isBefore(endTime)) {
            intervals.push(startTime.format("YYYY-MM-DDTHH:mm:ss.SSS"));
            startTime.add(intervalMinutes, "minutes");
          }
          return intervals;
        };

        const startDate = sd || csd;
        const endDate = ed || ced;
        const intervalMinutes = interval ? parseInt(interval) : 1;

        const timeIntervals = generateTimeIntervals(startDate, endDate, intervalMinutes);
        const estimatedCount = timeIntervals.length * uidArray.length;

        if (estimatedCount > 50000) {
          return res.status(400).json({
            code: 400,
            status: "failed",
            message: "Max no of data exceeded. Please reduce the number of uids or the time interval",
          });
        } else {
          if (pln == "GCW" || pln_code == "GW01") {
            const resultforGCW = await filterbyUIDAvgGCW(sd, ed, csd, ced, pln, pln_code, uid, interval, newString);
            res.status(200).json({
              code: 200,
              status: "success",
              result: resultforGCW,
              length: resultforGCW.length,
              tokenExpiresAt: moment(req.tokenExpiresAt).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            });
          } 
          
          else {
            const tagData = await Promise.all(
              uidArray.map(async (uid) => {
                try {
                  const dynamicPlant = extractPlantNameFromUID(uid); 
                  const tag = await getTagMetadata(dynamicPlant, uid);
                  console.log(`Tag metadata for UID ${uid}:`, JSON.stringify(tag));
                  if (!tag || !tag.AssetId || !tag.PropertyId || !tag.UID) {
                    console.warn(`Skipping tag with UID: ${uid} (Plant: ${dynamicPlant}) - metadata is incomplete.`);
                    return null;
                  }
          
                  console.log(`Metadata for UID ${uid} (plant ${dynamicPlant}):`, tag);
                  return tag;
                } catch (error) {
                  console.error(`Error fetching metadata for UID: ${uid}`, error);
                  return null;
                }
              })
            );
            
            const validTagData = tagData.filter(tag => tag !== null);
            
            if (validTagData.length === 0) {
              return res.status(400).json({
                code: 400,
                status: "failed",
                message: "No valid tags found with complete metadata. Please check the UIDs provided.",
              });
            }
            
            const queries = validTagData.map((tag) => ({
              entryId: tag.UID,
              assetId: tag.AssetId,
              propertyId: tag.PropertyId,
              startDate,
              endDate,
              resolution: `${intervalMinutes}m`,
              quality: "GOOD",
            }));

            const rawResults = await batchGetAssetPropertyValueHistoryCommand(queries);

            const formatted = rawResults.map((point) => ({
              ...point,
              Timestamp: moment(point.Timestamp).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            })).sort((a, b) => new Date(a.Timestamp) - new Date(b.Timestamp));
            console.log("Raw results:", JSON.stringify(rawResults, null, 2));
            res.status(200).json({
              code: 200,
              status: "success",
              result: formatted,
              length: formatted.length,
              tokenExpiresAt: moment(req.tokenExpiresAt).utcOffset(330).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            });
          }
        }
      } else {
        res.status(400).json({
          code: 400,
          status: "failed",
          message: "Please enter required details.Either plant name/Plant SAP Code or plant name/Plant SAP Code with array of uid.",
        });
      }
    } catch (error) {
      res.status(400).json({
        code: 400,
        status: "failed",
        message: error.message,
      });
    }
  },
};
