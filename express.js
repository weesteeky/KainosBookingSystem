const Database = require('./db.js')
const express = require('express');

const app = express();
const PORT = 8000

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, response){
    console.log(request.body);
});

app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
  });