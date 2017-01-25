var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var stylus = require('stylus');
var path = require('path');
var sha1 = require('crypto');

//app.use(bodyparser.urlencoded({extended: false}));
app.put('/message/:id', function(req, res) {
	console.log(req.params.id);
	res.send(sha1.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
})

app.listen(process.argv[2]);
//app.listen(8000);