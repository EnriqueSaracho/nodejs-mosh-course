// Intro to Node modules
// Go to nodejs.org > docs > select the current version > shows list of modules available.

const path = require("node:path");

var pathObj = path.parse(__filename);

console.log(pathObj);
// Run it to see the result object
// > node app6.js
