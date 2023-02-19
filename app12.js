// HTTP module

const http = require("node:http");

const server = http.createServer();

// Raise a listener
server.on("connection", (socket) => {
  console.log("New connection...");
});
// This will listen for browsers connecting to the server

server.listen(3000); // Selected the port

console.log("Listening on port 3000...");

// Run it

// This is not a good example for a real world application. To view better example see `app13.js`.
