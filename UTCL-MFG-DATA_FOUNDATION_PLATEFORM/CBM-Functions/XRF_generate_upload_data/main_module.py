import datetime
import logging

from support_module import *


def XRF_generate_upload_data_main(event, context) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo=datetime.timezone.utc).isoformat()
    
    status = XRF_generate_uppload_data()

    subject, recipient_list, mail_content = format_mail_content(status = status)
    send_mail(subject = subject, receiver_id=recipient_list, content = mail_content)


    logging.info('Python timer trigger function ran at %s', utc_timestamp)
