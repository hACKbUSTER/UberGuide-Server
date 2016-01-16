module.exports = function(request, response) {
	var query = new AV.Query('Tag');

	query.find({
		success : function(results) {
			response.success(library.stdReturn(results));
		},
		error : function() {
			response.error('find failed');
		}
	});
};