import json,requests,base64
import logging
import pandas as pd
from datetime import datetime,timedelta,timezone
import boto3
import pandas as pd
from datetime import datetime
from boto3.dynamodb.conditions import Key,Attr
import os
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)

database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")

i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

dynamodb = boto3.resource('dynamodb')
sitewise = boto3.client('iotsitewise')

def correct_ist_to_utc(start_dt, end_dt):
    """
    Adjusts datetime objects that are actually IST but marked as UTC.
    Assumes input datetimes are timezone-aware in UTC but represent IST time.
    Subtracts 5 hours 30 minutes to convert them to actual UTC times.
    """
    if start_dt.tzinfo is None or end_dt.tzinfo is None:
        raise ValueError("Datetime inputs must be timezone-aware")

    offset = timedelta(hours=5, minutes=30)

    start_utc = start_dt - offset
    end_utc = end_dt - offset

    return start_utc, end_utc


'''def sitewise_query_execute(plant_name, start_time, end_time, tag_list, table_name, v_interval):
    print(f'start time: {start_time}')
    print(f'end time: {end_time}')
    print('Inside function')
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    sitewise = boto3.client('iotsitewise', region_name='ap-south-1')
    table = dynamodb.Table(table_name)

    result = {}
    metadata_rows = []  # For df2

    for tag_uid in tag_list:
        if tag_uid is None:
            continue

        response = table.query(
            IndexName='Tag-UID-index',
            KeyConditionExpression=Key('Tag UID').eq(tag_uid),
            FilterExpression=Attr('Plant').eq(plant_name)
        )

        items = response.get('Items', [])
        if not items:
            result[tag_uid] = None
            continue

        mapping = items[0]
        metadata_rows.append(mapping)  # Store metadata for df2
        print(f' metadata: {metadata_rows}')
        asset_id = mapping.get('AssetID')
        property_id = mapping.get('PropertyID')
        print(asset_id, property_id)
        if not asset_id or not property_id:
            result[tag_uid] = None
            continue

        try:
            all_datapoints = []
            chunk_start = start_time

            while chunk_start < end_time:
                chunk_end = min(chunk_start + timedelta(hours=2), end_time)
                print(f"Fetching chunk: {chunk_start} to {chunk_end}")

                next_token = None
                while True:
                    kwargs = dict(
                        assetId=asset_id,
                        propertyId=property_id,
                        startDate=int(chunk_start.timestamp()),
                        endDate=int(chunk_end.timestamp()),
                        timeOrdering='ASCENDING',
                        maxResults=250
                    )
                    if next_token:
                        kwargs['nextToken'] = next_token

                    sitewise_response = sitewise.get_asset_property_value_history(**kwargs)
                    datapoints = sitewise_response.get('assetPropertyValueHistory', [])
                    all_datapoints.extend(datapoints)

                    if datapoints:
                        last_ts = datapoints[-1]['timestamp']['timeInSeconds']
                        print(f"  Got {len(datapoints)} points, last: {datetime.utcfromtimestamp(last_ts)}")

                    next_token = sitewise_response.get('nextToken')
                    if not next_token:
                        break

                chunk_start = chunk_end  # Move to next time slice

            result[tag_uid] = [
                {
                    'timestamp': dp['timestamp']['timeInSeconds'],
                    'value': dp['value'].get('doubleValue') or dp['value'].get('stringValue') or dp['value'].get('integerValue'),
                    'quality': dp['quality']
                } for dp in all_datapoints
            ]

        except Exception as e:
            print(f"Error fetching SiteWise data for {tag_uid}: {e}")
            result[tag_uid] = None

    print(result)
    # Create df (SiteWise time-series data)
    flat_data = []
    for tag, entries in result.items():
        if entries is None:
            continue
        for entry in entries:
            flat_data.append({
                "Id": tag,
                "Timestamp": entry["timestamp"],
                "Value": entry["value"],
                "Quality": entry["quality"]
            })
    print(f'flat data: {flat_data}')
    df = pd.DataFrame(flat_data)
    print(df['Timestamp'].unique())
    print(f'df : {df}')
    # Create df2 (DynamoDB metadata)
    df2 = pd.DataFrame(metadata_rows)
    print(f'df2: {df2}')
    if df.empty or df2.empty:
        print("No SiteWise data or metadata found. Returning empty DataFrame.")
        return pd.DataFrame()

    df['Timestamp'] = pd.to_datetime(df['Timestamp'], unit='s', utc=True) + pd.Timedelta(hours=5, minutes=30)
    print(df['Timestamp'].head())
    df['Timestamp'] = df['Timestamp'].dt.floor('2min')
    print(df['Timestamp'].head())
    print(f'rounding off timestamp: {df}')
    print(df['Timestamp'].unique())
    merged_df = pd.merge(df, df2, left_on='Id', right_on='Tag UID')
    print(f'merged df: {merged_df}')
    summary = (
        merged_df.groupby(['Id', 'Timestamp', 'Standard Variable Description'], as_index=False)
        .agg(Value=('Value', 'mean'))
    )
    print(f'summary 1 : {summary}')
    summary['Value'] = summary['Value'].round(3)
    print(f' summary after value change: {summary}')

    summary['DisplayId'] = summary['Id'] + ' Desc- ' + summary['Standard Variable Description']
    print(f'summary after displayid change: {summary}')
    summary = summary.sort_values(by='Timestamp')
    print(f'summary after sorting: {summary}')
    summary['Row_Number'] = range(1, len(summary) + 1)

    pivot_df = summary.pivot(index='Timestamp', columns='DisplayId', values='Value').reset_index()
    pivot_df.insert(0, 'Row_Number', range(1, len(pivot_df) + 1))
    print(f'pivot df: {pivot_df}')

    return pivot_df'''

