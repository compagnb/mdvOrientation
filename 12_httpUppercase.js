// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 12
//
// Instructions ------------------------
//
// create a server recieves only post 
// converts requests characters to upper
// return it to the client
//
// --------------------------------------

// include module
var map = require('through2-map');
var http = require('http');

// store given data in variables
var port = process.argv[2];

// create server
var server = http.createServer(function(req,res){
  
  // test what request is
  //console.log(req);  
  
  // check for method in callback
  if(req.method == 'POST'){
      
      //take incoming chunks of data
      req.pipe(map (function (chunk){
          // convert to string and uppercase
          //return it
          return chunk.toString().toUpperCase();
          
      // now pipe it to the response
      })).pipe(res);
      
  // if the method isnt post... end...    
  }else if(req.method != 'POST'){
      return res.end();
  }
  
});

// start server by listening to port
server.listen(port);