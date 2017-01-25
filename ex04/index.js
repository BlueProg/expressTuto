var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var stylus = require('stylus');
var path = require('path');

//app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.use(stylus.middleware(
	path.join(__dirname, 'public')
));


//app.listen(process.argv[2]);
app.listen(8000);