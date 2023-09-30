
// 5fe75009-8c23-4560-b9a1-861938cff943

const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_a95596c219ad418180bd8feea7bcd4c6'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICcxODk5MjY4NEZCZUVFZDVBNjFCNDg2MTBmZWM2MTM3YTkyNGNCQzk4JykgJiYgCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4MjRhN2M4NzlkZDc0MzYxYTNjNmQ0NmNmMjY4OWM5NTEwMmIyOGNjMicpICYmIAoodHhfbG9nc190b3BpYzAgPT0gJzB4NDRkMTQ5NWVlYTFjNDZmZTJmOGJkZjdhMmRjYmIzNDE1NTRiNGFiZWMzMTE4YmFkNGQ0MTJhZDkxOGEyYTQ2OCcpCgo=',
  network: 'ethereum-sepolia',
  destinationIds: ['5fe75009-8c23-4560-b9a1-861938cff943']
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
// (tx_logs_address == '0x24a7c879dd74361a3c6d46cf2689c95102b28cc2') && 
// (tx_logs_topic0 == '0x44d1495eea1c46fe2f8bdf7a2dcbb341554b4abec3118bad4d412ad918a2a468')
