
var express = require('express');
var db = require('./server/db/index');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var session = require('express-session');
var controller = require('./server/controllers/index');
var handler = require('./server/lib/request-handler')
// var flash = require('express-flash-notification');
var util = require('./server/lib/utility')

var app = express();
// app.set('client', __dirname + '/client');
app.use(express.static(__dirname + '/client/views/shoppingmall'));
app.use(express.static(__dirname + '/client'));
// app.use(flash(app));
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', handler.renderIndex);
// app.post('/register', handler.checkUser, controller.users.post);
app.post('/register', handler.signupUser);
app.post('/login', handler.loginUser);

// app.post('/cart', something)
// app.post('/purchase', something)

//admin
// app.get('/admin', somthing)
// app.get

module.exports = app;