import json,requests
import pandas as pd
import numpy as np
from datetime import datetime, timedelta, timezone
import pyodbc
import boto3
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

custom_alerts_usecase = os.getenv("custom_alerts_usecase")

def fetch_mail_template_info(query) -> pd.DataFrame: 
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
            raise Exception(f'SapBlaine data is not available for the give parameters.')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')

def fetch_recent_live_data(tag_list: tuple, time_delay_minutes: int, plantCode):
    dynamodb=boto3.resource('dynamodb',region_name='ap-south-1')
    sitewise=boto3.client('iotsitewise', region_name='ap-south-1')
    end_time=datetime.now(timezone.utc)
    start_time=end_time-timedelta(minutes=(time_delay_minutes))
    table=dynamodb.Table(f"{plantCode}_TagMaster")
    result={}
    for tag_uid in tag_list:
        if tag_uid=='null' or tag_uid=='Null' or tag_uid==None:
            continue
        response=table.query(
            IndexName='Tag-UID-index',
            KeyConditionExpression=Key('Tag UID').eq(tag_uid),
            FilterExpression=Attr('Plant').eq(plantCode)
        )
        items=response.get('Items',[])
        print(f'items: {items}')
        if not items:
            result[tag_uid]=None
            continue
        mapping=items[0]
        asset_id=mapping.get('AssetID')
        property_id=mapping.get('PropertyID')
        if not asset_id or not property_id:
            result[tag_uid]=None
            continue
        try:
            sitewise_response=sitewise.get_asset_property_value_history(
                assetId=asset_id,
                propertyId=property_id,
                startDate=int(start_time.timestamp()),
                endDate=int(end_time.timestamp()),
                timeOrdering='DESCENDING'
            )
            datapoints=sitewise_response.get('assetPropertyValueHistory', [])
            result[tag_uid]=[
                {
                    'timestamp':dp['timestamp']['timeInSeconds'],
                    'value':dp['value'].get('doubleValue') or dp['value'].get('stringValue') or dp['value'].get('integerValue'),
                    'quality':dp['quality']
                }
                for dp in datapoints
            ]
        except Exception as e:
            result[tag_uid]=None
    print(f"Result: {result}")
    flat_data = []

    for tag, entries in result.items():
        if entries is None:
            continue
        for entry in entries:
            flat_entry = {
                "Id": tag,
                "timestamp": entry["timestamp"],
                "Value": entry["value"],
                "quality": entry["quality"]
            }
            flat_data.append(flat_entry)
    df=pd.DataFrame(flat_data)
    print(df.head())
    return df

def fetch_alert_log(template_name, snooze_time):
    print('FETCHING DATA FROM DYNAMO!')
    end_time = datetime.now(timezone.utc)
    print(f'end_time: {end_time}')
    snooze_time=int(snooze_time)
    print(type(snooze_time))
    start_time = end_time - timedelta(minutes=snooze_time)
    print(f'start time: {start_time}')
    start_time_str = start_time.strftime("%Y-%m-%d %H:%M:%S.%f")[:-2]
    print(f'start time str: {start_time_str}')


    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    alerts_table = dynamodb.Table(custom_alerts_usecase)

    try:
        response = alerts_table.query(
            KeyConditionExpression=Key('TemplateName').eq(template_name) & Key('Timestamp').gt(start_time_str),
        )
        items = response.get('Items', [])
        print(f'items: {items}')
    except Exception as e:
        print(f"Error fetching from DynamoDB: {e}")
        items = []
    if items==[]:
        return pd.DataFrame()
    sorted_items = sorted(items, key=lambda x: x['Timestamp'], reverse=True)
    print(f'sorted items: {sorted_items}')
    return pd.DataFrame(sorted_items)

def insert_custom_alert(timestamp,ids, template_name: str, variable_name: str, status: str,snooze):
    dynamodb=boto3.resource('dynamodb', region_name='ap-south-1')
    table=dynamodb.Table(custom_alerts_usecase)
    dt_obj=timestamp.strftime('%Y-%m-%d %H:%M:%S.%f')[:-2]
    print(f'dt obj: {dt_obj}')
    item={
        'Timestamp': dt_obj,
        'TemplateName': template_name,
        'Variables': variable_name,
        'IDs': ids,
        'Status': status
    }
    print('adding data in table')
    try:
        response = table.put_item(Item=item)
        print("PutItem succeeded:", response)
    except Exception as e:
        print("Error inserting into DynamoDB:", e)

