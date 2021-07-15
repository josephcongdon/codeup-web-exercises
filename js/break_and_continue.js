function userOddNumber(){
   let oddInsert = prompt("please put in an odd number between 1 and 50")
    if(parseFloat(oddInsert) % 2 === 0){
        alert( oddInsert + " is an even number. I am subtracting 1")
        alert('The odd number is ' + oddInsert-1)
        return oddInsert-1
    }return alert(oddInsert + " is your number")
}
userOddNumber()