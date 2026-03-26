import uuid
import pandas as pd
import json,requests
import time as tm
from datetime import datetime,timedelta, timezone
import pyodbc
import boto3
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError
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

cbm_message_logs=os.getenv('cbm_message_logs')
trend_violation_alert_log_prod=os.getenv('trend_violation_alert_log_prod')
REGION = "ap-south-1"

dynamodb = boto3.resource('dynamodb')
sms_log_table = dynamodb.Table(cbm_message_logs)
alert_log_table = dynamodb.Table(trend_violation_alert_log_prod)

def batch_get_asset_property_value_history(entries):
    client = boto3.client('iotsitewise', region_name=REGION)
    response = client.batch_get_asset_property_value_history(entries=entries)
    data = response['successEntries']
    while 'nextToken' in response:
        response = client.batch_get_asset_property_value_history(entries=entries,
            nextToken=response['nextToken']
        )
        data.extend(response['successEntries'])
    return data

def get_digital_changes_from_sitewise(property_alias, start_time, end_time):
    client = boto3.client('iotsitewise', region_name=REGION)

    try:
        entries = [
            {
                'entryId': str(uuid.uuid4()),
                'propertyAlias': property_alias,
                'startDate': start_time,
                'endDate': end_time,
                'qualities': ['GOOD'],
                'timeOrdering': 'ASCENDING'
            }
        ]
        response = client.batch_get_asset_property_value_history(entries=entries)
        print(f"entries from digital change: {entries}")
        data = []
        for entry in response.get('successEntries', []):
            for val in entry.get('assetPropertyValueHistory', []):
                ts = datetime.fromtimestamp(val['timestamp']['timeInSeconds'], tz=timezone.utc)
                # value = (
                #     val['value'].get('booleanValue') or
                #     val['value'].get('doubleValue') or
                #     val['value'].get('stringValue') or
                #     val['value'].get('integerValue')
                # )
                val_dict = val['value']

                # Explicit check for each key to avoid missing falsy values like False or 0
                if 'booleanValue' in val_dict:
                    value = val_dict['booleanValue']
                elif 'doubleValue' in val_dict:
                    value = val_dict['doubleValue']
                elif 'stringValue' in val_dict:
                    value = val_dict['stringValue']
                elif 'integerValue' in val_dict:
                    value = val_dict['integerValue']
                else:
                    value = None
                data.append({'Timestamp': ts, 'Value': value, 'Id': property_alias})
        # print(f"Data from sitewise: {data}")
        df = pd.DataFrame(data)
        if df.empty:
            return df

        df.sort_values('Timestamp', inplace=True)
        df['previous_value'] = df['Value'].shift(1)
        df = df[df['previous_value'] != df['Value']]
        print(f"Digital changes from get_sitewise_data: for ID - {df['Id']} is {df}")
        df = df.iloc[1:] if not df.empty else df
       

        # df['rn'] = 1
        # return df[['Timestamp', 'Id', 'previous_value', 'Value', 'rn']]
        return df[['Timestamp', 'Id', 'previous_value', 'Value']]

    except Exception as e:
        print(f"Error fetching digital changes from SiteWise for {property_alias}: {e}")
        return pd.DataFrame()
    
def fetch_data_from_SQL(query) -> pd.DataFrame:

    driver= '{ODBC Driver 17 for SQL Server}'

    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:

                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            # return pd.DataFrame()
            raise Exception(f'Error occurred while fetching the template info.')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')

def insert_or_update_check_point(query, params) -> pd.DataFrame:

    driver= '{ODBC Driver 17 for SQL Server}'

    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(query, params)

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')

def send_mail(receiver_id, subject, content):
    try:
        # Step 1: Get access token
        token_url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token"
        payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        print("Requesting access token...")
        token_response = requests.post(token_url, headers=headers, data=payload, timeout=10)
        token_response.raise_for_status()

        temp = token_response.json()
        access_token = temp.get('access_token')

        if not access_token:
            print("Access token not found in response!")
            print("Token response:", temp)
            return

        # Step 2: Prepare recipient list
        to_recipients = [{"emailAddress": {"address": addr}} for addr in receiver_id]

        # Step 3: Compose email
        print("Sending email to the following recipients:")
        for recipient in receiver_id:
            print(f"  - {recipient}")

        mail_url = "https://graph.microsoft.com/v1.0/me/sendMail"
        mail_payload = json.dumps({
            "message": {
                "subject": subject,
                "body": {
                    "contentType": "html",
                    "content": content
                },
                "toRecipients": to_recipients
            },
            "saveToSentItems": "false"
        })

        mail_headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {access_token}'
        }

        mail_response = requests.post(mail_url, headers=mail_headers, data=mail_payload, timeout=10)
        mail_response.raise_for_status()
        print("Email triggered successfully")

    except requests.Timeout:
        print("Timeout occurred while sending mail or fetching token")
    except requests.RequestException as e:
        print(f"Request error occurred: {e}")
    except Exception as e:
        print(f"General exception occurred while sending mail: {e}")

