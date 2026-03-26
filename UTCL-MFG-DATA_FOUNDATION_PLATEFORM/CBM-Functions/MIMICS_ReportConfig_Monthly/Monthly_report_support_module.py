import json,requests,base64
from datetime import datetime,timedelta
import pandas as pd
import Function_def
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

def send_mail(receiver_id,subject,content,attachment_bytes):
    print('inside send mail function')
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
        print(f'mail response ==> {response}')
    except Exception as e:
        print(f'Error while sending mail:{e}')

def fix_columns(df):
    '''
    This is for report dataframe modification. It separates the description and tag id and return
    a modified df
    '''
    columns = df.columns
    print(f'columns ==> {columns}')
    columns_id = [column.split(' Desc- ')[0] for column in columns ]
    print(f'columns_id ==> {columns_id}')
    #columns_desc = [column.split(' Desc- ')[1] if column!='Timestamp' else 'Description' for column in columns ]
    columns_desc = [
        column.split(' Desc- ')[1] if ' Desc- ' in column else 'Description' if column == 'Timestamp' else column
        for column in columns
    ]
    print(f'columns_desc ==> {columns_desc}')
    d = dict(zip(df.columns,columns_id))
    df=df.rename(columns = d)
    desc_d = {column : desc for column,desc in zip(df.columns,columns_desc)}
    modified_df = pd.concat([pd.DataFrame(desc_d, index=[0]), df]).reset_index(drop=True)
    return modified_df

def time_to_seconds(time_str):
    hours, minutes, seconds = map(int, time_str.split(':'))
    total_seconds = (hours * 3600) + (minutes * 60) + seconds
    return total_seconds

def run_monthly_trigger(args):
    try:
        print('inside run monthly trigger function')
        report_parameters_df, template_name, current_time = args[:]
        single_template = report_parameters_df.loc[report_parameters_df['ReportTemplateName'] == template_name]
        end_date_str = datetime.strftime(current_time - timedelta(days=1), '%Y-%m-%d')  # it is current_date - 1 day
        end_date_utc = pd.Timestamp(datetime.strptime(end_date_str, '%Y-%m-%d'), tz='UTC')  # it is current_date - 1 day in UTC
        # Ensure start_time is timezone-aware (UTC in this case)
        start_time = single_template['StartDate'].iloc[0]
        if start_time.tzinfo is None:
            start_time = pd.Timestamp(start_time, tz='UTC')  # Convert to UTC timezone if it's naive
 
        print(f'start_time ==> {start_time}')
        print(f'end_date_utc ==> {end_date_utc}')
        print(f'date_difference total seconds = {(end_date_utc - start_time).total_seconds()}')
 
        if end_date_utc > start_time:
            # Find the date difference
            date_difference = end_date_utc - start_time  # the template start date subtracted by current date - 1
            print(f'date_difference.total_seconds() % (30 * 24 * 3600) ==> {date_difference.total_seconds() % (30 * 24 * 3600)}')
            # If the date difference is divisible by a week's worth of seconds, we can start the remaining portion
            if date_difference.total_seconds() % (30 * 24 * 3600) == 0:
                # Now we have to take the start date with respect to our end date
                new_start_time = end_date_utc - timedelta(days=30)
                start_time_str = datetime.strftime(new_start_time, '%Y-%m-%d %H:%M:%S')  # this is for the report
                end_time_str = datetime.strftime(end_date_utc + timedelta(hours=23, minutes=59), '%Y-%m-%d %H:%M:%S')  # Here we are adding extra time to cover that 23 hours of the day
                tags_string = single_template['Tags'].iloc[0]
                new_tags_string = tags_string.replace('@@@', ',')
                plant_name = single_template['Plant'].iloc[0]
                interval = single_template['Interval'].iloc[0]
                if isinstance(interval, str):
                    interval = pd.to_timedelta(interval)
                print(f'interval ==> {interval}')
                interval_seconds = interval.total_seconds()
                print(f'interval_seconds ==> {interval_seconds}')
                mail_time = single_template['MailTime'].iloc[0]
                report_owner = single_template['UserId'].iloc[0]
                mail_time_str = datetime.strftime(mail_time, '%H')
                current_hour_str = datetime.strftime(current_time, '%H')
                recipients_string = single_template['Recipients'].iloc[0]
                recipients_string = recipients_string.replace("@@@", ",")
                recipients_list = recipients_string.split(',')
                interval_seconds = f'{interval_seconds}s'
                print(f'mail_time_str ==> {mail_time_str}')
                print(f'current_hour_str ==> {current_hour_str}')
                if mail_time_str == current_hour_str:
                    report_df = Function_def.Fn_CBM_UidWiseAvg_DataPagination_Yesterday_Scheduler(new_tags_string, start_time_str, end_time_str, interval_seconds, plant_name, plant_name)
                    # report_df = connect_ADX_with_AAD_application_key_auth(report_query)
                    report_df = report_df.sort_values(by='Timestamp')
                    print(f'report_df after sortinig by timestamp ==> {report_df}')
                    report_df = fix_columns(report_df)
                    print(f'report_df after fix columns ==> {report_df}')
                    encode_utf = report_df.to_csv(index=False).encode('utf-8')
                    print('encoding csv successful')
                    base64_encode = base64.b64encode(encode_utf)
                    send_mail(recipients_list, f'Monthly Report for {template_name}', f'This is an automated Report Scheduled by {report_owner}', base64_encode.decode('utf-8'))
                    return 1
                else:
                    return 0
    except Exception as e:
        print(f'Exception occurred while running monthly trigger for template {template_name}: {e}')

