const router = require('express').Router();
const request = require('request');

router.post('/webhook', async (req, res) => {
	console.log(req);
});

module.exports = router;
