
//Declaring a bunch of random global variables because I don't understand functional programming yet but I want to//


var button = document.querySelector("#submitButton");

userMin = document.querySelector("#rangemin").innerHTML;

userMax = document.querySelector("#rangemax").innerHTML;

setRange = document.querySelector("#setRange");

setRange.addEventListener('click', function(){

	userGuess.disabled = false;
	button.disabled = false;

	theMin = parseInt(userMin.value);
	theMax = parseInt(userMax.value);

	console.log("User min: " + theMin);
	console.log("User max: " + theMax);

})

function activateResetClear(){

	if(userGuess && userGuess.value){
	resetButton.disabled = false;
	clearButton.disabled = false;
	}

}

function buttonClick(){

	event.preventDefault();

	var userGuess = document.querySelector("#userGuess");

	var answer = parseInt(userGuess.value); 

	var theNumber = Math.floor((Math.random() * 101));

	document.querySelector("#lastGuess").innerHTML = "Your last guess was";

	document.querySelector("#output").innerHTML = answer;

	if((answer >= 1) && (answer <= 100)){

		if(answer > theNumber){
		console.log("That is too high");
		document.querySelector("#result").innerHTML = "That is too high";
		}
		else if (answer < theNumber){
		var toolow = "That is too low";
		console.log("That is too low");
		document.querySelector("#result").innerHTML = "That is too low";
		}
		else{
		console.log("BOOM goes the dynamite!!!");
		document.querySelector("#result").innerHTML = "BOOM goes the dynamite!!!";
		}

	}

	else{
		// console.log("Please enter a number between" + userMin.value + "and " + userMax.value);
		// document.querySelector("result").innerHTML = "Please enter a number between" + userMin.value + "and " + userMax.value;
		document.querySelector("#result").innerHTML = "Please enter a number between 1 and 100";
		}		

		console.log("Answer:" + answer);

}

button.addEventListener("click", buttonClick);



// function buttonClick(){

// event.preventDefault();

// var theNumber = Math.floor((Math.random() * 101));

// if((answer >= 1) && (answer <= 100)){

// document.getElementById("lastGuess").innerHTML = "Your last guess was";

// document.getElementById("output").innerHTML = answer;

// if(answer > theNumber){
// console.log("That is too high");
// document.getElementById("result").innerHTML = "That is too high";
// }
// else if (answer < theNumber){
// var toolow = "That is too low";
// console.log("That is too low");
// document.getElementById("result").innerHTML = "That is too low";
// }
// else{
// console.log("BOOM goes the dynamite!!!");
// document.getElementById("result").innerHTML = "BOOM goes the dynamite!!!";
// 	}
// }
// else{
// // console.log("Please enter a number between" + userMin.value + "and " + userMax.value);
// // document.getElementById("result").innerHTML = "Please enter a number between" + userMin.value + "and " + userMax.value;
// document.getElementById("result").innerHTML = "Please enter a number between 1 and 100";
// }
// // console.log("User range: " + userMin.value + "to " + userMax.value);

// console.log("Answer:" + answer);

// }



// var reset = document.getElementById("resetButton").value;

// var clear = document.getElementById("clearButton").value;


// function disableButtons(){

// if(answer == null){
// document.getElementById("resetButton").disabled = true;
// }
// else{
// document.getElementById("resetButton").disabled = false;
// }


// // document.getElementById("clearButton").value = true

// // clear.value.disabled = true;

// // if(answer != null){

// // buttonClick();
// // }
// // else{

// // reset.disabled = true;
// // clear.disabled = true;
// // }
// console.log("Reset button value: " + resetButton.value);
// }

// disableButtons();



//Creating an event on the submit button that will evaluate the user's answers (range, too high, too low, match, etc.)
// button.addEventListener("click", buttonClick);

// //Resetting all values/displays on the screen
// function resetValues(){

// reset = document.getElementById("resetButton").innerHTML;

// userGuess.reset();
// document.getElementById("lastGuess").reset();
// document.getElementById("output").reset();
// }

//Event for the reset button to reset values
// reset.addEventListener("click", resetValues){

// }




//-------------------------------- NOTES:---------------------------

// BAD CODE: var userGuess = parseInt(document.getElementById("userGuess")).value;

// can use document.querySelector("h1") can use h1 (selector) or #id or .class, etc.

//can change HTML input to make sure it's a number instead
// else if(theNumber == isNaN(userGuess)){
// alert("Please enter an actual number");
// return "Please enter an actual number";
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


