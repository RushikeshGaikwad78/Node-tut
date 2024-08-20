var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello world!!"); //writes response to the client
    res.end(); //ends the response
  })
  .listen(8080); //the server object listens on port 8080

//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
