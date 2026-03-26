import pandas as pd
import datetime as dt
import time

from typing import Tuple, Dict
import warnings
warnings.filterwarnings("ignore")

import pyodbc
#from azure.storage.blob import BlobServiceClient

#from azure.kusto.data import KustoClient,KustoConnectionStringBuilder
#from azure.kusto.data.helpers import dataframe_from_result_table
from io import StringIO

#from azure.core.exceptions import ResourceNotFoundError

import requests,json
import warnings
warnings.filterwarnings("ignore")

import requests,json
import warnings
warnings.filterwarnings("ignore")

import Function_def

# from azure.identity import DefaultAzureCredential
# from azure.keyvault.secrets import SecretClient
# import urllib.parse

# keyvault_url = 'https://utclmfgiiot-keyvault.vault.azure.net/'
# credential = DefaultAzureCredential()

# client = SecretClient(vault_url=keyvault_url, credential=credential)
# client_secret = client.get_secret(name='service-principal-secret-value').value

# i4connect_pass = client.get_secret(name='i4connectPass').value
# i4connect_pass = urllib.parse.quote(i4connect_pass, safe='')


i4connect_pass = 'qN>W}b25X)29'
client_secret = 'z-a8Q~KODqi7UdgwC7txoBmJTyT66TsqLmY4BajU'

def send_mail(receiver_id:list, subject:str, content:str):
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

def data_prep_status_alert(plant_code: str, mill_no: str, grade: str, usecase_type: str,
                           start_time, end_time, data_prep_status: str,
                           time_taken: float) -> None:
    """
    This fucntion formats the Email content for data preperation status alerts and calls the send mail function.

    Args:
        plant_code (str): Code of the plant (e.g., 'GK01').
        mill_no (str): Line/Mill number (e.g., 'U1CMML1').
        grade (str): Grade of the cement (e.g., 'OPC43').
        usecase_type (str):  Type of the use case (e.g., 'Blaine_pred', 'Cement_opt').
        start_time (str): Start time of the data preperation
        end_time (str): End time of the data preperation
        data_prep_status (str): Status of the data preperation
        time_taken (float): Total time taken for data preperation
    """

    try:
        mail_content = f"""
        <html>
        <head></head>
        <body>
            <p>Hi team,</p>
            <p>Please find the below details for the status of the data preparation for the given parameters.</p>
            <p><strong>Details:</strong></p>
            <ul>
                <li>Plant Code: {plant_code}</li>
                <li>Mill Number: {mill_no}</li>
                <li>Grade: {grade}</li>
                <li>Start time: {start_time}</li>
                <li>End time: {end_time}</li>
                <li>Duration: {time_taken} seconds</li>
            </ul>
            <p><strong>Data preparation status:</strong></p>
            <p>{data_prep_status}</p>
            <p>---</p>
            <p>This is an automated message. Please do not reply directly to this email.</p>
        </body>
        </html>
        """

        receiver_ids = ['gangadhar.neelam@celebaltech.com']
        subject = f'Auto Retraining - Data Preperation - {usecase_type} - {plant_code}-{mill_no}-{grade}'
        send_mail(receiver_id=receiver_ids, subject=subject, content=mail_content)

    except Exception as e:
        print(f'Error occurred while executing data_prep_status_alert: {e}')


