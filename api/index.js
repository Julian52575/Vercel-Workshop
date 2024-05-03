require('dotenv').config();

module.exports = async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (req.body.login === process.env.login) {
		res.status(200).json({ message:"succ" }) );
	} else {
		res.status(400).json({ message:"failure" }) );
	}
}
