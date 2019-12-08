const basket = [
    'apples',
    'oranges',
    'grapes'
];

// for loop

for (let i = basket; i < basket.length; i++) {
    console.log(basket[i]);
}


// forEach loop

basket.forEach(item => {
    console.log(item);
});


// for of loop  --- iterating -- arrays and strings

// iterating over array

for (item of basket) {
    console.log(item);
}

// iterating over string

for (item of 'basket') {
    console.log(item);
}


// for in loop -- over object properties
// enumerating -- objects

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for (item in detailedBasket) {
    console.log(item);
}