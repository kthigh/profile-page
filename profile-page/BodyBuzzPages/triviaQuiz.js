var scoreSpan = document.querySelector("#correct");
var score = 0;

$("#checkButton").on("click", function(){
	if($("input[type='radio']:checked").val() ==="right") {
		$("#feedback").text("Correct, you know this piece of fitness trivia!");		
	} else {
		$("#tryAgain").text("Try Again!").fadeIn();
		$("#tryAgain").fadeOut(3000);
	}
});

$("#next").on("click", function() {
	if($("input[type='radio']:checked").val() ==="right") {	
		score++;
		scoreSpan.textContent=score;
	}
	$(".question:first").fadeOut(1000);
	$(".question:first").remove();
	$("#feedback").text("");
	$(".question:first").fadeIn();
	
});

function updateTransition() {
	var e1 = document.querySelector(".balloon");
	if(e1) {
		e1.className = "balloon1";
	} else {
		e1 = document.querySelector(".balloon1");
		e1.className = "balloon";
	}

	return e1;
}

var intervalID = window.setInterval(updateTransition, 3000);
