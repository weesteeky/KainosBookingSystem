var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'empuser2',
    password: 'empPwd!',
    database: 'BookingSystem'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});