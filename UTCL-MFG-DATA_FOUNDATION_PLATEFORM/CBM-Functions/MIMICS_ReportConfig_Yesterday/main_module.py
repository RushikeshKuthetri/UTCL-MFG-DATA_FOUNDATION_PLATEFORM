from datetime import datetime,timezone,timedelta
import logging,concurrent.futures
import pandas as pd
from Yesterday_report_support_module import *
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
                print(f'fetch template info: {df}')
        if df.empty:
            raise Exception(f'Error occurred while fetching the template info: {e}')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')


# def main(mytimer: func.TimerRequest) -> None:
def MIMICS_ReportConfig_Yesterday_main(event,context) -> None:
    utc_timestamp = datetime.utcnow().replace(
        tzinfo=timezone.utc).isoformat()
    current_time = pd.Timestamp(datetime.now()+timedelta(minutes=330),tz='UTC')

    # query = 'TagId_Wise_Report| where IsScheduler=="True" and EmailFrequency=="Yesterday"|order by Timestamp desc' # fetching first type
    # report_parameters_df = connect_ADX_with_AAD_application_key_auth(query=query)

    query = "select * from [dbo].[TagId_Wise_Report] where IsScheduler=1 and EmailFrequency='Yesterday' order by Timestamp desc"
    report_parameters_df = fetch_template_info(query)
    print(f'report parameters df: {report_parameters_df}')

    with concurrent.futures.ThreadPoolExecutor() as executor:
        for i in report_parameters_df['ReportTemplateName'].unique():
            th=executor.submit(run_yesterday_trigger,[report_parameters_df,i,current_time])
            result=th.result()
            if result==1:
                logging.info(f'Yesterday Report Scheduler executed for template {i} and mail triggered')
    # if mytimer.past_due:
    #     logging.info('The timer is past due!')

    logging.info('Python timer trigger function ran at %s', utc_timestamp)

