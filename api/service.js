var Path = require('path');
var Query = require(Path.join(__dirname, 'query.js'));

var service = {
    createClient: function (postgres, payload, callback) {
        Query.createClient(postgres, payload, function (err, result) {
            if (err) {
                return callback(err);
            }
            callback(undefined, result);
        });
    },

    // This gets called in api.js by the Service module
    getAllCaseManagers: function (postgres, payload, callback) {
        Query.getAllCaseManagers(postgres, payload, function (err, result) {
            if (err) {
                return callback(err);
            }
            return callback(undefined, result);
        });
    },

    getClient: function (postgres, payload, callback) {
        Query.getClient(postgres, payload, function (err, result) {
            if (err) {
                return callback(err);
            }
            return callback(undefined, result);
        });
    },

    getClients: function (postgres, callback) {
        Query.getClients(postgres, function (err, result) {
            if (err) {
                return callback(err);
            }

            var arr = [];
            for (var i = 0; i < result.rows.length; i++) {
                var local = result.rows[i];
                arr.push({
                    id: local.id,
                    firstName: local.first_name,
                    lastName: local.last_name
                });
            }
            return callback(undefined, arr);
        });
    }
};

module.exports = service;
