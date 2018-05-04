var models = require('../models/index');
var util = require('../lib/utility');
var jwt = require("jsonwebtoken");

//render될때 방문자수 체크
exports.renderIndex = function (req, res) {
    console.log('----------------------now', new Date());
    console.log("beforelogin", req.session);
    console.log('beforelogin sessionID', req.sessionID);
    //로그인 사용자면 로그아웃 페이지
    if(req.session.mail){
        var myToken = jwt.sign({
            user: req.sessionID
        }, "checkTotalVisitors", {
            expiresIn: 24 * 60 * 60
        });
    
        try {
            //쿠키가 있고, 쿠키네임이 있으면
            console.log('afterTry', req.cookies.cookieName);
            if (req.headers.cookie && req.cookies.cookieName) { // cookie
                console.log('checkcookie', req.cookies.cookieName);
                jwt.verify(req.cookies.cookieName, "checkTotalVisitors");
                // console.log('session', req.session);
                console.log('veryfied');
                res.render('views/shoppingmall/logout');
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
                        res.render('views/shoppingmall/logout');
                    }
                })
            }
        } catch (err) {
            console.log('err', err);
            res.cookie("cookieName", myToken);
            res.render('views/shoppingmall/logout');
        };
    } else {
          //일반유저
        var myToken = jwt.sign({
            user: req.sessionID
        }, "checkTotalVisitors", {
            expiresIn: 24 * 60 * 60
        });
    
        try {
            //쿠키가 있고, 쿠키네임이 있으면
            console.log('afterTry', req.cookies.cookieName);
            if (req.headers.cookie && req.cookies.cookieName) { // cookie
                console.log('checkcookie', req.cookies.cookieName);
                jwt.verify(req.cookies.cookieName, "checkTotalVisitors");
                // console.log('session', req.session);
                console.log('veryfied');
                res.render('views/shoppingmall/index');
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
                        res.render('views/shoppingmall/index');
                    }
                })
            }
        } catch (err) {
            console.log('err', err);
            res.cookie("cookieName", myToken);
            res.render('views/shoppingmall/index');
        };
    }

}

exports.rederRegister = function (req, res) {
    res.render('views/shoppingmall/register')
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
    req.session.cookie.maxAge = 1000 * 60 * 30;
    var mail = req.body.mail
    var queryStr = 'SELECT password FROM users where mail=?';
    models.users.get(queryStr, mail, function (err, rows) {
        if (err) {
            throw err
        } else {
            console.log(rows[0].password);
            util.isValidPassword(req.body.password, rows[0].password).then(function (result) {
                if (result) {
                    req.session.mail = mail
                    console.log('----------------------now', new Date());
                    console.log("afterlogin", req.session);
                    console.log('afterlogin sessionID', req.sessionID);             
                    res.send({result: 'redirect'})
                } else {
                    console.log('invalid password');
                    res.end()
                }
            })
        }
    })
}

exports.logout = function (req, res) {
    console.log('---------------------------------------logout!!!!!');
    delete req.session.mail;
    console.log('----------------------now', new Date());
    console.log("logout", req.session);
    console.log('logout sessionID', req.sessionID);
    res.send({result: 'redirect'})
}

exports.order = function (req, res) {
    req.session.cookie.maxAge = 1000 * 60 * 30;
    console.log('----------------------now', new Date());
    console.log("afteroder", req.session);
    console.log('afteroder sessionID', req.sessionID);
    var itemName = req.body.product;
    var price = req.body.price;
    var revenueTime = new Date();
    var params = [itemName, price, revenueTime]
    var sql = 'INSERT INTO revenue (itemName, price, revenueTime) VALUES (?, ?, ?)';
    models.revenue.post(sql, params, function (err, rows) {
        if (err) {
            throw err;
        } else {
            console.log("success");
            res.end()
        }
    })
}

exports.renderProduct = function (req, res) {
    req.session.cookie.maxAge = 1000 * 60 * 30
    console.log('----------------------now', new Date());
    console.log("afterProduct", req.session);
    console.log('afterProduct sessionID', req.sessionID); 
    if (req.session.mail) {
        console.log('sesseion exists');
        res.render('views/shoppingmall/' + req.url.slice(1) + 'Logout')
    } else {
        console.log('not login user');
        
        res.render('views/shoppingmall/' + req.url.slice(1))
    }
}

exports.countProductClick = function (req, res) {
    var pageName = req.body.productCode;
    console.log(pageName);
    var pageTime = new Date();
    var params = [pageName, pageTime]
    var sql = 'INSERT INTO pageviews (pageName, pageTime) VALUES (?, ?)';
    models.pageviews.post(sql, params, function (err, rows) {
        if (err) {
            throw err;
        } else {
            console.log("success");
            res.end()
        }
    })
}
