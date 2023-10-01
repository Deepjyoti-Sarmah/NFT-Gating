const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_a95596c219ad418180bd8feea7bcd4c6'
};

const data = {
  name: 'My Destination',
  to_url: 'https://cb85-2409-408a-8215-a35e-79cf-42cf-e9c2-1809.ngrok-free.app//webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));




// 5fe75009-8c23-4560-b9a1-861938cff943