def sitewise_query_execute(plant_name, start_time, end_time, tag_list, table_name, v_interval):
    print(f'start time: {start_time}')
    print(f'end time: {end_time}')
    print('Inside function')
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    sitewise = boto3.client('iotsitewise', region_name='ap-south-1')
    table = dynamodb.Table(table_name)

    result = {}
    metadata_rows = []

    for tag_uid in tag_list:
        if tag_uid is None:
            continue

        response = table.query(
            IndexName='Tag-UID-index',
            KeyConditionExpression=Key('Tag UID').eq(tag_uid),
            FilterExpression=Attr('Plant').eq(plant_name)
        )

        items = response.get('Items', [])
        if not items:
            result[tag_uid] = None
            continue

        mapping = items[0]
        metadata_rows.append(mapping)
        print(f' metadata: {metadata_rows}')
        asset_id = mapping.get('AssetID')
        property_id = mapping.get('PropertyID')
        print(asset_id, property_id)
        if not asset_id or not property_id:
            result[tag_uid] = None
            continue

        try:
            all_datapoints = []
            next_token = None

            while True:
                kwargs = dict(
                    assetId=asset_id,
                    propertyId=property_id,
                    startDate=int(start_time.timestamp()),
                    endDate=int(end_time.timestamp()),
                    timeOrdering='DESCENDING'
                )
                if next_token:
                    kwargs['nextToken'] = next_token

                sitewise_response = sitewise.get_asset_property_value_history(**kwargs)
                datapoints = sitewise_response.get('assetPropertyValueHistory', [])
                all_datapoints.extend(datapoints)

                next_token = sitewise_response.get('nextToken')
                if not next_token:
                    break

            result[tag_uid] = [
                {
                    'timestamp': dp['timestamp']['timeInSeconds'],
                    'value': dp['value'].get('doubleValue') or dp['value'].get('stringValue') or dp['value'].get('integerValue'),
                    'quality': dp['quality']
                }
                for dp in all_datapoints
            ]

        except Exception as e:
            print(f"Error fetching SiteWise data for {tag_uid}: {e}")
            result[tag_uid] = None

    print(result)
    flat_data = []
    for tag, entries in result.items():
        if entries is None:
            continue
        for entry in entries:
            flat_data.append({
                "Id": tag,
                "Timestamp": entry["timestamp"],
                "Value": entry["value"],
                "Quality": entry["quality"]
            })
    print(f'flat data: {flat_data}')
    df = pd.DataFrame(flat_data)
    print(df['Timestamp'].unique())
    print(f'df : {df}')
    df2 = pd.DataFrame(metadata_rows)
    print(f'df2: {df2}')
    if df.empty or df2.empty:
        print("No SiteWise data or metadata found. Returning empty DataFrame.")
        return pd.DataFrame()

    df['Timestamp'] = pd.to_datetime(df['Timestamp'], unit='s', utc=True) + pd.Timedelta(hours=5, minutes=30)
    print(df['Timestamp'].head())
    df['Timestamp'] = df['Timestamp'].dt.floor(v_interval).dt.strftime('%d-%m-%Y %H:%M')
    print(df['Timestamp'].head())
    print(f'rounding off timestamp: {df}')
    print(df['Timestamp'].unique())
    merged_df = pd.merge(df, df2, left_on='Id', right_on='Tag UID')
    print(f'merged df: {merged_df}')
    summary = (
        merged_df.groupby(['Id', 'Timestamp', 'Standard Variable Description'], as_index=False)
        .agg(Value=('Value', 'mean'))
    )
    print(f'summary 1 : {summary}')
    summary['Value'] = summary['Value'].round(3)
    print(f' summary after value change: {summary}')

    summary['DisplayId'] = summary['Id'] + ' Desc- ' + summary['Standard Variable Description']
    print(f'summary after displayid change: {summary}')
    summary = summary.sort_values(by='Timestamp')
    print(f'summary after sorting: {summary}')
    summary['Row_Number'] = range(1, len(summary) + 1)

    pivot_df = summary.pivot(index='Timestamp', columns='DisplayId', values='Value').reset_index()
    pivot_df.insert(0, 'Row_Number', range(1, len(pivot_df) + 1))
    print(f'pivot df: {pivot_df}')

    return pivot_df


