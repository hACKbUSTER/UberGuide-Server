module.exports = function(req,res){
    library.getAccessToken(config.client_id).then(function(user){
        return _Get(CONST.UBER_API +  "/v1/requests/current",{},{
            "Authorization":" Bearer " + user.get('access_token')
        });
    }).then(function(body){
        var location = JSON.parse(body.body).location;
        return library.closeTo(location.latitude,location.longitude);
    }).then(function(body){
        return res.success(library.stdReturn(body));
    }).catch(function(e){
        return res.error(library.stdIntError(e));
    });
};
