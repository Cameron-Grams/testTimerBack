const express = require('express');
const port = process.env.PORT || 8888;

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.get('/', function (req, res) {
  return setTimeout( () =>  res.json( { "message": "good on server" } ), 7000 );
});

app.listen(port, () => console.log( 'listening on port: ', port ) );
