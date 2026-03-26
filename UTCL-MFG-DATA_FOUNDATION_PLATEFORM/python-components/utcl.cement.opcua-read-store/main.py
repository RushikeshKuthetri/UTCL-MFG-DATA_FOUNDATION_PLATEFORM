import asyncio
from asyncua import Client, Node, ua
from  asyncua.crypto.security_policies import SecurityPolicyBasic256Sha256
import os
import sys
from stream_manager import (
    StreamManagerClient
)
import paho.mqtt.client as mqtt
import time
from datetime import datetime
from sitewise_manager import insert_data_to_stream
import dynamodb_manager
import logging
import json
import socket

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
if "enabled" not in configs:
    _logger.error("enabled key is not present")
    exit()
if "authentication_required" not in configs:
    _logger.error("authentication_required key is not present")
    exit()

enabled = configs["enabled"]
plant_code = configs["plant_code"]
does_contain_digital_tags = configs["does_contain_digital_tags"]
buffered_streams = configs["buffered_streams"]
server = configs["server"]
# List of endpoint names to filter; if provided, data will be fetched only for these endpoints, otherwise for all
endpoint_filter = configs.get("endpoint_filter", [])
# Dummy property to trigger Greengrass deployment change; not used in code logic
deployment_trigger = configs.get("deployment_trigger", None)

authentication_required = configs.get("authentication_required", False)

publishing_interval = configs.get("publishing_interval", 500)

mqtt_broker_url = configs.get("mqtt_broker_url")
mqtt_port = configs.get("mqtt_port")
mqtt_topic = configs.get("mqtt_topic")


REALTIME_STREAM_NAME = "SiteWise_Stream"
SUBSCRIPTION_BATCH_SIZE = 500

# Binary conversion logic integrated here
def process_node_value(tag_name: str, node_value):
    try:
        # set default value to 0
        bit = 0
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
        
        return int(bit)                    
    except Exception as e:
        return 0

class SubscriptionHandler:
    def __init__(self, endpoint):
        self.endpoint = endpoint
                 
    def datachange_notification(self, node, val, data):
        # _logger.info(f" New data change event on node {node}: {val}")
        
        # this code was not working, when the path is duplicate for multiple tags
        # tag = next((tag for tag in self.endpoint["Valid Tags"] if tag["Node"] == node), None)
        # if tag:
        #     tag["LatestValue"] = val
        
        # this code is working, when the path is duplicate for multiple tags
        
        tags = [tag for tag in self.endpoint["Valid Tags"] if tag["Node"] == node]
        for tag in tags:
            tag["LatestValue"] = val

def chunk_list(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]


async def ingest_data(tags, stream_name, stream_manager_client, mqtt_data_batch=None):
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
            _logger.error(f" Error converting node value for tag {tag['CDH Tag']}: {node_value}")

        if does_contain_digital_tags and tag["Is Digital Tag"] and tag.get("ConvertToBinary"):
            tag_name = tag["CDH Tag"]
            value = process_node_value(tag_name, node_value)
        else:
            value = node_value

        data = {
            "alias": tag["CDH Tag"],
            "timestamp": time.time(),
            "value": value,
            "is_digital_tag": tag["Is Digital Tag"],
            "unit_of_measurement": tag["Unit Of Measurement"]
        }
        
        # Send to SiteWise stream individually (unchanged)
        await insert_data_to_stream(stream_name, data, stream_manager_client)
        
        # Add to MQTT batch instead of sending individually
        if mqtt_data_batch is not None:
            mqtt_data_batch.append(data)
            _logger.debug(f" Added tag '{tag['CDH Tag']}' to MQTT batch. Batch size: {len(mqtt_data_batch)}")
        
        count += 1
    return count


