// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 8
//
// Instructions ------------------------
// Print out contents of url on a new line
// contents are given all at the same time
// using a buffer list
//
// before running must type the following in console
// npm install bl
//
// --------------------------------------

// require modules
var http = require('http');
var bl = require('bl');

// url given into a variable
var url = process.argv[2];

// using http get to get a response from the url
http.get(process.argv[2], function(result) {
    
    //pipe the data into a buffer list
    result.pipe(bl(function (error, data) {
        
        result.setEncoding('utf8');
        
        // if there is an error give me an error in the console
        if (error) return console.log(error);
        
        //put data as a string into a new variable called string
        var string = data.toString();
        
        //console log the length of the string
        console.log(string.length);
        
        // console log the string
        console.log(string);
    }));
});

