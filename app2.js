var message = "Hello there";
console.log(global.message);

// When running javascript on a browser all global variables are child components of the `window` object, which represents the global context of the web page.
// So when you call the variable like: `x = 1`, is the same as: `window.x = 1`.
// Node doesn't have the `window` object. But it has the `global` object.
// The difference is that global variables are not child components of the `global` object.

// So when running this file with node:
// ...Nodejs - Mosh\first-app> node app2.js
// The result is:
// Undefined
