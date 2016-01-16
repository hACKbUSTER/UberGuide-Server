var request = require('request');
module.exports = function(request_id,state,access_token){
    console.log("[updateRequest]");
    console.log(access_token);
    return new Promise(function(resolve,reject){
        return request({
            url:CONST.UBER_API +  "/v1/sandbox/requests/"+request_id,
            method: 'PUT',
            json:{
                status:state
            },
            headers:{
                "Content-Type":"application/json",
                "Authorization":" Bearer " + access_token
            }
        },function(e,r,body){
            if(e){
                console.error(e);
                return reject(e);
            }else{
                console.log("[updateRequest]",body);
                return resolve(body);
            }
        });
    });
};
