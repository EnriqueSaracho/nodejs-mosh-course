const EventEmitter = require("node:events"); // Imports `EventEmitter` class
const emitter = new EventEmitter(); // Making an instance of the class

var url = "http://mylogger/io/log";

function log(message) {
  // Send HTTP request
  console.log(message);

  emitter.emit("messageLoaded", { id: 1, url: "http//" }); // Raise event
}

module.exports = log; // Notice the difference between this and `logger.js`
