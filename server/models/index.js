var db = require('../db');
//model
module.exports = {
    users: {
        get: function (queryStr, mail, cb) {
            db.query(queryStr, mail, function (err, rows) {
                cb(err, rows);
            });
        },
        post: function (sql, params, cb) {
            db.query(sql, params, function (err, row) {
                console.log('params', params);
                cb(err, row);
            })
        }
    },

    visitors: {
        get: function (queryStr, cb) {
            db.query(queryStr, function (err, rows) {
                cb(err, rows);
            });
        },
        post: function (sql, params, cb) {
            db.query(sql, params, function (err, row) {
                cb(err, row);
            })
        }

    }
};