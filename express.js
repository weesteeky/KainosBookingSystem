const Database = require('./db.js')
const cors = require('cors')
const express = require('express');

const app = express();
const PORT = 8000

var db = new Database();

function addcourse(body){
    var sql = "INSERT INTO ..."
    db.query(sql).then(rows => {
        console.log(rows)
    })
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