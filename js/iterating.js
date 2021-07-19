(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Harry", "Sally", "David", "Eva"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // names.forEach(name =>console.log(name));
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(let i=0; i<4; i++){
    //     console.log(names[i])
    // }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
        // names.forEach(name =>console.log(name));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstItem(x){
    return x[0];
    }
    function secondItem(x){
    return x[1];
    }
    function lastItem(x){
    return x[x.length -1];
    }


    console.log(firstItem(names));
    console.log(secondItem(names));
    console.log(lastItem(names));

})();


