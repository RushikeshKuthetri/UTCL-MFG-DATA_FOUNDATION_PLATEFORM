import pandas as pd
import pyodbc
from dynamodb_query import basic_scan,query_on_index
import base64
import json
import requests
from datetime import datetime, timedelta
from sitewise_api import batch_get_asset_property_aggregates

import warnings
warnings.filterwarnings("ignore")

i4connect_pass = '4Bj-!H=4@C2('
client_secret = 'z-a8Q~KODqi7UdgwC7txoBmJTyT66TsqLmY4BajU'


def send_alert(mail_content, attachment = None):

    
    
    # Email details
    recipient_list = ['gangadhar.neelam@celebaltech.com',
                    'shubham.jaunjal@celebaltech.com', 'anurag.yadav1@celebaltech.com', 'shyamsundar.mahake@adityabirla.com',
                    'krishna.h.sharma-v@adityabirla.com', 'rohan.gonsalves@adityabirla.com']
    
    #recipient_list = ['abhinkumar@deloitte.com']
    subject = 'XRF MIC Data Staging Dev'

    # Getting the access token for mail
    acc_token_url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"
    acc_token_payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'
    acc_token_headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        'Cookie':'buid=0.AScCDQSIkWdsW0yxEjajBLZtrXbeMWemFK5Jl7xuumkUOR4zAAA.AQABAAEAAAD--DLA3VO7QrddgJg7Wevrz8pg_EDvs-BxY5g44aXg9jN8peTCIvWxfVm6H_WrA1gCtjomxBmDwr-Y9sbwRXsNsrVEzyv2UTVXPRQvSZGM8hha7QrKxkyiPiodVRSdRwsgAA; fpc=AoltCTxR5_JHpboAlqmSyd22E27uAQAAAIpZbNoOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
        }
    
    acc_token_response=requests.request(method = "POST", url = acc_token_url, headers = acc_token_headers, data = acc_token_payload)
    acc_token_temp = json.loads(acc_token_response.text)
    access_token = acc_token_temp['access_token']


    url = "https://graph.microsoft.com/v1.0/me/sendMail"
    l=[]
    for i in recipient_list: 
        d = { "emailAddress": { "address":0} }
        d['emailAddress']['address'] = i        
        l.append(d) 

    if attachment is None:

        payload = json.dumps({
        "message": {
            "subject": subject,
            "body": {
                "contentType": "html",
                "content": mail_content
            },
            "toRecipients": l
        },
        "saveToSentItems": "false"
        })

    else:
        payload = json.dumps({
        "message": {
            "subject": subject,
            "body": {
                "contentType": "html",
                "content": mail_content
            },
            "toRecipients": l,
            "attachments": [ 
                { "@odata.type": "#microsoft.graph.fileAttachment", 
                "name": "XRF_CDH_base_data.csv",
                "contentBytes": attachment,
                "contentType": "text/csv"}
            ]
        },
        "saveToSentItems": "false"
        })

    headers = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + access_token 
    }
    try :
        response = requests.request("POST", url, headers=headers, data=payload)
    except Exception as e:
        print(f'Error while sending mail:{e}')


# def send_alert(content: str):

#     """
#     This fucntion sends the mails to all id's which are in reciever id list.

#     Args:
#         receiver_id (list): List of reciever id's to send the alerts.
#         subject (str): Subject of the mail.
#         content (str): Content of the mail with the status.
#     """

#     # Email details
#     receiver_id = ['akash.chakraborty@celebaltech.com', 'gangadhar.neelam@celebaltech.com',
#                       'shubham.jaunjal@celebaltech.com', 'anurag.yadav1@celebaltech.com', 'shyamsundar.mahake@adityabirla.com',
#                       'krishna.h.sharma-v@adityabirla.com', 'rohan.gonsalves@adityabirla.com', 'narendra.agrawal@adityabirla.com']

#     # receiver_id = ['gangadhar.neelam@celebaltech.com']
#     subject = 'XRF MIC Data Staging Status'
    
