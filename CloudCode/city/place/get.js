module.exports = function(request, response) {
	var query = new AV.Query('Place');
	query.equalTo('zhName', request.params.location || '天安门');

	query.find({
		success : function(results) {
			response.success(library.stdReturn(results));
		},
		error : function() {
			response.error('find failed');
		}
	});
};