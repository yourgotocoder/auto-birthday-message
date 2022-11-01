const parser = require("convert-excel-to-json");
const json2xls = require("json2xls");
const fs = require("fs");
const moment = require("moment");

const alumniData = [
  ...parser({
    sourceFile: "./resources/CSE_Alumni_List.xlsx",
    header: { rows: 1 },
  })["Members-6300-20-10-2022"],
];

const transformedAlumniData = alumniData
  .filter((alumni) => moment(alumni.D).isValid())
  .map((alumni) => {
    const degrees = alumni.E.split(";");
    const newDate = moment(alumni.D).add(1, "d").toDate();
    console.log(newDate, alumni.B);
    return {
      Salutation: alumni.A.trim(),
      Name: alumni.B.toUpperCase(),
      Gender: alumni.C,
      DateOfBirth: newDate,
      BTech: alumni.E.split(";")[0],
      ...(degrees[1] !== undefined
        ? degrees[0].trim() !== degrees[1].trim()
          ? {
              MTech: alumni.E.split(";")[1].trim(),
            }
          : { MTech: "" }
        : { MTech: "" }),
      EmailId: alumni.F.trim(),
    };
  });

const filterForValidDate = transformedAlumniData.filter((alumni) =>
  moment(alumni.DateOfBirth).isValid()
);

const xlsValidData = json2xls(filterForValidDate);

fs.writeFileSync(
  "./resources/CSE_Alumni_Clean_Data.xlsx",
  xlsValidData,
  "binary"
);