def append_sms_log(Timestamp, template_name, user_id, reciver_id, msg_status, contact_number, tag, alert):
    try:
       
        sms_log_data = {
            'Timestamp': str(Timestamp),
            'UserName': str(user_id),
            'UseCase': template_name,
            'Receiver_Name': str(reciver_id),
            'StatusCode': msg_status,
            'MobileNo': int(contact_number),
            'TagId': tag,
            'Alert': alert
        }

        
        sms_log_table.put_item(Item=sms_log_data)
        # append_alert_csv(Timestamp,tag,template_name,alert)
        
    except Exception as e:
        print(f'Exception occured {e} while appending to the message logs for number={contact_number},Exception={e}')

def send_sms(mobile_no,tag,value,now, variable_name):
    try:
        now = datetime.utcnow()  # UTC time
        now_ist = now + timedelta(minutes=330)
        now_str = now_ist.strftime('%d-%m-%y %H:%M:%S')
        url = "http://10.1.56.65/RTISMSApp/MessageService/SMSMsg/ProcessSMS"
        # now = datetime.strftime(now,'%d-%m-%y %H:%M:%S')
        payload = json.dumps([
            {
                "DOC_NO": "202306201044",
                "DOC_TYPE": "MFG-I4",
                "SMS_MSG": f"i4 Alert: {variable_name} Value is: {value} -From AWS Date: {now_str} Please check -Ultratech",
                "MOBILE_NO": mobile_no,
                "PROJECT_ID": 39,
                "MSG_TYPE": "S",
                "PROJECT_KEY": "32Lcowj2ncXn4MJtGWAfxQ=="
            }
        ])
        headers = {
            'Content-Type': 'application/json'
        }
        print(f"[{now_str}] Triggering SMS for tag={tag}, value={value}, mobile={mobile_no}")
        response = requests.post(url, headers=headers, data=payload)

        if response.status_code == 200:
            print(f"[{now_str}] SMS sent successfully. Response: {response.text}")
        else:
            print(f"[{now_str}] SMS failed with status {response.status_code}. Response: {response.text}")

        return response.text

    except Exception as e:
        print(f"[{datetime.now().strftime('%d-%m-%y %H:%M:%S')}] Exception occurred while sending SMS for tag={tag}: {e}")
        return None

def check_sms_log(phone, current_time, max_alert):
    try:
        # Convert current_time to date string for filtering
        today_str = current_time.date().isoformat()
        
        # Query the table using MobileNo and filter on today's date
        response = sms_log_table.query(
            KeyConditionExpression=Key('MobileNo').eq(int(phone)) & 
                                   Key('Timestamp').begins_with(today_str)
        )

        logs = response.get('Items', [])

        if len(logs) >= int(max_alert):
            return False
        else:
            return True

    except Exception as e:
        print(f'Exception occurred while checking sms_log file for id={phone}, Exception={e}')
        return True 

def fetch_mail_data(template_name):
    try:
        # mail_template_query = f'Utcl_Fan_Efficiency_MailAlerts| where UseCaseTemplate=="{template_name}"'
        # mail_template_df = connect_ADX_with_AAD_application_key_auth(mail_template_query)
        
        mail_template_query = f"select * from [dbo].[CBM_EmailTemplates] where UseCaseTemplate = '{template_name}'"
        mail_template_df = fetch_data_from_SQL(mail_template_query)

        use_case_mail_template = mail_template_df.copy()
        recipients_string = use_case_mail_template['Recipients'].iloc[0]
        recipients_string = recipients_string.replace('@@@',',')
        recipients_list = recipients_string.split(',')
        subject = use_case_mail_template['Subject'].iloc[0]
        return subject,recipients_list
    except Exception as e:
        print(f'Exception occured while fetching mail data and creating mail body for template {template_name}:{e}')

def append_alert_csv(Timestamp, Id1, template_name, status, Id2=None):
    try:
        
        dynamodb_data_1 = {
                'Timestamp': str(Timestamp),
                'Tag_Id': str(Id1),
                'Template_Name': template_name,
                'Alert': status
            }

        alert_log_table.put_item(Item=dynamodb_data_1)

        if Id2 is not None:
                dynamodb_data_2 = {
                    'Timestamp': str(Timestamp),
                    'Tag_Id': str(Id2),
                    'Template_Name': template_name,
                    'Alert': status
                }
                alert_log_table.put_item(Item=dynamodb_data_2)

    except ClientError as e:
        print(f'Exception occured while appending to the alert_log.csv file for id={Id1},{Id2}: {e}')

