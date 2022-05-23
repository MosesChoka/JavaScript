/*
The for loop explicitly forces you to define the start point, stop point, and each step of the loop.
In fact, you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any of the three required pieces.
*/

/* for ( start; stop; step ) {
}
*/

// example of a for loop counting from 1 to 5

for (var n = 1; n < 6; n = n + 1) {
    console.log("Printing out i =" + n);
}

// nested for loop
for (var n = 1; n < 6; n = n + 1) {
    for (var o = 0; o < 6; o = o + 1) {}
    console.log(n + "," + o);
}