const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_f14efde44e6543c980dd6f11884a7f75'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICcxODk5MjY4NEZCZUVFZDVBNjFCNDg2MTBmZWM2MTM3YTkyNGNCQzk4JykgJiYgCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4MUM1MDA4RTg4NTNEODlFNmJEODIzQTcyRkNCNjUxMmZBMWI3NEVDOCcpICYmIAoodHhfbG9nc190b3BpYzAgPT0gJzB4ZGRmMjUyYWQxYmUyYzg5YjY5YzJiMDY4ZmMzNzhkYWE5NTJiYTdmMTYzYzRhMTE2MjhmNTVhNGRmNTIzYjNlZicpCg==',
  network: 'ethereum-sepolia',
  destinationIds: ['54975241-61f0-4e67-bcdf-69088c0697c2']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '18992684FBeEEd5A61B48610fec6137a924cBC98') && 
// (tx_logs_address == '0x1C5008E8853D89E6bD823A72FCB6512fA1b74EC8') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