def build_html_body_digital(parameter_name,parameter_state,current_datetime,html_table,user_id):
    try:
        return f'''<strong>Description:</strong><br>
            Following information is generated by automated system.<br>
            <strong>{parameter_name} {parameter_state} at {datetime.strftime(current_datetime,'%Y/%m/%d %H:%M:%S')}.</strong><br>
            Critical parameters listed below with its instantaneous value when the exception has been raised. For reference, please use the below link.
            <a href="https://i4.utclconnect.com">link</a><br>
            {html_table}<br>
            <strong>This mail has been scheduled by {user_id}</strong>
        '''
    except Exception as e:
        print(f'Exception occured while building html body for digital tag in Trend Violation:{e}')

def check_alert_log(current_time, Id1, snooze_time, Id2=None):
    try:
       
        time_limit = (current_time - timedelta(days=1)).isoformat()

        ids_to_check = [Id1] if Id2 is None else [Id1, Id2]
        all_logs = []

        for tag_id in ids_to_check:
            response = alert_log_table.query(
                IndexName='Tag_Id-Timestamp-index',  
                KeyConditionExpression=Key('Tag_Id').eq(tag_id) & Key('Timestamp').gt(time_limit)
            )
            all_logs.extend(response.get('Items', []))

        if not all_logs:
            return False

        df_alert = pd.DataFrame(all_logs)

        if df_alert.empty or 'Timestamp' not in df_alert.columns:
            return False

        df_alert['Timestamp'] = pd.to_datetime(df_alert['Timestamp'])
        df_alert.sort_values('Timestamp', ascending=False, inplace=True)

        if Id2 is not None:
            df_alert = df_alert[df_alert['Alert'].str.contains('Flyash', case=False, na=False)]

        if df_alert.empty:
            return False

        time_diff = current_time - df_alert['Timestamp'].iloc[0]
        return not (time_diff > timedelta(minutes=snooze_time))

    except Exception as e:
        print(f'Exception occurred while executing check_alert_log for id={Id1},{Id2}, Exception={e}')
        return False 

# def insert_or_update_log():


