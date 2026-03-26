import opcua
import time
import random
def create_server():
    server = opcua.Server()
    server.set_endpoint("opc.tcp://localhost:4841/freeopcua/server/")
    server.start()
    

    sample = server.nodes.objects.add_object(2, "Sample")
    sample_child = sample.add_object(3, "SampleChild")
    var = sample_child.add_variable(4, "SampleVariable", 6.7)

    while True:
        print(f"setting value")
        var.set_value(random.uniform(0, 100))
        time.sleep(10)

def main():
    try:
        create_server()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()