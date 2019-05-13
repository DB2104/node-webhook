const router = require('express').Router();
const request = require('request');
require('dotenv').config();
const API_KEY = process.env.API_KEY;
router.get('/webhook', (req, res) => {
	var queryText = req.body.queryResult.queryText;
	//var city = req.body.queryResult.parameters['geo-city'];
	console.log(queryText);
	var city = 'Mumbai';

	var options = {
		method: 'GET',
		uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
	};
	request(options, (error, response, body) => {
		if (error) res.status(400).json(error);
		else {
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			console.log('body:', body);
			res.json(body);
		}
	});
});

module.exports = router;
