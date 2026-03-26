output_list = []
data = json.loads(message.data)
for node_data in data:
    try:
        source_timestamp = node_data["Value"]["SourceTimestamp"]
        server_timestamp = node_data["Value"]["ServerTimestamp"]
        Node_value = node_data["Value"]["Value"]
        tag_name = node_data["DisplayName"]
        Node_id = node_data["NodeId"]
        binary_value = bin(int(Node_value))[2:]

        try:
            if Node_value == True:
                last_bits = 1
            elif Node_value == False:
                last_bits = 0
            elif tag_name.endswith("_PH"):
                last_bits = binary_value[-9]
            elif "_TMR" in tag_name or "_FB" in tag_name:
                last_bits = binary_value[-5]
            elif "_Cyc" not in tag_name and tag_name.endswith("_Run"):
                last_bits = binary_value[-8]
            elif "CM_" in tag_name:
                last_bits = binary_value[-8]
            else:
                last_bits = binary_value[-5]
        except:
            last_bits = 0

        output_message = {
            "NodeId": Node_id,
            "DisplayName": tag_name,
            "Value": {
                "Value": last_bits,
                "SourceTimestamp": source_timestamp,
                "ServerTimestamp": server_timestamp
            }
        }
    except:
        output_message = node_data

    output_list.append(output_message)
    output_json = json.dumps(output_list, indent=2)
    await client.send_message_to_output(output_json, "output1")
