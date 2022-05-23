/* Here are some increment and decrement operators that can help you perform mathematical operation with less code
x++ or ++x this is same as x = x + 1 
x-- or --x this is same as x = x - 1
x += 3  same as x = x + 3
x -= 6 same as x = x - 6
x *= 2 same as x = x * 2
x /= 5 same as x = x / 5
*/
// let's take an example using the for loops
for (var x = 0; x < 6; x = x + 1) {
    console.log(x)
}

//The above code can be written as
for (var x = 0; x < 6; x++) {
    console.log(x)
} //this will give similar output as the code above

// othe examples
var y = 5;
y /= 3; // this can also be written as y = y / 5;
y -= 2; // this can also be written as y = y - 5;

/* TEST
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

//solution
for (var x = 9; x >= 1; x -= 1) {
    console.log("hello " + x);
}

/*Write a for (note: not a function) loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6
*/
let solution = 1;

for (let i = 1; i <= 12; i++) {
    solution *= i;
}

console.log(solution);