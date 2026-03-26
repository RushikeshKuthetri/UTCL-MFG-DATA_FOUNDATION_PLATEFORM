import pandas as pd
from datetime import datetime, timedelta, timezone
import logging
import boto3
from botocore.exceptions import ClientError
import os
import json
import warnings
import numpy as np
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)


database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")

utcl_cbm_fan_efficiency = os.getenv("utcl_cbm_fan_efficiency")

# Suppress pandas warnings
warnings.filterwarnings("ignore", category=FutureWarning)
pd.options.mode.chained_assignment = None  # Suppress SettingWithCopyWarning

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# DynamoDB target table
TARGET_TABLE_NAME = utcl_cbm_fan_efficiency

# AWS client
session = boto3.Session(region_name = 'ap-south-1' )
dynamodb = session.client('dynamodb')
sitewise_client = session.client('iotsitewise')

i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

def query_asset_data(asset_id, property_id, start_time, end_time):
    try:
        print(f"Querying SiteWise for asset_id={asset_id}, property_id={property_id}")        
        # Convert datetime objects to timestamps in seconds
        if isinstance(start_time, datetime):
            start_time_seconds = int(start_time.timestamp())
        else:
            start_time_seconds = int(start_time)
            
        if isinstance(end_time, datetime):
            end_time_seconds = int(end_time.timestamp())
        else:
            end_time_seconds = int(end_time)

        print(f"Time range in seconds: {start_time_seconds} to {end_time_seconds}")
        
        # Print the API parameters
        api_params = {
            'assetId': asset_id,
            'propertyId': property_id,
            'startDate': start_time_seconds,
            'endDate': end_time_seconds,
            'timeOrdering': 'ASCENDING'
        }
        print(f"SiteWise API parameters: {api_params}")

        try:
            response = sitewise_client.get_asset_property_value_history(
                assetId=asset_id,
                propertyId=property_id,
                startDate=start_time_seconds,
                endDate=end_time_seconds,
                timeOrdering='ASCENDING'
            )
            
            values = response.get('assetPropertyValueHistory', [])
            
            # Handle pagination
            next_token = response.get('nextToken')
            page_count = 0
            max_pages = 5  # Limit to 5 pages for testing
            
            while next_token and page_count < max_pages:
                page_count += 1
                
                response = sitewise_client.get_asset_property_value_history(
                    assetId=asset_id,
                    propertyId=property_id,
                    startDate=start_time_seconds,
                    endDate=end_time_seconds,
                    timeOrdering='ASCENDING',
                    nextToken=next_token
                )
                
                new_token = response.get('nextToken')
                if new_token == next_token:
                    logger.warning("Same token received, breaking pagination loop")
                    break
                    
                page_values = response.get('assetPropertyValueHistory', [])
                values.extend(page_values)
                next_token = new_token
            
            # Extract double values and timestamps
            data = []
            for v in values:
                if 'value' in v and 'doubleValue' in v['value'] and 'timestamp' in v and 'timeInSeconds' in v['timestamp']:
                    data.append((v['value']['doubleValue'], v['timestamp']['timeInSeconds']))
            
            return data
            
        except Exception as e:
            logger.error(f"Error in SiteWise API call: {e}")
            return []
        
    except Exception as e:
        logger.error(f"Error fetching SiteWise data: {e}")
        return []

def convert_sitewise_to_dataframe(sitewise_data):
    """
    Convert SiteWise response data to a DataFrame format compatible with existing code.
    """
    records = []
    
    for entry in sitewise_data:
        timestamp = entry.get('timestamp', {}).get('timeInSeconds')
        if timestamp:
            # Convert to datetime
            dt = datetime.fromtimestamp(timestamp, tz=timezone.utc)
            
            # Extract value based on type
            value = None
            value_entry = entry.get('value', {})
            if 'doubleValue' in value_entry:
                value = value_entry['doubleValue']
            elif 'integerValue' in value_entry:
                value = value_entry['integerValue']
            elif 'booleanValue' in value_entry:
                value = 1 if value_entry['booleanValue'] else 0
            elif 'stringValue' in value_entry:
                value = value_entry['stringValue']
                
            if value is not None:
                records.append({
                    'Timestamp': dt,
                    'Id': entry.get('propertyId'),
                    'Value': value
                })
    
    return pd.DataFrame(records)

