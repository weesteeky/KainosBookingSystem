function getData(target) {
    console.log("localhost request "+target)
    return new Promise( ( resolve, reject ) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText)
            }
        };
        xhttp.open("GET", "http://localhost:8000/"+target, true);
        xhttp.send();
    })
}