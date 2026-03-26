import logging
from datetime import datetime, timezone
import concurrent.futures
from average_efficiency_support_module import *
import json
from collections import defaultdict

# Configure logging outside the handler
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

# Suppress boto3/botocore logging
logging.getLogger('botocore').setLevel(logging.ERROR)
logging.getLogger('boto3').setLevel(logging.ERROR)
logging.getLogger('urllib3').setLevel(logging.ERROR)

def fan_average_efficiency_ingestion_main(event, context):
    try:
        logger.info("Fetching data in parallel...")
        # Check table structure
        if not check_table_structure():
            return {
                "statusCode": 500,
                "body": json.dumps({"error": "Failed to verify DynamoDB table structure"})
            }
        
        logger.info("Fetching data in parallel...")

        # Use a single thread pool for all operations
        with concurrent.futures.ThreadPoolExecutor() as executor:
            # Fetch data in parallel
            future_eff = executor.submit(fetch_fan_efficiency_data)
            future_avg = executor.submit(fetch_average_efficiency_data)
            
            try:
                fan_eff_data = future_eff.result()
                avg_eff_data = future_avg.result()
            except Exception as fetch_err:
                logger.error(f"Error while fetching data: {fetch_err}", exc_info=True)
                return {
                    "statusCode": 500,
                    "body": json.dumps({"error": "Failed to fetch data from DynamoDB"})
                }

            if not fan_eff_data:
                logger.info("No efficiency data found in the last 10 minutes.")
                return {"statusCode": 200, "body": json.dumps({"message": "No new data"})}

            # Group data by template
            grouped_data = defaultdict(list)
            for record in fan_eff_data:
                grouped_data[record['TemplateName']].append(record)

            # Process each template's data
            ingestion_futures = []
            for template, entries in grouped_data.items():
                if len(entries) >= 5:
                    logger.info(f"Processing template {template} with {len(entries)} entries")
                    future = executor.submit(ingest_average_efficiency, entries, avg_eff_data, template)
                    ingestion_futures.append(future)
                else:
                    logger.warning(f"Not enough data points for {template} (only {len(entries)} entries)")

            # Collect results
            results = []
            for f in concurrent.futures.as_completed(ingestion_futures):
                try:
                    result = f.result()
                    if result:
                        logger.info(result)
                        results.append(result)
                except Exception as ingest_err:
                    logger.error(f"Error during ingestion: {ingest_err}", exc_info=True)

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Efficiency ingestion completed",
                "details": results
            })
        }

    except Exception as e:
        logger.error(f"Unhandled error in fan_average_efficiency_ingestion_main: {str(e)}", exc_info=True)
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }

    
