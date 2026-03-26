import json
import logging
import datetime as dt
from support_module import get_train_data

def AR_data_preperation_func_main(event, context):
    logging.info('Python function processed a request.')

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
                'message': "Invalid date format. Please use 'YYYY-MM-DD' format for start_date and end_date.",
                'error': str(e)
            })
        }

    try:
        # Data preparation function
        tick = dt.datetime.now()
        train_data, error = get_train_data(plant_code, mill_no, grade, start_date, end_date, usecase_type)
        if error:
            return {
                'statusCode': 500,
                'body': json.dumps({
                    'message': 'Error processing data',
                    'error': error
                })
            }

        tock = dt.datetime.now()

        if train_data == 1:
            response_message = f"Data already available for {plant_code}, {mill_no}, {grade}."
            response_message += f" Time taken: {tock - tick}"
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'message': response_message
                })
            }

        elif train_data == 2:
            response_message = f"Data uploaded to blob successfully for {plant_code}, {mill_no}, {grade}."
            response_message += f" Time taken: {tock - tick}"
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'message': response_message
                })
            }

        elif train_data == 3:
            response_message = f"Data is not available for {plant_code}, {mill_no}, {grade}."
            response_message += f" Time taken: {tock - tick}"
            return {
                'statusCode': 404,
                'body': json.dumps({
                    'message': response_message
                })
            }

        elapsed_time = (dt.datetime.now() - tick)
        time_out_duration = 230  # Timeout threshold in seconds
        if elapsed_time >= dt.timedelta(seconds=time_out_duration):
            return {
                'statusCode': 202,
                'body': json.dumps({
                    'message': 'Data preparation is taking longer than expected. It will continue on the server side and will upload data to storage soon.'
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

