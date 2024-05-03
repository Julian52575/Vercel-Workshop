require('dotenv').config();
 
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.body.login === process.env.login && req.body.password === process.env.password) {
        res.status(200).json({ message: 'success' });
    } else {    
        res.status(401).json({ message: 'Unauthorized' });  
    }
}
