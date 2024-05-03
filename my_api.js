require('dotenv').config();


#req == json. req.body.login
module.exports = async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setStatus(400);

	if (req.body.login == process.env(login))
		res.setStatus(200);
}
