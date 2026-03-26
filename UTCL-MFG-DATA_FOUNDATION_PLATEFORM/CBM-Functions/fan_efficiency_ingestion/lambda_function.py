from main_module import fan_efficiency_ingestion_main
def handler(event,context):
    return fan_efficiency_ingestion_main(event,context)
