var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const users = require('./controllers/users')
const product = require('./controllers/product')
const people = require('./controllers/people')
const models = require('./controllers/models')

var app = express();

var hostname = '0.0.0.0';
var port = process.env.PORT || 3000;

app.listen(port, hostname, async function(){
  console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n");
  await models.connect();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res, next) {
  res.status(200).json({'title':'Hello bisou'});
});

app.get('/users', users.getUsers);
app.post('/arduino', product.postArduino);
app.post('/product', product.createProduct);
app.get('/product/:id', product.getProduct);
app.post('/create-user', users.createUser);
app.post('/connect', users.connect);

app.get('/people', people.getPeople);
app.post('/hand-washing', users.handWashing);
app.get('/statistics-user', users.getStat);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
