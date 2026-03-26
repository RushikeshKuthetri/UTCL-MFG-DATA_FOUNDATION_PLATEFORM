import datetime
import os
import pandas as pd
import numpy as np
import requests,json
import time
import pyodbc
import boto3
from boto3.dynamodb.conditions import Attr,Key
from typing import Dict
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

utcl_cbm_fan_efficiency = os.getenv("utcl_cbm_fan_efficiency")
cbm_mail_logs = os.getenv("cbm_mail_logs")

def fetch_mail_template_info(query) -> pd.DataFrame:

    driver= '{ODBC Driver 17 for SQL Server}'

    # dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
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


def fetch_template_info(query) -> pd.DataFrame:
  
    driver= '{ODBC Driver 17 for SQL Server}'

    # dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:

                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            raise Exception(f'Error occurred while fetching the template info: {e}')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')

def sitewise_query_execute(plant_name, start_time, end_time, tag_list):
    dynamodb=boto3.resource('dynamodb',region_name='ap-south-1')
    sitewise=boto3.client('iotsitewise', region_name='ap-south-1')
    table=dynamodb.Table(f"{plant_name}_TagMaster")
    result={}
    for tag_uid in tag_list:
        if tag_uid=='null' or tag_uid=='Null' or tag_uid==None:
            continue
        response=table.query(
            IndexName='Tag-UID-index',
            KeyConditionExpression=Key('Tag UID').eq(tag_uid),
            FilterExpression=Attr('Plant').eq(plant_name)
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
                "tag": tag,
                "timestamp": entry["timestamp"],
                "value": entry["value"],
                "quality": entry["quality"]
            }
            flat_data.append(flat_entry)
    df=pd.DataFrame(flat_data)
    print(df.head())
    df.rename(columns={'tag': 'Id'}, inplace=True)
    df.rename(columns={'value': 'Value'}, inplace=True)
    print(df.head())
    return df

def query_dynamodb(template_name,start_time=None, end_time=None, cutoff_time=None):
    if template_name == None:
        raise ValueError("no template name received")
    dynamodb=boto3.client('dynamodb',region_name='ap-south-1')
    if cutoff_time:
        time_expr="#ts > :cutoff"
        expr_values={
            ':tmpl': {'S': template_name},
            ':cutoff': {'S': str(int(cutoff_time.timestamp()))}
        }
    elif start_time and end_time:
        time_expr="#ts BETWEEN :start AND :end"
        expr_values={
            ':tmpl': {'S': template_name},
            ':start': {'S': str(int(start_time.timestamp()))},
            ':end': {'S': str(int(end_time.timestamp()))}
        }
    else:
        raise ValueError("You must provide either cutoff_time or both start_time and end_time")
    
    response=dynamodb.query(
        TableName=utcl_cbm_fan_efficiency,
        KeyConditionExpression=f'TemplateName=:tmpl AND {time_expr}',
        ExpressionAttributeNames={'#ts': 'Timestamp'},
        ExpressionAttributeValues=expr_values
    )
    items=response.get('Items',[])
    deserialized_items=[{k: list(v.values())[0] for k,v in item.items()} for item in items]
    df=pd.DataFrame(deserialized_items)
    return df

def put_data_dynamodb(table_name:str, item: Dict):
    dynamodb=boto3.client('dynamodb',region_name='ap-south-1')
    try:
        dynamodb.put_item(
        TableName=table_name,
        Item=item
        )
        
    except Exception as e:
        print(f"Error inserting item: {str(e)}")
        raise

