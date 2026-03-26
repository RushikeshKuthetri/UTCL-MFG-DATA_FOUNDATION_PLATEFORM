import pandas as pd
import numpy as np
from datetime import datetime,timedelta, timezone
import tensorflow as tf
from keras.models import Model, Sequential
from keras.layers import Dense, Input
from tensorflow.keras.models import load_model
from keras import regularizers
from sklearn.preprocessing import MinMaxScaler
import json,requests
import os
import logging
import boto3
import pickle
import time
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)

database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")

utcl_fan_efficiency_mailalerts = os.getenv('Utcl_Fan_Efficiency_MailAlerts')
# Suppress pandas warnings
pd.options.mode.chained_assignment = None  # Default is 'warn'
 

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

session = boto3.Session()
sitewise_client = session.client('iotsitewise')
dynamodb = boto3.client('dynamodb')



i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")


def load_model_and_scaler():
    model = load_model('/opt/autoencoder_model.h5')
    with open('/opt/scaler.pkl', 'rb') as f:
        scaler = pickle.load(f)
    return model, scaler

def get_tag_mapping_by_uid(tag_uid, plant):
    table_name = f"{plant}_TagMaster"
    try:
        response = dynamodb.query(
            TableName=table_name,
            IndexName='Tag-UID-index',
            KeyConditionExpression='#uid = :uid',
            ExpressionAttributeNames={'#uid': 'Tag UID'},
            ExpressionAttributeValues={ ':uid': {'S': tag_uid}})
        
        if 'Items' in response and response['Items']:
            item = response['Items'][0]
            print(f"Found item: {item}")
            
            # Initialize variables
            asset_id = None
            property_id = None
            
            # Check for AssetID (note: case might be different)
            if 'AssetID' in item:
                if isinstance(item['AssetID'], dict) and 'S' in item['AssetID']:
                    asset_id = item['AssetID']['S']
                else:
                    asset_id = str(item['AssetID'])
            elif 'AssetId' in item:
                if isinstance(item['AssetId'], dict) and 'S' in item['AssetId']:
                    asset_id = item['AssetId']['S']
                else:
                    asset_id = str(item['AssetId'])
            
            # Check for PropertyID (note: case might be different)
            if 'PropertyID' in item:
                if isinstance(item['PropertyID'], dict) and 'S' in item['PropertyID']:
                    property_id = item['PropertyID']['S']
                else:
                    property_id = str(item['PropertyID'])
            elif 'PropertyId' in item:
                if isinstance(item['PropertyId'], dict) and 'S' in item['PropertyId']:
                    property_id = item['PropertyId']['S']
                else:
                    property_id = str(item['PropertyId'])
            
            if asset_id and property_id:
                return {
                    'AssetId': asset_id,
                    'PropertyId': property_id
                }
            else:
                print(f"Missing AssetId or PropertyId for tag {tag_uid}")
                return None
        else:
            print(f"No metadata found for Tag UID {tag_uid} in {table_name}")
            return None
    except Exception as e:
        print(f"Error querying DynamoDB for {tag_uid}: {e}")
        return None



