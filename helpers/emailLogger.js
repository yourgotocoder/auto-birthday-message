const fs = require("fs");

const emailLogger = (typeOfLog, logData) => {
  if (typeOfLog === "error") {
    fs.appendFileSync("./log/ErrorLog.txt", new Date() + ": " + logData + "\n");
  } else if (typeOfLog === "success") {
    fs.appendFileSync("./log/SuccessLog.txt", new Date() + ": " + logData + "\n");
  }
};

module.exports = emailLogger;
