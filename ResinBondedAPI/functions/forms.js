const fs = require("fs");
const path = require("path");

function readJsonFile(id, type) {
  var filePath = path.join(__dirname, "..", "forms", id + "." + type);
  console.log(__dirname)
  console.log(filePath)
  var encoding = "utf8";

  var file = fs.readFileSync(filePath, encoding);
  return JSON.parse(file);
}

function checkFileExists(id, type) {
  var filePath = path.join(__dirname, "..", "forms", id + "." + type);
  return fs.existsSync(filePath)
}

module.exports.readJsonFile = readJsonFile
module.exports.checkFileExists = checkFileExists
