import pandas as pd
import datetime as dt
import logging
import pyodbc,requests,json
import pandas as pd
import boto3
import os
from boto3.dynamodb.conditions import Key, Attr
import re
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

tag_table = os.getenv("tag_table")

def basic_scan(table_name,index_name,mill_filter,plant_code):
    print("entering basic scan")
    dynamodb = boto3.resource('dynamodb',region_name='ap-south-1')
    table = dynamodb.Table(table_name)
    filtered_tags=[]
    if mill_filter is None:
        response=table.scan(
            FilterExpression=Attr('Plant_Code').eq(plant_code)
        )
        filtered_tags.extend(response['Items'])
        while 'LastEvaluatedKey' in response:
            response=table.scan(
                FilterExpression=Attr('Plant_Code').eq(plant_code),
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            filtered_tags.extend(response['Items'])
    else:
        for mill in mill_filter:
            response=table.scan(
                FilterExpression=Attr('Plant_Code').eq(plant_code) & Attr('Mill_No').eq(mill)
            )
            filtered_tags.extend(response['Items'])
    print(f"filtered_tags in basic scan: {filtered_tags}")
    return filtered_tags


def filtered_scan(table_name, filter_expression):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    try:
        response = table.scan(
            FilterExpression=filter_expression
        )
        items = response['Items']
        
        while 'LastEvaluatedKey' in response:
            response = table.scan(
                FilterExpression=filter_expression,
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            items.extend(response['Items'])
            
        return items
    except Exception as e:
        print(f"Error scanning table: {str(e)}")
        raise

def send_mail(receiver_id:list, subject:str, content:str):

    url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"    
    payload = f"client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}"
    headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-OwAuFMGEdo_0W9HMj9twz4sMQXiF5hUKLgtJmmoBlu7xbcr_mEMWYUvBtdGg4uob8s0vaKLmWVQhUNqLuWQOxurC-f5V2C93LZoHaSiRn5qEBQN6xz2mGpIe2IONnSGXRXjyNw_oX-aGz57Ie1xI3E5EW0Rgp-0eH3XycD4crWggAA; fpc=AoltCTxR5_JHpboAlqmSyd3rsbxaAgAAAKLVUt0OAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    }
    response=requests.request("POST",url,headers=headers,data=payload)
    temp = json.loads(response.text)
    access_token = temp['access_token']
    url = "https://graph.microsoft.com/v1.0/me/sendMail"    
    
    l=[]
    for i in receiver_id: 
        d = { "emailAddress": { "address":0} }
        d['emailAddress']['address'] = i        
        l.append(d)    
    
    payload = json.dumps({
    "message": {
        "subject": subject,
        "body": {
        "contentType": "html",
        "content": content        },
        "toRecipients": l    },
    "saveToSentItems": "false"    })
    
    headers = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + access_token    }
    try :
        response = requests.request("POST", url, headers=headers, data=payload)
    except Exception as e:
        print('Error while sending mail:',e)

def extract_text_between_hyphen_and_number(tag: str) -> str:
    # Match text between the first hyphen and the first digit
    match = re.search(r'-(\D+?)\d', tag)
    if match:
        return match.group(1)
    return ''

def fetch_feed_data_from_dynamo(start_time_str, end_time_str, PlantCode, feed_tag):
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    sitewise_client = boto3.client('iotsitewise', region_name='ap-south-1')
    
    start_time = start_time_str.replace(tzinfo=dt.timezone.utc)
    end_time = end_time_str.replace(tzinfo=dt.timezone.utc)
    plantName=extract_text_between_hyphen_and_number(feed_tag)
    tag_master_table =f"{plantName}_TagMaster"
    metadata = []

    for tag_uid in feed_tag.split(','):
        try:
            response = filtered_scan(
                tag_master_table,
                filter_expression=Attr("Tag UID").eq(tag_uid)
            )
            if response:
                metadata.extend(response)
        except Exception as e:
            logging.error(f"Error querying tag {tag_uid}: {e}")
    print(f"metadata: {metadata}")

    results = []
    for tag in metadata:
        try:
            asset_id = tag['AssetID']
            property_id = tag['PropertyID']
            
            response = sitewise_client.get_asset_property_value_history(
                assetId=asset_id,
                propertyId=property_id,
                startDate=int(start_time.timestamp()),
                endDate=int(end_time.timestamp()),
                timeOrdering='DESCENDING'
            )

            for entry in response.get('assetPropertyValueHistory', []):
                timestamp = entry['timestamp']['timeInSeconds']
                value = entry['value']['doubleValue']  # adjust based on type (doubleValue, stringValue, etc.)

                results.append({
                    'Tag UID': tag['Tag UID'],
                    'Tag Name': tag.get('Tag Name'),
                    'Plant': tag.get('Plant'),
                    'Value': value,
                    'Timestamp': dt.datetime.fromtimestamp(timestamp).isoformat()
                })
        except Exception as e:
            logging.error(f"SiteWise query error for tag {tag['Tag UID']}: {e}")

    last_10_results = results[-10:]

    return results, last_10_results  

