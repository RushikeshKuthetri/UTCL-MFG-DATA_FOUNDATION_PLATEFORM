import boto3
import pandas as pd
from datetime import datetime

# AWS SiteWise client
sitewise = boto3.client('iotsitewise')

def fetch_sitewise_data(tag_ids, start_time, end_time):
    """
    Fetch IoTLiveData from AWS SiteWise for given tag_ids and time range.
    """
    records = []

    for tag_id in tag_ids:
        try:
            response = sitewise.get_asset_property_value_history(
                propertyId=tag_id,
                startDate=start_time,
                endDate=end_time,
                timeOrdering='ASCENDING'
            )
            for point in response.get('assetPropertyValueHistory', []):
                ts = datetime.utcfromtimestamp(point['timestamp']['timeInSeconds'])
                val = point['value'].get('doubleValue', 0.0)
                records.append({'Id': tag_id, 'Timestamp': ts, 'Value': val})
        except Exception as e:
            print(f"Error fetching SiteWise data for {tag_id}: {e}")

    return pd.DataFrame(records)

def fn_IotLiveData(TagId: str, StartDateTime: datetime, EndDateTime: datetime):
    """
    Python version of the Kusto function for fetching and averaging SiteWise data
    """
    tag_id_list = TagId.split(',') if TagId else []

    df = fetch_sitewise_data(tag_id_list, StartDateTime, EndDateTime)

    if df.empty:
        print("No data found for given tag IDs and time range.")
        return pd.DataFrame()

    # Bin timestamps to 1-minute intervals
    df['1min'] = pd.to_datetime(df['Timestamp']).dt.floor('1min')

    # Group by Id and 1-minute bins, compute average
    result_df = (
        df.groupby(['Id', '1min'], as_index=False)
        .agg(AvgValue=('Value', 'mean'))
        .rename(columns={'1min': 'Timestamp', 'AvgValue': 'Value'})
    )

    return result_df

