var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buff = new Buffer();
    buff = fs.readFileSync("index.html");
    var string = buff.toString();
    response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});