def get_feed_tag(PlantCode: str, MillNo: str) ->str:
    try:
  
        driver= '{ODBC Driver 17 for SQL Server}'
        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password

        if MillNo=='All':
            query=f'select distinct(Mill_No) from [dbo].[dim_plant_modelmaster] where Plant_Code={PlantCode}'

            with pyodbc.connect(dbconnection) as conn:
                with conn.cursor() as cursor:
                    cursor.execute(query)
                    mills=cursor.fetchall()
                    mill = [row[0] for row in mills]
                    print(mill)
                conn.commit()
            l = []
            for i in mill:
                sp = 'EXEC [dbo].BA_GetFeedTag @PlantCode=?, @MillNo=?'
                values = [PlantCode, i]
                with pyodbc.connect(dbconnection) as conn:
                    with conn.cursor() as cursor:
                        cursor.execute(sp, values)
                        data = cursor.fetchall()
                        print(data)
                        l.extend(data)  # flat list
                    conn.commit()

            if l:
                return l[0][0]  # all feed tags from all mills
            else:
                print('No feed tags found for any mill.')
                return None

        else:
            
            sp = 'EXEC [dbo].BA_GetFeedTag @PlantCode=?, @MillNo=?'
            values = [PlantCode, MillNo]
    
            with pyodbc.connect(dbconnection) as conn:
                with conn.cursor() as cursor:
                    cursor.execute(sp, values)
                    data=cursor.fetchall()
                    print(data)
                conn.commit()
        
            if data:
                return data[0][0]
            else:
                print(f'Feed tag is not available.')
                return None

            
        
    except Exception as e:
        print(f'Exception occured while fetching the feed values: {e}')
'''def get_feed_tag(PlantCode: str, MillNo: str):
    try:
  
        driver= '{ODBC Driver 17 for SQL Server}'
        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
        
        sp = 'EXEC [dbo].BA_GetFeedTag @PlantCode=?, @MillNo=?'
        values = [PlantCode, MillNo]

        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(sp, values)
                data=cursor.fetchall()
                print(data)
            conn.commit()
        
            if data:
                return data[0][0]
            else:
                print(f'Feed tag is not available.')
                return None
        
    except Exception as e:
        print(f'Exception occured while fetching the feed values: {e}')'''


def check_feed_status(PlantCode: str, MillNo: str) -> list:

    try:
        end_time = dt.datetime.now()
        start_time = end_time - dt.timedelta(minutes=30)

        feed_tag = get_feed_tag(PlantCode, MillNo)

        result,last_10_records=fetch_feed_data_from_dynamo(start_time,end_time,PlantCode,feed_tag)
        print(f"result, last 10 records: {result} {last_10_records}")
        return result,last_10_records

    except Exception as e:
        print(f'Exception occurred while executing the get_latest_feed_values: {e}')

def check_iotlive_data(plant_code: str, interval_minutes: int, mill_no: str = ''):
    interval_minutes=int(interval_minutes)
    sitewise_client = boto3.client('iotsitewise', region_name='ap-south-1')
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    index_name='Plant_Code-index'
    end_time = dt.datetime.now(dt.timezone.utc)
    start_time = end_time - dt.timedelta(minutes=interval_minutes)

    plant_filter = plant_code.split(',') if plant_code else [None]
    mill_filter = None if mill_no.lower()=="all" else mill_no.split(',')
    print("entering basic scan function")
    all_tags = basic_scan(tag_table,index_name,mill_filter,plant_code)
    print(f"all tags: {all_tags}")
    tag=all_tags[0]['IoT_Tag_Id']
    plantName=extract_text_between_hyphen_and_number(tag)
    table_name=f"{plantName}_TagMaster"
    table=dynamodb.Table(table_name)
    index_name="Tag-UID-index"
    all_results=[]
    missing_tags = []
    for tag in all_tags:
        tag_uid=tag['IoT_Tag_Id']
        response=table.query(
            IndexName=index_name,
            KeyConditionExpression=Key('Tag UID').eq(tag_uid),
            ProjectionExpression='AssetID, PropertyID'
        )
        items=response.get('Items',[])
        print(items)
        if not items:
            missing_tags.append(tag_uid)
            continue
        mapping=items[0]
        asset_id=mapping.get('AssetID')
        property_id=mapping.get('PropertyID')
        try:
            sitewise_response=sitewise_client.get_asset_property_value_history(
                assetId=asset_id,
                propertyId=property_id,
                startDate=int(start_time.timestamp()),
                endDate=int(end_time.timestamp()),
                timeOrdering='DESCENDING'
            )
            datapoints=sitewise_response.get('assetPropertyValueHistory', [])
            if not datapoints:
                missing_tags.append(tag['IoT_Tag_Id'])
        except Exception as e:
            missing_tags.append(tag['IoT_Tag_Id'])

    print(f"missing tags: {missing_tags}")
    return pd.DataFrame(missing_tags, columns=['Missing_Tag'])

def check_blaine_status(plantName: str, mill: str, interval: int) -> str:
    try:
        
        driver= '{ODBC Driver 17 for SQL Server}'

        sp = "EXEC sp_blaine_data_status_for_alert ?,?,?"
        values = [plantName,mill,interval]

        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(sp, values)
                data=cursor.fetchall()
            conn.commit()
            result = data[0][0]
            if result == 1:
                status = 'Available'
            else:
                status = 'Not available'
            print(f"Status: {status}")
            return status
        
    except Exception as e:
        print(f'Exception occured while checking the blaine avail status')


def fetch_plants_to_check() -> pd.DataFrame:
    try:
        query = "select * from [dbo].[blaine_datanotcoming_alert] where isalert='1' or isalert=1"

   
        driver= '{ODBC Driver 17 for SQL Server}'

        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:

                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)
        print(df.head())
        return df
        
    except Exception as e:
        raise Exception(f'Error occured while fetching the plants which needs to check for blaine alerts: {e}')
    
