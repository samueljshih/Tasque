var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// Database
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();
app.use(cors());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function(req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
