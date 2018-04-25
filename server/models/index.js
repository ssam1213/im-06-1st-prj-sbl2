var db = require('../db');

module.exports = {

    users: {
        
        get: function(callback) {
            var sql = '';
            db.query(sql, function(err, data) {
                if (err) {
                    throw err;
                } else {
                    console.log('data: ', data);
                    if (callback) {
                        callback(data);
                    }
                }
            })
        },

        post: function(data) {
            var sql = '';
            db.query(sql, function(err, result) {
                if (err) {
                    throw err;
                } else {
                    consoel.log('result: ', result);
                }
            })
        }

    },

    logs: {
        
        get: function() {

        },

        post: function() {

        }

    },

    sessions: {
        
        get: function() {

        },

        post: function() {

        }

    },

    pageviews: {
        
        get: function() {

        },

        post: function() {

        }

    },

    counts: {
        
        get: function() {

        },

        post: function() {

        }

    }
};