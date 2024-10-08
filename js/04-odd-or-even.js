/*
Odd or Even?

Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
*/

let input = 0;
while (input <= 15) {
  if (input % 2 == 0) {
    console.log(`${input} is even`);
  } else {
    console.log(`${input} is odd`);
  }

  input += 1;
}