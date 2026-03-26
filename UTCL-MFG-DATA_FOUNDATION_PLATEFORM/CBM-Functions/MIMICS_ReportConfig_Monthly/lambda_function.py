import logging
from main_module import MIMICS_ReportConfig_Monthly_main
 
def handler(event, context):
    print('Inside handler function')
    return MIMICS_ReportConfig_Monthly_main(event, context)