def query_asset_data(asset_id, property_id, start_time, end_time):
    try:
        print(f"Querying SiteWise for asset_id={asset_id}, property_id={property_id}")
        print(f"Time range: {start_time} to {end_time}")
        
        # Convert datetime objects to timestamps if needed
        if isinstance(start_time, datetime):
            start_time_str = start_time.isoformat()
        else:
            start_time_str = start_time
            
        if isinstance(end_time, datetime):
            end_time_str = end_time.isoformat()
        else:
            end_time_str = end_time
        
        print(f"Formatted time range: {start_time_str} to {end_time_str}")
        
        try:
            response = sitewise_client.get_asset_property_value_history(
                assetId=asset_id,
                propertyId=property_id,
                startDate=start_time_str,
                endDate=end_time_str,
                timeOrdering='ASCENDING',
                maxResults=1000
            )
            
            print(f"SiteWise API response keys: {response.keys()}")
            
            values = response.get('assetPropertyValueHistory', [])  # Changed from propertyValues to assetPropertyValueHistory
            print(f"Initial response contains {len(values)} values")
            
            # Handle pagination with a limit to prevent infinite loops
            next_token = response.get('nextToken')
            page_count = 0
            max_pages = 5  # Limit to 5 pages for testing
            
            while next_token and page_count < max_pages:
                page_count += 1
                print(f"Fetching page {page_count} with token: {next_token[:10]}...")
                
                response = sitewise_client.get_asset_property_value_history(  # Correct method name
                    assetId=asset_id,
                    propertyId=property_id,
                    startDate=start_time_str,
                    endDate=end_time_str,
                    timeOrdering='ASCENDING',
                    nextToken=next_token
                )
                
                new_token = response.get('nextToken')
                if new_token == next_token:
                    print("Same token received, breaking pagination loop")
                    break
                    
                page_values = response.get('assetPropertyValueHistory', [])  # Changed from propertyValues
                print(f"Page contains {len(page_values)} values")
                values.extend(page_values)
                next_token = new_token
            
            print(f"Total values fetched: {len(values)}")
            
            # Check if we have any values
            if not values:
                print("No values returned from SiteWise")
                return []
            
            # Print a sample value to debug structure
            if values:
                print(f"Sample value structure: {values[0]}")
            
            # Extract double values and timestamps - adjust based on actual structure
            data = []
            for v in values:
                # The structure might be different, adjust based on actual response
                try:
                    # Try different possible structures
                    if 'value' in v and 'doubleValue' in v['value']:
                        data.append((v['value']['doubleValue'], v['timestamp']['timeInSeconds']))
                    elif 'value' in v and 'doubleValue' in v['value']:
                        data.append((v['value']['doubleValue'], v['timestamp']))
                    else:
                        print(f"Skipping value with unexpected structure: {v}")
                except Exception as e:
                    print(f"Error processing value: {e}, value: {v}")
            
            print(f"Extracted {len(data)} data points with doubleValue")
            return data
            
        except sitewise_client.exceptions.ResourceNotFoundException:
            print(f"Resource not found: asset_id={asset_id}, property_id={property_id}")
            return []
        except sitewise_client.exceptions.InvalidRequestException as e:
            print(f"Invalid request: {e}")
            return []
        
    except Exception as e:
        logger.error(f"Error fetching SiteWise data: {e}")
        import traceback
        traceback.print_exc()
        return []




def send_mail(receiver_id,subject,content):
    timeout = 60
    max_retries = 3
    retry_delay = 2
    print(f"Sending email to {receiver_id}")

    for attempt in range(max_retries):
        try:
            url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token"    
            payload=f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'   
            headers = {
            'Content-Type':'application/x-www-form-urlencoded',
            'Cookie':'buid=0.AScCDQSIkWdsW0yxEjajBLZtrXbeMWemFK5Jl7xuumkUOR4zAAA.AQABAAEAAAD--DLA3VO7QrddgJg7Wevrz8pg_EDvs-BxY5g44aXg9jN8peTCIvWxfVm6H_WrA1gCtjomxBmDwr-Y9sbwRXsNsrVEzyv2UTVXPRQvSZGM8hha7QrKxkyiPiodVRSdRwsgAA; fpc=AoltCTxR5_JHpboAlqmSyd22E27uAQAAAIpZbNoOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'    }
            
            print("Attempting to get access token...")
            response=requests.request("POST",url,headers=headers,data=payload, timeout=timeout)
            response.raise_for_status()

            temp = json.loads(response.text)
            access_token = temp['access_token']
            print("Successfully obtained access token")
            
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
            
            headers = {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + access_token    }
            print("Attempting to send email...")
            response = requests.request("POST", url, headers=headers, data=payload, timeout=timeout)
            response.raise_for_status()
            print("Email sent successfully")
            return True
        
        except requests.exceptions.Timeout:
            print(f"Request timed out when trying to send email (attempt {attempt+1}/{max_retries})")
            if attempt < max_retries - 1:
                print(f"Retrying in {retry_delay} seconds...")
                time.sleep(retry_delay)
                retry_delay *= 2  # Exponential backoff
            else:
                print("Max retries reached, giving up")
                return False
        except Exception as e:
            print(f'Error while sending mail: {e}')
            return False
        

