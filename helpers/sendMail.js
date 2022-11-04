const outlook = require("nodejs-nodemailer-outlook");
const emailLogger = require("./emailLogger");
const birthdayMessages = require("./birthdayMessages");
const birthdayMessageGenerator = require("./birthdayMessageGenerator");

const sendMail = (config) => {
  const randomIndexGenerator = () =>
    Math.floor(Math.random() * birthdayMessages.length);

  const getRandomBirthdayMessage = () => {
    const randomIndex = randomIndexGenerator();
    return birthdayMessages[randomIndex];
  };

  const birthdayMessage = getRandomBirthdayMessage();

  const htmlContent = birthdayMessageGenerator(config.Name, birthdayMessage);
  
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
    onSuccess: (successData) =>
      emailLogger("success", JSON.stringify(successData)),
  });
};

module.exports = sendMail;
