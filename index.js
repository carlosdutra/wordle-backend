const { port } = require("./config");
const express = require("express");
const useCors = require("./cors");

const routes = require("./routes");

const app = express();

// Use JSON
app.use(express.json());

// CORS
useCors(app);

// Routes
app.use(routes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
