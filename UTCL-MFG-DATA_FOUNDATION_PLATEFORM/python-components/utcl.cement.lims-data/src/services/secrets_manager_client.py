
import json

class SecretsManagerClient:
    def __init__(self):
        import boto3
        self.client = boto3.client('secretsmanager', region_name='ap-south-1')

    def get_secret(self, secret_id):
        try:
            response = self.client.get_secret_value(SecretId=secret_id)
            secrets_string = response['SecretString']
            secret = json.loads(secrets_string)
            return secret
        
        except Exception as e:
            raise e