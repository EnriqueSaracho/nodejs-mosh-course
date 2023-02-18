var url = "http://mylogger/io/log";

function log(message) {
  // Send HTTP request
  console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url; // Doesn't need to have the same name
// You can also do `module.exports = log`, if you dont want to export a function instead of an object. Only if there is one variable to export.

// This file shows how to use the `exports` object inside the `module` object to export variables to other files.
// To see the file that imports the variable go to `app4.js`.
