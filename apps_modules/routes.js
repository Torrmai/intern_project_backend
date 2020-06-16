const express = require("express");
const routes = express.Router();
const data_reader = require("./csv_reader");
let ts = Date.now();
let date_obj = new Date(ts);
let date = date_obj.getDate();
let month = date_obj.getMonth() + 1;
let year = date_obj.getFullYear();
let hour = date_obj.getHours();
let min = date_obj.getMinutes();
routes.get('/',function(req,res){
    res.send({type:'GET',msg:`${year}/${month}/${date}/${hour}/${min}.csv`})
})
routes.get('/csv_test',function(req,res){
    dt = data_reader();
    //console.log(data_reader());
    res.send({type:'GET',summary_hdr:`${dt[2]}`,summary_data:`${dt[3]}`})    
})
routes.get('*',function (req,res) {
    res.send({type:'GET',msg:"Not found anythimg...."})    
})

module.exports = routes;