def compare_digital_tag(df,current_time,template_name,user_id,main_sms_df,digital_tag_df):
    # 1 1 1 1-->2 min -- no alert
    # 1 1 1 0-->2 min -- change alert and stop alert?
    # on change 1->0 alert, 0->1 alert
    # on start 0->1 alert, start
    # on stop 1->0 alert , stop
    try:
        # digital_tag_df['previous_value'] = 1
        if not digital_tag_df.empty:
            # if pd.isna(digital_tag_df['previous_value'].iloc[0]):

            # if digital_tag_df['previous_value'].isna()[0]==False:
            # Time of change
            # difference between c/t and t/c > time delay 
                temp_tag_df =df.copy()
                ist_current_time = current_time + timedelta(minutes=330)
                time_delay=temp_tag_df['timeDelay'].iloc[0]
                print(f'time delay for digital tag:{time_delay}')
                
                time_difference=current_time-digital_tag_df['Timestamp'].iloc[0]
               # actual_timedelay = timedelta(minutes=int(time_delay))
                
                tag_id = temp_tag_df['variable'].iloc[0]
                last_check_time_stamp = digital_tag_df['Timestamp'].iloc[0]
                print(f'last_check_time_stamp:{last_check_time_stamp}')
                actual_timedelay = last_check_time_stamp + pd.Timedelta(seconds= int(time_delay))
                
                print(f'actual_timedelay:{actual_timedelay}')
                if current_time > actual_timedelay:
                    if len(temp_tag_df)>0:
                        current_value=digital_tag_df['Value'].iloc[0]
                        status = temp_tag_df['runningStatusAlert'].iloc[0]
                        variable_name = temp_tag_df['variableName'].iloc[0]
                        start_value=float(temp_tag_df['startValue'].iloc[0])
                        stop_value=float(temp_tag_df['stopValue'].iloc[0])
                        Id = temp_tag_df['variable'].iloc[0]
                        alert_type = temp_tag_df['alertType'].iloc[0]
                        if 'snoozeTime' not in temp_tag_df.columns:snooze_time = 10
                        else: snooze_time = int(temp_tag_df['snoozeTime'].iloc[0])
                        x=''
                        if current_value==start_value:
                            x+='Start Alert'
                        elif current_value==stop_value:
                            x+='Stop Alert'
                        if status=='On Change':
                            if check_alert_log(current_time,Id,snooze_time)==False:
                                if alert_type=='Email':

                                    dcp_query = f'''
                                        SELECT *
                                        FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                    '''
                                    dcp_data = fetch_data_from_SQL(dcp_query)

                                    if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                        insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                        insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                        insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                        table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                        table_row = table.iloc[:1]
                                        html_table = table_row.to_html(index=False)
                                        main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                        append_alert_csv(current_time,Id,template_name,f'On change {x} for {variable_name}')
                                        subject,recipients_list=fetch_mail_data(template_name)
                                        send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                        return f'On change {x} for {variable_name}'

                                    else:
                                        dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                        last_log_time = dcp_data['Timestamp'].iloc[0]
                                        last_log_time = last_log_time.tz_localize('UTC')
                                        if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                            update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                            update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                            insert_or_update_check_point(update_cp_query, update_cp_query_params)
                                            
                                            table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                            table_row = table.iloc[:1]
                                            html_table = table_row.to_html(index=False)
                                            main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                            append_alert_csv(current_time,Id,template_name,f'On change {x} for {variable_name}')
                                            subject,recipients_list=fetch_mail_data(template_name)
                                            send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                            return f'On change {x} for {variable_name}'  
                                        else:
                                            return 'No need to send a mail as there is no change.'
                                
                                elif alert_type=='SMS':

                                    dcp_query = f'''
                                        SELECT *
                                        FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                    '''
                                    dcp_data = fetch_data_from_SQL(dcp_query)

                                    if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                        insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                        insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                        insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                        tag = temp_tag_df['variable'].iloc[0]
                                        value = temp_tag_df['Value'].iloc[0]
                                        for i in main_sms_df['email_address']:
                                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                            if check_sms_log(contact_number,current_time,count)==True:
                                                msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                result= f'On change {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                print(f'{result} for template {template_name}')
                                            else:
                                                result= f'On change {x} for {variable_name} has been triggered but count value exceeded for{email_address}'
                                                print(f'{result} for template {template_name}')
                                        return f'On change {x} for {variable_name}'
                                    
                                    else:
                                        dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                        last_log_time = dcp_data['Timestamp'].iloc[0]
                                        last_log_time = last_log_time.tz_localize('UTC')
                                        if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                            update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                            update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                            insert_or_update_check_point(update_cp_query, update_cp_query_params)
                                            
                                            tag = temp_tag_df['variable'].iloc[0]
                                            value = temp_tag_df['Value'].iloc[0]
                                            for i in main_sms_df['email_address']:
                                                contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                if check_sms_log(contact_number,current_time,count)==True:
                                                    msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                    result= f'On change {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                    append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                    print(f'{result} for template {template_name}')
                                                else:
                                                    result= f'On change {x} for {variable_name} has been triggered but count value exceeded for{email_address}'
                                                    print(f'{result} for template {template_name}')
                                            return f'On change {x} for {variable_name}'
                                        else:
                                            return 'No need to send a mail as there is no change.'

                                elif alert_type=='Both':

                                    dcp_query = f'''
                                        SELECT *
                                        FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                    '''
                                    dcp_data = fetch_data_from_SQL(dcp_query)

                                    if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                        insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                        insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                        insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                        table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                        table_row = table.iloc[:1]
                                        html_table = table_row.to_html(index=False)
                                        main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                        append_alert_csv(current_time,Id,template_name,f'On change {x} for {variable_name}')
                                        subject,recipients_list=fetch_mail_data(template_name)
                                        send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                        tag = temp_tag_df['variable'].iloc[0]
                                        value = temp_tag_df['Value'].iloc[0]

                                        for i in main_sms_df['email_address']:
                                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                            if check_sms_log(contact_number,current_time,count)==True:
                                                msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                result= f'On change {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                print(f'{result} for template {template_name}')
                                            else:
                                                result= f'On change {x} for {variable_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                                print(f'{result} for template {template_name}')
                                        return f'On change {x} for {variable_name}'

                                    else:
                                        dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                        last_log_time = dcp_data['Timestamp'].iloc[0]
                                        last_log_time = last_log_time.tz_localize('UTC')
                                        if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                            update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                            update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                            insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                            table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                            table_row = table.iloc[:1]
                                            html_table = table_row.to_html(index=False)
                                            main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                            append_alert_csv(current_time,Id,template_name,f'On change {x} for {variable_name}')
                                            subject,recipients_list=fetch_mail_data(template_name)
                                            send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                            tag = temp_tag_df['variable'].iloc[0]
                                            value = temp_tag_df['Value'].iloc[0]

                                            for i in main_sms_df['email_address']:
                                                contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                if check_sms_log(contact_number,current_time,count)==True:
                                                    msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                    result= f'On change {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                    append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                    print(f'{result} for template {template_name}')
                                                else:
                                                    result= f'On change {x} for {variable_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                                    print(f'{result} for template {template_name}')
                                            return f'On change {x} for {variable_name}'

                                        else:
                                            return 'No need to send a mail as there is no change.'
                                        
                            else: return f'Snooze is on for {variable_name} for {snooze_time}, tag_Id = {Id}'
                        elif status=='On Start':
                                if x=='Start Alert':
                                    if check_alert_log(current_time,Id,snooze_time)==False:
                                        if alert_type=='Email':

                                            dcp_query = f'''
                                                SELECT *
                                                FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                            '''
                                            dcp_data = fetch_data_from_SQL(dcp_query)

                                            if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                                insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                                insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                                table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                table_row = table.iloc[:1]
                                                html_table = table_row.to_html(index=False)
                                                main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                subject,recipients_list=fetch_mail_data(template_name)
                                                send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                return f'On {x} for {variable_name}'
                                            
                                            else:
                                                dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                                last_log_time = dcp_data['Timestamp'].iloc[0]
                                                last_log_time = last_log_time.tz_localize('UTC')
                                                if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                                    update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                                    update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                    insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                                    table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                    table_row = table.iloc[:1]
                                                    html_table = table_row.to_html(index=False)
                                                    main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                    append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                    subject,recipients_list=fetch_mail_data(template_name)
                                                    send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                    return f'On {x} for {variable_name}'
                                                
                                                else:
                                                    return 'No need to send a mail as there is no change.'

                                        elif alert_type=='SMS':

                                            dcp_query = f'''
                                                SELECT *
                                                FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                            '''
                                            dcp_data = fetch_data_from_SQL(dcp_query)

                                            if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                                insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                                insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                                tag = temp_tag_df['variable'].iloc[0]
                                                value = temp_tag_df['Value'].iloc[0]
                                                for i in main_sms_df['email_address']:
                                                    contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                    email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                    count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                    if check_sms_log(contact_number,current_time,count)==True:
                                                        msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                        result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                        append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                        print(f'{result} for template {template_name}')
                                                    else:
                                                        result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address}'
                                                        print(f'{result} for template {template_name}')
                                                return f'On {x} for {variable_name}'
                                            
                                            else:
                                                dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                                last_log_time = dcp_data['Timestamp'].iloc[0]
                                                last_log_time = last_log_time.tz_localize('UTC')
                                                if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                                    update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                                    update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                    insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                                    tag = temp_tag_df['variable'].iloc[0]
                                                    value = temp_tag_df['Value'].iloc[0]
                                                    for i in main_sms_df['email_address']:
                                                        contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                        email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                        count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                        if check_sms_log(contact_number,current_time,count)==True:
                                                            msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                            result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                            append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                            print(f'{result} for template {template_name}')
                                                        else:
                                                            result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address}'
                                                            print(f'{result} for template {template_name}')
                                                    return f'On {x} for {variable_name}'
                                                else:
                                                    return 'No need to send a mail as there is no change.'

                                        elif alert_type=='Both':
                                            dcp_query = f'''
                                                SELECT *
                                                FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                            '''
                                            dcp_data = fetch_data_from_SQL(dcp_query)

                                            if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                                insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                                insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                                table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                table_row = table.iloc[:1]
                                                html_table = table_row.to_html(index=False)
                                                main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                subject,recipients_list=fetch_mail_data(template_name)
                                                send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                tag = temp_tag_df['variable'].iloc[0]
                                                value = temp_tag_df['Value'].iloc[0]
                                                for i in main_sms_df['email_address']:
                                                    contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                    email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                    count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                    if check_sms_log(contact_number,current_time,count)==True:
                                                        msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                        result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                        append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                        print(f'{result} for template {template_name}')
                                                    else:
                                                        result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                                        print(f'{result} for template {template_name}')
                                                return f'On {x} for {variable_name}'  
                                            
                                            else:
                                                dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                                last_log_time = dcp_data['Timestamp'].iloc[0]
                                                last_log_time = last_log_time.tz_localize('UTC')
                                                if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                                    update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                                    update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                    insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                                    table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                    table_row = table.iloc[:1]
                                                    html_table = table_row.to_html(index=False)
                                                    main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                    append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                    subject,recipients_list=fetch_mail_data(template_name)
                                                    send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                    tag = temp_tag_df['variable'].iloc[0]
                                                    value = temp_tag_df['Value'].iloc[0]
                                                    for i in main_sms_df['email_address']:
                                                        contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                        email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                        count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                        if check_sms_log(contact_number,current_time,count)==True:
                                                            msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                            result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                            append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                            print(f'{result} for template {template_name}')
                                                        else:
                                                            result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                                            print(f'{result} for template {template_name}')
                                                    return f'On {x} for {variable_name}'
                                                
                                                else:
                                                    return 'No need to send a mail as there is no change.'

                                    else: return f'Snooze is on for {variable_name} for {snooze_time}, tag_Id = {Id}'
                                elif x == 'Stop Alert':
                                    return f'Not an alert, but values are coming as false for {variable_name}'
                        elif status=='On Stop':
                            if x == 'Stop Alert': 
                                if check_alert_log(current_time,Id,snooze_time)==False:
                                        if alert_type=='Email':
                                            dcp_query = f'''
                                                SELECT *
                                                FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                            '''
                                            dcp_data = fetch_data_from_SQL(dcp_query)

                                            if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                                insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                                insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                                table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                table_row = table.iloc[:1]
                                                html_table = table_row.to_html(index=False)
                                                main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                subject,recipients_list=fetch_mail_data(template_name)
                                                send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                return f'On {x} for {variable_name}'
                                            
                                            else:
                                                dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                                last_log_time = dcp_data['Timestamp'].iloc[0]
                                                last_log_time = last_log_time.tz_localize('UTC')
                                                if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                                    update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                                    update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                    insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                                    table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                    table_row = table.iloc[:1]
                                                    html_table = table_row.to_html(index=False)
                                                    main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                    append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                    subject,recipients_list=fetch_mail_data(template_name)
                                                    send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                    return f'On {x} for {variable_name}'
                                                else:
                                                    return 'No need to send a mail as there is no change.'    

                                        elif alert_type=='SMS':

                                            dcp_query = f'''
                                                SELECT *
                                                FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                            '''
                                            dcp_data = fetch_data_from_SQL(dcp_query)

                                            if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                                insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                                insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                                tag = temp_tag_df['variable'].iloc[0]
                                                value = temp_tag_df['Value'].iloc[0]
                                                for i in main_sms_df['email_address']:
                                                    contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                    email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                    count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                    if check_sms_log(contact_number,current_time,count)==True:
                                                        msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                        result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                        append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                        print(f'{result} for template {template_name}')
                                                    else:
                                                        result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address}'
                                                        print(f'{result} for template {template_name}')
                                                return f'On {x} for {variable_name}'
                                            
                                            else:
                                                dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                                last_log_time = dcp_data['Timestamp'].iloc[0]
                                                last_log_time = last_log_time.tz_localize('UTC')
                                                if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                                    update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                                    update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                    insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                                    tag = temp_tag_df['variable'].iloc[0]
                                                    value = temp_tag_df['Value'].iloc[0]
                                                    for i in main_sms_df['email_address']:
                                                        contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                        email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                        count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                        if check_sms_log(contact_number,current_time,count)==True:
                                                            msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                            result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                            append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                            print(f'{result} for template {template_name}')
                                                        else:
                                                            result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address}'
                                                            print(f'{result} for template {template_name}')
                                                    return f'On {x} for {variable_name}'
                                                else:
                                                    return 'No need to send a mail as there is no change.' 

                                        elif alert_type=='Both':

                                            dcp_query = f'''
                                                SELECT *
                                                FROM [dbo].[CBM_TrendViolationDigitalChangePointData]
                                            '''
                                            dcp_data = fetch_data_from_SQL(dcp_query)

                                            if not ((dcp_data['TagId'] == tag_id) & (dcp_data['Template Name'] == template_name)).any():
                                                insert_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointInsert] @TagId=?, @Timestamp=?, @TemplateName=?'
                                                insert_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                insert_or_update_check_point(insert_cp_query, insert_cp_query_params)

                                                table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                table_row = table.iloc[:1]
                                                html_table = table_row.to_html(index=False)
                                                main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                subject,recipients_list=fetch_mail_data(template_name)
                                                send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                tag = temp_tag_df['variable'].iloc[0]
                                                value = temp_tag_df['Value'].iloc[0]
                                                for i in main_sms_df['email_address']:
                                                    contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                    email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                    count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                    if check_sms_log(contact_number,current_time,count)==True:
                                                        msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                        result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                        append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                        print(f'{result} for template {template_name}')
                                                    else:
                                                        result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                                        print(f'{result} for template {template_name}')
                                                return f'On {x} for {variable_name}'
                                            else:

                                                dcp_data = dcp_data[(dcp_data['TagId']==tag_id)&(dcp_data['Template Name']==template_name)]

                                                last_log_time = dcp_data['Timestamp'].iloc[0]
                                                last_log_time = last_log_time.tz_localize('UTC')
                                                if not last_check_time_stamp.floor('s') == last_log_time.floor('s'):
                                                    update_cp_query = f'EXEC [dbo].[SP_CBM_TrendViolationDigitalChangePointUpdate] @TagId=?, @NewTimestamp=?, @TemplateName=?'
                                                    update_cp_query_params = [tag_id, last_check_time_stamp, template_name]
                                                    insert_or_update_check_point(update_cp_query, update_cp_query_params)

                                                    table=temp_tag_df[['variable','Value','startValue','stopValue']]
                                                    table_row = table.iloc[:1]
                                                    html_table = table_row.to_html(index=False)
                                                    main_content = build_html_body_digital(variable_name,current_value,ist_current_time,html_table,user_id)
                                                    append_alert_csv(current_time,Id,template_name,f'On {x} for {variable_name}')
                                                    subject,recipients_list=fetch_mail_data(template_name)
                                                    send_mail(recipients_list,subject+" "+f'{variable_name}-Value Changed',main_content)
                                                    tag = temp_tag_df['variable'].iloc[0]
                                                    value = temp_tag_df['Value'].iloc[0]
                                                    for i in main_sms_df['email_address']:
                                                        contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                                                        email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                                                        count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                                                        if check_sms_log(contact_number,current_time,count)==True:
                                                            msg_status = send_sms(int(contact_number),tag,float(value),current_time, variable_name)
                                                            result= f'On {x} for {variable_name} has been triggered through sms for user {email_address}'
                                                            append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                                            print(f'{result} for template {template_name}')
                                                        else:
                                                            result= f'On {x} for {variable_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                                            print(f'{result} for template {template_name}')
                                                    return f'On {x} for {variable_name}'
                                                else:
                                                    return 'No need to send a mail as there is no change.' 
                    
                                else: return f'Snooze is on for {variable_name} for {snooze_time} min, tag_Id = {Id}'
                            elif x == 'Start Alert':
                                return f'Not an alert, but values are coming as True for {variable_name},Id={Id}'
                    else:
                        return f'Data is not coming for {temp_tag_df["variableName"].iloc[0]}'
                else:
                    return f'Timedelay not reached for {temp_tag_df["variableName"].iloc[0]}'
        
        # elif not digital_tag_df.empty and pd.isna(digital_tag_df['previous_value'].iloc[0]):
            # elif digital_tag_df['previous_value'].isna()[0] == True:
            #     temp_tag_df =df.copy()
            #     Id = temp_tag_df['variable'].iloc[0]
            #     return f'No change occured for digital tagId={Id} for template {template_name} in Trend Violation'
        else:
            temp_tag_df =df.copy()
            Id = temp_tag_df['variable'].iloc[0]
            print(f'No change occured for digital tagId={Id} for template {template_name} in Trend Violation')
    except Exception as e:
        print(f'Exception occured while comparing digital tag in Trend Violation:{e}')

