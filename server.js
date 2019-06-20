var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
	console.log('get');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});