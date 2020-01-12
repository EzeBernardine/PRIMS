const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
	try {
		let tokens = null;
		if (req && req.cookies && req.cookies.token) {
			tokens = req.cookies.token;
			req.user = await jwt.verify(tokens, process.env.SECRETKEY);
		}
		if (req && req.headers[ 'token' ]) {
			console.log('eazi')
			tokens = req.headers[ 'token' ];
			req.user = await jwt.verify(tokens, process.env.SECRETKEY);
		}
		return tokens;
	}
	catch ( e ) {
		console.log(e)
		// if (e.message.includes('expired')) {
		// 	req.user = { error: "Login expired" }
		// }
	}
	finally {
		next()
	}
};