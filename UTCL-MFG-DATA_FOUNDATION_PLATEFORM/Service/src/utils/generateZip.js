const client = require("../db/connection");
const fs = require("fs");
const archiver = require("archiver");

const generateZip = async (filename) => {
  var output = fs.createWriteStream(`./public/uat/${filename}_zip.zip`);
  var archive = archiver("zip", { zlib: { level: 9 } });
  var sourceDir = "./public/uat/" + filename + "/";
  archive
    .directory(sourceDir, false)
    .on("error", (err) => {
      console.log(err);
      fs.rmSync(sourceDir, { recursive: true, force: true });
    })
    .pipe(output);

  output.on(
    "close",
    () => fs.rmSync(sourceDir, { recursive: true, force: true }),

    console.log("success")
  );
  archive.finalize();
};

module.exports = generateZip;
