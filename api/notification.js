const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_f14efde44e6543c980dd6f11884a7f75'
};

const data = {
  name: 'NFT Transfer',
  expression: '',
  network: 'ethereum-sepolia',
  destinationIds: ['https://50cf-2409-408a-8215-a35e-1175-54f2-20bb-12b3.ngrok-free.app 2cb3d4a2-adc7-4416-ac07-2a8962315476']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '18992684FBeEEd5A61B48610fec6137a924cBC98') && 
// (tx_logs_address == '0x7fb0f3c347056d2d7141f59f26484e3a35b528ca') && 
// (tx_logs_topic0 == '0xd7253e38c6e3ae4d341ee9e4824c69c1c060ed67a312642ac582b26a555a611c')
