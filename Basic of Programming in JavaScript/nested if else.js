// nested if else

// winning number 20
// less than 20 low
// greater than 20 high

let winningNumber = 20;
let userGuess = Number(prompt("Guess the number")); // prompt always accept the values in string type but we need number so here we used number method to accept the values in number type.

if (winningNumber === userGuess) {
  console.log("Your Guess is right !!");
} else {
  if (userGuess > winningNumber) {
    console.log("You are higher than winning number");
  } else {
    console.log("You are lower than winning number");
  }
}
