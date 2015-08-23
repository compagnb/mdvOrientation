var fs = require('fs'); // import core module
var file = process.argv[2]; //getting argument from process.argv
var numLines = 0;

fs.readFile(file, function(error, data){
    if (error) throw error;
    var text = data.toString();
    var splitText = text.split('\n');
    numLines = splitText.length-1;
    console.log(numLines);
});

