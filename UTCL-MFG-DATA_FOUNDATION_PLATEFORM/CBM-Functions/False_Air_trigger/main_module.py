
import concurrent.futures
from datetime import datetime,timezone
from false_air_support_module import *
import pyodbc
import pandas as pd
import os
import logging
logging.getLogger('botocore').setLevel(logging.ERROR)
logging.getLogger('boto3').setLevel(logging.ERROR)
logging.getLogger('urllib3').setLevel(logging.ERROR)
logging.getLogger('tensorflow').setLevel(logging.ERROR)
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)

i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")
# Get check email recipients from environment variable
check_emails = os.getenv("check", "")

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
            raise Exception(f'Error occurred while fetching the template info.')
        return df

    except Exception as e:
        raise Exception(f'Exception occurred while executing stored procedure: {e}')
    

def send_check_email(report_contents):
    """Send a confirmation email to the check recipients"""
    if not check_emails:
        print("No check email recipients configured, skipping confirmation email")
        return
    
    # Parse comma-separated email list
    recipients = [email.strip() for email in check_emails.split(',') if email.strip()]
    if not recipients:
        return
    
    # Create a simple HTML report
    execution_time = datetime.now(tz=timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    html_content = f"""
    <h2>False Air Function Execution Report</h2>
    <p>The False Air function was executed successfully at {execution_time}</p>
    <h3>Template Execution Results:</h3>
    <ul>
    """
    
    # Add all the template reports
    for template_name, template_content in report_contents.items():
        html_content += f"<h3>Report for template: {template_name}</h3>"
        html_content += template_content
        html_content += "<hr>"
    
    # Send the email
    subject = "AWS False Air Function Execution Report"
    send_mail(recipients, subject, html_content)
    print(f"Report email sent to check recipients: {', '.join(recipients)}")

def false_air_trigger_main(event,context):
    # OLD ADX LOGIC
    #utc_timestamp = datetime.utcnow().replace(
    #   tzinfo=timezone.utc).isoformat()
    # false_air_query='Utcl_CBM_EquipmentTemplates| where Status=="Active" and UseCase=="False Air"'
    # query_df = connect_ADX_with_AAD_application_key_auth(false_air_query)

    start_time = datetime.now(tz=timezone.utc)
    max_execution_time = 840  # 14 minutes
    
    false_air_query = "select * from [dbo].[CBM_EquipmentTemplates] where Status = 'Active' and UseCase = 'False Air'"
    query_df = fetch_template_info(false_air_query)

    current_datetime = pd.Timestamp(datetime.now(tz=timezone.utc))
    results = []
    execution_results = []
    report_contents = {}

    with concurrent.futures.ThreadPoolExecutor() as executor:
        for i in query_df['TemplateName'].unique():
            single_template = query_df.loc[query_df['TemplateName']==i]
            t=executor.submit(template_execution,[single_template,current_datetime])
            results.append((i, t))
        for template_name, future in results:
            try:
                result, html_content = future.result()  # Unpack both return values
                print(result)
                execution_results.append(result)
                report_contents[template_name] = html_content  # Store HTML content by template name
            except Exception as e:
                print(f"Error processing template {template_name}: {e}")
                execution_results.append(f"Error processing template {template_name}: {e}")

        # Send reports to check recipients
        if report_contents:
            send_check_email(report_contents)
        else:
            print("No reports generated, skipping check email")



    # NOT NEEDED NOW
    # if mytimer.past_due:
    #    logging.info('The timer is past due!')

    #logging.info('Python timer trigger function ran at %s', utc_timestamp)
