import boto3
import asyncio
import time
async def get_all_data(plant_code):
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    table_name = f"{plant_code}_TagMaster"
    table = dynamodb.Table(table_name)
    
    response = table.scan(
        ProjectionExpression="#endpoint, #TagUID, #uom, #IsDisplay, #section, #path, #line",
        ExpressionAttributeNames= {
            "#endpoint": "OPC EndPOint",
            "#TagUID": "Tag UID",
            "#uom": "Unit Of Measurement",
            "#IsDisplay": "IsDisplay",
            "#section": "Section",
            "#path": "Path",
            "#line": "Line"
        }
    )
    data = response['Items']

    while 'LastEvaluatedKey' in response:
        response = table.scan(
            ExclusiveStartKey=response['LastEvaluatedKey'],
            ProjectionExpression="#endpoint, #TagUID, #uom, #IsDisplay, #section, #path, #line",
            ExpressionAttributeNames= {
                "#endpoint": "OPC EndPOint",
                "#TagUID": "Tag UID",
                "#uom": "Unit Of Measurement",
                "#IsDisplay": "IsDisplay",
                "#section": "Section",
                "#path": "Path",
                "#line": "Line"
            }
        )
        data.extend(response['Items'])
    
    print(f"Scan Completed. Total Records: {len(data)}")
    return data

async def update_binary_convert_flag_in_dynamo(plant_code, data):
    total = len(data)
    print(f"updating total records: {total}")
    count = 0
    time.sleep(5)
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    table_name = f"{plant_code}_TagMaster"
    upsert_table = dynamodb.Table(table_name)
        
    update_expression = "SET #convert_to_binary = :convert_to_binary_flag"
    expression_attribute_names = {
        "#convert_to_binary": "ConvertToBinary"
    }
    
    # update_expression = "SET #is_display = :is_display_flag"
    # expression_attribute_names = {
    #     "#is_display": "IsDisplay"
    # }
    
    # update_expression = "SET #path = :path"
    # expression_attribute_names = {
    #     "#path": "Path"
    # }
    for item in data:
        expression_attribute_values = {
            ':convert_to_binary_flag': True
        }
        
        # expression_attribute_values = {
        #     ':is_display_flag': True
        # }
        
        # expression_attribute_values = {
        #     ':path': item.get("UpdatedPath")
        # }

        upsert_table.update_item(
            Key={
                'Section': item["Section"],
                'Tag UID': item["Tag UID"]
            },
            UpdateExpression=update_expression,
            ExpressionAttributeNames=expression_attribute_names,
            ExpressionAttributeValues=expression_attribute_values,
            ReturnValues="NONE"
        )
        count += 1
        print(f"Updated item: {item['Tag UID']} | {(count / total) * 100:.2f}%")
    print(f"Updated {len(data)} items in the table {table_name}")

async def main():
    
    plant_code = "MACW"
    data = await get_all_data(plant_code)
    # # Filter the data to get only the items where flag needs to be updated
    # filtered_data = [item for item in data if item.get("Line") == "3"]
    # filtered_data = [item for item in data if (item.get("Line") == "3" and item.get("Unit Of Measurement").lower() == "status")]
    # filtered_data = [item for item in data if (item.get("Line") == "2" and item.get("Unit Of Measurement").lower() == "state")]
    filtered_data = [
        item for item in data
        if (
            (item.get("Line") == "4"
            or item.get("Line") == 4)
            and (item.get("Unit Of Measurement") and item.get("Unit Of Measurement").lower() in ["status", "state"])
        )
    ]
    
    print(f"Filtered data count: {len(filtered_data)}")
    
    # for item in filtered_data:
    #     item["UpdatedPath"] = item["Path"].replace(
    #         "ns=3;s=OPC1->ABB.AfwOpcDaSurrogate.1->",
    #         "ns=3;s=ABB.AfwOpcDaSurrogate.1->"
    #     )
    
    # for item in filtered_data:
    #     print(f"Path       h: {item['Path']}")
    #     print(f"Updated Path: {item['UpdatedPath']}")
        # await asyncio.sleep(1)  # To avoid throttling in DynamoDB
    
    
    
    await update_binary_convert_flag_in_dynamo(plant_code, filtered_data)
    
asyncio.run(main())