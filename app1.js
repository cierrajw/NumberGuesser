
	//Declaring a bunch of random global variables because I don't understand functional programming yet but I want to//


	var button = document.querySelector("#submitButton");
	var userMin = document.querySelector("#rangemin");
	var userMax = document.querySelector("#rangemax");
	var setRange = document.querySelector("#setRange");


	//anon function for setRange button//
	setRange.addEventListener('click', function(){

	var theMin = parseInt(userMin.value);
	var theMax = parseInt(userMax.value);

	userGuess.disabled = false;
	button.disabled = false;

	console.log("User min: " + theMin);
	console.log("User max: " + theMax);

	});

	function activateResetClear(){

	if(userGuess && userGuess.value){
	resetButton.disabled = false;
	clearButton.disabled = false;
		}

	}

	//anon submit button click event function//

	button.addEventListener("click", function(){

	event.preventDefault();

	var userGuess = document.querySelector("#userGuess");

	var answer = parseInt(userGuess.value); 

	var theMin = parseInt(userMin.value);

	var theMax = parseInt(userMax.value);

	var theNumber = Math.floor((Math.random() * (theMax - theMin) + theMin));
	console.log("The random number: " + theNumber);

	document.querySelector("#lastGuess").innerHTML = "Your last guess was";

	document.querySelector("#output").innerHTML = answer;

	if((answer >= theMin) && (answer <= theMax)){

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
		document.querySelector("#result").innerHTML = "Please enter a number between " + theMin + " and " + theMax;
		}		

		console.log("User guess:" + answer);
	});

	// function getRange(userMin, userMax){

// 	userMin = document.getElementById("rangemin").innerHTML;
// 	userMax = document.getElementById("rangemax").innerHTML;

// 	var minValue = parseInt(minNum.value);
// 	var maxValue = parseInt(maxNum.value);
 
// 	var range = userMax - userMin;

// 	return range;

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


