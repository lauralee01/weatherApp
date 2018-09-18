/*const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});

// 0dbd91a0e13cc6635ac1a4bbb0b7f040



*/

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/0dbd91a0e13cc6635ac1a4bbb0b7f040/6.5243793,3.3792057',
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(`Temperature: ${body.currently.temperature}`);
	} else {
		console.log('Unable to fetch weather');
	}
	
});