def get_tag_mapping_by_uid(tag_uid, plant):
    table_name = f"{plant}_TagMaster"
    try:
        print(f"Attempting to query table: {table_name}")
        response = dynamodb.query(
            TableName=table_name,
            IndexName='Tag-UID-index',
            KeyConditionExpression='#uid = :uid',
            ExpressionAttributeNames={'#uid': 'Tag UID'},
            ExpressionAttributeValues={ ':uid': {'S': tag_uid}})
        
        if 'Items' in response and response['Items']:
            item = response['Items'][0]
            
            # Initialize variables
            asset_id = None
            property_id = None
            
            # Check for AssetID (note: case might be different)
            if 'AssetID' in item:
                if isinstance(item['AssetID'], dict) and 'S' in item['AssetID']:
                    asset_id = item['AssetID']['S']
                else:
                    asset_id = str(item['AssetID'])
            elif 'AssetId' in item:
                if isinstance(item['AssetId'], dict) and 'S' in item['AssetId']:
                    asset_id = item['AssetId']['S']
                else:
                    asset_id = str(item['AssetId'])
            
            # Check for PropertyID (note: case might be different)
            if 'PropertyID' in item:
                if isinstance(item['PropertyID'], dict) and 'S' in item['PropertyID']:
                    property_id = item['PropertyID']['S']
                else:
                    property_id = str(item['PropertyID'])
            elif 'PropertyId' in item:
                if isinstance(item['PropertyId'], dict) and 'S' in item['PropertyId']:
                    property_id = item['PropertyId']['S']
                else:
                    property_id = str(item['PropertyId'])
            
            if asset_id and property_id:
                return {
                    'AssetId': asset_id,
                    'PropertyId': property_id
                }
            else:
                logger.warning(f"Missing AssetId or PropertyId for tag {tag_uid}")
                return None
        else:
            logger.warning(f"No metadata found for Tag UID {tag_uid} in {table_name}")
            return None
    except Exception as e:
        logger.error(f"Error querying DynamoDB for {tag_uid}: {e}")
        return None


def fetch_fan_parameter_data_from_SiteWise(asset_id, property_id_mapping, start_time, end_time, query_func=None, asset_property_mapping=None):
    """
    Fetch fan parameter data from SiteWise.
    """
    all_data = []
    # Use the provided query function or the default one
    query_function = query_func if query_func else query_asset_data

    # Ensure start_time and end_time are datetime objects
    if not isinstance(start_time, datetime):
        start_time = pd.to_datetime(start_time)
    if not isinstance(end_time, datetime):
        end_time = pd.to_datetime(end_time)
    
    if not property_id_mapping:
        logger.error(f"No property mappings provided for asset {asset_id}")
        return pd.DataFrame(columns=['Timestamp', 'Id', 'Value', 'Parameter'])
        
    if not asset_id:
        logger.error("No asset ID provided for fetching data")
        return pd.DataFrame(columns=['Timestamp', 'Id', 'Value', 'Parameter'])
    
    logger.info(f"Fetching data for asset {asset_id} with {len(property_id_mapping)} parameters")
    
    for param_name, prop_id in property_id_mapping.items():
        try:
            # Use parameter-specific asset ID if available
            param_asset_id = asset_id
            if asset_property_mapping and param_name in asset_property_mapping:
                param_asset_id = asset_property_mapping[param_name]['AssetId']

            logger.info(f"Querying SiteWise for parameter {param_name} (property ID: {prop_id})")
            data_points = query_function(param_asset_id, prop_id, start_time, end_time)
            
            # Check if data_points is empty (it's a list, not a DataFrame)
            if not data_points:
                logger.warning(f"No data returned from SiteWise for parameter {param_name} (property ID: {prop_id})")
                continue
                
            logger.info(f"Retrieved {len(data_points)} data points for parameter {param_name}")
            
            # Convert data points to DataFrame
            param_df = pd.DataFrame([
                {'Timestamp': datetime.fromtimestamp(ts, tz=timezone.utc), 
                 'Id': prop_id, 
                 'Value': val, 
                 'Parameter': param_name} 
                for val, ts in data_points
            ])
            
            all_data.append(param_df)
                
        except Exception as e:
            logger.error(f"Error fetching data for parameter {param_name}: {e}")

    # Combine all dataframes
    if all_data:
        result_df = pd.concat(all_data, ignore_index=True)
        logger.info(f"Successfully retrieved data from SiteWise: {len(result_df)} total data points")
        return result_df
    else:
        logger.warning(f"No data retrieved from SiteWise for any parameters of asset {asset_id}")
        return pd.DataFrame(columns=['Timestamp', 'Id', 'Value', 'Parameter'])


