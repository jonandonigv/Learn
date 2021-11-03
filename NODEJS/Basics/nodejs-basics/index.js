const http = require('http');

// Creates a http server
const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit();
});

// Starts the server on the port 3000.
server.listen(3000);