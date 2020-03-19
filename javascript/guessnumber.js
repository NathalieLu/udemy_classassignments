//Create a secretNumber
var secretNumber = 55;

// ask user for guess
var stringGuess = prompt("Guess a number")
var guess = Number(stringGuess);

if (guess === secretNumber) {
  alert("Congraduation! You got me!");
} 

else if (guess > secretNumber) {
  alert("The number is too high, guess again!");
}

else {
  alert("The number is too low, guess again!");
}