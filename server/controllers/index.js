var models = require('../models');

module.exports = {
    users: {
        
        get: function(request, response) {
            models.users.get(function(data) {
                res.send(data);
            })
        },

        post: function(request, response) {
            models.users.post(req.body);
            res.send();
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