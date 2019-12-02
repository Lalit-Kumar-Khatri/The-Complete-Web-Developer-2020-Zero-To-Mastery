// Scope

// Root scope (windwo)
var fun = 5;

function funFunction() {
    // chid scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funnerFunction() {
    // chid scope
    var fun = "Bye";
    console.log(2, fun);
}

function funniestFunction() {
    // chid scope
    fun = "AHHH!!!";
    console.log(3, fun);
}

console.log("window", fun);

funFunction();
funnerFunction();
funniestFunction();
