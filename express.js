const Database = require('./db.js')
const cors = require('cors')
const express = require('express');

const app = express();
const PORT = 8000
var db = new Database();

function addcourse(body) {  
    data =[];

    var tableName = 'Course';
    var queryName = 'INSERT INTO ' + tableName + '(Title, Date, Location, Description, Owner, TargetAudience) \nVALUES(' + '"';

    queryName = queryName + + '"'+ data[0]+'"' + ', ';
    queryName = queryName +'"'+ data[1]+'"' + ', ';
    queryName = queryName +'"'+ data[2] +'"'+ ', ';
    queryName = queryName +'"'+ data[3]+'"' + ', ';
    queryName = queryName +'"'+ data[4] +'"'+ ', ';
    queryName = queryName +'"'+ data[5]+'"';
    //queryName = queryName + dummyData[6] + ');';
    queryName = queryName + ');';
    console.log(queryName);
    db.query(queryName,'');
}

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/addcourse', function(request, response){
    console.log(request.body);
    addcourse(request.body)
});

app.get('/courses', cors(), function(request, response){
    db.query("SELECT * FROM Course").then(rows => {
        response.send(rows)
    })
});

app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
});
