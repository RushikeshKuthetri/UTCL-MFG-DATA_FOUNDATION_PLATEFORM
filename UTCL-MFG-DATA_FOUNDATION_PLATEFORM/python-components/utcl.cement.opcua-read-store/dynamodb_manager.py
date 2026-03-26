import boto3
from datetime import datetime
import logging
import sys
_logger = logging.getLogger('UTCL:dynamodb-manager')
logging.basicConfig(stream=sys.stdout, level=logging.INFO)

dynamodb_write_timestamps = {}

async def get_all_data(plant_code):
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    table_name = f"{plant_code}_TagMaster"
    table = dynamodb.Table(table_name)
    
    response = table.scan(
        ProjectionExpression="#endpoint, #TagUID, #uom, #IsDisplay, #section, #path, #ConvertToBinary",
        ExpressionAttributeNames= {
            "#endpoint": "OPC EndPOint",
            "#TagUID": "Tag UID",
            "#uom": "Unit Of Measurement",
            "#IsDisplay": "IsDisplay",
            "#section": "Section",
            "#path": "Path",
            "#ConvertToBinary": "ConvertToBinary"
        }
    )
    data = response['Items']

    while 'LastEvaluatedKey' in response:
        response = table.scan(
            ExclusiveStartKey=response['LastEvaluatedKey'],
            ProjectionExpression="#endpoint, #TagUID, #uom, #IsDisplay, #section, #path, #ConvertToBinary",
            ExpressionAttributeNames= {
                "#endpoint": "OPC EndPOint",
                "#TagUID": "Tag UID",
                "#uom": "Unit Of Measurement",
                "#IsDisplay": "IsDisplay",
                "#section": "Section",
                "#path": "Path",
                "#ConvertToBinary": "ConvertToBinary"
            }
        )
        data.extend(response['Items'])
    
    _logger.info(f"Scan Completed. Total Records: {len(data)}")
    endpoints_data = []
    endpoint_dict = {}

    for item in data:
        if "OPC EndPOint" not in item:
            continue
        if item["OPC EndPOint"] == "" or item["OPC EndPOint"] == "#N/A":
            continue
        if "Unit Of Measurement" not in item:
            continue
        if "Path" not in item:
            continue
        endpoint_url = item["OPC EndPOint"]
        if endpoint_url not in endpoint_dict:
            counter = len(endpoint_dict) + 1
            endpoint_dict[endpoint_url] = {
                "Name": f"S{counter}",
                "End Point": endpoint_url,
                "Tags": []
            }
        
        tag = {
            "Tag Path": item["Path"],
            "CDH Tag": item["Tag UID"],
            'ConvertToBinary': item.get("ConvertToBinary", False),
            "Is Digital Tag": item["Unit Of Measurement"].lower() in ["state", "status"],  # Check if UOM is "state" or "status"
            "Is Realtime": item.get("IsDisplay", False),  # Check if "IsDisplay" key is present, default to False
            "Unit Of Measurement": item["Unit Of Measurement"].lower()
        }
        endpoint_dict[endpoint_url]["Tags"].append(tag)

    endpoints_data = list(endpoint_dict.values())
    return endpoints_data


async def put_item(item):
    try:
        source = item["Source"]
        current_time = datetime.now()
        if source not in dynamodb_write_timestamps:
            dynamodb_write_timestamps[source] = current_time
            await put_and_upsert(item)
        else:
            time_difference = (current_time - dynamodb_write_timestamps[source]).total_seconds()
            if time_difference <= 30 * 60:  # 30 minutes
                # If the last write was less than 30 minutes ago, skip the write
                _logger.info(f"Skipping put_and_upsert for source {source} as it was called recently ({round(time_difference / 60)} min ago).")
                return None
            
            dynamodb_write_timestamps[source] = current_time
            await put_and_upsert(item)
            
    except Exception as e:
        _logger.error(f"Error in put_item: {e}")
        
async def put_and_upsert(item):
    put_item_table_name = "endpoint_status"
    upsert_table_name = "opcua_endpoint_status"
    
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    put_item_table = dynamodb.Table(put_item_table_name)
    
    put_item_response = put_item_table.put_item(
        Item=item
    )
    # upsert logic
    upsert_table = dynamodb.Table(upsert_table_name)
        
    update_expression = """
        SET TotalTags = :total, 
        ValidTags = :valid, 
        RecordUpdatedTimestamp = :record_updated_ts,
        ErrorOccurred = :error,
        IsConnected = :is_connected,
        Server = :server,
        IP = :ip
    """
    expression_attribute_values = {
        ':total': item["TotalTags"],
        ':valid': item["ValidTags"],
        ':record_updated_ts': item["CreatedAt"],
        ':error': item["ErrorOccurred"],
        ':is_connected': item["IsConnected"],
        ':server': item["Server"],
        ':ip': item.get("IP", "Unknown")
    }

    if item["ErrorOccurred"] is None:
        update_expression += ", LatestTimestamp = :latest_ts"
        expression_attribute_values[':latest_ts'] = item["CreatedAt"]

    upsert_response = upsert_table.update_item(
        Key={
        'Plant': item["Plant"],
        'Endpoint': item["Endpoint"]
        },
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="NONE"
    )
    