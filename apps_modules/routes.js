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
    res.send({type:'GET',
            serv_year:`${year}`,
            serv_month:`${month}`,
            serv_day:`${date}`,
            serv_hour:`${hour}`,
            serv_min:`${min}`
        })
})
routes.post('/csv_test',function(req,res,next){
    nb_dis = parseInt(req.body.nb_display)
    path_file = req.body.path
    file_name = req.body.file
    file_path = `../../data/${path_file}`
    console.log(`path: ${file_path}`)
    console.log(`nb display: ${nb_dis}`)
    dt = data_reader(file_path,file_name,nb_dis);
    //console.log(data_reader());
    res.send({type:'POST',summary_hdr:`${dt[2]}`,summary_data:`${dt[3]}`,data:`${dt[1]}`})    
})
routes.get('*',function (req,res) {
    res.send({type:'GET',msg:"Not found api"})    
})

module.exports = routes;