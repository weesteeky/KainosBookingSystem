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

function query(sql, args){
    return new Promise( ( resolve, reject ) => {
        con.query( sql, args, ( err, rows ) => {
            if ( err )
                return reject( err );
            resolve( rows );
        } );
    } );
}

query( 'SELECT * FROM Course' ).then( rows => {
    console.log(rows)
} );
