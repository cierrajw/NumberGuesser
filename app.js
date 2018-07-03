// function getRange(userMin, userMax){

// 	userMin = document.getElementById("rangemin").innerHTML;
// 	userMax = document.getElementById("rangemax").innerHTML;

// 	var minValue = parseInt(minNum.value);
// 	var maxValue = parseInt(maxNum.value);
 
// 	var range = userMax - userMin;

// 	return range;

// }

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