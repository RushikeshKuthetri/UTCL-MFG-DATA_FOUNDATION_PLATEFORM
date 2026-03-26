import uuid
import pandas as pd
import json,requests
import numpy as np
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
        # print("My data:", data)
    return data

def exec_sp_with_pd(query,values=None):
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

def send_sms(mobile_no, tag, value, now, parameter_name):
    try:
        now = datetime.utcnow()  # UTC time
        now_ist = now + timedelta(minutes=330)
        now_str = now_ist.strftime('%d-%m-%y %H:%M:%S')
        # now_str = datetime.strftime(now, '%d-%m-%y %H:%M:%S')
        url = "http://10.1.56.65/RTISMSApp/MessageService/SMSMsg/ProcessSMS"

        payload = json.dumps([
            {
                "DOC_NO": "202306201044",
                "DOC_TYPE": "MFG-I4",
                "SMS_MSG": f"i4 Alert: {parameter_name} Value is: {value} -From AWS Date: {now_str} Please check -Ultratech",
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


def build_html_body(parameter_name,parameter_value,current_datetime,time_delay,html_table,user_id):
    try:
        return f'''<strong>Description:</strong><br>
            Following information is generated by automated system.<br>
            <strong>{parameter_name} goes above {parameter_value} at {datetime.strftime(current_datetime,'%Y/%m/%d %H:%M:%S')} for more than {time_delay} minutes Duration.</strong><br>
            Critical parameters listed below with its instantaneous value when the exception has been raised. For reference, please use the below link.
            <a href='https://i4.utclconnect.com'></a><br>
            {html_table}<br>
            <strong>This mail has been scheduled by {user_id}</strong>
        '''
    except Exception as e:
        print(f'Exception occured while building html body in Trend Violation:{e}')

def build_html_body_for_lower_limits(parameter_name,parameter_value,current_datetime,time_delay,html_table,user_id):
    try:
        return f'''<strong>Description:</strong><br>
            Following information is generated by automated system.<br>
            <strong>{parameter_name} goes below {parameter_value} at {datetime.strftime(current_datetime,'%Y/%m/%d %H:%M:%S')} for more than {time_delay} minutes Duration.</strong><br>
            Critical parameters listed below with its instantaneous value when the exception has been raised. For reference, please use the below link.
            <a href='https://i4.utclconnect.com'></a><br>
            {html_table}<br>
            <strong>This mail has been scheduled by {user_id}</strong>
        '''
    except Exception as e:
        print(f'Exception occured while building html body in Trend Violation:{e}')

def build_html_body_for_lower_limits_flyash(parameter_name,parameter_value,current_datetime,time_delay,html_table,user_id):
    try:
        return f'''<strong>Description:</strong><br>
            Following information is generated by automated system.<br>
            <strong>{parameter_name} goes below {parameter_value}% at {datetime.strftime(current_datetime,'%Y/%m/%d %H:%M:%S')} for more than {time_delay} minutes Duration.</strong><br>
            Critical parameters listed below with its instantaneous value when the exception has been raised. For reference, please use the below link.
            <a href='https://i4.utclconnect.com'></a><br>
            {html_table}<br>
            <strong>This mail has been scheduled by {user_id}</strong>
        '''
    except Exception as e:
        print(f'Exception occured while building html body in Trend Violation:{e}')

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

def current_day_start_and_end_time(current_time):
    try:
        start_time=datetime.strptime(datetime.strftime(current_time,'%y-%m-%d'),'%y-%m-%d')
        end_time = start_time.replace(hour=23,minute=59)
        return pd.Timestamp(start_time,tz="UTC"),pd.Timestamp(end_time,tz="UTC")
    except Exception as e:
        print(f'Exception occured while fetching current day start time and end time:{e}')

def compare_trend(df,current_time,template_name,user_id,main_sms_df):
    try:
        temp_tag_df =df.copy()
        ist_current_time = current_time + timedelta(minutes=330)
        parameter_name = temp_tag_df['variableName'].iloc[0]
        time_delay = temp_tag_df['timeDelay'].iloc[0]
        if 'snoozeTime' not in temp_tag_df.columns:snooze_time = 10
        else: snooze_time = int(temp_tag_df['snoozeTime'].iloc[0])
        Id = temp_tag_df['variable'].iloc[0]
        alert_type = temp_tag_df['alertType'].iloc[0]
        if int(time_delay) < 4:
            time_delay = 4
        else:
            time_delay = time_delay
        time_ago = current_time - timedelta(minutes=int(time_delay))
        flag=temp_tag_df['alertFor'].iloc[0]
        # print(f"My required values: {time_delay} {Id} {alert_type} {time_delay} {time_ago} {flag}")
        # for index, ts in temp_tag_df['Timestamp'].items():
        #     print(f"Row {index}: {ts}")
        tag_accord_timestamp =  temp_tag_df.loc[temp_tag_df['Timestamp']>time_ago] # slicing wrt time delay
        print(f"tag_accord_timestamp: {tag_accord_timestamp}")
        if len(tag_accord_timestamp)==0:
            return f'No data for {parameter_name} within time delay of {time_delay} minutes'
        elif flag=='Hi-HiHi':
            hi_alert = np.where(tag_accord_timestamp['Value']>tag_accord_timestamp['Hi'].apply(float),1,0)
            hihi_alert = np.where(tag_accord_timestamp['Value']>tag_accord_timestamp['HiHi'].apply(float),1,0)
            print(f'Hi series:{hi_alert}\n HiHi series:{hihi_alert}')
            if hihi_alert.sum()==len(tag_accord_timestamp):
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['HiHi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered')
                        return f'HiHi Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            #print(contact_number)
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'HiHi Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'HiHi Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'HiHi Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['HiHi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered')   
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'HiHi Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'HiHi Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'HiHi Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            elif hi_alert.sum()==len(tag_accord_timestamp):
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['Hi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered')
                        return f'Hi Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Hi Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Hi Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'Hi Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['Hi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'Hi Alert for {parameter_name} has been triggered') 
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Hi Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Hi Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'Hi Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            else :
                #print('Inside else clause')
                return f'Everything is alright for {parameter_name}'
        elif flag=='Low-LowLow':
            low_alert=np.where(tag_accord_timestamp['Value']<tag_accord_timestamp['Low'].apply(float),1,0)
            lowlow_alert=np.where(tag_accord_timestamp['Value']<tag_accord_timestamp['LowLow'].apply(float),1,0)
            if lowlow_alert.sum()==len(tag_accord_timestamp):
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body_for_lower_limits(parameter_name,temp_tag_df['LowLow'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'LowLow Alert for {parameter_name} has been triggered')
                        return f'LowLow Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'LowLow Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'LowLow Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'LowLow Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body_for_lower_limits(parameter_name,temp_tag_df['LowLow'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-LowLow-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'LowLow Alert for {parameter_name} has been triggered') 
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'LowLow Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'LowLow Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'LowLow Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            elif low_alert.sum()==len(tag_accord_timestamp):
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body_for_lower_limits(parameter_name,temp_tag_df['Low'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'Low Alert for {parameter_name} has been triggered')
                        return f'Low Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Low Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Low Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'Low Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['Low'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'Low Alert for {parameter_name} has been triggered') 
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Low Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Low Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'Low Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            else :
                return f'Everything is alright for {parameter_name}'
        elif flag=='Both':
            hi_alert = np.where(tag_accord_timestamp['Value']>tag_accord_timestamp['Hi'].apply(float),1,0)
            hihi_alert = np.where(tag_accord_timestamp['Value']>tag_accord_timestamp['HiHi'].apply(float),1,0)
            low_alert=np.where(tag_accord_timestamp['Value']<tag_accord_timestamp['Low'].apply(float),1,0)
            lowlow_alert=np.where(tag_accord_timestamp['Value']<tag_accord_timestamp['LowLow'].apply(float),1,0)
            if hihi_alert.sum()==len(tag_accord_timestamp):
                #print('printing alert log',check_alert_log(current_time,Id,snooze_time))
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['HiHi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered') 
                        return f'HiHi Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status = send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'HiHi Alert for {parameter_name} has been triggered through sms  for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)  
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'HiHi Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'HiHi Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['HiHi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered') 
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status = send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'HiHi Alert for {parameter_name} has been triggered through sms  for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'HiHi Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'HiHi Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            elif hi_alert.sum()==len(tag_accord_timestamp):
                #print('here 2')
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['Hi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'Hi Alert for {parameter_name} has been triggered')   
                        return f'Hi Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Hi Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Hi Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'Hi Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['Hi'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-High-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered') 
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status = send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'HiHi Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Hi Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'Hi Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            elif lowlow_alert.sum()==len(tag_accord_timestamp):
                #print('here 3')
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body_for_lower_limits(parameter_name,temp_tag_df['LowLow'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'LowLow Alert for {parameter_name} has been triggered') 
                        return f'LowLow Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status = send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'LowLow Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)  
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'LowLow Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'LowLow Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['LowLow'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Critical',main_content)
                        append_alert_csv(current_time,Id,template_name,f'LowLow Alert for {parameter_name} has been triggered') 
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'LowLow Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'LowLow Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'LowLow Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            elif low_alert.sum()==len(tag_accord_timestamp):
                #print('here 3')
                if check_alert_log(current_time,Id,snooze_time)==False:
                    if alert_type=='Email':
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body_for_lower_limits(parameter_name,temp_tag_df['Low'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'HiHi Alert for {parameter_name} has been triggered')
                        return f'Low Alert for {parameter_name} has been triggered'
                    elif alert_type=='SMS':
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Low Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result) 
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Low Alert for {parameter_name} has been triggered but count value exceeded for{email_address}'
                                print(f'{result} for template {template_name}')
                        return f'Low Alert for {parameter_name} has been triggered'
                    elif alert_type=='Both':
                        # In both alert cases we will only append log when we are sending sms
                        table=temp_tag_df[['variableName','Value']].copy()
                        table['Value'] = table['Value'].round(2)  # Round to 2 decimal places
                        table_row = table.iloc[:1]
                        html_table = table_row.to_html(index=False)
                        main_content=build_html_body(parameter_name,temp_tag_df['Low'].iloc[0],ist_current_time,time_delay,html_table,user_id)
                        subject,recipients_list=fetch_mail_data(template_name)
                        send_mail(recipients_list,subject+" "+f'{parameter_name}-Low-Major',main_content)
                        append_alert_csv(current_time,Id,template_name,f'Low Alert for {parameter_name} has been triggered')
                        tag = temp_tag_df['variable'].iloc[0]
                        value = temp_tag_df['Value'].iloc[0]
                        for i in main_sms_df['email_address']:
                            contact_number = main_sms_df.loc[main_sms_df['email_address']==i,'Contact_No'].iloc[0]
                            email_address = main_sms_df.loc[main_sms_df['email_address']==i,'email_address'].iloc[0]
                            count = main_sms_df.loc[main_sms_df['email_address']==i,'count'].iloc[0]
                            if check_sms_log(contact_number,current_time,count)==True:
                                msg_status=send_sms(int(contact_number),tag,float(value),current_time, parameter_name)
                                result= f'Low Alert for {parameter_name} has been triggered through sms for user {email_address}'
                                append_sms_log(current_time,template_name,user_id,email_address,msg_status,contact_number,tag,result)
                                print(f'{result} for template {template_name}')
                            else:
                                result= f'Low Alert for {parameter_name} has been triggered but count value exceeded for{email_address} but sent via mail'
                                print(f'{result} for template {template_name}')
                        return f'Low Alert for {parameter_name} has been triggered'
                else: return f'Snooze is on for {parameter_name} for {snooze_time}, tag_Id = {Id}'
            else :
                return f'Everything is alright for {parameter_name}'
    except Exception as e:
        print(f'Exception occured while comparing non-vibration data in Trend Violation:{e}')

def extract_template(data):
    try:
        json_string=data['Parameters'].iloc[0].replace('@@@',',')
        json_obj=json.loads(json_string)
        json_obj.pop('smsRecepients')
        #print(type(json_obj))
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

def extract_sms_template(data):
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

        
        # append_alert_csv(Timestamp, tag, template_name, alert)

    except ClientError as e:
        print(f'Error occurred while appending to DynamoDB SMS log: {e}')


def fetch_mail_data(template_name):
    try:
        # mail_template_query = f'Utcl_Fan_Efficiency_MailAlerts| where UseCaseTemplate=="{template_name}"'
        # mail_template_df = connect_ADX_with_AAD_application_key_auth(mail_template_query)
        
        mail_template_query = f"select * from [dbo].[CBM_EmailTemplates] where UseCaseTemplate = '{template_name}'"
        mail_template_df = fetch_template_info(mail_template_query)

        use_case_mail_template = mail_template_df.copy()
        recipients_string = use_case_mail_template['Recipients'].iloc[0]
        recipients_string = recipients_string.replace('@@@',',')
        recipients_list = recipients_string.split(',')
        subject = use_case_mail_template['Subject'].iloc[0]
        content = mail_template_df['Description'].iloc[0]
        return subject,recipients_list
    except Exception as e:
        print(f'Exception occured while fetching mail data and creating mail body for template {template_name}:{e}')

def template_execution(args):
    '''
    This function executes the templates
    '''
    try:
        para_df,current_time=args[:]
        template_name=para_df['TemplateName'].iloc[0]
        user_id = para_df['UserId'].iloc[0]
        parameters_df = extract_template(para_df)
        sms_df = extract_sms_template(para_df)
        user_details_query = 'EXEC [Admin].[SP_user_details_SMSLimit]'
        user_df = exec_sp_with_pd(user_details_query)
        main_sms_df = sms_df.merge(user_df[['Contact_No','UserID','SMS_Limit']],how="left",left_on='email_address',right_on='UserID')
        main_sms_df.rename(columns={"SMS_Limit":"count"},inplace=True)
        parameters_df.dropna(subset='timeDelay',inplace=True)
        if len(parameters_df)==0:
            return "No Timedelay so error"
        iot_time = max(parameters_df['timeDelay'].unique())
        # iot_time = str(iot_time)+'m'
        # if iot_time.startswith('0m') or iot_time.startswith('1m') or iot_time.startswith('2m'):
        if int(iot_time) < 4:
            iot_time = 4
        else:
            iot_time = int(iot_time)
            
        now = datetime.now(timezone.utc)
        start_time = now - timedelta(minutes=iot_time)
        end_time = now
        
        entries = []
        
        if len(parameters_df['variable'].unique())==1:
                singular_id = parameters_df['variable'].iloc[0]
                entries.append({
                    'entryId': str(uuid.uuid4()),
                    'propertyAlias': singular_id,
                    'startDate': start_time,
                    'endDate': end_time,
                    'qualities': ['GOOD'],
                    'timeOrdering': 'DESCENDING'
                     })
                # query = f'IotLiveData| where Timestamp > ago({iot_time})+330m and Id=="{singular_id}"|order by Timestamp desc'
                # print(f"entries: {entries}")
                id_to_alias = {entry['entryId']: entry['propertyAlias'] for entry in entries}
        elif len(parameters_df['variable'].unique())>=1: 
            tuple_of_ids = tuple(parameters_df['variable'].unique()) 
            for id in tuple_of_ids:
                    entries.append({
                        'entryId': str(uuid.uuid4()),
                        'propertyAlias': id,
                        'startDate': start_time,
                        'endDate': end_time,
                        'qualities': ['GOOD'],
                        'timeOrdering': 'DESCENDING'
                    }) 
            # print(f"entries: {entries}") 
            id_to_alias = {entry['entryId']: entry['propertyAlias'] for entry in entries}
            # tuple_of_ids = tuple(parameters_df['variable'].unique()) # To make sure we do not fetch unnecessary data
            # query = f'IotLiveData| where Timestamp > ago({iot_time})+330m and Id in {tuple_of_ids}|order by Timestamp desc'
        else:
            print('Exception occured while trend violation template execution, No variable or Iot tag passed in template')
            raise Exception('Exception occured while trend violation template execution, No variable or Iot tag passed in template')
        
        iot_data = batch_get_asset_property_value_history(entries)
        print(f"iot_data: {iot_data}")
        
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
        
        merge_df=parameters_df.merge(iot_df[['Id','Timestamp','Value']],left_on='variable',right_on='Id',how='left')
        # merge_df.to_csv('final_df.csv')
        for i in merge_df['variableName'].unique():
            single_template = merge_df.loc[merge_df['variableName']==i]
            uid_type = single_template['uidType'].iloc[0]
            print(f'single_template uid type: {uid_type}')
            if single_template['Value'].isnull().values.all():
                # print(single_template[['Timestamp', 'Value']])
                print(f'No data for {i} for template {template_name}')
            elif uid_type=='Analog':
                result=compare_trend(single_template,current_time,template_name,user_id,main_sms_df)
                
                print(f'{result} for template {template_name}')
        return f'Successfully executed {template_name}'
    except Exception as e:
        print(f'Error occured for template {template_name} in Trend Violation:{e}')


def fetch_template_info(query) -> pd.DataFrame:

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
            raise Exception(f'Error occurred while fetching the template info.')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')
    
    


