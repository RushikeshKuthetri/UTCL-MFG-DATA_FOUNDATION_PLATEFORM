import pandas as pd
import time
import pyodbc
import json
import requests
import boto3
from botocore.exceptions import ClientError
import os

import warnings
warnings.filterwarnings("ignore")
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)

database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")

i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

blaine_tagmaster = os.getenv("blaine_tagmaster")

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
def delete_table_resource(table_name):
    """
    Deletes a DynamoDB table using boto3 resource
    
    Args:
        table_name (str): Name of the table to delete
    """
    try:
        # Initialize DynamoDB resource
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(table_name)
        
        # Delete the table
        print(f"Deleting table: {table_name}")
        table.delete()
        
        # Wait for the table to be deleted
        print("Waiting for table to be deleted...")
        table.wait_until_not_exists()
        
        print(f"Table {table_name} has been deleted successfully")
        return None
        
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceNotFoundException':
            print(f"Table {table_name} does not exist")
        else:
            print(f"Error deleting table {table_name}: {e.response['Error']['Message']}")
        error = f'Table {table_name} does not exist or Error deleting table: {e}'
        return None, error
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        error = f'Unexpected error: Error while deleting Table {table_name}: {e}'
        return None, error

def create_table_resource(table_name, partition_key, sort_key=None):
    """
    Creates a DynamoDB table with basic configuration
    
    Args:
        table_name (str): Name of the table to create
        partition_key (str): Name of the partition key
        sort_key (str, optional): Name of the sort key if needed
    """
    try:
        dynamodb = boto3.resource('dynamodb')
        
        # Define key schema
        key_schema = [
            {
                'AttributeName': partition_key,
                'KeyType': 'HASH'  # Partition key
            }
        ]
        
        # Define attribute definitions
        attribute_definitions = [
            {
                'AttributeName': partition_key,
                'AttributeType': 'S'  # String type
            }
        ]
        
        # Add sort key if provided
        if sort_key:
            key_schema.append({
                'AttributeName': sort_key,
                'KeyType': 'RANGE'  # Sort key
            })
            attribute_definitions.append({
                'AttributeName': sort_key,
                'AttributeType': 'S'  # String type
            })
        
        # Create the table
        table = dynamodb.create_table(
            TableName=table_name,
            KeySchema=key_schema,
            AttributeDefinitions=attribute_definitions,
            BillingMode='PAY_PER_REQUEST'  # On-demand capacity mode
        )
        
        # Wait for the table to be created
        print(f"Waiting for table {table_name} to be created...")
        table.wait_until_exists()
        
        print(f"Table {table_name} has been created successfully")
        return None
        
    except ClientError as e:
        print(f"Error creating table: {e.response['Error']['Message']}")
        error = f"Error creating table {table_name}: {e}"
        return None, error
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        error = f"Unexpected error: Error creating table{table_name}: {e}"
        return None, error

def format_mail_content(status: str):
    try:
        # Email details
        recipient_list = ['akash.chakraborty@celebaltech.com', 'gangadhar.neelam@celebaltech.com',
                          'shubham.jaunjal@celebaltech.com', 'anurag.yadav1@celebaltech.com', 'shyamsundar.mahake@adityabirla.com',
                          'krishna.h.sharma-v@adityabirla.com', 'rohan.gonsalves@adityabirla.com', 'narendra.agrawal@adityabirla.com']

        #recipient_list = ['pgupta69@deloitte.com']
        
        subject = 'Blaine Tag Master Update'
        
        # HTML content for the email
        mail_content = f"""
        <html>
        <head></head>
        <body>
            <p>Hi team,</p>
            <p>This is an status alert regarding blaine tag master update.</p>
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

def ingest_blaine_tag_master_dynamo(kiln_tag_master_data: pd.DataFrame) -> None:
    dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
    table = dynamodb.Table(blaine_tagmaster)

    for _, row in kiln_tag_master_data.iterrows():
        item = {
            'Plant_Code': row['Plant_Code'],
            'Generic_Plant_Code': row['Generic_Plant_Code'],
            'Mill_No': row['Mill_No'],
            'Model_No': row['Model_No'],
            'Grade': row['Grade'],
            'IoT_Tag_Id': row['IoT_Tag_Id'],
            'Generic_Description': row['Generic_Description'],
            'Controllable': row['Controllable']
        }

        try:
            table.put_item(Item=item)
        except ClientError as e:
            print(f"Error inserting item: {e}")
    return None

def fetch_blaine_tag_master_SQL() -> pd.DataFrame:
    """
    This fucntion fetches the all the existing records in the [XRF_MIC_Master] table in SQL
    Returns:
        pd.DataFrame: DataFrame contains all the records of XRF_MIC_Master table.
    
    """
    
    driver= '{ODBC Driver 17 for SQL Server}'

    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                query = 'EXEC [dbo].[SP_dim_plant_modelmaster_SelectAllRecord]'
                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                result=[tuple(row) for row in rows]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)
        print(result)        
        print(df.head())
        return df, None

    except Exception as e:
        error = f'Might be the issue with the SP or while connecting wiht the DB: {e}'
        return None, error

def update_blaine_tag_master_data():

    try:
        tick = time.time()
        blaine_tag_master_data, error = fetch_blaine_tag_master_SQL()
        if error is not None:
            return error

        status = delete_table_resource(blaine_tag_master_data)
        if status is not None:
            print("Table deleted")
            return status
        
        status = create_table_resource(blaine_tag_master_data, 'IoT_Tag_Id', 'Generic_Plant_Code')
        if status is not None:
            print("Table created")
            return status
        
       # status = ingest_blaine_tag_master_ADX(blaine_tag_master_data)
        status = ingest_blaine_tag_master_dynamo(blaine_tag_master_data)
        if status is not None:
            return status
        
        tock = time.time()
        elapsed = tock-tick
        status = f'Updated the kiln tag master data in ADX master successfully.'

        return status
    
    except Exception as e:
        return f'Error occuerred while updating the XRF master: {e}'

# print('Started updating the XRF MIC master...')
# status = update_blaine_tag_master_data()

# subject, recipient_list, mail_content = format_mail_content(status = status)
# send_mail(subject = subject, receiver_id=recipient_list, content = mail_content)

# print('Sent the status alert trhough mail.')

# XRF CDH Base data
