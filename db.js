var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'empuser2',
    password: 'empPwd!',
    database: 'BookingSystem'
});

function executeQuery(sql){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(sql+" log successful")
          console.log(result) 
        });
    });
}

results = executeQuery("SELECT * FROM Course")
/*for(var i = 0; i < results.length; i++){
    console.log(results[i])
}*/
