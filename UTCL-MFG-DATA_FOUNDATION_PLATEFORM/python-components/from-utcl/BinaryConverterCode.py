import asyncio
import json
import sys
import signal
import threading
from azure.iot.device.aio import IoTHubModuleClient
 
stop_event = threading.Event()
 
 
 
def create_client():
    client = IoTHubModuleClient.create_from_edge_environment()
 
    # Define function for handling received messages
    async def receive_message_handler(message):
        # NOTE: This function only handles messages sent to "input1".
        # Messages sent to other inputs, or to the default, will be discarded
        try:
            if message.input_name == "input1":
                print("the data in the message received on input1 ")
                print(message.data)
                output_list=[]
                message_data = message.data
                data=json.loads(message_data)
                for node_data in data:
                    try:
                        source_timestamp = node_data["Value"]["SourceTimestamp"]
                        server_timestamp = node_data["Value"]["ServerTimestamp"]
                        Node_value =node_data ["Value"]["Value"]

                        tag_name=node_data["DisplayName"]
                        Node_id=node_data["NodeId"]
                        binary_value = bin(int(Node_value))[2:]
                        #print(binary_value)
                   
                        try:
                            if tag_name.endswith("_PH"):
                                last_bits = binary_value[-9]
                            elif "_TMR" in tag_name:
                                last_bits = binary_value[-5]
                            elif "_FB" in tag_name:
                                last_bits = binary_value[-5]
                            elif "_Cyc" not in tag_name and tag_name.endswith("_RUN"):
                                last_bits = binary_value[-8]
                            elif Node_value==True:
                                last_bits=1
                            elif Node_value==False:
                                last_bits=0                
                            else:
                                last_bits=binary_value[-5]
                        except:
                            last_bits=0
                       
                        output_message={"NodeId" : Node_id , "DisplayName":tag_name, "Value" : {"Value" :last_bits, "SourceTimestamp":source_timestamp, "ServerTimestamp":server_timestamp } , }
 
                    except:
                        output_message=node_data
 
                    output_list.append(output_message)
                    output_json = json.dumps(output_list, indent=2)
 
                await client.send_message_to_output(output_json, "output1")
                #print(output_json)
                #print("message sent successfully")
 
        except Exception as e :
                print(e )
                # Cleanup if failure occurs
    try:
        # Set handler on the client
        client.on_message_received = receive_message_handler
    except Exception as e :
        print(e )
        # Cleanup if failure occurs
   
        client.shutdown()
        raise
 
    return client
 
 
async def run_sample(client):
    # Customize this coroutine to do whatever tasks the module initiates
    # e.g. sending messages
    while True:
        await asyncio.sleep(10000)
 
 
def main():
   
    # NOTE: Client is implicitly connected due to the handler being set on it
    client = create_client()
 
    # Define a handler to cleanup when module is is terminated by Edge
    def module_termination_handler(signal, frame):
        print ("IoTHubClient sample stopped by Edge")
        stop_event.set()
 
    # Set the Edge termination handler
    signal.signal(signal.SIGTERM, module_termination_handler)
 
    # Run the sample
    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(run_sample(client))
    except Exception as e:
        print("Unexpected error %s " % e)
        raise
    finally:
        print("Shutting down IoT Hub Client...")
        loop.run_until_complete(client.shutdown())
        loop.close()
 
 
if __name__ == "__main__":
    main()