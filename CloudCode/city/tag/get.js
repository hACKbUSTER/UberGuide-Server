module.exports = function(request, response) {
	var query = new AV.Query(ACL.Tag);
	query.addAscending('order');
	query.find({
		success : function(results) {
			response.success(library.stdReturn(results));
		},
		error : function() {
			response.error('find failed');
		}
	});
};
