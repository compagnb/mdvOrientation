var fs = require('fs'); //import core module fs
var file = process.argv[2]; //getting argument from process.argv
var buffer = fs.readFileSync(file); //read the file synchronously into a buffer
var str = buffer.toString(); // convert to a string
var spl = str.split('\n'); //splitting string into an array using a new line as a delimiter

console.log(spl.length - 1);

// var fs = require('fs')
    
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
    
//     // note you can avoid the .toString() by passing 'utf8' as the
//     // second argument to readFileSync, then you'll get a String!
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1