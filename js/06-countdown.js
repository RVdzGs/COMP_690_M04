/*
Countdown

Write an application that counts down to 0 based on the number that a user passes into a prompt. 
If the number is 10, it should count down from 10 to 0. 
If the number is 100, it should count down from 100 to 0 and so on. 
*/

let countdown = parseInt(prompt("Enter a number"));

if (!isNaN(countdown)) {
  while (countdown >= 0) {
    console.log(countdown);
    countdown--;
  }
} else {
  console.log("Please enter a valid number.");
}