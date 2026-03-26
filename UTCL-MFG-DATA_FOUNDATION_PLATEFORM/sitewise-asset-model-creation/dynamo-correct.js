const { DynamoDBClient, UpdateItemCommand, ScanCommand, DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require("@aws-sdk/util-dynamodb");

let dynamoDBTableName = "ALCW_TagMaster";

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
    const filteredData = data.filter(item => !item.hasOwnProperty('Business Unit'));
    console.log(`Filtered data length ${filteredData.length}`);

    console.log(`Actual ${data.length - filteredData.length}`)

    const dyclient = new DynamoDBClient({ region: "ap-south-1" });

    for (const item of filteredData) {
        const params = {
            TableName: dynamoDBTableName,
            Key: {
                'Section': { S: item["Section"] }, // Replace with your primary key attribute name and value,
                'Tag UID': { S: item["Tag UID"] }
            }
        };

        try {
            // console.log(params)
            await dyclient.send(new DeleteItemCommand(params));
            console.log(`Deleted item with primary key: ${item["Section"]} | ${item["Tag UID"]}`);
        } catch (error) {
            console.error(`Unable to delete item with primary key: ${item.PrimaryKeyAttributeValue}. Error JSON:`, JSON.stringify(error, null, 2));
        }
    }
    
    

}


main();