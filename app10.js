// This files works with `logger2.js`.
// `logger2.js` emits an event when running a function and this file (`app10.js`) listens to that event.

const EventEmitter = require("node:events"); // Imports `EventEmitter` class
const emitter = new EventEmitter(); // Making an instance of the class

// Register a listener
emitter.on("messageLoaded", (arg) => {
  console.log("Listener called", arg);
});

const log = require("./logger2");
log("message");

// This is an example of how no to do this process.
// The emitter object is a different one in `app10.js` than the one in `logger2.js`
// So if you run app10.js with node it won't listen to the emitter
// To see the correct way see `app11.js`
