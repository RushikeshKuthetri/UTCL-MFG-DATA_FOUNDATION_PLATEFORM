import logging
import boto3
from decimal import Decimal
from datetime import datetime, timedelta, timezone
import os
from boto3.dynamodb.conditions import Key, Attr

# Configure logging
logger = logging.getLogger(__name__)
# Suppress boto3/botocore logging
logging.getLogger('botocore').setLevel(logging.ERROR)
logging.getLogger('boto3').setLevel(logging.ERROR)
logging.getLogger('urllib3').setLevel(logging.ERROR)


# Environment variables
i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

# Initialize AWS resources
session = boto3.Session(region_name='ap-south-1')
dynamodb = session.resource('dynamodb')
efficiency_table = dynamodb.Table('Utcl_CBM_Fan_Efficiency_Testing')
average_efficiency_table = dynamodb.Table('Utcl_CBM_Fan_AverageEfficiency_Testing')

def fetch_fan_efficiency_data():
    """
    Fetch fan efficiency data from the last 10 minutes.
    Uses DynamoDB query with template name and timestamp filtering.
    """
    try:
        ten_minutes_ago = datetime.now(timezone.utc) - timedelta(minutes=10)
        ten_minutes_ago_str = ten_minutes_ago.isoformat()

        logger.info(f"Fetching efficiency data since {ten_minutes_ago_str}")
        logger.info("Scanning efficiency table for template names...")
        # Get all template names first (this is more efficient than scanning the whole table)
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
            
            logger.info(f"Found {len(items)} recent records for {template_name}")
            all_items.extend(items)
        
        logger.info(f"Fetched {len(all_items)} fan efficiency records from the last 10 minutes")
        return all_items
        
    except Exception as e:
        logger.error(f"Error fetching fan efficiency data: {e}", exc_info=True)
        return []

def fetch_average_efficiency_data():
    """
    Fetch average efficiency data from the last hour.
    Uses DynamoDB query with template name and timestamp filtering.
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
    
def check_table_structure():
    """
    Check the structure of the DynamoDB tables to ensure they match our expectations.
    """
    try:
        # Check efficiency table
        eff_desc = dynamodb.meta.client.describe_table(TableName='Utcl_CBM_Fan_Efficiency_Testing')
        logger.info(f"Efficiency table exists with {eff_desc['Table']['ItemCount']} items")
        
        # Check key schema
        eff_keys = [k['AttributeName'] for k in eff_desc['Table']['KeySchema']]
        logger.info(f"Efficiency table key schema: {eff_keys}")
        
        # Check average efficiency table
        avg_desc = dynamodb.meta.client.describe_table(TableName='Utcl_CBM_Fan_AverageEfficiency_Testing')
        logger.info(f"Average efficiency table exists with {avg_desc['Table']['ItemCount']} items")
        
        # Check key schema
        avg_keys = [k['AttributeName'] for k in avg_desc['Table']['KeySchema']]
        logger.info(f"Average efficiency table key schema: {avg_keys}")
        
        return True
    except Exception as e:
        logger.error(f"Error checking table structure: {e}", exc_info=True)
        return False
    
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
    
    Args:
        temp_list: List of recent efficiency records
        avg_data_list: List of previous average efficiency records
        template_name: The template name to process
        
    Returns:
        str: Status message about efficiency changes, or None if an error occurred
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
            return f"New average efficiency calculated for {template_name}: {avg_eff}"
            
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
            return f'Last efficiency values are the same for {template_name}'
            
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
                    return f'Efficiency increased for {template_name} by {drop_percent}%'
                else:
                    return f'Efficiency dropped for {template_name} by {drop_percent}%'
                    
            except (IndexError, KeyError, ValueError) as e:
                logger.error(f"Error processing previous efficiency for {template_name}: {e}")
                return None

    except Exception as e:
        logger.error(f'Error during efficiency ingestion for {template_name}: {e}', exc_info=True)
        return None

