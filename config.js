const dotenv = require("dotenv-flow");
dotenv.config();
module.exports = {
	port: process.env.PORT || 3001,
	origin: process.env.ORIGIN,
};