def last_1_minutes_average(df, current_time, parameter_dict):
    """
    Calculate average values for the last 1 minute (actually 5 minutes in the code).
    """
    try:
        current_time = pd.to_datetime(current_time)
        df['Timestamp'] = pd.to_datetime(df['Timestamp'])
        last_1_minutes = current_time - timedelta(minutes=5)
        last_1_minutes_df = df.loc[(df['Timestamp'] >= last_1_minutes) & (df['Timestamp'] < current_time)]
        
        # Debug: Print the data being processed
        print(f"\n=== DEBUG: last_1_minutes_average ===")
        print(f"Total data points: {len(df)}")
        print(f"Data points in time window: {len(last_1_minutes_df)}")
        print(f"Time window: {last_1_minutes} to {current_time}")
        print(f"Parameter dict: {parameter_dict}")

        # Print a sample of the data
        if not df.empty:
            print("\nSample data:")
            print(df.head())

        store_value = {
            'timestamp': [current_time],
            'speed': [0],
            'load': [0],
            'inlet_draft': [0],
            'outlet_draft': [0],
            'temperature': [0],
            'sprs': [0]
        }
        
        # Process SPRS parameter - check if it exists first
        if 'SPRS' in parameter_dict.columns and not pd.isna(parameter_dict['SPRS'].iloc[0]):
            if str(parameter_dict['SPRS'].iloc[0]).isnumeric():
                store_value['sprs'][0] = float(parameter_dict['SPRS'].iloc[0])
                print(f"Using numeric SPRS value: {store_value['sprs'][0]}")
            else:
                sprs_id = parameter_dict['SPRS'].iloc[0]
                # Look up the property ID for this tag
                sprs_values = last_1_minutes_df.loc[last_1_minutes_df['Parameter'] == 'SPRS', 'Value']
                if not sprs_values.empty:
                    store_value['sprs'][0] = sprs_values.mean()
                    print(f"Using SPRS from SiteWise: {store_value['sprs'][0]}")
                # sprs_id = parameter_dict['SPRS'].iloc[0]
                # if not last_1_minutes_df.empty:
                #     sprs_values = last_1_minutes_df.loc[last_1_minutes_df['Id'] == sprs_id, 'Value']
                #     if not sprs_values.empty:
                #         store_value['sprs'][0] = sprs_values.mean()
                #         print(f"Using SPRS from SiteWise: {store_value['sprs'][0]}")
        
        # Process other parameters
        for param, column in [
            ('Speed', 'speed'),
            ('Load', 'load'),
            ('Inlet Draft', 'inlet_draft'),
            ('Outlet Draft', 'outlet_draft'),
            ('Temperature', 'temperature')
        ]:
            if param not in parameter_dict.columns or pd.isna(parameter_dict[param].iloc[0]):
                print(f"Skipping {param}: Not in parameter_dict or is NaN")
                # Skip if parameter doesn't exist
                continue

            try:
                value = float(parameter_dict[param].iloc[0])
                store_value[column][0] = value
                print(f"Using numeric {param} value: {store_value[column][0]}")
            except ValueError:
                # Not a numeric value, proceed with tag lookup
                param_values = last_1_minutes_df.loc[last_1_minutes_df['Parameter'] == param, 'Value']
                if not param_values.empty:
                    avg_value = param_values.mean()
                    
                    # Special handling for outlet draft
                    if param == 'Outlet Draft' and avg_value < 0:
                        avg_value = (-1) * avg_value
                        print(f"Inverting negative Outlet Draft: {avg_value}")
            
                    store_value[column][0] = avg_value
                    print(f"Using {param} from SiteWise: {store_value[column][0]}")
                else:
                    print(f"No values found for {param}")
            # if str(parameter_dict[param].iloc[0]).isnumeric():
            #     store_value[column][0] = float(parameter_dict[param].iloc[0])
            #     print(f"Using numeric {param} value: {store_value[column][0]}")
           

        print("\nFinal store_value:")
        for k, v in store_value.items():
            print(f"  {k}: {v[0]}")
        print("===========================\n")

        # Create DataFrame from collected values
        result_df = pd.DataFrame(store_value)
        
        # Check for any remaining NaN values
        if result_df.isnull().values.any():
            return 0
        else:
            return result_df
            
    except Exception as e:
        logger.error(f'Exception occurred while calculating last one minute average: {e}')
        return 0

