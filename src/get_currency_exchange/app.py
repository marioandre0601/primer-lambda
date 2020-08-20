import requests
import logging

logger = logging.getLogger()

def lambda_handler(event, context):

    url = 'https://api.myip.com/'
    r = requests.get(url)
    ip = r.json()['ip']

    logger.info(f'My ip is {ip}')
