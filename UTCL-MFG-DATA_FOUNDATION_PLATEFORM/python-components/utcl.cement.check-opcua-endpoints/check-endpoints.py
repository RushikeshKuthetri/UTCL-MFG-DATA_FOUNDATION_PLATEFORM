import asyncio
from asyncua import Client, Node
import boto3
import sys
import logging
import json
_logger = logging.getLogger('UTCL:main')
logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger('asyncua').setLevel(logging.WARNING)

# configs = json.loads(sys.argv[1])
# plant_code = configs["plant_code"]
plant_code = "BJCW"

async def get_all_data():
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    table_name = f"{plant_code}_TagMaster"
    table = dynamodb.Table(table_name)
    
    response = table.scan(
        ProjectionExpression="#endpoint",
        ExpressionAttributeNames= {
            "#endpoint": "OPC EndPOint"
        }
    )
    data = response['Items']

    while 'LastEvaluatedKey' in response:
        response = table.scan(
            ExclusiveStartKey=response['LastEvaluatedKey'],
            ProjectionExpression="#endpoint",
            ExpressionAttributeNames= {
                "#endpoint": "OPC EndPOint"
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
        endpoint_url = item["OPC EndPOint"]
        if endpoint_url not in endpoint_dict:
            counter = len(endpoint_dict) + 1
            endpoint_dict[endpoint_url] = {
                "Name": f"S{counter}",
                "End Point": endpoint_url
            }

    endpoints_data = list(endpoint_dict.values())
    return endpoints_data


async def main():
    connected_endpoints = []
    error_endpoints = []
    endpoints_data = await get_all_data()
    _logger.info(f"Total Endpoints: {len(endpoints_data)}")
    print("Total Endpoints: ", (endpoints_data))
    for endpoint in endpoints_data:
        endpoint_url = endpoint["End Point"]
        # _logger.info(f"Connecting to {endpoint_url}...")
        client = Client(endpoint_url, timeout=30)
        try:
            await client.connect()
            _logger.info(f"Connected to {endpoint_url} successfully.")
            connected_endpoints.append(endpoint_url)
        except Exception as e:
            # _logger.info(f"Failed to connect to {endpoint_url}: {e}")
            error_endpoints.append(endpoint_url)

    if connected_endpoints:
        _logger.info("Connected Endpoints:")
        for endpoint in connected_endpoints:
            _logger.info(endpoint)
    if error_endpoints:
        _logger.info("Error Endpoints:")
        for endpoint in error_endpoints:
            _logger.info(endpoint)

    _logger.info("Connected Endpoints:")
    _logger.info(", ".join(connected_endpoints))
    
    _logger.info("Error Endpoints JSON:")
    _logger.info(", ".join(error_endpoints))

asyncio.run(main())