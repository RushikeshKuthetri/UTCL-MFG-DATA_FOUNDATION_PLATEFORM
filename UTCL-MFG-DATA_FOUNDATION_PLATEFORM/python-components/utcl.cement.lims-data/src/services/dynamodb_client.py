class DynamoDBClient:
    def __init__(self, table_name):
        import boto3
        self.resource = boto3.resource('dynamodb', region_name='ap-south-1')
        self.table_name = table_name
        self.table = self.resource.Table(table_name)

    def scan_all_data(self):
        try:
            response = self.table.scan()
            data = response['Items']
            
            while 'LastEvaluatedKey' in response:
                response = self.table.scan()
                data.extend(response['Items'])
            
            return data
            
        except Exception as e:
            raise e