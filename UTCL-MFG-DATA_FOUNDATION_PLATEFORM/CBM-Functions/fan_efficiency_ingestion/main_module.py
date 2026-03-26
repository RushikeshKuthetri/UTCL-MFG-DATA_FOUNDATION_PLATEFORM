from datetime import datetime, timezone, timedelta
import pandas as pd
from ingestion_support_module import * 
import concurrent.futures
import pyodbc
import os
import json
import logging
import boto3
from dotenv import load_dotenv

env = os.getenv("ENV", "dev")
dotenv_path = f".env.{env}"
load_dotenv(dotenv_path=dotenv_path)


database=os.getenv("database")
password=os.getenv("password")
username=os.getenv("username")
server=os.getenv("server")

utcl_cbm_fan_efficiency = os.getenv("utcl_cbm_fan_efficiency")

# Configure logging
logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)

def fetch_template_info(query) -> pd.DataFrame:
    database = os.getenv("database")
    password = os.getenv("password")
    username = os.getenv("username")
    server = os.getenv("server") 
    driver = '{ODBC Driver 17 for SQL Server}'

    dbconnection = 'DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password
    try:
        with pyodbc.connect(dbconnection) as conn:
            with conn.cursor() as cursor:
                cursor.execute(query)
                rows = cursor.fetchall()
                columns = [column[0] for column in cursor.description]
                df = pd.DataFrame([tuple(row) for row in rows], columns=columns)

        if df.empty:
            logger.error('Error occurred while fetching the template info: No data returned')
            return pd.DataFrame()
        return df

    except Exception as e:
        logger.error(f'Exception occurred while executing database query: {str(e)}')
        return pd.DataFrame()

def extract_param(params_str, param_name):
    """
    Extract parameter value from JSON-like string with @@@ separators.
    """
    try:
        # Clean up the string for proper JSON parsing
        formatted_str = params_str.replace(" @@@", ",").replace("@@@", ",").replace('"', '"')
        params = json.loads(formatted_str)
        
        value = params.get(param_name)
        if value == "null" or value is None:
            return None
        return value
    except:
        return None
#     try:
#         # Define column names based on SQL schema
#         columns = ['Timestamp', 'TemplateName', 'PlantName', 'FanName', 
#                   'Parameters', 'Conditions', 'UseCase', 'Status', 'UserId']
        
#         # Path to templates.txt file
#         file_path = os.path.join(os.path.dirname(__file__), 'templates.txt')
        
#         # Read the file directly into a DataFrame
#         df = pd.read_csv(file_path, sep='\t', names=columns, encoding='utf-8')
        
#         # Extract design parameters from Parameters column
#         df['DesignFlow'] = df['Parameters'].apply(lambda x: extract_param(x, 'Designed Flow(m3!s)'))
#         df['DesignTemp'] = df['Parameters'].apply(lambda x: extract_param(x, 'Designed Temp(degC)'))
#         df['DesignSpeed'] = df['Parameters'].apply(lambda x: extract_param(x, 'Designed Speed(RPM)'))
#         df['DesignLoad'] = df['Parameters'].apply(lambda x: extract_param(x, 'Designed Load(KWh)'))
#         df['DesignHead'] = df['Parameters'].apply(lambda x: extract_param(x, 'Designed Head(mmwc)'))
        
#         # Debug the template
#         for i, row in df.iterrows():
#             template_name = row['TemplateName']
#             print(f"\n=== DEBUG: {template_name} ===")
            
#             # Print design parameters
#             print("Design Parameters:")
#             print(f"  Flow: {row['DesignFlow']}")
#             print(f"  Temp: {row['DesignTemp']}")
#             print(f"  Speed: {row['DesignSpeed']}")
#             print(f"  Load: {row['DesignLoad']}")
#             print(f"  Head: {row['DesignHead']}")
            
#             # Parse operational parameters
#             params_str = row['Parameters']
#             formatted_str = params_str.replace(" @@@", ",").replace("@@@", ",").replace('"', '"')
#             params = json.loads(formatted_str)
            
