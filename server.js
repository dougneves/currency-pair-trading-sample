const express = require('express');

const app = express();

app.use('/', express.static('dist'));

const server = app.listen(5000, function() {
  console.log('app running -> http://localhost:5000/');
});
