
// print random array
// console.log(process.argv);

var sum = 0;

for(var i = 2; i < process.argv.length; i++){
    //console.log (Number(process.argv[i]));
    sum += Number(process.argv[i]);
}

// console.log(sum);

//     var result = 0

//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])

//     console.log(result)

