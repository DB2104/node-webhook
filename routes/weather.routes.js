const router = require('express').Router();
const request = require('request');
require('dotenv').config();
const API_KEY = process.env.API_KEY;
router.post('/webhook', (req, res) => {
	console.log(req);
	var queryText = req.body.queryResult.queryText;
	console.log(queryText);
	var city = req.body.queryResult.parameters['geo-city'];
	//console.log(queryText);

	if (city) {
		var options = {
			method: 'GET',
			uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
		};
		request(options, (error, response, body) => {
			if (error) {
				return res.json({
					speech: `Unable to fetch weather for city - ${city}`,
					displayText: `Unable to fetch weather for city - ${city}`
				});
			} else {
				console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
				console.log('body:', body);
				var r = JSON.parse(body);
				return res.json({
					speech: `Description : ${r.weather[0].description}`,
					displayText: `Description : ${r.description}`
				});
			}
		});
	} else {
		return res.json({
			speech: `Unable to fetch weather for city - ${city}`,
			displayText: `Unable to fetch weather for city - ${city}`
		});
	}
});

module.exports = router;
