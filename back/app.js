var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const users = require('./controllers/users')
const product = require('./controllers/product')
const models = require('./controllers/models')

var app = express();

var hostname = 'localhost';
var port = 3000;

app.listen(port, hostname, async function(){
  console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n");
  await models.connect();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res, next) {
  res.send('bisou')
});

app.get('/users', users.getUsers);
app.post('/arduino', product.postArduino);
app.post('/product', product.createProduct);
app.get('/product/:id', product.getProduct);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
