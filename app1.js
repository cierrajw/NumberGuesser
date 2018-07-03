// function getRange(userMin, userMax){

// 	userMin = document.getElementById("rangemin").innerHTML;
// 	userMax = document.getElementById("rangemax").innerHTML;

// 	var minValue = parseInt(minNum.value);
// 	var maxValue = parseInt(maxNum.value);
 
// 	var range = userMax - userMin;

// 	return range;

// }

	var button = document.getElementById("submitButton");


button.addEventListener("click", function () {

	var theNumber = Math.floor((Math.random()* (101 - 1) + 1));

	var userGuess = document.getElementById("userGuess");

	var answer = parseInt(userGuess.value); 

	event.preventDefault();

	if((answer >= 1) && (answer <= 100)){

		document.getElementById("lastGuess").innerHTML = "Your last guess was";

		document.getElementById("output").innerHTML = answer;

	if(answer > theNumber){
		console.log("That is too high");
		document.getElementById("result").innerHTML = "That is too high";
	}
	else if (answer < theNumber){
		var toolow = "That is too low";
		console.log("That is too low");
		document.getElementById("result").innerHTML = "That is too low";
	}
	else{
		console.log("BOOM goes the dynamite!!!");
		document.getElementById("result").innerHTML = "BOOM goes the dynamite!!!";
		}
	}
	else{
		console.log("Please enter a number between 1 and 100");
		document.getElementById("result").innerHTML = "Please enter a number between 1 and 100";
	}
	console.log(answer);
});

// function resetValues(){

// 	reset = document.getElementById("resetButton").innerHTML;

// 	userGuess.reset();
// 	document.getElementById("lastGuess").reset();
// 	document.getElementById("output").reset();
// }

// reset.addEventListener("click", resetValues){

// }


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

