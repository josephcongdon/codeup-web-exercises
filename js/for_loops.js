// for(i=0; i <= 70; i += 7){
//     console.log(i)
// }

// function showMultiplicationTable(){
//     for(x=1; x<=10; x++){
//         console.log("x equals " + x*7)
//     }
// }
// showMultiplicationTable()

// function numberGenerator(){
//
//     for(i=1; i<=10; i++){
//         let randomNumber = Math.floor(Math.random()*180) + 20
//         if(randomNumber % 2 !== 0){
//             console.log ("this number " + randomNumber + " is odd")
//         }else if(randomNumber % 2 === 0){
//              console.log("this number " + randomNumber + " is even")
//         }
//         }
// }
// numberGenerator()

function nineSpaces(){
    for(x=1; x<=9; x++){
        console.log(x.toString().repeat(x))
    }

}
nineSpaces()