def exec_sp_with_pd(query,values=None):
    """
    This fucntion will returns the SMS details of the alert reciepients.

    Args:
        query (str): SP to fetch the SMS details the alert reciepients
        values (list, optional): Parameters for the SP if any.

    Returns:
        DataFrame with the details of the users.
    """


    try:

        driver= '{ODBC Driver 17 for SQL Server}'
        query=query
        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
        with pyodbc.connect(dbconnection) as conn:
            df=pd.read_sql(query,conn,params=values)
            conn.commit()
            return df
    except Exception as e:
        print(f'Error occured while running sql query={query},exception:{e}')

def extract_email_info(data):
    """
    This fucntion gets the email info of the alert reciepients from the template that confogured.
    """

    try:
        json_string=data['Parameters'].iloc[0].replace('@@@',',')
        json_obj=json.loads(json_string)
        sms_dict={'email_address':[]}
        for i in json_obj['smsRecepients']:
            for j,k in i.items():
                if j=='value':
                    sms_dict['email_address'].append(k)
        sms_df = pd.DataFrame(sms_dict)
        return sms_df
    except Exception as e:
        print(f'Error occured while extracting sms template in Trend Violation: {e}')

def extract_template(data):
    """
    This fucntion extracts the info from the parameters that configured in the template.

    Args:
        data (_type_): _description_

    Raises:
        Exception: _description_

    Returns:
        _type_: _description_
    """

    try:
        json_string=data['Parameters'].iloc[0].replace('@@@',',')
        json_obj=json.loads(json_string)
        json_obj.pop('smsRecepients')

        l1 = []
        d2={'variableName':[]}
        for i,j in json_obj.items():
            d2['variableName'].append(i)
            for k,l in j.items():
                if k not in d2:
                    d2[k]=[l]
                else:
                    d2[k].append(l)
        return pd.DataFrame(d2)
    except Exception as e:
        raise Exception(f'Error occured while extracting template data in Trend Violation: {e}')

