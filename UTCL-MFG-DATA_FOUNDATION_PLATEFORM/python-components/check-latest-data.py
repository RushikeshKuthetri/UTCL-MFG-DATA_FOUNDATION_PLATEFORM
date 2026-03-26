import boto3
import asyncio
import time
from datetime import datetime, timedelta, timezone

ACCESS_KEY = ""
SECRET_KEY = ""
REGION = "ap-south-1"

async def get_all_data():
    dynamodb = boto3.resource('dynamodb', region_name=REGION,
            # aws_access_key_id=ACCESS_KEY,
            # aws_secret_access_key=SECRET_KEY
    )
    table_name = "opcua_endpoint_status"
    table = dynamodb.Table(table_name)
    
    response = table.scan()
    data = response['Items']

    while 'LastEvaluatedKey' in response:
        response = table.scan()
        data.extend(response['Items'])
    
    print(f"Scan Completed. Total Records: {len(data)}")
    return data

async def check(data):
    out_of_range = {}

    now = datetime.now(timezone.utc)
    three_hours_ago = now - timedelta(hours=3)

    for item in data:
        timestamp = item.get("RecordUpdatedTimestamp")
        plant_name = item.get("Plant")
        endpoint = item.get("Endpoint")
        if timestamp is None or plant_name is None or endpoint is None:
            continue
        # Parse IST timestamp and convert to UTC
        try:
            ts_dt = datetime.fromisoformat(timestamp)
            # The timestamp is in IST (UTC+5:30)
            ist_offset = timezone(timedelta(hours=5, minutes=30))
            ts_dt = ts_dt.replace(tzinfo=ist_offset)
            ts_dt_utc = ts_dt.astimezone(timezone.utc)
        except Exception:
            continue
        if ts_dt_utc < three_hours_ago:
            print(f"Plant: {plant_name:<20} | Endpoint: {endpoint:<40} | Timestamp: {timestamp}")
            out_of_range.setdefault(plant_name, []).append(endpoint)
    if out_of_range:
        print("\nSummary of Out-of-Range Endpoints:")
        total = sum(len(endpoints) for endpoints in out_of_range.values())
        for plant, endpoints in out_of_range.items():
            print(f"Plant: {plant:<15} | Endpoints: {len(endpoints)}")
        print(f"\nTotal Out-of-Range Endpoints: {total}")
    else:
        print("No out-of-range entries found.")
            
    

async def main():
    data = await get_all_data()
    filtered_data = [item for item in data if item.get("IsConnected") == True]
    await check(filtered_data)
    
asyncio.run(main())