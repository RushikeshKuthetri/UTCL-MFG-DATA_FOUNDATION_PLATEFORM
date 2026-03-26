import asyncio
import json
import signal
import threading
import logging
import time
from concurrent.futures import ThreadPoolExecutor
from azure.iot.device.aio import IoTHubModuleClient
 
# Setup logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s %(levelname)s %(message)s',
                    handlers=[logging.StreamHandler()])
 
stop_event = threading.Event()
thread_pool = ThreadPoolExecutor(max_workers=4)  # Adjust max_workers based on your CPU cores
 
def create_client():
    client = IoTHubModuleClient.create_from_edge_environment()
 
    async def receive_message_handler(message):
        if message.input_name == "input1":
            logging.info("Message received on input1")
            await process_message(client, message.data)
 
    client.on_message_received = receive_message_handler
    return client
 
async def process_message(client, message_data):
    start_time = time.time()
    try:
        loop = asyncio.get_event_loop()
        output_list = await loop.run_in_executor(thread_pool, process_message_data, message_data)
        output_json = json.dumps(output_list, indent=2)
        await client.send_message_to_output(output_json, "output1")
    except Exception as e:
        logging.error(f"Error processing message: {e}")
    finally:
        duration = time.time() - start_time
        logging.info(f"Processed message in {duration:.2f} seconds")
 
def process_message_data(message_data):
    output_list = []
    try:
        data = json.loads(message_data)
        for node_data in data:
            tag_name = node_data.get("DisplayName", "NA")
            Node_id = node_data.get("NodeId", "NA")
            value_data = node_data.get("Value", {})
            source_timestamp = value_data.get("SourceTimestamp", "NA")
            server_timestamp = value_data.get("ServerTimestamp", "NA")
            node_value = value_data.get("Value", "")
            
            
 
            output_message = {
                "NodeId": Node_id,
                "DisplayName": tag_name,
                "Value": {
                    "Value": node_value,
                    "SourceTimestamp": source_timestamp,
                    "ServerTimestamp": server_timestamp
                }
            }
            output_list.append(output_message)
    except Exception as e:
        logging.error(f"Error processing node data: {e}")
    return output_list
 
async def run_sample():
    while not stop_event.is_set():
        await asyncio.sleep(1)
 
def main():
    logging.info("Starting IoTHub client")
    client = create_client()
 
    def module_termination_handler(signal, frame):
        logging.info("IoTHubClient sample stopped by Edge")
        stop_event.set()
 
    signal.signal(signal.SIGTERM, module_termination_handler)
 
    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(run_sample())
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
    finally:
        logging.info("Shutting down IoT Hub Client...")
        loop.run_until_complete(client.shutdown())
        loop.close()
        thread_pool.shutdown()
 
if __name__ == "__main__":
    main()