const axios = require('axios');

 const callApi = async (
    baseUrl,
    url,
    method,
    headers,
    data = null
) => {
    try {
        const config = {
            headers: headers,
          };
        let response;
        if (method == 'get') {
            response = await axios[method](`${baseUrl}${url}`,config, data);
        } else {
            response = await axios[method](`${baseUrl}${url}`, data, config);
            console.log(`${baseUrl}${url}`);
        }
        if (response) {
            return response;
        }
    } catch (error) {
        console.log('--callapi error--', error)

        throw error;
    }
};

module.exports = { callApi };
