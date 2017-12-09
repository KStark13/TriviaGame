// Start Menu- Player will click start and it will take you to the game.
//The timer will start counting down from 90 seconds.
//Player answers all questions (can only click on one answer per questions), and will click CALCULATE! when done.
//Game will end and the Done page will display with the score.

//Question Variables
var correctCount = 0;
var incorrectCount = 0;
var notAnswered = 0;


//GAME FUNCTIONS
$(document).ready(function(){

	//At beginning of the game hide the game and end container
	$("#gamecontainer").hide();
	$("#endcontainer").hide();

	//Click start button to start the game
	//Will hide start and end containers, and show game container
	//Calls start function
	$("#startbutton").on("click", function(){
		$("#gamecontainer").show();
		$("#startcontainer").hide();
		$("#endcontainer").hide();
		start();
	});

	//TIMER
	//Timer variable
	var number = 120 
	//will hold our interval ID when we execute the 'start' function
	var intervalId;
	//When CALCULATE button is clicked, run the function
	$("#donebutton").on("click", stop);
	
	//start function sets an interval that runs the decrement function
	function start() {
		intervalId = setInterval(decrement, 1000);
	}

	console.log("Entering decrement")
	function decrement() {
		number--;
		console.log("Number decremented to:" + number)
		//Show number in the timernumber tag
		$("#timernumber").html("<span>" + number + " seconds" + "</span>");
		//Once the number hits zero stop the start function,
		//show endcontainer, and hide the startcontainer and gamecontainer
		if (number === 0) {
			//Run stop function
			stop();

			$("#startcontainer").hide();
			$("#gamecontainer").hide();
			$("#endcontainer").show();
		}
	}
	console.log("Leaving decrement")

	function stop() {
		clearInterval(intervalId);
	}
	

	//Calculate score after the timer is up


	//Show score div and display the calculated scores





});
	