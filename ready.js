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

var request = require('request');

var get = function(baseUrl,query,header){
    if(!header){
        header = {};
    }
    return new Promise(function(resolve,reject){
        request
    })
}



global.config = config;
global.CONST = CONST;
