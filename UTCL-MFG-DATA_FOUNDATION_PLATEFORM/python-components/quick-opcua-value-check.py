import asyncio
from asyncua import Client, Node
import sys

class SubscriptionHandler:
    def datachange_notification(self, node, val, data):
        print(f"New data change event on node {node}: {val}")



async def main():
    if len(sys.argv) < 3:
        print("Usage: python main.py <server_url> <node_id_1> [<node_id_2> ...]")
        sys.exit(1)

    url = sys.argv[1]
    nodes = [Node(None, node_id) for node_id in sys.argv[2:]]
    client = Client(url, timeout=60)
    handler = SubscriptionHandler()
    await client.connect()
    print(f"Client connected to server: {url}")
    
    subscription = await client.create_subscription(500, handler)
    response_list = await subscription.subscribe_data_change(nodes)
    for node, response in zip(nodes, response_list):
            if not isinstance(response, int):
                print(f"Failed to subscribe to node: {node}, Status Code: {response}")

    print("Subscription created")
    try:
        while True:
            await asyncio.sleep(1)
    except KeyboardInterrupt:
        print("Disconnecting...")
    finally:
        await client.disconnect()
        print("Client disconnected")


   
if __name__ == "__main__":
    asyncio.run(main())