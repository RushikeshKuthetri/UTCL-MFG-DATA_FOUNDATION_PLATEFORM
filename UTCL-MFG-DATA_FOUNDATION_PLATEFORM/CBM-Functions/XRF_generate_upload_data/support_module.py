import pandas as pd
import pyodbc
import json
import requests

import warnings
warnings.filterwarnings("ignore")

i4connect_pass = '4Bj-!H=4@C2('
client_secret = 'z-a8Q~KODqi7UdgwC7txoBmJTyT66TsqLmY4BajU'

def send_mail(subject: str, receiver_id: list, content: str):
    """
    This fucntion sends the mails to all id's which are in reciever id list.

    Args:
        receiver_id (list): List of reciever id's to send the alerts.
        subject (str): Subject of the mail.
        content (str): Content of the mail with the status.
    """

    url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"    
    payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'   
    headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-OwAuFMGEdo_0W9HMj9twz4sMQXiF5hUKLgtJmmoBlu7xbcr_mEMWYUvBtdGg4uob8s0vaKLmWVQhUNqLuWQOxurC-f5V2C93LZoHaSiRn5qEBQN6xz2mGpIe2IONnSGXRXjyNw_oX-aGz57Ie1xI3E5EW0Rgp-0eH3XycD4crWggAA; fpc=AoltCTxR5_JHpboAlqmSyd3rsbxaAgAAAKLVUt0OAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    }
    response=requests.request("POST",url,headers=headers,data=payload)
    temp = json.loads(response.text)
    access_token = temp['access_token']
    url = "https://graph.microsoft.com/v1.0/me/sendMail"    
    
    l=[]
    for i in receiver_id: 
        d = { "emailAddress": { "address":0} }
        d['emailAddress']['address'] = i        
        l.append(d)    
    
    payload = json.dumps({
    "message": {
        "subject": subject,
        "body": {
            "contentType": "html",
            "content": content
            },
        "toRecipients": l},
        "saveToSentItems": "false"
        })
    
    headers = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + access_token    }
    try :
        response = requests.request("POST", url, headers=headers, data=payload)
    except Exception as e:
        print('Error while sending mail:',e)

def format_mail_content(status: str):
    try:
        # Email details
        recipient_list = ['akash.chakraborty@celebaltech.com', 'gangadhar.neelam@celebaltech.com',
                        'shubham.jaunjal@celebaltech.com', 'anurag.yadav1@celebaltech.com', 'shyamsundar.mahake@adityabirla.com',
                        'krishna.h.sharma-v@adityabirla.com', 'rohan.gonsalves@adityabirla.com']

        #recipient_list = ['abhinkumar@deloitte.com']
        
        subject = 'XRF Generate Upload Data'
        
        # HTML content for the email
        mail_content = f"""
        <html>
        <head></head>
        <body>
            <p>Hi team,</p>
            <p>This is an status alert regarding XRF data generation and uploading.</p>
            <p><strong>Status:</strong></p>
            <ul>
                <li>{status}</li>
            </ul>
            <p>---</p>
            <p><strong>This is an automated message. Please do not reply directly to this email.</strong></p>
        </body>
        </html>
        """

        return subject, recipient_list, mail_content
    
    except Exception as e:
        print(f'Error occurred while executing format_mail_content: {e}')
        return None, None, None, None


def XRF_generate_uppload_data() -> pd.DataFrame:
    """
    This fucntion fetches the all the existing records in the [XRF_MIC_Master] table in SQL
    Returns:
        pd.DataFrame: DataFrame contains all the records of XRF_MIC_Master table.
    
    """
    server = 'utcmfgiiotdbsql-dev.cbg6soo6cavk.ap-south-1.rds.amazonaws.com'
    database = 'utcmfgiiotdbsql'
    username = 'userappadmin'
    password = '6Fc2TARQOiywgBLi7yZP' 
    driver= '{ODBC Driver 17 for SQL Server}'

    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                query = 'EXEC [dbo].[SP_XRF_GENERATE_UPLOAD_DATA]'
                cursor.execute(query)
        
        return 'XRF generated and uploaded successfully.'
    
    except Exception as e:
        error = f'Might be the issue with the SP or while connecting wiht the DB: {e}'
        return error

# def main():

#     status = XRF_generate_uppload_data()

#     subject, recipient_list, mail_content = format_mail_content(status = status)
#     send_mail(subject = subject, receiver_id=recipient_list, content = mail_content)

# main()
