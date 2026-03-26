
from opcua import Client, Server
from opcua.ua import NodeClass, NodeId
import time
import random
from opcua import ua
from opcua.common.node import Node



def display_node_tree(node: Node, level=0):
    """
    Recursively displays the node tree structure.

    :param node: Current OPC UA node
    :param level: Depth level of the node in the tree
    """
    indent = "  " * level
    try:
        node_class = node.get_node_class()
        
        print(f"{indent}- NodeId: {node.nodeid} | NodeClass: {node_class.name})")
        # print(f"Value: {node.get_value()}")
        # Get child nodes
        children = node.get_children()
        for child in children:
            display_node_tree(child, level + 1)
    except Exception as e:
        print(f"{indent}[Error accessing node: {e}]")


def main_client():
    # OPC UA server endpoint URL
    opcua_url = "opc.tcp://localhost:4841/freeopcua/server/"  # Replace with your OPC UA server URL
    # opcua_url = "opc.tcp://10.5.18.56:57888/opcexpert/"  # Replace with your OPC UA server URL

    # Connect to OPC UA server
    client = Client(opcua_url)

    try:
        print("Connecting to OPC UA server...")
        client.connect()
        print("Connected to OPC UA server.\n")

        # Get the root node
        # root_node = client.get_root_node()        
        root_node = client.get_node("s=BrowseProvider")        
        
        display_node_tree(root_node, level=0)

        

    except KeyboardInterrupt:
        print("Script stopped manually.")
    except Exception as e:
        pass
        # print(f"Error: {e}")

    finally:
        # Disconnect from OPC UA server
        print("Disconnecting from OPC UA server...")
        client.disconnect()
        print("Disconnected.")



if __name__ == "__main__":
    main_client()
