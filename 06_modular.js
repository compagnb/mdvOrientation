// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 6
//
// Instructions ------------------------
//
// 
//
// --------------------------------------

var module = require('./mymodule');

//process.argv - 0 is always node, 1 is path to script
var dir = process.argv[2]; //get the directory path (1st argument to script)
var ext = process.argv[3]; //get the extention to filter for (2nd argument)



function myCallback(error, fileList){
    
    fileList.forEach(function(item){
        console.log (item);
    });

}

module(dir, ext, myCallback);
