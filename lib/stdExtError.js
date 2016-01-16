module.exports = function(message) {
	return {
		data : {},
		status : '2',
		message : typeof message === 'object' ? message.toString() : message
	};
};