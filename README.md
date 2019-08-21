# Psychic-Game

## Test your psychic ability verses one of the greatest minds in the Marvel Universe! Professor X is ready for the challenge and you will face off with him to gain a spot in his school for gifted students.


## Check it out!: 
[Open Here](https://fayelinks.github.io/Psychic-Game/ "Psychic-Game")

## Code Example:

``` 
// Computer will randomly choose a choice from the option array above.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// Create the function below when a key is pressed
document.onkeyup = function(event) {
    
// Determines which key was pressed by the person

var userGuess = event.key; 
guessList = guessList + " " + userGuess;
console.log(guessList);
```

## Built With:
*  HTML
* Javascript
* CSS


## Future Development: 
> Add data persistence to the site so that the score can be kept or cleared by the user

> Add a harder version that displays a group of randomly generated images shown on the screen. The user has to guess what image the computer is thinking of

> Add a countdown timer to limit the amount of time the user has to guess


## Authors: 
* Alison Kelly
