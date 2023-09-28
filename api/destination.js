const axios = require('axios');
//
// '54975241-61f0-4e67-bcdf-69088c0697c2'
//
const headers = {
  'accept': 'application/json',
  'x-api-key':'QN_f14efde44e6543c980dd6f11884a7f75'
};

const data = {
  name: 'My Destination',
  to_url: 'https://7411-2409-4065-d14-21b-cf3-6c43-bd08-3abb.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));