def get_tag_metadata(table_name: str, uid: str):
    dynamo=boto3.resource('dynamodb',region_name='ap-south-1')
    table=dynamo.Table(table_name)
    try:
        response=table.scan(
            FilterExpression=Attr('Tag UID').eq(uid)

        )
        results=response.get('Items',[])
        while 'LastEvaluatedKey' in response:
            response=table.scan(
                FilterExpression=Attr('Tag UID').eq(uid),
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            results.extend(response.get('Items', []))
    except Exception as e:
        print(f"Error fetching tag metadata: {e}")
        return pd.DataFrame()

    return pd.DataFrame(results)

def get_iot_data(tag_uid:str,plant_name,start_time,end_time)->list:
    dynamodb=boto3.resource('dynamodb',region_name='ap-south-1')
    sitewise=boto3.client('iotsitewise', region_name='ap-south-1')
    table=dynamodb.Table(f"{plant_name}_TagMaster")
    result={}
    response=table.query(
        IndexName='Tag-UID-index',
        KeyConditionExpression=Key('Tag UID').eq(tag_uid),
        FilterExpression=Attr('Plant').eq(plant_name)
    )
    items=response.get('Items',[])
    if not items:
        result[tag_uid]=None
    mapping=items[0]
    asset_id=mapping.get('AssetID')
    property_id=mapping.get('PropertyID')
    if not asset_id or not property_id:
        result[tag_uid]=None
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
            continue  # Skip tags with no data

        for entry in entries:
            flat_entry = {
                "tag": tag,
                "timestamp": entry["timestamp"],
                "value": entry["value"],
                "quality": entry["quality"]
            }
            flat_data.append(flat_entry)
    print(flat_data)
    df=pd.DataFrame(flat_data)
    return df

# def other_query_from_adx(query):
#     try:
#         cluster = "https://private-utcprmfgadxiotpd.centralindia.kusto.windows.net"
#         client_id = "d99c09ff-0cf2-44fc-a605-6a769e0c0d6f"
#         # client_secret =  "9aG8Q~js9N0MyunFZg5tnCAiMUo5A.pzGt6Vfceq"
#         authority_id = "f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c"
#         kcsb = KustoConnectionStringBuilder.with_aad_application_key_authentication(cluster, client_id, client_secret, authority_id)
#         client = KustoClient(kcsb)
#         db = 'utcprmfgadxiotpd-db'
#         query = query
#         query_results = client.execute(db, query)
#     except Exception as e:
#         print(f'Exception occured in Asset details while running other query from ADX in Asset details:', {e})
        
def para_func(parameters_string):
    try:
        frmatd_str = parameters_string.replace('@@@',',')
        jsn_obj = json.loads(frmatd_str)
        temp = []
        id_list = []
        for i,j in jsn_obj.items():
            temp.append([i,j])
            id_list.append(j)
        parameters_df = pd.DataFrame(temp,columns=('Parameters', 'Id'))
        return parameters_df, id_list
    except Exception as e:
        print(f'Exception occured in Asset details while converting parameters string:', {e})

def compute_two_df(df1, df2, parameters_df):
    try:
        # Handle empty df1
        if df1.empty:
            print("df1 is empty. Cannot compute current value stats.")
            if df2.empty:
                print("Both df1 and df2 are empty. Returning empty DataFrame.")
                return pd.DataFrame()
            else:
                df2 = df2.merge(parameters_df, on='Id', how='inner')
                l2 = df2.groupby(['Parameters', 'Id'])['Value'].agg(['first', 'mean', 'min', 'max'])
                l2.rename(columns={
                    'first': 'Previous Value',
                    'mean': 'Previous Value Avg',
                    'min': 'Previous Value Min',
                    'max': 'Previous Value Max'
                }, inplace=True)
                return l2

        # Merge df1 with parameters
        df1 = df1.merge(parameters_df, on='Id', how='inner')
        l1 = df1.groupby(['Parameters', 'Id'])['Value'].agg(['first', 'mean', 'min', 'max'])
        l1.rename(columns={
            'first': 'Current Value',
            'mean': 'Current Value Avg',
            'min': 'Current Value Min',
            'max': 'Current Value Max'
        }, inplace=True)

        # If df2 is empty, return just current values
        if df2.empty:
            print("df2 is empty. Returning current value stats only.")
            return l1

        df2 = df2.merge(parameters_df, on='Id', how='inner')
        l2 = df2.groupby(['Parameters', 'Id'])['Value'].agg(['first', 'mean', 'min', 'max'])
        l2.rename(columns={
            'first': 'Previous Value',
            'mean': 'Previous Value Avg',
            'min': 'Previous Value Min',
            'max': 'Previous Value Max'
        }, inplace=True)

        final = l1.merge(l2, on=['Parameters', 'Id'], how='inner')
        final['Difference'] = final['Current Value'] - final['Previous Value']

        return final

    except Exception as e:
        print(f"Exception occurred in compute_two_df: {e}")
        return None

'''def compute_two_df(df1,df2,parameters_df):
    try:
        df1 = df1.merge(parameters_df,on='Id',how='inner')
        df2 = df2.merge(parameters_df,on='Id',how='inner')
        l1 = df1.groupby(['Parameters', 'Id'])[
            'Value'].agg(['first', 'mean', 'min', 'max'])
        l2 = df2.groupby(['Parameters', 'Id'])[
            'Value'].agg(['first', 'mean', 'min', 'max'])
        final = l1.merge(l2, on='Parameters')
        final['Difference'] = final['first_x'] - final['first_y']
        final.rename(columns={'first_x': 'Current Value', 'mean_x': 'Current Value Avg', 'min_x': 'Current Value Min', 'max_x': 'Current Value Max',
                'first_y': 'Current Previous Value', 'mean_y': 'Previous Value Avg', 'min_y': 'Previous Value Min', 'max_y': 'Previous Value Max'}, inplace=True)
        return final
    except Exception as e:
        print(f'Exception occured in Asset details while merging two df and parameters df:', {e})'''

def results(curr_eff,after3hr_eff):
    try:
        if curr_eff.empty or after3hr_eff.empty:
            print("One or both of the input DataFrames are empty. Skipping result calculation.")
            return None
        out = pd.DataFrame()
        out['Parameters'] = ['Fan Efficiency']
        out['Current Value'] = [curr_eff['Efficiency'][2]]
        out['Current Value Avg'] = [curr_eff['Efficiency'].mean()]
        out['Current Value Min'] = [curr_eff['Efficiency'].min()]
        out['Current Value Max'] = [curr_eff['Efficiency'].max()]
        out['Current Previous Value'] = [after3hr_eff['Efficiency'][2]]
        out['Previous Value Avg'] = [after3hr_eff['Efficiency'].mean()]
        out['Previous Value Min'] = [after3hr_eff['Efficiency'].min()]
        out['Previous Value Max'] = [after3hr_eff['Efficiency'].max()]
        out['Difference'] = [curr_eff['Efficiency'][2] - after3hr_eff['Efficiency'][2]]
        out.set_index('Parameters',inplace=True)
        #frames = [out1, out2]
        #result = pd.concat(frames)
        return out
    except Exception as e:
        print(f'Exception occured in Asset details while calculating current and 100 hours ago fan efficiency:', {e})

# Mtbs functions
'''def fetch_mtbs(para):
    try:
        mtbs_df = para[para['Parameters']=='MTBS']  #MTBS in place of Motor KW
        mtbs_df = mtbs_df.reset_index()[['Parameters','Id']]
        mtbs = mtbs_df.iloc[0]['Id']
        return mtbs
    except Exception as e:
        print(f'Exception occured in Asset details while fetching MTBS in fetch_mtbs function:', {e})'''
def fetch_mtbs(para):
    try:
        mtbs_df = para[para['Parameters'] == 'MTBS']  # MTBS in place of Motor KW

        if mtbs_df.empty:
            print("No 'MTBS' parameter found.")
            return None

        mtbs_df = mtbs_df.reset_index()[['Parameters', 'Id']]
        mtbs = mtbs_df.iloc[0]['Id']
        return mtbs

    except Exception as e:
        print(f'Exception occurred in Asset details while fetching MTBS in fetch_mtbs function: {e}')
        return None
   
def fetch_fan_efficiency(para):
    try:
        print(f"PARAMETERS RECEIVED IN fetch_fan_efficiency: {para}")
        fan_df = para[para['Parameters'] == 'Fan Efficiency']  # Filter for Fan Efficiency

        if fan_df.empty:
            print("No 'Fan Efficiency' parameter found.")
            return None

        fan_df = fan_df.reset_index()[['Parameters', 'Id']]
        fn_ef = fan_df.iloc[0]['Id']
        return fn_ef

    except Exception as e:
        print(f'Exception occurred in Asset details while fetching Fan Efficiency in fetch_fan_efficiency function: {e}')
        return None
'''def fetch_fan_efficiency(para):
    try:
        print(f"PARAMETERS RECIEVED IN fetch_fan_efficiency{para}")
        fan_df = para[para['Parameters']=='Fan Efficiency']  #MTBS in place of Motor KW
        fan_df = fan_df.reset_index()[['Parameters','Id']]
        fn_ef = fan_df.iloc[0]['Id']
        return fn_ef
    except Exception as e:
        print(f'Exception occured in Asset details while fetching Fan Efficiency in fetch_fan_efficiency function:', {e})'''
    
#Creating columns Start, 24hrs, 1week, 1month
def MTBS(iot):
    try:
        #Fetching last value on the basis of timestamp
        df = iot.groupby('Id').agg(Start=('timestamp','max')).reset_index()
        df['Start'] = pd.to_datetime(pd.to_datetime(df['Start']))
        df['24hrs_Before'] = pd.to_datetime(pd.to_datetime(df['Start']) - datetime.timedelta(days=1))
        df['1week'] = pd.to_datetime(pd.to_datetime(df['Start']) - datetime.timedelta(weeks=1))
        df['1month'] = pd.to_datetime(pd.to_datetime(df['Start']) - datetime.timedelta(weeks=4))
        return df
    except Exception as e:
        print(f'Exception occoured in Asset Details in MTBS function:', {e})
    
#Splitting data into hours, week and month
def mul_df(df,iot):
    try:
        iot_df = df.merge(iot,on='Id',how='left')
        iot_df['timestamp'] = pd.to_datetime(iot_df['timestamp'])
        hrs_df = iot_df[(iot_df['24hrs_Before'] < iot_df['timestamp']) & (iot_df['Start'] > iot_df['timestamp'])]
        week_df = iot_df[(iot_df['1week'] < iot_df['timestamp']) & (iot_df['Start'] > iot_df['timestamp'])]
        month_df = iot_df[(iot_df['1month'] < iot_df['timestamp']) & (iot_df['Start'] > iot_df['timestamp'])]
        return hrs_df, week_df, month_df
    except Exception as e:
        print(f'Exception occoured in Asset Details in mul_df function:', {e})
    
def hrs_stoppage_count(iot, master):  # iot = hrs_df
    try:
        # Convert timestamps to datetime and sort
        iot['timestamp'] = pd.to_datetime(iot['timestamp'])
        iot = iot.sort_values(by='timestamp')

        # Rename 'Id' to 'UID' if needed
        iot.rename(columns={'Id': 'UID'}, inplace=True)

        # Calculate time differences (in seconds) between consecutive rows per UID
        iot['Time_Diff'] = iot.groupby('UID')['timestamp'].transform(lambda x: x.diff().dt.total_seconds().fillna(0))

        # Select necessary columns
        df = iot[['UID', 'timestamp', '24hrs_Before', 'Start', 'Time_Diff', 'value']]

        # Merge with master data to get PublishingInterval
        new_df = df.merge(master, on='UID', how='left')

        # Convert PublishingInterval from milliseconds to seconds
        new_df['Time_delay'] = pd.to_numeric(new_df['PublishingInterval'], errors='coerce') / 1000

        # Reorder and select final columns
        new_df = new_df[['UID', 'Variable Type', '24hrs_Before', 'Start', 'timestamp', 'Time_delay', 'value', 'Time_Diff']]

        # Flag rows where the actual time gap exceeds the expected interval
        new_df['Flag'] = np.where(new_df['Time_Diff'] > new_df['Time_delay'], 1, 0)

        # Extract rows where stoppages occurred
        out = new_df[new_df['Flag'] == 1]

        return new_df, out

    except Exception as e:
        print(f'Exception occurred in hrs_stoppage_count function: {e}')
        return None, None


def weekly_stoppage_count(iot,master): # iot = week_df
    try:
        iot['timestamp'] = pd.to_datetime(iot['timestamp'])
        iot = iot.sort_values(by='timestamp') #sorting
        iot.rename(columns = {'Id':'UID'},inplace=True) #renaming to UID

        #Finding diffence between timestamp
        iot['Time_Diff'] = iot.groupby(['UID'])['timestamp'].transform(lambda x: x.diff().dt.seconds.div(1, fill_value=0))

        #Fetching columns on 24 hours basis
        df = iot[['UID','timestamp','1week','Start','Time_Diff','value']]
        new_df = df.merge(master,on='UID',how='left') #merging with master for timedelay
        new_df['Time_delay'] = pd.to_numeric(new_df['PublishingInterval'], errors='coerce') / 1000
        new_df = new_df[['UID','Variable Type','1week','Start', 'timestamp', 'Time_delay', 'value', 'Time_Diff']]
        new_df['Flag'] = np.where(new_df['Time_Diff'] > new_df['Time_delay'], 1,0)
        out = new_df[new_df['Time_Diff'] > new_df['Time_delay']]
        return new_df, out
    except Exception as e:
        print(f'Exception occoured in Asset Details in weekly_stoppage_count function:', {e})

def monthly_stoppage_count(iot,master): # iot = month_df
    try:
        iot['timestamp'] = pd.to_datetime(iot['timestamp'])
        iot = iot.sort_values(by='timestamp') #sorting
        iot.rename(columns = {'Id':'UID'},inplace=True) #renaming to UID

        #Finding diffence between timestamp
        iot['Time_Diff'] = iot.groupby(['UID'])['timestamp'].transform(lambda x: x.diff().dt.seconds.div(1, fill_value=0))

        #Fetching columns on 24 hours basis
        df = iot[['UID','timestamp','1month','Start','Time_Diff','value']]
        new_df = df.merge(master,on='UID',how='left') #merging with master for timedelay
        new_df['Time_delay'] = pd.to_numeric(new_df['PublishingInterval'], errors='coerce') / 1000
        new_df = new_df[['UID','Variable Type','1month','Start', 'timestamp', 'Time_delay', 'value', 'Time_Diff']]
        new_df['Flag'] = np.where(new_df['Time_Diff'] > new_df['Time_delay'], 1,0)
        out = new_df[new_df['Time_Diff'] > new_df['Time_delay']]
        return new_df, out
    except Exception as e:
        print(f'Exception occoured in Asset Details in monthly_stoppage_count function:', {e})

def running_hrs(iot,out): #iot = hdf, wdf, mdf
    try:
        l=[]
        run_time = iot.groupby('UID').agg(min_time = ('timestamp',np.min), max_time = ('timestamp',np.max), Time_Diff = ('Time_Diff',np.sum), Value = ('value',np.mean)).reset_index()
        #Represents total running time
        run_time['Total_Running'] = run_time['max_time'] - run_time['min_time']
        for i in run_time['Total_Running']:
            l.append(i.total_seconds())
        l= pd.DataFrame(l)
        mrg = pd.merge(run_time,l,left_index=True,right_index=True)
        # 0 here is total running time and ('diff', 'sum') is stoppage count
        mrg = mrg[['UID',(0),'Time_Diff']]
        # Removing the stoppage count from running time to get the exact/actual runtime
        mrg['Actual_Running_Time'] = mrg[0]-mrg['Time_Diff']
        res = mrg[['UID',(0),'Time_Diff','Actual_Running_Time']]
        try:
            res['MTBS'] = res['Actual_Running_Time']/len(out)
        except ZeroDivisionError as err:
            print(err,"Length of Stoppage Count is zero")
        except:
            print("Unexpected Error")
        t_t = mrg[0].sum() #Total time
        s_t = mrg['Time_Diff'].sum() #Stoppage time
        a_r_t = mrg['Actual_Running_Time'].sum() #Actual running time
        res.rename(columns = {(0):'Total_Running_Time', 'Time_Diff':'Total_Stoppage_Time'},inplace=True)
        return res
    except Exception as e:
        print(f'Exception occoured in Asset Details in running_hrs function:', {e})
#Splitting data into hours, week and month

'''def mul_df(df,iot):   
    try:
        iot_df = df.merge(iot,on='Id',how='left')
        iot_df['timestamp'] = pd.to_datetime(iot_df['timestamp'])
        hrs_df = iot_df[(iot_df['24hrs_Before'] < iot_df['timestamp']) & (iot_df['Start'] > iot_df['timestamp'])]
        week_df = iot_df[(iot_df['1week'] < iot_df['timestamp']) & (iot_df['Start'] > iot_df['timestamp'])]
        month_df = iot_df[(iot_df['1month'] < iot_df['timestamp']) & (iot_df['Start'] > iot_df['timestamp'])]
        return hrs_df, week_df, month_df
    except Exception as e:
        print(f'Exception occoured in Asset Details in mul_df function:', {e})'''
    
'''def hrs_stoppage_count(iot,master): # iot = hrs_df 
    try:
        iot['Timestamp'] = pd.to_datetime(iot['Timestamp'])
        iot = iot.sort_values(by='Timestamp') #sorting 
        iot.rename(columns = {'Id':'UID'},inplace=True) #renaming to UID

        #Finding diffence between timestamp
        iot['Time_Diff'] = iot.groupby(['UID'])['Timestamp'].transform(lambda x: x.diff().dt.seconds.div(1, fill_value=0))  

        #Fetching columns on 24 hours basis 
        df = iot[['UID','Timestamp','24hrs_Before','Start','Time_Diff','Value']]
        new_df = df.merge(master,on='UID',how='left') #merging with master for timedelay
        new_df['Time_delay'] = int(new_df['Sampling Interval'].iloc[0][-2])
        new_df = new_df[['UID','Variable Type','24hrs_Before','Start', 'Timestamp', 'Time_delay', 'Value', 'Time_Diff']]
        new_df['Flag'] = np.where(new_df['Time_Diff'] > new_df['Time_delay'], 1,0)
        out = new_df[new_df['Time_Diff'] > new_df['Time_delay']] 
        return new_df, out
    except Exception as e:
        print(f'Exception occoured in Asset Details in hrs_stoppage_count function:', {e})'''


'''def weekly_stoppage_count(iot,master): # iot = week_df 
    try:
        iot['Timestamp'] = pd.to_datetime(iot['Timestamp'])
        iot = iot.sort_values(by='Timestamp') #sorting 
        iot.rename(columns = {'Id':'UID'},inplace=True) #renaming to UID

        #Finding diffence between timestamp
        iot['Time_Diff'] = iot.groupby(['UID'])['Timestamp'].transform(lambda x: x.diff().dt.seconds.div(1, fill_value=0))  

        #Fetching columns on 24 hours basis 
        df = iot[['UID','Timestamp','1week','Start','Time_Diff','Value']]
        new_df = df.merge(master,on='UID',how='left') #merging with master for timedelay
        new_df['Time_delay'] = int(new_df['Sampling Interval'].iloc[0][-2])
        new_df = new_df[['UID','Variable Type','1week','Start', 'Timestamp', 'Time_delay', 'Value', 'Time_Diff']]
        new_df['Flag'] = np.where(new_df['Time_Diff'] > new_df['Time_delay'], 1,0)
        out = new_df[new_df['Time_Diff'] > new_df['Time_delay']] 
        return new_df, out
    except Exception as e:
        print(f'Exception occoured in Asset Details in weekly_stoppage_count function:', {e})'''
    
'''def monthly_stoppage_count(iot,master): # iot = month_df
    try:
        iot['Timestamp'] = pd.to_datetime(iot['Timestamp'])
        iot = iot.sort_values(by='Timestamp') #sorting 
        iot.rename(columns = {'Id':'UID'},inplace=True) #renaming to UID

        #Finding diffence between timestamp
        iot['Time_Diff'] = iot.groupby(['UID'])['Timestamp'].transform(lambda x: x.diff().dt.seconds.div(1, fill_value=0))  

        #Fetching columns on 24 hours basis 
        df = iot[['UID','Timestamp','1month','Start','Time_Diff','Value']]
        new_df = df.merge(master,on='UID',how='left') #merging with master for timedelay
        new_df['Time_delay'] = int(new_df['Sampling Interval'].iloc[0][-2])
        new_df = new_df[['UID','Variable Type','1month','Start', 'Timestamp', 'Time_delay', 'Value', 'Time_Diff']]
        new_df['Flag'] = np.where(new_df['Time_Diff'] > new_df['Time_delay'], 1,0)
        out = new_df[new_df['Time_Diff'] > new_df['Time_delay']] 
        return new_df, out
    except Exception as e:
        print(f'Exception occoured in Asset Details in monthly_stoppage_count function:', {e})'''


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
        print('Error while sending mail in Asset Details:',e)
        
def mail_structure(template,final_html,templatename):
    user_id = template['UserId'].iloc[0]
    current_time = pd.Timestamp(datetime.datetime.now(),tz='UTC')

    query = f"select * from [dbo].[CBM_EmailTemplates]"
    res = fetch_mail_template_info(query)
    

    try:
        unfrmt_mail = res.loc[res['UseCaseTemplate']==templatename,'Description'].iloc[0]
        unfrmt_mail = unfrmt_mail.replace('@@@',',')
        frmat_mail = unfrmt_mail.split('</style>')[1][3:-4]
        final_send =  frmat_mail + final_html + f'<br> This report is generated by {user_id}'
        recipients = res.loc[res['UseCaseTemplate']==templatename,'Recipients'].iloc[0]
        recipients = recipients.replace('@@@',',')
        rec = recipients.split(',')
        print(rec(type))
        subject = res.loc[res['UseCaseTemplate']==templatename,'Subject'].iloc[0]
        subject = subject.replace('@@@',',')
        # send_mail(rec,subject,final_send)
        item={
        'TemplateName':{'S':templatename},
        'Timestamp':{'N':current_time},
        'UserId':{'S':user_id},
        'UseCase':{'S':"Fan Efficiency"},
        'Recipients':{'S':recipients.replace(",","@@@")},
        'FromFunctionName':{'S':"mail_alert_fan_efficiency"},
        'Subject':{'S':subject}
        }
        # put_data_dynamodb(cbm_mail_logs,item)
    except Exception as e:
        print(f'Exception occured in Asset details while fetching executing mail:{e}')   
        

#def main(mytimer: func.TimerRequest) -> None:
def Asset_details_main(event, context)-> None:
    utc_timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

    #Getting Data from UI
    # para_query = "Utcl_CBM_EquipmentTemplates| where ['UseCase']=='Asset Details' and ['Status']=='Active'"
    # para_df = connect_ADX_with_AAD_application_key_auth(para_query)

    customAlertUsecases = "select * from [dbo].[CBM_EquipmentTemplates] where Status = 'Active' and UseCase = 'Asset Details'"
    para_df = fetch_template_info(customAlertUsecases)


    for i in para_df['TemplateName'].unique():
        tick = time.time()
        # Parameters part 
        templatename = i
        template = para_df.loc[para_df['TemplateName']==templatename]
        plant_name = template['PlantName'].iloc[0]  #fetching plant_name
        para_val=template['Parameters'].iloc[0]
        df_parameters,tag_list=para_func(template['Parameters'].iloc[0])
        if para_val=='{}':
            continue
        else:
            df_parameters, tag_list = para_func(template['Parameters'].iloc[0]) #para returns a dataframe and list
            # Fetching for other parameters
            #hundred_ago_df_query = f'IotLiveData| where (Timestamp<ago(100h)+330m) and (Timestamp>ago(101h)+330m)| where Id contains "{plant_name}" |order by Timestamp desc'
            now=datetime.datetime.now(datetime.timezone.utc)
            # start_time=now-datetime.timedelta(hours=101,minutes=330)
            start_time=now-datetime.timedelta(hours=101)
            # end_time=now-datetime.timedelta(hours=100, minutes=330)
            end_time=now-datetime.timedelta(hours=100)
            print(f' tag list: {tag_list}')
            hundred_ago_df=sitewise_query_execute(plant_name,start_time,end_time,tag_list)
            end_time=datetime.datetime.now(datetime.timezone.utc)
            start_time=end_time-datetime.timedelta(hours=6.5)
            #current_hour_df_query = f'IotLiveData| where (Timestamp>ago(1h)+330m) and (Id contains"{plant_name}")'
            #hundred_ago_df = connect_ADX_with_AAD_application_key_auth(hundred_ago_df_query)
            #current_hour_df = connect_ADX_with_AAD_application_key_auth(current_hour_df_query)
            current_hour_df=sitewise_query_execute(plant_name,start_time,end_time,tag_list)
            final_df = compute_two_df(current_hour_df,hundred_ago_df,df_parameters)
            
            # Fan Part
            fn_ef = fetch_fan_efficiency(df_parameters)
            mtbs=fetch_mtbs(df_parameters)
            if fn_ef==None and mtbs==None:
                continue
            elif mtbs==None and fn_ef: 
                cutoff=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=8.5)
                print(f"Calling query_dynamodb with template_name={fn_ef}")
                curr_eff = query_dynamodb(fn_ef, cutoff_time=cutoff)
                start=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=103)   
                # end=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=100, minutes=330)
                end=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=100)
                old_eff = query_dynamodb(fn_ef, start_time=start, end_time=end)
                fan_df = results(curr_eff,old_eff)
                if fan_df==None:
                    result=final_df
                    result_html=result.to_html()
                    final_html='<br><strong>Asset Details</strong>'+result_html
                else:
                    result = pd.concat([final_df,fan_df])
                    result_html = result.to_html()
                    final_html = '<br><strong>Asset Details</strong>'+result_html
                    mail_structure(template,final_html,templatename)
            elif fn_ef==None and mtbs:             
                print(f'plant name: {plant_name}')
                print(f'mtbs: {mtbs}')
                #master
            #mtbs_master = f"TagUid('{mtbs}')"
            #mtbs_master = connect_ADX_with_AAD_application_key_auth(mtbs_master)
                plant=f"{plant_name}_TagMaster"
                mtbs_master=get_tag_metadata(plant, mtbs)
                mtbs_master.rename(columns = {'Tag UID':'UID'},inplace=True) #renaming to UID
                print(f'mtbs master: {mtbs_master}')
                print(mtbs_master.head())
                print(mtbs_master.columns)
            # iot
            # mtbs_iot = f"IotLiveData_30d('{mtbs}')"
            # mtbs_iot = connect_ADX_with_AAD_application_key_auth(mtbs_iot)
                end_date=datetime.datetime.now(datetime.timezone.utc)
                start_date=end_date-datetime.timedelta(days=30)
                mtbs_iot=get_iot_data(mtbs,plant_name,start_date,end_date)
                mtbs_iot.rename(columns={'tag': 'Id'}, inplace=True)
                mtbs_iot = mtbs_iot.sort_values('timestamp',ascending=False)
                print(f'mtbs iot: {mtbs_iot}')

                mtbs_df = MTBS(mtbs_iot)
                print(f'mtbs df: {mtbs_df}')
                hrs_df ,week_df ,month_df = mul_df(mtbs_df,mtbs_iot)
                print(f'hrs_df: {hrs_df}')
                print(f'week_df: {week_df}')
                print(f'month_df: {month_df}')
                print(hrs_df.columns)
                hrs_df.rename(columns={'Id':'UID'}, inplace=True)
                print(hrs_df.columns)
                hdf, h_out = hrs_stoppage_count(hrs_df,mtbs_master)
                print(f'hdf : {hdf}')
                print(f'h_out: {h_out}')
                wdf, w_out = weekly_stoppage_count(week_df,mtbs_master)
                mdf, m_out = monthly_stoppage_count(month_df,mtbs_master)

    
                h_out = running_hrs(hdf,h_out)
                w_out = running_hrs(wdf,w_out)
                m_out = running_hrs(mdf,m_out)
                hrs_mtbs = h_out['MTBS'].iloc[0]
                wrs_mtbs = w_out['MTBS'].iloc[0]
                mrs_mtbs = m_out['MTBS'].iloc[0]
                d = {
                    '24 hours':[hrs_mtbs],
                    '7 days':[wrs_mtbs],
                    '30 days':[mrs_mtbs]
                }
                df_mtbs_out = pd.DataFrame(d)

                mtbs_html = df_mtbs_out.to_html(index=False)

                # merging main table with mtbs
                final_html = '<br><strong>Asset Details</strong>'+'<br> <strong>MTBS</strong>'+mtbs_html
                mail_structure(template,final_html,templatename)

                tock = time.time()
                print(f'Time taken in Asset Details for {templatename}:{round((tock-tick),2)}')
            else:
                cutoff=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=8.5)
                print(f"Calling query_dynamodb with template_name={fn_ef}")
                curr_eff = query_dynamodb(fn_ef, cutoff_time=cutoff)
                start=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=103)
                # end=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=100, minutes=330)
                end=datetime.datetime.now(datetime.timezone.utc)-datetime.timedelta(hours=100)
                old_eff = query_dynamodb(fn_ef, start_time=start, end_time=end)
                fan_df = results(curr_eff,old_eff)
                result = pd.concat([final_df,fan_df])
                result_html = result.to_html()

                #MTBS part
                mtbs = fetch_mtbs(df_parameters)
                #master
                #mtbs_master = f"TagUid('{mtbs}')"
                #mtbs_master = connect_ADX_with_AAD_application_key_auth(mtbs_master)
                plant=f"{plant_name}_TagMaster"
                mtbs_master=get_tag_metadata(plant, mtbs)
                mtbs_master.rename(columns = {'Tag UID':'UID'},inplace=True) #renaming to UID

                # iot
                # mtbs_iot = f"IotLiveData_30d('{mtbs}')"
                # mtbs_iot = connect_ADX_with_AAD_application_key_auth(mtbs_iot)
                end_date=datetime.datetime.now(datetime.timezone.utc)
                start_date=end_date-datetime.timedelta(days=30)


                mtbs_iot=get_iot_data(mtbs,plant_name,start_date,end_date)
                mtbs_iot.rename(columns={'tag': 'Id'}, inplace=True)
                mtbs_iot = mtbs_iot.sort_values('timestamp',ascending=False)



                mtbs_df = MTBS(mtbs_iot)
                hrs_df ,week_df ,month_df = mul_df(mtbs_df,mtbs_iot)
                hrs_df.rename(columns={'Id':'UID'}, inplace=True)


                hdf, h_out = hrs_stoppage_count(hrs_df,mtbs_master)
                wdf, w_out = weekly_stoppage_count(week_df,mtbs_master)
                mdf, m_out = monthly_stoppage_count(month_df,mtbs_master)


                h_out = running_hrs(hdf,h_out)
                w_out = running_hrs(wdf,w_out)
                m_out = running_hrs(mdf,m_out)
                hrs_mtbs = h_out['MTBS'].iloc[0]
                wrs_mtbs = w_out['MTBS'].iloc[0]
                mrs_mtbs = m_out['MTBS'].iloc[0]
                d = {
                    '24 hours':[hrs_mtbs],
                    '7 days':[wrs_mtbs],
                    '30 days':[mrs_mtbs]
                }
                df_mtbs_out = pd.DataFrame(d)

                mtbs_html = df_mtbs_out.to_html(index=False)

                # merging main table with mtbs
                final_html = '<br><strong>Asset Details</strong>'+result_html+'<br> <strong>MTBS</strong>'+mtbs_html
                mail_structure(template,final_html,templatename)

                tock = time.time()
                print(f'Time taken in Asset Details for {templatename}:{round((tock-tick),2)}')


