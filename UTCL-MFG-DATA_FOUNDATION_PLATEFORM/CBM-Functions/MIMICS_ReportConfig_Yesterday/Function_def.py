import boto3
import pandas as pd
from datetime import datetime
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
sitewise = boto3.client('iotsitewise')


def fetch_tag_master(tag_uids, plants, table_name):
    """
    Fetch tag metadata from DynamoDB and filter in Python
    """
    table = dynamodb.Table(table_name)
    response = table.scan()
    items = response.get('Items', [])
    df = pd.DataFrame(items)
    
    if df.empty:
        return df

    if tag_uids:
        df = df[df['Tag UID'].isin(tag_uids)]
    if plants:
        df = df[df['Plant'].isin(plants)]

    return df


def fetch_sitewise_data(tag_ids, start_time, end_time):
    """
    Fetch IoT property values from AWS SiteWise
    """
    all_records = []

    for tag_id in tag_ids:
        response = sitewise.get_asset_property_value_history(
            propertyId=tag_id,
            startDate=start_time,
            endDate=end_time,
            timeOrdering='ASCENDING'
        )

        for point in response.get('assetPropertyValueHistory', []):
            ts = datetime.utcfromtimestamp(point['timestamp']['timeInSeconds'])
            value = point['value'].get('doubleValue', 0.0)
            all_records.append({'Id': tag_id, 'Timestamp': ts, 'Value': value})

    return pd.DataFrame(all_records)


def Fn_CBM_UidWiseAvg_DataPagination_Yesterday_Scheduler(
    v_tagUid: str,
    v_stDate: datetime,
    v_enDate: datetime,
    v_interval: str,
    v_plant: str,
    tag_master_table: str
):
    """
    Python version of the CBM Kusto function using DynamoDB + SiteWise
    """

    tag_uid_list = v_tagUid.split(',') if v_tagUid else []
    plant_list = v_plant.split(',') if v_plant else []


    tag_master_df = fetch_tag_master(tag_uid_list, plant_list, tag_master_table)
    if tag_master_df.empty:
        print("No matching tags in Tag_Master")
        return pd.DataFrame()

    tag_ids = tag_master_df['Tag UID'].tolist()
    iot_df = fetch_sitewise_data(tag_ids, v_stDate, v_enDate)
    if iot_df.empty:
        print("No IoT data found in SiteWise")
        return pd.DataFrame()


    iot_df['Timestamp'] = pd.to_datetime(iot_df['Timestamp']).dt.floor(v_interval)

    merged_df = pd.merge(iot_df, tag_master_df, left_on='Id', right_on='Tag UID')

    summary = (
        merged_df.groupby(['Id', 'Timestamp', 'Description'], as_index=False)
        .agg(Value=('Value', 'mean'))
    )
    summary['Value'] = summary['Value'].round(3)

    summary['DisplayId'] = summary['Id'] + ' Desc- ' + summary['Description']
    summary = summary.sort_values(by='Timestamp')
    summary['Row_Number'] = range(1, len(summary) + 1)

    pivot_df = summary.pivot(index='Timestamp', columns='DisplayId', values='Value').reset_index()
    pivot_df.insert(0, 'Row_Number', range(1, len(pivot_df) + 1))

    return pivot_df

