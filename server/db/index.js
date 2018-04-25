var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('connected');
});

module.exports = dbConnection;