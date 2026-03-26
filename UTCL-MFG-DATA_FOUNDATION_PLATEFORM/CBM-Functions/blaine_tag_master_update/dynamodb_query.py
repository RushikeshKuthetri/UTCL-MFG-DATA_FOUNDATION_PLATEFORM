import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key, Attr
from typing import Any, Dict, List, Optional
import json
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer

serializer = TypeDeserializer()

def insert_table_resource(table_name: str, item: Dict[str, Any]):
    """
    Insert a single item into DynamoDB table
    
    Args:
        table_name: Name of the DynamoDB table
        item: Dictionary containing item data
    Returns:
        bool: True if successful, False otherwise
    """
    try:
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(table_name)
        
        response = table.put_item(Item=item)
        
        # Check if operation was successful
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            print(f"Successfully inserted item into {table_name}")
            sucess = f"Successfully inserted item into {table_name}"
            return True,sucess
        error = f"HTTPStatusCode is not 200 for insert into {table_name}"
        return False
        
    except ClientError as e:
        print.error(f"Error inserting item: {str(e)}")
        error = f"Error inserting item in {table_name}: {str(e)}"
        return False, error
    except Exception as e:
        print.error(f"Unexpected error: {str(e)}")
        error = f"Unexpected error: Error inserting item in {table_name}: {str(e)}"
        return False, error

def create_table_resource(table_name, partition_key, sort_key=None):
    """
    Creates a DynamoDB table with basic configuration
    
    Args:
        table_name (str): Name of the table to create
        partition_key (str): Name of the partition key
        sort_key (str, optional): Name of the sort key if needed
    """
    try:
        dynamodb = boto3.resource('dynamodb')
        
        # Define key schema
        key_schema = [
            {
                'AttributeName': partition_key,
                'KeyType': 'HASH'  # Partition key
            }
        ]
        
        # Define attribute definitions
        attribute_definitions = [
            {
                'AttributeName': partition_key,
                'AttributeType': 'S'  # String type
            }
        ]
        
        # Add sort key if provided
        if sort_key:
            key_schema.append({
                'AttributeName': sort_key,
                'KeyType': 'RANGE'  # Sort key
            })
            attribute_definitions.append({
                'AttributeName': sort_key,
                'AttributeType': 'S'  # String type
            })
        
        # Create the table
        table = dynamodb.create_table(
            TableName=table_name,
            KeySchema=key_schema,
            AttributeDefinitions=attribute_definitions,
            BillingMode='PAY_PER_REQUEST'  # On-demand capacity mode
        )
        
        # Wait for the table to be created
        print(f"Waiting for table {table_name} to be created...")
        table.wait_until_exists()
        
        print(f"Table {table_name} has been created successfully")
        return None
        
    except ClientError as e:
        print(f"Error creating table: {e.response['Error']['Message']}")
        error = f"Error creating table {table_name}: {e}"
        return None, error
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        error = f"Unexpected error: Error creating table{table_name}: {e}"
        return None, error

def delete_table_resource(table_name):
    """
    Deletes a DynamoDB table using boto3 resource
    
    Args:
        table_name (str): Name of the table to delete
    """
    try:
        # Initialize DynamoDB resource
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(table_name)
        
        # Delete the table
        print(f"Deleting table: {table_name}")
        table.delete()
        
        # Wait for the table to be deleted
        print("Waiting for table to be deleted...")
        table.wait_until_not_exists()
        
        print(f"Table {table_name} has been deleted successfully")
        return None
        
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceNotFoundException':
            print(f"Table {table_name} does not exist")
        else:
            print(f"Error deleting table {table_name}: {e.response['Error']['Message']}")
        error = f'Table {table_name} does not exist or Error deleting table: {e}'
        return None, error
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        error = f'Unexpected error: Error while deleting Table {table_name}: {e}'
        return None, error

def deserialize(data):
    if isinstance(data, list):
        return [deserialize(v) for v in data]

    if isinstance(data, dict):
        try:
            return serializer.deserialize(data)
        except TypeError:
            return {k: deserialize(v) for k, v in data.items()}
    else:
        return data
    
def query_on_index(table_name, index_name, hash_key, search_value):
    # Initialize the DynamoDB client
    dynamodb = boto3.client('dynamodb')
    # Define the query parameters
    key_condition_expression = '#hash_key = :hash_value'
    expression_attribute_names = {
        '#hash_key': hash_key
        #'#sort_key': 'yourSortKeyName',
    }
    expression_attribute_values = {
        ':hash_value': {'S': search_value},  # Update with the value for the hash key
        #':sort_value': {'S': 'yourSortKeyValue'},  # Update with the value for the sort key
    }
    try:
        # Perform the query
        response = dynamodb.query(
            TableName=table_name,
            IndexName=index_name,
            KeyConditionExpression=key_condition_expression,
            ExpressionAttributeNames=expression_attribute_names,
            ExpressionAttributeValues=expression_attribute_values
        )
        items = deserialize(response['Items'])
        # Handle paginated results if necessary
        while 'LastEvaluatedKey' in response:
            response = dynamodb.query(
                TableName=table_name,
                IndexName=index_name,
                KeyConditionExpression=key_condition_expression,
                ExpressionAttributeNames=expression_attribute_names,
                ExpressionAttributeValues=expression_attribute_values,
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            items.extend(deserialize(response['Items']))
        return items
    except Exception as e:
        print(f"Error querying asset data: {str(e)}")
        raise

def basic_scan(table_name):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    try:
        response = table.scan()
        items = response['Items']
        
        # Handle pagination if there are more items
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            items.extend(response['Items'])
            
        return items
    except Exception as e:
        print(f"Error scanning table: {str(e)}")
        raise

def filtered_scan(table_name, filter_expression):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    try:
        response = table.scan(
            FilterExpression=filter_expression
        )
        items = response['Items']
        
        while 'LastEvaluatedKey' in response:
            response = table.scan(
                FilterExpression=filter_expression,
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            items.extend(response['Items'])
            
        return items
    except Exception as e:
        print(f"Error scanning table: {str(e)}")
        raise

def projected_scan(table_name, attributes_to_get):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    try:
        response = table.scan(
            ProjectionExpression=', '.join(attributes_to_get)
        )
        items = response['Items']
        
        while 'LastEvaluatedKey' in response:
            response = table.scan(
                ProjectionExpression=', '.join(attributes_to_get),
                ExclusiveStartKey=response['LastEvaluatedKey']
            )
            items.extend(response['Items'])
            
        return items
    except Exception as e:
        print(f"Error scanning table: {str(e)}")
        raise

def parallel_scan(table_name, total_segments):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    
    threads = []
    all_items = []
    
    def scan_segment(segment, total_segments):
        items = []
        
        try:
            response = table.scan(
                Segment=segment,
                TotalSegments=total_segments
            )
            items.extend(response['Items'])
            
            while 'LastEvaluatedKey' in response:
                response = table.scan(
                    Segment=segment,
                    TotalSegments=total_segments,
                    ExclusiveStartKey=response['LastEvaluatedKey']
                )
                items.extend(response['Items'])
                
            all_items.extend(items)
        except Exception as e:
            print(f"Error scanning segment {segment}: {str(e)}")
            raise
    
    # Create threads for parallel scanning
    from threading import Thread
    for segment in range(total_segments):
        thread = Thread(target=scan_segment, args=(segment, total_segments))
        threads.append(thread)
        thread.start()
    
    # Wait for all threads to complete
    for thread in threads:
        thread.join()
    
    return all_items
