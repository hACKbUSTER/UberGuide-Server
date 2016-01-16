module.exports = function(req,res){
    if(library.inputChecker(req.params,["request_id"])){
        return res.error(
            library.stdIntError("require params [request_id]")
        );
    }
    var request_id = req.params.request_id;

    library.getAccessToken(config.client_id).then(function(user){
        return _Get(
            CONST.UBER_API
                      + "/v1/requests/"
                      + request_id
                      + "/map",{},{
                          "Authorization":" Bearer "
                              + user.get('access_token')
                      });
    }).then(function(body){
        return res.success(library.stdReturn(JSON.parse(body.body)));
    }).catch(function(e){
        return res.error(library.stdIntError(e));
    });
};
