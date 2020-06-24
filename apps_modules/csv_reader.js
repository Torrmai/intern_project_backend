const fs = require('fs');
const path = require('path')
let j = 0;
const data_reader = function(data_path,file_name,numdata) {
    try {
        let data_rtn = [];
        let header_data = [];
        let raw = fs.readFileSync(path.resolve(__dirname, data_path, file_name),'utf-8');
        let data_raw = raw.split(/\r?\n/)
        let sum_header = data_raw[data_raw.length-3]
        let sum_data = data_raw[data_raw.length-2]
        header_data = data_raw[0];
        for (let index = 1; index < numdata + 1; index++) {
            data_rtn.push(data_raw[index])
        }
        let err_st = 0
        return [err_st,header_data,data_rtn,sum_header,sum_data];
    } catch (error) {
        let err_st = 1
        return [err_st,error]
    }
}
module.exports = data_reader