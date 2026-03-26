import pandas as pd
import numpy as np
import json, requests
import logging
from datetime import timedelta
import boto3
from boto3.dynamodb.conditions import Key, Attr
import os
import datetime


# Configure logging
logging.basicConfig(level=logging.INFO, 
                   format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Suppress boto3/botocore logging
logging.getLogger('botocore').setLevel(logging.ERROR)
logging.getLogger('boto3').setLevel(logging.ERROR)
logging.getLogger('urllib3').setLevel(logging.ERROR)
# Initialize AWS clients
session = boto3.session.Session(region_name='ap-south-1')
dynamodb = session.resource('dynamodb')
mail_log_table = dynamodb.Table('CBM_Mail_Logs')

# Environment variables
i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")


def send_mail(receiver_id, subject, content):
    """
    Mock email sending function for testing.
    Just logs the email details instead of actually sending.
    """
    timeout = 30
    
    url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"
    payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'buid=0.AScCDQSIkWdsW0yxEjajBLZtrXbeMWemFK5Jl7xuumkUOR4zAAA.AQABAAEAAAD--DLA3VO7QrddgJg7Wevrz8pg_EDvs-BxY5g44aXg9jN8peTCIvWxfVm6H_WrA1gCtjomxBmDwr-Y9sbwRXsNsrVEzyv2UTVXPRQvSZGM8hha7QrKxkyiPiodVRSdRwsgAA; fpc=AoltCTxR5_JHpboAlqmSyd22E27uAQAAAIpZbNoOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    }
    response = requests.request("POST", url, headers=headers, data=payload, timeout=timeout)
    temp = json.loads(response.text)
    access_token = temp['access_token']
    url = "https://graph.microsoft.com/v1.0/me/sendMail"
    payload = json.dumps({
        "message": {
            "subject": subject,
            "body": {
                "contentType": "html",
                "content": content
            },
            "toRecipients": [
                {
                    "emailAddress": {
                        "address": receiver_id
                        #receiver_id
                    }
                }
            ]
        },
        "saveToSentItems": "false"
    })
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    }
    try:
        logger.info(f"Attempting to send email to {receiver_id}...")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.status_code >= 200 and response.status_code < 300:
            logger.info(f"Email sent successfully to {receiver_id}")
        else:
            logger.error(f"Failed to send email to {receiver_id}: {response.status_code} {response.text}")
    except Exception as e:
        logging.error(f'Error while sending mail to {receiver_id}: {e}')
    
    return "Email sent successfully"
def fetch_conditions(args):
    series, template_name, avg_efficiency_df = args[:]
    logger.info(f"Fetching conditions for template: {template_name}")
    try:
        unformatted_json_string = series['Conditions']
        formatted_json_string = unformatted_json_string.replace("@@@", ",")
        json_obj = json.loads(formatted_json_string)
        conditions = pd.json_normalize(json_obj)

        # Extract condition values
        min_val = float(conditions['Min'].iloc[0])
        max_val = float(conditions['Max'].iloc[0])
        duration = int(conditions['Duration'].iloc[0])

        logger.info(f"Conditions for {template_name}: min={min_val}%, max={max_val}%, duration={duration} minutes")

        # Check if avg_efficiency_df is empty or doesn't have the required columns
        if avg_efficiency_df.empty or 'TemplateName' not in avg_efficiency_df.columns:
            logger.warning(f"No efficiency data available for template {template_name}")
            raise Exception(f'No efficiency data available for template {template_name}')

        # Filter data for this template
        temp = avg_efficiency_df.loc[avg_efficiency_df['TemplateName'] == template_name]
        
        if len(temp) == 0:  
            logger.warning(f"No average efficiency data found for template {template_name}")
            return None, duration, 0, datetime.now()
        
        # Filter by time range
        temp_start_time = pd.to_datetime(temp['Timestamp'].iloc[0])
        temp_end_time = temp_start_time - timedelta(minutes=duration)

        # Convert all timestamps to datetime for comparison
        temp['Timestamp'] = pd.to_datetime(temp['Timestamp'])
        temp = temp.loc[temp['Timestamp'] > temp_end_time]
        
        if len(temp) == 0:
            raise Exception(f'No average efficiency data found for {template_name} within the last {duration} minutes')
        
        # Convert EfficiencyDrop to float if it's a string
        if 'EfficiencyDrop' in temp.columns:
            temp['EfficiencyDrop'] = temp['EfficiencyDrop'].astype(float)

        # Mark records where efficiency drop is within thresholds
        temp['DropTrue'] = np.where(
            (temp['EfficiencyDrop'] > min_val/100) & 
            (temp['EfficiencyDrop'] < max_val/100),
              1, 0)
        
        current_time = temp['Timestamp'].iloc[0]
        efficiency_drop = float(temp['EfficiencyDrop'].iloc[0])
        logger.info(f"Found {len(temp)} records for {template_name}, current efficiency drop: {efficiency_drop:.2%}")
        return temp, duration, efficiency_drop, current_time
    except KeyError as e:
        raise Exception(f'Missing key in template data for {template_name}: {e}')
    except ValueError as e:
        raise Exception(f'Invalid value in conditions for {template_name}: {e}')
    except json.JSONDecodeError as e:
        raise Exception(f'Invalid JSON in conditions for {template_name}: {e}')
    except Exception as e:
        raise Exception(f'Error while fetching conditions from ui for template {template_name}: {e}')

def fetch_fan_data(args):
    template_name, fan_table = args[:]
    logger.info(f"Fetching fan data for template: {template_name}")
    try:
        # Check if fan_table is empty
        if fan_table.empty:
            raise Exception(f'No fan data available for template {template_name}')
            
        # Check if TemplateName column exists
        if 'TemplateName' not in fan_table.columns:
            raise Exception(f'TemplateName column missing in fan data')
            
        fan_table_df = fan_table.loc[fan_table['TemplateName'] == template_name]

        if len(fan_table_df) == 0:
            raise Exception(f'No fan data found for template {template_name}')

        # Clean and convert values to float
        def clean_and_convert(value):
            if isinstance(value, str):
                # Remove commas and other non-numeric characters
                value = value.replace(',', '')
            return float(value)

        current_speed = clean_and_convert(fan_table_df['Speed'].iloc[0])
        current_load = clean_and_convert(fan_table_df['Load'].iloc[0])
        inlet_draft = clean_and_convert(fan_table_df['Inlet Draft'].iloc[0])
        outlet_draft = clean_and_convert(fan_table_df['Outlet Draft'].iloc[0])
        current_temperature = clean_and_convert(fan_table_df['Temperature'].iloc[0])
        ef = clean_and_convert(fan_table_df['Efficiency'].iloc[0])

        logger.info(f"Fan data for {template_name}: speed={current_speed}, load={current_load}, efficiency={ef:.2%}")
        return current_speed, current_load, inlet_draft, outlet_draft, current_temperature, ef
    
    except Exception as e:
        raise Exception(f'Missing parameter in fan data for {template_name}: {e}')

def fetch_mail_data(args):
    template_name, mail_template_df = args[:]
    logger.info(f"Fetching mail data for template: {template_name}")
    try:
        use_case_mail_template = mail_template_df.loc[mail_template_df['UseCaseTemplate'] == template_name]

        if len(use_case_mail_template) == 0:
            raise Exception(f'No email template found for {template_name}')
        
        recipients_string = use_case_mail_template['Recipients'].iloc[0]
        # Only replace @@@ with commas in the recipients string
        recipients_string = recipients_string.replace('@@@', ',')
        recipients_list = recipients_string.split(',')

        subject = use_case_mail_template['Subject'].iloc[0]
        body_string = use_case_mail_template['Description'].iloc[0]

        import re
        body_string = re.sub(r'<style>.*?</style>', '', body_string)

        logger.info(f"Mail data for {template_name}: {len(recipients_list)} recipients, subject: {subject[:30]}...")
        return subject, recipients_list, body_string
    
    except KeyError as e:
        raise Exception(f'Missing field in email template for {template_name}: {e}')
    except IndexError as e:
        raise Exception(f'No email template found for {template_name}: {e}')
    except Exception as e:
        raise Exception(f'Exception occurred while fetching mail data and creating mail body for template {template_name}: {e}')


def check_mail_log_exists(template_name, user_id, duration_minutes, current_time):
    try:
        # Convert current_time (datetime) to string if needed
        if isinstance(current_time, pd.Timestamp):
            current_time = current_time.to_pydatetime()
            
        time_cutoff = current_time - timedelta(minutes=duration_minutes)
        time_cutoff_str = time_cutoff.strftime('%Y-%m-%dT%H:%M:%S')
        
        logger.info(f"Checking if mail was sent for {template_name} since {time_cutoff_str}")

        response = mail_log_table.query(
            KeyConditionExpression=Key('UserId').eq(user_id) & Key('Timestamp').gt(time_cutoff_str),
            FilterExpression=Attr('TemplateName').eq(template_name)
        )

        items = response.get('Items', [])
        mail_exists = len(items) > 0
        
        if mail_exists:
            logger.info(f"Found {len(items)} previous mail logs for {template_name}")
        else:
            logger.info(f"No previous mail logs found for {template_name}")
            
        return mail_exists
    except Exception as e:
        logger.error(f"Error querying DynamoDB for mail logs: {e}")
        raise Exception(f"Error querying DynamoDB for mail logs: {e}")
    
def log_mail_sent(template_name, current_time, user_id, recipients_list, subject):
    try:
        if isinstance(current_time, pd.Timestamp):
            current_time = current_time.to_pydatetime()
            
        recipients_string = ','.join(recipients_list).replace(",", "@@@")
        item = {
            'UserId': user_id,
            'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S'),
            'FromFunctionName': 'mail_alert_fan_efficiency',
            'Subject': subject,
            'TemplateName': template_name,
            'ToRecipients': recipients_string,
            'UseCase': 'Fan Efficiency'
        }
        mail_log_table.put_item(Item=item)
        logger.info(f"Logged mail sent for {template_name} to {user_id}")
    except Exception as e:
        logger.error(f"Error inserting mail log into DynamoDB: {e}")
        raise Exception(f"Error inserting mail log into DynamoDB: {e}")

def alert_mechanism(args):

    template_name, avg_efficiency_df, duration, recipients_list, subject, body, current_time, user_id = args[:]
    logger.info(f"Checking alert conditions for template: {template_name}")
    try:
        
        if avg_efficiency_df['DropTrue'].sum() == len(avg_efficiency_df):
            # Check if mail was already sent within the duration period
            mail_already_sent = check_mail_log_exists(template_name, user_id, duration, current_time)
            
            if not mail_already_sent:
                for recipient in recipients_list:    
                    send_mail(recipient, subject, body)

                log_mail_sent(template_name, current_time, user_id, recipients_list, subject)
                return f'Alert for {template_name}'
            else:
                return f'Not an alert but efficiency dropped for {template_name}'
        else:
            return f'Nothing wrong with {template_name} template'
    except Exception as e:
        raise Exception(f'Exception occurred while running alert mechanism for template {template_name}: {e}')
