const cron = require("node-cron");
const parser = require("simple-excel-to-json");
const mailer = require("./helpers/sendMail");
const fs = require("fs");


require("dotenv").config();
const alumniData = [
    ...parser.parseXls2Json("./resources/CSE_Alumni_Data.xlsx")[0],
];
fs.writeFileSync("./resources/CSE_Alumni.json", JSON.stringify(alumniData));

// const task = cron.schedule("*/5 * * * * *", () => {
//   const date = new Date();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const alumniWithBirthdayToday = alumniData.filter((alumni) => {
//     const alumniBirthday = new Date(alumni.DateOfBirth);
//     const alumniMonth = alumniBirthday.getMonth() + 1;
//     const alumniDay = alumniBirthday.getDate();
//     if (alumni.Name === "DEVYADUTI  ROY") {
//       return true;
//     } else return false;
//   });
//   console.log(alumniWithBirthdayToday);
// });

// task.start();
