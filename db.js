var mysql = require('mysql');



class Database {
    constructor( config ) {
        this.con = mysql.createConnection({
            host: 'localhost',
            user: 'empuser2',
            password: 'empPwd!',
            database: 'BookingSystem'
        });

        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    query(sql, args){
        return new Promise( ( resolve, reject ) => {
            this.con.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
}


var db = new Database();

/*db.query(' INSERT INTO Course(Title,Date,Location,Description,Owner) VALUES("test","2019-01-01","abc","abc","abc")').then(rows => {
    console.log(rows)
})*/

db.query( 'SELECT * FROM Course' ).then( rows => {
    console.log(rows)
    for(var i = 0; i < rows.length; i++){
        console.log(rows[i].Title)
    }
} );

module.exports = Database;
