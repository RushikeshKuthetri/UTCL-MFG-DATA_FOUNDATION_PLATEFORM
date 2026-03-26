const moment = require("moment");
const validateInterval = require("../../utils/validateInterval");
const {
  getQueryWithoutPagination,
  getQuery,
} = require("../../helpers/dynamoDB");
const {
  getAssetPropertyHistoryValueList,
  getAssetPropertyHistoryValueListOptimized,
  getAssetPropertyAggregateValueListOptimized,
  chunkArrayHistory,
  getDateRange,
} = require("../../helpers/iotSitewise");
const {
  BatchGetAssetPropertyValueHistoryCommand,
  IoTSiteWiseClient,
} = require("@aws-sdk/client-iotsitewise");

const client = new IoTSiteWiseClient({
  region: process.env.AWS_REGION_NAME,
});




// Plotly conversion utility function added by TRIDAI to give api response in Plotly Format to ignition team on (06-02-2026)
// ================== Plotly Utility ==================

const COLORS = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
];

function calculateStats(values = []) {
  if (!values.length) return null;

  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  const variance =
    values.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / values.length;

  return {
    avg: Number(avg.toFixed(2)),
    max: Number(max.toFixed(2)),
    min: Number(min.toFixed(2)),
    sd: Number(Math.sqrt(variance).toFixed(2)),
  };
}

function applyIST(date) {
  return new Date(date.getTime() + (5 * 60 + 30) * 60 * 1000)
    .toISOString()
    .replace("Z", "+05:30");
}

/**
 * Builds Plotly-ready tagGraph & tagTable directly from SiteWise data
 */
function buildPlotlyFromSiteWise({
  siteWiseData = [],
  tagItems = [],
  isAggregate = false,
}) {
  const tagGraph = [];
  const tagTable = [];

  siteWiseData.forEach((entry, idx) => {
    const tag = tagItems[idx];
    if (!tag) return;

    const uid = tag.Id;
    const name = tag["Tag Name"] || uid;

    const x = [];
    const y = [];

    const values = isAggregate
      ? entry.aggregatedValues || []
      : entry.assetPropertyValueHistory || [];

    for (const v of values) {
      const ts = isAggregate
        ? new Date(v.timestamp)
        : new Date(v.timestamp.timeInSeconds * 1000);

      const val = isAggregate
        ? v.value?.average
        : v.value?.doubleValue ?? v.value?.integerValue;

      if (val == null || isNaN(val)) continue;

      x.push(applyIST(ts));
      y.push(Number(val));
    }

    // ---- Plotly Graph ----
    tagGraph.push({
      uid,
      name,
      mode: "lines",
      line: {
        color: COLORS[idx % COLORS.length],
      },
      x,
      y,
      visible: true,
    });

    // ---- Summary Table ----
    const stats = calculateStats(y);
    if (stats) {
      tagTable.push({
        tagUID: uid,
        "Tag Description": name,
        Unit: "NA",
        Average: stats.avg,
        Max: stats.max,
        Min: stats.min,
        SD: stats.sd,
      });
    }
  });

  return { tagGraph, tagTable };
}

// ================== End Utility ==================