def last_1_minutes_average_without_null_check(df, current_time, parameter_dict):
    """
    Calculate average values for the last 1 minute without null checks.
    """
    try:
        current_time = pd.to_datetime(current_time)
        df['Timestamp'] = pd.to_datetime(df['Timestamp'])
        last_1_minutes = current_time - timedelta(minutes=5)
        last_1_minutes_df = df.loc[(df['Timestamp'] >= last_1_minutes) & (df['Timestamp'] < current_time)]
        
        store_value = {
            'timestamp': [current_time],
            'speed': [0],
            'load': [0],
            'inlet_draft': [0],
            'outlet_draft': [0],
            'temperature': [0]
        }
        
        # Process parameters
        for param, column in [
            ('Speed', 'speed'),
            ('Load', 'load'),
            ('Inlet Draft', 'inlet_draft'),
            ('Outlet Draft', 'outlet_draft'),
            ('Temperature', 'temperature')
        ]:
            if param not in parameter_dict.columns or pd.isna(parameter_dict[param].iloc[0]):
                # Skip if parameter doesn't exist
                continue
                
            if str(parameter_dict[param].iloc[0]).isnumeric():
                store_value[column][0] = float(parameter_dict[param].iloc[0])
            else:
                param_values = last_1_minutes_df.loc[last_1_minutes_df['Parameter'] == param, 'Value']
                if not param_values.empty:
                    avg_value = param_values.mean()
                    
                    # Special handling for outlet draft
                    if param == 'Outlet Draft' and avg_value < 0:
                        avg_value = (-1) * avg_value
                        
                    store_value[column][0] = avg_value
        
        # Create DataFrame from collected values
        result_df = pd.DataFrame(store_value)
        result_df.fillna(0, inplace=True)
        return result_df
        
    except Exception as e:
        logger.error(f'Exception occurred while calculating last one minute average without null check: {e}')
        return pd.DataFrame()

def calculate_efficiency(df, designed_flow=119.2, designed_temp=400, designed_speed=657, designed_load=150, designed_head=102):
    """
    Calculate fan efficiency based on various parameters.
    """
    try:
        # Add sprs column if it doesn't exist
        if 'sprs' not in df.columns:
            df['sprs'] = 0

        # Log input values
        logger.info(f"Efficiency calculation inputs: speed={df['speed'][0]}, load={df['load'][0]}, " +
                   f"inlet_draft={df['inlet_draft'][0]}, outlet_draft={df['outlet_draft'][0]}, " +
                   f"temperature={df['temperature'][0]}, sprs={df['sprs'][0]}")
        logger.info(f"Design parameters: flow={designed_flow}, temp={designed_temp}, " +
                   f"speed={designed_speed}, load={designed_load}, head={designed_head}")    

        # Checking for zero or very small values that could cause division issues
        if abs(df['speed'][0]) < 0.001 or abs(designed_speed) < 0.001:
            logger.warning("Speed values too small, may cause calculation issues")
            return 0
            
        if abs(df['load'][0] - df['sprs'][0]) < 0.001 or abs(designed_load) < 0.001:
            logger.warning("Load values too small, may cause calculation issues")
            return 0
            
        if abs(df['outlet_draft'][0] - df['inlet_draft'][0]) < 0.001 or abs(designed_head) < 0.001:
            logger.warning("Draft differential too small, may cause calculation issues")
            return 0
            
        # Calculate converted flow
        converted_flow = (273 / (273 + designed_temp)) * designed_flow
        
        # Calculate flow rates using different methods
        df['flow(speed)'] = (df['speed'] / designed_speed) * converted_flow
        df['flow(load)'] = (((df['load'] - df['sprs']) / designed_load) ** (1/3)) * converted_flow
        df['flow(head)'] = (((df['outlet_draft'] - df['inlet_draft']) / (designed_head) * (-1)) ** (1/2)) * converted_flow

        logger.info(f"Flow calculations: flow(speed)={df['flow(speed)'][0]}, " +
                   f"flow(load)={df['flow(load)'][0]}, flow(head)={df['flow(head)'][0]}")
        
        # Calculate average flow and convert
        df['flow(average)'] = (df['flow(speed)'] + df['flow(load)'] + df['flow(head)']) / 3
        df['flow(avg_converted)'] = ((273 + df['temperature']) / 273) * df['flow(average)']

        # Calculate efficiency
        numerator = df['flow(avg_converted)'] * (-1) * (df['outlet_draft'] - df['inlet_draft'])
        denominator = 102 * 0.95 * (df['load'] - df['sprs'])
        
        logger.info(f"Efficiency calculation: numerator={numerator[0]}, denominator={denominator[0]}")
        
        if denominator[0] == 0:
            logger.warning("Denominator is zero in efficiency calculation, returning 0")
            return 0
            
        df['efficiency'] = numerator / denominator
        
        efficiency = df['efficiency'].mean()
        logger.info(f"Calculated efficiency: {efficiency}")
        
        return efficiency
        
    except Exception as e:
        logger.error(f'Error occurred while calculating efficiency: {e}')
        return 0

