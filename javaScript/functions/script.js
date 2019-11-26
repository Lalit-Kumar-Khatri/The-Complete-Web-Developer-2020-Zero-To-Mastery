// Arguments

console.log("Hello", "How are you!!");

// function declaration

function sayHello () {
    console.log("Hello11");
}

sayHello();                             //Calling the function


// function expression

var sayBye = function() {               //Anonymous function
    console.log("Bye");
}

sayBye();                               // Calling the function



// Function with arguments

function sing (song) {
    console.log(song);
}

sing("Sa Re Ga Ma Pa");
sing("La la la la la");


// Another example

function multiply(a, b){
    if(a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a * b;
    }
}

multiply(5, 10);                        // 50