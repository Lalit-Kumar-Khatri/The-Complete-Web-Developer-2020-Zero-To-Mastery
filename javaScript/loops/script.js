// for loop

var todos = [
    "clean room", 
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosLength = todos.length;                     //making an empty array
for (var i=0; i < todosLength; i++){
    todos.pop();
}

// another example of adding exclamations mark to each item
// for (var i=0; i < todos.length; i++){
//    todos[i] = todos[i] + "!";       
// }



// forEach loop

todos.forEach(function(todo, i){
    console.log(todo, i);
})



// while loop

var counterOne = 0;

while (counterOne < 10) {
    console.log(counterOne);
    counterOne ++;
}

// do while loop

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);


