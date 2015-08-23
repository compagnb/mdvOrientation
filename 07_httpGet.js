// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 7
//
// Instructions ------------------------
//
// 
//
// --------------------------------------

var http = require('http');
var url = process.argv[2];

// console.log(url);

http.get(url, function(res) {
    res.setEncoding('utf8'); // set encoding to utf8
    
    res.on('error', function (err) {
        console.log(err);
    });
    
    res.on('data', function(data){
        console.log(data);
    })
});

    // var http = require('http')
    
    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // })

