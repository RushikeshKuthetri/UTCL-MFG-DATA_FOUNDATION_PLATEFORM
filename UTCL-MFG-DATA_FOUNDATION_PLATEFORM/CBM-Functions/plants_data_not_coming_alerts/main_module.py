from datetime import timedelta, datetime, timezone
import boto3
from boto3.dynamodb.conditions import Key, Attr
import pandas as pd
import requests,json,pyodbc
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


def exec_sp_with_pd(query,values=None):
    try:   
        driver= '{ODBC Driver 17 for SQL Server}'
        # store procedure to fetch table from db
        query=query
        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
        with pyodbc.connect(dbconnection) as conn:
            df=pd.read_sql(query,conn,params=values)
            conn.commit()
            return df
    except Exception as e:
        raise Exception(f'Error occured while running sql query={query},exception:{e}')


def datetime_manupilator(curr_time):
    try:
        start_str = datetime.strftime(curr_time,'%y-%m-%d')
        start_str_time = pd.Timestamp(datetime.strptime(start_str,'%y-%m-%d'),tz='UTC')
        interval = curr_time-start_str_time
        total_minute = interval.total_seconds()//60
        return total_minute
    except Exception as e:
        print(f'Exception occured while returning datetime in plant alerts:{e}')

def send_mail(receiver_id,subject,content):
    print('inside send mail')
    url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"    
    payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'   
    headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-OwAuFMGEdo_0W9HMj9twz4sMQXiF5hUKLgtJmmoBlu7xbcr_mEMWYUvBtdGg4uob8s0vaKLmWVQhUNqLuWQOxurC-f5V2C93LZoHaSiRn5qEBQN6xz2mGpIe2IONnSGXRXjyNw_oX-aGz57Ie1xI3E5EW0Rgp-0eH3XycD4crWggAA; fpc=AoltCTxR5_JHpboAlqmSyd3rsbxaAgAAAKLVUt0OAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    }
    print(receiver_id)
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
        "content": content        },
        "toRecipients": l    },
    "saveToSentItems": "false"    })
    print(payload) 
    headers = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + access_token    }
    try :
        response = requests.request("POST", url, headers=headers, data=payload)
        print(response)
    except Exception as e:
        print('Error while sending mail:',e)

def get_iot_data(plant_name, start_time, end_time, line='All'):
    print(f"\n--- Starting check for plant: {plant_name}, line: {line} ---")
    print(f"Start Time: {start_time}, End Time: {end_time}")

    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    sitewise = boto3.client('iotsitewise', region_name='ap-south-1')
    table = dynamodb.Table(f"{plant_name}_TagMaster")

    scan_kwargs = {'Limit': 5000}
    if line != 'All':
        scan_kwargs['FilterExpression'] = Attr('Line').eq(line)
        print(f"Applying line filter: {line}")
    else:
        print("Scanning all lines")

    response = table.scan(**scan_kwargs)
    items = response.get('Items', [])
    print(f"Total tags fetched from TagMaster: {len(items)}")

    if not items:
        print("No items found in TagMaster.")
        return pd.DataFrame([{
            "plant": plant_name,
            "line": line,
            "status": "TagMaster empty"
        }])

    for idx, mapping in enumerate(items, 1):
        asset_id = mapping.get('AssetID')
        property_id = mapping.get('PropertyID')
        tag_uid = mapping.get('Tag UID')

        print(f"[{idx}/{len(items)}] Checking tag: {tag_uid} (Asset: {asset_id}, Property: {property_id})")

        try:
            next_token = None
            while True:
                kwargs = {
                    'assetId': asset_id,
                    'propertyId': property_id,
                    'startDate': int(start_time.timestamp()),
                    'endDate': int(end_time.timestamp()),
                    'timeOrdering': 'DESCENDING'
                }
                if next_token:
                    kwargs['nextToken'] = next_token

                sitewise_response = sitewise.get_asset_property_value_history(**kwargs)
                datapoints = sitewise_response.get('assetPropertyValueHistory', [])

                print(f"Data points fetched: {len(datapoints)}")

                if datapoints:
                    print(f"Data found for tag: {tag_uid}")
                    return pd.DataFrame()  # Exit early

                next_token = sitewise_response.get('nextToken')
                if not next_token:
                    break

        except Exception as e:
            print(f"Error for tag {tag_uid}: {e}")
            continue

    print("No data found for any tag in this plant/line.")
    return pd.DataFrame([{
        "plant": plant_name,
        "line": line,
        "status": "No data found"
    }])
