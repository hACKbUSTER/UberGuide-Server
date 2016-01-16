module.exports = function(client_id){
    console.log("[getAccessToken]");
    var query = new AV.Query(ACL.Users);
    query.equalTo("client_id",client_id);
    return query.first().catch(function(e){
        console.log(e);
    });
};
