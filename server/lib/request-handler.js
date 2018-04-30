var models = require('../models');
var util = require('../lib/utility');
var jwt = require("jsonwebtoken");

exports.IndexVisit = function (req, res) {
    // console.log('indexsession', req.sessionID);
    // console.log('cookie', req.cookies);
    // console.log('header cookie', req.headers.cookie);

    var myToken = jwt.sign({
        user: req.sessionID
    }, "checkTotalVisitors", {
        expiresIn: 24 * 60 * 60
    });
    try {
        //쿠키가 있고, 쿠키네임이 있으면
        if (req.headers.cookie && req.cookies.cookieName) {
            jwt.verify(req.cookies.cookieName, "checkTotalVisitors");
            // console.log('session', req.session);
            res.end()
        } else {
            console.log('token', myToken);
            //쿠키가 있는 있는데 쿠키네임이 없으면 = 신규
            res.cookie("cookieName", myToken);
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
        //토큰이 검증안되면 = 만료되면
        console.log(err);
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
    console.log(req.body.password);

    // var password = req.password
    var queryStr = 'SELECT password FROM users where mail=?';
    models.users.get(queryStr, mail, function (err, rows) {
        if (err) {
            throw err
        } else {
            console.log(rows[0].password);
            util.isValidPassword(req.body.password, rows[0].password).then(function (result) {
                if (result) {
                    console.log('valid password');
                    console.log('url', req.url);
                    req.session.mail = mail
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
    console.log(req.body);
    res.end()
}

exports.renderDetail = function (req, res) {
    // console.log('getbody', req.body);

    console.log('url', req.url);

    res.render(req.url.slice(1))
}

exports.countProductClick = function (req, res) {

    console.log('post', req.body);
    // res.status(200).send()
    res.end()
}

exports.sendNumberVisitors = function (req, res) {

    console.log('post', req.body);
    // res.status(200).send()
    res.end()
}