def store_efficiency_result(item):
    """
    Store fan efficiency data in DynamoDB.
    """
    try:
        logger.info(f"Storing efficiency result in DynamoDB for {item.get('TemplateName')}")
        
        # Ensure all required fields are present
        required_fields = ['Timestamp', 'TemplateName', 'PlantName', 'Fan Name', 'Efficiency']
        for field in required_fields:
            if field not in item:
                logger.warning(f"Missing required field {field} in item for {item.get('TemplateName', 'unknown template')}")
                item[field] = "Unknown" if field != 'Efficiency' else 0
        
        # Add a status field if not present
        if 'Status' not in item:
            item['Status'] = 'Processed'
            
        # Convert item to DynamoDB format
        dynamodb_item = {}
        for key, value in item.items():
            if isinstance(value, str):
                dynamodb_item[key] = {'S': value}
            elif isinstance(value, (int, float)):
                dynamodb_item[key] = {'N': str(value)}
            elif isinstance(value, bool):
                dynamodb_item[key] = {'BOOL': value}
            elif isinstance(value, datetime):
                # Convert datetime to ISO format string
                dynamodb_item[key] = {'S': value.isoformat()}
            elif value is None:
                dynamodb_item[key] = {'NULL': True}
            else:
                # Convert other types to string
                dynamodb_item[key] = {'S': str(value)}

        # Use the client API to put item
        try:
            # Attempt to store the item
            response = dynamodb.put_item(
                TableName=TARGET_TABLE_NAME,
                Item=dynamodb_item,
                ReturnConsumedCapacity='TOTAL'
            )
            
            if response['ResponseMetadata']['HTTPStatusCode'] == 200:
                logger.info(f"Successfully stored efficiency data for {item.get('TemplateName')}")
            else:
                logger.error(f"Failed to store efficiency data for {item.get('TemplateName')}: {response}")
                
            return response
        except Exception as e:
            logger.error(f"Error in DynamoDB put_item operation: {e}")
            return None
            
    except Exception as e:
        logger.error(f"Error storing efficiency data in DynamoDB: {e}")
        return None



def map_tags_to_sitewise(tag_list, plant_tag_mapping):
    """
    Map tags to SiteWise properties using plant-specific TagMaster tables.
    """
    logger.info("\n--- MAPPING TAGS TO SITEWISE ---")
    logger.info(f"Input tags count: {len(tag_list)}")
    logger.info(f"Plant mapping count: {len(plant_tag_mapping)}")
    tag_mapping = {}
    missing_mappings = {}

    for tag_uid in tag_list:
        plant_name = plant_tag_mapping.get(tag_uid)
        if not plant_name:
            logger.warning(f"No plant name found for tag {tag_uid}")
            missing_mappings[tag_uid] = "No plant name found"
            continue
            
        # Get tag metadata from plant-specific TagMaster table
        logger.info(f"Looking up tag {tag_uid} in {plant_name}_TagMaster")
        metadata = get_tag_mapping_by_uid(tag_uid, plant_name)
        
        if metadata:
            tag_mapping[tag_uid] = metadata
            logger.info(f"Successfully mapped tag {tag_uid} to AssetId={metadata['AssetId']}, PropertyId={metadata['PropertyId']}")
        else:
            logger.warning(f"Failed to map tag {tag_uid} (plant: {plant_name})")
            missing_mappings[tag_uid] = f"No mapping found in {plant_name}_TagMaster"
    
    logger.info(f"Successfully mapped {len(tag_mapping)} tags out of {len(tag_list)}")
    logger.info(f"Missing mappings: {missing_mappings}")
    return tag_mapping

