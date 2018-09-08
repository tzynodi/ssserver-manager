var express = require('express');
var log = require('../log/log.js');
var http = require('http');
var https = require('https');
var service = require('../service/service.js');


var HTTP_PORT = 8080;


var app = express();


startServer();

app.get('/test', function (req, res) {
    log.logDebug('/test', 'request recv, test success!');
    res.send('test success!');
});

app.post('/registerUser', function (req, res) {

});

function startServer() {
    http.createServer(app).listen(HTTP_PORT);
}