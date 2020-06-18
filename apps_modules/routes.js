const express = require("express");
const routes = express.Router();
const data_reader = require("./csv_reader");
const bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({extended:true}))


routes.get('/serv_time',function(req,res){
    let ts = Date.now();
    let date_obj = new Date(ts);
    let date = date_obj.getDate();
    let month = date_obj.getMonth() + 1;
    let year = date_obj.getFullYear();
    let hour = date_obj.getHours();
    let min = date_obj.getMinutes();
    res.send({type:'GET',servdate:`${year}/${month}/${date}`,servtime:`${hour}:${min}`})
})
routes.post('/csv_test',function(req,res,next){
    nb_dis = parseInt(req.body.nb_display)
    console.log(`nb display: ${nb_dis}`)
    dt = data_reader('./..','data_tester.csv',nb_dis);
    //console.log(data_reader());
    res.send({type:'GET',summary_hdr:`${dt[2]}`,summary_data:`${dt[3]}`,data:`${dt[1]}`})    
})
routes.get('*',function (req,res) {
    res.send({type:'GET',msg:"Not found api"})    
})

module.exports = routes;