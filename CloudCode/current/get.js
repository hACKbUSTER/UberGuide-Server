module.exports = function(request, response) {
	var query = new AV.Query('Place');
	query.addAscending('order');

	function getMessage(type, data) {
		return {
			type : type,
			data : data
		};
	}

	function getMessages() {
		return library.stdReturn(Array.prototype.slice.call(arguments));
	}

	query.find({
		success : function(result) {
			var location = result[request.params.index];
			var messages = [];

			if(request.params.index == 0) {
				messages = [getMessage('message', location._serverData.summary),
					getMessage('message', '我们距离目的地大约 2.48 公里'),
					getMessage('message', '大概需要花时 10 分钟')];
			} else if(request.params.index == 1) {
				messages = [getMessage('location', location)];
			} else if(request.params.index == 2) {
				messages = [getMessage('location', location)];				
			} else if(request.params.index == 3) {
				messages = [
					getMessage('message', '我们即将要抵达目的地 “' + location._serverData.zhName + '”'),
					getMessage('location', location)
				];
			}

			response.success(getMessages.apply(null, messages));
		}
	});
};