def fetch_sap_blaine_data(plant_code: str, mill_no: str, grade: str,
                          start_date: str, end_date:str) -> pd.DataFrame:
    """
    This fucntion featches the sapBlaine data from the Database.

    Args:
        plant_code (str): code of the plant (E.g.: GK01)
        mill_no (str): Line/mill number (E.g.: U1CMML1)
        grade (str): Grade of the cement (E.g.: OPC43)
        start_date (str): Start date of the data (E.g.: '2024-05-07 07:07:07)
        end_date (str): End date of the data (E.g.: '2024-05-18 18:18:18)

    Returns:
        pd.DataFrame: Dataframe of sapBlaine data.
    """

    server = 'utcmfgiiotdbsql.database.windows.net'
    database = 'utcmfgiiotdbsql'
    username = 'userappadmin'
    password = 'App@dmin1717'   
    driver= '{ODBC Driver 17 for SQL Server}'

    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                query = f"EXEC dbo.SP_blaine_SapData_FilterData @plant=?, @mill=?, @grade=?, @start_date=?, @end_date=?"
                params = [plant_code, mill_no, grade, start_date, end_date]

                cursor.execute(query, params)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            error = (f'SapBlaine data is not available for the give parameters: {plant_code}-{mill_no}-{grade}')
            print(error)
            return None, error
        
        return df, None

    except Exception as e:
        error = (f'Might be the issue with the SP or while connecting wiht the DB: {e}')
        return None, error

##-------------------- FETCH IOT DATA ----------------------
# def df_from_adx(query: str):
#     try:
#         cluster = "https://private-utcprmfgadxiotpd.centralindia.kusto.windows.net"
#         client_id = "d99c09ff-0cf2-44fc-a605-6a769e0c0d6f"
#         # client_secret =  "9aG8Q~js9N0MyunFZg5tnCAiMUo5A.pzGt6Vfceq"
#         authority_id = "f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c"
#         kcsb = KustoConnectionStringBuilder.with_aad_application_key_authentication(cluster, client_id, client_secret, authority_id)
#         client = KustoClient(kcsb)
#         db = 'utcprmfgadxiotpd-db'
#         query = query
#         query_results = client.execute(db, query)
#         df = dataframe_from_result_table(query_results.primary_results[0])
#         return df
#     except Exception as e:
#         raise Exception(f"AKS: Fail to call adx for query={query},Exception {e}")

def fetch_iot_data(plant_code, mill_no, grade, start_date: str, end_date: str, query_params: str) -> pd.DataFrame:
    """
    This fucntion fetches the iot data from ADX for given parameters.

    Args:
        plant_code (str): Code of the plant (E.g.: GK01)
        mill_no (str): Line/mill number (E.g.: U1CMML1) 
        grade (str): Grade of the cement (E.g.: OPC43)
        start_date (str): Start date of the data (E.g.: '2024-05-07 07:07:07)
        end_date (str): End date of the data(E.g.: '2024-05-07 07:07:07)
        query_params (str): String of iot tag id's which we need to fetch the iot data

    Returns:
        pd.DataFrame: DataFrame which consists of iot data for the given parameters
    """

    try:
        dataframes = []

        start = pd.Timestamp(start_date)
        end = pd.Timestamp(end_date)
        
        while start < end:
            next_end = start + pd.Timedelta(days=5)

            if next_end > end:
                next_end = end
            try:
                adx_query = f"fn_IotLiveData('{query_params}','{start}','{next_end}')"
                print(f"Fetching iot data from {start} to {next_end}")
                # data = df_from_adx(adx_query)
                # dataframes.append(data)
            except Exception as e:
                print(f"Error fetching data for {start} to {next_end}: {e}")
                print("Retrying in 1 minute...")
                time.sleep(30)
                # data = df_from_adx(adx_query)
                # dataframes.append(data)

            time.sleep(10)
            start = next_end + pd.Timedelta(days=1)

        final_dataframe = pd.concat(dataframes, ignore_index=True)
        final_dataframe.sort_values(by="Timestamp").reset_index(drop=True)

        if final_dataframe.empty:
            error = (f'IoT data is not available for the given parameters: {plant_code}-{mill_no}-{grade}')
            return None, error
        
        return final_dataframe, None
    except Exception as e:

        error = (f"May be data is not available or unable to connect with the ADX server : {e}")
        return None, error


# ------------------ FETCH STREAMING DATA PIPELINE -------------
    
