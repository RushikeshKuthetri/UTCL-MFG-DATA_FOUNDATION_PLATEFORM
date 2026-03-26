const {
  IoTSiteWiseClient,
  ListAssetsCommand,
  DescribeAssetCommand,
  DescribeAssetModelCommand,
} = require("@aws-sdk/client-iotsitewise");

const client = new IoTSiteWiseClient({
  region: process.env.AWS_REGION_NAME || process.env.AWS_REGION, // supports both
});

const MEASUREMENT_LIMIT = 500;

/**
 * Controller / middleware
 */
module.exports = {
  // Updated on 22-12-2025 for IgnitionV1 by Tridiagonal AI for correct response format
  filterAssetsByPlant: async (req, res, next) => {
    try {
      const { plant } = req.body;

      if (!plant || typeof plant !== "string" || !plant.trim()) {
        const error = new Error("Please provide plant name");
        error.status = 400;
        return next(error);
      }

      // Optional: plant access control
      // if (!req.plantAccess?.includes(plant)) {
      //   const error = new Error(`You do not have access to the plant: ${plant}`);
      //   error.status = 403;
      //   return next(error);
      // }

      const assets = await getAssetsForPlant(plant.trim());

      return res.status(200).json({
        code: 200,
        status: "success",
        result: assets,
        length: 1, // result is a single object (kept as you had length in response)
      });
    } catch (err) {
      return next(err);
    }
  },
};

async function getAssetsForPlant(plant) {
  const matchedAssets = [];
  let nextToken;

  // Common naming: MACW-Asset-62
  // We’ll match both "MACW-Asset-" and also fallback to "MACW" startsWith if needed.
  const prefix1 = `${plant}-Asset-`;
  const prefix2 = `${plant}-`;

  do {
    const cmd = new ListAssetsCommand({
      // Valid values are typically: "ALL" or "TOP_LEVEL"
      // Use "ALL" unless you only want top-level assets.
      filter: "TOP_LEVEL",
      nextToken,
    });

    const resp = await client.send(cmd);
    console.log(`ListAssets response received. NextToken: ${resp}`);
    const summaries = resp.assetSummaries || [];

    console.log(`Processing ${summaries.length} assets from IoT SiteWise...`);
    for (const asset of summaries) {
      const name = asset.name || "";

      // must match plant prefix
      if (!(name.startsWith(prefix1) || name.startsWith(prefix2))) continue;

      // numeric suffix at end (e.g., ...-62)
      const match = name.match(/(\d+)\s*$/);
      if (!match) continue;

      matchedAssets.push({
        assetId: asset.id,
        name,
        suffix: Number.parseInt(match[1], 10),
        creationDate: asset.creationDate,
      });
    }

    nextToken = resp.nextToken;
  } while (nextToken);

  console.log(`Found ${matchedAssets.length} assets for plant '${plant}'`);

  if (matchedAssets.length === 0) {
    throw new Error(
      `No assets found for plant '${plant}' (prefix: '${prefix1}')`
    );
  }

  // Latest asset = highest numeric suffix
  const latest = matchedAssets.reduce((a, b) => (b.suffix > a.suffix ? b : a));

  const assetId = latest.assetId;
  const assetName = latest.name;

  // Describe asset -> assetModelId
  const assetDesc = await client.send(new DescribeAssetCommand({ assetId }));
  const assetModelId = assetDesc.assetModelId;

  if (!assetModelId) {
    throw new Error(`assetModelId not found for assetId: ${assetId}`);
  }

  // Describe model -> count measurement properties
  const modelDesc = await client.send(
    new DescribeAssetModelCommand({ assetModelId })
  );

  const properties = modelDesc.assetModelProperties || [];
  let measurementCount = 0;

  for (const prop of properties) {
    if (
      prop?.type &&
      Object.prototype.hasOwnProperty.call(prop.type, "measurement")
    ) {
      measurementCount += 1;
    }
  }

  const remainingSlots = Math.max(0, MEASUREMENT_LIMIT - measurementCount);

  return {
    latestAssetId: assetId,
    latestAssetName: assetName,
    assetModelId,
    measurementCount,
    remainingSlots,
    limit: MEASUREMENT_LIMIT,
    isFull: measurementCount >= MEASUREMENT_LIMIT,
  };
}


// const {
//   IoTSiteWiseClient,
//   ListAssetsCommand,
//   DescribeAssetCommand,
//   DescribeAssetModelCommand,
// } = require("@aws-sdk/client-iotsitewise");

// const client = new IoTSiteWiseClient({
//   region: process.env.AWS_REGION_NAME || process.env.AWS_REGION,
// });

// const MEASUREMENT_LIMIT = 500;

// // Tune this based on throttling you see (5–10 is usually safe)
// const MAX_CONCURRENCY = 5;

// module.exports = {
//   filterAssetsByPlant: async (req, res, next) => {
//     try {
//       const { plant } = req.body;

//       if (!plant || typeof plant !== "string" || !plant.trim()) {
//         const error = new Error("Please provide plant name");
//         error.status = 400;
//         return next(error);
//       }

//       const result = await getAssetsAndTagsForPlant(plant.trim());

