var answer1 = "STRETCHING";
var answer2 = "ELLIPTICAL";

function updateTransition() {
	var e1 = document.querySelector("div.bee");
	if (e1) {
		e1.className = "bee1";
	} else {
		e1 = document.querySelector("div.bee1");
		e1.className = "bee";
	}
	return e1;
}

var intervalID = window.setInterval(updateTransition, 8000);

$(function() {
	$("p").draggable({axis: "x"});
});

$("#button1").on("click", function() {
	$("#answer1").text("STRETCHING").fadeToggle(3000);
});

$("#button2").on("click", function() {
	$("#answer2").text("ELLIPTICAL").fadeToggle(3000);
});

$("#guess1").keypress(function(event) {
	if(event.which === 13) {
		var answer = $(this).val().toUpperCase();
		if (answer === answer1) {
			$("#result1").text("CORRECT!");
		} else {
			$("#result1").text("TRY AGAIN, PLEASE");
			$(this).val("");
			
		}
	} 
});

$("#guess2").keypress(function(event) {
	if(event.which === 13) {
		var answer = $(this).val().toUpperCase();
		if (answer === answer2) {
			$("#result2").text("CORRECT!");
		} else {
			$("#result2").text("TRY AGAIN, PLEASE");
			$(this).val("");
			$("result2").text("");
		}
	} 
});