#             # Print operational parameters
#             print("\nOperational Parameters:")
#             for k, v in params.items():
#                 if not k.startswith('Designed'):
#                     print(f"  {k}: {v}")
            
#             # Check for potential issues
#             print("\nPotential Issues:")
            
#             # Check if Outlet Draft is numeric
#             outlet_draft = params.get('Outlet Draft')
#             if outlet_draft and str(outlet_draft).isdigit():
#                 print(f"  - Outlet Draft is a numeric value ({outlet_draft}), not a tag UID")
#                 print("    This will be skipped in tag mapping and may cause calculation issues")
            
#             # Check for other numeric values in operational parameters
#             for k, v in params.items():
#                 if not k.startswith('Designed') and v is not None and str(v).isdigit():
#                     print(f"  - {k} is a numeric value ({v}), not a tag UID")
            
#             print("===========================\n")
        
#         # Filter by UseCase and Status if specified in query
#         if 'UseCase = \'Fan Efficiency\'' in query:
#             df = df[df['UseCase'] == 'Fan Efficiency']
        
#         if 'Status = \'Active\'' in query:
#             df = df[df['Status'] == 'Active']
        
#         return df
    
#     except Exception as e:
#         print(f'Exception in fetch_template_info: {str(e)}')
#         return pd.DataFrame()




    

def extract_template(df):
    """
    Extract tag UIDs from template parameters.
    """
    try:
        list_of_tags = []
        plant_tag_mapping = {}  # Map tags to their plant names
        
        for i in range(len(df)):
            plant_name = df['PlantName'].iloc[i]
            unformatted_json_string = df['Parameters'].iloc[i]
            formatted_str = unformatted_json_string.replace(" @@@", ",").replace("@@@", ",").replace('"', '"')
            json_obj = json.loads(formatted_str)
            
            for k, j in json_obj.items():
                # Skip design parameters and numeric values
                if k.startswith('Designed') or j is None or pd.isna(j):
                    continue
                try:
                    float(j)
                    continue  # Skip if it's a numeric value
                except ValueError:
                    pass  # Not a numeric value, continue processing

                list_of_tags.append(str(j))
                plant_tag_mapping[str(j)] = plant_name
                        
        return list_of_tags, plant_tag_mapping
    except Exception as e:
        logger.error(f'Exception occurred while extracting template in fan efficiency ingestion: {e}')
        return [], {}




