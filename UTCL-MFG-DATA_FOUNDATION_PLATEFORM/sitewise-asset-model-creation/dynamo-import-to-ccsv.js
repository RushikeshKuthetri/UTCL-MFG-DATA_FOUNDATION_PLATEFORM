const { DynamoDBClient, UpdateItemCommand, ScanCommand, DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const XLSX = require('xlsx');

async function scanFullTable(dynamoDBTableName) {
    const dyclient = new DynamoDBClient({ region: "ap-south-1" });
    let params = {
        TableName: dynamoDBTableName,
    };
    let data = [];

    try {
        do {
            let response = await dyclient.send(new ScanCommand(params));
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
            // if (unmarshalledItem['Unit Of Measurement'] === 'state') {
            //     unmarshalledItem['Unit Of Measurement'] = 'State';
            // }
            return unmarshalledItem;
        });
        return jsonData;
    } catch (error) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(error, null, 2));
        throw error;
    }
}


async function main() {
    const plants = [
        "KCW",
        "KUCW",
        "HCW",
        "NDCW",
        "WKCW",
        "NMGD",
        "GCW",
        "RC",
        "KACW",
        "RJCW",
        "RWCW",
        "DHCW",
        "AC",
        "VCW",
        "BJCW",
        "SDCW",
        "NCJW",
        "SCW",
        "BLCW",
        "BKCW",
        "APCW",
        "MACW",
        "ACW",
        "BGCW",
        "SWCW",
        "MKCW",
        "BOCW",
        "DLCW",
        "PLCW",
        "SKCW",
        "PTCW",
        "JCW",
        "SBCW",
        "BCW",
        "ALCW",
        "DCW",
        "PCW",
        "JHCW",
        "DUCW",
        "BRCW",
        "DKCW",
        "TDCW",
        "HOCW",
        "RDCW",
        "RKCW",
        "GICW",
        "ARCW",
        "BHCW",
        "CTCW",
        "NCW",
        "NTCW",
        "RTN",
        "WBCW"
    ];

    let workbook;
    let worksheet;

    try {
        // Try to read the existing workbook
        workbook = XLSX.readFile('output.xlsx');
        worksheet = workbook.Sheets['AllPlants'] || XLSX.utils.json_to_sheet([]);
    } catch (error) {
        // If the file doesn't exist, create a new workbook and worksheet
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.json_to_sheet([]);
    }

    // Convert existing worksheet to JSON
    const existingData = XLSX.utils.sheet_to_json(worksheet);
    let updatedData = existingData;

    for (const plant of plants) {
        const data = await scanFullTable(`${plant}_TagMaster`);
        updatedData = updatedData.concat(data);
    }

    // Create a new worksheet with the updated data
    worksheet = XLSX.utils.json_to_sheet(updatedData);

    // Append the updated worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'AllPlants');

    // Write the workbook back to the file
    XLSX.writeFile(workbook, 'output.xlsx');
}

main()