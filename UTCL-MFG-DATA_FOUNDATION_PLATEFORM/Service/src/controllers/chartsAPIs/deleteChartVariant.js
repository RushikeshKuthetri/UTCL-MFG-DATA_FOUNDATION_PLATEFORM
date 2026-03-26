const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { QueryCommand, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoClient = new DynamoDBClient({
    region: "ap-south-1"
});

const TABLE_NAME = "UserDashboardFavorites";
module.exports = {
    deleteTrendVariant: async (req, res) => {
        try {
            const { userId, variantId } = req.body;

            if (!userId || !variantId) {
                return res.status(400).json({
                    success: false,
                    message: "userId and variantId are required"
                });
            }

            // 🔹 Step 1: Find the item
            const existingVariants = await dynamoClient.send(
                new QueryCommand({
                    TableName: TABLE_NAME,
                    KeyConditionExpression: "userId = :uid",
                    FilterExpression: "variantId = :vid AND isDeleted = :false",
                    ExpressionAttributeValues: {
                        ":uid": userId,
                        ":vid": variantId,
                        ":false": false
                    }
                })
            );

            if (!existingVariants.Items || existingVariants.Items.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Variant not found"
                });
            }

            const variantItem = existingVariants.Items[0];
            const variantName = variantItem.variantName;

            // 🔹 Step 2: Soft Delete
            await dynamoClient.send(
                new UpdateCommand({
                    TableName: TABLE_NAME,
                    Key: {
                        userId: variantItem.userId,
                        createdAt: variantItem.createdAt
                    },
                    UpdateExpression: "SET isDeleted = :true, updatedAt = :updatedAt",
                    ExpressionAttributeValues: {
                        ":true": true,
                        ":updatedAt": new Date().toISOString()
                    }
                })
            );

            return res.status(200).json({
                success: true,
                message: `${variantName} deleted successfully`,
                deletedVariantId: variantId,
                deletedVariantName: variantName
            });

        } catch (error) {
            console.error("deleteTrendVariant error:", error);

            return res.status(500).json({
                success: false,
                message: "Failed to delete variant"
            });
        }
    }
}