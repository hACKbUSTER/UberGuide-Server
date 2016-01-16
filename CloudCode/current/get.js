module.exports = function(request, response) {
	var query = new AV.Query('Place');

	function getMessage(type, data) {
		return {
			type : type,
			data : data
		};
	}

	function getMessages() {
		return library.stdReturn(Array.prototype.slice.call(arguments));
	}

	if(request.params.index == 0) {
		query.equalTo('zhName', '天安门');

		query.find({
			success : function(result) {
				return response.success(getMessages(
					getMessage('message', result[0]._serverData.summary),
					getMessage('message', '我们距离目的地大约 2.48 公里'),
					getMessage('message', '大概需要花时 10 分钟')
				));
			},
			error : function() {
				response.error('find failed');
			}
		});
	} else if(request.params.index == 1) {
		query.equalTo('zhName', '复兴门');

		query.find({
			success : function(result) {
				return response.success(getMessages(
					getMessage('location', result[0])
				));
			}
		});
	} else if(request.params.index == 2) {
		query.equalTo('zhName', '西单');

		query.find({
			success : function(result) {
				return response.success(getMessages(
					getMessage('location', result[0])
				));
			}
		});
	} else if(request.params.index == 3) {
		query.equalTo('zhName', '天安门');

		query.find({
			success : function(result) {
				return response.success(getMessages(
					getMessage('message', '我们即将要抵达目的地 “' + result[0]._serverData.zhName + '”'),
					getMessage('location', result[0])
				));
			}
		});
	}
};