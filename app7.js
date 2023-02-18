// I used the `os` node module to show some information about the Operating System
const os = require("node:os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// Run it to see the result
// > node app7.js
