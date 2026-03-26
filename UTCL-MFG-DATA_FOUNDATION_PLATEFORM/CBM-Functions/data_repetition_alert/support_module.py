import boto3
import pandas as pd
import requests
import json
from boto3.dynamodb.conditions import Attr
from datetime import datetime, timedelta, timezone
from collections import defaultdict
import os
from botocore.config import Config
import logging
import base64

# For Speedy Process
from concurrent.futures import ThreadPoolExecutor, as_completed
sitewise_client = boto3.client(
    'iotsitewise', 
    region_name='ap-south-1',
    config=Config(
        connect_timeout=5,
        read_timeout=10,
        retries={'max_attempts': 2}
    )
)
# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('data_repetition_alert')

# Suppress verbose logging from AWS libraries
logging.getLogger("botocore").setLevel(logging.WARNING)
logging.getLogger("boto3").setLevel(logging.WARNING)
logging.getLogger("urllib3").setLevel(logging.WARNING)

i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

# Configure boto3 with timeouts
boto3_config = Config(
    connect_timeout=5,
    read_timeout=10,
    retries={'max_attempts': 2}
)

# Standardize on boto3.resource for DynamoDB
dynamodb_resource = boto3.resource('dynamodb', region_name='ap-south-1', config=boto3_config)
sitewise_client = boto3.client('iotsitewise', region_name='ap-south-1', config=boto3_config)

# Function to scan DynamoDB with filtering
def scan_with_filter(table_name, filter_expression=None):
    try:
        table = dynamodb_resource.Table(table_name)
        scan_kwargs = {}
        if filter_expression:
            scan_kwargs['FilterExpression'] = filter_expression

        # Perform the scan operation
        response = table.scan(**scan_kwargs)

        items = response.get('Items', [])
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'], **scan_kwargs)
            items.extend(response.get('Items', []))

        return items

    except Exception as e:
        logger.error(f"Error scanning DynamoDB table {table_name}: {e}")
        return []

def format_mail_content(repetitive_data: pd.DataFrame, data_check_interval: int):
    try:
        # Email details
        recipient_list = [
                          'shyamsundar.mahake@adityabirla.com', 'rohan.gonsalves@adityabirla.com',
                          'tanishq.arora@celebaltech.com', 'akash.chakraborty@celebaltech.com',
                          'shresth.chaudhary@celebaltech.com', 'gangadhar.neelam@celebaltech.com'
                          ]
        
        subject = 'Data Repetition Alert For All Plants'

        nunique_plants = repetitive_data['plants'].nunique()
        status = f'Data is being repeated for {nunique_plants} plants. Below are the plants:'
        # Group by plant and count tags
        plant_counts = repetitive_data.groupby('plants').size().reset_index(name='tag_count')
        
        plants_table = """
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th>Plant</th>
                <th>Number of Tags with Repetition</th>
            </tr>
        """

        for _, row in plant_counts.iterrows():
            plants_table += f"""
            <tr>
                <td>{row['plants']}</td>
                <td>{row['tag_count']}</td>
            </tr>
            """

        plants_table += "</table>"
        attachment = repetitive_data.to_csv(index=False).encode('utf-8')
        attachment_bytes = base64.b64encode(attachment).decode('utf-8')   

        # HTML content for the email
        mail_content = f"""
        <html>
        <head></head>
        <body>
            <p>Hi team,</p>
            <p>This is an alert regarding data repetition in the last {data_check_interval} hour(s).</p>
            <p><strong>Status:</strong></p>
            <ul>
                <p>{status}</p>
                <p>{plants_table}</p>
            </ul>
            <p>---</p>
            <p><strong>This is an automated message. Please do not reply directly to this email.</strong></p>
        </body>
        </html>
        """

        return subject, recipient_list, mail_content, attachment_bytes
    
    except Exception as e:
        logger.error(f'Error occurred while executing format_mail_content: {e}')
        print(f'Error occurred while executing format_mail_content: {e}')
        return None, None, None, None


