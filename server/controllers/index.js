// var models = require('../models');
// var util = require('../lib/utility');
// //constroller
// var visits = 0;
// module.exports = {
//     signupUsers: {
//         get: function (req, res) {

            // models.users.get(function (err, rows) {
            //     console.log('rows', rows);
            //     if (!err) {
            //       res.json(rows);
            //     }
            // })
            // res.cookie('hasVisited', visits++, {
            //     maxAge: 1*1*1000,
            //     httpOnly: true,
            //     path:'/'
            // });

            // console.log('cookies', req.cookies);
            // res.send(req.cookies);
        // },

//         post: function (req, res) {
//             //세션및 쿠키
//             mail = req.body.mail
//             var queryStr = 'SELECT * FROM users where mail=?';
//             models.users.get(queryStr, mail, function (err, rows) {
//                 if (rows.length !== 0) {            
//                     console.log('alreay taken');
//                     res.jsonp({success : false})
//                 } else {
//                     util.hashPassword(req.body.password).then(function(hash){
//                         var mail = req.body.mail;
//                         var password = hash;
//                         console.log('password', password);  
//                         var name = req.body.name;                        
//                         var birthDate = req.body.birthDate;
//                         var joined = new Date();
//                         var params = [mail, password, name, birthDate, joined];
//                         var sql = 'INSERT INTO users (mail, password, name, birthDate, joined) VALUES (?, ?, ?, ?, ?)';
//                         models.users.post(sql, params, function (err, row) {
//                           if (err) {
//                             throw err;
//                           } else {
//                               res.end();
//                           }
//                          })  
//                     })
//                 }
//             })
//         }
//     }
// };