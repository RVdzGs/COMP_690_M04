/*
The “Coin Flip” Game Redux

In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:

1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
2. Create a for loop that loops a certain amount of times. 
The amount of times that the for loop executes will be collected from the user via a prompt.
3. Within the for loop assign a randomly generated number to. 
You will have to use the same Math formula that you used in the previous assignment to get this number.
4. Use a conditional statement to check the result of the coin flip. 
If it’s 0, write out “Heads” into the console window. 
If it’s 1, write out “Tails” into the console window.

Note: Unlike the previous assignment, you’re not prompting the user for their choice. You’re simply displaying the coin flip results in the console.
*/

// #1
let coinFlip;

// #2
let numberOfFlips = parseInt(prompt("How many times would you like to flip the coin?"), );

if (isNaN(numberOfFlips) || numberOfFlips <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    // #3 & #4
    for (let i = 0; i < numberOfFlips; i++) {
        // #3
        coinFlip = Math.round(Math.random());

        // #4
        if (coinFlip === 0) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    }
}

