// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 7
//
// Instructions ------------------------
// Print out contents of url on a new line
// contents are given in chunks 
//
// --------------------------------------

// include http module
var http = require('http');
// store url given in variable
var url = process.argv[2];

// to test information given
// console.log(url);

//use http to get a response from the url
http.get(url, function(res) {
    // set encoding to utf8 so we can read the data given in the response
    res.setEncoding('utf8'); 
    // if there is an error give me the error in a console message
    res.on('error', function (err) {
        console.log(err);
    });
    // with no errors... now grab the data and put it in the console message
    res.on('data', function(data){
        console.log(data);
    });
});

// Alternate solution ----------------------------
// var http = require('http')
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
// -----------------------------------------------
