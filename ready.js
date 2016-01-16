var request = require('request');

var config = {
    client_id:"O3a23ihYeCsHy0RR-gchaipSPwvzEAhi",
    app_id:"O3a23ihYeCsHy0RR-gchaipSPwvzEAhi",
    server_token:"j2J0qaIqlR79ZKcVCv_3QT1fBSHfss9HAKjNNNdy",
    app_key:"GSumF2ezFY1RL-6QlFiVfMxSbIw2LEDMa4loM_Ec"
};

var CONST = {
    UBER_API:"https://sandbox-api.uber.com.cn/",
    UBER_AUTH_SERVER:"https://login.uber.com.cn/oauth/v2/authorize"
};

var readLib = require('read-lib');
global.library = readLib(__dirname + "/lib");

var acl = readLib(__dirname + "/ACL");
var ACL = {};
for(var _i in acl){
    ACL[_i] = AV.Object.extend(_i,acl[_i]);
}
global.ACL = ACL;


var querystring = require('querystring');
global._Get = function(baseUrl,query,header){
    if(!header){
        header = {};
    }
    if(!/'\/$'/.test(baseUrl)){
        baseUrl += "/";
    }
    var url =
            baseUrl
            + "?"
            + querystring.stringify(query);
    console.log(url);
    return new Promise(function(resolve,reject){
        request.get(
            url
            ,function(e,r,body){
                if(e){
                    return reject(e);
                }else{
                    return resolve({
                        response:r,
                        body:body
                    });
                }
            });
    });
};

_Get("https://sandbox-api.uber.com.cn/v1/products?latitude=37.7759792&longitude=-122.41823",{
    response_type:"code",
    client_id:config.client_id
},{
    headers:{
        "Authorization":" Token " + config.server_token
    }
}).then(function(all){
    console.log(all.body);
    console.log("done");
}).catch(function(e){
    console.error(e);
});



global.config = config;
global.CONST = CONST;
