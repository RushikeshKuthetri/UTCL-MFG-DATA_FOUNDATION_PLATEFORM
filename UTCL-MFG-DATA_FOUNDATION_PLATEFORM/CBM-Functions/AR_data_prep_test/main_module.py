import logging
import json
import datetime as dt
from support_module import get_train_data

def AR_data_prep_test_main(event, context):
    logging.info('Python HTTP trigger function processed a request.')

    # Parse the body of the event (JSON payload)
    body = json.loads(event['body'])

    # Access parameters from the body
    plant_code = body.get('plant_code')
    mill_no = body.get('mill_no')
    grade = body.get('grade')
    start_date = body.get('start_date')
    end_date = body.get('end_date')
    usecase_type = body.get('usecase_type')

    # Check for missing parameters
    missing_params = []

    if not plant_code:
        missing_params.append('plant_code')
    if not mill_no:
        missing_params.append('mill_no')
    if not grade:
        missing_params.append('grade')
    if not start_date:
        missing_params.append('start_date')
    if not end_date:
        missing_params.append('end_date')
    if not usecase_type:
        missing_params.append('usecase_type')

    required_params = ['plant_code', 'mill_no', 'grade', 'start_date', 'end_date', 'usecase_type']

    if missing_params:
        missing_params_str = ', '.join(missing_params)
        return {
            'statusCode': 400,
            'body': json.dumps({
                'message': f"Please provide remaining parameters: {missing_params_str}.",
                'required_parameters': required_params
            })
        }

    # Validate date range: start_date should be less than end_date
    try:
        if start_date and end_date:
            start_date_obj = dt.datetime.strptime(start_date, "%Y-%m-%d")
            end_date_obj = dt.datetime.strptime(end_date, "%Y-%m-%d")
            if start_date_obj >= end_date_obj:
                return {
                    'statusCode': 400,
                    'body': json.dumps({
                        'message': "End date should be greater than start date."
                    })
                }
    except ValueError as e:
        return {
            'statusCode': 400,
            'body': json.dumps({
                'message': f"Invalid date format. Please use 'YYYY-MM-DD' format for start_date and end_date.",
                'error': str(e)
            })
        }

    try:
        # Call the data preparation function
        train_data, error = get_train_data(plant_code, mill_no, grade, start_date, end_date, usecase_type)

        if error:
            return {
                'statusCode': 500,
                'body': json.dumps({
                    'message': 'Error processing data',
                    'error': error
                })
            }

        # Return the processed data if no error
        return {
            'statusCode': 200,
            'body': json.dumps({
                'train_data': train_data  # Ensure that train_data is serializable to JSON
            })
        }

    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({
                'message': f"An internal error occurred: {str(e)}"
            })
        }

