module.exports = function(message) {
	return {
		data : {},
		status : '1',
		message : typeof message === 'object' ? message.toString() : message
	};
};