// HTTP module

const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
  // To see this in the browser: localhost:3000/api/courses
});

server.listen(3000); // Selected the port

console.log("Listening on port 3000...");
