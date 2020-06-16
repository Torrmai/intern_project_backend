var express = require('express');
var app = express();

app.use('/',require('./apps_modules/routes'))

app.listen(8080,function(){
    console.log("Listening to port 8080.........");
})