	//Declaring a bunch of random global variables because I don't understand functional programming yet but I want to//


	var button = document.querySelector("#submitButton");

	var userMin = document.querySelector("#rangemin");
	var userMax = document.querySelector("#rangemax");

	setRange = document.querySelector("#setRange");

	//anon function for setRange button//

	function userRange(){
	var theMin = parseInt(userMin.value);
	var theMax = parseInt(userMax.value);

	userGuess.disabled = false;
	button.disabled = false;

	console.log("User min: " + theMin);
	console.log("User max: " + theMax);

	}

	setRange.addEventListener('click', userRange);

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

	var theMin = parseInt(userMin.value);

	var theMax = parseInt(userMax.value);

	var theNumber = Math.floor((Math.random() * (theMax - theMin) + theMin));
	console.log(theNumber);

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
		// console.log("Please enter a number between" + userMin.value + "and " + userMax.value);
		// document.querySelector("result").innerHTML = "Please enter a number between" + userMin.value + "and " + userMax.value;
		document.querySelector("#result").innerHTML = "Please enter a number between " + theMin + "and " + theMax;
		}		

		console.log("Answer:" + answer);
	}

	button.addEventListener("click", buttonClick);