def send_mail(repetitive_data, data_check_interval):
    subject, recipient_list, mail_content, attachment_bytes = format_mail_content(repetitive_data, data_check_interval)

    # Getting the access token for mail
    acc_token_url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"
    acc_token_payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'
    acc_token_headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        'Cookie':'buid=0.AScCDQSIkWdsW0yxEjajBLZtrXbeMWemFK5Jl7xuumkUOR4zAAA.AQABAAEAAAD--DLA3VO7QrddgJg7Wevrz8pg_EDvs-BxY5g44aXg9jN8peTCIvWxfVm6H_WrA1gCtjomxBmDwr-Y9sbwRXsNsrVEzyv2UTVXPRQvSZGM8hha7QrKxkyiPiodVRSdRwsgAA; fpc=AoltCTxR5_JHpboAlqmSyd22E27uAQAAAIpZbNoOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
        }
    
    acc_token_response=requests.request(method = "POST", url = acc_token_url, headers = acc_token_headers, data = acc_token_payload)
    acc_token_temp = json.loads(acc_token_response.text)
    access_token = acc_token_temp['access_token']


    url = "https://graph.microsoft.com/v1.0/me/sendMail"
    l=[]
    for i in recipient_list: 
        d = { "emailAddress": { "address":0} }
        d['emailAddress']['address'] = i        
        l.append(d) 

    payload = json.dumps({
    "message": {
        "subject": subject,
        "body": {
            "contentType": "html",
            "content": mail_content
        },
        "toRecipients": l,
        "attachments": [ 
            { "@odata.type": "#microsoft.graph.fileAttachment", 
            "name": "repetitive_data.csv", 
            "contentBytes": attachment_bytes } 
        ]
    },
    "saveToSentItems": "false"
    })

    
    headers = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + access_token 
    }
    try :
        response = requests.request("POST", url, headers=headers, data=payload)
    except Exception as e:
        print(f'Error while sending mail:{e}')

# Set time interval for fetching data (24 hours)
v_interval = timedelta(hours=24)
end_time = datetime.now(timezone.utc).replace(microsecond=0)
start_time = (end_time - v_interval).replace(microsecond=0)

# Function to check tag repetition in SiteWise
def check_tag_repetition(asset_id, property_id, plant, tag_uid):
    try:
        # Pagination setup
        next_token = None
        all_entries = []  # List to store all entries
        page_count = 0
        max_pages = 50 

        while True and page_count < max_pages:
            page_count += 1
            kwargs = {
                'assetId': asset_id,
                'propertyId': property_id,
                'startDate': start_time,
                'endDate': end_time,
                'timeOrdering': 'DESCENDING',
                'maxResults': 200, 
            }

            # Include nextToken if it's available
            if next_token:
                kwargs['nextToken'] = next_token

            # Fetch historical values from SiteWise
            response = sitewise_client.get_asset_property_value_history(**kwargs)

            # Extract entries from the response
            entries = response.get('assetPropertyValueHistory', [])
            all_entries.extend(entries)

            # Check if there is a nextToken for pagination
            next_token = response.get('nextToken')
            if not next_token:
                break  

        if not all_entries:
            return None

        # Extract and sort values by timestamp (descending)
        values = [
            (e['value']['doubleValue'], e['timestamp']['timeInSeconds']) 
            for e in all_entries if 'doubleValue' in e['value']
        ]
        if not values:
            return None
            
        values.sort(key=lambda x: -x[1])  # Sort by descending timestamp

        # Find sequences of repeated values
        repetition_groups = []
        current_group = []
        
        for val, ts in values:
            if val in (0, 1):  # Skip 0 and 1 values
                continue
                
            if not current_group:
                current_group.append((val, ts))
            elif abs(current_group[0][0] - val) < 0.001:  # Same value with tolerance
                current_group.append((val, ts))
            else:
                # Check if we have a significant repetition
                if len(current_group) >= 3:
                    min_ts = min(t for _, t in current_group)
                    max_ts = max(t for _, t in current_group)
                    time_diff = (max_ts - min_ts) / 60  # minutes
                    
                    if time_diff >= 30:  # At least 30 minutes of repetition
                        repetition_groups.append({
                            'value': current_group[0][0],
                            'min_ts': min_ts,
                            'max_ts': max_ts,
                            'duration': time_diff,
                            'count': len(current_group)
                        })
                
                # Start a new group
                current_group = [(val, ts)]
        
        # Check the last group
        if len(current_group) >= 3:
            min_ts = min(t for _, t in current_group)
            max_ts = max(t for _, t in current_group)
            time_diff = (max_ts - min_ts) / 60  # minutes
            
            if time_diff >= 30:
                repetition_groups.append({
                    'value': current_group[0][0],
                    'min_ts': min_ts,
                    'max_ts': max_ts,
                    'duration': time_diff,
                    'count': len(current_group)
                })
        
        # Return the longest repetition if any found
        if repetition_groups:
            longest = max(repetition_groups, key=lambda x: x['duration'])
            return {
                'plants': plant,
                'Tag UID': tag_uid,
                'Value': longest['value'],
                'MinTimestamp': datetime.fromtimestamp(longest['min_ts'], tz=timezone.utc).isoformat(),
                'MaxTimestamp': datetime.fromtimestamp(longest['max_ts'], tz=timezone.utc).isoformat(),
                'TimeDiffMinutes': longest['duration'],
            }
        
        return None

    except Exception as e:
        print(f"[{plant}] Error checking tag repetition for {tag_uid}: {e}")
        return None
    
