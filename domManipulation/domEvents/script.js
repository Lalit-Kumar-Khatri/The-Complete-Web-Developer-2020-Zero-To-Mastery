// var button = document.getElementsByTagName("button")[0];

// To listen click

// button.addEventListener("click", function(){
	// console.log("Clicked!!");
// });

// To listen mouse enters

// button.addEventListener("mouseenter", function(){
	// console.log("Clicked!!");
// });

// To listen when mouse leaves

// button.addEventListener("mouseleave", function(){
	// console.log("Clicked!!");
// });


// example for adding an list while entering and clicking

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement();	
	}
}

function addListAfterEnter (event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();	
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);


