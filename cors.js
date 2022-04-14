const { origin } = require("./config");

const cors = require("cors");

const options = {
	origin: (o, callback) => {
		if (o === origin) {
			return callback(null, true);
		}
		return callback(null, false);
	},
	crendentials: false,
};

module.exports = (server) => {
	server.use(cors(options));
};
