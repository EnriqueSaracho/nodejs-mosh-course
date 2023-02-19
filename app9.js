// Events and Event module
const EventEmitter = require("node:events"); // Imports `EventEmitter` class
const emitter = new EventEmitter(); // Making an instance of the class

// Register a listener
emitter.on("messageLoaded", function () {
  console.log("Listener called");
});

// The object created has all the properties of the class
emitter.emit("messageLoaded"); // Raise event

// The listener must be written before the Raise event
