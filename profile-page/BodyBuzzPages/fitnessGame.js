var pickedImage;
var calories = document.querySelector("#calories");
var answer = document.querySelector("#answer");
var images = document.querySelectorAll("#container a");
var resetButton = document.querySelector("#reset");
var trivia = document.querySelector("#trivia");

var imageLoader2 = [
	"<img src='http://exerciseforwomenover50.net/wp-content/uploads/2014/05/11.jpg'>",
	"<img src='http://cdn3-www.afterellen.com/assets/uploads/2013/05/zumba.jpg'>",
	"<img src='http://thumbs.dreamstime.com/z/senior-woman-doing-fitness-23965924.jpg'>",
	"<img src='http://www.scitegic.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-1.19.58-AM.png'>",
	"<img src='http://i.dailymail.co.uk/i/pix/2015/01/17/15BE8C15000005DC-2914064-image-a-53_1421456159683.jpg'>",
	"<img src='https://www.daolu.co.uk/wp-content/uploads/2014/10/51.jpg'>"
];


var loadImages2 = function(){
	for(var i = 0; i < images.length; i++){
		images[i].innerHTML = imageLoader2[i];
	}
}

var reset = function(){
	loadImages2();
	pickedImage = images[Math.floor(Math.random() * images.length)];
	calories.textContent = pickedImage.id;
	answer.textContent = "";
}

var setImageListeners = function() {
	for(var i = 0; i < images.length; i++) {
		images[i].addEventListener("click", function(){
			if(this === pickedImage){
				answer.textContent = "You Guessed Correctly!";
				for(var i = 0; i<images.length; i++){
					images[i].innerHTML = pickedImage.innerHTML;
				}
			} else {
				answer.textContent = "Not that one, keep clicking!";
				this.innerHTML = "";

			}
		});
	}
}

reset();
setImageListeners();
resetButton.addEventListener("click", function(){
	reset();
});

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



