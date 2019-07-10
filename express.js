const Database = require('./db.js')
const cors = require('cors')
const express = require('express');
var path = require('path')

const app = express();
const PORT = 8000

app.use(express.static(path.join(__dirname, 'public')));
	
var db = new Database();

//convert body values into single string
function getValues(array){
	var values = "";
	for(var i = 0; i < array.length; i++){
		values += "'"+array[i]+"',"
	}
	values = values.substring(0, values.length-1)
	return values
}

//adding course per User story 4
function addCourse(body){
	//Create new Query and format it to string

	//remove OWNER FIELD 
    var query = 'INSERT INTO Course(Title, Date, Location, Description, Owner, TargetAudience,MaxAttendees) VALUES(';
	var array = [body.Title,body.Date,body.Location,body.Description,"Kainos",body.Information,body.Capacity]
	var values = getValues(array)
	query += values + ");"
	console.log("Running query: \n" + query);


	db.query(query).then(rows => {
		console.log("RECORD ADDED")
	})

	return true;
}

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
	
//Parse JSON bodies (as sent by API clients)
app.use(express.json());
	
//Access the parse results as request.body
app.post('/addcourse', cors(), function(request, response){
	console.log(request.body);
	var ans = addCourse(request.body);

	if(ans){
		response.send("<html><meta http-equiv=\"refresh\" content=\"1; url=http://127.0.0.1:8000/addcoursepage\"></html>");
	}
	else{
		response.send("Failed to add new Course");
	}
});

//Access the parse results as request.body
app.post('/bookcourse', cors(), function(request, response){
	console.log(request.body);
	
});

app.get('/courses', cors(), function(request, response){
    db.query("SELECT * FROM Course").then(rows => {
        response.send(rows)
    })
});

console.log(__dirname)

app.get('/addcoursepage', function(req, res){
    res.sendFile('addCourse.html', { root: __dirname} );
});
	
app.listen(PORT,() => {
	console.log('Server is running on PORT:',PORT);
});