// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 10
//
// Instructions ------------------------
//
// create a tcp time server
// record time in "YYYY-MM-DD hh:mm" format
// uses net core module
//
// --------------------------------------

// require module
var net = require('net');

// put tcp connection (port) in a variable
var port = process.argv[2];

// create a function that adds a 0 to given numer
function addZero(num){
    
    // if the number passed is less then 10 add a 0
    if (num < 10){
        num = '0'+ num;
    }
    
    // return the number
    return num;
}

// get information from server port
var server = net.createServer(function(socket){
    // set up a date
    var date = new Date();
    
    // pull the full yeat
    var year = date.getFullYear();
    
    // pull the month and add a 0 if needed
    var month = addZero(date.getMonth()+1);
    
    // pull the date and add a 0 if needed
    var day = addZero(date.getDate());
    
    // pull the hour and add a 0 if needed
    var hrs = addZero(date.getHours());
    
    // pull the min and add a 0 if needed
    var mins = addZero(date.getMinutes());

    // put it all together
    var dateTime = year + '-' + month + '-' + day + ' ' + hrs + ':' + mins;
    
    // 
    socket.end(dateTime);
    
});

//listen to the server port
server.listen (port);

// Alternate solution -----------------------------
//   var net = require('net')
    
//     function zeroFill(i) {
//       return (i < 10 ? '0' : '') + i
//     }
    
//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes())
//     }
    
//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })
    
//     server.listen(Number(process.argv[2]))
// ---------------------------------------------