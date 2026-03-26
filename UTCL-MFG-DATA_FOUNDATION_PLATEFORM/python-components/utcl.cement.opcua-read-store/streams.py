from stream_manager import (
    StreamManagerClient
)
from stream_manager.data import ReadMessagesOptions, ExportDefinition, IoTSiteWiseConfig, KinesisConfig, MessageStreamDefinition, StrategyOnFull

def list_streams():
    streamManagerClient = StreamManagerClient()
    streams = streamManagerClient.list_streams()
    print(streams)
    streamManagerClient.close()

def describe_stream(stream_name):
    streamManagerClient = StreamManagerClient()
    stream = streamManagerClient.describe_message_stream(stream_name)
    print(stream)
    print(stream.definition.export_definition)
    # print(stream.storage_status)

    streamManagerClient.close()

def create_stream(stream_name):
    streamManagerClient = StreamManagerClient()
    streamManagerClient.create_message_stream(
            MessageStreamDefinition(
                name=stream_name,
                strategy_on_full=StrategyOnFull.OverwriteOldestData,
                export_definition=ExportDefinition(
                    iot_sitewise=[
                        IoTSiteWiseConfig(
                            identifier="SiteWiseExport" + stream_name,
                            batch_interval_millis= 1 * 60 * 1000,
                        )
                    ]
                ),
            )
        )

def delete_stream(stream_name):
    streamManagerClient = StreamManagerClient()
    streamManagerClient.delete_message_stream(stream_name)    

# list_streams()
# describe_stream("SiteWise_Stream")
# create_stream("Custom_SiteWise_Stream")

delete_stream("Custom_SiteWise_Stream")