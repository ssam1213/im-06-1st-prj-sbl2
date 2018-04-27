var models = require('../models');
var util = require('../lib/utility');
// var utils = require('./utility');
exports.renderIndex = function (req, res) {
    res.render('index');
  };

exports.signupUser = function (req, res) {
    mail = req.body.mail
    var queryStr = 'SELECT * FROM users where mail=?';
    models.users.get(queryStr, mail, function (err, rows) {
        if (rows.length !== 0) {            
            console.log('alreay taken');
            res.jsonp({success : false})
        } else {
            util.hashPassword(req.body.password).then(function(hash){
                var mail = req.body.mail;
                var password = hash;
                console.log('password', password);  
                var name = req.body.name;                        
                var birthDate = req.body.birthDate;
                var joined = new Date();
                var params = [mail, password, name, birthDate, joined];
                var sql = 'INSERT INTO users (mail, password, name, birthDate, joined) VALUES (?, ?, ?, ?, ?)';
                models.users.post(sql, params, function (err, row) {
                    console.log('params', params)            
                  if (err) {
                    throw err;
                  } else {
                      res.jsonp({success : true})
                  }
                 })  
            })
        }
    })
}

exports.loginUser = function(req, res){
    console.log(req.body);
    
}