def fan_efficiency_ingestion_main(event, context):
    try:
        logging.getLogger('botocore').setLevel(logging.ERROR)
        logging.getLogger('boto3').setLevel(logging.ERROR)
        logging.getLogger('urllib3').setLevel(logging.ERROR)
        logging.getLogger('matplotlib').setLevel(logging.ERROR)
        logging.getLogger('parso').setLevel(logging.ERROR)
        logging.getLogger('asyncio').setLevel(logging.ERROR)
        logging.getLogger('s3transfer').setLevel(logging.ERROR)

        # Define current_time first before using it
        current_time = pd.Timestamp(datetime.now(timezone.utc))
        logger.info(f"Starting fan efficiency ingestion at {current_time}")

        # Fetch templates from SQL database
        parameters_query = "select * from [dbo].[CBM_EquipmentTemplates] where UseCase = 'Fan Efficiency' and Status = 'Active'"
        logger.info(f"Executing SQL query: {parameters_query}")
        parameters_data = fetch_template_info(parameters_query)
        
        if parameters_data.empty:
            logger.warning("No templates found in database")
            return {
                "statusCode": 200,
                "body": json.dumps({"message": "No templates found to process"})
            }
            
        logger.info(f"Retrieved {len(parameters_data)} templates from database")
        logger.info(f"Template columns: {parameters_data.columns.tolist()}")

        # Extract tag IDs from templates and map them to plant names
        list_of_tags, plant_tag_mapping = extract_template(parameters_data)
        if not list_of_tags:
            logger.warning("No tags found in templates")
            return {
                "statusCode": 200,
                "body": json.dumps({"message": "No tags found to process"})
            }
            
        list_of_tags = tuple(list_of_tags)
        logger.info(f"Extracted {len(list_of_tags)} tags from templates")
        

        # Log tags per template
        template_tags = {}
        for i in range(len(parameters_data)):
            template_name = parameters_data['TemplateName'].iloc[i]
            plant_name = parameters_data['PlantName'].iloc[i]
            params_str = parameters_data['Parameters'].iloc[i]
            params = json.loads(params_str.replace(" @@@", ",").replace("@@@", ",").replace('"', '"'))
            
            # Filter out design parameters and numeric values
            operational_params = {k: v for k, v in params.items() 
                                if not k.startswith('Designed') and v is not None 
                                and not pd.isna(v) and not str(v).isnumeric()}
            
            template_tags[template_name] = {
                'plant': plant_name,
                'tags': operational_params
            }
            
        logger.info(f"Tags per template: {json.dumps(template_tags, indent=2)}")

        # Map tags to SiteWise properties
        tag_mapping = map_tags_to_sitewise_hybrid(list_of_tags, plant_tag_mapping)
        logger.info(f"Mapped {len(tag_mapping)} tags to SiteWise properties")
        
        # Create a detailed report of templates and their tags
        template_report = {}
        for template_name, template_info in template_tags.items():
            tag_status = {}
            for param, tag_uid in template_info['tags'].items():
                has_mapping = tag_uid in tag_mapping
                tag_status[param] = {
                    'tag_uid': tag_uid,
                    'has_mapping': has_mapping
                }
                if has_mapping:
                    tag_status[param]['asset_id'] = tag_mapping[tag_uid]['AssetId']
                    tag_status[param]['property_id'] = tag_mapping[tag_uid]['PropertyId']
    
    
            template_report[template_name] = {
                'plant': template_info['plant'],
                'tag_status': tag_status
            }

        logger.info(f"Template mapping report: {json.dumps(template_report, indent=2)}")


         # Log unmapped tags
        unmapped_tags = [tag for tag in list_of_tags if tag not in tag_mapping]
        logger.info(f"Unmapped tags: {unmapped_tags}")

        # Filter active templates
        template = parameters_data
        if template.empty:
            logger.warning("No active fan efficiency templates found")
            return {
                "statusCode": 200,
                "body": json.dumps({"message": "No active templates to process"})
            }
        
        logger.info(f"Processing {len(template)} active templates")
        
        # Process templates in parallel
        results = []
        missing_data_templates = []
        processed_templates = []
    
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures_dict = {}
            for i in template['TemplateName'].unique():
                logger.info(f"Submitting template for processing: {i}")
                temp = template.loc[template['TemplateName'] == i]
                f1 = executor.submit(ingest_efficiency, [temp, query_asset_data, current_time, tag_mapping])
                futures_dict[f1] = i
            
            # Collect results
            for future in concurrent.futures.as_completed(futures_dict.keys()):
                template_name = futures_dict[future]
                try:
                    result = future.result()
                    logger.info(f"Completed template processing for {template_name}: {result}")
                    results.append(result)
                    processed_templates.append(template_name)
                    if isinstance(result, str) and "No data retrieved from SiteWise" in result:
                        missing_data_templates.append(template_name)
                except Exception as e:
                    logger.error(f"Error processing template {template_name}: {e}")
                    results.append(f"Error processing {template_name}: {str(e)}")

        logger.info(f"All templates processed. Total: {len(processed_templates)}")
        logger.info(f"Templates with missing SiteWise data: {missing_data_templates}")
        logger.info(f"Templates successfully processed: {[t for t in processed_templates if t not in missing_data_templates]}")
        
        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Fan efficiency ingestion completed",
                "total_templates": len(parameters_data['TemplateName'].unique()),
                "processed_templates": len(processed_templates),
                "templates_with_missing_data": missing_data_templates,
                "successful_templates": [t for t in processed_templates if t not in missing_data_templates],
                "template_report": template_report,
                "results": results
            })
        }

        
    except Exception as e:
        logger.error(f"Unhandled exception in fan_efficiency_ingestion_main: {e}", exc_info=True)
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": str(e),
                "message": "Error during fan efficiency ingestion"
            })
        }
