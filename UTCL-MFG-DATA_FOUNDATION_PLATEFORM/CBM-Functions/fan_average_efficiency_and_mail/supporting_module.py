import logging
import boto3
from decimal import Decimal
from datetime import datetime, timedelta, timezone
import os
import json
import requests
import pandas as pd
import numpy as np
import pyodbc
from boto3.dynamodb.conditions import Key, Attr
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)

# Configure logging
logging.basicConfig(level=logging.INFO, 
                   format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Suppress boto3/botocore logging
logging.getLogger('botocore').setLevel(logging.ERROR)
logging.getLogger('boto3').setLevel(logging.ERROR)
logging.getLogger('urllib3').setLevel(logging.ERROR)

# Environment variables
i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")
database = os.getenv("database")
password = os.getenv("password")
username = os.getenv("username")
server = os.getenv("server")

utcl_cbm_fan_efficiency = os.getenv("utcl_cbm_fan_efficiency")
utcl_cbm_fanaverage_efficiency = os.getenv("utcl_cbm_fanaverage_efficiency")
cbm_mail_logs = os.getenv("cbm_mail_logs")

# Initialize AWS resources
session = boto3.Session(region_name='ap-south-1')
dynamodb = session.resource('dynamodb')
efficiency_table = dynamodb.Table(utcl_cbm_fan_efficiency)
average_efficiency_table = dynamodb.Table(utcl_cbm_fanaverage_efficiency)
mail_log_table = dynamodb.Table(cbm_mail_logs)

# --- EFFICIENCY DATA FUNCTIONS ---

def fetch_fan_efficiency_data():
    """
    Fetch fan efficiency data from the last 10 minutes.
    """
    try:
        ten_minutes_ago = datetime.now(timezone.utc) - timedelta(minutes=10)
        ten_minutes_ago_str = ten_minutes_ago.isoformat()

        logger.info(f"Fetching efficiency data since {ten_minutes_ago_str}")
        
        # Get all template names first
        template_response = efficiency_table.scan(
            ProjectionExpression="TemplateName",
            Select="SPECIFIC_ATTRIBUTES"
        )
        template_names = {item['TemplateName'] for item in template_response.get('Items', [])}
        
        # Continue pagination if needed
        while 'LastEvaluatedKey' in template_response:
            template_response = efficiency_table.scan(
                ProjectionExpression="TemplateName",
                Select="SPECIFIC_ATTRIBUTES",
                ExclusiveStartKey=template_response['LastEvaluatedKey']
            )
            template_names.update({item['TemplateName'] for item in template_response.get('Items', [])})
        
        # Query each template name with timestamp filter
        all_items = []
        for template_name in template_names:
            items = []
            query_kwargs = {
                'KeyConditionExpression': 
                    Key('TemplateName').eq(template_name) & 
                    Key('Timestamp').gt(ten_minutes_ago_str)
            }
            
            while True:
                response = efficiency_table.query(**query_kwargs)
                items.extend(response.get('Items', []))
                if 'LastEvaluatedKey' not in response:
                    break
                query_kwargs['ExclusiveStartKey'] = response['LastEvaluatedKey']
            
            all_items.extend(items)
        
        logger.info(f"Fetched {len(all_items)} fan efficiency records from the last 10 minutes")
        return all_items
        
    except Exception as e:
        logger.error(f"Error fetching fan efficiency data: {e}", exc_info=True)
        return []

def fetch_average_efficiency_data():
    """
    Fetch average efficiency data from the last hour.
    """
    try:
        one_hour_ago = datetime.now(timezone.utc) - timedelta(hours=1)
        one_hour_ago_str = one_hour_ago.isoformat()
        
        # Get all template names first
        template_response = average_efficiency_table.scan(
            ProjectionExpression="TemplateName",
            Select="SPECIFIC_ATTRIBUTES"
        )
        template_names = {item['TemplateName'] for item in template_response.get('Items', [])}
        
        # Continue pagination if needed
        while 'LastEvaluatedKey' in template_response:
            template_response = average_efficiency_table.scan(
                ProjectionExpression="TemplateName",
                Select="SPECIFIC_ATTRIBUTES",
                ExclusiveStartKey=template_response['LastEvaluatedKey']
            )
            template_names.update({item['TemplateName'] for item in template_response.get('Items', [])})
        
        # Query each template name with timestamp filter
        all_items = []
        for template_name in template_names:
            items = []
            query_kwargs = {
                'KeyConditionExpression': 
                    Key('TemplateName').eq(template_name) & 
                    Key('Timestamp').gt(one_hour_ago_str)
            }
            
            while True:
                response = average_efficiency_table.query(**query_kwargs)
                items.extend(response.get('Items', []))
                if 'LastEvaluatedKey' not in response:
                    break
                query_kwargs['ExclusiveStartKey'] = response['LastEvaluatedKey']
            
            all_items.extend(items)
        
        logger.info(f"Fetched {len(all_items)} average efficiency records from the last hour")
        return all_items
        
    except Exception as e:
        logger.error(f"Error fetching average efficiency data: {e}", exc_info=True)
        return []

def check_all_same(values):
    """
    Check if all values in a list are the same.
    """
    if not values:
        return True
    first = values[0]
    return all(v == first for v in values)

def ingest_average_efficiency(temp_list, avg_data_list, template_name):
    """
    Calculate and store average efficiency metrics for a fan template.
    """
    try:
        if not temp_list:
            logger.warning(f"No efficiency data provided for template {template_name}")
            return None
            
        # Find relevant previous average efficiency records
        relevant_avg = [r for r in avg_data_list if r['TemplateName'] == template_name]
        
        # Sort by timestamp to get the most recent record
        if relevant_avg:
            relevant_avg.sort(key=lambda x: x['Timestamp'], reverse=True)

        # Extract current efficiency values
        try:
            efficiencies = [float(x['Efficiency']) for x in temp_list]
        except (KeyError, ValueError) as e:
            logger.error(f"Invalid efficiency data for template {template_name}: {e}")
            return None
            
        timestamp = temp_list[0]['Timestamp']
        plant = temp_list[0]['PlantName']
        fan = temp_list[0]['Fan Name']

        # Case 1: No previous average exists
        if not relevant_avg:
            avg_eff = round(sum(efficiencies) / len(efficiencies), 2)
            average_efficiency_table.put_item(
                Item={
                    'Timestamp': timestamp,
                    'TemplateName': template_name,
                    'PlantName': plant,
                    'FanName': fan,
                    'AverageEfficiency': Decimal(str(avg_eff)),
                    'EfficiencyDrop': Decimal('0')
                }
            )
            logger.info(f"Created new average efficiency record for {template_name}: {avg_eff}")
            return {
                'template_name': template_name,
                'avg_efficiency': avg_eff,
                'efficiency_drop': 0,
                'message': f"New average efficiency calculated for {template_name}: {avg_eff}"
            }
            
        # Case 2: All recent efficiency values are identical
        elif check_all_same(efficiencies):
            avg_eff = round(efficiencies[0], 2)
            average_efficiency_table.put_item(
                Item={
                    'Timestamp': timestamp,
                    'TemplateName': template_name,
                    'PlantName': plant,
                    'FanName': fan,
                    'AverageEfficiency': Decimal(str(avg_eff)),
                    'EfficiencyDrop': Decimal('0')
                }
            )
            return {
                'template_name': template_name,
                'avg_efficiency': avg_eff,
                'efficiency_drop': 0,
                'message': f'Last efficiency values are the same for {template_name}'
            }
            
        # Case 3: Normal case with previous average and varying efficiencies
        else:
            try:
                prev_eff = float(relevant_avg[0]['AverageEfficiency'])
                current_eff = float(efficiencies[0])
                
                # Handle division by zero
                if prev_eff == 0:
                    drop = 1 - current_eff / 0.01
                else:
                    drop = 1 - current_eff / prev_eff

                average_efficiency_table.put_item(
                    Item={
                        'Timestamp': timestamp,
                        'TemplateName': template_name,
                        'PlantName': plant,
                        'FanName': fan,
                        'AverageEfficiency': Decimal(str(round(prev_eff, 2))),
                        'EfficiencyDrop': Decimal(str(round(drop, 2)))
                    }
                )
                
                # Return appropriate message based on efficiency change
                drop_percent = abs(round(drop * 100, 2))
                if drop < 0:
                    return {
                        'template_name': template_name,
                        'avg_efficiency': prev_eff,
                        'efficiency_drop': drop,
                        'message': f'Efficiency increased for {template_name} by {drop_percent}%'
                    }
                else:
                    return {
                        'template_name': template_name,
                        'avg_efficiency': prev_eff,
                        'efficiency_drop': drop,
                        'message': f'Efficiency dropped for {template_name} by {drop_percent}%'
                    }
                    
            except (IndexError, KeyError, ValueError) as e:
                logger.error(f"Error processing previous efficiency for {template_name}: {e}")
                return None

    except Exception as e:
        logger.error(f'Error during efficiency ingestion for {template_name}: {e}', exc_info=True)
        return None

# --- EMAIL AND ALERT FUNCTIONS ---

def send_mail(receiver_id, subject, content):
    """
    Send email using Microsoft Graph API.
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
        response = requests.post(url, headers=headers, data=payload)
        if response.status_code >= 200 and response.status_code < 300:
            logger.info(f"Email sent successfully to {receiver_id}")
            return True
        else:
            logger.error(f"Failed to send email to {receiver_id}: {response.status_code} {response.text}")
            return False
    except Exception as e:
        logger.error(f'Error while sending mail to {receiver_id}: {e}')
        return False

def check_mail_log_exists(template_name, user_id, duration_minutes, current_time):
    """
    Check if an email was already sent for this template within the duration period.
    """
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
    """
    Log that an email was sent to prevent duplicate alerts.
    """
    try:
        if isinstance(current_time, pd.Timestamp):
            current_time = current_time.to_pydatetime()
            
        recipients_string = ','.join(recipients_list).replace(",", "@@@")
        item = {
            'UserId': user_id,
            'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S'),
            'FromFunctionName': 'fan_efficiency_monitoring',
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

# --- SQL DATABASE FUNCTIONS ---

def fetch_template_info():
    """
    Fetch active fan efficiency templates from SQL Server.
    """
    query = "select * from [dbo].[CBM_EquipmentTemplates] where Status = 'Active' and UseCase = 'Fan Efficiency'"
    driver = '{ODBC Driver 17 for SQL Server}'
    dbconnection = 'DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            raise Exception(f'Error occurred while fetching the template info')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')

def fetch_mail_template_info(template_list):
    """
    Fetch email templates from SQL Server.
    """
    formatted_templates = ', '.join(f"'{item}'" for item in template_list)
    query = f"select * from [dbo].[CBM_EmailTemplates] where UseCaseTemplate in ({formatted_templates})"
    driver = '{ODBC Driver 17 for SQL Server}'
    dbconnection = 'DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            raise Exception(f'Email template data is not available.')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while fetching email templates: {e}')

# --- ALERT PROCESSING FUNCTIONS ---

def process_alert_conditions(template_row, avg_efficiency_result, fan_data):
    """
    Process alert conditions for a template.
    """
    try:
        template_name = template_row['TemplateName']
        
        # Parse conditions
        conditions_str = template_row['Conditions']
        formatted_json_string = conditions_str.replace("@@@", ",")
        json_obj = json.loads(formatted_json_string)
        conditions = pd.json_normalize(json_obj)

        # Extract condition values
        min_val = float(conditions['Min'].iloc[0])
        max_val = float(conditions['Max'].iloc[0])
        duration = int(conditions['Duration'].iloc[0])
        
        # Check if efficiency drop is within alert thresholds
        efficiency_drop = avg_efficiency_result['efficiency_drop']
        
        # Convert to percentage for comparison
        efficiency_drop_pct = efficiency_drop * 100
        
        if min_val < efficiency_drop_pct < max_val:
            return {
                'alert_needed': True,
                'duration': duration,
                'efficiency_drop': efficiency_drop,
                'min_threshold': min_val,
                'max_threshold': max_val
            }
        else:
            return {
                'alert_needed': False,
                'duration': duration,
                'efficiency_drop': efficiency_drop,
                'min_threshold': min_val,
                'max_threshold': max_val
            }
            
    except Exception as e:
        logger.error(f"Error processing alert conditions for {template_row['TemplateName']}: {e}")
        return {'alert_needed': False}

def prepare_email_content(template_name, mail_template_df, fan_data, efficiency_drop):
    """
    Prepare email content for alerts.
    """
    try:
        # Get email template
        use_case_mail_template = mail_template_df.loc[mail_template_df['UseCaseTemplate'] == template_name]
        
        if len(use_case_mail_template) == 0:
            raise Exception(f'No email template found for {template_name}')
        
        # Parse recipients
        recipients_string = use_case_mail_template['Recipients'].iloc[0]
        recipients_string = recipients_string.replace('@@@', ',')
        recipients_list = recipients_string.split(',')
        
        # Get subject and body
        subject = use_case_mail_template['Subject'].iloc[0]
        body_string = use_case_mail_template['Description'].iloc[0]
        
        # Fix HTML style tags and create proper table
        body_string = body_string.replace('table @@@ th @@@ td', 'table, th, td')
        
        # Create HTML table for the data
        table_html = f"""
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr><th>Parameter</th><th>Value</th></tr>
            <tr><td>Fan Name</td><td>{fan_data['fan_name']}</td></tr>
            <tr><td>Efficiency Drop</td><td>{round(efficiency_drop*100, 2)}%</td></tr>
            <tr><td>Current Efficiency</td><td>{round(fan_data['efficiency']*100, 2)}%</td></tr>
            <tr><td>Current Speed</td><td>{fan_data['speed']} RPM</td></tr>
            <tr><td>Current Load</td><td>{fan_data['load']} kW</td></tr>
            <tr><td>Current Inlet Draft</td><td>{fan_data['inlet_draft']} mmWC</td></tr>
            <tr><td>Current Outlet Draft</td><td>{fan_data['outlet_draft']} mmWC</td></tr>
            <tr><td>Current Temperature</td><td>{fan_data['temperature']} &#8451;</td></tr>
            <tr><td>Time</td><td>{datetime.now().strftime('%d/%m/%y %H:%M:%S')}</td></tr>
        </table>
        """
        
        # Format subject
        subject = subject.format(
            fan_name=fan_data['fan_name'],
            critical_percent=round(efficiency_drop*100, 2),
            plant_name=fan_data['plant_name']
        )
        
        # Create email body with description and table
        body = f"""
        <p><strong>Description</strong>:<br>Following information generated by automated system.<br>&nbsp;</p>
        <p>Fan {fan_data['fan_name']} efficiency has dropped by {round(efficiency_drop*100, 2)}%.</p>
        {table_html}
        """
        
        return {
            'recipients': recipients_list,
            'subject': subject,
            'body': body
        }
        
    except Exception as e:
        logger.error(f"Error preparing email content for {template_name}: {e}")
        return None

def process_alert(template_name, efficiency_result, template_info, mail_template_df, fan_data):
    """
    Process alert for a template based on efficiency results.
    
    Args:
        template_name: Name of the template
        efficiency_result: Result from ingest_average_efficiency
        template_info: Template information from SQL database
        mail_template_df: Email template dataframe
        fan_data: Current fan data
        
    Returns:
        dict: Alert processing result
    """
    try:
        logger.info(f"Processing alert for template: {template_name}")
        
        # Extract efficiency drop
        efficiency_drop = efficiency_result['efficiency_drop']
        
        # Check alert conditions
        alert_conditions = process_alert_conditions(template_info, efficiency_result, fan_data)
        
        if not alert_conditions['alert_needed']:
            logger.info(f"No alert needed for {template_name}, efficiency drop {efficiency_drop:.2%} outside thresholds")
            return {
                'template_name': template_name,
                'alert_sent': False,
                'reason': 'Efficiency drop outside thresholds'
            }
        
        # Prepare fan data for email formatting
        formatted_fan_data = {
            'fan_name': fan_data['Fan Name'],
            'plant_name': fan_data['PlantName'],
            'efficiency': float(fan_data['Efficiency']),
            'speed': float(fan_data['Speed']),
            'load': float(fan_data['Load']),
            'inlet_draft': float(fan_data['Inlet Draft']),
            'outlet_draft': float(fan_data['Outlet Draft']),
            'temperature': float(fan_data['Temperature'])
        }
        
        # Prepare email content
        email_content = prepare_email_content(template_name, mail_template_df, formatted_fan_data, efficiency_drop)
        
        if not email_content:
            logger.error(f"Failed to prepare email content for {template_name}")
            return {
                'template_name': template_name,
                'alert_sent': False,
                'reason': 'Failed to prepare email content'
            }
        
        # Check if mail was already sent within the duration period
        user_id = template_info['UserId']
        current_time = datetime.now()
        duration = alert_conditions['duration']
        
        mail_already_sent = check_mail_log_exists(template_name, user_id, duration, current_time)
        
        if mail_already_sent:
            logger.info(f"Email already sent for {template_name} within the last {duration} minutes")
            return {
                'template_name': template_name,
                'alert_sent': False,
                'reason': f'Email already sent within the last {duration} minutes'
            }
        
        # Get test recipients from environment variable if present
        test_recipients = os.getenv("check")
        if test_recipients:
            # Split test recipients by comma and send test emails
            test_emails = [email.strip() for email in test_recipients.split(',')]
            for recipient in test_emails:
                send_mail(recipient, f"TEST - {email_content['subject']}", email_content['body'])
            logger.info(f"Test emails sent to: {test_emails}")

        # Send email to all recipients
        for recipient in email_content['recipients']:
            send_mail(recipient, email_content['subject'], email_content['body'])
        
        # Log the email
        log_mail_sent(template_name, current_time, user_id, email_content['recipients'], email_content['subject'])
        
        logger.info(f"Alert email sent for {template_name}, efficiency drop: {efficiency_drop:.2%}")
        return {
            'template_name': template_name,
            'alert_sent': True,
            'efficiency_drop': efficiency_drop,
            'recipients': len(email_content['recipients'])
        }
        
    except Exception as e:
        logger.error(f"Error processing alert for {template_name}: {e}", exc_info=True)
        return {
            'template_name': template_name,
            'alert_sent': False,
            'reason': f'Error: {str(e)}'
        }

