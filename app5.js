// The way node can make modules private to each file, is by not running the code of each file directly.
// Instead it puts it inside a function and then runs that function.
// The function has the arguments:
// - exports (Which is a shorcut for `module.exports`)
// - require
// - module
// - __filename
// - __dirname

// This function is called the "Module Wrapper Function"

console.log(__filename);
console.log(__dirname);
// Run it to see
// > node app5.js
