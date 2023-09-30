const axios = require('axios');
//
//
const headers = {
  'accept': 'application/json',
  'x-api-key':'QN_f14efde44e6543c980dd6f11884a7f75'
};

const data = {
  name: 'My Destination',
  to_url: 'https://c1e4-2409-408a-8215-a35e-5b82-d47a-aeae-7568.ngrok-free.app /webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));
