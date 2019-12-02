// Ternary operator

condition ? expr1 : expr2

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

console.log(answer);

var automatedAnswer = 
"You account number is " + (isUserValid(false) ? "1234" : "not availabe");


// Switch Statement

function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}