# from azure.kusto.data.helpers import dataframe_from_result_table
# from azure.kusto.data import KustoClient, KustoConnectionStringBuilder


# from azure.identity import DefaultAzureCredential
# from azure.keyvault.secrets import SecretClient
import urllib.parse
import logging

# keyvault_url = 'https://utclmfgiiot-keyvault.vault.azure.net/'
# credential = DefaultAzureCredential()

# client = SecretClient(vault_url=keyvault_url, credential=credential)
# client_secret = client.get_secret(name='service-principal-secret-value').value

# i4connect_pass = client.get_secret(name='i4connectPass').value
# i4connect_pass = urllib.parse.quote(i4connect_pass, safe='')

import boto3
import logging
from decimal import Decimal
from boto3.dynamodb.conditions import Key
from datetime import datetime, timedelta, timezone
import os

i4connect_pass = os.getenv("i4connect_pass")
client_secret = os.getenv("client_secret")

dynamodb = boto3.resource('dynamodb')

efficiency_table = dynamodb.Table('Utcl_CBM_Fan_Efficiency_Testing')
average_efficiency_table = dynamodb.Table('Utcl_CBM_Fan_AverageEfficiency_Testing')

def fetch_fan_efficiency_data():
    one_hour_ago = datetime.now(timezone.utc) - timedelta(minutes=10)
    items = []
    scan_kwargs = {}
    
    while True:
        response = efficiency_table.scan(**scan_kwargs)
        items.extend(response.get('Items', []))
        last_evaluated_key = response.get('LastEvaluatedKey')
        if not last_evaluated_key:
            break
        scan_kwargs['ExclusiveStartKey'] = last_evaluated_key

    # Filter by timestamp
    return [item for item in items if datetime.fromisoformat(item['Timestamp']) > one_hour_ago]


def fetch_average_efficiency_data():
    one_hour_ago = datetime.now(timezone.utc) - timedelta(hours=1)
    items = []
    scan_kwargs = {}

    while True:
        response = average_efficiency_table.scan(**scan_kwargs)
        items.extend(response.get('Items', []))
        last_evaluated_key = response.get('LastEvaluatedKey')
        if not last_evaluated_key:
            break
        scan_kwargs['ExclusiveStartKey'] = last_evaluated_key

    return [item for item in items if datetime.fromisoformat(item['Timestamp']) > one_hour_ago]


def check_all_same(values):
    first = values[0]
    return all(v == first for v in values)


def ingest_average_efficiency(temp_list, avg_data_list, template_name):
    try:
        relevant_avg = [r for r in avg_data_list if r['TemplateName'] == template_name]

        efficiencies = [float(x['Efficiency']) for x in temp_list]
        timestamp = temp_list[0]['Timestamp']
        plant = temp_list[0]['PlantName']
        fan = temp_list[0]['Fan Name']

        if not relevant_avg:
            avg_eff = round(sum(efficiencies) / len(efficiencies), 2)
            average_efficiency_table.put_item(
                Item={
                    'Timestamp': timestamp,
                    'TemplateName': template_name,
                    'PlantName': plant,
                    'FanName': fan,
                    'AverageEfficiency': Decimal(str(avg_eff)),
                    'EfficiencyDrop': Decimal('0')
                }
            )
        elif check_all_same(efficiencies):
            avg_eff = round(efficiencies[0], 2)
            average_efficiency_table.put_item(
                Item={
                    'Timestamp': timestamp,
                    'TemplateName': template_name,
                    'PlantName': plant,
                    'FanName': fan,
                    'AverageEfficiency': Decimal(str(avg_eff)),
                    'EfficiencyDrop': Decimal('0')
                }
            )
            return f'last 10 efficiency are same for {template_name}'
        else:
            prev_eff = float(relevant_avg[0]['AverageEfficiency'])
            if prev_eff == 0:
                drop = 1 - float(efficiencies[0]) / 0.01
            else:
                drop = 1 - float(efficiencies[0]) / prev_eff

            average_efficiency_table.put_item(
                Item={
                    'Timestamp': timestamp,
                    'TemplateName': template_name,
                    'PlantName': plant,
                    'FanName': fan,
                    'AverageEfficiency': Decimal(str(round(prev_eff, 2))),
                    'EfficiencyDrop': Decimal(str(round(drop, 2)))
                }
            )
            if drop < 0:
                return f'efficiency increased for {template_name} by {round(drop, 2)}%'
            else:
                return f'efficiency dropped for {template_name} by {round(drop, 2)}%'

    except Exception as e:
        logging.error(f'Error during efficiency ingestion for {template_name}: {e}')

