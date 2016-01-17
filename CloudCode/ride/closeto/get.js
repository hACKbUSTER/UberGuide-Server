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
			"name": result.name,
			"summary": result.summmary,
			"tags": result.tag
		}		
	};
}

var results = [];

module.exports = function(request, response) {
	var model = new AV.Query('Spot');

	model.find({
		success : function(records) {
			var formatter = records.reduce(function(formatter, record) {
				return formatter.bind(null, formatOneFeature(record._serverData));
			}, formatGeoJson);

			return response.success(library.stdReturn(formatter()));
		}
	});
};