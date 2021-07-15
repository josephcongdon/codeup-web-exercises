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

do {let conesBought = Math.floor(Math.random() * 5) + 1;
    if(conesBought > amountCones){
        console.log("Sorry I can't sell " + conesBought + " cones. I only have " + amountCones + " cones left")
    } else {
        console.log(" I have sold " + conesBought + " cones");
        amountCones = amountCones - conesBought;
        console.log(amountCones + " cones left to sell")
    }
} while (amountCones > 0);
}
snowCones()