def fetch_streaming_data_pipeline(plant_code: str, mill_no:str, grade:str, usecase_type: str) -> pd.DataFrame:
    """
    This fucntion fetches the streaming data pipeline of given plant, mill, grade combination.

    Args:
        blob_name (str): Name of the blob (streaming data pipeline)

    Returns:
        pd.DataFrame: streaming data pipeline
    """

    storage_acc_key = 'MnnRLr7cUwJyNxQnmucM4vLIKuuXTkugFg+XLyUevuEZbaO+huE9CPx1FVBa1wS8y5wm2vSRXOce+ASt66xAzA=='
    storage_acc_name = 'utclmfgiiotaml9918608325'
    connection_string = f'DefaultEndpointsProtocol=https;AccountName={storage_acc_name};AccountKey={storage_acc_key};EndpointSuffix=core.windows.net'
    container_name = 'streamingdata'

    blob_service_client = BlobServiceClient.from_connection_string(conn_str=connection_string)

    blob_name = f'{plant_code}/{usecase_type}/Streaming_Data_PipeLine.csv'
    blob_client = blob_service_client.get_blob_client(container=container_name, blob=blob_name)
    
    try:
        blob_data = blob_client.download_blob()
        blob_content = blob_data.readall().decode('utf-8')

        csv_data = StringIO(blob_content)
        streaming_data = pd.read_csv(csv_data)

        if streaming_data.empty:
            error = 'Streaming data not available for the given parameters.'
            return None, error
        
        return streaming_data, None
    
    except ResourceNotFoundError:
        error = f'Streaming data pipeline is not found in the container. Parameters: {plant_code}-{mill_no}-{grade}'
        return None, error

    except Exception as e:
        error = f'Unable to connect to the blob storage: {e}'
        return None, error

# ------------------ PREPARE DATA FOR TRAINING -------------------

def ingest_logs_to_db(plant:str, mill:str, grade:str, timestamp:str,logs:str) -> None:
    try:
        server = 'utcmfgiiotdbsql.database.windows.net'
        database = 'utcmfgiiotdbsql'
        username = 'userappadmin'
        password = 'App@dmin1717'   
        driver= '{ODBC Driver 17 for SQL Server}'
        dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password

        query = f'EXEC dbo.sp_model_retraining_logs_Insert @plant=?, @mill=?, @grade=?, @timestamp=?, @logs=?'
        params = [plant,mill,grade,timestamp,logs]

        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(query,params)
            conn.commit()

    except Exception as e:
        raise Exception(f'Error occured while ingesting logs to Dataflow_FunctionAppErrorLogs for plant={plant},mill={mill},grade={grade}, error={e}')
        
def ingest_data_to_strg(training_data: pd.DataFrame, blob_dest: str) -> None:
    storage_acc_key = 'MnnRLr7cUwJyNxQnmucM4vLIKuuXTkugFg+XLyUevuEZbaO+huE9CPx1FVBa1wS8y5wm2vSRXOce+ASt66xAzA=='
    storage_acc_name = 'utclmfgiiotaml9918608325'
    connection_string = f'DefaultEndpointsProtocol=https;AccountName={storage_acc_name};AccountKey={storage_acc_key};EndpointSuffix=core.windows.net'
    container_name = 'workflow'

    blob_service_client = BlobServiceClient.from_connection_string(conn_str=connection_string)
    blob_client = blob_service_client.get_blob_client(container=container_name, blob=blob_dest)

    try:
        blob_client.upload_blob(training_data)
        print('Uploaded to blob')
    except Exception as e:
        raise Exception(f'Failed to upload blob {e}')


def preprocess_iot_data(iot_data: pd.DataFrame) -> pd.DataFrame:
    """
    This function preprocessed the iot data. And aggregate the data into minutewise.

    Args:
        iot_data (pd.DataFrame): iot data

    Returns:
        pd.DataFrame: Prprocessed and aggragated iot data
    """

    try:
        iot_data = iot_data.rename(columns={"Id":"IoT_Tag_Id"})
        iot_data['Timestamp'] = pd.to_datetime(iot_data['Timestamp'], errors='coerce')
        iot_data['Timestamp'] = iot_data['Timestamp'].dt.round('min')
        iot_data['Timestamp'] = iot_data['Timestamp'].dt.strftime('%Y-%m-%d %H:%M:%S')
        minutewise_agg_iot_data = iot_data.groupby(['Timestamp', 'IoT_Tag_Id'])['Value'].mean().reset_index()

        return minutewise_agg_iot_data, None
    
    except Exception as e:
        error = f"Error occurred in preprocess_iot_data: {e}"
        return None, error


