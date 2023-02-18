const logger = require("./logger");

// console.log(logger);
// If you run this you will get an object with the function `log` from `logger.js`.

logger.log("Hola");
// Since the `log` function is imported from `logger.js', now you can run it in this file under the object `logger`, to which the function was assigned.
// When you run:
// > node app4.js
// Hola
