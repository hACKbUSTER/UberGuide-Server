module.exports = function(data, message) {
	return {
		data : data,
		status : '0',
		message : message || 'ok'
	};
};