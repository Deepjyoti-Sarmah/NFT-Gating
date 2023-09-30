const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_a95596c219ad418180bd8feea7bcd4c6'
};

const data = {
  name: 'NFT Transfer',
  expression: '',
  network: 'ethereum-sepolia',
  destinationIds: ['']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
//   .then(response => console.log(response.data))
//   .catch(error => {
//     console.log('error', error);
//     if (error.response) {
//       console.log('error response data', error.response.data);
//       console.log('error response status', error.response.status);
//       console.log('error response headers', error.response.headers);
//     }
//   });


// (tx_logs_topic1 =~ '18992684FBeEEd5A61B48610fec6137a924cBC98') && 
// (tx_logs_address == '0x7fb0f3c347056d2d7141f59f26484e3a35b528ca') && 
// (tx_logs_topic0 == '0xd7253e38c6e3ae4d341ee9e4824c69c1c060ed67a312642ac582b26a555a611c')
