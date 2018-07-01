var userGuess = document.getElementById("userGuess");

var button = document.getElementById("submitButton");

//Randomly generate a whole number from 1 to 100
var theNumber = Math.floor((Math.random()* (101 - 1) + 1));

console.log(theNumber);

button.addEventListener("click", function () {

	event.preventDefault();

	var answer = parseInt(userGuess.value); 

	if((answer >= 1) && (answer <= 100)){

		var lastGuessMessage = "Your last guess was";

		document.getElementById("lastGuess").innerHTML = lastGuessMessage;

		document.getElementById("output").innerHTML = answer;

	if(answer > theNumber){
		console.log("That is too high");
		lastGuessMessage;
		document.getElementById("result").innerHTML = "That is too high";
	}
	else if (answer < theNumber){

		var toolow = "That is too low";
		console.log("That is too low");
		document.getElementById("result").innerHTML = "That is too low";
	}
	else{
		console.log("BOOM!!!");
		document.getElementById("result").innerHTML = "BOOM!!!";
		}
	}
	else{

		console.log("Please enter a number between 1 and 100");
		document.getElementById("result").innerHTML = "Please enter a number between 1 and 100";
	}
	// return answer;
	console.log(answer);
});


//-------------------------------- NOTES:---------------------------

// BAD CODE: var userGuess = parseInt(document.getElementById("userGuess")).value;

// can use document.querySelector("h1") can use h1 (selector) or #id or .class, etc.

	//can change HTML input to make sure it's a number instead
	// else if(theNumber == isNaN(userGuess)){
	
	// 	alert("Please enter an actual number");
	// 	return "Please enter an actual number";
	// }

// Use switch statement? 

	// switch(userGuess){

	// case userGuess > theNumber:
	// alert("That is too high");
	// return "That is too high";
	// break;

	// case userGuess < theNumber:
	// alert("That is too low");
	// return "That is too low";
	// break;

	// case ((theNumber < 1) || (theNumber > 100));
	// alert("Enter a number between 1 and 100");
	// return "Enter a number between 1 and 100";

	// case userGuess == isNaN(userGuess):
	// return "You must enter a number!";
	// break;

	// //Would this be the default instead?
	// case userGuess == theNumber:
	// alert("Boom!!!");
	// return "BOOM!!!";
	// break;
	// }



