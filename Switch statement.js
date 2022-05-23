//If you find yourself repeating else if statements in your code, where each condition is based on the same value, then it might be time to use a switch statement.
// THIS

var option = 1;

if (option === 1) {
    console.log("You selected option 1.");
} else if (option === 2) {
    console.log("You selected option 2.");
} else if (option === 3) {
    console.log("You selected option 3.");
} else if (option === 4) {
    console.log("You selected option 4.");
} else if (option === 5) {
    console.log("You selected option 5.");
} else if (option === 6) {
    console.log("You selected option 6.");
}

// CAN BE WRITTEN AS
switch (option) {
    case 1:
        console.log("You selected option one");
    case 2:
        console.log("You selected case 2");
    case 3:
        console.log("You selected option 3");

}

// This returns this
/* You selected option one instrument.js:109:45
You selected case 2 instrument.js:109:45
You selected option 3
But we only need a single output, in the next step we introduce break statement.
The break statement can be used to terminate a switch statement and transfer control to the code following the terminated statement. By adding a break to each case clause, you fix the issue of the switch statement falling-through to other case clauses.
*/

switch (option) {
    case 1:
        console.log("You picked option 1");
        break;
    case 2:
        console.log("You picked option 2");
        break;
    case 3:
        console.log("You picked option 3");
        break; // this is not very necessary    
}

// TEST

var month = 2;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
}

console.log("There are " + days + " days in this month.");

//expected aswer is ; There are 28 days in this month.