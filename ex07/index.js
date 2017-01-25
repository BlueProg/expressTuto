var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');

//app.use(bodyparser.urlencoded({extended: false}));
app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], (err, data) => {
		if (err) throw err;
		var jsonData = JSON.parse(data);
		res.send(jsonData);
	})
})

app.listen(process.argv[2]);
//app.listen(8000);