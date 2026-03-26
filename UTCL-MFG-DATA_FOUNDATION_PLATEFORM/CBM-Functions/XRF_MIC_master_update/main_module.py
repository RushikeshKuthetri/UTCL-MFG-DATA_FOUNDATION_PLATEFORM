import datetime
import logging

from support_module import *

def XRF_MIC_master_update_main(event, context) -> None:
    utc_timestamp = datetime.datetime.utcnow().replace(
        tzinfo=datetime.timezone.utc).isoformat()

    print('Started updating the XRF MIC master...')
    status = update_XRF_MIC_master()

    subject, recipient_list, mail_content = format_mail_content(status = status)
    send_mail(subject = subject, receiver_id=recipient_list, content = mail_content)

    print('Sent the status alert trhough mail.')



    logging.info('Python timer trigger function ran at %s', utc_timestamp)
