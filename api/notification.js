const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_f14efde44e6543c980dd6f11884a7f75'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICcxODk5MjY4NEZCZUVFZDVBNjFCNDg2MTBmZWM2MTM3YTkyNGNCQzk4JykgJiYgCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4N2ZiMGYzYzM0NzA1NmQyZDcxNDFmNTlmMjY0ODRlM2EzNWI1MjhjYScpICYmIAoodHhfbG9nc190b3BpYzAgPT0gJzB4ZDcyNTNlMzhjNmUzYWU0ZDM0MWVlOWU0ODI0YzY5YzFjMDYwZWQ2N2EzMTI2NDJhYzU4MmIyNmE1NTVhNjExYycpCgo=',
  network: 'ethereum-sepolia',
  destinationIds: ['b18806cd-5f47-4ee2-8ee8-338b03208656']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '18992684FBeEEd5A61B48610fec6137a924cBC98') && 
// (tx_logs_address == '0x7fb0f3c347056d2d7141f59f26484e3a35b528ca') && 
// (tx_logs_topic0 == '0xd7253e38c6e3ae4d341ee9e4824c69c1c060ed67a312642ac582b26a555a611c')
//