module.exports = {
  filterbyUIDAvg2WithPaginationIgnitionV2: async (req, res, next) => {
    let { sd, ed, csd, ced, pln, pln_code, uid, interval } = req.body;

    try {
      /* ================= VALIDATION ================= */

      if (!interval) interval = "1m";
      else if (!validateInterval(interval)) {
        return next(
          Object.assign(
            new Error(
              `Invalid Interval.(Valid intervals are "1m" to "60m" and "1s" to "60s" & 1h to 1d)`
            ),
            { status: 400 }
          )
        );
      }

      if (!sd || !ed) {
        return next(
          Object.assign(
            new Error(`Please provide start date and end date both`),
            { status: 400 }
          )
        );
      }

      if (
        (sd && !moment(sd, moment.ISO_8601, true).isValid()) ||
        (ed && !moment(ed, moment.ISO_8601, true).isValid())
      ) {
        return next(
          Object.assign(
            new Error(`Invalid date format. Use ISO format with timezone.`),
            { status: 400 }
          )
        );
      }

      if (Date.parse(sd) > Date.parse(ed)) {
        return next(
          Object.assign(
            new Error(`End date must be greater than the start date.`),
            { status: 400 }
          )
        );
      }

      /* ================= UID HANDLING ================= */

      let uidArray = [];
      if (uid?.constructor === Array) uidArray = uid;
      else uidArray = uid?.split(",");

      if (!uidArray.length) {
        return next(
          Object.assign(new Error(`Please add at least one uid`), {
            status: 400,
          })
        );
      }

      if (uidArray.length > 300) {
        return next(
          Object.assign(new Error(`Maximum 300 UIDs allowed`), {
            status: 400,
          })
        );
      }

      /* ================= PLANT RESOLUTION ================= */

      if (!pln && pln_code) {
        const plantDetails = await getQueryWithoutPagination({
          TableName: "Plant_Details",
          KeyConditionExpression: "#c = :v",
          ExpressionAttributeNames: { "#c": "Plant_SAP_Code" },
          ExpressionAttributeValues: { ":v": { S: pln_code } },
        });

        if (!plantDetails?.Items?.length) {
          return next(
            Object.assign(
              new Error(`No matching plant found for SAP code`),
              { status: 404 }
            )
          );
        }

        pln = Object.values(
          plantDetails.Items[0].Generic_Plant_Code
        )[0];
      }

      /* ================= TAG METADATA ================= */

      let tagItems = [];

      for (const tagUID of uidArray) {
        const tagResult = await getQuery({
          TableName: `${pln}_TagMaster`,
          IndexName: "Tag-UID-index",
          KeyConditionExpression: "#u = :v",
          ExpressionAttributeNames: { "#u": "Tag UID" },
          ExpressionAttributeValues: { ":v": { S: tagUID } },
        });

        if (tagResult?.Items?.length) {
          tagItems.push(
            ...tagResult.Items.map((item) => ({
              Id: Object.values(item["Tag UID"])[0],
              "Tag Name": Object.values(item["Tag Name"])[0],
              assetId: item.AssetID?.S,
              propertyId: item.PropertyID?.S,
            }))
          );
        }
      }

      if (!tagItems.length) {
        return next(
          Object.assign(new Error(`No matching tags found`), {
            status: 404,
          })
        );
      }

      /* ================= SITEWISE FETCH ================= */

      const startTime = new Date(sd || csd);
      const endTime = new Date(ed || ced);

      let siteWiseData;
      let isAggregate = interval === "1h" || interval === "1d";

      if (isAggregate) {
        siteWiseData = await getAssetPropertyAggregateValueListOptimized(
          tagItems,
          interval,
          startTime,
          endTime
        );
      } else {
        siteWiseData = await getAssetPropertyHistoryValueListOptimized(
          tagItems,
          startTime,
          endTime
        );
      }

      if (!siteWiseData?.length) {
        return next(
          Object.assign(
            new Error(`No data available for given timeline`),
            { status: 404 }
          )
        );
      }

      /* ================= PLOTLY CONVERSION ================= */

      const { tagGraph, tagTable } = buildPlotlyFromSiteWise({
        siteWiseData,
        tagItems,
        isAggregate,
      });

      if (!tagGraph.length) {
        return next(
          Object.assign(
            new Error(`No valid datapoints after processing`),
            { status: 404 }
          )
        );
      }

      /* ================= FINAL RESPONSE ================= */

      return res.status(200).json({
        code: 200,
        status: "success",
        tagGraph,
        tagTable,
        length: tagGraph.length,
        tokenExpiresAt: moment(req.tokenExpiresAt)
          .utcOffset(330)
          .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      });
    } catch (error) {
      next(error);
    }
  },
};


