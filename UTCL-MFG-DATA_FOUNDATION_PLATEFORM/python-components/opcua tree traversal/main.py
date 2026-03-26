import asyncio
from asyncua import Client, Node
import sys
import logging
import time
_logger = logging.getLogger('main')
logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger('asyncua').setLevel(logging.WARNING)


# Configure logging to log to a file
file_handler = logging.FileHandler('opcua_tree_traversal.log')
file_handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
_logger.addHandler(file_handler)

TOTAL = 0

async def display_node_tree(node: Node, level=0):
    """
    Recursively displays the node tree structure.

    :param node: Current OPC UA node
    :param level: Depth level of the node in the tree
    """
    global TOTAL
    TOTAL = TOTAL + 1
    indent = "  " * level
    try:
        # node_class = node.read_node_class()
        
        _logger.info(f"{indent}- NodeId: {node}")
        _logger.info(f"{indent}- Get children call started for {node}")
        then = time.time()
        # Get child nodes
        children = await node.get_children()

        now = time.time()
        browse_name = await node.read_browse_name()

        _logger.info(f"{indent}- Get children call ended for {node} | {browse_name.Name}  | Children count: {len(children)} | Time taken: {now - then} s")
        for child in children:
            await display_node_tree(child, level + 1)
    except Exception as e:
        _logger.info(f"{indent}- [Error accessing node: {node}: {e}]")


async def run(opcua_url):
    # OPC UA server endpoint URL
    client = Client(opcua_url, timeout=60)

    try:
        await client.connect()
        _logger.info(f"Connected to OPC UA server at {opcua_url}")

        # Get the root node
        root_node = client.get_root_node()

        
        _logger.info("Get Root Node Done.")
        await display_node_tree(root_node, level=0)

    except Exception as e:
        _logger.info(f"Error: {e}")
        _logger.info(f"TOTAL COUNT AFTER ERROR: {TOTAL}")


        # Disconnect from OPC UA server
    _logger.info("Disconnecting from OPC UA server...")
    await client.disconnect()
    _logger.info("Disconnected.")
    _logger.info(f"TOTAL COUNT: {TOTAL}")

async def main():
    # KUCW Endpoints
    kucw = [
        # "opc.tcp://10.5.55.48:48031",
        "opc.tcp://10.5.55.59:48031",
        "opc.tcp://10.5.55.44:48031",
        "opc.tcp://10.5.55.43:48031"
    ]
    await run(kucw[0])


if __name__ == "__main__":
    asyncio.run(main())
