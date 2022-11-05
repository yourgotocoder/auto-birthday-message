const cron = require("node-cron");
cron.schedule("*/2 * * * * *", () => {
	console.log("Running a task every two second");
})