async def publish_batch(client, data_batch, source_name):
    try:
        if len(data_batch) == 0:
            _logger.warning(f" No data to publish for source: {source_name}")
            return
            
        # Send all tags as a single JSON array
        for data in data_batch:
            alias = data['alias']
            data_json = json.dumps(data)
            client.publish(f"{mqtt_topic}/{alias}", data_json)
        
        _logger.info(f" MQTT BATCH PUBLISHED for source: {source_name} | Tags Count={len(data_batch)}")
        
    except Exception as e:
        _logger.error(f" Error while publishing batch data to MQTT broker: {e}")
        _logger.error(f" Failed batch details - Source: {source_name}, Size: {len(data_batch)}")
        # Log the tags that failed to send
        if len(data_batch) > 0:
            failed_tags = [tag['alias'] for tag in data_batch]
            _logger.error(f"Failed tags: {failed_tags}")


# Keep the old publish function for backward compatibility if needed
async def publish(client, data):
    try:
        client.publish(mqtt_topic, data)
    except Exception as e:
        _logger.error(f"Error while publishing data to MQTT broker: {e}")
        _logger.info(data)

async def subscribe_to_node(client: Client, handler, endpoint):
    try:
        source_name = endpoint["Name"]
        await client.connect()
        _logger.info(f"Client connected to source: {source_name} | Endpoint: {endpoint['End Point']}")
        
        
        
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
            subscription = await client.create_subscription(publishing_interval, handler)
            response_list = await subscription.subscribe_data_change(batch)
            for node, response in zip(batch, response_list):
                if not isinstance(response, int):
                    _logger.error(f"Failed to subscribe to node: {node}, Status Code: {response}")

        await asyncio.sleep(10)

        _logger.info(f"Subscribed to data change for source: {source_name}")
        
        interval = 60 # interval in seconds to send data
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
            
            # Initialize MQTT batch list
            mqtt_data_batch = []
            _logger.info(f"Initialized MQTT batch for source: {source_name}")
            
            if mqtt_broker_url and mqtt_topic:
                try:
                    mqtt_client = mqtt.Client()
                    if configs.get("mqtt_username") and configs.get("mqtt_password"):
                        mqtt_client.username_pw_set(configs["mqtt_username"], configs["mqtt_password"])
                    mqtt_client.connect(mqtt_broker_url, mqtt_port)
                    _logger.info(f"🔗 Connected to MQTT broker: {mqtt_broker_url}:{mqtt_port}")
                except Exception as e:
                    _logger.error(f"Error connecting to MQTT broker: {e}")
                    mqtt_client = None
            else:
                mqtt_client = None
                _logger.info("MQTT not configured - skipping MQTT publishing")

            if len(other_tags) > 0:
                chunk_size = (len(other_tags) + len(buffered_streams) - 1) // len(buffered_streams)
                _logger.info(f"Chunk size: {chunk_size} for source: {source_name}")
                chunks = list(chunk_list(other_tags, chunk_size))
                for i, stream_name in enumerate(buffered_streams):
                    if i < len(chunks):
                        chunk_tags = chunks[i]
                    else:
                        chunk_tags = []
                    
                    count = await ingest_data(chunk_tags, stream_name, stream_manager_client, mqtt_data_batch)
                    other_ingestion_count += count
            
            if len(realtime_tags) > 0:
                realtime_ingestion_count = await ingest_data(realtime_tags, REALTIME_STREAM_NAME, stream_manager_client, mqtt_data_batch)

            # Send batched MQTT data
            if mqtt_client is not None and len(mqtt_data_batch) > 0:
                _logger.info(f"Preparing to send MQTT batch with {len(mqtt_data_batch)} tags for source: {source_name}")
                await publish_batch(mqtt_client, mqtt_data_batch, source_name)
            elif mqtt_client is not None and len(mqtt_data_batch) == 0:
                _logger.warning(f"MQTT client available but no data to send for source: {source_name}")
            elif mqtt_client is None:
                _logger.info(f"MQTT not available - skipping batch publish for source: {source_name}")

            stream_manager_client.close()
            if mqtt_client is not None:
                mqtt_client.disconnect()
                _logger.debug(f"Disconnected from MQTT broker for source: {source_name}")
                
            _logger.info(f"   INGESTION SUMMARY for {source_name}:")
            _logger.info(f"   • Other ingested: {other_ingestion_count}")
            _logger.info(f"   • Realtime ingested: {realtime_ingestion_count}")
            _logger.info(f"   • Total MQTT batch size: {len(mqtt_data_batch)}")
            
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
                "IP": socket.gethostbyname(socket.gethostname()),
                "TTL": int(time.time()) + 60 * 60 * 24 * 30, # 30 days
                "MqttBatchSize": len(mqtt_data_batch)  # Added MQTT batch size to monitoring
            })
            
             # Schedule exact next execution time
            next_run += interval
            # Calculate remaining sleep time
            sleep_time = max(0, next_run - time.perf_counter())
            _logger.info(f" Sleeping for {sleep_time:.2f} seconds until next cycle for source: {source_name}")
            await asyncio.sleep(sleep_time)

    except Exception as e:
        _logger.error(f" Connection failed: {e} for source: {source_name} | Endpoint: {endpoint['End Point']}")
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
            "IP": socket.gethostbyname(socket.gethostname()),
            "TTL": int(time.time()) + 60 * 60 * 24 * 30, # 30 days
            "MqttBatchSize": 0
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
        _logger.warning(f" Error when disconnection for source {source}")

