// Loops let you iterate over values and repeatedly run a block of code.
// WHILE LOOP - USING WHILE LOOP TO COUNT TO 10000

var x = 1; // when to start
while (x <= 10000) { //when to stop
    console.log(x + "mississippi");
    x = x + 1; // how to get the next value
}

var start = 2;
while (start < 10) {
    console.log(start + " " + "dolar");
    start = start + 2;
}

/* Fizzbuzz - a common interview question
Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number
*/ //MY SOLUTION

var x = 1; // when to start
while (x <= 100) { //when to end
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");
    } else if (x % 3 === 0) {
        console.log("Fizz");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(x);
    }
    x = x + 1; // Increment
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num >= 1) {
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! " +
            num + " bottle of juice! Take one down, pass it around... " +
            (num - 1) + " bottles of juice on the wall!");
    } else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            (num - 1) + " bottle of juice on the wall!");
    } else {
        console.log(num + " bottles of juice on the wall! " +
            num + " bottles of juice! Take one down, pass it around... " +
            (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}