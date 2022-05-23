/*NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

    Orbiter transfers from ground to internal power (T-50 seconds)
    Ground launch sequencer is go for auto sequence start (T-31 seconds)
    Activate launch pad sound suppression system (T-16 seconds)
    Activate main engine hydrogen burnoff system (T-10 seconds)
    Main engine start (T-6 seconds)
    Solid rocket booster ignition and liftoff! (T-0 seconds)

TASK
Write a while loop that counts down from 60 seconds and:
    *If there's a task being completed, it prints out the task
    *If there is no task being completed, it prints out the time as T-x seconds

*/

// first we make iteration of a variable
var x = 60;

// next we would create a while loop and some conditional statements aimed at solving the problem
while (x >= 0) { // the end of iteration
    if (x === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (x === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (x === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (x === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (x === 6) {
        console.log("Main engine start");
    } else if (x === 0) {
        console.log("Solid rocket booster ignition and liftoff!")
    } else {
        console.log("T-" + x + "seconds");
    }

    x = x - 1; // decrement
}