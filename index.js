var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())
app.use('/api',require('./apps_modules/routes'))
app.use(function (req,res,next) {
    res.status(404);
    res.json({err:"Api path worng"})
})
app.listen(8080,function(){
    console.log("Listening to port 8080.........");
})