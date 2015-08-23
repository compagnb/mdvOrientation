// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 5
//
// Instructions ------------------------
//
// 
//
// --------------------------------------
var fs = require('fs'); //import core module fs
var path = require('path'); //import core module path

//process.argv - 0 is always node, 1 is path to script
var dir = process.argv[2]; //get the directory path (1st argument to script)
var ext = process.argv[3]; //get the extention to filter for (2nd argument)

//asyncronsly read input directory
//when finished reading directory, invoke callback
//call back takes error and data (list files in directory) as parameters

fs.readdir(dir, function(error, data){
    //ck if there is an error if so throw an error
    if (error) throw error;
    //console.log(data);
    
    // add . to ext
    ext = '.'+ ext;
    
    //iterate over array of file names
    for (var i = 0; i<data.length; i++){
        //console.log(path.extname(data[i]));
        // compare and print
        
        if(path.extname(data[i]) == ext){
            console.log(data[i]);
        }
    }
    
    
});

    // var fs = require('fs')
    // var path = require('path')
    
    // fs.readdir(process.argv[2], function (err, list) {
    //   list.forEach(function (file) {
    //     if (path.extname(file) === '.' + process.argv[3])
    //       console.log(file)
    //   })
    // })