def extract_template_parameters(template_df):
    try:
        # Get the parameters string and replace HTML-encoded quotes
        params_str = template_df['Parameters'].iloc[0].replace('"', '"')
        
        # Replace @@@ with commas for JSON parsing
        json_string = params_str.replace('@@@', ',')
        
        # Parse the JSON string
        query_dict = json.loads(json_string)
        
        # Create DataFrame from the dictionary
        df = pd.DataFrame({
            'Parameters': list(query_dict.keys()),
            'Id': list(query_dict.values())
        })
        
        # Add Plant information if available
        if 'PlantName' in template_df.columns:
            df['Plant'] = template_df['PlantName'].iloc[0]
            
        print(f"Successfully extracted {len(df)} parameters for {template_df['TemplateName'].iloc[0]}")
        return df, tuple(df['Id'].tolist())
    except Exception as e:
        print(f'Error extracting template params for {template_df["TemplateName"].iloc[0]}: {e}')
        # Print the raw parameters string for debugging
        print(f"Raw parameters: {template_df['Parameters'].iloc[0][:100]}...")
        return None, None

    
        #OLD LOGIC
        #main_dict = {'Parameters':[],'Id':[]}
        #for i,j in query_dict.items():
        #    main_dict['Parameters'].append(i)
        #   main_dict['Id'].append(j)
        #df = pd.DataFrame(main_dict)
        #list_of_ids=df['Id'].to_list()
        #tuple_of_ids = tuple(list_of_ids)
        #return df, tuple_of_ids
    #except Exception as e:
        #print(f'Exception occured while extracting template for False Air for template {template_df["TemplateName"].iloc[0]}:{e}')

def extract_datetimes(current_datetime):
    try:
        # Ensure input datetime is timezone-aware UTC
        if current_datetime.tzinfo is None:
            current_datetime = current_datetime.replace(tzinfo=timezone.utc)

        one_day_ago_start = datetime(
            year=current_datetime.year,
            month=current_datetime.month,
            day=current_datetime.day,
            tzinfo=timezone.utc
        ) - timedelta(days=1)

        current_day_start = one_day_ago_start + timedelta(days=1)
        
        return current_day_start, one_day_ago_start
    except Exception as e:
        print(f'Exception occurred while extracting datetimes for False Air: {e}')
        return None, None
    
def calculate_kiln_false_air(
        #date_filtered_df
        df):
    try:
        #df = date_filtered_df.copy()
        kiln_oxygen_outlet = df.loc[df['Parameters']=='Kiln String Oxygen Outlet','Value'].mean()
        kiln_oxygen_inlet = df.loc[df['Parameters']=='Kiln String Oxygen Inlet','Value'].mean()
        return (kiln_oxygen_outlet-kiln_oxygen_inlet)/(21-kiln_oxygen_outlet)
    except Exception as e:
        print(f'Exception occured while calculating kiln false air for False Air:{e}')

def calculate_calciner_false_air(
        #date_filtered_df
        df):
    try:
        #df = date_filtered_df.copy()
        calciner_oxygen_outlet = df.loc[df['Parameters']=='Calciner String Oxygen Outlet','Value'].mean()
        calciner_oxygen_inlet = df.loc[df['Parameters']=='Calciner String Oxygen Inlet','Value'].mean()
        return (calciner_oxygen_outlet-calciner_oxygen_inlet)/(21-calciner_oxygen_outlet)
    except Exception as e:
        print(f'Exception occured while calculating calciner false air for False Air:{e}')

def calculate_feed_rate(
        #date_filtered_df
        df):
    try:
        #df = date_filtered_df.copy()
        return df.loc[df['Parameters']=='Kiln Feed Rate','Value'].mean(),df.loc[df['Parameters']=='Calciner Feed Rate','Value'].mean()
    except Exception as e:
        print(f'Exception occured while calculating Feed rate for false air:{e}')