def template_execution(args):
    '''
    This function executes the templates
    '''
    try:
        para_df,current_time=args[:]
        template_name=para_df['TemplateName'].iloc[0]
        user_id = para_df['UserId'].iloc[0]

        parameters_df = extract_template(para_df)

        # Filter digital templates
        if parameters_df['uidType'].iloc[0]=='Digital':

            sms_df = extract_email_info(para_df)
            user_details_query = 'EXEC [Admin].[SP_user_details_SMSLimit]'
            user_df = fetch_data_from_SQL(user_details_query)
            main_sms_df = sms_df.merge(user_df[['Contact_No','UserID','SMS_Limit']],how="left",left_on='email_address',right_on='UserID')
            main_sms_df.rename(columns={"SMS_Limit":"count"},inplace=True)
            parameters_df.dropna(subset='timeDelay',inplace=True)
            # main_sms_df['Contact_No'] = 9398656511

            if len(parameters_df)==0:
                return "No parameters configured in the template."
            
            iot_time = max(parameters_df['timeDelay'].unique())

            if int(iot_time) < 120:
                iot_time = 120
            else:
                iot_time = int(iot_time)
                
            now = datetime.now(timezone.utc)
            start_time = now - timedelta(seconds=iot_time)
            end_time = now 
                    
            unique_tags = parameters_df['variable'].unique()
            #print(f"unique_tags: {unique_tags}")
            entries = []
            for tag in unique_tags:
                entries.append({
                    'entryId': str(uuid.uuid4()),
                    'propertyAlias': tag,
                    'startDate': start_time,
                    'endDate': end_time,
                    'qualities': ['GOOD'],
                    'timeOrdering': 'DESCENDING'
                })
            # print(f"entries: {entries}")
            id_to_alias = {entry['entryId']: entry['propertyAlias'] for entry in entries}

            iot_data = batch_get_asset_property_value_history(entries)
            # print(f"iot_data: {iot_data}")
            payload_data = []
            if not iot_data:
                print("No data returned from SiteWise.")
            else:
                for entry in iot_data:
                    alias = id_to_alias.get(entry['entryId'])  # Get the correct propertyAlias
                    history_list = entry.get('assetPropertyValueHistory', [])
                    if not history_list:
                        print(f"No history for entry: {entry.get('propertyAlias')}")
                        print(f"No history for entry: {entry.get('startDate')}")
                        print(f"No history for entry: {entry.get('endDate')}")
                    for history in history_list:
                        timestamp = history['timestamp']['timeInSeconds']   
                        value = (
                            history['value'].get('booleanValue')
                            or history['value'].get('doubleValue')
                            or history['value'].get('stringValue')
                            or history['value'].get('integerValue')
                        )
                        timestamp = datetime.fromtimestamp(timestamp, tz=timezone.utc)
                        payload_data.append({
                            'Id': alias,
                            'Timestamp': timestamp,
                            'Value': value
                        })
            print(f"Payload data: {payload_data}")

            iot_df = pd.DataFrame(payload_data)
            merge_df = parameters_df.merge(iot_df[['Id', 'Timestamp', 'Value']],
                                           left_on='variable', right_on='Id', how='left')
            # print(f"merge_df:{merge_df} ")

            for i in merge_df['variableName'].unique():
                single_template = merge_df.loc[merge_df['variableName'] == i]
                # print(f"single_template: {single_template}")
                uid_type = single_template['uidType'].iloc[0]
                if single_template['Value'].isnull().values.all():
                    print(f'No data for {i} for template {template_name}')

                elif uid_type == 'Digital':
                    digital_tag = single_template['variable'].iloc[0]
                    digital_start_time = now - timedelta(hours=1)

                    tick = tm.time()
                    digital_change_tag_df = get_digital_changes_from_sitewise(digital_tag, digital_start_time, end_time)
                    tock = tm.time()
                    print(f'Time taken by SiteWise digital change fetch: {tock - tick}')
                    # print(f"digital_change_tag_df: {digital_change_tag_df.columns.tolist()}")
                    digital_change_tag_df.sort_values(by='Timestamp', ascending=False, inplace=True)
                    
                    print(f"single_template: {single_template.to_string()}")
                    print(f"current_time: for {digital_tag} is {current_time}")
                    print(f"template_name: for {digital_tag} is {template_name}")
                    print(f"main_sms_df:for {digital_tag} is {main_sms_df.to_string()}")
                    print(f"digital_change_tag_df:for {digital_tag} is {digital_change_tag_df.to_string()}")
                    result = compare_digital_tag(single_template, current_time, template_name, user_id,
                                                 main_sms_df, digital_change_tag_df)
                    
                    print(f'{result} for template {template_name}')
            return f'Successfully executed {template_name}'
        else:
            return ('uidType should be Digital.')
    except Exception as e:
        print(f'Error occured for template {template_name} in Trend Violation: {e}')

