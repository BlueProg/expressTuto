var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});


//app.listen(process.argv[2]);
app.listen(8000);