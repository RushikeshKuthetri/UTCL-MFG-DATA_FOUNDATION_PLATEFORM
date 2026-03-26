import boto3
import time
import copy
from botocore.exceptions import ClientError

def chunk_array_history(arr, chunk_size=16, start_date=None, end_date=None):
    result = []
    count = 1
    
    for i in range(0, len(arr), chunk_size):
        sliced_arr = arr[i:i + chunk_size]
        final_arr = []
        
        for j in range(len(sliced_arr)):
            item = sliced_arr[j]
            item['entryId'] = str(count)
            item['startDate'] = start_date
            item['endDate'] = end_date
            item['qualities'] = ["GOOD"]
            final_arr.append(item)
            count += 1
        
        result.append(final_arr)
    
    return result

def chunk_array_aggregates(arr, aggregateType ="AVERAGE", resolution="1m", start_date=None, end_date=None):
    result = []
    count = 1
    
    for i in range(0, len(arr), 16):
        sliced_arr = arr[i:i + 16]
        final_arr = []
        
        for j in range(len(sliced_arr)):
            item = sliced_arr[j]
            item['entryId'] = str(count)
            item['startDate'] = start_date
            item['endDate'] = end_date
            item['qualities'] = ["GOOD"]
            item['aggregateTypes'] = [aggregateType]
            item['resolution'] = resolution
            final_arr.append(item)
            count += 1
        
        result.append(final_arr)
    
    return result

def batch_get_asset_property_aggregates(payload, aggregateType, resolution, start_date, end_date):
    client = boto3.client('iotsitewise')
    try:
        # Chunk the payload
        batch_entries_array = chunk_array_aggregates(payload,  aggregateType, resolution, start_date=start_date, end_date=end_date)
        
        results = []
        next_token = None
        # Iterate through each chunk in the batch
        for entries in batch_entries_array:
            
            entries_copy = copy.deepcopy(entries)
            # Make the API call to get asset property history values
            try:
                # Remove the key from each dictionary
                for item in entries:
                    item.pop("Tag UID", None)  # None prevents KeyError if key is missing
                    item.pop("Plant", None)
                    item.pop("Node_id", None)

                response = client.batch_get_asset_property_aggregates(
                    entries = entries
                )
                # Check if there are any successful entries with data
                next_token = response.get('nextToken', None)
                successEntries = response.get('successEntries', [])

                if successEntries:
                    # Create a lookup dictionary for faster access
                    entries_lookup = {
                        entry.get('entryId'): {
                            'Tag UID': entry.get('Tag UID'),
                            'Plant': entry.get('Plant'),
                            'Node_id': entry.get('Node_id')
                        }
                        for entry in entries_copy
                    }
                    
                    # Process entries more efficiently
                    for entry in successEntries:
                        try:
                            entry_id = entry.get('entryId')
                            if entry_id in entries_lookup:
                                matched_entry = entries_lookup[entry_id]
                                agg_values = entry.get('aggregatedValues', [{}])[0]
                                
                                # Update entry with all required fields at once
                                entry.update({
                                    'Plant': matched_entry['Plant'],
                                    'Id': matched_entry['Tag UID'],
                                    'Timestamp': agg_values.get('timestamp'),
                                    'Value': agg_values.get('value', {}).get('average'),
                                    'Node_id': matched_entry['Node_id']
                                })
                        except Exception as e:
                            print(f"Error processing entry {entry_id}: {str(e)}")
                            continue
                            
                    results.extend(successEntries)

            except ClientError as e:
                print(f"ClientError making BatchGetAssetPropertyAggregates call: {e}")
            except Exception as e:
                print(f"Error making BatchGetAssetPropertyAggregates call: {e}")
                return False
            
        return results
    except Exception as error:
        print("Error getting asset property history value: ", error)
        return False

def get_asset_property_history_value(payload, start_date, end_date):
    client = boto3.client('iotsitewise')
    try:
        # Chunk the payload
        batch_entries_array = chunk_array_history(payload, chunk_size=16, start_date=start_date, end_date=end_date)
        
        any_data_received = False
        
        # Iterate through each chunk in the batch
        for entries in batch_entries_array:
            # Construct the request parameters
            batch_get_params = {
                'entries': entries
            }

            # Make the API call to get asset property history values
            try:
                response = client.batch_get_asset_property_value_history(**batch_get_params)
                
                # Check if there are any successful entries with data
                if any(entry.get('assetPropertyValueHistory') for entry in response.get('successEntries', [])):
                    any_data_received = True
                    break
            except Exception as e:
                print(f"Error making BatchGetAssetPropertyValueHistory call: {e}")
                return False
        
        print(f"Any data received: {any_data_received}")
        return any_data_received

    except Exception as error:
        print("Error getting asset property history value: ", error)
        return False

def sitewise_execute_query(query_string):
    # Initialize the SiteWise client
    client = boto3.client('iotsitewise')
    print(query_string)
    # Execute the query
    try:
        
        response = client.execute_query(
        queryString=query_string
        )
    except Exception as e:
            print(f"Error querying asset data: {str(e)}")
            raise
    
    # Output the query result
    print("Query execution result:")
    for row in response.get('results', []):
        print(f"AssetId: {row['assetId']}, PropertyId: {row['propertyId']}, "
            f"Timestamp: {row['timestamp']}, Value: {row['value']}")

    # Wait for the query to finish executing if needed (for long-running queries)
    execution_id = response['queryExecutionId']
    while True:
        status_response = client.describe_query_execution(
            queryExecutionId=execution_id
        )
        status = status_response['status']['state']
        if status in ['SUCCEEDED', 'FAILED']:
            break
        else:
            print("Query is still running. Checking again in 10 seconds...")
            time.sleep(10)

    # Once the query finishes, fetch the results
    if status == 'SUCCEEDED':
        result_response = client.get_query_results(
            queryExecutionId=execution_id
        )
        # Print the query results
        print("Query Results:")
        for row in result_response.get('results', []):
            print(row)
    else:
        print(f"Query failed with status: {status_response['status']['state']}")


def batch_get_asset_property(entries):
    # Initialize the SiteWise client
    client = boto3.client('iotsitewise')

    
    # Call BatchGetAssetPropertyValue
    response = client.batch_get_asset_property_value(
        entries=entries
    )

    # Process the response
    for result in response.get('assetPropertyValueResponses', []):
        entry_id = result['entryId']
        value = result['assetPropertyValue']['value']
        timestamp = result['assetPropertyValue']['timestamp']

    # Handle errors if any
    for error in response.get('errorEntries', []):
        print(f"Error in entry {error['entryId']}: {error['errorMessage']}")
