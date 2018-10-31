const axios = require('axios');

var accessToken = '695d0edfee3e4a208d4eae6098cbb538';

axios
  .get('https://api.api.ai/v1/query?', {
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
      'Content-Type': 'application/json'
    },
    params: {
      v: '20150910',
      query: 'who are you',
      lang: 'en',
      sessionId: '12322'
    }
  })
  .then(response => {
    console.log('Response', response.data.result.fulfillment.speech);
  })
  .catch(error => {
    console.log('Error', error);
  });
