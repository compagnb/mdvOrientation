// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 11
//
// Instructions ------------------------
//
// create a server that sends data when 
// requested. 
//
// --------------------------------------

// include module
var http = require('http');
var fs = require('fs');

//store given data in variables
var port = process.argv[2];
var filePath = process.argv[3];


// create server
var server = http.createServer(function(req, res){
    
    // if everything went okay, tell the client we are sending text in the response
    res.writeHead(200, {"Content-Type":"text/html"});
    
    // creating a read stream from the file contents and piping it to the response
    fs.createReadStream(filePath).pipe(res);
    
});

//listen to server port
server.listen(port);

// Alternate solution -------------------------------------
//  var http = require('http')
//     var fs = require('fs')
    
//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })
    
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))
// --------------------------------------------------------