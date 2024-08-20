var http = require("http");
var fs = require("fs");

//reading from file
// http
//   .createServer(function (req, res) {
//     fs.readFile("demofile1.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);


//creation of files :-
//fs.appendFile()
//fs.open()
//fs.writeFile()

//fs.appendFile() : appends specified content to a file. If the file does not exist, the file will be created
fs.appendFile('mynewfile1.txt','hello content!!' ,function(err){
    if(err) throw err;
    console.log('saved!!');
})
