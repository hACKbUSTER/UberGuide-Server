function getDistanceBetweenPoints(latitudeA, longitudeA, latitudeB, longitudeB) {
	// generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (latitudeB - latitudeA) * Math.PI / 180;
    var dLon = (longitudeB - longitudeA) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(latitudeA * Math.PI / 180) * Math.cos(latitudeB * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    
    return d * 1000; // meters
}

function formatGeoJson() {
	return arguments.length ? {
		"type": "FeatureCollection",
		"features": Array.prototype.slice.call(arguments)
	} : false;
}

function formatOneFeature(result) {
	return {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [result.longitude, result.latitude]
		},
		"properties": {
			"name": result.zhName,
			"summary": result.summmary
		}		
	};
}

var results = [];

module.exports = function(latitude, longitude) {
	return new Promise(function(resolve) {
		if(!results.length) {
			var model = new AV.Query('Place');
			model.addAscending('order');
			model.find({
				success : function(records) {
					results = records;
					resolve();
				}
			});
		} else {
			resolve();
		}
	}).then(function() {
		var formatter = formatGeoJson;
		for(var i = 0, currentResult; i < results.length; i += 1) {
			currentResult = results[i]._serverData;
			if(Math.abs(getDistanceBetweenPoints(latitude, longitude, currentResult.latitude, currentResult.longitude)) < 1000) {
				formatter = formatGeoJson.bind(null, currentResult);
			}
		}

		return formatter();
	});
};