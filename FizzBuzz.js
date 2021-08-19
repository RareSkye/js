 //let fizz = "Fizz"
 //let buzz = "Buzz"
// let i = 0
// for (i=1; i<101; i++){
//     if (i%3==0){
//         console.log(fizz)
//     } else if (i%5==0){
//         console.log(buzz)
//     }
//     else{
//         console.log(i)
//     }
    
// }

let fizz = "Fizz"
let buzz = "Buzz"
let i = 0
for (i=1; i<101; i++){
    if((i%5==0) && (i%3==0)){
        console.log(fizz+buzz)
    }
    else{
        console.log(i)
    }
    
}