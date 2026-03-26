import datetime
import logging
logging.getLogger("botocore").setLevel(logging.WARNING)
logging.getLogger("boto3").setLevel(logging.WARNING)
logging.getLogger("urllib3").setLevel(logging.WARNING)
from support_module import run_repetition_check, send_mail
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('data_repetition_alert')

def  data_repetition_alert_main(event, context):
    utc_timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

    try:
        data_check_interval = 1 
        repetitive_data = run_repetition_check(data_check_interval)

        if not repetitive_data.empty:
             logger.info(f"Found repetitive data for {repetitive_data['plants'].nunique()} plants")
             send_mail(repetitive_data, data_check_interval)
        else:
            print(f'No repeating data detected for any plants in the last {data_check_interval} hour(s).')

    except Exception as e:
        logging.error(f'Error occurred in main function: {e}')

    logging.info('Python timer trigger function ran at %s', utc_timestamp)