def collect_repetition_data(all_tag_metadata_by_plant):
    repetitive_data = []
    total_tags = sum(len(tags) for tags in all_tag_metadata_by_plant.values())
    
    logger.info(f"Starting to process {total_tags} tags across {len(all_tag_metadata_by_plant)} plants")
    
    # Flatten the tag metadata for parallel processing
    all_tags = []
    for plant, tags in all_tag_metadata_by_plant.items():
        for tag in tags:
            all_tags.append((plant, tag))
    
    # Process tags in parallel with ThreadPoolExecutor
    with ThreadPoolExecutor(max_workers=10) as executor:
        # Submit all tasks
        future_to_tag = {}
        for plant, tag in all_tags:
            future = executor.submit(
                check_tag_repetition, 
                tag['asset_id'], 
                tag['property_id'], 
                plant, 
                tag['tag_uid']
            )
            future_to_tag[future] = (plant, tag)
        
        # Process results as they complete
        completed = 0
        for future in as_completed(future_to_tag):
            completed += 1
            if completed % 10 == 0 or completed == total_tags:
                logger.info(f"Progress: {completed}/{total_tags} tags processed ({(completed/total_tags)*100:.1f}%)")
            
            try:
                result = future.result()
                if result:
                    repetitive_data.append(result)
            except Exception as e:
                plant, tag = future_to_tag[future]
                logger.error(f"Error processing tag {tag['tag_uid']} for plant {plant}: {e}")
    
    # Group results by plant for reporting
    plant_counts = {}
    for item in repetitive_data:
        plant = item['plants']
        plant_counts[plant] = plant_counts.get(plant, 0) + 1
    
    for plant, count in plant_counts.items():
        logger.info(f"Plant {plant}: Found {count} tags with repetitive data")

    # Convert to DataFrame and handle empty case
    if not repetitive_data:
        logger.info("No repetitive data found in any plant")
        return pd.DataFrame()
        
    repetitive_df = pd.DataFrame(repetitive_data)
    logger.info(f"Total: Found {len(repetitive_df)} tags with repetitive data")
    return repetitive_df

# def collect_repetition_data(all_tag_metadata_by_plant):
#     repetitive_data = []
#     total_tags = sum(len(tags) for tags in all_tag_metadata_by_plant.values())
#     processed = 0

#     logger.info(f"Starting to process {total_tags} tags across {len(all_tag_metadata_by_plant)} plants")
    
#     for plant, tags in all_tag_metadata_by_plant.items():
#         logger.info(f"Processing plant {plant} ({len(tags)} tags)")
#         plant_repetitive_count = 0
        
#         for tag_metadata in tags:
#             processed += 1
#             # Only log progress every 10 tags or at the end
#             if processed % 10 == 0 or processed == total_tags:
#                 logger.info(f"Progress: {processed}/{total_tags} tags processed ({(processed/total_tags)*100:.1f}%)")
#             result = check_tag_repetition(
#                 tag_metadata['asset_id'], 
#                 tag_metadata['property_id'], 
#                 plant, 
#                 tag_metadata['tag_uid']
#             )
#             if result:
#                 repetitive_data.append(result)
#                 plant_repetitive_count += 1

#         logger.info(f"Plant {plant}: Found {plant_repetitive_count} tags with repetitive data")

#     # Convert to DataFrame and handle empty case
#     if not repetitive_data:
#         logger.info("No repetitive data found in any plant")
#         return pd.DataFrame()
        
