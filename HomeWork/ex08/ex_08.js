// Write a JavaScript program where the program takes a random integer between 1
// and 10, and the user is then prompted to input a guess number. The program
// displays a message "Good Work" if the input matches the guess number otherwise
// "Not matched".

// 1 -> 10
var randomNum = Math.floor(Math.random() * 11);

var input = 10;

if (input == randomNum) {
  console.log("Good Word");
} else {
  console.log("Not matched");
}
