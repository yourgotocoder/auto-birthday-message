const outlook = require("nodejs-nodemailer-outlook");
const emailLogger = require("./emailLogger");
const numberToWordsMap = require("./numberToWordsMap");
const birthdayMessages = require("./birthdayMessages")
const birthdayMessageGenerator = require("./birthdayMessageGenerator");

const sendMail = (config) => {
  console.log(config);
  const currentAge =
    new Date().getFullYear() - new Date(config.DateOfBirth).getFullYear();
  const htmlContent = ``;
  console.log(
    `Happy ${currentAge}${numberToWordsMap[currentAge] || "th"} Birthday`
  );
  //   outlook.sendEmail({
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASS,
  //     },
  //     from: process.env.EMAIL_USER,
  //     to: config.EmailId,
  //     subject: `Happy ${currentAge}${numberToWordsMap[currentAge] || 'th'}Birthday`,
  //     html: htmlContent,
  //     text: "Happy Birthday",
  //     replyTo: "noreply@mail.com",
  //     onError: (e) => emailLogger("error", e),
  //     onSuccess: (successData) => emailLogger("success", successData),
  //   });
};

module.exports = sendMail;