'''def fetch_tag_master(tag_uids, plants, table_name):
    """
    Fetch tag metadata from DynamoDB and filter in Python
    """
    table = dynamodb.Table(table_name)
    response = table.scan()
    items = response.get('Items', [])
    df = pd.DataFrame(items)
    
    if df.empty:
        return df

    if tag_uids:
        df = df[df['Tag UID'].isin(tag_uids)]
    if plants:
        df = df[df['Plant'].isin(plants)]

    return df'''


'''def fetch_sitewise_data(tag_ids, start_time, end_time):
    """
    Fetch IoT property values from AWS SiteWise
    """
    all_records = []

    for tag_id in tag_ids:
        response = sitewise.get_asset_property_value_history(
            propertyId=tag_id,
            startDate=start_time,
            endDate=end_time,
            timeOrdering='ASCENDING'
        )

        for point in response.get('assetPropertyValueHistory', []):
            ts = datetime.utcfromtimestamp(point['timestamp']['timeInSeconds'])
            value = point['value'].get('doubleValue', 0.0)
            all_records.append({'Id': tag_id, 'Timestamp': ts, 'Value': value})

    return pd.DataFrame(all_records)'''




def send_mail(receiver_id,subject,content,attachment_bytes):
    url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"
    payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'
    headers = {
    'Content-Type':'application/x-www-form-urlencoded',
    'Cookie':'buid=0.AScCDQSIkWdsW0yxEjajBLZtrXbeMWemFK5Jl7xuumkUOR4zAAA.AQABAAEAAAD--DLA3VO7QrddgJg7Wevrz8pg_EDvs-BxY5g44aXg9jN8peTCIvWxfVm6H_WrA1gCtjomxBmDwr-Y9sbwRXsNsrVEzyv2UTVXPRQvSZGM8hha7QrKxkyiPiodVRSdRwsgAA; fpc=AoltCTxR5_JHpboAlqmSyd22E27uAQAAAIpZbNoOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    }
    response=requests.request("POST",url,headers=headers,data=payload)
    temp = json.loads(response.text)
    access_token = temp['access_token']
    url = "https://graph.microsoft.com/v1.0/me/sendMail"
    l=[] # List of dictionaries of format = { "emailAddress": { "address":0} }
    for i in receiver_id: 
        d = { "emailAddress": { "address":0} }
        d['emailAddress']['address'] = i        
        l.append(d) 
    payload = json.dumps({
    "message": {
        "subject": subject,
        "body": {
            "contentType": "html",
            "content": content
        },
        "toRecipients": l,
        "attachments": [ 
            { "@odata.type": "#microsoft.graph.fileAttachment", 
             "name": "report.csv", 
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
        print(response)
    except Exception as e:
        print(f'Error while sending mail:{e}')


def fetch_yesterday_start_end_dt(current_time, start_time, end_time):
    yesterday_date = (current_time - timedelta(days=1)).date()
    start_dt = datetime.combine(yesterday_date, start_time.time()).replace(tzinfo=timezone.utc)
    end_dt = datetime.combine(yesterday_date, end_time.time()).replace(tzinfo=timezone.utc)
    return start_dt, end_dt

'''def fix_columns(df):
    columns = df.columns
    columns_id = [column.split(' Desc- ')[0] for column in columns ]
    columns_desc = [column.split(' Desc- ')[1] if column!='Timestamp' else 'Standard Variable Description' for column in columns ]
    d = dict(zip(df.columns,columns_id))
    df=df.rename(columns = d)
    desc_d = {column : desc for column,desc in zip(df.columns,columns_desc)}
    modified_df = pd.concat([pd.DataFrame(desc_d, index=[0]), df]).reset_index(drop=True)
    return modified_df'''
def fix_columns(df):
    """
    Converts a wide DataFrame with columns like 'TAG001 Desc- Temp' into a 
    long DataFrame with columns: Timestamp, Tag ID, Description, Value,
    then pivots it back to wide form with a multiheader [Tag ID, Description].
    """
    id_vars = ['Timestamp']
    value_vars = [col for col in df.columns if col not in id_vars]

    # Melt wide to long
    melted = df.melt(id_vars=id_vars, value_vars=value_vars, var_name='Tag_Column', value_name='Value')

    # Extract Tag ID and Description
    melted[['Tag ID', 'Description']] = melted['Tag_Column'].str.extract(r'^(.*?)\s+Desc-\s+(.*)$')

    melted.drop(columns=['Tag_Column'], inplace=True)
    melted = melted[melted['Tag ID'].notna() & (melted['Tag ID'].str.strip() != '')]

    # Pivot long back to wide with MultiIndex columns
    wide = melted.pivot(index='Timestamp', columns=['Tag ID', 'Description'], values='Value')

    # Reset index so Timestamp is a column
    wide.reset_index(inplace=True)

    return wide
'''def fix_columns(df):
    """
    Transforms long-form data with repeating timestamps into wide format
    without collapsing rows, preserving each reading as a distinct row.
    """
    # Create a combined column name like "TAG001 - Temp"
    df['Tag_Col'] = df['Id'] + ' - ' + df['Standard Variable Description']

    # Assign a unique row index to preserve duplicates
    df = df.reset_index(drop=True)
    df['Row_Index'] = df.index

    # Pivot without aggregating repeated timestamps
    wide = df.pivot(index='Row_Index', columns='Tag_Col', values='Value')

    # Add Timestamp back (optional: or bring other columns too)
    wide['Timestamp'] = df['Timestamp']

    # Bring Timestamp to the front
    wide = wide[['Timestamp'] + [col for col in wide.columns if col != 'Timestamp']]

    return wide'''



def time_to_seconds(time_str):
    hours, minutes, seconds = map(int, time_str.split(':'))

    if hours > 0 and minutes == 0 and seconds == 0:
        return f"{hours}H"
    elif minutes > 0 and hours == 0 and seconds == 0:
        return f"{minutes}min"
    elif seconds > 0 and hours == 0 and minutes == 0:
        return f"{seconds}S"
    else:
        # If mixed units, return total seconds
        total_seconds = hours * 3600 + minutes * 60 + seconds
        return f"{total_seconds}S"


def run_yesterday_trigger(args):
    try:
        report_parameters_df,template_name,current_time = args[:]
        print(f'report parameters: {report_parameters_df}')
        print(f'template_name: {template_name}')
        print(f'current_time: {current_time}')
        single_template = report_parameters_df.loc[report_parameters_df['ReportTemplateName']==template_name]
        print(f'single_template: {single_template}')
        tags_string = single_template['Tags'].iloc[0]
        print(f'tags string: {tags_string}')
        new_tags_string=tags_string.replace('@@@',',')
        print(type(new_tags_string))
        print(f'new tags string: {new_tags_string}')
        result_list = new_tags_string.split(',')
        plant_name = single_template['Plant'].iloc[0]
        print(f'plant name: {plant_name}')
        mail_time = single_template['MailTime'].iloc[0]
        print(f'mail time: {mail_time}')
        report_owner = single_template['UserId'].iloc[0]
        print(f'report owner: {report_owner}')
        start_time,end_time = single_template['StartDate'].iloc[0],single_template['EndDate'].iloc[0]
        print(type(start_time))
        print(f'start time, end time: {start_time}{end_time}')
        start_dt,end_dt = fetch_yesterday_start_end_dt(current_time,start_time,end_time) # this is for report
        print(f'start dt: {start_dt}')
        print(f'end dt: {end_dt}')

        start_time, end_time = correct_ist_to_utc(start_dt, end_dt)
        print(f'start_dt: {start_dt}') 
        print(f'end_dt: {end_dt}')
        interval = single_template['Interval'].iloc[0]

        interval_seconds = f"{time_to_seconds(interval)}"
        print(f'interval seconds: {interval_seconds}')
        mail_time_hour_str = datetime.strftime(mail_time,'%H')
        print(f'mail time hour str: {mail_time_hour_str}')
        current_time_hour_str = datetime.strftime(current_time,'%H') # required for condition checking
        print(f'current time hour str: {current_time_hour_str}')
        recipient_string_unformatted = single_template['Recipients'].iloc[0]
        recipient_string = recipient_string_unformatted.replace("@@@",",")
        recipient_list = recipient_string.split(',')
        #recipient_list=['pgupta69@deloitte.com']
        if current_time_hour_str==mail_time_hour_str:
            print('inside if condition')
            report_df=sitewise_query_execute(plant_name,start_time,end_time,result_list,f'{plant_name}_TagMaster',interval_seconds)
            print(f'report df: {report_df}')
            print(f'COLUMNS:')
            print(report_df.columns)
            report_df = report_df.sort_values(by='Timestamp')
            print(report_df['Timestamp'].head())
            print(report_df['Timestamp'].unique())
            print(f'sorted report_df: {report_df}')# In ascending order
            report_df = fix_columns(report_df)
            print(f'report df after fixing columns: :{report_df}')
            content = report_df.to_csv(index=False).encode('utf-8')
            content = base64.b64encode(content)
            send_mail(recipient_list,f'Yesterday Report for {template_name}',f'This is a automated Yesterday Report Scheduled by {report_owner}',content.decode('utf-8'))
            return 1
        else:
            return 0
    except Exception as e:
        logging.info(f'Exception occured while running minutes trigger for template {template_name}:{e}')



