var number = Math.floor((Math.random()*100)+1);

var tooHigh = [""]
var tooLow = []
var	bingo = []

var guesses = []

function numberEvaluation () {
	document.getElementById("guessForm").onsubmit = function (event) {
	 var guess = document.getElementById("guess").value;
	 var newGuess = parseInt(guess);
			if (isNaN(newGuess)) {
			alert("Silly goose. Put a real number.")
		}
		else {
		if (newGuess==number) {
		alert("Awesome. You guessed it")
		}
	else if (newGuess>number) {
		alert("A little high there bud. Try something lower")
		}
	else {
		alert("Whoa. Whoa. Too low. Guess higher")
		}
	}
	return false;
	};
}
	

window.onload = function () {
	numberEvaluation ();
};




