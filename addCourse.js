import "db.js"
function callSqlInsert(data)
{
    alert("called");
    //assuming data is done
    var dummyData = ['Course title', '30/07/19','Belfast','This is a course test', 'Owner','Software Engineers',10];
    var tableName = "Course";
    var queryName = "INSERT INTO " + tableName + "(Title, Date, Location, Description, Owner, TargetAudience) \nVALUES(";

    console.log(queryName);
    //executeQuery(query);
}