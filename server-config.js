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
var cors = require('cors')
var adminLeft = require('./server/lib/request-handler-admin-left')
var adminMid = require('./server/lib/request-handler-admin-mid')
var adminRight = require('./server/lib/request-handler-admin-right')


var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())
app.use(session({
    secret: '12weffnoewnfo',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 30
    },
}));

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, '/client'));
app.set('view engine', 'html');

app.get('/', handler.renderIndex)
app.get('/logout', handler.logout)

app.get(/register/, handler.rederRegister);
app.post('/register', handler.signupUser);
app.post('/login', handler.loginUser);

app.get('/product*', handler.renderProduct);
app.post('/product*', handler.countProductClick);
app.post('/order', handler.order);


app.get('/visitCount', adminMid.supplyMidPanelData)
app.get('/analysisSummary', adminLeft.supplyLeftPanelData)
app.get('/analysisGraph', adminRight.supplyRightPanelData)



module.exports = app;

