const fs = require("fs");

const emailLogger = (typeOfLog, logData) => {
  if (typeOfLog === "error") {
    fs.appendFileSync("./Log/ErrorLog.txt", logData + "\n");
  } else if (typeOfLog === "success") {
    fs.appendFileSync("./Log/SuccessLog.txt", logData + "\n");
  }
};

module.exports = emailLogger;
