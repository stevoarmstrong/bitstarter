var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buff = fs.readFileSync('index.html','urf8');
    var string = buff.toString();
    response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});