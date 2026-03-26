import pandas as pd
import concurrent.futures
from custom_alert_support import *
import pyodbc
import os
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)

database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")

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



def Custom_Alerts_main(event,context) -> None:

    customAlertUsecases = "select * from [dbo].[CBM_EquipmentTemplates] where Status = 'Active' and UseCase = 'Custom Alerts'"
    data = fetch_template_info(customAlertUsecases)

    print(f'Data from SQL: {data}')

    dt = pd.Timestamp.now(tz='UTC')
    print(f'Current Date and Time: {dt}')
    results = []
    with concurrent.futures.ThreadPoolExecutor() as executor:
        for i in range(len(data)):
            oneRow = data.iloc[i]
            print(f'{oneRow}')
            f1=executor.submit(run_template,[oneRow,dt])
            results.append(f1)

