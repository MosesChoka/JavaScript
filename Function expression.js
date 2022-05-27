/* Write an anonymous function expression that stores a function in a variable called "laugh"
 and outputs the number of "ha"s that you pass in as an argument */

// Declare an empty string
var sound = "";

// An anonymous function expression stored in the variable `laugh`
var laugh = function(num) {

    //Iterate
    for (var x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}

// It is essential that the function must return a string
console.log(laugh(3));

/* Write a named function expression that stores the function in a variable called cry and returns "boohoo!".
 Don't forget to call the function using the variable name, not the function name: */

var cry = function myFunction() {
    var sound = "boohoo!";
    return sound;
};

// Call the function using the variable name, not the function name
console.log(cry());

// This statement is also acceptable, but it won't print anything on your console
// cry();

/* Call the emotions() function so that it prints the output you see below,
 but instead of passing the laugh() function as an argument, pass an inline function expression instead*/

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function(num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0; i < num; i++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
});