import datetime
import logging
import pandas as pd
import time as tm
import concurrent.futures
from datetime import datetime,timezone
from trend_violation_analog_support import *
import os
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


def fetch_template_info(query) -> pd.DataFrame:
    driver= '{ODBC Driver 17 for SQL Server}'
    
    dbconnection='DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
     
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:

                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            raise Exception(f'Error occurred while fetching the template info: {e}')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')


def trend_violation_analog_main(event, context)->None :
        utc_timestamp = datetime.now(timezone.utc).isoformat()
        logging.info(f'AWS Lambda triggered at {utc_timestamp}')

        tick = tm.time()
        current_time = pd.Timestamp(datetime.now(timezone.utc))
        results = []

        
        trend_violation_usecases = "SELECT * FROM [dbo].[CBM_EquipmentTemplates] WHERE Status = 'Active' AND UseCase = 'Trend Violation'"
        df = fetch_template_info(trend_violation_usecases)

        with concurrent.futures.ThreadPoolExecutor() as executor:
            for i in df['TemplateName'].unique():
                data = df.loc[df['TemplateName'] == i]
                f1 = executor.submit(template_execution, [data, current_time])
                results.append(f1)

            for f in concurrent.futures.as_completed(results):
                logging.info(f.result())

        tock = tm.time()
        logging.info(f'Time taken for execution = {tock - tick:.0f} seconds')

