// --------------------------------------
//
// Barbara Compagnoni
// MDV Orientation Weekend
// Learnyounode Exercise 2
//
// Instructions ------------------------
//
// 
//
// --------------------------------------

function soma(){
        var sum = 0;
        for(var i = 1; i<process.argv.length; i++){
                if(i>1){
                        sum+=parseInt(process.argv[i]);
                }
        }
        console.log(sum);
        return sum;
}
soma();