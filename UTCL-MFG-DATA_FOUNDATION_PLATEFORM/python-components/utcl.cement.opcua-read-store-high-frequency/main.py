import asyncio
from asyncua import Client, Node
import sys
from stream_manager import (
    StreamManagerClient
)
import time
from datetime import datetime
from sitewise_manager import insert_data_to_stream
import dynamodb_manager
import logging
import json
import boto3

_logger = logging.getLogger('UTCL:main')
logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger('asyncua').setLevel(logging.WARNING)

configs = json.loads(sys.argv[1])
if "plant_code" not in configs:
    _logger.error("plant_code key is not present")
    exit()
if "does_contain_digital_tags" not in configs:
    _logger.error("does_contain_digital_tags key is not present")
    exit()
if "buffered_streams" not in configs:
    _logger.error("buffered_streams key is not present")
    exit()
if "server" not in configs:
    _logger.error("server key is not present")
    exit()
if "interval" not in configs:
    _logger.error("interval key is not present")
    exit()


plant_code = configs["plant_code"]
does_contain_digital_tags = configs["does_contain_digital_tags"]
buffered_streams = configs["buffered_streams"]
server = configs["server"]
input_interval = configs["interval"]

REALTIME_STREAM_NAME = "SiteWise_Stream"
SUBSCRIPTION_BATCH_SIZE = 500

# Binary conversion logic integrated here
def process_node_value(tag_name: str, node_value):
    # set default value to 0
    bit = 0
    try:
        # if the plant code is NMGD (Magdalla Plant)
        if plant_code == "NMGD":
            binary_value = bin(int(node_value))[2:]
            if tag_name.endswith("_PH"):
                bit = binary_value[-9]
            elif "_TMR" in tag_name or "_FB" in tag_name:
                bit = binary_value[-5]
            elif "_Cyc" not in tag_name and tag_name.endswith("_Run"):
                bit = binary_value[-8]
            elif "CM_" in tag_name:
                bit = binary_value[-8]
            else:
                bit = binary_value[-5]
        else:    
            binary_value = bin(int(node_value))[2:]
            # set bit value based on tag name
            if tag_name.endswith("_PH"): 
                bit = binary_value[-9]
            elif "_TMR" in tag_name:
                bit = binary_value[-5]
            elif "_FB" in tag_name:
                bit = binary_value[-5]
            elif "_Cyc" not in tag_name and tag_name.endswith("_RUN"):
                bit = binary_value[-8]
            else:
                bit = binary_value[-5]
                        
    except Exception as e:
        pass
        # _logger.error(f"Error processing binary value for tag {tag_name}: {e}")
    return int(bit)

class SubscriptionHandler:
    def __init__(self, endpoint):
        self.endpoint = endpoint
                 
    def datachange_notification(self, node, val, data):
        # _logger.info(f"New data change event on node {node}: {val}")

        tag = next((tag for tag in self.endpoint["Valid Tags"] if tag["Node"] == node), None)
        if tag:
            tag["LatestValue"] = val

def chunk_list(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]


async def ingest_data(tags, stream_name, stream_manager_client):
    count = 0
    for tag in tags:
        if "LatestValue" not in tag:
            continue
        if tag["LatestValue"] is None:
            continue
        if tag["LatestValue"] == "":
            continue
        node_value = tag["LatestValue"]

        try:
            # if boolean, convert to integer
            if isinstance(node_value, bool):
                node_value = int(node_value)
            # if string, convert to integer
            elif isinstance(node_value, str):
                node_value = int(node_value)
        except:
            pass

        if does_contain_digital_tags and tag["Is Digital Tag"] and tag.get("ConvertToBinary"):
            tag_name = tag["CDH Tag"]
            value = process_node_value(tag_name, node_value)
        else:
            value = node_value

        data = {
            "alias": tag["CDH Tag"],
            "timestamp": time.time(),
            "value": value,
            "is_digital_tag": tag["Is Digital Tag"]
        }
        await insert_data_to_stream(stream_name, data, stream_manager_client)
        count += 1
    return count


