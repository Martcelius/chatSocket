var express = require('express');

//setup app
var app = express();

//setup static file or public file
app.use(express.static('public'));

module.exports = app;