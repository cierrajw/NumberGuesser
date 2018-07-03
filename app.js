// function getRange(userMin, userMax){

// 	userMin = document.getElementById("rangemin").innerHTML;
// 	userMax = document.getElementById("rangemax").innerHTML;

// 	var minValue = parseInt(minNum.value);
// 	var maxValue = parseInt(maxNum.value);
 
// 	var range = userMax - userMin;

// 	return range;

// }

	var button = document.querySelector('#submitButton');

	button.addEventListener("click", function () {

	var theNumber = Math.floor((Math.random()* (101 - 1) + 1));

	console.log("The random number: " + theNumber);

	var userGuess = document.querySelector('#userGuess');

	var answer = parseInt(userGuess.value); 

	event.preventDefault();

	if((answer >= 1) && (answer <= 100)){

		document.querySelector('#lastGuess').innerHTML = "Your last guess was";

		document.querySelector('#output').innerHTML = answer;

	if(answer > theNumber){
		console.log("That is too high");
		document.querySelector('#result').innerHTML = "That is too high";
	}
	else if (answer < theNumber){
		var toolow = "That is too low";
		console.log("That is too low");
		document.querySelector('#result').innerHTML = "That is too low";
	}
	else{
		console.log("BOOM goes the dynamite!!!");
		document.querySelector('#result').innerHTML = "BOOM goes the dynamite!!!";
		}
	}
	else{
		console.log("Please enter a number between 1 and 100");
		document.querySelector('#result').innerHTML = "Please enter a number between 1 and 100";
	}
	console.log(answer);
});
