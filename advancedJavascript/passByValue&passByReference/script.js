//pass by value

var a = 5;
var b = a;

b++;

console.log(a);         //5
console.log(b);         //6


// pass by reference

let obj1 = {
    name: `Yao`,
    password: `123`
}

let obj2 = obj1;

obj2.password = `easypeasy`;

console.log(obj1);
console.log(obj2);                  //passwords updated


// another example
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(123455);

console.log(d);
console.log(c);                     //array modified


// shallow clone

let obj = {
    a: `a`,
    b: `b`
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.b = 5;

console.log(obj);                                      
console.log(clone);                  // cloned not affected
console.log(clone2);


// deep cloning

let obj2 = {
    a: `a`,
    b: `b`,
    c: {
        deep: `try and copy me`
    }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c.deep = `ha ha ha`;

console.log(obj2);                                      
console.log(clone);                  // cloning overridden
console.log(clone2);

let superClone = JSON.parse(JSON.stringify(obj2));

console.log(superClone);            // cloning not affected





