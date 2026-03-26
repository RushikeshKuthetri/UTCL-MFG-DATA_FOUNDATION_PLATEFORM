const { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise");
const { DynamoDBClient, UpdateItemCommand, ScanCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const AWS_REGION = "ap-south-1";
const config = {
    region: AWS_REGION,
};
const ioTSiteWiseClient = new IoTSiteWiseClient(config);
const dynamoDBclient = new DynamoDBClient(config);

async function scanFullTable(dynamoDBTableName) {
    let params = {
        TableName: dynamoDBTableName,
    };
    let data = [];

    try {
        do {
            let response = await dynamoDBclient.send(new ScanCommand(params));
            data = data.concat(response.Items);
            if (response.LastEvaluatedKey) {
                params.ExclusiveStartKey = response.LastEvaluatedKey;
            }
            else {
                break;
            }
        }
        while (true);

        console.log(`Scan succeeded. ${dynamoDBTableName} | Total items: ${data.length}`);
        const jsonData = data.map(item => {
            const unmarshalledItem = unmarshall(item);
            return unmarshalledItem;
        });
        return jsonData;
    } catch (error) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(error, null, 2));
        throw error;
    }
}

async function getAssetPropertyValues(aliasList) {
    let results = [];
    const batchSize = 128;

    const entries = aliasList.map((alias, index) => ({
        entryId: index.toString(),
        propertyAlias: alias
    }));

    for (let i = 0; i < entries.length; i += batchSize) {
        const batch = entries.slice(i, i + batchSize);
        const command = new BatchGetAssetPropertyValueCommand({
            entries: batch
        });
        try {
            const response = await ioTSiteWiseClient.send(command);
            const batchResults = response.successEntries.map((entry) => {
                const tagUid = batch.find(e => e.entryId === entry.entryId)?.propertyAlias;
                // console.log(entry.aggregatedValues.length)
                const value = entry.assetPropertyValue?.value?.doubleValue ?? null;
                const timeInSeconds = entry.assetPropertyValue?.timestamp?.timeInSeconds ?? 0;
                const offsetInNanos = entry.assetPropertyValue?.timestamp?.offsetInNanos ?? 0;
                const timestamp = new Date(timeInSeconds * 1000 + Math.floor(offsetInNanos / 1e6));
                return {
                    alias: tagUid,
                    value: value,
                    timestamp: timestamp,
                };
            });
            if (response.errorEntries.length > 0) {
                console.log({
                    errorEntries: response.errorEntries.map(entry => ({
                        entryId: entry.entryId,
                        errorCode: entry.errorCode,
                        errorMessage: entry.errorMessage
                    }))
                })
            }
            results = results.concat(batchResults);
        } catch (error) {
            console.error("Error fetching asset property values:", error);
        }
    }
    return results;
}



async function main() {
    let data = await scanFullTable("Central_Mimic_Dashboard_Master");
    // Map alias to section for quick lookup
    const aliasToSection = {};
    data.forEach(item => {
        if (item['TPH UID'] && item['Section']) {
            aliasToSection[item['TPH UID']] = item['Section'];
        }
    });

    let assetPropertyValues = await getAssetPropertyValues(data.map(item => item['TPH UID']));

    // Add section to each assetPropertyValue
    assetPropertyValues = assetPropertyValues.map(item => ({
        ...item,
        section: aliasToSection[item.alias] || null
    }));

    let totalUpdated = 0;
    let totalSkipped = 0;

    for (const item of assetPropertyValues) {
        if (!item.alias || item.value === undefined || item.value === null || !item.timestamp) {
            // console.debug(`Skipping item with missing data: ${JSON.stringify(item)}`);
            totalSkipped++;
            continue;
        }
        if (item.section === "Cement Mill" && item.value <= 10) {
            // console.debug(`Skipping Cement Mill item with low value: ${JSON.stringify(item)}`);
            totalSkipped++;
            continue;
        }
        if (item.section === "Kiln" && item.value <= 50) {
            // console.debug(`Skipping Kiln item with low value: ${JSON.stringify(item)}`);
            totalSkipped++;
            continue;
        }
        try {
            let param = {
                TableName: "Central_Mimic_Dashboard_Tag_Values",
                Key: { "Tag UID": { S: item.alias } },
                UpdateExpression: "SET #v = :v, #t = :t",
                ExpressionAttributeNames: {
                    "#v": "value",
                    "#t": "timestamp"
                },
                ExpressionAttributeValues: {
                    ":v": { N: item.value.toString() },
                    ":t": { S: item.timestamp.toISOString() }
                }
            };
            await dynamoDBclient.send(new UpdateItemCommand(param));
            totalUpdated++;
        } catch (err) {
            console.error(`Failed to store ${item.alias}:`, err);
        }
    }
    console.log(`Total items processed: ${assetPropertyValues.length}`);
    console.log(`Total items updated: ${totalUpdated}`);
    console.log(`Total items skipped: ${totalSkipped}`);

}

export const handler = async (event) => {
    await main();
};
