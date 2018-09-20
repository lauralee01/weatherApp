const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
	url: `https://api.darksky.net/forecast/0dbd91a0e13cc6635ac1a4bbb0b7f040/${lat},${lng}`,
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
	})
	} else {
		callback('Unable to fetch weather');
	}  
	 
});
};
module.exports.getWeather = getWeather;