const mailer = require("./helpers/sendMail");
require("dotenv").config();

mailer({ emailTo: "bal@", emailSubject: "bla"})