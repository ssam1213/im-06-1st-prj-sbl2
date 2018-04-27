var db = require('../db');
//model
module.exports = {
    users: {      
        get: function (queryStr, mail, cb) {
            db.query(queryStr, mail, function (err, rows) {
              cb(err, rows);
            });
          },
        post: function(sql, params, cb) {
            db.query(sql, params, function (err, row) {
                console.log('params', params);  
                cb(err, row);
            })
        }
    },

    // logs: {
        
    //     get: function() {

    //     },

    //     post: function() {

    //     }

    // },

    // sessions: {
        
    //     get: function() {

    //     },

    //     post: function() {

    //     }

    // },

    // pageviews: {
        
    //     get: function() {

    //     },

    //     post: function() {

    //     }

    // },

    // counts: {
        
    //     get: function() {

    //     },

    //     post: function() {

    //     }

    // }
};