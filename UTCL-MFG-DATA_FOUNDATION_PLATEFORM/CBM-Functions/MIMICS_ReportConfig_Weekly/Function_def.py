import boto3
import pandas as pd
from datetime import datetime
from boto3.dynamodb.conditions import Attr


dynamodb = boto3.resource('dynamodb')
sitewise = boto3.client('iotsitewise')

def fetch_tag_master(tag_uids, plant_names, table_name):
    """
    Fetch metadata from DynamoDB table (Tag_Master equivalent)
    """

    try:
        table = dynamodb.Table(table_name+'_TagMaster')
        # split_list = tag_uids.split(',')
        tag_list = []
        for item in tag_uids:
          response = table.query(
            IndexName='Tag-UID-index',
            KeyConditionExpression= "#tagUID = :tagUid",
            ExpressionAttributeNames= {
              "#tagUID": "Tag UID",
            },
            ExpressionAttributeValues= {
              ":tagUid": item,
            },
          )
          if len(response['Items']) > 0:
            tag_list.append(response['Items'][0])
        return tag_list
    except Exception as e:
        print('Exception occurred while fetching from dynamoDB:',e)

def fetch_sitewise_data(tag_master_df, start_time, end_time, interval):
    """
    Fetch IoTLiveData from SiteWise for given tag_ids within time range.
    """
    # records = []

    # for tag_id in tag_ids:
    #     response = sitewise.get_asset_property_value_history(
    #         propertyId=tag_id,
    #         startDate=start_time,
    #         endDate=end_time,
    #         timeOrdering='ASCENDING'
    #     )
    #     for point in response.get('assetPropertyValueHistory', []):
    #         ts = datetime.utcfromtimestamp(point['timestamp']['timeInSeconds'])
    #         val = point['value'].get('doubleValue', 0.0)
    #         records.append({'Id': tag_id, 'Timestamp': ts, 'Value': val})

    # return pd.DataFrame(records)

    records = []

    if not tag_master_df:
        print("tag_master_df is empty")
        return pd.DataFrame()

    print(f'single tag master df data ==> {tag_master_df[0]}')

    for tag_data in tag_master_df:
        next_token = None

        while True:
            params = {
                'propertyId': tag_data['PropertyID'],
                'assetId': tag_data['AssetID'],
                'startDate': start_time,
                'endDate': end_time,
                'timeOrdering': 'ASCENDING'
            }
            if next_token:
                params['nextToken'] = next_token

            response = sitewise.get_asset_property_value_history(**params)

            for point in response.get('assetPropertyValueHistory', []):
                ts = datetime.utcfromtimestamp(point['timestamp']['timeInSeconds'])
                val = point['value'].get('doubleValue') or 0.0
                records.append({'Id': tag_data['Tag UID'], 'Timestamp': ts, 'Value': val})

            next_token = response.get('nextToken')
            if not next_token:
                break

    print(f'records ==> {records}')
    df = pd.DataFrame(records)

    print(f'df-sitewise ==> {df}')
    if df.empty:
        return pd.DataFrame()

    # Ensure Timestamp is datetime
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])
    df['Timestamp'] = df['Timestamp'].dt.floor(interval)

    return df

def Fn_CBM_UidWiseAvg_DataPagination_Yesterday_Scheduler(v_tagUid, v_stDate, v_enDate, v_interval, v_plant, tag_master_table):
    """
    Equivalent to the Kusto CBM function using DynamoDB + IoT SiteWise in Python
    """
    tag_uid_list = v_tagUid.split(',') if v_tagUid else []
    plant_list = v_plant.split(',') if v_plant else []

    print(f'v_tagUid ==> {v_tagUid}')
    print(f'tag_uid_list ==> {tag_uid_list}')

    print(f'v_plant ==> {v_plant}')
    print(f'plant_list ==> {plant_list}')

    tag_master_df = fetch_tag_master(tag_uid_list, plant_list, tag_master_table)
    print(f'tag_master_df ==> {tag_master_df}')

    if len(tag_master_df) == 0:
        print("No matching tags in Tag_Master")
        return pd.DataFrame()

    print(f'tag_master_df length ==> {len(tag_master_df)}')
    sitewise_df = fetch_sitewise_data(tag_master_df, v_stDate, v_enDate, v_interval)
    if sitewise_df.empty:
        print("No IoT data found for the given range")
        return pd.DataFrame()

    tag_master_df = pd.DataFrame(tag_master_df)

    merged_df = pd.merge(sitewise_df, tag_master_df, left_on='Id', right_on='Tag UID')

    print(f'merged_df ==> {merged_df}')
 
    agg_df = (
        merged_df.groupby(['Id', 'Timestamp', 'Standard Variable Description'], as_index=False)
        .agg(Value=('Value', 'mean'))
    )
    print(f'merge group by id, timestamp, description ==> {agg_df}')
    agg_df['Value'] = agg_df['Value'].round(3)
    print(f'grouped value round ==> {agg_df}')


    agg_df['DisplayId'] = agg_df['Id'] + ' Desc- ' + agg_df['Standard Variable Description']
    print(f'grouped by id and description ==> {agg_df}')

    pivot_df = agg_df.pivot(index='Timestamp', columns='DisplayId', values='Value').reset_index()
    print(f'pivot_df ==> {pivot_df}')

    pivot_df.insert(0, 'Row_Number', range(1, len(pivot_df) + 1))
    print(f'final pivot_df ==> {pivot_df}')

    return pivot_df

