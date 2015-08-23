// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 2
//
// Instructions ------------------------
//
// print sum of two given values
//
// --------------------------------------

// declare variable fo sum
var sum = 0;

// print random array
// console.log(process.argv);

// use a for loop to add supplied numbers together
for(var i = 2; i < process.argv.length; i++){
    // test number conversion
    //console.log (Number(process.argv[i]));
    
    // numbers are added to sum
    sum += Number(process.argv[i]);
}

console.log(sum);

// Alternate solution --------------------
// console.log(sum);
//     var result = 0
//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])
//     console.log(result)
// ----------------------------------------
