// This files works with `logger3.js`.
// `logger3.js` emits an event when running a function and this file (`app11.js`) listens to that event.

const EventEmitter = require("node:events"); // Imports `EventEmitter` class

const Logger = require("./logger3");
const logger = new Logger();

// Register a listener
logger.on("messageLoaded", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
