// To select class name
console.log(document.getElementsByClassName("second"));


// To select an ID
console.log(document.getElementById("first"));


// To select a tag
console.log(document.getElementsByTagName("h1"));
console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li, h1"));


// To get attribute
console.log(document.querySelector("li").getAttribute("random"));


// To set an attribute
console.log(document.querySelector("li").setAttribute("random", "1000"));
console.log(document.querySelector("li"));


// To change style
console.log((document.querySelector("h1").style.background = "yellow"));

var h1 = document.querySelector("h1");
console.log(h1.className = "coolTitle");


//ClassList; classList.toggle
console.log(document.querySelector("li").classList);


// ClassList.add to add class
console.log(document.querySelector("li").classList.add("coolTitle"));


// ClassList.remove to remove class
console.log(document.querySelector("li").classList.remove("coolTitle"));
console.log(document.querySelector("li").classList.add("done"));


// ClassList.toggle to on and off
console.log(document.querySelector("li").classList.toggle("done"));


// inner HTML --- dangerous
console.log(document.querySelector("h1").innerHTML = "<strong>!!!!!</strong>");


// Parent element and children
console.log(document.querySelectorAll("li")[1].parentElement);
console.log(document.querySelectorAll("li")[1].parentElement.parentElement);
console.log(document.querySelectorAll("li")[1].parentElement.parentElement.children);