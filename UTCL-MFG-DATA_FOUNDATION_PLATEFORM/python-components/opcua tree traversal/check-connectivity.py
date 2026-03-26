from opcua import Client
import logging


# List of OPC UA endpoints
# KUCW
# endpoints = {
#     "opc.tcp://10.5.55.43:48031",
#     "opc.tcp://10.5.55.44:48031",
#     "opc.tcp://10.5.55.48:48031",
#     "opc.tcp://10.5.55.59:48031",
# }

# KCW
endpoints = {
    "opc.tcp://10.5.18.43:57888/opcexpert/",
    "opc.tcp://10.5.18.56:57888/opcexpert/",
    "opc.tcp://10.5.18.76:57888/opcexpert/",
}

connected_endpoints = []
non_connected_endpoints = []

for endpoint in endpoints:
    client = Client(endpoint)
    try:
        client.connect()
        connected_endpoints.append(endpoint)
        client.disconnect()
    except Exception as e:
        logging.error(f"Failed to connect to {endpoint}: {e}")
        non_connected_endpoints.append(endpoint)

print("Connected endpoints:")
for url in connected_endpoints:
    print(url)

print("\nNon-connected endpoints:")
for url in non_connected_endpoints:
    print(url)