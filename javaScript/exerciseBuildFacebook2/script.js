var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
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

function isUserValid(username, password){
    for (var i=0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        } else {
            alert("Sorry, wrong username and password");
        }
    } return false;
}

function signIn(username, password){
    

    if( isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

signIn(userNamePrompt, passwordPrompt);