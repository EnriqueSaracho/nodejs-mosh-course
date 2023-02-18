// I used `fs` or `File System` module to show the files in the folder or directory.
// Also used both synchronous and asynchronous
// Always prefer to use asynchronous methods
const fs = require("fs");

// const files = fs.readdirSync('./')  // Directing to current folder
// console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
