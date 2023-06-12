const http = require("http");
const { readFileAsync } = require("./fileRead");
const filePath = "hello.txt";

const port = 3000;

readFileAsync(filePath)
  .then((data) => {
    console.log("File contents:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err.message);
  });
  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(() => {
  console.log(`Welcome to the Node.js server!`);
});