async def subscribe_to_node(client: Client, handler, endpoint):
    try:
        source_name = endpoint["Name"]
        await client.connect()
        _logger.info(f"Client connected to source: {source_name} | Endpoint: {endpoint['End Point']}")
        
        subscription = await client.create_subscription(500, handler)
        
        for tag in endpoint["Tags"]:
            try:
                tag["Node"] = client.get_node(tag["Tag Path"])
                endpoint["Valid Tags"].append(tag)
            except Exception as e:
                pass
        
        
        _logger.info(f"Total Valid tags: {len(endpoint['Valid Tags'])} for source: {source_name} | Endpoint: {endpoint['End Point']}")
        if len(endpoint['Valid Tags']) == 0:
                _logger.info(f"Valid tags are 0 for source: {source_name} | Endpoint: {endpoint['End Point']}")
                _logger.info(f"Reconnecting in 60 seconds for source {source_name} | Endpoint: {endpoint['End Point']}")
                await asyncio.sleep(60)
                raise Exception("Valid Tags Count 0")
        
        nodes = [tag["Node"] for tag in endpoint["Valid Tags"]]
        
        for i in range(0, len(nodes), SUBSCRIPTION_BATCH_SIZE):
            batch = nodes[i:i + SUBSCRIPTION_BATCH_SIZE]
            await subscription.subscribe_data_change(batch)

        await asyncio.sleep(10)

        _logger.info(f"Subscribed to data change for source: {source_name}")
        
        interval = input_interval # interval in seconds to send data
        next_run = time.perf_counter()
        

        while True:
            _logger.info("Ingestion process started for source: " + source_name)
            # Check connection status
            try:
                await client.check_connection()
            except Exception as e:
                _logger.error(f"Connection check failed for source {source_name} | Endpoint {endpoint['End Point']}: {e}")
                break  # Exit the loop to reconnect
            
            other_ingestion_count = 0
            realtime_ingestion_count = 0

            # Filter tags based on "Is Realtime" key
            realtime_tags = [tag for tag in endpoint["Valid Tags"] if tag.get("Is Realtime")]
            other_tags = [tag for tag in endpoint["Valid Tags"] if not tag.get("Is Realtime")]
            stream_manager_client = StreamManagerClient()

            if len(other_tags) > 0:
                chunk_size = (len(other_tags) + len(buffered_streams) - 1) // len(buffered_streams)
                _logger.info(f"Chunk size: {chunk_size} for source: {source_name}")
                chunks = list(chunk_list(other_tags, chunk_size))
                for i, stream_name in enumerate(buffered_streams):
                    if i < len(chunks):
                        chunk_tags = chunks[i]
                    else:
                        chunk_tags = []
                    
                    count = await ingest_data(chunk_tags, stream_name, stream_manager_client)
                    other_ingestion_count += count
            
            if len(realtime_tags) > 0:
                realtime_ingestion_count = await ingest_data(realtime_tags, REALTIME_STREAM_NAME, stream_manager_client)

            stream_manager_client.close()
            _logger.info(f"Other ingested: {other_ingestion_count} | Realtime ingested: {realtime_ingestion_count} for source: {source_name}")
            
            await dynamodb_manager.put_item({
                "Source": source_name,
                "Plant": plant_code,
                "Endpoint": endpoint["End Point"],
                "TotalTags": len(endpoint["Tags"]),
                "ValidTags": len(endpoint["Valid Tags"]),
                "CreatedAt": datetime.now().isoformat(),
                "OtherIngested": other_ingestion_count,
                "RealtimeIngested": realtime_ingestion_count,
                "IsConnected": True,
                "ErrorOccurred": None,
                "Server": server,
                "TTL": int(time.time()) + 60 * 60 * 24 * 30 # 30 days
            })
            
             # Schedule exact next execution time
            next_run += interval
            # Calculate remaining sleep time
            sleep_time = max(0, next_run - time.perf_counter())
            await asyncio.sleep(sleep_time)

    except Exception as e:
        _logger.error(f"Connection failed: {e} for source: {source_name} | Endpoint: {endpoint['End Point']}")
        await dynamodb_manager.put_item({
            "Source": source_name,
            "Plant": plant_code,
            "Endpoint": endpoint["End Point"],
            "TotalTags": len(endpoint["Tags"]),
            "ValidTags": len(endpoint["Valid Tags"]),
            "CreatedAt": datetime.now().isoformat(),
            "OtherIngested": 0,
            "RealtimeIngested": 0,
            "IsConnected": False,
            "ErrorOccurred": str(e),
            "Server": server,
            "TTL": int(time.time()) + 60 * 60 * 24 * 30 # 30 days
        })
        
        _logger.info("Reconnecting in 30 seconds for source: " + source_name)
        await disconnect(client, source_name)
        await asyncio.sleep(30)
    finally:
        await disconnect(client, source_name)

async def disconnect(client: Client, source):
    try:
        await client.disconnect()
    except:
        _logger.warning(f"Error when disconnection for source {source}")

async def run(endpoint):
    url = endpoint["End Point"]
    source_name = endpoint["Name"]
    client = Client(url, timeout=60)
    handler = SubscriptionHandler(endpoint)

    while True:
        try:
            _logger.info(f"Starting the subscription process for source: {source_name} | Endpoint: {url}")
            # Initialize the valid tags list
            endpoint["Valid Tags"] = []
            await subscribe_to_node(client, handler, endpoint)
        except Exception as e:
            _logger.error(f"Exception occurred: {e} for source: {source_name}")


async def main():
    endpoints_data = await dynamodb_manager.get_all_data(plant_code)
    if len(endpoints_data) > 0:
        tasks = [run(endpoint) for endpoint in endpoints_data]
        await asyncio.gather(*tasks)
    else:
        _logger.error(f"Data not found for plant code: {plant_code}")


if __name__ == "__main__":
    asyncio.run(main())