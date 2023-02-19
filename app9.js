// Events and Event module
const EventEmitter = require("node:events"); // Imports `EventEmitter` class
const emitter = new EventEmitter(); // Making an instance of the class

// Register a listener
emitter.on("messageLoaded", (arg) => {
  console.log("Listener called", arg);
});

// The object created has all the properties of the class
emitter.emit("messageLoaded", { id: 1, url: "http//" }); // Raise event

// The object inside the emit method is called `Event Argument` and it can be passed on to the listener

// The listener must be written before the Raise event
