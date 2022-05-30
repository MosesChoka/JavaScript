// ARRAYS
/* Array is a data sructure that stores multiple values into a single organized data structure
 You can define an array by listing al the various data types, separated with commas in a square bracket[]
*/
// An array with a string data type
var domesticFarm = ['Sheep', 'Cow', 'Hens', 'Goats'];


// An array with mixed data types
var mixedData = [true, false, 'name', 1, null, undefined];


// Arrays within arrays ; nested arrays
var nestedArray = [
    [1, 2, 3, 4],
    ['Musa', 'Sankara'],
    [true, fale],
    ['happy life!']
];

//Indexing arrays

console.log(domesticFarm[2])
    // retuns Hens

// Renaming elements within an array

domesticFarm[0] = 'Dogs';

// Array properties
console.log(domesticFarm.length); // helps in determining the length of an array
domesticFarm.push('Ducks'); // adds an element at the end of the array 
mixedData.pop(); // removes elements from the end of an array
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
/* removes "chocolate frosted" at index 1 and adds "chocolate cruller"
                                                             and "creme de leche" starting at index 1*/

/*
Following is the syntax of splice() method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

    arg1 = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.

    arg2 = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.

    item1, ....., itemX are the items to be added at index position arg1

splice() method returns the item(s) that were removed. 
*/

/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
for (var index = 0; index < prices.length; index++) {
    if (index === 0) {
        prices[index] = 45;
    } else if (index == 2) {
        prices[index] = 65;
    } else if (index == 6) {
        prices[index] = 32;
    }
}

console.log(prices);

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */

// My Solution

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(funParameter) {
    if (funParameter.length >= 7) {
        return true;
    } else {
        return false;
    }
}


console.log(hasEnoughPlayers(team));


domesticFarm.reverse() // reverses the order of the array
team.sort(); // sorts elements
team.shift() // removes the first element
team.concat(domesticFarm) // concat method is used to merge two or more arrays