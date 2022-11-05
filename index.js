const mailer = require("./helpers/sendMail");
const alumniData = require("./resources/CSE_Alumni.json");

const cron = require("node-cron");

require("dotenv").config();

cron.schedule("0 4 * * *", () => {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const alumniWithBirthdayToday = alumniData.filter((alumni) => {
  	const alumniBirthday = new Date(alumni.DateOfBirth);
  	const alumniMonth = alumniBirthday.getMonth() + 1;
  	const alumniDay = alumniBirthday.getDate();
  		if (month === alumniMonth && day === alumniDay) {
   			return true;
  		} else return false;
	});

	for (let index = 0; index < alumniWithBirthdayToday.length; index++) {
  		setTimeout(() => {
    			mailer({...alumniWithBirthdayToday[index]})
  	}, 2100 * (index + 1));
	}

});