def filter_streaming_data(plant_code: str, mill_no: str, grade: str,
                          streaming_data: pd.DataFrame) -> Tuple[pd.DataFrame, Dict[str, str], str]:
    """
    This fucntion preprocess the streaming data pipeline. And created dictionary which contains iot tags and their description.
    And iot tag id of feed.

    Args:
        plant_code (str): Code of the plant
        mill_no (str): Mill/Line number
        grade (str): Grade of the Cement
        streaming_data (pd.DataFrame): streaming data pipeline.

    Returns:
        Tuple[pd.DataFrame, Dict[str, str], str]: This will return three things
            - streaming_data (pd.DataFrame): Preprocessed streaming data
            - iot_tag_desc (Dict[str, str]): Diction contains iot tags and their description
            - feed_tag (str): IoT tag of feed
    """ 

    try:
        streaming_data.drop('Model_No', axis=1, inplace=True)

        if streaming_data.empty:
            error =  f'Streaming data is not available in the filtered dataframe.'
            return None, error
        
        feed_tag_desc = [tag for tag in streaming_data['Generic_Description'].values if tag.startswith('Actual Feed') or tag.startswith('Total feed') or tag.startswith('CM_TOTAL_FEED_ACT')][0]
        feed_tag = streaming_data[streaming_data['Generic_Description'] ==feed_tag_desc]['IoT_Tag_Id'].values[0]

        iot_tag_desc = dict(zip(streaming_data["IoT_Tag_Id"], streaming_data["Generic_Description"]))

        return (streaming_data, iot_tag_desc, feed_tag), None
    
    except Exception as e:
        error = f"Error occurred in read_and_filter_streaming_data: {e}"
        return None, error

def merge_iot_and_streaming_data(iot_data: pd.DataFrame, 
                              streaming_data: pd.DataFrame) -> pd.DataFrame:
    """
    This fucntion merges the streaming data and iot data.

    Args:
        iot_data (pd.DataFrame): preprocessed iotn data
        streaming_data (pd.DataFrame): preprocessed streaming data

    Returns:
        pd.DataFrame: Merged dataframe of both streaming data and iot data.
    """    

    try:
        merged_iot_and_streaming_data = pd.merge(iot_data, streaming_data, on="IoT_Tag_Id", how='left')
        
        merged_iot_and_streaming_data.dropna(subset=['Generic_Description', 'Controllable'], inplace=True)

        merged_iot_and_streaming_data["Timestamp"] = pd.to_datetime(merged_iot_and_streaming_data["Timestamp"])
        merged_iot_and_streaming_data.set_index('Timestamp', inplace=True)

        return merged_iot_and_streaming_data, None

    except Exception as e:
        error = f"Error occurred in merge_and_preprocess_data: {e}"
        print(error)
        return None, error


def transpose_and_fill_missing_values(merged_data: pd.DataFrame,
                                      feed_tag: str) -> pd.DataFrame:
    """
    This function transposes the rows into columns (Each iot tag will be a feature) and drop the data  where feed value less than 40

    Args:
        merged_data (pd.DataFrame): merged dataframe of both streaming data and iot data
        feed_tag (str): iot tag of the feed

    Returns:
        pd.DataFrame: Transposed dataframe.
    """    

    try:
        transpose_iot_stream = merged_data.pivot(columns='IoT_Tag_Id', values='Value').resample('T').mean()
        transpose_iot_stream.reset_index(inplace=True)

        if feed_tag in transpose_iot_stream.columns:
            transpose_iot_stream = transpose_iot_stream[transpose_iot_stream[feed_tag] > 40]
        else:
            raise Exception(f'Feed tag {feed_tag} data is not available in ADX.')
        if transpose_iot_stream.empty:
            raise Exception(f'Feed {feed_tag} values are less than 80. Not sufficient for training.')
        
        transpose_iot_stream = transpose_iot_stream.dropna()

        return transpose_iot_stream, None
    
    except Exception as e:
        error = f"Error occurred in transpose_and_fill_missing_values: {e}"
        return None, error