async def run(endpoint):
    url = endpoint["End Point"]
    source_name = endpoint["Name"]
    client = Client(url, timeout=60)
    
    if authentication_required:
        cert_here = os.path.dirname(os.path.abspath(__file__))
        key_here = os.path.dirname(os.path.abspath(__file__))
        cert = os.path.join(cert_here, "certificates/opcua_client.der")
        private_key = os.path.join(key_here, "certificates/opcua_client.pem")
        await client.set_security(
            SecurityPolicyBasic256Sha256,
            certificate=cert,
            private_key=private_key,
            mode=ua.MessageSecurityMode.SignAndEncrypt
        )
    
    handler = SubscriptionHandler(endpoint)

    while True:
        try:
            _logger.info(f" Starting the subscription process for source: {source_name} | Endpoint: {url}")
            # Initialize the valid tags list
            endpoint["Valid Tags"] = []
            await subscribe_to_node(client, handler, endpoint)
        except Exception as e:
            _logger.error(f" Exception occurred: {e} for source: {source_name}")


async def main():
    try:
        if not enabled:
            _logger.info("Script is disabled from greengrass configuration.")
            _logger.info("Pass `enabled: true` in the greengrass configuration to enable the script.")
            return
        retries = 3
        for attempt in range(retries):
            try:
                endpoints_data = await dynamodb_manager.get_all_data(plant_code)
                if len(endpoint_filter) > 0:
                    endpoints_data = [endpoint for endpoint in endpoints_data if endpoint["End Point"] in endpoint_filter]
                    _logger.info(f" Filtered endpoints based on endpoint_filter")
                    _logger.info("Following endpoints will be processed:")
                    for endpoint in endpoints_data:
                        _logger.info(f" Endpoint: {endpoint['End Point']}")
                else:
                    _logger.info("No endpoint_filter provided, processing all endpoints")
                    
                break
            except Exception as e:
                _logger.error(f" Attempt {attempt+1} to get endpoints_data failed: {e}")
                if attempt < retries - 1:
                    await asyncio.sleep(10)
                else:
                    raise
        
        if len(endpoints_data) > 0:
            _logger.info(f" Starting OPC UA client with MQTT batching for {len(endpoints_data)} endpoints")
            _logger.info(f" MQTT Configuration:")
            _logger.info(f"   • Broker: {mqtt_broker_url}:{mqtt_port}")
            _logger.info(f"   • Topic: {mqtt_topic}")
            _logger.info(f"   • Username: {'***' if configs.get('mqtt_username') else 'Not set'}")
            tasks = [run(endpoint) for endpoint in endpoints_data]
            await asyncio.gather(*tasks)
        else:
            _logger.error(f" Data not found for plant code: {plant_code}")
    except Exception as e:
        _logger.error(f" Error in main: {e}")
        exit()


if __name__ == "__main__":
    asyncio.run(main())
