var models = require('../models/index');
var util = require('../lib/utility');
var jwt = require("jsonwebtoken");

exports.IndexVisit = function (req, res) {  
    console.log("beforelogin", req.session);
    console.log('beforelogin', req.sessionID);
    
    
    var myToken = jwt.sign({
        user: req.sessionID
    }, "checkTotalVisitors", {
        expiresIn: 24*60*60
    });
    
    try {
        //쿠키가 있고, 쿠키네임이 있으면
        console.log('afterTry', req.cookies.cookieName);
        if (req.headers.cookie && req.cookies.cookieName) { // cookie
            console.log('checkcookie', req.cookies.cookieName);     
            jwt.verify(req.cookies.cookieName, "checkTotalVisitors");
            // console.log('session', req.session);
            console.log('veryfied');    
            res.end()
        } else {
            console.log('token', myToken);
            //쿠키가 있는 있는데 쿠키네임이 없으면 = 신규
            res.cookie("cookieName", myToken); //set-cookie
            var visitorTime = new Date();
            var params = [myToken, visitorTime]
            var sql = 'INSERT INTO visitors (token, visitorTime) VALUES (?, ?)';
            models.visitors.post(sql, params, function (err, row) {
                if (err) {
                    throw err;
                } else {
                    res.send({
                        'token': myToken
                    })
                }
            })
        }
    } catch (err) {
        console.log('err', err);
        res.cookie("cookieName", myToken);
        res.send({
            'token': myToken
        })
    };
}

exports.signupUser = function (req, res) {
    mail = req.body.mail
    var queryStr = 'SELECT * FROM users where mail=?';
    models.users.get(queryStr, mail, function (err, rows) {
        if (rows.length !== 0) {
            console.log('alreay taken');
            res.jsonp({
                success: false
            })
        } else {
            util.hashPassword(req.body.password).then(function (hash) {
                var mail = req.body.mail;
                var password = hash;
                var userName = req.body.name;
                var birthDate = req.body.birthDate;
                var params = [mail, password, userName, birthDate];
                var sql = 'INSERT INTO users (mail, password, userName, birthDate) VALUES (?, ?, ?, ?)';
                models.users.post(sql, params, function (err, row) {
                    if (err) {
                        throw err;
                    } else {
                        res.jsonp({
                            success: true
                        })
                    }
                })
            })
        }
    })
}

exports.loginUser = function (req, res) {
    var mail = req.body.mail
    var queryStr = 'SELECT password FROM users where mail=?';
    models.users.get(queryStr, mail, function (err, rows) {
        if (err) {
            throw err
        } else {
            console.log(rows[0].password);
            util.isValidPassword(req.body.password, rows[0].password).then(function (result) {
                if (result) {
                    // console.log('valid password');
                    // console.log('url', req.url);
                    req.session.regenerate(function(err) {
                        req.session.cookie.maxAge = 1000*60*60;
                       })
                       req.session.mail = mail
                       console.log("afterlogin", req.session);
                     console.log('afterlogin', req.sessionID);
                    // console.log('req.session', req.session);
                    res.send({
                        result: 'redirect'
                    })
                } else {
                    console.log('invalid password');
                    res.end()
                }
            })
        }
    })
}

exports.logout = function (req, res) {
    res.send({
        result: "redirect"
    });
}

exports.order = function (req, res) {
    var itemName = req.body.product;
    var price = req.body.price;
    var revenueTime = new Date();
    var params = [itemName, price, revenueTime]
    var sql = 'INSERT INTO revenue (itemName, price, revenueTime) VALUES (?, ?, ?)';
    models.revenue.post(sql, params, function(err, rows){
        if(err){
            throw err;
        } else {
            console.log("success");  
            res.end()      
        }
    })
}

exports.renderProduct = function (req, res) {
    res.render(req.url.slice(1))
}

exports.countProductClick = function (req, res) {
    var pageName = req.body.productCode;
    console.log(pageName);
    var pageTime = new Date();
    var params = [pageName, pageTime]
    var sql = 'INSERT INTO pageviews (pageName, pageTime) VALUES (?, ?)';
    models.pageviews.post(sql, params, function(err, rows){
        if(err){
            throw err;
        } else {
            console.log("success");  
            res.end()      
        }
    })
}