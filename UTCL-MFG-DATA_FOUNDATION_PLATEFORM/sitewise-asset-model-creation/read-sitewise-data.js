const { IoTSiteWiseClient, BatchGetAssetPropertyAggregatesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
const xlsx = require('xlsx');
const fs = require('fs');
const AWS_ACCESS_KEY = "";
const AWS_SECRET_KEY = "";
const AWS_REGION = "ap-south-1";
const config = {
    region: AWS_REGION,
    // credentials: {
    //     accessKeyId: AWS_ACCESS_KEY,
    //     secretAccessKey: AWS_SECRET_KEY,
    // }
};
const client = new IoTSiteWiseClient(config);


async function main() {
    // Read input Excel file
    const workbook = xlsx.readFile('All_Plants_DynamoDB_TagMaster.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    // Extract TAG UID column
    const tagUids = data.map((row) => {
        return {
            "Tag UID": row['Tag UID'],
            "Plant": row['Plant'],
        }
    })
    // const tagUids = allTagUids.slice(0, 50);

    // Prepare request for BatchGetAssetPropertyAggregatesCommand
    const entries = tagUids.map((tagUid, index) => ({
        entryId: index.toString(),
        propertyAlias: tagUid["Tag UID"],
        aggregateTypes: ['AVERAGE'],
        resolution: '1d',
        startDate: new Date("2025-05-20T09:30:00.000Z"),
        endDate: new Date("2025-05-21T09:30:00.000Z"),
    }));

    // AWS BatchGetAssetPropertyAggregates allows up to 16 entries per request

    let results = [];
    let batchNumber = 0;
    for (let i = 0; i < entries.length; i += 16) {
        const batch = entries.slice(i, i + 16);
        batchNumber++;
        console.log(`Processing batch ${batchNumber} of ${Math.ceil(entries.length / 16)} | ${batchNumber / Math.ceil(entries.length / 16) * 100}%`);
        const command = new BatchGetAssetPropertyAggregatesCommand({ entries: batch });
        try {
            const response = await client.send(command);
            // console.log('Batch response:', response);
            // Map results to TAG UID and value
            const batchResults = response.successEntries.map((entry) => {
                const tagUid = batch.find(e => e.entryId === entry.entryId)?.propertyAlias;
                // console.log(entry.aggregatedValues.length)
                const value = entry.aggregatedValues[0]?.value?.average ?? null;
                const timestamp = entry.aggregatedValues[0]?.timestamp ?? null;
                return {
                    'Tag UID': tagUid,
                    'Value': value,
                    'Timestamp': timestamp,
                };
            });
            const errorResults = response.errorEntries.map(entry => {
                const tagUid = batch.find(e => e.entryId === entry.entryId)?.propertyAlias;
                return {
                    'Tag UID': tagUid,
                    'Value': "Error",
                    
                }
            });
            results = results.concat(batchResults, errorResults);
        } catch (err) {
            console.error('Error fetching aggregates for batch:', err);
        }
    }

    // Write results to new Excel file
    const newSheet = xlsx.utils.json_to_sheet(results);
    const newWorkbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWorkbook, newSheet, 'Results');
    xlsx.writeFile(newWorkbook, 'output.xlsx');

}

main()