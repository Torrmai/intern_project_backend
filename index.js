var express = require('express');
var app = express();

app.use('/api',require('./apps_modules/routes'))
app.use(function (req,res,next) {
    res.status(404);
    res.send({err:"Api path worng"})
})
app.listen(8080,function(){
    console.log("Listening to port 8080.........");
})