module.exports = function(req,res){
    var access_token = req.params.access_token;
    if(!access_token){
        return res.error(library.stdIntError("require [access_token]"));
    }
    var query = new AV.Query(ACL.Users);
    query.equalTo('client_id',config.client_id);
    return query.first().then(function(user){
        if(!user){
            user = new ACL.Users();
            user.set('client_id',config.client_id);
        }
        user.set('access_token',access_token);
        return user.save();
    }).then(function(){
        return res.success(library.stdReturn());
    }).catch(function(e){
        if(e.code == 101){
            var user = new ACL.Users();
            user.set('client_id',config.client_id);
            user.set('access_token',access_token);

            return user.save().then(function(){
                return res.success(library.stdReturn());
            }).catch(function(e){
                return res.error(library.stdIntError(e));
            });
        }else{
            return res.error(library.stdIntError(e));
        }
    });
};
