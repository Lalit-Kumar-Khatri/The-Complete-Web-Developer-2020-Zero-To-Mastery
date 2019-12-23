// Object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
}

const { tiger, ...rest } = animals;

console.log(tiger);                  // 23
console.log(rest);                   // {lion: 5, monkey: 2}


// another example

const animals1 = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 20
}


function objectSpread (p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const { tiger, lion, ...rest} = animals1;

objectSpread(tiger, lion, rest);


// another example from ES6

const array = [1, 2, 3, 4, 5];
function sum (a, b, c, d, e) {
    return a + b + c + d + e;
}

sum (1, 2, 3, 4, 5);                // calling the function

sum(...array);                      // calling function with spread operator