// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 9
//
// Instructions -------------------------
//
// gather data from 3 urls supplied print
// out data gathered in order
//
// --------------------------------------

// include modules
var http = require('http');

// create array for urls
var urls = [process.argv[2], process.argv[3], process.argv[4]];

// create a counter to gage completion
var counter = 0;

// store data from get request
// in this case we dont need to include null values
var allData = [];

// create function to gather data
function getData(url){
    
    // declare variable for datastorage
    // equate it to nothing
    var dataStore ='';
    
    // gets data, error and appends data
    http.get(url, function(res, err){
        
        // sets encoding
        res.setEncoding('utf8');
        
        // on error
        res.on ('err', function(err){
            console.log(err);
        });
        
        // get data
        res.on('data', function(chunk){
            // add data chunk to data store
            dataStore += chunk;
        });
        
        // when completed
        res.on('end', function(){
            
            // add to counter
            counter++;
            
            //declaring variable and placing its value equal to the index of the array
            var index = urls.indexOf(url);
            
            //pushing all data into the large array in order
            allData[index] = dataStore;
            
            if (counter === 3){
                printData();
            }
        });
        
    });
    
}

function printData(){
    for (var i = 0; i < allData.length; i++){
        console.log(allData[i]);
    }
}


for(var i = 0; i < urls.length; i++){
    getData(urls[i]);
};


// Alternate solution -----------------------
    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0
    
    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i])
    // }
    
    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err)
    
    //       results[index] = data.toString()
    //       count++
    
    //       if (count == 3)
    //         printResults()
    //     }))
    //   })
    // }
    
    // for (var i = 0; i < 3; i++)
    //   httpGet(i)
// ------------------------------------------