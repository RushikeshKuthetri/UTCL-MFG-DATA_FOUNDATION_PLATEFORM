
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
        
        print(f"{indent}- {node.get_display_name().Text} - BrowseName: {node.get_browse_name().Name} - (NodeId: {node.nodeid}, NodeClass: {node_class.name})")
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

        # node_id = "ns=3;s=Thermo.Datapool.OPCServer->CurrentAnalysis.Dry basis\Tons:F"
        # node = client.get_node(node_id)
        # Read the value of the node
        # value = node.get_value()
        # print(f"NodeId: {node_id}, Value: {value}")

        # Get the root node
        root_node = client.get_root_node()
        n = NodeId.parse("ns=3;i=1")
        root_node = client.get_node("ns=3;i=1")
        # print(f"Root Node: {root_node.get_display_name().Text} (NodeId: {root_node.nodeid})")
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


def main_server():
    server = Server()
    server.set_endpoint("opc.tcp://localhost:4841/freeopcua/server/")
    
    server.start()
    # define a new node type we can use to create nodes with
    sample_object = server.nodes.objects.add_object(2, "Sample")
    sample_child_object = sample_object.add_object(2, "SampleChild")

    temp = sample_child_object.add_variable(2, "Temperature", 76.2)
    rpm = sample_child_object.add_variable(2, "RPM", 76.2)
    torque = sample_child_object.add_variable(2, "Torque", 76.2)

    

    try:
        while True:
            temp.set_value(random.uniform(0, 100))
            rpm.set_value(random.uniform(200, 2000))
            torque.set_value(random.uniform(0, 100))
            time.sleep(10)
    except KeyboardInterrupt:
        print("Server stopped manually.")
    finally:
        server.stop()
        print("Server stopped.")

if __name__ == "__main__":
    # main_client()
    main_server()
