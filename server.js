const express = require('express');
const axios = require('axios');

const app = express();

app.use('/', express.static('dist'));

app.get('/api/last_price', (req, res) => {
  axios
    .get(`https://api.bitfinex.com/v1//pubticker/btcusd`)
    .then(result => {
      if (result.data) return res.send(result.data);
      else return res.send({ message: 'unknow error' });
    })
    .catch(ex => res.send({ message: ex.message }));
});

const server = app.listen(5000, function() {
  console.log('app running -> http://localhost:5000/');
});
