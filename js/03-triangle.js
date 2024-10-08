/*
Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/

let triangleString = "#";
for (i = 1; i <= 7; i++) {
  console.log(triangleString);
  triangleString += triangleString.slice(-1);
}