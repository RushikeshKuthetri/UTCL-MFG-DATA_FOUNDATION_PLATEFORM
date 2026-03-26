import logging
import json
from datetime import datetime
import concurrent.futures
from collections import defaultdict
from supporting_module import *

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

def main(event, context):
    """Main function that combines efficiency calculation and alerting."""
    try:
        start_time = datetime.now()
        logger.info(f"Starting fan efficiency monitoring at {start_time.isoformat()}")
        
        # Step 1: Fetch efficiency data
        fan_eff_data = fetch_fan_efficiency_data()
        avg_eff_data = fetch_average_efficiency_data()
        
        if not fan_eff_data:
            logger.info("No new efficiency data found in the last 10 minutes.")
            return {
                "statusCode": 200,
                "body": json.dumps({"message": "No new data"})
            }
        
        # Step 2: Group data by template
        grouped_data = defaultdict(list)
        for record in fan_eff_data:
            grouped_data[record['TemplateName']].append(record)
        
        # Step 3: Fetch template info and email templates
        ui_active_templates = fetch_template_info()
        template_list = ui_active_templates['TemplateName'].unique()
        mail_template_df = fetch_mail_template_info(template_list)
        
        # Step 4: Process each template with enough data points
        results = []
        alerts = []
        
        with concurrent.futures.ThreadPoolExecutor() as executor:
            # Process efficiency calculations
            efficiency_futures = {}
            for template, entries in grouped_data.items():
                if len(entries) >= 5:  # Only process templates with enough data points
                    future = executor.submit(ingest_average_efficiency, entries, avg_eff_data, template)
                    efficiency_futures[future] = template
            
            # Process results and check for alerts
            for future in concurrent.futures.as_completed(efficiency_futures):
                template = efficiency_futures[future]
                try:
                    efficiency_result = future.result()
                    if efficiency_result:
                        results.append(efficiency_result['message'])
                        
                        # Get template info
                        template_info = ui_active_templates[ui_active_templates['TemplateName'] == template].iloc[0]
                        
                        # Get current fan data
                        fan_data = next((item for item in fan_eff_data if item['TemplateName'] == template), None)
                        
                        if fan_data:
                            # Process alert
                            alert_result = process_alert(template, efficiency_result, template_info, mail_template_df, fan_data)
                            alerts.append(alert_result)
                except Exception as e:
                    logger.error(f"Error processing template {template}: {e}", exc_info=True)
        
        end_time = datetime.now()
        execution_time = (end_time - start_time).total_seconds()
        logger.info(f"Completed fan efficiency monitoring in {execution_time:.2f} seconds")
        
        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Fan efficiency monitoring completed",
                "efficiency_results": results,
                "alert_results": alerts
            })
        }
    except Exception as e:
        logger.error(f"Unhandled error in fan efficiency monitoring: {str(e)}", exc_info=True)
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }

