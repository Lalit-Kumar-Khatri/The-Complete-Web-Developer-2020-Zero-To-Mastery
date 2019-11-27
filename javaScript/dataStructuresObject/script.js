var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AAHHHH!!!");
    }
};

console.log(user);

// to access the values of  object 

console.log(user.name);
console.log(user.age);
console.log(user.hobby);
console.log(user.isMarried);
console.log(user.spells[1]);
console.log(user.shout());


//  to add properties in object

user.favoriteFoods = "Spinach";

console.log(user);
console.log(user.favoriteFoods);

// to change the value in object

user.isMarried = true;

console.log(user);
console.log(user.isMarried);

// An array of objects

var list = [
    {
        username: "Andy",
        password: "secret"
    },
    {
        username: "Jess",
        password: "123"
    }
];

console.log(list);

console.log(list[1].password);