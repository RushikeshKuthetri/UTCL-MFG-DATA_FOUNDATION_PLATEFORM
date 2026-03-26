import datetime
import logging
from blaine_tag_master_update_support import *

def Blaine_Tag_Master_Update_main(event,context)-> None:
    utc_timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

    print('Started updating the Kiln Opt Tag master...')
    status = update_blaine_tag_master_data()
    subject, recipient_list, mail_content = format_mail_content(status = status)
    send_mail(subject = subject, receiver_id=recipient_list, content = mail_content)