def map_sap_blaine_values(transpose_iot_stream: pd.DataFrame,
                          sap_blaine_data: pd.DataFrame) -> pd.DataFrame:
    """
    This fucntion maps the sapBlaine data for the iot data based on the date time column.

    Args:
        transpose_iot_stream (pd.DataFrame): Transposed dataframe
        sap_blaine_data (pd.DataFrame): SapBlaine dataframe

    Returns:
        pd.DataFrame: DataFrame with the both iot and sapBlaine data mapped.
    """

    try:
        sap_blaine_data["date"] = sap_blaine_data["date"].astype(str)
        sap_blaine_data["time"] = sap_blaine_data["time"].astype(str)

        sap_blaine_data["date_time"] = sap_blaine_data["date"] + " " + sap_blaine_data["time"]


        sap_blaine_data.drop(columns=["date", "time"], axis = 1, inplace=True)

        sap_blaine_data["date_time"] = pd.to_datetime(sap_blaine_data["date_time"], dayfirst=False)
        sap_blaine_data.sort_values(by="date_time", inplace=True)

        sap_blaine_data_filtered = sap_blaine_data[["Grade", "sapBlaineValue", "date_time"]]

        transpose_iot_stream = transpose_iot_stream[transpose_iot_stream["Timestamp"] >= sap_blaine_data["date_time"].iloc[0]]
        transpose_iot_stream.sort_values(by='Timestamp', inplace=True)

        transpose_iot_stream_with_blaine = pd.merge_asof(transpose_iot_stream, sap_blaine_data_filtered, left_on='Timestamp', right_on='date_time', direction='backward')

        return transpose_iot_stream_with_blaine, None

    except Exception as e:
        error = f'Error occurred in map_sap_blaine_values: {e}'
        return None, error

def structure_dataframe(plant_code: str, mill_no: str, grade: str,
                        transpose_iot_stream_with_blaine: pd.DataFrame, 
                        iot_tag_desc: Dict[str, str]) -> pd.DataFrame:
    """
    This fucntion adds the plant, mill, grade columns to the final dataframe

    Args:
        plant_code (str): Code of the plant
        mill_no (str): Mill/Line number
        grade (str): Grade of the cement
        transpose_iot_stream_with_blaine (pd.DataFrame): Transposed dataframe
        iot_tag_desc (Dict[str, str]): Dictionary which contains iot tag id and their descriptions.

    Returns:
        pd.DataFrame: Final dataframe which can be used for model traning.

    """    

    try:
        transpose_iot_stream_with_blaine.drop(columns=["Grade", "date_time"], inplace=True)
        transpose_iot_stream_with_blaine.insert(1, "Plant", f"{plant_code}")
        transpose_iot_stream_with_blaine.insert(2, "Mill_No", f"{mill_no}")
        transpose_iot_stream_with_blaine.insert(3, "Grade", f"{grade}")
        transpose_iot_stream_with_blaine.insert(4, "Model_No", 0)

        data_for_retraining = transpose_iot_stream_with_blaine.rename(columns=iot_tag_desc)
        data_for_retraining.columns = data_for_retraining.columns.str.replace(' ', '_')
        return data_for_retraining, None
    except Exception as e:
        error = f"Error occurred in structure_dataframe: {e}"
        return None, error


