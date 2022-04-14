const express = require("express");
const router = new express.Router();
const data = require("../data/data.json");
var CronJob = require("cron").CronJob;

let index = 0;

var job = new CronJob(
	"0 0,6,12,18 * * *",
	function () {
		index = index + 1;
	},
	null,
	true,
	"America/Toronto"
);
job.start();

router.get("/word", async (req, res) => {
	try {
		const word = data[index].toUpperCase();
		res.send(word);
	} catch (err) {
		res.sendStatus(400).send(err);
	}
});

module.exports = router;
