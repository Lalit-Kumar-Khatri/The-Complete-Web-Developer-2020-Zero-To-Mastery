var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);


var numberList = [1, 2, 3, 4, 5];
console.log(numberList[3]);


var booleanList = [true, false];
console.log(booleanList[0]);


var functionList = [function apple (){
    console.log("Fruit")
}];

console.log(functionList);


var nestedArray = [
    ["Apple", "Grapes", "Oranges"]
]

console.log(nestedArray[0][2]);

// predefined methods; shift(), pop(), push(), concat() and sort()

var listOfAnimals = ["tiger", "cat", "bear", "bird"];
console.log(listOfAnimals.shift());
// "tiger" has been moved, first element

console.log(listOfAnimals.pop());
// poppped "bird" off of the end

console.log(listOfAnimals.push("elephant"));
// adds an element to the end "elephant"

console.log(listOfAnimals.concat(["bees", "deer"]));
// adds elements to the array

console.log(listOfAnimals.sort());
// sorts the list aphabetically, but original one

