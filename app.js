// BAD CODE: var userGuess = parseInt(document.getElementById("userGuess")).value;

// can use document.querySelector("h1") can use h1 (selector) or #id or .class, etc.

var userGuess = document.getElementById("userGuess");

var button = document.getElementById("submitButton");

var theNumber = Math.floor((Math.random()*10) + 1);

console.log(theNumber);

// var tooHigh = "That is too high";
// var tooLow = "That is too low";

// document.getElementById("result").innerHTML = ;

// var displayGuess = document.getElementById("output").innerHTML;


button.addEventListener("click", function () {

	event.preventDefault ();

	var answer = parseInt(userGuess.value); 

	document.getElementById("output").innerHTML = answer;

	if((answer >= 1) && (answer <= 100)){

	if(answer > theNumber){
		console.log("That is too high");
	}
	else if (answer < theNumber){
		console.log("That is too low");
	}
	else{
		console.log("BOOM!!!");
		}
	}
	else{
		console.log("Please enter a number between 1 and 100");
	}
	// return answer;
	console.log(answer);
});





// button.addEventListener("click", function () {

// 	event.preventDefault ();

// 	var answer = parseInt(userGuess.value); 

// 	document.getElementById("output").innerHTML = answer;

// 	if((answer >= 1) && (answer <= 100)){

// 	if(answer === theNumber){
// 		console.log("BOOM!");

// 	}
// 	else if(answer > theNumber){
// 		console.log("That is too high");
// 	}
// 	else if (answer < theNumber){
// 		console.log("That is too low");
// 	}
// 	else{
// 		console.log("whateva");
// 		}
// 	}
// 	else{
// 		console.log("Please enter a number between 1 and 100");
// 	}
// 	// return answer;
// 	console.log(answer);

// });




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



