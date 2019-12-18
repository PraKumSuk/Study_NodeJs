const http = require("http");
const app = require("./app");

//Use system configuration for port or use 3000 by default.
const port = process.env.port || 3000;

//Create server with exported express app
const server = http.createServer(app);
console.log("Server starting..............");
console.log("Listening to Port 3000 now");
server.listen(port);