def prepare_retraining_data(iot_data: pd.DataFrame, streaming_data:pd.DataFrame,
                            sap_blaine_data: pd.DataFrame, plant_code:str, mill_no:str, 
                            grade:str) -> pd.DataFrame:
    """
    This fucntion preprocess the streaming data, sapBlaine data and iot data, and then it will merge them
    and make it reliable for model training.

    Args:
        iot_data (pd.DataFrame): DataFrame contains data of required iot tags
        streaming_data (pd.DataFrame): DataFrem of streaming data pipeline
        sap_blaine_data (pd.DataFrame): DataFrame of sapBlaine data
        plant_code (str): Code of the plant
        mill_no (str): Mill/line number
        grade (str): Grade of the cement

    Returns:
        pd.DataFrame: DataFrame of final data which we can use for ml training.
    """    
    
    try:

        print("Preprocessing streaming data...")
        preprocessed_streaming_data, error = filter_streaming_data(plant_code, mill_no, grade, streaming_data)
        streaming_data,  iot_tag_desc, feed_tag = preprocessed_streaming_data

        if error:
            return None, error

        print("Preprocessing iot data...")
        iot_data, error = preprocess_iot_data(iot_data)
        if error:
            return None, error

        print("Merging iot data and streaming data...")
        merged_iot_streaming_data, error = merge_iot_and_streaming_data(iot_data, streaming_data)
        if error:
            return None, error

        print("Transposing IOT tags as columns...")
        transpose_iot_stream, error = transpose_and_fill_missing_values(merged_iot_streaming_data, feed_tag)
        if error:
            return None, error

        print('Mapping the sapBlaine data')
        transpose_iot_stream_with_blaine, error = map_sap_blaine_values(transpose_iot_stream, sap_blaine_data)
        if error:
            return None, error

        print("Mapping column names...")
        data_for_retraining, error = structure_dataframe(plant_code, mill_no, grade,
                                                  transpose_iot_stream_with_blaine,
                                                  iot_tag_desc)
        if error:
            return None, error

        return data_for_retraining, None
    except Exception as e:
        error = f"Error occurred in prepare_retraining_data: {e}"
        return None, error

def fetch_data(plant_code:str, mill_no:str, 
               grade:str, usecase_type:str, 
               start_time:str, end_time: str
               ) -> Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:

    try:
        streaming_data, error = fetch_streaming_data_pipeline(plant_code, mill_no, grade, usecase_type)
        if error:
            return (None, None, None), error

        condition = (streaming_data['Plant_Code'] == plant_code) & (streaming_data['Mill_No'] == mill_no) & (streaming_data['Grade'] == grade)
        streaming_data = streaming_data[condition]

        blaine_data, error = fetch_sap_blaine_data(plant_code, mill_no, grade, start_time, end_time)
        if error:
            return (None, None, None), error
        blaine_data = blaine_data[blaine_data['sapBlaineValue'] > 200]

        query_params = ','.join(streaming_data['IoT_Tag_Id'].values)
        iot_data, error = fetch_iot_data(plant_code, mill_no, grade, start_time, end_time, query_params)

        if error:
            return (None, None, None), error
        
        return (iot_data, blaine_data, streaming_data), None
    
    except Exception as e:
        error = f'Error occrred while fetching the data from data sources: {e}'
        return (None, None, None), error


def check_data_availability(blob_dest: str) -> bool:

    """
    Check if specific blob (monthly data) exists in the blob container.

    Args:
        blob_dest (str):Name of the blob 

    Raises:
        Exception: Raised exception if there is any issue while fetching the blobs or connecting to the container.

    Returns:
        bool: True if the blob exists in the container, False otherwise.
    """

    storage_acc_key = 'MnnRLr7cUwJyNxQnmucM4vLIKuuXTkugFg+XLyUevuEZbaO+huE9CPx1FVBa1wS8y5wm2vSRXOce+ASt66xAzA=='
    storage_acc_name = 'utclmfgiiotaml9918608325'
    connection_string = f'DefaultEndpointsProtocol=https;AccountName={storage_acc_name};AccountKey={storage_acc_key};EndpointSuffix=core.windows.net'
    container_name = 'workflow'

    blob_service_client = BlobServiceClient.from_connection_string(conn_str=connection_string)
    container_client = blob_service_client.get_container_client(container=container_name)

    blob_list = [blob.name for blob in container_client.list_blobs()]

    try:
        if blob_dest in blob_list:
            return True, None
        else:
            return False, None
        
    except Exception as e:
        error = f'Unable to connect to the blob storage: {e}'
        print(error)
        return None, error


