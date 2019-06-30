// Create variables for keeping the score, originally should be set to 0

alert("You arrive home after a long day of school to find a strange older man waiting in your living room...");
    
alert("\"It's a pleasure to meet you, My name is Professor Charles Xavier.\"")

var person = prompt("\"May I know your name, please?\"", "");

alert("\"Thank you! I run a school for gifted young adults and I was wondering if you would humor me with a game.\"")


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessList = " ";


    // Create an array for all the options below
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Function will be called when we reset everything and THIS PART STILL NEEDS WORK. THE SECOND RESET DOESN'T ACCEPT THE CORRECT LETTER AFTER THE RESET
    
function reset() {
    console.log("Game Over");
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    guessesLeft = 9;
    guessList = " ";
}

// create the variables that hold references to the HTML display above

var directionText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var computerChoiceText = document.getElementById("computerchoice-text");

// Computer will randomly choose a choice from the option array above.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// Create the function below when a key is pressed
document.onkeyup = function(event) {
    
// Determines which key was pressed by the person

var userGuess = event.key; 
guessList = guessList + " " + userGuess;
console.log(guessList);


// The below code block says to only run the code if the user presses the keys allowed in the array
if (userGuess === computerGuess)  {
    console.log("win");
    wins = wins +1; 
    reset();
}
else {
    console.log("lose");
    guessesLeft = guessesLeft -1;
    console.log("guesses left " + guessesLeft);
    if (guessesLeft === 0) {
        losses = losses +1;
        reset();
    }
}

// I need to reset the certain numbers once the condition is met that the guesses left === 0



// I think I need to create the function above in the objects so they can reference that function for the if^^^


// Display the user and computer guesses, wins/losses/ties
userChoiceText.textContent = person + " chose: " + guessList;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses left: " + guessesLeft;
};