#     url = "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c/oauth2/v2.0/token?client_id"    
#     payload = f'client_id=d99c09ff-0cf2-44fc-a605-6a769e0c0d6f&scope=Mail.Send&username=i4.utclconnect%40adityabirla.com&password={i4connect_pass}&grant_type=password&client_secret={client_secret}'   
#     headers = {
#                 'Content-Type': 'application/x-www-form-urlencoded',
#                 'Cookie': 'esctx=PAQABAAEAAAAmoFfGtYxvRrNriQdPKIZ-OwAuFMGEdo_0W9HMj9twz4sMQXiF5hUKLgtJmmoBlu7xbcr_mEMWYUvBtdGg4uob8s0vaKLmWVQhUNqLuWQOxurC-f5V2C93LZoHaSiRn5qEBQN6xz2mGpIe2IONnSGXRXjyNw_oX-aGz57Ie1xI3E5EW0Rgp-0eH3XycD4crWggAA; fpc=AoltCTxR5_JHpboAlqmSyd3rsbxaAgAAAKLVUt0OAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
#     }
#     response=requests.request("POST",url,headers=headers,data=payload)
#     temp = json.loads(response.text)
#     access_token = temp['access_token']
#     url = "https://graph.microsoft.com/v1.0/me/sendMail"    
    
#     l=[]
#     for i in receiver_id: 
#         d = { "emailAddress": { "address":0} }
#         d['emailAddress']['address'] = i        
#         l.append(d)    
    
#     payload = json.dumps({
#     "message": {
#         "subject": subject,
#         "body": {
#             "contentType": "html",
#             "content": content
#             },
#         "toRecipients": l},
#         "saveToSentItems": "false"
#         })
    
#     headers = {
#     'Content-Type': 'application/json',
#     'Authorization':'Bearer ' + access_token    }
#     try :
#         response = requests.request("POST", url, headers=headers, data=payload)
#     except Exception as e:
#         print('Error while sending mail:',e)


# def ingest_xrf_data_SQL(xrf_data):
#     """
#     This fucntion ingest the XRF data to SQL.

#     Args:
#         xrf_data (pd.DataFrame): DataFrame contains XRF data
#     """

#     try:
#         server = 'utcmfgiiotdbsql.database.windows.net'
#         database = 'utcmfgiiotdbsql'
#         username = 'userappadmin'
#         password = 'App@dmin1717'
#         driver = '{ODBC Driver 17 for SQL Server}'
#         query = """EXEC dbo.SP_XRF_staging_data_insert 
#                    @Id = ?, 
#                    @Timestamp = ?, 
#                    @Value = ?, 
#                    @Node_id = ?, 
#                    @Created_Timestamp = ?, 
#                    @Status_Symbol = ?,
#                    @Plant = ?"""

#         dbconnection = 'DRIVER=' + driver + ';SERVER=tcp:' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password
#         with pyodbc.connect(dbconnection) as conn:
#             with conn.cursor() as cursor:

#                 # Truncate records
#                 cursor.execute("TRUNCATE TABLE [dbo].[XRF_staging_data]")

#                 for index, row in xrf_data.iterrows():
#                     cursor.execute(query, 
#                                    row['Id'], 
#                                    row['Timestamp'], 
#                                    row['Value'], 
#                                    row['Node_id'], 
#                                    row['Created_Timestamp'], 
#                                    row['Status_Symbol'],
#                                    row['Plant'])
#                     # print('Test')
#             conn.commit()
#         return None
    
#     except Exception as e:
#         return f'Exception occurred while ingesting data to db: {e}'

def ingest_xrf_data_SQL_Dev(xrf_data):
    """
    This fucntion ingest the XRF data to SQL.

    Args:
        xrf_data (pd.DataFrame): DataFrame contains XRF data
    """

    try:
        server = 'utcmfgiiotdbsql-dev.cbg6soo6cavk.ap-south-1.rds.amazonaws.com'
        database = 'utcmfgiiotdbsql'
        username = 'userappadmin'
        password = '6Fc2TARQOiywgBLi7yZP'
        driver = '{ODBC Driver 17 for SQL Server}'
        query = """EXEC dbo.SP_XRF_staging_data_insert 
                   @Id = ?, 
                   @Timestamp = ?, 
                   @Value = ?, 
                   @Node_id = ?, 
                   @Created_Timestamp = ?, 
                   @Status_Symbol = ?,
                   @Plant = ?"""

        dbconnection = 'DRIVER=' + driver + ';SERVER=tcp:' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:

                # Truncate records
                # cursor.execute("TRUNCATE TABLE [dbo].[XRF_staging_data]")

                for index, row in xrf_data.iterrows():
                    cursor.execute(query, 
                                   row['Id'], 
                                   row['Timestamp'], 
                                   row['Value'], 
                                   row['Node_id'], 
                                   #row['Created_Timestamp'], 
                                   #row['Status_Symbol'],
                                   row['Plant'])
                    # print('Test')
            conn.commit()
        return None
    
    except Exception as e:
        return f'Exception occurred while ingesting data to db: {e}'

