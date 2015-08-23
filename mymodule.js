var fs = require('fs'); // import fs core module
var path = require('path'); // import path core module

function filterFiles(dir, ext, callback){ // create function that takes a dir, ext and callback
    
    var dotExt = '.'+ ext; // add a . to the extention
    var filteredList = []; // create a second array for filtered list of files
        
    fs.readdir(dir, function(err, data){ //read the directory asynchronusly
        if (err) return callback(err); // return an error
        
        
        
        for (var i=0; i<data.length; i++){ //filter hte files
            if (path.extname(data[i]) == dotExt){ 
                filteredList.push(data[i]); //push the files into the new array
            }
        }
        //no error so replace with null
        //replace data with filteredlist
        callback (null, filteredList);
        
    })
    
}

module.exports = filterFiles; // export filtered files