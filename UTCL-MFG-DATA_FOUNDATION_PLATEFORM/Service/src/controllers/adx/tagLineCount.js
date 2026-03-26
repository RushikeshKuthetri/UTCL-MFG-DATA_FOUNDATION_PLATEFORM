const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { QueryCommand, BatchGetCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoClient = new DynamoDBClient({
  region: "ap-south-1",
});

const TABLE_NAME = "PlantTagsLineCount";

// 🔹 Helper: chunk array
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

module.exports = {
  getTagLineCountApi: async (req, res) => {
    try {
      const { plants } = req.body;

      console.log("Plants =>", plants);

      if (!plants || !plants.length) {
        return res.status(400).json({
          success: false,
          message: "Plants is required",
        });
      }

      let items = [];

      // ✅ SINGLE PLANT → Query
      if (plants.length === 1) {
        const result = await dynamoClient.send(
          new QueryCommand({
            TableName: TABLE_NAME,
            KeyConditionExpression: "plant_name = :p",
            ExpressionAttributeValues: {
              ":p": plants[0],
            },
          })
        );

        items = result.Items || [];
      }

      // ✅ MULTIPLE PLANTS → BatchGet
      else {
        const chunks = chunkArray(plants, 100);

        const results = await Promise.all(
          chunks.map((chunk) =>
            dynamoClient.send(
              new BatchGetCommand({
                RequestItems: {
                  [TABLE_NAME]: {
                    Keys: chunk.map((plant) => ({
                      plant_name: plant,
                    })),
                  },
                },
              })
            )
          )
        );

        items = results.flatMap(
          (r) => r.Responses?.[TABLE_NAME] || []
        );
      }

      // 🔥 TRANSFORM DATA (FIXED)
      const plantStats = Object.fromEntries(
        items.map((item) => [
          item.plant_name,
          {
            tags: item.tag_count,
            lines: item.line_count,
          },
        ])
      );

      // 🔥 OPTIONAL: ensure all requested plants exist
      plants.forEach((plant) => {
        if (!plantStats[plant]) {
          plantStats[plant] = { tags: 0, lines: 0 };
        }
      });

      return res.status(200).json({
        success: true,
        data: plantStats,
      });

    } catch (error) {
      console.error("getTagLineCountApi error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch tag/line count",
      });
    }
  },
};