'''def get_iot_data(plant_name, start_time, end_time, line='All'):
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    sitewise = boto3.client('iotsitewise', region_name='ap-south-1')
    table = dynamodb.Table(f"{plant_name}_TagMaster")

    last_evaluated_key = None

    while True:
        scan_kwargs = {'Limit': 10000}
        if line != 'All':
            scan_kwargs['FilterExpression'] = Attr('Line').eq(int(line))
        if last_evaluated_key:
            scan_kwargs['ExclusiveStartKey'] = last_evaluated_key

        response = table.scan(**scan_kwargs)
        items = response.get('Items', [])

        for mapping in items:
            asset_id = mapping.get('AssetID')
            property_id = mapping.get('PropertyID')
            tag_uid = mapping.get('Tag UID')

            try:
                sitewise_response = sitewise.get_asset_property_value_history(
                    assetId=asset_id,
                    propertyId=property_id,
                    startDate=int(start_time.timestamp()),
                    endDate=int(end_time.timestamp()),
                    timeOrdering='DESCENDING',
                    maxResults=1
                )
                if sitewise_response.get('assetPropertyValueHistory'):
                    print(f"Data found for tag: {tag_uid}")
                    return pd.DataFrame()  # Exit early

            except Exception as e:
                print(f"Error for {tag_uid}: {e}")
                continue

        last_evaluated_key = response.get('LastEvaluatedKey')
        if not last_evaluated_key:
            break

    print("No data found for any tag")
    return pd.DataFrame([{
        "plant": plant_name,
        "line": line,
        "status": "No data found"
    }])'''

def plants_data_not_coming_alerts_prod_main(event,context) -> None:
    data_query="select * from Alerts_For_Data_Not_Coming_unique"
    df = exec_sp_with_pd(data_query)   
    print(f"df: {df}")  
    df_active = df.loc[df['IsActive']==True]
    print(f"df_active: {df_active}")
    curr_time = pd.Timestamp(datetime.now(),tz='UTC')
    print(f"curr_time: {curr_time}")
    total_minutes = datetime_manupilator(curr_time)   
    print(f"total_minutes: {total_minutes}") 
    for i in range(len(df_active)):
        row = df_active.iloc[i]
        print(f"row: {row}")
        plant = row['Plant_Name']
        print(f"plant: {plant}")
        trigger = row['Interval']
        print(f"trigger: {trigger}")
        line = row['Line']
        print(f"line: {line}")
        # line = 1
        recipients = row['Recipient']
        recipients_lst = recipients.split(';')
        print(recipients_lst)

        # total_minutes = 780.0
        t = int(trigger.rstrip('m'))
        start_time = curr_time - timedelta(minutes=t)
        
        print(f"t: {t}")
        print(f"total_minutes%t ==> {total_minutes%t}")
        if total_minutes%t==0:
            if line=='All' or line==None:
                print(f"inside if, plant: {plant} and trigger: {trigger}")
                # q1 = f"fn_Plants_data_not_coming_withLine('{plant}','','{trigger}')"
                conn_df = get_iot_data(plant, start_time, curr_time)
            else:
                print(f"inside else, plant: {plant} and trigger: {trigger} and line: {line}")
                # q1 =  f"fn_Plants_data_not_coming_withLine('{plant}','{line}','{trigger}')"
                conn_df = get_iot_data(plant, start_time, curr_time, line)
            if len(conn_df)>=1:      
                print("sending mail")
                send_mail(recipients_lst,'Plant Data Not Coming',f'No data coming for {plant} since last {t} minutes for line {line}.')
            else:
                print('Data is coming. No need to send an alert.')



