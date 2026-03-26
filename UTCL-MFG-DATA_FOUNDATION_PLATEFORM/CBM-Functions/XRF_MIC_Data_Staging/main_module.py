from datetime import datetime
import logging
from support_module import *
#logging.basicConfig(level=logging.DEBUG)

original_log_level = logging.getLogger().getEffectiveLevel()
logging.disable(logging.CRITICAL)
logging.disable(original_log_level)

def XRF_MIC_Data_Staging_main(event, context) -> None:

    mail_content, attachment = start_data_staging()
    send_alert(mail_content, attachment)    
    logging.info('Python timer trigger function ran at %s', datetime.utcnow())
