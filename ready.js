var request = require('request');



var config = {
    client_id:"4Pm0nE1Hmz9_cFKw1RhD4xMcW_nCYUK4",
    app_id:"JE2DrYT_92kBN8ySHav13qYEj57lO6Yx",
    server_token:"jL8RGdtvdFzvx4wXw-zkk6TmwIKNLVAQUJEjJI9W",
    app_key:"RG04UNNERL7rhtdjlOeV-Jo0qo2PDHrDwvxWw42M"
};

var CONST = {
    UBER_API:"https://sandbox-api.uber.com.cn",
    UBER_AUTH_SERVER:"https://login.uber.com.cn/oauth/v2/authorize"
};

var readLib = require('./read-lib.js');
global.library = readLib(__dirname + "/lib");
console.log(library);

var acl = readLib(__dirname + "/ACL");
console.log(acl);
var ACL = {};
for(var _i in acl){
    ACL[_i] = AV.Object.extend(_i,acl[_i]);
}
global.ACL = ACL;


var querystring = require('querystring');
global._Get = function(baseUrl,query,headers){
    var options = {};
    options.headers = {};
    
    if(!headers){
        headers = {};
    }
    
    for(var _i in headers){
        options.headers[_i] = headers[_i];
    }
    
    var url =
            baseUrl
            + "?"
            + querystring.stringify(query);

    options.url = url;
    return new Promise(function(resolve,reject){
        request(
            options
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

_Get("https://login.uber.com.cn/oauth/v2/authorize",{
    response_type:"code",
    scope:"request",
    client_id:config.client_id
},{
    "Authorization":" Token " + config.server_token
}).then(function(all){
    console.log(all.body);
    console.log("done");
}).catch(function(e){
    console.error(e);
});

global._Post = function(url,data,headers){
    var header = {};
    for(var i in headers){
        header[i] = headers[i];
    }
    console.log(url);
    return new Promise(function(resolve,reject){
        request.post({
            url:url,
            json:data,
            headers:header
        },function(err, httpResponse, body) {
            if (err) {
                return reject(err);
            }else{
                return resolve(body);
            }
        });
    });
};


global.config = config;
global.CONST = CONST;