def fetch_threshold(data:pd.Series):
    try:
        values=data.values
        scaler = MinMaxScaler()
        values_scaled = scaler.fit_transform(values.reshape(-1, 1))
        input_dim = values_scaled.shape[1]
        encoding_dim = 1  # Compression factor, can be adjusted
    
        input_layer = Input(shape=(input_dim,))
        encoder = Dense(encoding_dim, activation="tanh", activity_regularizer=regularizers.l1(10e-5))(input_layer)
        decoder = Dense(input_dim, activation="linear")(encoder)
        autoencoder = Model(inputs=input_layer, outputs=decoder)
    
        # Compile the model
        autoencoder.compile(optimizer="adam", loss="mean_squared_error")
        autoencoder.fit(values_scaled, values_scaled, epochs=50, batch_size=32, shuffle=True, validation_split=0.1, verbose=0)
        # Calculate reconstruction error
        values_pred_scaled = autoencoder.predict(values_scaled)
        reconstruction_error = np.mean((values_scaled - values_pred_scaled) ** 2, axis=1)
        values_pred = scaler.inverse_transform(values_pred_scaled)
        values_orig = scaler.inverse_transform(values_scaled)
        reconstruction_error = np.mean(np.power(values_orig - values_pred, 2), axis=1)
        # Determine the threshold for anomalies
        threshold = np.percentile(reconstruction_error, 90)
        # Identify anomalies
        anomalies = reconstruction_error > threshold
        return anomalies
    except Exception as e:
        print(f'Exception occured while running fetch_threshold,exception:{e}')


def return_average_oxygen_inlet(
        #date_filtered_df
        df):
    try:
        #df = date_filtered_df.copy()
        kiln_string_oxygen_inlet_df = df.loc[df['Parameters']=='Kiln String Oxygen Inlet']
        calciner_string_oxygen_inlet_df = df.loc[df['Parameters']=='Calciner String Oxygen Inlet']
        kiln_string_oxygen_inlet_df['Anomalies']=fetch_threshold(kiln_string_oxygen_inlet_df['Value'])
        calciner_string_oxygen_inlet_df['Anomalies']=fetch_threshold(calciner_string_oxygen_inlet_df['Value'])
        kiln_string_oxygen_inlet_without_outliers=kiln_string_oxygen_inlet_df[kiln_string_oxygen_inlet_df['Anomalies']==False]['Value'].mean()
        calciner_string_oxygen_inlet_without_outliers=calciner_string_oxygen_inlet_df[calciner_string_oxygen_inlet_df['Anomalies']==False]['Value'].mean()
        # return df.loc[df['Parameters']=='Kiln String Oxygen Inlet','Value'].mean(),df.loc[df['Parameters']=='Calciner String Oxygen Inlet','Value'].mean()
        return kiln_string_oxygen_inlet_without_outliers,calciner_string_oxygen_inlet_without_outliers
    except Exception as e:
        print(f'Exception occured while calculating oxygen inlet for False Air:{e}')

def return_average_oxygen_outlet(
        #date_filtered_df
        df):
    try:
        #df = date_filtered_df.copy()
        kiln_string_oxygen_outlet_df = df.loc[df['Parameters']=='Kiln String Oxygen Outlet']
        calciner_string_oxygen_outlet_df = df.loc[df['Parameters']=='Calciner String Oxygen Outlet']
        kiln_string_oxygen_outlet_df['Anomalies']=fetch_threshold(kiln_string_oxygen_outlet_df['Value'])
        calciner_string_oxygen_outlet_df['Anomalies']=fetch_threshold(calciner_string_oxygen_outlet_df['Value'])
        kiln_string_oxygen_outlet_without_outliers=kiln_string_oxygen_outlet_df[kiln_string_oxygen_outlet_df['Anomalies']==False]['Value'].mean()
        calciner_string_oxygen_outlet_without_outliers=calciner_string_oxygen_outlet_df[calciner_string_oxygen_outlet_df['Anomalies']==False]['Value'].mean()
        # return df.loc[df['Parameters']=='Kiln String Oxygen Outlet','Value'].mean(),df.loc[df['Parameters']=='Calciner String Oxygen Outlet','Value'].mean()
        return kiln_string_oxygen_outlet_without_outliers,calciner_string_oxygen_outlet_without_outliers
    except Exception as e:
        print(f'Exception occured while calculating oxygen outlet for False Air:{e}')

def return_fan_load(date_filtered_df):
    try:
        df = date_filtered_df.copy()
        return df.loc[df['Parameters']=='Kiln String Fan KW','Value'].mean(),df.loc[df['Parameters']=='Calciner String Fan KW','Value'].mean()
    except Exception as e:
        print(f'Exception occured while calculating fan load for false air:{e}')

