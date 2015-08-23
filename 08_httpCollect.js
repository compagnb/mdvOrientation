var http = require('http');
var url = process.argv[2];
var data = '';

http.get(url, function(res) {
    res.setEncoding('utf8'); // set encoding to utf8
    
    res.on('error', function (err) {
        console.log(err);
    });
    
     res.on('data', function (chunk) {
        data += chunk;
        
    });

      res.on('end', function () {
        console.log(data.length);
        console.log(data);
    });
    
});