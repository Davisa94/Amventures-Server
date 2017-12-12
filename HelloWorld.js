var http = require('http');
var express = require('express')
var app = express()

http = require('http');
fs = require('fs');
server = http.createServer( function(req, res) {

    console.dir(req.param);
   var contentType = req.headers['content-type'];
   console.log("contentType" + contentType);
   console.log("Request" + req);
   console.log("before first if line 9");
    if (req.method == 'POST' && contentType == "application/json") {
        console.log("POST");
        var body = '';
        console.log("After first IF: \n" + data);
        req.on('data', function (data) {

            body += data;
            var user = JSON.parse(data);
            //TODO: write data to the user.json
            var fs = require('fs');
            var userName = user["name"];

            userName = userName.replace(" ", "_");
            var filepath = "/var/www/html/Amventures/JSON/" + userName + ".json";
            fs.open(filepath,'w', function(err, file) {
                              if (err) throw err;
                              console.log('Saved!');});
            fs.writeFile(filepath, data, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else if(req.method == 'POST'){
   
            console.log("Upload completed!");
       
   }
    else if (req.method == 'GET')
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('test.txt');
	html += "\nIf you are seeing this you should try accessing this site at the following link:" + '<a href="http://skycraftia.duckdns.org">http://skycraftia.duckdns.org<a/>'
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }
    else
    {
       console.log("No method found");
    }

});

port = 8080;
host = 'skycraftia.duckdns.org';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