def return_fan_rotation(date_filtered_df):
    try:
        df = date_filtered_df.copy()
        return df.loc[df['Parameters']=='Kiln String Fan RPM','Value'].mean(),df.loc[df['Parameters']=='Calciner String Fan RPM','Value'].mean()
    except Exception as e:
        print(f'Exception occured while calculating while calculating fan rotation:{e}')

def calculate_tpd(date_filtered_df):
    try:
        df = date_filtered_df.copy()
        kiln_tph = df.loc[df['Parameters']=='Kiln TPH','Value'].mean() 
        kiln_df=df.loc[df['Parameters']=='Kiln Running Status']
        kiln_minutes_count=np.where(kiln_df['Value']==5,1,0)
        kiln_running_hours = kiln_minutes_count.sum()/60
        return kiln_tph*kiln_running_hours
    except Exception as e:
        print(e)


def get_mail_alert_info(template_name):
    try:
        print(f"Fetching email configuration for template: {template_name}")
        
        # Use boto3 resource for a higher-level interface
        dynamodb_resource = boto3.resource('dynamodb')
        table = dynamodb_resource.Table(utcl_fan_efficiency_mailalerts)
        
        # Query the DynamoDB table
        response = table.get_item(Key={'UseCaseTemplate': template_name})
        item = response.get('Item')
        
        if not item:
            print(f"No mail configuration found for template: {template_name}")
            return None
        
        # Get the subject and recipients from DynamoDB
        subject = "AWS" + item.get('Subject', f"False Air Report for {template_name}")
        recipients = item.get('Recipients', '')
        
        print(f"Found email configuration for {template_name}")
        
        return {
            'Subject': subject,
            'Recipients': recipients
        }
    except Exception as e:
        print(f"Error fetching mail alert info from DynamoDB for {template_name}: {e}")
        import traceback
        traceback.print_exc()
        return None