def load_xrf_data_Sitewise():
    """
    This function fetches the XRF data from Site
    """
    try:
        now = datetime.utcnow()  # UTC+5:30
        end_time = now - timedelta(hours=1)  # now - 1 hour
        start_time = now - timedelta(hours=25)  # now - 25 hours
        kucw = basic_scan('XRF_MIC_Master');
        # Calculate time range with UTC+5:30 offset
        #ZoneInfo("Asia/Kolkata")
        entries = []
        for result in kucw:
            res = query_on_index('KUCW_TagMaster','Tag-UID-index','Tag UID', result['TAG_UID'] )
            if res:
                entries.append({'Node_id':res[0]['OPC EndPOint'],'Plant':res[0]['Plant'],'Tag UID': res[0]['Tag UID'],'assetId': res[0]['AssetID'], 'propertyId': res[0]['PropertyID']})
            #break

        sitewiseResponse = batch_get_asset_property_aggregates(entries, "AVERAGE", "1d", start_time ,end_time)
        #print(sitewiseResponse)
        return pd.DataFrame(sitewiseResponse), None
    except Exception as e:
        return None, f'Exception occured while fetching data from Sitewise: {e}'

    
def start_data_staging():
    # Fetch data from ADX
    xrf_data_copy, error = load_xrf_data_Sitewise()
    xrf_data = xrf_data_copy.drop(columns=['entryId','aggregatedValues'])
    if error:
        # HTML content for the email
        mail_content = f"""
        <html>
        <head></head>
        <body>
            <p>Hi team,</p>
            <p>This is a status alert regarding the data staging of XRF MIC data.</p>
            <p><strong>Status:</strong></p>
            <ul>
            {error}
            </ul>
            <p>---</p>

            <p><strong>This is an automated message. Please do not reply directly to this email.</strong></p>
        </body>
        </html>
        """
        attachment = None
    
    elif xrf_data.empty:
        mail_content = f"""
        <html>
        <head></head>
        <body>
            <p>Hi team,</p>
            <p>This is a status alert regarding the data staging of XRF MIC data.</p>
            <p><strong>Status:</strong></p>
            <ul>
            No IoT data available in ADX for MIC tags for the mentioned time period.
            </ul>
            <p>---</p>

            <p><strong>This is an automated message. Please do not reply directly to this email.</strong></p>
        </body>
        </html>
        """
        attachment = None
        

    # Ingest data to DB
    # status = ingest_xrf_data_SQL(xrf_data)
    else:
        status = ingest_xrf_data_SQL_Dev(xrf_data)
        status = None
        if status is not None:
            mail_content = f"""
            <html>
            <head></head>
            <body>
                <p>Hi team,</p>
                <p>This is a status alert regarding the data staging of XRF MIC data.</p>
                <p><strong>Status:</strong></p>
                <ul>
                {status}
                </ul>
                <p>---</p>

                <p><strong>This is an automated message. Please do not reply directly to this email.</strong></p>
            </body>
            </html>
            """
            attachment = None

        else:
            #print(xrf_data)
            data_snapshot = xrf_data.head()
            data_html = data_snapshot.to_html(index=False)
            xrf_shape = xrf_data.shape
            status = f'Data staging done successfully. Number of records ingested: {xrf_shape[0]} and columns: {xrf_shape[1]}'
            mail_content = f"""
            <html>
            <head></head>
            <body>
                <p>Hi team,</p>
                <p>This is a status alert regarding the data staging of XRF MIC data.</p>
                <p><strong>Status:</strong></p>
                <ul>
                {status}
                </ul>
                <p><strong>Snapshot of the data:</strong></p>
                <ul>
                {data_html}
                </ul>
                <ul>
                Please find the attached file for the whole staging data.
                </ul>
                <p>---</p>

                <p><strong>This is an automated message. Please do not reply directly to this email.</strong></p>
            </body>
            </html>
            """
            attachment = xrf_data.to_csv(index=False).encode('utf-8')
            attachment = base64.b64encode(attachment).decode('utf-8')  # Decoding for proper embedding in email

    return mail_content, attachment


# mail_content, attachment = start_data_staging()
# send_alert(mail_content, attachment)
