
var models = require('../models');
var util = require('../lib/utility');


exports.renderIndex = function (req, res) {
    res.end();
    // res.render('index');
};

exports.signupUser = function (req, res) {
    console.log('req', req);
    
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
                var name = req.body.name;
                var birthDate = req.body.birthDate;
                var joined = new Date();
                var params = [mail, password, name, birthDate, joined];
                var sql = 'INSERT INTO users (mail, password, name, birthDate, joined) VALUES (?, ?, ?, ?, ?)';
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
    // var password = req.password
    var queryStr = 'SELECT password FROM users where mail=?';
    models.users.get(queryStr, mail, function (err, rows) {
        if (err) {
            throw err
        } else {
            util.isValidPassword(req.body.password, rows[0].password).then(function (result) {
                if (result) {
                    console.log('valid password'); 
                    console.log(req.session);
                    res.status(200).send({result: 'redirect', url:'/'}) 
                } else {
                    console.log('invalid password');
                    res.end()
                }
            })
        }
    })
}

exports.order = function (req, res) {
    console.log(req.body);
    res.end()
}

exports.renderDetail = function(req, res){
    // console.log('getbody', req.body);
    console.log('url', req.url);
    
    res.render(req.url.slice(1))
}

exports.countProductClick = function(req, res){
    console.log('post', req.body);
    // res.status(200).send()
    res.end()
}
