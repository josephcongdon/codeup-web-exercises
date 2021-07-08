"use strict";

console.log("Hello from external JavaScript");


// alert("Welcome to my Website!");

// let favoriteColor = prompt("What is your favorite color");
// alert("Great, " + favoriteColor + " is my favorite too!")


// let toggleButton = document.getElementById("toggle");
// let hiddenParagraph = document.getElementById("hideable");
// toggleButton.onclick = function (){
//     let theHideClass = hiddenParagraph.getAttribute("class");
//     hiddenParagraph.setAttribute("class", "hidden");
//     if (theHideClass == "hidden"){
//         hiddenParagraph.removeAttribute("class");
//     } else {
//         hiddenParagraph.setAttribute("class", "hidden");
//     }
// }


// //3 part 1
// let littleMermaidDays = 3;
// let brotherBearDays = 5;
// let herculesDays = 1;
//
// let totalRentalDays =  littleMermaidDays + brotherBearDays + herculesDays;
//
// let totalRentalPrice = totalRentalDays * 3;
//
// console.log("It's going to cost $" + totalRentalPrice + " to rent all these movies");

// //3 part 2
// let googleParRateDollar = 400;
// let amazonParRateDollar =  380;
// let facebookParRateDollar = 350;
//
// let googleHoursWorked = 6;
// let amazonHoursWorked = 4;
// let facebookHoursWorked = 10;
//
// let totalHours = (googleHoursWorked * googleParRateDollar) + (amazonHoursWorked * amazonParRateDollar) + (facebookHoursWorked* facebookParRateDollar);
//
// console.log("I should get $" + totalHours + " for my work");

// // 3 part 3
// let classSize = 25;
//
// function enrollInClass() {
// var studentsEnrolled = prompt("how many students are in the class?");
// if (studentsEnrolled > classSize){
//     return alert("The class is already full");
// }else{
//     let openSchedule = prompt("is your schedule open for this class");
//     if (openSchedule === "no") {
//         return alert("your schedule does not work");
//     } else{
//         return alert('you can enroll in this class!')
//     }
// }
// }
//
// enrollInClass()

// //3 part 4
// let premiumMember = prompt("are you a premium member?");
// let itemsNeeded = 3;
// let offerExpired = prompt("has the offer expired");
// let howManyItems = prompt("how many items do you have?");
// function productOffer(){
//    if (premiumMember === "no"){
//    return howManyItems
//       if (howManyItems < itemsNeeded){
//          return alert("get more items");
//       }else{
//    return offerExpired
//       if (offerExpired === "yes"){
//          return alert("I'm sorry the offered has expired");
//       }else{
//          return alert("you qualify for our product offer!");
//       }
//       }
//    } if (premiumMember === "yes"){
//       return offerExpired;
//
//    }
//
//
// }
//
// productOffer()


// function returnFive(){
//     return 5;
// }

// function isFive(x){
//     return x === 5 || x === "5";
// }
// console.log(isFive())

// function isShortWord(str){
//     return (str.length < 5);
// }
// isShortWord();

// function isSameLength(input1, input2){
//     return input1.length === input2.length;
// }
// isSameLength();

// function getSmallerSegment(string, number){
//
//     return string.substring(0 ,number).toLocaleLowerCase();
// }
//
// getSmallerSegment();


// function addingNumbers(num1, num2){
//     return num1 + num2
// }
// addingNumbers()
