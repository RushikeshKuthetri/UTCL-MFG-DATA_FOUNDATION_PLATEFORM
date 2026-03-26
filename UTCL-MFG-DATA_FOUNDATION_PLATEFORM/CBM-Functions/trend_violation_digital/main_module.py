import boto3
# import os
import time as tm
from datetime import datetime, timedelta, timezone
import concurrent.futures
import logging
from trend_violation_digital_support import *

lambda_client = boto3.client('lambda')

def trend_violation_digital_main(event, context)->None :
    
        utc_timestamp = datetime.now(timezone.utc).isoformat()
        logging.info(f'AWS Lambda triggered at {utc_timestamp}')

        tick = tm.time()
        current_time = pd.Timestamp(datetime.now(timezone.utc))
        results = []

        
        trend_violation_usecases = "SELECT * FROM [dbo].[CBM_EquipmentTemplates] WHERE Status = 'Active' AND UseCase = 'Trend Violation'"
        df = fetch_data_from_SQL(trend_violation_usecases)

        with concurrent.futures.ThreadPoolExecutor() as executor:
            for i in df['TemplateName'].unique():
                data = df.loc[df['TemplateName'] == i]
                f1 = executor.submit(template_execution, [data, current_time])
                results.append(f1)

            for f in concurrent.futures.as_completed(results):
                logging.info(f.result())

        tock = tm.time()
        elapsed = tock - tick
        logging.info(f'Time taken for execution = {tock - tick:.0f} seconds')
        
            



