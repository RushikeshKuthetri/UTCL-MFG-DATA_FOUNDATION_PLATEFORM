const { v4: uuidv4 } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, QueryCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoClient = new DynamoDBClient({
    region: "ap-south-1"
});

const TABLE_NAME = "UserDashboardFavorites";

module.exports = {

    // ================= SAVE VARIANT =================
    saveTrendVariants: async (req, res) => {
        console.log("saveTrendVariants called with body:");

        try {
            const {
                userId,
                variantName,
                requestPayload,
                layout,
                graphConfig
            } = req.body;

            // 🔴 Validation
            if (!userId || !variantName || !requestPayload) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid variant payload"
                });
            }

            const normalizedVariantName = variantName.trim().toLowerCase();

            // 🔴 DUPLICATE CHECK
            const existingVariants = await dynamoClient.send(
                new QueryCommand({
                    TableName: TABLE_NAME,
                    KeyConditionExpression: "userId = :uid",
                    FilterExpression: "isDeleted = :false",
                    ExpressionAttributeValues: {
                        ":uid": userId,
                        ":false": false
                    }
                })
            );

            const alreadyExists = existingVariants.Items?.some(
                v => v.variantName?.trim().toLowerCase() === normalizedVariantName
            );

            if (alreadyExists) {
                return res.status(409).json({
                    success: false,
                    message: `${variantName} variant already exists`
                });
            }

            // 🔑 Create item
            const now = new Date().toISOString();
            const variantId = uuidv4();

            const variantItem = {
                userId,           // PK
                createdAt: now,   // SK

                variantId,
                variantName: variantName.trim(),

                requestPayload,
                layout: layout || "single",
                graphConfig,

                isDeleted: false,
                updatedAt: now
            };

            // ✅ SAVE
            await dynamoClient.send(
                new PutCommand({
                    TableName: TABLE_NAME,
                    Item: variantItem
                })
            );

            return res.status(200).json({
                success: true,
                message: `Variant ${variantName} saved successfully`,
                variantId
            });

        } catch (error) {
            console.error("saveTrendVariants error:", error);

            return res.status(500).json({
                success: false,
                message: "Failed to save variant"
            });
        }
    },

    // ================= GET ALL VARIANTS =================
    getVariantsApi: async (req, res) => {
        try {
            const { userId, plant } = req.body;

            if (!userId) {
                return res.status(400).json({
                    success: false,
                    message: "userId is required"
                });
            }

            // 🔹 Base query (user-specific)
            const params = {
                TableName: TABLE_NAME,
                KeyConditionExpression: "userId = :uid",
                FilterExpression: "isDeleted = :false",
                ScanIndexForward: false, // latest first
                ExpressionAttributeValues: {
                    ":uid": userId,
                    ":false": false
                }
            };

            // 🔹 OPTIONAL: plant-based segregation
            if (plant) {
                params.FilterExpression +=
                    " AND contains(requestPayload.plants, :plant)";
                params.ExpressionAttributeValues[":plant"] = plant;
            }

            const result = await dynamoClient.send(
                new QueryCommand(params)
            );

            return res.status(200).json({
                success: true,
                data: result.Items || []
            });

        } catch (error) {
            console.error("getVariantsApi error:", error);

            return res.status(500).json({
                success: false,
                message: "Failed to fetch variants"
            });
        }
    }
};
