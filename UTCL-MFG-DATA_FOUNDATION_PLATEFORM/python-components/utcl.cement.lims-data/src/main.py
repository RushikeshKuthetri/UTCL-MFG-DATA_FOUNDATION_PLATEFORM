import logging
import time
import sys
from services.http_client import HttpClient
from services.dynamodb_client import DynamoDBClient
from services.sitewise_manager import SiteWiseManager
from services.secrets_manager_client import SecretsManagerClient


logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger(__name__)

def main():
    secrets_manager_client = SecretsManagerClient()
    secrets = secrets_manager_client.get_secret("utcl/lims/credentials")
    login_api_url = secrets["login_api_url"]
    job_api_url =  secrets["job_api_url"]
    username =  secrets["username"]
    password =  secrets["password"]
    
    dynamodb_client = DynamoDBClient("lims_TagMaster")
    http_client = HttpClient()
    sitewise_manager = SiteWiseManager(stream_name="SiteWise_Stream")

    try:
        tags = dynamodb_client.scan_all_data()
        
        if len(tags) > 0:
            while True:
                access_token = http_client.login(login_api_url, username, password)
                if access_token:
                    job_values = http_client.retrieve_job_values(job_api_url, access_token, tags)
                    if job_values:
                        # logic to send data to SiteWise
                        pass
                        # sitewise_manager.append_data(job_values)
                        
                time.sleep(55)
        else:
            logger.warning("No tags found in the JSON file.")
    except Exception as ex:
        logger.error("An error occurred during execution: %s", ex)
    finally:
        sitewise_manager.close()
    

if __name__ == "__main__":
    main()