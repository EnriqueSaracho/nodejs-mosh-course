const EventEmitter = require("node:events"); // Imports `EventEmitter` class

var url = "http://mylogger/io/log";

class Logger extends EventEmitter {
  log(message) {
    // Inside classes you dont need to write `function`, now its a method
    // Send HTTP request
    console.log(message);

    this.emit("messageLoaded", { id: 1, url: "http//" }); // Raise event
  }
}

module.exports = Logger; // Notice the difference between this and `logger.js`
