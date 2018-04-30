var express = require('express');
var db = require('./server/db/index');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var handler = require('./server/lib/request-handler')
var util = require('./server/lib/utility')
var path = require('path');
var partial = require('express-partial');
var cons = require('consolidate');


var app = express();

app.use(express.static(__dirname + '/client/views/shoppingmall'));
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: '12weffnoewnfo',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    },
}));

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, '/client/views/shoppingmall'));
app.set('view engine', 'html');

app.get('/indexVisit', handler.IndexVisit);

app.post('/register', handler.signupUser);

app.post('/login', handler.loginUser);

app.post('/order', handler.order);

app.get('/product*', handler.renderDetail);
app.post('/product*', handler.countProductClick);

app.get('/logout', handler.logout)

// app.get(/)

//admin
// app.get('/admin', somthing)
// app.get

module.exports = app;