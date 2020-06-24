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
    res.json({
            serv_year:`${year}`,
            serv_month:`${month}`,
            serv_day:`${date}`,
            serv_hour:`${hour}`,
            serv_min:`${min}`
        })
})
routes.get('/brief_stat',function(req,res){
    let curr = Date.now();
    let date_obj = new Date(curr);
    let file_path = `../../intern_project/data/${date_obj.getFullYear()}/${date_obj.getMonth()+1}/${date_obj.getDate()}/${date_obj.getHours()}`
    let file_name = `${date_obj.getMinutes() - 1}.csv`
    raw_dt = data_reader(file_path,file_name,10)
    if(raw_dt[0] == 0)
    {
        res.json({
            error_status:false,
            header1:raw_dt[1],
            data1:raw_dt[2],
            header_summ:raw_dt[3],
            summ_data:raw_dt[4]
        })
    }
    else{
        res.json({
            error_status:true,
            error_code:"data doesn't come yet"
        })
    }
})
routes.post('/csv_test',function(req,res,next){
    nb_dis = parseInt(req.body.nb_display)
    path_file = req.body.path
    file_name = req.body.file
    file_path = `../../intern_project/data/${path_file}`
    dt = data_reader(file_path,file_name,nb_dis);
    if(dt[0] == 0){
        res.json({error_status:false,
            header_data:dt[1],
            data_raw:dt[2]
        })    
    }
    else{
        res.json({error_status:true,error_code:"Invalid input path"})
    }
})
routes.get('*',function (req,res) {
    res.json({msg:"Not found api"})    
})

module.exports = routes;