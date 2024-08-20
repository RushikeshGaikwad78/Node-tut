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
// fs.appendFile('mynewfile1.txt','hello content!!' ,function(err){
//     if(err) throw err;
//     console.log('saved!!');
// })

//fs.open() : takes a "flag" as the second argument, if the flag is "w" for "writing", 
//the specified file is opened for writing. If the file does not exist, an empty file is created
// fs.open('mynewfile2.txt','w',function(err,file){
//     if(err) throw err;
//     console.log('saved!!');
// })

//fs.writeFile() :  replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile('mynewfile3.txt','Hello content!!!' , function(err){
    if(err) throw err;
    console.log('Saved!!!');
})