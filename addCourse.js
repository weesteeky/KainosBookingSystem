const Database = require('./db.js')

function callSqlInsert(data)
{
    //assuming data is done
    var dummyData = ['Course title', '30/07/19','Belfast','This is a course test', 'Owner','Software Engineers',10];
    var tableName = 'Course';
    var queryName = 'INSERT INTO ' + tableName + '(Title, Date, Location, Description, Owner, TargetAudience) \nVALUES(' + '"';

    queryName = queryName + + '"'+ dummyData[0]+'"' + ', ';
    queryName = queryName +'"'+ dummyData[1]+'"' + ', ';
    queryName = queryName +'"'+ dummyData[2] +'"'+ ', ';
    queryName = queryName +'"'+ dummyData[3]+'"' + ', ';
    queryName = queryName +'"'+ dummyData[4] +'"'+ ', ';
    queryName = queryName +'"'+ dummyData[5]+'"';
    //queryName = queryName + dummyData[6] + ');';
    queryName = queryName + ');';
    console.log(queryName);
    var db = new Database();
    db.query( queryName, '');
}

callSqlInsert();