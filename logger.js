var url = "http://mylogger/io/log";

function log(message) {
  // Send HTTP request
  console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url; // Doesn't need to have the same name

// This file shows how to use the `exports` object inside the `module` object to export variables to other files.
