var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url); 
    res.end(); //ends the response
  })
  .listen(8080); //the server object listens on port 8080

//req arguement consists of request from client as an object,
//this object has property called url which holds the part of the url that comes after the domain name

//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
