const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var weatherRoutes = require('./routes/weather.routes.js');

app.use('/weather', weatherRoutes);

//start the server
app.listen(port, err => {
	if (err) throw err;
	console.log(`Server has started and is listening on port ${port}`);
});
