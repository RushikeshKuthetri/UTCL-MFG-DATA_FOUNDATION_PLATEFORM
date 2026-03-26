const { DynamoDBClient, UpdateItemCommand, ScanCommand, DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require("@aws-sdk/util-dynamodb");

let dynamoDBTableName = "KCW_TagMaster";

async function scanFullTable() {
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

        console.log("Scan succeeded. Total items: ", data.length);
        const jsonData = data.map(item => {
            const unmarshalledItem = unmarshall(item);
            if (unmarshalledItem['Unit Of Measurement'] === 'state') {
                unmarshalledItem['Unit Of Measurement'] = 'State';
            }
            return unmarshalledItem;
        });
        return jsonData;
    } catch (error) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(error, null, 2));
        throw error;
    }
}

async function main() {
    const data = await scanFullTable();
    const dyclient = new DynamoDBClient({ region: "ap-south-1" });
    let count = 0;
    for (const item of data) {
        if (item["OPC EndPOint"] === "opc.tcp://10.5.18.44:48031/plantscada") {

            const params = {
                TableName: dynamoDBTableName,
                Key: {
                    'Section': { S: item["Section"] }, // Replace with your primary key attribute name and value,
                    'Tag UID': { S: item["Tag UID"] }
                },
                UpdateExpression: "SET #opce = :newEndpoint",
                ExpressionAttributeNames: {
                    "#opce": "OPC EndPOint",
                },
                ExpressionAttributeValues: {
                    ":newEndpoint": { S: "opc.tcp://10.5.18.46:48031/plantscada" },
                },
            };

            try {
                console.log(params);
                await dyclient.send(new UpdateItemCommand(params));
                console.log(`Updated item with id: ${item["Tag UID"]} to new endpoint`);
                count++;
            } catch (error) {
                // console.error(`Failed to update item with id: ${item.id}`, error);
                console.log(`Failed to update item with id: ${item}`);
                console.error(error);
            }
        }
    }
    console.log(`Total items updated: ${count}`);
}

// this code updates the endpoint to new one

// main();