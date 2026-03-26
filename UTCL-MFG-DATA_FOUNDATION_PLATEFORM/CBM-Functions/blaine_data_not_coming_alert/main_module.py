import datetime
from support_module import *

def blaine_data_not_coming_alert_main(event,context) -> None:
    utc_timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()
    try:
        plants_data = fetch_plants_to_check()
        print(plants_data.head())
        for i in range(len(plants_data)):

            plantName = plants_data['plantname'].iloc[i]
            mill = plants_data['mill'].iloc[i]
            interval = plants_data['interval'].iloc[i].rstrip('m')
            recipientList = plants_data['recipient'].iloc[i].split(',')
            status = check_blaine_status(plantName, mill, interval)

            if status == 'Not available':
                print(f"Blaine predictions are not available for {plantName}, Mill={mill} from last {interval} minutes.")

                if mill=="All":
                    df = check_iotlive_data(plantName, interval,'All')
                else:
                    df = check_iotlive_data(plantName, interval, mill)
                
                if not df.empty:
                    issue = f'''
                            Blaine predictions are not available for plant code - {plantName} since last {interval} minutes. 
                            Because, data for the below tags are not available:<br>
                            '''
                
                    starter_string = f'''
                        <p><strong>This is a system generated mail which indicates the possible reason for Blaine Prediction note being shown in the UI.</strong></p>
                        {issue} <br>
                    '''

                    notification_content = starter_string + df.to_html(index=False)
                    subject = f'Blaine Prediction Not Coming For {plantName},Mill {mill}'
                    if len(recipientList)>0:
                        print('Sending mail.')
                        send_mail(receiver_id = recipientList, subject = subject, content = notification_content)

                    else:
                        print(f'No reciepient added for sending a mail.')
                else:
                    feed_tag, last_10_feeds = check_feed_status(plantName, mill)
                    if all(feed['Value'] < 40 for feed in last_10_feeds):
                        issue = f'''
                                Blaine predictions are not available for plant code - {plantName} since last {interval} minutes.<br>
                                Because, feed value ({feed_tag}) is coming less than 40. These are the last 10 feeds: {last_10_feeds} <br>
                                '''
                        starter_string = f'''
                            <p><strong>This is a system generated mail which indicates the possible reason for Blaine Prediction note being shown in the UI.</strong></p>
                            {issue}
                        '''

                        notification_content = starter_string
                        subject = f'Blaine Prediction Not Coming For {plantName},Mill {mill}'
                        if len(recipientList)>0:
                            print('Sending mail.')
                            send_mail(receiver_id = recipientList, subject = subject, content = notification_content)
                        else:
                            print(f'No reciepient added for sending a mail.')


                    else:
                        pass

            elif status == 'Available':
                print(f"Blaine is predictions are available in the given time interval. Paramaters: {plantName}-{mill}-{interval}")
        
    except Exception as e:
        raise Exception(f"Exception occured in blaine_alert function: {e}")


