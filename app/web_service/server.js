var express = require('express');
var bodyParser = require("body-parser");
var functions = require('../web_service/functions');
var app = express();

//  Middle-ware for handling post requests 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.configure(function(){
//   app.use(express.bodyParser());
// });

// START *** Settings headers to allow cross domain requests
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// END *****


// START *** Express deals with urls
app.get('/getData', function (request, response) {
    functions.getData(response);
});

app.post('/saveData', function (request, response) {
    console.log('1');
    //functions.saveData(request);
    console.log('request.body.title');
    console.log(request.body.title);
    response.end("yes");
});

app.get('/test', function (request, response) {
    response.send('Testing');
});
// END *****


// START *** Use Express to listen to port
app.listen(4000, function () {
    console.log('Example app listening!');
});
// END *****
