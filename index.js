const mailer = require("./helpers/sendMail");
const alumniData = require("./resources/CSE_Alumni.json");

require("dotenv").config();

// console.log(alumniData)
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

// console.log(alumniWithBirthdayToday);

mailer({
  Salutation: "",
  Name: "SUDARSHAN RAI",
  Gender: "M",
  DateOfBirth: "Wed Nov 04 1998 23:59:50 GMT+0530 (India Standard Time)",
  BTech: "B.Tech. 2021, CSE",
  MTech: "",
  EmailId: "sudarshan.r@smit.smu.edu.in",
});

// for (let index = 0; index < alumniWithBirthdayToday.length; index++) {
//   setTimeout(() => {
//     mailer({...alumniWithBirthdayToday[index]})
//   }, 2100 * (index + 1));
// }

// const task = cron.schedule("*/5 * * * * *", () => {
// });

// task.start();
