const outlook = require("nodejs-nodemailer-outlook");

const htmlContent = ``;

const sendMail = (config) => {
    outlook.sendEmail({
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        from: process.env.EMAIL_USER,
        to: config.emailTo,
        subject: config.emailSubject,
        html: htmlContent,
        text: 'Happy Birthday',
        replyTo: 'noreply@mail.com',
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    }
    
    
    );
}

module.exports = sendMail;