def get_train_data(plant_code:str, mill_no:str, grade:str,
                   start_time:str, end_time:str, usecase_type:str) -> int:
    """
    This fucntion checks whether data is available for the give parameters. if yes it will skip the data preprations.
    Otherwise it will prerpare the data and ingest into blob storage.

    Args:
        plant_code (str): Code of the plant
        mill_no (str): Mill/Line number
        grade (str): Grade of the cement
        start_time (str): Start time of the data
        end_time (str): End time of the data
        usecase_type (str): Use case type (Blaine_pred, Cement_opt, etc)

    Returns:
        int: Status of the data preperation
    """    

    try:
        tick = dt.datetime.now() + dt.timedelta(minutes=330)
        log_timestamp = dt.datetime.now() + dt.timedelta(minutes=330)

        end_datetime = dt.datetime.strptime(end_time, '%Y-%m-%dT%H:%M:%SZ')
        formatted_month =  f'{end_datetime.year}{end_datetime.month:02}'

        blob_dest = f'{plant_code}/{mill_no}/{grade}/{usecase_type}/{formatted_month}/training_data.csv'

        data_check, error = check_data_availability(blob_dest)

        if error:
            return None, error
        
        elif data_check == True:
            data_prep_status = 'Requested data is already available in the blob storage (workflow)'
            ingest_logs_to_db(plant_code, mill_no, grade, log_timestamp, data_prep_status)
            return 1, None
        
        if end_datetime:
            fetched_data, error = fetch_data(plant_code, mill_no, grade, usecase_type, start_time, end_time)
            iot_data, blaine_data, streaming_data = fetched_data

            if error:
                return None, error

            if not (iot_data.empty or blaine_data.empty or streaming_data.empty):
                data_for_retraining, error = prepare_retraining_data(iot_data, streaming_data, blaine_data, plant_code, mill_no, grade)

                if error:
                    return None, error
                
                data_for_retraining = data_for_retraining.drop('Model_No', axis=1)
                data_for_retraining = data_for_retraining.to_csv(index=False)
                ingest_data_to_strg(data_for_retraining, blob_dest)
                tock = dt.datetime.now() + dt.timedelta(minutes=330)
                time_taken = tock - tick

                data_prep_status = f'Data has been prepared for {plant_code}-{mill_no}-{grade}. It took {tock-tick}.'
                data_prep_status_alert(plant_code, mill_no, grade, usecase_type, start_time, end_time, data_prep_status, time_taken)

                logs = 'Ingested successfully'
                ingest_logs_to_db(plant_code, mill_no, grade, log_timestamp, logs)
                return 2, None

            else:
                data_prep_status = 'Data is not available for any of the resources for data preperation'
                ingest_logs_to_db(plant_code, mill_no, grade, log_timestamp, data_prep_status)
                return 3, None


    except Exception as e:
        error = f'AKS: Error occurred in get_train_data: {e}'
        ingest_logs_to_db(plant_code, mill_no, grade, log_timestamp, error)
        return None, error


# plant_code = 'WK01'
# mill_no = 'U1CMML1'
# grade = 'OPC53'
# start_date = '2024-06-16T00:00:00Z'
# end_date = '2024-06-19T00:00:00Z'
# usecase_type = 'Blaine_pred'

# final_data, error = get_train_data(plant_code, mill_no, grade, start_date, end_date, usecase_type)
# print(final_data, error)


