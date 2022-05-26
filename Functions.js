/* Functions package up code so you can easily use (and reuse) a block of code. 
Parameters are variables that are used to store the data that's passed into a function for the function to use.
Arguments are the actual data that's passed into a function when it is invoked:*/

//Reverse function example
function reverseString(reverseMe) {
    var reversed = "Moses"
    for (var i = reverseMe.lenght - 1; i > 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;

}

console.log(reverseString("Moses"));

// declares the say hello function
function sayHello() {
    var message = "Hello!"
    return message;
}
// function returns "Hello" and console.log prints the return value
console.log(sayHello())

// PARAMETER VS ARGUMENT
/* A parameter is always going to be a variable name and appears in the function declaration. On the other hand,
 an argument is always going to be a value (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.)
  and will always appear in the code when the function is called or invoked.*/

function findAverage(x, y) {
    var answer = (x + y) / 2
    return answer;
}

var avg = findAverage(4, 5);

console.log(avg);

//console.log(findAverage(2,3));

/* * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */


var sound = "";

function laugh(num) {
    for (var x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(3));