#     repetitive_df = pd.DataFrame(repetitive_data)
#     logger.info(f"Total: Found {len(repetitive_df)} tags with repetitive data")
#     return repetitive_df

# data_check_interval = 1
# repetitive_data = check_iot_data(data_check_interval)
# send_mail(repetitive_data, data_check_interval)

def run_repetition_check(data_check_interval=1) -> pd.DataFrame:
    # Set time interval based on the data_check_interval parameter
    v_interval = timedelta(hours=data_check_interval)
    end_time = datetime.now(timezone.utc).replace(microsecond=0)
    start_time = (end_time - v_interval).replace(microsecond=0)
    # Debug the time interval
    logger.info(f"Checking for data repetition from {start_time} to {end_time}")
    # Rest of the function remains the same
    desired_uoms = ['Amps', 'Deg C', 'rpm', 'mmWC']
    filter_expr = None
    
    # Debug the filter expression construction
    for uom in desired_uoms:
        condition = Attr('Unit Of Measurement').eq(uom)
        if filter_expr is None:
            filter_expr = condition
            logger.info(f"Initial filter: Unit Of Measurement = {uom}")
        else:
            filter_expr = filter_expr | condition
            logger.info(f"Added filter: OR Unit Of Measurement = {uom}")



    plant_names = ['MKCW', 
                'KUCW', 'HCW', 'NDCW', 'WKCW', 'GCW', 'RC', 'KACW', 'RJCW', 'RWCW',
                'DHCW', 'AC', 'VCW', 'BJCW', 'SDCW', 'NCJW', 'SCW', 'BLCW', 'BKCW', 'APCW',
                'MACW', 'ACW', 'BGCW', 'SWCW', 'BCW', 'BOCW', 'DLCW', 'PLCW', 'SKCW', 'SBCW',
                'KCW', 'JHCW', 'DUCW', 'DKCW'
                ]

    #Plant exclusion as per ADX Query
    # excluded_plants = [ 'ALCW', 'ARCW', 'BHCW', 'BRCW', 'CTCW', 'DCW', 'GICW', 'HOCW','JCW', 'NCW', 'NMGD', 
    #                    'NTCW', 'PCW', 'PTCW', 'RDCW', 'RKCW','RTN', 'TDCW', 'WBCW']

    # Track processed tags for efficiency
    processed_tags = {plant: set() for plant in plant_names}
    all_tag_metadata_by_plant = defaultdict(list)

    for plant in plant_names:
        table_name = f"{plant}_TagMaster"
        try:
            logger.info(f"Scanning {table_name} for tags with specific UoMs...")
            tag_items = scan_with_filter(table_name, filter_expr)
            logger.info(f"Found {len(tag_items)} matching tags in {plant}")
            uom_counts = {}
            for item in tag_items:
                uom = item.get('Unit Of Measurement', 'Unknown')
                uom_counts[uom] = uom_counts.get(uom, 0) + 1
            
            for uom, count in uom_counts.items():
                logger.info(f"UoM '{uom}': {count} tags")

            for item in tag_items:
                tag_uid = item.get('Tag UID')
                if not tag_uid or tag_uid in processed_tags[plant]:
                    continue
                    
                processed_tags[plant].add(tag_uid)

                if all(k in item for k in ['Tag UID', 'AssetID', 'PropertyID']):
                    tag_metadata = {
                        'tag_uid': item['Tag UID'],
                        'asset_id': item['AssetID'],
                        'property_id': item['PropertyID']
                    }
                    all_tag_metadata_by_plant[plant].append(tag_metadata)
            
            logger.info(f"{plant}: {len(all_tag_metadata_by_plant[plant])} valid tags found")
        except Exception as e:
            logger.error(f"Skipping {plant} due to error: {e}")

    # Process the data
    logger.info("Checking for repetitive data...")
    result_df = collect_repetition_data(all_tag_metadata_by_plant)
    
    # Add summary
    total_tags_checked = sum(len(tags) for tags in all_tag_metadata_by_plant.values())
    logger.info(f"Summary: Checked {total_tags_checked} tags across {len(plant_names)} plants")
    if not result_df.empty:
        logger.info(f"Found {len(result_df)} tags with repetitive data")

    return result_df


