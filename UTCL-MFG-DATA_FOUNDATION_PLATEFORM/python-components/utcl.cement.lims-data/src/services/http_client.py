class HttpClient:
    def __init__(self):
        import requests
        self.session = requests.Session()

    def login(self, login_api_url, username, password):
        login_data = {'username': username, 'password': password}
        response = self.session.post(login_api_url, json=login_data)

        if response.status_code == 200:
            token_data = response.json()
            return token_data.get('access')
        else:
            raise Exception(f"Failed to retrieve access token. Status code: {response.status_code}")

    def retrieve_job_values(self, job_api_url, access_token, tags):
        headers = {'Authorization': f'Bearer {access_token}'}
        request_data = {'tags': tags}
        response = self.session.post(job_api_url, json=request_data, headers=headers)

        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to retrieve job values. Status code: {response.status_code}")