def send_mail(receiver_id,subject,content):
    url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"    
    payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'   
    headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-OwAuFMGEdo_0W9HMj9twz4sMQXiF5hUKLgtJmmoBlu7xbcr_mEMWYUvBtdGg4uob8s0vaKLmWVQhUNqLuWQOxurC-f5V2C93LZoHaSiRn5qEBQN6xz2mGpIe2IONnSGXRXjyNw_oX-aGz57Ie1xI3E5EW0Rgp-0eH3XycD4crWggAA; fpc=AoltCTxR5_JHpboAlqmSyd3rsbxaAgAAAKLVUt0OAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
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
        "content": content        },
        "toRecipients": l    },
    "saveToSentItems": "false"    })
    
    headers = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + access_token    }
    try :
        response = requests.request("POST", url, headers=headers, data=payload)
    except Exception as e:
        return f'Exception occured while sending mail:{e}'

def extract_template(data):
    try:
        json_string=data['Parameters'].replace('@@@',',')
        json_obj=json.loads(json_string)
        #json_obj.pop('smsRecepients')
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
        raise Exception(f'Error occured while extracting template data in Custom Alerts: {e}')

def extract_template_test(data:dict):
    try:
        parameters = data['Parameters']
        parameters.pop('smsRecepients')
        temp_dict = {'variableName':[]}
        for i,j in parameters.items():
            temp_dict['variableName'].append(i)
            for k,l in j.items():
                if k not in temp_dict:
                    temp_dict[k]=[l]
                else:
                    temp_dict[k].append(l)
        return pd.DataFrame(temp_dict)
    except Exception as e:
        raise Exception(f'Error occured while extracting template data in Custom Alerts: {e}')

def extract_tags(data:pd.Series):
    try:
        tagType1=data['TagType1']
        tagType2=data['TagType2']
        all_tags = []
        tags_info = {'tagType':[],'tagTypeDetails':[],'tag':[],'tagLabel':[],'duplicate':[]}
        tags_info['tagType'] = ['tagType1']*4+['tagType2']*4
        for i in tagType1:
            for j,k in i.items():
                if j.startswith('tag'):
                    tags_info['tagTypeDetails'].append(j)
                    if k!='':
                        tags_info['tag'].append(k)
                        if k not in all_tags:
                            all_tags.append(k)
                            tags_info['duplicate'].append(0)
                        else:
                            tags_info['duplicate'].append(1)
                    else:
                        tags_info['tag'].append(np.nan)
                        tags_info['duplicate'].append(1)
                elif j.startswith('label'):
                    if k!='':
                        tags_info['tagLabel'].append(k)
                    else:
                        tags_info['tagLabel'].append(np.nan)
                else:
                    raise Exception(f'There should only be "tag1" types or "label" types')
            
        for i in tagType2:
            for j,k in i.items():
                if j.startswith('tag'):
                    tags_info['tagTypeDetails'].append(j)
                    if k!='':
                        tags_info['tag'].append(k)
                        if k not in all_tags:
                            all_tags.append(k)
                            tags_info['duplicate'].append(0)
                        else:
                            tags_info['duplicate'].append(1)
                    else:
                        tags_info['tag'].append(np.nan)
                        tags_info['duplicate'].append(1)
                elif j.startswith('label'):
                    if k!='':
                        tags_info['tagLabel'].append(k)
                    else:
                        tags_info['tagLabel'].append(np.nan)
                else:
                    raise Exception(f'There should only be "tag1" types or "label" types')
        tags_df = pd.DataFrame(tags_info)
        return tuple(all_tags), tags_df[tags_df['duplicate']==0]
    except Exception as e:
        raise Exception(f'Error occured while extracting template data in Custom Aleerts: {e}')

def fetch_mail_data(template_name):
    try:
        mail_template_query = f"select * from [dbo].[CBM_EmailTemplates] where UseCaseTemplate = '{template_name}'"
        mail_template_df = fetch_mail_template_info(mail_template_query)
        print(f'inside fetch_mail_data, mail_template_df: {mail_template_df}')
        
        use_case_mail_template = mail_template_df.copy()
        recipients_string = use_case_mail_template['Recipients'].iloc[0]
        recipients_string = recipients_string.replace('@@@',',')
        recipients_list = recipients_string.split(',')
        #recipients_list=['pgupta69@deloitte.com']
        subject = use_case_mail_template['Subject'].iloc[0]
        return subject,recipients_list
    except Exception as e:
        raise Exception(f'Exception occured while fetching mail data and creating mail body for template {template_name}:{e}')

