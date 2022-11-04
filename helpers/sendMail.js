const outlook = require("nodejs-nodemailer-outlook");
const emailLogger = require("./emailLogger");
const numberToWordsMap = require("./numberToWordsMap");
const birthdayMessages = require("./birthdayMessages");
const birthdayMessageGenerator = require("./birthdayMessageGenerator");

const sendMail = (config) => {
  console.log(config);

  const getRandomBirthdayMessage = () => {
    const randomIndex = birthdayMessages
  }

  const htmlContent = birthdayMessageGenerator(
    config.Name,
    birthdayMessages[Math.floor(Math.random * birthdayMessages.length)]
  );
    outlook.sendEmail({
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      from: process.env.EMAIL_USER,
      to: config.EmailId,
      subject: `Happy Birthday`,
      html: htmlContent,
      text: "Happy Birthday",
      replyTo: "noreply@mail.com",
      onError: (e) => emailLogger("error", e),
      onSuccess: (successData) => emailLogger("success", successData),
    });
};

module.exports = sendMail;