def find_asset_property_in_sitewise(tag_uid):
    """
    Search for a tag UID directly in SiteWise by listing assets and their properties.
    Returns asset_id and property_id if found.
    """
    try:
        logger.info(f"Searching for tag {tag_uid} directly in SiteWise")
        
        # List all assets
        try:
            # First try with a specific model ID if available
            model_ids = sitewise_client.list_asset_models()['assetModelSummaries']
            
            for model in model_ids:
                try:
                    assets = sitewise_client.list_assets(
                        assetModelId=model['id'],
                        filter='ALL'
                    )['assetSummaries']
                    
                    for asset in assets:
                        asset_id = asset['id']
                        
                        # List properties for this asset
                        try:
                            properties = sitewise_client.list_asset_properties(
                                assetId=asset_id
                            )['assetPropertySummaries']
                            
                            for prop in properties:
                                prop_name = prop.get('name', '')
                                prop_external_id = prop.get('externalId', '')
                                
                                # Check if the tag UID matches
                                if (tag_uid == prop_name or 
                                    tag_uid == prop_external_id or
                                    (prop_name and tag_uid in prop_name) or
                                    (prop_external_id and tag_uid in prop_external_id)):
                                    
                                    logger.info(f"Found tag {tag_uid} in SiteWise: Asset={asset_id}, Property={prop['id']}")
                                    return {
                                        'AssetId': asset_id,
                                        'PropertyId': prop['id']
                                    }
                        except Exception as e:
                            logger.warning(f"Error listing properties for asset {asset_id}: {e}")
                            continue
                except Exception as e:
                    logger.warning(f"Error listing assets for model {model['id']}: {e}")
                    continue
                    
        except Exception as e:
            logger.error(f"Error searching SiteWise for tag {tag_uid}: {e}")
            
        logger.warning(f"Tag {tag_uid} not found in any SiteWise asset")
        return None
    except Exception as e:
        logger.error(f"Error searching SiteWise for tag {tag_uid}: {e}")
        return None



def map_tags_to_sitewise_hybrid(tag_list, plant_tag_mapping):
    """
    Map tags to SiteWise properties using plant-specific TagMaster tables first,
    then fall back to direct SiteWise lookup for missing tags.
    """
    logger.info("\n--- MAPPING TAGS TO SITEWISE (HYBRID) ---")
    logger.info(f"Input tags count: {len(tag_list)}")
    tag_mapping = {}
    missing_mappings = {}

    for tag_uid in tag_list:
        try:
            plant_name = plant_tag_mapping.get(tag_uid)
            if not plant_name:
                logger.warning(f"No plant name found for tag {tag_uid}")
                missing_mappings[tag_uid] = "No plant name found"
                continue
                
            # First try TagMaster lookup (fast)
            logger.info(f"Looking up tag {tag_uid} in {plant_name}_TagMaster")
            metadata = get_tag_mapping_by_uid(tag_uid, plant_name)
            
            if metadata:
                tag_mapping[tag_uid] = metadata
                logger.info(f"Successfully mapped tag {tag_uid} to AssetId={metadata['AssetId']}, PropertyId={metadata['PropertyId']}")
            else:
                # Fall back to direct SiteWise lookup (slower but more comprehensive)
                logger.info(f"TagMaster lookup failed, trying direct SiteWise lookup for {tag_uid}")
                sitewise_mapping = find_asset_property_in_sitewise(tag_uid)
                
                if sitewise_mapping:
                    tag_mapping[tag_uid] = sitewise_mapping
                    logger.info(f"Successfully mapped tag {tag_uid} to AssetId={sitewise_mapping['AssetId']}, PropertyId={sitewise_mapping['PropertyId']} (direct)")
                else:
                    logger.warning(f"Failed to map tag {tag_uid} (plant: {plant_name})")
                    missing_mappings[tag_uid] = f"No mapping found in {plant_name}_TagMaster or SiteWise"
        except Exception as e:
            logger.error(f"Error processing tag {tag_uid}: {e}")
            missing_mappings[tag_uid] = f"Error: {str(e)}"
    
    logger.info(f"Successfully mapped {len(tag_mapping)} tags out of {len(tag_list)}")
    logger.info(f"Missing mappings: {missing_mappings}")
    return tag_mapping