def create_merged_df(data:pd.DataFrame,timeDelay:int,tagList:tuple,plantCode:str):
    try:
        # custom query for RAWAN Timestamp Issue
        if plantCode=='RWCW':
            # query = f"IotLiveData | where Timestamp > ago({timeDelay}m)+330m and Id in {tagList} | order by Timestamp desc"
            iotData=fetch_recent_live_data(tagList, timeDelay, plantCode)
        else:
            # query = f"IotLiveData | where Timestamp > ago({timeDelay}m)+330m and Id in {tagList} | order by Timestamp desc"
            iotData=fetch_recent_live_data(tagList, timeDelay, plantCode)
        print(f'iotData: {iotData}')
        # iotData = connect_ADX_with_AAD_application_key_auth(query)
        mergeDf = data.merge(iotData[['Id','Value']],left_on='tag',right_on='Id')
        mergeDf.drop(columns=['Id','duplicate'],inplace=True)
        # Additional steps of creating average of each tags
        column_list = list(mergeDf.columns)
        _ = pd.DataFrame({},columns=column_list)
        tagType1 = mergeDf[mergeDf['tagType']=='tagType1']
        unique_tags = tagType1['tagTypeDetails'].unique()
        # creating main data for calculation for tagtype 1 and 2
        for i in unique_tags:
            temp = tagType1[tagType1['tagTypeDetails']==i]
            avg_value = temp['Value'].mean()
            tagtype = temp['tagType'].iloc[0]
            tagtypedetails = temp['tagTypeDetails'].iloc[0]
            tag = temp['tag'].iloc[0]
            label = temp['tagLabel'].iloc[0]
            s = pd.Series([tagtype,tagtypedetails,tag,label,avg_value],index=column_list)
            s = pd.DataFrame([s],columns=column_list)
            _=pd.concat([_,s])
        tagType2 = mergeDf[mergeDf['tagType']=='tagType2']
        unique_tags = tagType2['tagTypeDetails'].unique()
        for i in unique_tags:
            temp = tagType2[tagType2['tagTypeDetails']==i]
            avg_value = temp['Value'].mean()
            tagtype = temp['tagType'].iloc[0]
            tagtypedetails = temp['tagTypeDetails'].iloc[0]
            tag = temp['tag'].iloc[0]
            label = temp['tagLabel'].iloc[0]
            s = pd.Series([tagtype,tagtypedetails,tag,label,avg_value],index=column_list)
            s = pd.DataFrame([s],columns=column_list)
            _=pd.concat([_,s])
        
        return _

    except Exception as e:
        raise Exception(f'Exception occured while creating mergedf,exception:{e}')

def apply_logic(merge_df:pd.DataFrame,adjustment:str,low:str,variableName:str):
    try:
        tagtype1sum = merge_df.loc[merge_df['tagType']=='tagType1','Value'].sum()
        tagtype2sum = merge_df.loc[merge_df['tagType']=='tagType2','Value'].sum()
        if (tagtype1sum>50) and (tagtype2sum>5):
            if adjustment.startswith('-'):
                adj = float(adjustment.lstrip('-'))
                adjustedTagType2 = tagtype2sum - adj/100
                perc = (adjustedTagType2/tagtype1sum)*100
                if perc<float(low):
                    return (True,perc)
                else: return (False,perc)
                
            else:
                adj = float(adjustment)
                adjustedTagType2 = tagtype2sum + adj/100
                perc = (adjustedTagType2/tagtype1sum)*100
                if perc<float(low):
                    return (True,perc)
                else: return (False,perc)
        else: return (False,0)
    except Exception as e:
        raise Exception(f'{e}')

def check_alert_log(templateName:str,variableName:str,snoozeTime):
    try:
        # query = f"Custom_Alerts_Usecase|where Timestamp>ago({snoozeTime}m)+330m and TemplateName=='{templateName}'|order by Timestamp desc"
        # df=connect_ADX_with_AAD_application_key_auth(query)
        df=fetch_alert_log(templateName, snoozeTime)
        print(f'df: {df}')
        if df.empty or 'Variables' not in df.columns:
            return True
        elif variableName in df['Variables'].unique():
            return False
        else:
            return True

    except Exception as e:
        raise Exception(f'Exception occured while checking log in Custom Alert module,{e}')