//       return res.status(200).json({
//         code: 200,
//         status: "success",
//         result,
//         length: result.assets.length,
//       });
//     } catch (err) {
//       return next(err);
//     }
//   },
// };

// async function getAssetsAndTagsForPlant(plant) {
//   const matchedAssets = [];
//   let nextToken;

//   const prefix1 = `${plant}-Asset-`;
//   const prefix2 = `${plant}-`;

//   // 1) List assets (TOP_LEVEL avoids AssetModelId requirement)
//   do {
//     const cmd = new ListAssetsCommand({
//       filter: "TOP_LEVEL",
//       nextToken,
//     });

//     const resp = await client.send(cmd);
//     const summaries = resp.assetSummaries || [];

//     for (const asset of summaries) {
//       const name = asset.name || "";
//       if (!(name.startsWith(prefix1) || name.startsWith(prefix2))) continue;

//       const match = name.match(/(\d+)\s*$/);
//       if (!match) continue;

//       matchedAssets.push({
//         assetId: asset.id,
//         name,
//         suffix: Number.parseInt(match[1], 10),
//         creationDate: asset.creationDate,
//       });
//     }

//     nextToken = resp.nextToken;
//   } while (nextToken);

//   if (matchedAssets.length === 0) {
//     throw new Error(
//       `No assets found for plant '${plant}' (prefix: '${prefix1}')`
//     );
//   }

//   // Latest asset = highest suffix
//   const latest = matchedAssets.reduce((a, b) => (b.suffix > a.suffix ? b : a));

//   // 2) Describe each asset to fetch tags (measurement properties)
//   // Cache models to avoid repeated DescribeAssetModel calls
//   const modelCache = new Map(); // assetModelId -> { measurementPropsById }

//   const describedAssets = await mapWithConcurrency(
//     matchedAssets,
//     MAX_CONCURRENCY,
//     async (a) => {
//       const assetDesc = await client.send(
//         new DescribeAssetCommand({ assetId: a.assetId })
//       );
//       const assetModelId = assetDesc.assetModelId;

//       // Fetch model definition (cached) for richer metadata
//       if (assetModelId && !modelCache.has(assetModelId)) {
//         const modelDesc = await client.send(
//           new DescribeAssetModelCommand({ assetModelId })
//         );

//         const props = modelDesc.assetModelProperties || [];
//         const measurementPropsById = new Map();

//         for (const p of props) {
//           if (
//             p?.type &&
//             Object.prototype.hasOwnProperty.call(p.type, "measurement")
//           ) {
//             measurementPropsById.set(p.id, {
//               propertyId: p.id,
//               propertyName: p.name,
//               dataType: p.dataType,
//               unit: p.unit || null,
//             });
//           }
//         }

//         modelCache.set(assetModelId, { measurementPropsById });
//       }

//       // Asset properties (may include names directly)
//       const assetProps = assetDesc.assetProperties || [];

//       const measurementTags = [];
//       for (const ap of assetProps) {
//         // Keep only measurement properties
//         if (
//           ap?.type &&
//           Object.prototype.hasOwnProperty.call(ap.type, "measurement")
//         ) {
//           const fromModel =
//             assetModelId && modelCache.get(assetModelId)
//               ? modelCache.get(assetModelId).measurementPropsById.get(ap.id)
//               : null;

//           measurementTags.push({
//             propertyId: ap.id,
//             propertyName: ap.name || fromModel?.propertyName || null,
//             dataType: ap.dataType || fromModel?.dataType || null,
//             unit: ap.unit || fromModel?.unit || null,
//           });
//         }
//       }

//       const measurementCount = measurementTags.length;
//       const remainingSlots = Math.max(0, MEASUREMENT_LIMIT - measurementCount);

//       return {
//         assetId: a.assetId,
//         assetName: a.name,
//         suffix: a.suffix,
//         creationDate: a.creationDate,
//         assetModelId: assetModelId || null,

//         measurementCount,
//         remainingSlots,
//         limit: MEASUREMENT_LIMIT,
//         isFull: measurementCount >= MEASUREMENT_LIMIT,

//         // ✅ This is your "tags" list
//         measurementTags,
//       };
//     }
//   );

//   // sort assets by suffix ascending (or change to descending)
//   describedAssets.sort((x, y) => x.suffix - y.suffix);

//   return {
//     plant,
//     totalAssets: describedAssets.length,
//     latestAsset: {
//       assetId: latest.assetId,
//       assetName: latest.name,
//       suffix: latest.suffix,
//     },
//     assets: describedAssets,
//   };
// }

// /**
//  * Simple concurrency limiter (no external libs)
//  */
// async function mapWithConcurrency(items, concurrency, mapperFn) {
//   const results = new Array(items.length);
//   let index = 0;

//   async function worker() {
//     while (index < items.length) {
//       const current = index++;
//       results[current] = await mapperFn(items[current], current);
//     }
//   }

//   const workers = [];
//   const n = Math.min(concurrency, items.length);
//   for (let i = 0; i < n; i++) workers.push(worker());

//   await Promise.all(workers);
//   return results;
// }