def ingest_efficiency(args):
    """
    Process a fan efficiency template and calculate efficiency.
    """

    try:
        temp, query_asset_data_func, current_time, tag_mapping = args
        
        # Extract template information
        template_name = temp['TemplateName'].iloc[0]
        plant_name = temp['PlantName'].iloc[0]

        logger.info(f"===== PROCESSING TEMPLATE: {template_name} (Plant: {plant_name}) =====")
        
        # Get design parameters with safe column checks
        design_flow = float(temp['DesignFlow'].iloc[0]) if 'DesignFlow' in temp.columns and not pd.isna(temp['DesignFlow'].iloc[0]) else 119.2
        design_temp = float(temp['DesignTemp'].iloc[0]) if 'DesignTemp' in temp.columns and not pd.isna(temp['DesignTemp'].iloc[0]) else 400
        design_speed = float(temp['DesignSpeed'].iloc[0]) if 'DesignSpeed' in temp.columns and not pd.isna(temp['DesignSpeed'].iloc[0]) else 657
        design_load = float(temp['DesignLoad'].iloc[0]) if 'DesignLoad' in temp.columns and not pd.isna(temp['DesignLoad'].iloc[0]) else 150
        design_head = float(temp['DesignHead'].iloc[0]) if 'DesignHead' in temp.columns and not pd.isna(temp['DesignHead'].iloc[0]) else 102
        
        logger.info(f"Design parameters for {template_name}: flow={design_flow}, temp={design_temp}, speed={design_speed}, load={design_load}, head={design_head}")
        
        # Parse parameters
        # In ingest_efficiency function
        parameters_str = temp['Parameters'].iloc[0].replace(" @@@", ",").replace("@@@", ",").replace('"', '"')
        logger.info(f"Parameters string for {template_name}: {parameters_str}")
        parameters = json.loads(parameters_str)
        logger.info(f"Parsed parameters for {template_name}: {parameters}")
    

       # Separate operational parameters from design parameters
        operational_parameters = {}
        design_parameters = {}

        for k, v in parameters.items():
            if k.startswith('Designed'):
                design_parameters[k] = v
            else:
                operational_parameters[k] = v

        logger.info(f"Operational parameters for {template_name}: {operational_parameters}")
        parameters_df = pd.DataFrame([operational_parameters])
        
        # Map parameters to SiteWise property IDs
        property_id_mapping = {}
        asset_property_mapping = {}
        asset_id = None
        
        for param, tag_uid in operational_parameters.items():
            if tag_uid is None or pd.isna(tag_uid) or str(tag_uid).isnumeric():
                logger.info(f"Skipping parameter {param} with value {tag_uid} (not a tag UID)")
                continue

            logger.info(f"Looking up tag {tag_uid} for parameter {param}") 
            tag_info = tag_mapping.get(tag_uid)
            if tag_info:
                if asset_id is None:
                    asset_id = tag_info['AssetId']
                    logger.info(f"Set asset_id={asset_id} for template {template_name}")
                property_id_mapping[param] = tag_info['PropertyId']
                asset_property_mapping[param] = {
                            'AssetId': tag_info['AssetId'],
                            'PropertyId': tag_info['PropertyId']
                }
                logger.info(f"Mapped parameter {param} to property ID {tag_info['PropertyId']}")
            else:
                logger.warning(f"No tag mapping found for {tag_uid} (parameter {param})")
        
        logger.info(f"Final property ID mapping for {template_name}: {property_id_mapping}")
        
        # Log more details about what's missing
        if not asset_id:
            logger.warning(f"Missing AssetId for template {template_name}")
            # Store in DynamoDB with zero values to keep track of the template
            item = {
                'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ') if hasattr(current_time, 'strftime') else str(current_time),
                'TemplateName': template_name,
                'PlantName': plant_name,
                'Fan Name': template_name,
                'Speed': 0,
                'Load': 0,
                'Inlet Draft': 0,
                'Outlet Draft': 0,
                'Temperature': 0,
                'Efficiency': 0,
                'Status': 'Missing AssetId'
            }
            store_efficiency_result(item)
            return f"Warning: Missing AssetId for template {template_name}, stored zero values"
            
        if not property_id_mapping:
            logger.warning(f"No property mappings available for template {template_name}, skipping data retrieval")
            # Store in DynamoDB with zero values to keep track of the template
            item = {
                'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ') if hasattr(current_time, 'strftime') else str(current_time),
                'TemplateName': template_name,
                'PlantName': plant_name,
                'Fan Name': template_name,
                'Speed': 0,
                'Load': 0,
                'Inlet Draft': 0,
                'Outlet Draft': 0,
                'Temperature': 0,
                'Efficiency': 0,
                'Status': 'Missing Property Mappings'
            }
            store_efficiency_result(item)
            return f"Warning: No property mappings for template {template_name}, stored zero values"
        
        # Ensure current_time is a datetime object
        if not isinstance(current_time, datetime):
            current_time = pd.to_datetime(current_time)
            
        # Fetch data from SiteWise
        start_time = current_time - timedelta(minutes=5)
        iot_data = fetch_fan_parameter_data_from_SiteWise(asset_id, property_id_mapping, start_time, current_time, query_asset_data_func, asset_property_mapping)
        logger.info(f"SiteWise data fetch complete for {template_name}. Data empty: {iot_data.empty}")
        
        # Process data
        if iot_data.empty:
            logger.warning(f"No data retrieved from SiteWise for template {template_name}")
            # Store in DynamoDB with zero values to keep track of the template
            item = {
                'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ') if hasattr(current_time, 'strftime') else str(current_time),
                'TemplateName': template_name,
                'PlantName': plant_name,
                'Fan Name': template_name,
                'Speed': 0,
                'Load': 0,
                'Inlet Draft': 0,
                'Outlet Draft': 0,
                'Temperature': 0,
                'Efficiency': 0,
                'Status': 'Processed '
            }
            logger.info(f"About to store efficiency result for {template_name}. Efficiency: 0")
            store_efficiency_result(item)
            logger.info(f"Storage complete for {template_name}")
            return f"Warning: No data retrieved from SiteWise for template {template_name}, stored zero values"
            
        parameters_average_df = last_1_minutes_average(iot_data, current_time, parameters_df)
        
        if isinstance(parameters_average_df, int) or parameters_average_df is None:
            logger.info(f'Some parameters value is not available for template {template_name} for last 1 minutes')
            df = last_1_minutes_average_without_null_check(iot_data, current_time, parameters_df)
            
            if df.empty:
                logger.warning(f"Could not calculate averages for {template_name}")
                return f"Warning: Could not calculate averages for {template_name}"
            
            # Store in DynamoDB
            item = {
                'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ') if hasattr(current_time, 'strftime') else str(current_time),
                'TemplateName': template_name,
                'PlantName': plant_name,
                'Fan Name': template_name,
                'Speed': float(df["speed"][0]) if not pd.isna(df["speed"][0]) else 0,
                'Load': float(df["load"][0]) if not pd.isna(df["load"][0]) else 0,
                'Inlet Draft': float(df["inlet_draft"][0]) if not pd.isna(df["inlet_draft"][0]) else 0,
                'Outlet Draft': float(df["outlet_draft"][0]) if not pd.isna(df["outlet_draft"][0]) else 0,
                'Temperature': float(df["temperature"][0]) if not pd.isna(df["temperature"][0]) else 0,
                'Efficiency': 0
            }
            store_efficiency_result(item)
            return f'Efficiency for {template_name} is currently 0'
        else:
            df = parameters_average_df
            efficiency = calculate_efficiency(
                df, 
                designed_flow=design_flow,
                designed_temp=design_temp,
                designed_speed=design_speed,
                designed_load=design_load,
                designed_head=design_head
            )
            efficiency = round(efficiency, 2)
            
            # Store in DynamoDB
            item = {
                'Timestamp': current_time.strftime('%Y-%m-%dT%H:%M:%S.%fZ') if hasattr(current_time, 'strftime') else str(current_time),
                'TemplateName': template_name,
                'PlantName': plant_name,
                'Fan Name': template_name,
                'Speed': float(df["speed"][0]) if not pd.isna(df["speed"][0]) else 0,
                'Load': float(df["load"][0]) if not pd.isna(df["load"][0]) else 0,
                'Inlet Draft': float(df["inlet_draft"][0]) if not pd.isna(df["inlet_draft"][0]) else 0,
                'Outlet Draft': float(df["outlet_draft"][0]) if not pd.isna(df["outlet_draft"][0]) else 0,
                'Temperature': float(df["temperature"][0]) if not pd.isna(df["temperature"][0]) else 0,
                'Efficiency': efficiency
            }
            logger.info(f"About to store efficiency result for {template_name}. Efficiency: {efficiency}")
            store_efficiency_result(item)
            logger.info(f"Storage complete for {template_name}")
            return f'Efficiency for {template_name} is currently {efficiency*100}%'
    except Exception as e:
        template_name = "unknown"
        try:
            if isinstance(temp, pd.DataFrame) and 'TemplateName' in temp:
                template_name = temp['TemplateName'].iloc[0]
        except:
            pass
        logger.error(f'Exception occurred while ingesting fan data for template {template_name}, error={e}')
        import traceback
        traceback.print_exc()  # Print the full traceback for debugging
        return f"Error processing {template_name}: {str(e)}"

