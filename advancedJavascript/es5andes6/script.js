// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
};

obj.wizardLevel = true;

console.log(obj);

// Destructuring

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

// with destructuring

const { player, experience } = obj;
let { wizardLevel } = obj;

// Declaring object properties

const name = 'john snow';

const obj1 = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hi hi'
}


// Template string

const name = "sally";
const age = 34;
const pet = "hosrse";

const greetings = `Hello ${name} you seem to be doing ${age-10}. What a lovely pet ${pet} you have.`

// default arguments

function greet(name='', age='30', pet='cat') {
    return `Hello ${name} you seem to be doing ${age-10}. What a lovely pet ${pet} you have.`
}

greet();

// symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// Arrow functions

const add = (a, b) => a =b;
