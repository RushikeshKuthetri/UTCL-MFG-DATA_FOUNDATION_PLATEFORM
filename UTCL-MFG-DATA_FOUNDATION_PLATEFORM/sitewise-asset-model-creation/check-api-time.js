const { IoTSiteWiseClient, BatchGetAssetPropertyValueHistoryCommand,
} = require("@aws-sdk/client-iotsitewise");
const client = new IoTSiteWiseClient({ region: "ap-south-1" }); // ap-south-1 = mumbai

async function main() {
    try {
        const startDate = new Date();
        // startDate.setFullYear(startDate.getFullYear() - 1);
        startDate.setDate(startDate.getDate() - 1);
        const endDate = new Date();

        let token = undefined;
        let dataCount = 0;
        console.time("BatchGetAssetPropertyValueHistory");
        do {
            const input = { // BatchGetAssetPropertyValueHistoryRequest
                entries: [ // BatchGetAssetPropertyValueHistoryEntries // required
                    { // BatchGetAssetPropertyValueHistoryEntry
                        entryId: "ABC001", // required
                        assetId: "109c1639-3e58-4bda-9b1b-646bfa0da0b6", // required
                        propertyId: "72c3b247-e673-452e-926b-e9e3b5eac403", // required
                        startDate: startDate,
                        endDate: endDate,
                        qualities: [ // Qualities
                            "GOOD"
                        ],
                        timeOrdering: "ASCENDING",
                    },
                ],
                nextToken: token,
                maxResults: 20000
            };
            const command = new BatchGetAssetPropertyValueHistoryCommand(input);
            const response = await client.send(command);

            dataCount += response.successEntries[0].assetPropertyValueHistory.length;
            console.log(`Data Count: ${dataCount}`);
            token = response.nextToken || undefined;
        } while (token);
        console.timeEnd("BatchGetAssetPropertyValueHistory");
        console.log(`Data Count: ${dataCount}`);
    } catch (error) {
        console.timeEnd("BatchGetAssetPropertyValueHistory");
        console.error(error);
    }

}




main();