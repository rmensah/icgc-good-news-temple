var express = require('express');
var app = express();
var path = require('path');
// var logger = require('morgan');

// app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));

app.get("*", function(req,res){
	res.sendFile(process.cwd() + "/public/views/index.html")
});

var PORT = process.env.PORT || 3080;
app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});