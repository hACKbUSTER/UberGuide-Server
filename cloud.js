var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */

require("./ready.js");



var libs = require("./read-lib.js")(__dirname + '/CloudCode');
function loadCloudCode(targetLib,stack){
    for(var i in targetLib){
        if(typeof targetLib[i] == "function"){
            var name = "";
            for(var n = 0;n < stack.length;n ++){
                name += stack[n] + "::";
            }
            name += i;
            console.log(name);
            AV.Cloud.define(name, targetLib[i]);
        }else{
            loadCloudCode(targetLib[i],stack.concat([i]));
        }
    }
}
loadCloudCode(libs,[]);

module.exports = AV.Cloud;
