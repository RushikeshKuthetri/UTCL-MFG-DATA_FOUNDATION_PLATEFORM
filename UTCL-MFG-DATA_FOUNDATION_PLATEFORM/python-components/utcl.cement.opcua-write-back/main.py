import sys
import threading
import traceback
import logging
import asyncio
from asyncua import Client, ua
import json
_logger = logging.getLogger('UTCL:main')
logging.basicConfig(stream=sys.stdout, level=logging.INFO)
import awsiot.greengrasscoreipc.clientv2 as clientV2



async def process_message(data):
    try:
        url = data["opc_server_url"]
        value = data["value"]
        node_id = data["node_id"]
        _logger.info(f"Processing message with url: {url}, value: {value}, node_id: {node_id}")
        
        client = Client(url, timeout=60)
        await client.connect()
        
        node = client.get_node(node_id)
        dv = ua.DataValue(ua.Variant(value, ua.VariantType.Double))
        await node.set_value(dv)
        
        await client.disconnect()
    except Exception as e:
        _logger.error(f"Error processing message: {e}")
        traceback.print_exc()
                    

topic = 'kcw/writeback'
qos = '1'

def on_stream_event(event):
    try:
        payload = event.message.payload
        payload_json = payload.decode('utf8').replace("'", '"')
        data = json.loads(payload_json)
        _logger.info(f"data is: {data}")
        asyncio.run(process_message(data))
    except:
        traceback.print_exc()

def on_stream_error(error):
    # Return True to close stream, False to keep stream open.
    return True  

def on_stream_closed():
    pass

ipc_client = clientV2.GreengrassCoreIPCClientV2()
resp, operation = ipc_client.subscribe_to_iot_core(
    topic_name=topic,
    qos=qos, 
    on_stream_event=on_stream_event,
    on_stream_error=on_stream_error,
    on_stream_closed=on_stream_closed
)

# Keep the main thread alive, or the process will exit.
event = threading.Event()
event.wait()

# To stop subscribing, close the operation stream.
operation.close()
ipc_client.close()
