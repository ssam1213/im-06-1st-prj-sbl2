var db = require('../db');

module.exports = {
    mid: function (queryStr, cb) {
        db.query(queryStr, function (err, rows) {
            console.log()
            cb(err, rows);
        })
    },
    left: function (queryStr, cb) {
        db.query(queryStr, function (err, rows) {
            console.log()
            cb(err, rows);
        })
    },
    right: function (queryStr, cb) {
        db.query(queryStr, function (err, rows) {
            console.log()
            cb(err, rows);
        })
    }
}