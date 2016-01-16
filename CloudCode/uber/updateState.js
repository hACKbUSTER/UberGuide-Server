module.exports = function(req,res){
    var inputError = library.inputChecker(req.params,[request_id]);
    if(inputError){
        return res.error(
            library.stdIntError("require params ["+inputError+"]")
        );
    }
    var request_id = req.params.request_id;
    var state = req.params.state;

    
    return library.getAccessToken().then(function(user){
        return library.updateRequest(
            request_id,
            state,
            user.get('access_token')
        );
    }).then(function(body){
        return res.success(library.stdReturn(body));
    }).catch(function(e){
        return res.success(library.stdIntError(e));
    });
};
