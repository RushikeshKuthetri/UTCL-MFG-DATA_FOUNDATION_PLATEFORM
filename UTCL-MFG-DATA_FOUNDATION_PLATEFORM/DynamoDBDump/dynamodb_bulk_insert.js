const XLSX = require('xlsx');
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, BatchWriteCommand } = require("@aws-sdk/lib-dynamodb");

// Initialize DynamoDB client
const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);

// Configure batch size (max 25 items per batch for DynamoDB)
const BATCH_SIZE = 25;
async function readExcelFile(filePath) {
    try {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert Excel data to JSON
        return XLSX.utils.sheet_to_json(worksheet);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        throw error;
    }
}

async function processBatch(items, plantCode) {
    try {
        const writeRequests = items.map(item => ({
            PutRequest: {
                Item: item
            }
        }));

        const params = {
            RequestItems: {
                [plantCode+"_TagMaster"]: writeRequests
            }
        };
        console.log("Processing param",params)
        const command = new BatchWriteCommand(params);
        const response = await docClient.send(command);

        // Handle unprocessed items if any
        if (response.UnprocessedItems && 
            Object.keys(response.UnprocessedItems).length > 0) {
            console.log('Unprocessed items:', response.UnprocessedItems);
            // Retry unprocessed items
            await processBatch(response.UnprocessedItems[plant]
                .map(request => request.PutRequest.Item));
        }

        return response;
        
        
        
    } catch (error) {
        console.error('Error processing batch:', error);
        throw error;
    }
}

async function bulkInsertFromExcel(filePath, plantCode) {
    try {
        console.log('Starting bulk insert process...');
        
        // Read Excel file
        const data = await readExcelFile(filePath);
        console.log(`Found ${data.length} records to process`);

        // Process data in batches
        for (let i = 0; i < data.length; i += BATCH_SIZE) {
            const batchItems = data.slice(i, i + BATCH_SIZE);
            console.log(`Processing batch ${i/BATCH_SIZE + 1}...`);
            
            await processBatch(batchItems,plantCode);
            
            // Add small delay between batches to avoid throttling
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        console.log('Bulk insert completed successfully');
    } catch (error) {
        console.error('Error in bulk insert:', error);
        throw error;
    }
}

// Example usage with error handling
async function main() {
    try {
        const plantCode = "TEST"
        const filePath = './Tags/New/NewDeltaTEST_TagMaster.xlsx';
        await bulkInsertFromExcel(filePath, plantCode);
    } catch (error) {
        console.error('Main process error:', error);
    }
}

// Run the process
main();
