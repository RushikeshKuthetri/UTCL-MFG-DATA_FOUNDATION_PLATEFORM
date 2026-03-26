def message_handler(message):
    result = json.loads(message.data)
    opc_server_url = result.get("opc_server_url")
    node_id = result.get("node_id")
    if opc_server_url and node_id:
        client = Client(opc_server_url)
        client.connect()
        var = client.get_node(node_id)
        if var:
            var.set_value(result["value"])
        client.disconnect()

def receive_messages():
    client1 = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)
    while True:
        try:
            client1.on_message_received = message_handler
            time.sleep(60)
        except Exception:
            time.sleep(10)

def main():
    message_thread = threading.Thread(target=receive_messages, daemon=True)
    message_thread.start()
    while True:
        time.sleep(60)
