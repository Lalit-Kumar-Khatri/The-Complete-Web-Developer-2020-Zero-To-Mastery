var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "bobby",
        timeline: "so tired of all that learning"
    },
    {
        username: "sally",
        timeline: "javascript is so cool" 
    }
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signIn(user, pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

console.log(signIn(userNamePrompt, passwordPrompt));