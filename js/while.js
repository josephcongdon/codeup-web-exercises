// function squareOff(){
//     let x = 1
//     while(x < 65000){
//         x *= 2;
//         console.log(x)
//     }
// }

function snowCones(){
let amountCones = Math.floor(Math.random() * 50) + 50;
    console.log("I have " + amountCones + " to sell")
}
do {let conesBought = Math.floor(Math.random() * 5) + 1;
    console.log(" I have sold " + conesBought + " cones");
    newAmountCones = (amountCones-conesBought)
    console.log("I need to sell" + amountCones)
} while (amountCones >= 0);