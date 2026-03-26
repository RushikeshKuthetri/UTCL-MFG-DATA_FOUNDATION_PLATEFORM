import logging
from main_module import plants_data_not_coming_alerts_prod_main
 
def handler(event, context):
    print('Inside handler function')
    return plants_data_not_coming_alerts_prod_main(event, context)