def template_execution(args):
    try:
        single_template,current_datetime = args[:]
        user_id = single_template['UserId'].iloc[0]
        template_name = single_template['TemplateName'].iloc[0]

        print(f"\n--- Processing template: {template_name} ---")
        print(f"User ID: {user_id}")
        print("Extracting template parameters...")
        
        result = extract_template_parameters(single_template)
        if result is None or result[0] is None:
            print("Failed to extract template parameters")
            return f"Failed to process template {template_name}", ""
            
        df, tuple_of_ids = result

        current_day_start_time,one_day_ago_start_time=extract_datetimes(current_datetime)
        if current_day_start_time is None or one_day_ago_start_time is None:
            print("Failed to extract date ranges")
            return f"Failed to process template {template_name} - date range error", ""

        #OLD AZURE QUERY
        #query = f'IotLiveData| where Timestamp > ago(2d)+330m and Id in {tuple_of_ids}|order by Timestamp desc'
        #iot_data=connect_ADX_with_AAD_application_key_auth(query)
        #merge_df = df.merge(iot_data[['Id','Value','Timestamp']],on='Id',how='inner')
        #date_filtered_df = merge_df.loc[(merge_df['Timestamp']>one_day_ago_start_time) & (merge_df['Timestamp']<current_day_start_time)]
        # table for each template


        all_sitewise_data = []
        print("Collecting data for parameters...")
        for _, row in df.iterrows():
            param_name = row['Parameters']
            uid = row['Id']

            tag_metadata = get_tag_mapping_by_uid(uid, row['Plant'])

            if not tag_metadata:
                print(f"Skipping tag {uid} - no metadata found")
                continue

            asset_id = tag_metadata['AssetId']
            property_id = tag_metadata['PropertyId']

            # Query data for this tag
            tag_data = query_asset_data(asset_id, property_id, one_day_ago_start_time, current_day_start_time)
            if not tag_data:
                print(f"No data found for {param_name}")
                continue
                
            print(f"Found {len(tag_data)} data points for {param_name}")
            #all_sitewise_data.append(tag_data)

            # Process the data - tag_data is a list of tuples (value, timestamp)
            for value, timestamp in tag_data:
                all_sitewise_data.append({
                    'Parameters': param_name,
                    'Id': uid,
                    'Value': value,
                    'Timestamp': datetime.fromtimestamp(timestamp, tz=timezone.utc)
                })

        if not all_sitewise_data:
            print(f"No SiteWise data fetched for template {template_name}")
            return f"No data available for template {template_name}"
        
        date_filtered_df = pd.DataFrame(all_sitewise_data)
        print(f"Collected {len(date_filtered_df)} data points")
        # # Combine SiteWise data into one DataFrame
        # iot_data = pd.concat(all_sitewise_data, ignore_index=True)

        # # Merge and filter based on time
        # merge_df = df.merge(iot_data[['Id', 'Value', 'Timestamp']], on='Id', how='inner')
        # date_filtered_df = merge_df[
        #     (merge_df['Timestamp'] > one_day_ago_start_time) &
        #     (merge_df['Timestamp'] < current_day_start_time)
        # ]
        table_dict = {
            'Asset':['Killn','PC'],
            'TPD':[],
            'Feed Rate':[],
            'Inlet O2%':[],
            'Outlet O2%':[],
            'False Air%':[],
            'Fan RPM':[],
            'Fan KW':[]
        }
        for j in table_dict.keys():
            if j == 'Asset':
                pass
            elif j == 'TPD':
                kiln_tpd=calculate_tpd(date_filtered_df)
                table_dict[j].append(kiln_tpd)
                table_dict[j].append(kiln_tpd)
            elif j == 'Feed Rate':
                kiln_feed_rate,calciner_feed_rate=calculate_feed_rate(date_filtered_df)
                table_dict[j].append(kiln_feed_rate)
                table_dict[j].append(calciner_feed_rate)
            elif j == 'Inlet O2%':
                kiln_inlet,calciner_inlet = return_average_oxygen_inlet(date_filtered_df)
                table_dict[j].append(kiln_inlet)
                table_dict[j].append(calciner_inlet)
            elif j == 'Outlet O2%':
                kiln_outlet,calciner_outlet = return_average_oxygen_outlet(date_filtered_df)
                table_dict[j].append(kiln_outlet)
                table_dict[j].append(calciner_outlet)
            elif j == 'False Air%':
                table_dict[j].append(calculate_kiln_false_air(date_filtered_df)*100)
                table_dict[j].append(calculate_calciner_false_air(date_filtered_df)*100)
            elif j == 'Fan RPM':
                kiln_rotation,calciner_rotation = return_fan_rotation(date_filtered_df)
                table_dict[j].append(kiln_rotation)
                table_dict[j].append(calciner_rotation)
            elif j == 'Fan KW':
                kiln_load,calciner_load = return_fan_load(date_filtered_df)
                table_dict[j].append(kiln_load)
                table_dict[j].append(calciner_load)
            else:
                print(f'Why do u have unnecessary key {j} in the dict?')
        table=pd.DataFrame(table_dict)
        html_table = table.to_html()
        html_table += f'<br> This is a system generated notfication for false air report generated by {user_id}'

        print("Report generated successfully")
        print(html_table[:200] + "...")

        mail_info = get_mail_alert_info(template_name)  # Helper that reads from DynamoDB
        if mail_info:
            subject = mail_info['Subject']
            recipients_str = mail_info['Recipients']
            
            # Handle both single recipients and multiple recipients separated by @@@
            if '@@@' in recipients_str:
                recipient_list = recipients_str.split('@@@')
            else:
                recipient_list = [recipients_str]  # Single recipient as a list
            
            # Filter out any empty strings
            recipient_list = [r.strip() for r in recipient_list if r.strip()]
            
            if recipient_list:
                print(f"Sending email to {len(recipient_list)} recipients for template {template_name}")
                send_mail(recipient_list, subject, html_table)
            else:
                print(f"No valid recipients found for template {template_name}")
        else:
            print(f"No email configuration found for template {template_name}, skipping email")
            
        return f'Execution for False Air template {template_name} completed', html_table
    except Exception as e:
        print(f'Exception occured while executing template {template_name} for False Air:{e}')
        import traceback
        traceback.print_exc()  # Print the full traceback for debugging
        return f'Error: {str(e)}', ""
