import uuid
from stream_manager import (
    StreamManagerClient
)
from stream_manager.data import AssetPropertyValue, PutAssetPropertyValueEntry, Quality, TimeInNanos, Variant
from stream_manager.util import Util
import logging
import sys
_logger = logging.getLogger('UTCL:sitewise-manager')
logging.basicConfig(stream=sys.stdout, level=logging.INFO)

def get_site_wise_entry(data):
    time_in_nanos = TimeInNanos(
        time_in_seconds=int(data["timestamp"]),
        offset_in_nanos=int((data["timestamp"] % 1) * 10000000)
    )
    variant = get_variant(data["value"], data)
    asset = [AssetPropertyValue(value=variant, quality=Quality.GOOD, timestamp=time_in_nanos)]
    return PutAssetPropertyValueEntry(entry_id=str(uuid.uuid4()), property_alias=data["alias"], property_values=asset)

def get_variant(val, data):
    # if the tag is digital, then the value should be integer
    # otherwise, it should be double
    if data["is_digital_tag"]:
        return Variant(integer_value=int(val))
    else:
        return Variant(double_value=float(val))

async def insert_data_to_stream(stream_name, data, stream_manager_client: StreamManagerClient):
    try:
        message = Util.validate_and_serialize_to_json_bytes(get_site_wise_entry(data))
        
        stream_manager_client.append_message(stream_name, message)
    except Exception as e:
        _logger.error(f"Error while inserting data to the stream: {e}")
        _logger.info(data)