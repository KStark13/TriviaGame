// Start Menu- Player will click start and it will take you to the game.
//The timer will start counting down from 90 seconds.
//Player answers all questions (can only click on one answer per questions), and will click CALCULATE! when done.
//Game will end and the Done page will display with the score.

//Question Variables
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;


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
		start();
	});
	//User clicks CALCULATE before timer ends
	$("#donebutton").on("click", function(){
		$("#endcontainer").show();
		$("#gamecontainer").hide();
		scoreCount();
	});

	//TIMER
	//Timer variable
	var number = 120 
	//will hold our interval ID when we execute the 'start' function
	var intervalId;
	//When CALCULATE button is clicked, run the function
	
	
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
			$("#endcontainer").show();
			$("#gamecontainer").hide();
			scoreCount();

		}
	}
	console.log("Leaving decrement")

	function stop() {
		clearInterval(intervalId);		
	}
	
	
	//Check responses to questions
	function scoreCount(){
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "T.A.R.D.I.S."){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "K-9"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Exterminate!"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "blink"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Melody Pond"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "David Tennant"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Bad Wolf"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Gallifrey"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "Doctor"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}

		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Fish Fingers and Custard"){
			correctCount++;
		}
		else{
			incorrectCount++;
		}
	
	//Show score div and display the calculated scores
	$("#correctanswer").html(correctCount);
	$("#incorrectanswer").html(incorrectCount);
	$("#unanswered").html(unansweredCount);

	}



	

});
	