def append_alert(timestamp:pd.Timestamp,ids:str,templateName:str,variableName:str,status:str,snoozeTime:str):
    try:
        print('append alert func called')
        insert_custom_alert(timestamp,ids, templateName, variableName, status,snoozeTime)
        print('data added')
        return f"Alert triggered for {templateName}-{variableName}"
    except Exception as e:
        raise Exception(f"Exception occured while adding alert log for {templateName}-{variableName},exception:{e}")

def build_html_body(parameter_name,parameter_value,current_datetime,time_delay,perc,html_table,user_id):
    try:
        return f'''<strong>Description:</strong><br>
            Following information is generated by automated system.<br>
            <strong>{parameter_name} goes below {parameter_value}% at {datetime.strftime(current_datetime,'%Y/%m/%d %H:%M:%S')} for more than {time_delay} minutes Duration.</strong><br>
            <strong> Current percentage is at {perc:.2f}% .</strong><br>
            Critical parameters listed below with its instantaneous value when the exception has been raised. For reference, please use the below link.
            <a href='https://i4.utclconnect.com'></a><br>
            {html_table}<br>
            <strong>This mail has been scheduled by {user_id}</strong>
        '''
    except Exception as e:
        raise Exception(f'Exception occured while building html body in Custom ALerts Module:{e}')

def run_template(args:list):
    try:
        data,dateTime = args[:]
        print(f'data: {data}')
        print(f'datetime: {dateTime}')
        templateName = data['TemplateName']
        print(f'template name: {templateName}')
        userId = data['UserId']
        print(f'user id: {userId}')
        plantGenericCode = data['PlantName']
        print(f'plant generic code: {plantGenericCode}')
        dt = dateTime
        main_df = extract_template(data)
        print(f'main df: {main_df}')
        for i in range(len(main_df)):
            oneVariable = main_df.iloc[i]
            print(f'one variable: {oneVariable}')
            all_tags,tags_df=extract_tags(oneVariable)
            print(f'all tags: {all_tags}')
            print(f'tags_df: {tags_df}')
            timeDelay = int(oneVariable['timeDelay'])
            print(f'time delay: {timeDelay}')
            mergeDf=create_merged_df(tags_df,timeDelay,all_tags,plantGenericCode)
            print(f'mergeDf: {mergeDf}')
            adjustment = oneVariable['Adjustment']
            low = oneVariable['Low']
            variable = oneVariable['variableName']
            snooze = oneVariable['snoozeTime']
            alertBool,perc=apply_logic(mergeDf,adjustment,low,variable)
            print(f'for {templateName},{variable} the alert is {alertBool} and the percentage is {perc}')
            if alertBool:
                print('inside if block')
                subject,recipientList=fetch_mail_data(templateName)
                print(f'{subject}')
                print(f'{recipientList}')
                mail_df = mergeDf.copy()
                print(f'merge df1: {mail_df}')
                mail_df.drop(columns=['tagType','tagTypeDetails'],inplace=True)
                mail_df.rename({'tag':'Tags','tagLabel':'Tag Names'},axis='columns',inplace=True)
                body=build_html_body(variable,low,dt,timeDelay,perc,mail_df.to_html(index=False),userId)
                print(f'{body}')
                if check_alert_log(templateName,variable,snooze):
                    print(f'Inside second if of {templateName}')
                    send_mail(recipientList,subject,body)
                    print(list(enumerate(mergeDf['tag'])))
                    _ = ''
                    for i,j in enumerate(mergeDf['tag']):
                        _+=j
                        if i+1<len(mergeDf):
                            _+='@@@'
                            print(_)
                    print(f'final string: {_}')
                    append_alert(dt,_,templateName,variable,f"Low alert for {templateName}-{variable}",snooze)
                    return f"Alert for custom alert template {templateName}-{variable}"
                else: return f"Snooze is on for custom alert template {templateName}-{variable}"
            else: return f"No alert for custom alert module template {templateName}-{variable}"
    except Exception as e:
        raise Exception(f'Exception occured while running the main template for Custom ALerts,{e}')


   
   
   



    

   


   
   
