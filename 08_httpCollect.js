// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 8
//
// Instructions ------------------------
//
// Print out contents of url on a new line
// contents are given all at the same time
// 
// --------------------------------------

var http = require('http');
var bl = require('bl')
var url = process.argv[2];

var data = ''; // can aslo do it with an array

http.get(url, function(res) {
    res.setEncoding('utf8'); // set encoding to utf8
    
    res.on('error', function (err) {
        console.log(err);
    });
    
     res.on('data', function (chunk) {
        data += chunk; // if array name.push()
        
    });

      res.on('end', function () {
        console.log(data.length);
        console.log(data);
    });
    
});

// Alternate solution ---------------------
//     var http = require('http')
//     var bl = require('bl')
    
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))  
//     })
// -----------------------------------------