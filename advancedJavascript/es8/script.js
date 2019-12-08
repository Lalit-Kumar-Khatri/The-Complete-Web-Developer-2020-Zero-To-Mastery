// String padding; padStart() and padEnd()

console.log('turtle'.padStart(10));

console.log('turtle'.padEnd(10));

// Trailing comas

const fun = (
            a,
            b,
            c,
            d,
            ) => {
    console.log(a);
}

fun(1, 2, 3, 4,);


//Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch' 
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

// Object.values 

Object.values(obj).forEach(value => {
    console.log(value);
})

// Object.entries

Object.entries(obj).forEach(value => {
    console.log(value);
})


Object.entries(obj).map((value)=>{
    return value[1] + value[0].replace('username', '') 
})
