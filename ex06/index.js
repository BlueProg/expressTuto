var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');

//app.use(bodyparser.urlencoded({extended: false}));
app.get('/search', function(req, res) {
	res.send(
		req.query
	);
})

//app.listen(process.argv[2]);
app.listen(8000);