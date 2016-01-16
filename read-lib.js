var fs = require('fs');

function readDir(dir){
    "use strict";
    var all = {};
    var files = fs.readdirSync(dir);
    for(var i = 0;i < files.length;i ++){
        let filePath = dir + "/" + files[i];
        if(fs.statSync(filePath).isDirectory()){
            all[files[i]] = readDir(filePath);
        }else{
            if(/.js$/.test(filePath)){
                all[files[i].split(".js")[0]] = require(filePath);
            }
        }
    }
    return all;
}

module.exports = readDir;

