const Database = require('./db.js');

console.log("here")

function seeCourses(){
    console.log("get data")
    
    Database.query("SELECT * FROM Course").then(rows =>{
        for(var i = 0; i<rows.length; i++){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(rows[i].Title + " | " + rows[i].Location + " | " + rows[i].Date + " | " + rows[i].Description);
        
            node.appendChild(textnode);
            document.getElementById("courseList").appendChild(node);
        }
    })
} 