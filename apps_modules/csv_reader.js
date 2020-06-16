const fs = require('fs');
const path = require('path')
let j = 0;
const data_reader = function() {
    let data_rtn = [];
    let header_data = [];
    let raw = fs.readFileSync(path.resolve(__dirname, './..', 'data_tester.csv'),'utf-8');
    let data_raw = raw.split(/\r?\n/)
    let sum_header = data_raw[data_raw.length-3]
    let sum_data = data_raw[data_raw.length-2]
    header_data = data_raw[0];
    for (let index = 1; index < 11; index++) {
        //console.log(data_raw[index])
        data_rtn.push(data_raw[index])
    }
    return [header_data,data_rtn,sum_header,sum_data];
}
module.exports = data_reader