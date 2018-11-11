const express = require('express');
const port = process.env.PORT || 8888;

const app = express();

app.get('/', function (req, res) {
  return res.json( { "message": "good on server" } );
});

app.listen(port, () => console.log( 'listening on port: ', port ) );